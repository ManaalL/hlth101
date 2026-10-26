/* Pulse: the HLTH 101 study guide. A dot tracing a heartbeat line, in the corner.
   Drag it anywhere. Tap it to ask about a term, get quizzed, or see what to study next.
   Works offline from studydata.js. Optional: a Claude API key stored only in this browser. */
(function(){
"use strict";
if(!window.H) return;
const {esc,$,$$}=H;
const css=`
.pulse-btn{position:fixed;right:18px;bottom:18px;z-index:60;width:66px;height:66px;border-radius:16px;background:var(--paper);border:1px solid var(--rule);box-shadow:0 12px 30px -14px var(--shadow);cursor:grab;touch-action:none;display:grid;place-items:center;padding:0}
.pulse-btn:active{cursor:grabbing}
.pulse-btn svg{display:block}
.pulse-btn .tag{position:absolute;bottom:-9px;left:50%;transform:translateX(-50%);font:500 .6rem var(--mono);letter-spacing:.08em;text-transform:uppercase;background:var(--paper);border:1px solid var(--rule);border-radius:4px;padding:1px 5px;color:var(--accent)}
.pulse-panel{position:fixed;right:18px;bottom:96px;z-index:61;width:min(400px,calc(100vw - 24px));max-height:min(620px,calc(100vh - 120px));display:none;flex-direction:column;background:var(--paper);border:1px solid var(--rule);border-radius:12px;box-shadow:0 24px 50px -20px var(--shadow);overflow:hidden}
.pulse-panel.open{display:flex}
.pulse-head{display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid var(--rule)}
.pulse-head b{font-family:var(--display);color:var(--head);font-size:1.05rem}
.pulse-head button{margin-left:auto;background:none;border:0;cursor:pointer;color:var(--ink2);font-size:1.3rem;line-height:1}
.pulse-log{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:10px;font-size:.95rem}
.pm{max-width:92%;padding:8px 11px;border-radius:10px;line-height:1.45}
.pm.me{align-self:flex-end;background:var(--accentSoft);color:var(--ink)}
.pm.bot{align-self:flex-start;background:var(--chip)}
.pm .src{display:inline}
.pulse-quick{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px 0}
.pulse-quick button{border:1px solid var(--rule);background:var(--paper);border-radius:14px;padding:3px 10px;font-size:.84rem;cursor:pointer;color:var(--ink)}
.pulse-quick button:hover{border-color:var(--accent)}
.pulse-in{display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--rule);margin-top:8px}
.pulse-in input{flex:1;padding:8px 10px;border-radius:8px;border:1px solid var(--rule);background:var(--paper);color:var(--ink);font:inherit;min-width:0}
@media (max-width:600px){ .pulse-panel{right:12px;left:12px;width:auto;bottom:90px} }
@keyframes pulseBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
`;
const st=document.createElement("style"); st.textContent=css; document.head.appendChild(st);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const ECG="M4 34 H16 L19 30 L22 34 H26 L29 38 L33 12 L37 44 L40 34 H45 L49 29 L54 34 H62";
const svg=`<svg width="58" height="46" viewBox="0 0 66 50" aria-hidden="true"><path d="M2 40 H64" stroke="var(--grid)" stroke-width="1"/><path id="pulsePath" d="${ECG}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity=".85"/><circle r="3.6" fill="var(--accent)"${reduce?' cx="33" cy="12"':""}>${reduce?"":`<animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#pulsePath"/></animateMotion>`}</circle></svg>`;
const btn=document.createElement("button"); btn.className="pulse-btn"; btn.type="button"; btn.setAttribute("aria-label","Open Pulse, the study guide"); btn.innerHTML=svg+`<span class="tag">Pulse</span>`;
const panel=document.createElement("div"); panel.className="pulse-panel"; panel.setAttribute("role","dialog"); panel.setAttribute("aria-label","Pulse study guide");
panel.innerHTML=`<div class="pulse-head">${svg.replace('width="58" height="46"','width="34" height="26"').replace('id="pulsePath"','id="pulsePath2"').replace("#pulsePath","#pulsePath2")}<div><b>Pulse</b><div class="mono" style="font-size:.62rem">study guide · works offline</div></div><button aria-label="Close">×</button></div>
<div class="pulse-log" aria-live="polite"></div>
<div class="pulse-quick"><button data-q="next">What should I study next?</button><button data-q="quiz">Quiz me</button><button data-q="weak">Quiz my weakest week</button><button data-q="key">Claude key</button></div>
<div class="pulse-in"><input placeholder="Ask about any term or idea" aria-label="Ask Pulse"><button class="btn sm">Ask</button></div>`;
document.body.append(btn,panel);
const log=$(".pulse-log",panel), input=$(".pulse-in input",panel);

/* position + drag */
const pos=H.get("guide",{}); if(pos.x!=null){ btn.style.left=Math.min(pos.x,innerWidth-70)+"px"; btn.style.top=Math.min(pos.y,innerHeight-70)+"px"; btn.style.right="auto"; btn.style.bottom="auto"; }
let d=null;
btn.addEventListener("pointerdown",e=>{ const r=btn.getBoundingClientRect(); d={x:e.clientX,y:e.clientY,ox:e.clientX-r.left,oy:e.clientY-r.top,moved:false}; btn.setPointerCapture(e.pointerId); });
btn.addEventListener("pointermove",e=>{ if(!d) return; if(!d.moved&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<6) return; d.moved=true;
  const x=Math.max(4,Math.min(innerWidth-70,e.clientX-d.ox)), y=Math.max(4,Math.min(innerHeight-70,e.clientY-d.oy)); btn.style.left=x+"px"; btn.style.top=y+"px"; btn.style.right="auto"; btn.style.bottom="auto"; });
btn.addEventListener("pointerup",()=>{ if(!d) return; const moved=d.moved; d=null; if(moved){ const r=btn.getBoundingClientRect(); H.set("guide",{x:r.left,y:r.top}); } else toggle(); });
btn.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); } });
$(".pulse-head button",panel).onclick=()=>toggle(false);
function toggle(on){ const o=on==null?!panel.classList.contains("open"):on; panel.classList.toggle("open",o); if(o){ if(!log.children.length) greet(); setTimeout(()=>input.focus(),50); } }
window.PULSE={open:()=>toggle(true)};

