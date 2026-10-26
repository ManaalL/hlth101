/* HLTH 101 Interactive: activities (mcq, sort, order, match, compare, table, label), the exam engine and endless practice. */
(function(){
"use strict";
const {esc,shuffle,$,$$}=H;

/* ---------- tap or drag placement ----------
   chips: .chipc[data-k]; targets: [data-drop]. Tap a chip, then tap a target. Or drag the chip onto the target. */
H.dnd=(root,onPlace,onTapTarget)=>{
  let sel=null, drag=null, lastDrag=0;
  const clear=()=>{ $$(".chipc.sel",root).forEach(c=>c.classList.remove("sel")); sel=null; };
  root.addEventListener("pointerdown",e=>{
    const chip=e.target.closest(".chipc[data-k]"); if(!chip||!root.contains(chip)||chip.disabled) return;
    drag={chip,x:e.clientX,y:e.clientY,moved:false,ghost:null,pid:e.pointerId};
  });
  window.addEventListener("pointermove",e=>{
    if(!drag) return; const dx=e.clientX-drag.x, dy=e.clientY-drag.y;
    if(!drag.moved && Math.hypot(dx,dy)>7){ drag.moved=true; drag.ghost=drag.chip.cloneNode(true); drag.ghost.classList.add("ghost-drag"); drag.ghost.style.width=drag.chip.offsetWidth+"px"; document.body.appendChild(drag.ghost); }
    if(drag.moved){ e.preventDefault(); drag.ghost.style.left=e.clientX+"px"; drag.ghost.style.top=e.clientY+"px";
      $$(".drop",root).forEach(d=>d.classList.remove("drop")); const t=document.elementFromPoint(e.clientX,e.clientY); const d=t&&t.closest("[data-drop]"); if(d&&root.contains(d)) d.classList.add("drop"); }
  },{passive:false});
  window.addEventListener("pointerup",e=>{
    if(!drag) return; const d=drag; drag=null;
    if(d.moved){ lastDrag=Date.now(); d.ghost.remove(); $$(".drop",root).forEach(x=>x.classList.remove("drop"));
      const t=document.elementFromPoint(e.clientX,e.clientY); const tg=t&&t.closest("[data-drop]");
      if(tg&&root.contains(tg)){ clear(); onPlace(d.chip.dataset.k,tg.dataset.drop); }
      return; }
    const was=d.chip.classList.contains("sel"); clear(); if(!was){ d.chip.classList.add("sel"); sel=d.chip.dataset.k; }
  });
  root.addEventListener("click",e=>{
    if(Date.now()-lastDrag<400) return;
    if(e.target.closest(".chipc")) return;
    const tg=e.target.closest("[data-drop]"); if(!tg||!root.contains(tg)) return;
    if(sel){ const k=sel; clear(); onPlace(k,tg.dataset.drop); }
    else if(onTapTarget) onTapTarget(tg.dataset.drop);
  });
  root.addEventListener("keydown",e=>{ if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-drop]")){ e.preventDefault(); e.target.click(); } });
};

/* ---------- single MCQ with instant feedback ---------- */
H.mcq=(el,q,{onAnswer,color,showSrc=true,label}={})=>{
  const opts=shuffle(q.opts.map((o,i)=>({o,i})));
  el.innerHTML=`${label?`<div class="kicker">${esc(label)}</div>`:""}${q.case?`<div class="case">${esc(q.case)}</div>`:""}<div class="q">${esc(q.q)}</div><div class="opts">${opts.map(({o,i})=>`<button class="opt" data-i="${i}">${esc(o[0])}</button>`).join("")}</div><div class="fbx"></div>`;
  let done=false;
  $$(".opt",el).forEach(b=>b.addEventListener("click",()=>{
    if(done) return; done=true; const pick=q.opts[+b.dataset.i], right=q.opts.find(o=>o[1]);
    $$(".opt",el).forEach(x=>{ x.disabled=true; if(q.opts[+x.dataset.i][1]) x.classList.add("right"); }); if(!pick[1]) b.classList.add("wrong");
    $(".fbx",el).innerHTML=`<div class="fb ${pick[1]?"ok":"bad"}"><b>${pick[1]?"Correct.":"Not quite."}</b>${!pick[1]&&pick[2]?esc(pick[2])+" ":""}${esc(right[2]||"")}${showSrc&&q.src?` <span class="src">${esc(q.src)}</span>`:""}</div>`;
    if(q.id) H.record(q.id,!!pick[1]);
    onAnswer&&onAnswer(!!pick[1]);
  }));
};

/* ---------- step renderers: each calls done(score,total) once, on first check ---------- */
const R={};
R.mcq=(el,s,done)=>H.mcq(el,s,{onAnswer:ok=>done(ok?1:0,1)});

R.sort=(el,s,done)=>{
  const items=shuffle(s.items.map((it,i)=>({k:"i"+i,t:it[0],bin:it[1],why:it[2]})));
  const place={}; let checked=false, first=true, states={};
  function render(){
    const chip=it=>`<button class="chipc ${states[it.k]||""}" data-k="${it.k}" ${checked&&states[it.k]==="right"?"disabled":""}>${esc(it.t)}${states[it.k]==="wrong"&&it.why?`<span class="why">${esc(it.why)}</span>`:""}</button>`;
    el.innerHTML=`<div class="kicker">Sort</div><div class="q">${esc(s.prompt)}</div><div class="pool" data-drop="pool">${items.filter(it=>place[it.k]==null).map(chip).join("")||'<span class="muted small">All placed.</span>'}</div>
      <div class="bins">${s.bins.map((b,bi)=>`<div class="bin" data-drop="${bi}" tabindex="0"><h4>${esc(b)}</h4>${items.filter(it=>place[it.k]===bi).map(chip).join("")}</div>`).join("")}</div>
      <div class="row"><button class="btn sm chk" ${items.every(it=>place[it.k]!=null)?"":"disabled"}>Check</button><span class="muted small res"></span></div>`;
    $(".chk",el).onclick=check; if(checked) $(".res",el).textContent=resText;
  }
  let resText="";
  function check(){
    let r=0; items.forEach(it=>{ const ok=place[it.k]===it.bin; states[it.k]=ok?"right":"wrong"; if(ok) r++; });
    if(first){ first=false; done(r,items.length); }
    resText=r===items.length?`All ${r} right.`:`${r} of ${items.length} right. Wrong ones show why; move them and check again.`;
    checked=true; render();
    items.forEach(it=>{ if(states[it.k]==="wrong"){ /* leave in place so the why shows; moving it clears state */ } });
  }
  H.dnd(el,(k,t)=>{ if(states[k]==="right"&&checked) return; delete states[k]; place[k]=t==="pool"?null:+t; render(); });
  render();
};

R.order=(el,s,done)=>{
  const items=s.items.map((t,i)=>({k:"i"+i,t,i})); const pool=shuffle(items); const slot=Array(items.length).fill(null); let states={}, first=true, msg="";
  function render(){
    el.innerHTML=`<div class="kicker">Put in order</div><div class="q">${esc(s.prompt)}</div><div class="pool" data-drop="pool">${pool.filter(it=>!slot.includes(it.k)).map(it=>`<button class="chipc" data-k="${it.k}">${esc(it.t)}</button>`).join("")||'<span class="muted small">All placed. Tap a slot to take an item back.</span>'}</div>
    <div class="olist">${slot.map((k,i)=>{ const it=items.find(x=>x.k===k); return `<div class="slotc ${k?"filled":""} ${states[i]||""}" data-drop="${i}" tabindex="0"><span class="n">${i+1}</span>${it?`<span class="chipc" data-k="${it.k}" style="border:0;padding:0;background:none">${esc(it.t)}</span>`:'<span class="muted small">tap an item, then here</span>'}</div>`; }).join("")}</div>
    <div class="row"><button class="btn sm chk" ${slot.every(Boolean)?"":"disabled"}>Check</button></div><div class="fbx">${msg}</div>`;
    $(".chk",el).onclick=check;
  }
  function check(){ let r=0; slot.forEach((k,i)=>{ const ok=k==="i"+i; states[i]=ok?"right":"wrong"; if(ok) r++; });
    if(first){ first=false; done(r,items.length); }
    msg=`<div class="fb ${r===items.length?"ok":"bad"}"><b>${r===items.length?"All in order.":`${r} of ${items.length} in the right place.`}</b>${r===items.length?esc(s.why||""):"Tap a red slot to take that item back and try again."}${r===items.length&&s.src?` <span class="src">${esc(s.src)}</span>`:""}</div>`; render(); }
  H.dnd(el,(k,t)=>{ const cur=slot.indexOf(k); if(cur>=0){ slot[cur]=null; delete states[cur]; }
      if(t!=="pool"){ const i=+t; if(slot[i]) { /* swap back to pool */ } slot[i]=k; delete states[i]; } msg=""; render(); },
    t=>{ if(t==="pool") return; const i=+t; if(slot[i]){ slot[i]=null; delete states[i]; msg=""; render(); } });
  render();
};

R.match=(el,s,done)=>{
  const pairs=s.pairs.map((p,i)=>({k:"r"+i,l:p[0],r:p[1],i})); const rights=shuffle(pairs); const slot=Array(pairs.length).fill(null); let states={}, first=true, msg="";
  function render(){
    el.innerHTML=`<div class="kicker">Match</div><div class="q">${esc(s.prompt)}</div><div class="pool" data-drop="pool">${rights.filter(p=>!slot.includes(p.k)).map(p=>`<button class="chipc" data-k="${p.k}">${esc(p.r)}</button>`).join("")||'<span class="muted small">All matched.</span>'}</div>
    <div class="mgrid">${pairs.map((p,i)=>{ const it=pairs.find(x=>x.k===slot[i]); return `<div class="mleft">${esc(p.l)}</div><div class="slotc ${it?"filled":""} ${states[i]||""}" data-drop="${i}" tabindex="0">${it?esc(it.r):'<span class="muted small">drop the match here</span>'}</div>`; }).join("")}</div>
    <div class="row"><button class="btn sm chk" ${slot.every(Boolean)?"":"disabled"}>Check</button></div><div class="fbx">${msg}</div>`;
    $(".chk",el).onclick=check;
  }
  function check(){ let r=0; slot.forEach((k,i)=>{ const ok=k==="r"+i; states[i]=ok?"right":"wrong"; if(ok) r++; });
    if(first){ first=false; done(r,pairs.length); }
    msg=`<div class="fb ${r===pairs.length?"ok":"bad"}"><b>${r===pairs.length?"All matched.":`${r} of ${pairs.length} right.`}</b>${r===pairs.length?"":"Tap a red box to send it back, then try again."}${s.src?` <span class="src">${esc(s.src)}</span>`:""}</div>`; render(); }
  H.dnd(el,(k,t)=>{ const cur=slot.indexOf(k); if(cur>=0){ slot[cur]=null; delete states[cur]; } if(t!=="pool"){ slot[+t]=k; delete states[+t]; } msg=""; render(); },
    t=>{ if(t==="pool") return; const i=+t; if(slot[i]){ slot[i]=null; delete states[i]; msg=""; render(); } });
  render();
};

R.compare=(el,s,done)=>{
  const sc=s.scenarios.map((x,i)=>({t:x[0],a:x[1],why:x[2],i})); let right=0, answered=0;
  el.innerHTML=`<div class="kicker">Compare, then decide</div><div class="q">${esc(s.prompt)}</div><div class="cmp">${[s.a,s.b].map(c=>`<div><h4>${esc(c.name)}</h4><ul>${(c.points||[]).map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}</div>
    ${sc.map(x=>`<div class="scen" data-i="${x.i}"><div>${esc(x.t)}</div><div class="row"><button class="btn sm ghost" data-v="0">${esc(s.a.name)}</button><button class="btn sm ghost" data-v="1">${esc(s.b.name)}</button></div><div class="fbx"></div></div>`).join("")}`;
  $$(".scen",el).forEach(d=>{ const x=sc[+d.dataset.i]; $$("button",d).forEach(b=>b.onclick=()=>{
    $$("button",d).forEach(z=>z.disabled=true); const ok=+b.dataset.v===x.a; answered++; if(ok) right++;
    $(".fbx",d).innerHTML=`<div class="fb ${ok?"ok":"bad"}"><b>${ok?"Correct.":"Not quite. It is "+esc(x.a?s.b.name:s.a.name)+"."}</b>${esc(x.why||"")}</div>`;
    if(answered===sc.length) done(right,sc.length); }); });
};

R.table=(el,s,done)=>{
  el.innerHTML=`<div class="kicker">Read the data</div><div class="q">${esc(s.prompt||"")}</div><div class="tbl"><table>${s.caption?`<caption>${esc(s.caption)}</caption>`:""}<thead><tr>${s.head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${s.src?`<div class="src">${esc(s.src)}</div>`:""}<div class="tq"></div>`;
  const qs=s.qs||[]; let r=0,n=0; if(!qs.length) return done(1,1);
  qs.forEach(q=>{ const d=document.createElement("div"); d.className="ex-q"; $(".tq",el).append(d); H.mcq(d,q,{onAnswer:ok=>{ n++; if(ok) r++; if(n===qs.length) done(r,qs.length); }}); });
};

R.label=(el,s,done,ctx)=>{
  const f=H.FIG[s.fig]; const keys=Object.keys(f.slots); const labels=(ctx&&ctx.labels)||{}; const lab=k=>labels[k]||f.labels[k];
  const chips=shuffle(keys); const filled={}; let states={}, first=true, msg="";
  function render(){
    const fv={}; Object.entries(filled).forEach(([slotK,chipK])=>fv[slotK]=lab(chipK));
    el.innerHTML=`<div class="kicker">Label the figure</div><div class="q">${esc(s.prompt||"Drag each label onto its place in the figure.")}</div>
      <div class="pool" data-drop="pool">${chips.filter(k=>!Object.values(filled).includes(k)).map(k=>`<button class="chipc" data-k="${k}">${esc(lab(k))}</button>`).join("")||'<span class="muted small">All placed. Tap a box to take a label back.</span>'}</div>
      <figure class="plate">${H.figSVG(s.fig,{mode:"label",filled:fv,states,color:ctx&&ctx.color})}<figcaption><b>Fig.</b> ${esc(f.caption)}</figcaption></figure>
      <div class="row" style="margin-top:10px"><button class="btn sm chk" ${keys.every(k=>filled[k])?"":"disabled"}>Check</button></div><div class="fbx">${msg}</div>`;
    $(".chk",el).onclick=check;
  }
  function check(){ let r=0; keys.forEach(k=>{ const ok=filled[k]===k; states[k]=ok?"right":"wrong"; if(ok) r++; });
    if(first){ first=false; done(r,keys.length); }
    msg=`<div class="fb ${r===keys.length?"ok":"bad"}"><b>${r===keys.length?"Every label is in place.":`${r} of ${keys.length} right.`}</b>${r===keys.length?"":"Tap a red box to take the label back."}${s.src?` <span class="src">${esc(s.src)}</span>`:""}</div>`; render(); }
  H.dnd(el,(k,t)=>{ Object.keys(filled).forEach(s2=>{ if(filled[s2]===k){ delete filled[s2]; delete states[s2]; } }); if(t!=="pool"){ filled[t]=k; delete states[t]; } msg=""; render(); },
    t=>{ if(t==="pool") return; if(filled[t]){ delete filled[t]; delete states[t]; msg=""; render(); } });
  render();
};
H.renderStep=(el,s,done,ctx)=>{ (R[s.type]||((e)=>{ e.textContent="Unknown activity."; done(0,0); }))(el,s,done,ctx); };

/* ---------- exam engine ----------
   H.exam(el, questions, {scope, title, minutes, groupBy:"ch"|"unit", onFinish}) */
H.exam=(el,qs,o={})=>{
  const order=qs.map(q=>({q,opts:shuffle(q.opts.map((x,i)=>i))})); const ans={}; const flags={}; let t0=Date.now(), timer=null;
  el.innerHTML=`<div class="card"><div class="row" style="justify-content:space-between"><div><div class="kicker">${esc(o.kicker||"Mini exam")}</div><h2 style="margin:0">${esc(o.title||"Mini exam")}</h2></div>${o.minutes?`<div class="timer" aria-live="polite"></div>`:""}</div>
    <p class="muted small" style="margin-top:6px">${qs.length} questions. No feedback until you submit.${o.minutes?` Timer: ${o.minutes} minutes (the real exam is 45 questions in 60 minutes).`:""} Answered: <b class="cnt">0</b>/${qs.length}</p>
    <div class="qs"></div><div class="row" style="margin-top:12px"><button class="btn sub">Submit and see results</button></div></div>`;
  const box=$(".qs",el);
  order.forEach(({q,opts},n)=>{ const d=document.createElement("div"); d.className="ex-q"; d.innerHTML=`<div class="row" style="justify-content:space-between"><span class="mono">Q${n+1}${o.groupBy==="unit"?" · "+esc(H.unit(q.unit).short):""}</span><button class="flag" aria-pressed="false">Flag</button></div>${q.case?`<div class="case">${esc(q.case)}</div>`:""}<div class="q">${esc(q.q)}</div><div class="opts">${opts.map(i=>`<button class="opt" data-i="${i}">${esc(q.opts[i][0])}</button>`).join("")}</div>`;
    $$(".opt",d).forEach(b=>b.onclick=()=>{ $$(".opt",d).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); ans[n]=+b.dataset.i; $(".cnt",el).textContent=Object.keys(ans).length; });
    $(".flag",d).onclick=e=>{ flags[n]=!flags[n]; e.target.setAttribute("aria-pressed",flags[n]); };
    box.append(d); });
  if(o.minutes){ const end=Date.now()+o.minutes*6e4; const tick=()=>{ const left=Math.max(0,end-Date.now()); const t=$(".timer",el); if(!t) return clearInterval(timer); t.textContent=`${Math.floor(left/6e4)}:${String(Math.floor(left%6e4/1e3)).padStart(2,"0")} left`; t.classList.toggle("low",left<5*6e4); if(!left){ clearInterval(timer); submit(true); } }; tick(); timer=setInterval(tick,1000); }
  $(".sub",el).onclick=()=>{ const un=qs.length-Object.keys(ans).length; if(un && !confirmInline(un)) return; submit(false); };
  function confirmInline(un){ const b=$(".sub",el); if(b.dataset.warned) return true; b.dataset.warned="1"; b.textContent=`${un} unanswered. Submit anyway?`; return false; }
  function submit(auto){
    clearInterval(timer); let score=0; const groups={}; const wrong=[];
    order.forEach(({q},n)=>{ const ok=ans[n]!=null && q.opts[ans[n]][1]; if(ok) score++; else wrong.push({q,n}); H.record(q.id,!!ok);
      const g=o.groupBy==="unit"?q.unit:(q.ch||"?"); (groups[g]=groups[g]||{r:0,t:0}); groups[g].t++; if(ok) groups[g].r++; });
    const mins=Math.round((Date.now()-t0)/6e4);
    const rec=o.scope?H.saveExam(o.scope,score,qs.length,groups):null;
    const gname=g=>o.groupBy==="unit"?`Week ${H.unit(g).n}: ${H.unit(g).short}`:(H.CH[g]?H.CH[g].title:"General");
    const gcol=g=>o.groupBy==="unit"?H.color(g):(H.CH[g]?H.color(H.CH[g].unit):"var(--accent)");
    const relearn=[...new Set(wrong.map(w=>w.q.ch).filter(Boolean))];
    el.innerHTML=`<div class="card"><div class="kicker">${auto?"Time is up":"Results"}</div><h2>${score} / ${qs.length} · ${H.pct(score,qs.length)}%</h2>
      <p class="muted">${rec?`Best on this ${o.scope==="midterm"?"practice midterm":"exam"}: ${rec.best}%. `:""}Time: ${mins} min.${o.minutes?` Pace for the real exam: 80 seconds a question.`:""}</p>
      <h3 style="margin-top:14px">Breakdown</h3><div class="brk">${Object.entries(groups).sort((a,b)=>a[1].r/a[1].t-b[1].r/b[1].t).map(([g,v])=>`<div>${esc(gname(g))}</div><div class="bar" style="--c:${gcol(g)}"><i style="width:${H.pct(v.r,v.t)}%"></i></div><div class="mono">${v.r}/${v.t}</div>`).join("")}</div>
      ${relearn.length?`<h3 style="margin-top:16px">Relearn these first</h3><ul>${relearn.map(c=>`<li><a href="${H.chLink(c)}">${esc(H.chName(c))}</a></li>`).join("")}</ul>`:`<p class="fb ok" style="margin-top:14px"><b>No misses.</b> Move on to the next unit or the term trainer.</p>`}
      <div class="row" style="margin-top:10px"><button class="btn again">${o.againLabel||"New set of questions"}</button>${wrong.length?`<a class="btn ghost" href="midterm.html#mistakes">Mistake log</a>`:""}</div></div>
      <div class="card" style="margin-top:14px"><h3>Every question, explained</h3>${order.map(({q},n)=>{ const p=ans[n], ok=p!=null&&q.opts[p][1], r=q.opts.find(x=>x[1]);
        return `<div class="ex-q"><div class="row" style="justify-content:space-between"><span class="mono">Q${n+1} · ${ok?"right":"wrong"}${flags[n]?" · flagged":""}</span>${q.ch?`<a class="src" href="${H.chLink(q.ch)}">${esc(q.src||"")}</a>`:`<span class="src">${esc(q.src||"")}</span>`}</div>${q.case?`<div class="case">${esc(q.case)}</div>`:""}<div class="q">${esc(q.q)}</div>
        ${p!=null&&!ok?`<div class="opt wrong" style="cursor:default">Your answer: ${esc(q.opts[p][0])}${q.opts[p][2]?`<div class="small muted">${esc(q.opts[p][2])}</div>`:""}</div>`:""}${p==null?`<div class="opt wrong" style="cursor:default">No answer</div>`:""}
        <div class="opt right" style="cursor:default;margin-top:6px">${esc(r[0])}${r[2]?`<div class="small muted">${esc(r[2])}</div>`:""}</div></div>`; }).join("")}</div>`;
    $(".again",el).onclick=()=>o.again&&o.again();
    el.scrollIntoView({behavior:"smooth",block:"start"});
    o.onFinish&&o.onFinish(score,qs.length);
  }
};

/* pick n questions balanced across groups, favouring ones missed before */
H.pickBalanced=(units,n)=>{
  const st=H.get("qstats",{}); const per={}; units.forEach(u=>per[u]=shuffle(H.bank([u])).sort((a,b)=>((st[b.id]||{}).w||0)-((st[a.id]||{}).w||0)));
  const out=[]; let i=0; while(out.length<n && units.some(u=>per[u].length)){ const u=units[i%units.length]; if(per[u].length) out.push(per[u].shift()); i++; }
  return shuffle(out);
};

/* ---------- endless practice ---------- */
H.practice=(el,{units,pool:fixedPool,title}={})=>{
  let streak=0, right=0, total=0, last=null;
  const pick=()=>{ const pool=fixedPool?fixedPool():H.bank(units()); if(!pool.length) return null; const st=H.get("qstats",{});
    const w=pool.map(q=>{ const s=st[q.id]; return {q,w:s?(1+s.w*2)/(1+s.r):2}; }).filter(x=>x.q.id!==last||pool.length===1);
    let r=Math.random()*w.reduce((a,b)=>a+b.w,0); for(const x of w){ r-=x.w; if(r<=0) return x.q; } return w[0].q; };
  function next(){ const q=pick(); if(!q){ el.innerHTML=`<div class="card"><p class="muted">Nothing to practise here yet.</p></div>`; return; } last=q.id;
    el.innerHTML=`<div class="card"><div class="row" style="justify-content:space-between"><span class="pill" style="--c:${H.color(q.unit)}">Week ${H.unit(q.unit).n}</span><span class="mono">${right}/${total} right · streak ${streak}</span></div><div class="qq" style="margin-top:8px"></div><div class="row"><button class="btn nx" disabled>Next question</button>${q.ch?`<a class="small" href="${H.chLink(q.ch)}">Open the chapter</a>`:""}</div></div>`;
    H.mcq($(".qq",el),q,{onAnswer:ok=>{ total++; if(ok){ right++; streak++; } else streak=0; $(".nx",el).disabled=false; $(".mono",el).textContent=`${right}/${total} right · streak ${streak}`; $(".nx",el).focus(); }});
    $(".nx",el).onclick=next; }
  next();
  return {next};
};
})();