function say(html,who="bot"){ const m=document.createElement("div"); m.className="pm "+who; m.innerHTML=html; log.append(m); log.scrollTop=log.scrollHeight; return m; }
function greet(){ const c=H.countdown(); say(`Hi, I'm Pulse. Ask me about any term from Weeks 1 to 5, or tap a button below.${c?` Exam 1 is in <b>${H.countText()}</b>.`:""}`); }

/* offline search over terms, chapters and review answers */
const STOP=new Set("a an the is are was were be of to in on for and or what whats what's how why who does do did with by as at from that this it its vs versus between difference define definition meaning mean means explain tell me about give example examples".split(" "));
const toks=s=>String(s).toLowerCase().replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(w=>w&&!STOP.has(w));
function search(q){
  const qt=toks(q), ql=q.toLowerCase().trim(); if(!qt.length) return [];
  const res=[];
  Object.values(H.T).forEach(t=>{ const nm=t.term.toLowerCase(); let s=0; if(ql.includes(nm)&&nm.length>3) s+=12; const nt=toks(nm); qt.forEach(w=>{ if(nt.includes(w)) s+=4; else if(nt.some(x=>x.startsWith(w)&&w.length>3)) s+=2; if(toks(t.def).includes(w)) s+=1; }); if(nt.length&&nt.every(x=>qt.includes(x))) s+=5; if(s>3) res.push({k:"term",s,t}); });
  Object.values(H.CH).forEach(c=>{ const tt=toks(c.title), lt=toks(c.learn.replace(/<[^>]+>/g," ")); let s=0; qt.forEach(w=>{ if(tt.includes(w)) s+=2; s+=Math.min(2,lt.filter(x=>x===w).length*.5); }); if(s>2.5) res.push({k:"ch",s,c}); });
  return res.sort((a,b)=>b.s-a.s);
}
const termHTML=t=>`<b>${esc(t.term)}</b>: ${esc(t.def)}${t.ex?` <i>Example: ${esc(t.ex)}</i>`:""}<br><span class="src">${esc(t.src||"")}</span>${t.ch?` · <a href="${H.chLink(t.ch)}">open chapter</a>`:""}`;
function offline(q){
  const r=search(q); const terms=r.filter(x=>x.k==="term"), chs=r.filter(x=>x.k==="ch");
  if(!r.length) return {html:`I couldn't find that in the Weeks 1 to 5 slides. Try a shorter phrase, like a single term ("odds ratio", "allostatic load").`,ctx:[]};
  let h=""; if(terms[0]) h+=termHTML(terms[0].t);
  const more=terms.slice(1,3).filter(x=>x.s>=terms[0].s*.5); if(more.length) h+=`<br><br>Related: ${more.map(x=>`<b>${esc(x.t.term)}</b>`).join(", ")}.`;
  if(chs[0]) h+=`${h?"<br><br>":""}Covered in <a href="${H.chLink(chs[0].c.id)}">${esc(H.chName(chs[0].c.id))}</a> <span class="src">${esc(chs[0].c.src||"")}</span>.`;
  return {html:h,ctx:r.slice(0,8)};
}
function nextHTML(){
  const p=H.studyPlan(); const w=p.weak.slice(0,3), u=p.untried.slice(0,3);
  if(!w.length&&!u.length) return "You've tried everything and nothing is below 80%. Take the timed practice midterm on the Midterm prep page.";
  let h=""; if(w.length) h+=`Weakest so far:<ol>${w.map(x=>`<li><a href="${H.chLink(x.c.id)}">${esc(H.chName(x.c.id))}</a> (${Math.round(x.score*100)}%)</li>`).join("")}</ol>`;
  if(u.length) h+=`${h?"":"You haven't started these yet:"}${h?"Not started yet:":""}<ul>${u.map(x=>`<li><a href="${H.chLink(x.c.id)}">${esc(H.chName(x.c.id))}</a></li>`).join("")}</ul>`;
  if(!(H.get("exam",{}).diag)) h+=`Fastest way to find your gaps: the <a href="midterm.html#plan">25-question diagnostic</a>.`;
  return h;
}
function quiz(weak){
  let pool=H.bank(); if(weak){ const {byU}=H.accuracy(); const t=Object.entries(byU).filter(x=>x[1].r+x[1].w).sort((a,b)=>a[1].r/(a[1].r+a[1].w)-b[1].r/(b[1].r+b[1].w)); if(t.length) pool=H.bank([t[0][0]]); }
  if(!pool.length) return say("No questions loaded.");
  const q=pool[Math.floor(Math.random()*pool.length)]; const m=say(""); H.mcq(m,q,{label:`Week ${H.unit(q.unit).n} · ${H.unit(q.unit).short}`}); log.scrollTop=log.scrollHeight;
}
async function claude(q,ctx){
  const key=H.raw.get("apikey",""); if(!key) return null;
  const notes=ctx.map(x=>x.k==="term"?`TERM ${x.t.term} (${x.t.src}): ${x.t.def}${x.t.ex?" Example: "+x.t.ex:""}`:`CHAPTER ${x.c.title} (${x.c.src}): ${x.c.learn.replace(/<[^>]+>/g," ")}`).join("\n");
  const system="You are Pulse, a study guide for HLTH 101 (Introduction to Health 1, University of Waterloo, Dr. Diane Williams). Answer only from the course notes provided. If the notes do not cover the question, say so plainly. Keep answers short (under 120 words), plain and direct, with no em dashes. End with the slide source in brackets.";
  try{ const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
    body:JSON.stringify({model:H.raw.get("model","claude-haiku-5-5"),max_tokens:500,system,messages:[{role:"user",content:`Course notes:\n${notes||"(none found)"}\n\nQuestion: ${q}`}]})});
    const j=await r.json(); if(!r.ok) return `Claude error: ${esc((j.error&&j.error.message)||r.status)}`; return esc(j.content.map(c=>c.text||"").join("")).replace(/\n/g,"<br>"); }catch(e){ return "Couldn't reach Claude. Offline answer above."; }
}
function keyUI(){ const has=!!H.raw.get("apikey",""); const m=say(`Optional: paste a Claude API key and I'll answer in my own words, still using only the course notes. The key stays in this browser only.<div class="pulse-in" style="border:0;padding:8px 0 0;margin:0"><input type="password" placeholder="${has?"key saved":"sk-ant-..."}" aria-label="Claude API key"><button class="btn sm">Save</button></div>${has?`<button class="flag" style="margin-top:6px">Remove saved key</button>`:""}`);
  $("button.btn",m).onclick=()=>{ const v=$("input",m).value.trim(); if(v){ H.raw.set("apikey",v); say("Saved. Ask me anything."); } };
  const rm=$("button.flag",m); if(rm) rm.onclick=()=>{ H.raw.del("apikey"); say("Key removed."); }; }
async function ask(q){
  q=q.trim(); if(!q) return; say(esc(q),"me"); input.value="";
  if(/^(quiz|test) me/i.test(q)) return quiz(false);
  if(/study next|what should i|weak/i.test(q)) return say(nextHTML());
  const o=offline(q); say(o.html);
  if(H.raw.get("apikey","")){ const m=say("<i>Asking Claude...</i>"); const a=await claude(q,o.ctx); m.innerHTML=a||""; }
}
$$(".pulse-quick button",panel).forEach(b=>b.onclick=()=>{ const k=b.dataset.q; if(k==="next"){ say("What should I study next?","me"); say(nextHTML()); } else if(k==="quiz") quiz(false); else if(k==="weak") quiz(true); else keyUI(); });
$(".pulse-in .btn",panel).onclick=()=>ask(input.value);
input.addEventListener("keydown",e=>{ if(e.key==="Enter") ask(input.value); });
})();
