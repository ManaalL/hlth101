/* HLTH 101 Interactive: shared core. Storage, indexes, nav, helpers.
   Storage keys are versioned ("hlth101:<name>:v1"). migrate() upgrades old data instead of wiping it. */
(function(){
"use strict";
const S = window.STUDY || {units:[],meta:{},figSlots:{}};
const H = window.H = {S};
H.$ = (s,r=document)=>r.querySelector(s);
H.$$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
H.esc = s => String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
H.shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
H.pct = (a,b)=> b? Math.round(a/b*100) : 0;

/* ---------- storage ---------- */
const P = "hlth101:";
const KEYS = { progress:"progress:v1", exam:"exam:v1", leitner:"leitner:v1", review:"review:v1", mistakes:"mistakes:v1", qstats:"qstats:v1", seen:"seen:v1", plan:"plan:v1", guide:"guide:v1" };
H.get = (name,d)=>{ try{ const v=localStorage.getItem(P+(KEYS[name]||name)); return v==null?d:JSON.parse(v); }catch(e){ return d; } };
H.set = (name,v)=>{ try{ localStorage.setItem(P+(KEYS[name]||name),JSON.stringify(v)); }catch(e){} };
H.raw = { get:(k,d)=>{ try{ const v=localStorage.getItem(P+k); return v==null?d:v; }catch(e){ return d; } }, set:(k,v)=>{ try{ localStorage.setItem(P+k,v); }catch(e){} }, del:k=>{ try{ localStorage.removeItem(P+k); }catch(e){} } };
const SCHEMA = 1;
function migrate(){
  const v = parseInt(H.raw.get("schema","0"),10)||0;
  if(v===SCHEMA) return;
  /* Future migrations go here, e.g. if(v<2){ const old=H.get("exam:v1",{}); H.set("exam",convert(old)); }
     Never delete old keys before the new ones are written. */
  H.raw.set("schema",String(SCHEMA));
}
migrate();

/* ---------- theme ---------- */
const savedTheme = H.raw.get("theme",null);
if(savedTheme) document.documentElement.setAttribute("data-theme",savedTheme);
H.toggleTheme = ()=>{
  const cur = document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
  const nx = cur==="dark"?"light":"dark"; document.documentElement.setAttribute("data-theme",nx); H.raw.set("theme",nx);
};

/* ---------- indexes ---------- */
H.units = S.units;
H.unit = id => S.units.find(u=>u.id===id);
H.color = u => `var(--u${(typeof u==="string"?H.unit(u):u).n})`;
H.Q = {}; H.T = {}; H.CH = {};
S.units.forEach(u=>{
  (u.terms||[]).forEach(t=>{ if(!t.retired) H.T[t.id]={...t,unit:u.id}; });
  (u.chapters||[]).forEach((c,ci)=>{
    H.CH[c.id]={...c,unit:u.id,idx:ci};
    (c.steps||[]).forEach(s=>{
      if(s.type==="mcq") H.Q[s.id]={...s,unit:u.id,ch:c.id,kind:"step"};
      if(s.type==="table") (s.qs||[]).forEach(q=>H.Q[q.id]={...q,type:"mcq",unit:u.id,ch:c.id,kind:"step",table:s});
    });
  });
  (u.questions||[]).forEach(q=>{ if(!q.retired) H.Q[q.id]={...q,type:"mcq",unit:u.id,kind:"bank"}; });
});
H.bank = units => Object.values(H.Q).filter(q=>q.kind==="bank" && (!units||units.includes(q.unit)));
H.chLink = chId => { const c=H.CH[chId]; return c? `unit.html?u=${c.unit}#ch=${c.id}` : "index.html"; };
H.chName = chId => { const c=H.CH[chId]; return c? `${c.unit.replace("W","Week ")} · ${c.title}` : ""; };

/* ---------- results ---------- */
H.record = (qid, correct)=>{
  const st=H.get("qstats",{}); const r=st[qid]||{r:0,w:0}; correct?r.r++:r.w++; r.t=Date.now(); st[qid]=r; H.set("qstats",st);
  const m=H.get("mistakes",{});
  if(!correct){ m[qid]={n:((m[qid]&&m[qid].n)||0)+1,t:Date.now(),fixed:false}; }
  else if(m[qid] && !m[qid].fixed){ m[qid].fixed=true; m[qid].ft=Date.now(); }
  H.set("mistakes",m);
};
H.markSeen = ids=>{ const s=H.get("seen",{}); ids.forEach(id=>{ if(!s[id]) s[id]="seen"; }); H.set("seen",s); };
H.markTested = id=>{ const s=H.get("seen",{}); s[id]="tested"; H.set("seen",s); };
H.chProg = chId => (H.get("progress",{})[chId]||null);
H.saveCh = (chId, score, total)=>{
  const p=H.get("progress",{}); const r=p[chId]||{};
  if(!r.first) r.first={s:score,t:total,d:Date.now()};
  r.last={s:score,t:total,d:Date.now()}; r.best=Math.max(r.best||0,H.pct(score,total)); r.done=true;
  p[chId]=r; H.set("progress",p); return r;
};
H.saveExam = (scope, score, total, detail)=>{
  const e=H.get("exam",{}); const r=e[scope]||{history:[]};
  const pc=H.pct(score,total); r.best=Math.max(r.best||0,pc); r.last=pc; r.history=(r.history||[]).concat([{d:Date.now(),s:score,t:total,detail}]).slice(-20);
  e[scope]=r; H.set("exam",e); return r;
};
/* accuracy per unit / chapter from every question answered anywhere */
H.accuracy = ()=>{
  const st=H.get("qstats",{}), byU={}, byC={};
  Object.entries(st).forEach(([id,r])=>{ const q=H.Q[id]; if(!q) return;
    const u=byU[q.unit]||(byU[q.unit]={r:0,w:0}); u.r+=r.r; u.w+=r.w;
    if(q.ch){ const c=byC[q.ch]||(byC[q.ch]={r:0,w:0}); c.r+=r.r; c.w+=r.w; } });
  return {byU,byC};
};
/* term readiness: Leitner box 1..5 -> 0..100 */
H.readiness = unitId => { const L=H.get("leitner",{}); const ts=Object.values(H.T).filter(t=>t.unit===unitId); if(!ts.length) return 0;
  return Math.round(ts.reduce((a,t)=>a+(((L[t.id]&&L[t.id].box)||1)-1)/4,0)/ts.length*100); };

/* study plan: weakest chapters first */
H.studyPlan = ()=>{
  const {byC}=H.accuracy(), prog=H.get("progress",{}), rev=H.get("review",{}), out=[];
  Object.values(H.CH).forEach(c=>{
    const p=prog[c.id], a=byC[c.id]; let score=null, why=[];
    if(a&&(a.r+a.w)){ score=a.r/(a.r+a.w); why.push(`${H.pct(a.r,a.r+a.w)}% of ${a.r+a.w} answers right`); }
    if(p&&p.first){ const f=p.first.s/p.first.t; score=score==null?f:(score+f)/2; why.push(`first try ${H.pct(p.first.s,p.first.t)}%`); }
    const u=H.unit(c.unit); (u.review||[]).filter(r=>r.ch===c.id&&rev[r.id]).forEach(r=>{ const v={g:1,s:.5,n:0}[rev[r.id]]; score=score==null?v:(score*2+v)/3; why.push(`review rated "${{g:"got it",s:"shaky",n:"no idea"}[rev[r.id]]}"`); });
    out.push({c,score,why});
  });
  const tried=out.filter(x=>x.score!=null).sort((a,b)=>a.score-b.score), untried=out.filter(x=>x.score==null);
  return {weak:tried.filter(x=>x.score<.8), strong:tried.filter(x=>x.score>=.8), untried};
};

H.isNew = added => { if(!added) return false; const d=(Date.now()-new Date(added+"T12:00:00").getTime())/864e5; return d<=7; };

/* ---------- icons ---------- */
H.ICON = {
 1:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="none" stroke="var(--u1)" stroke-width="2"/><circle cx="22" cy="22" r="12" fill="none" stroke="var(--u1)" stroke-width="1.4" stroke-dasharray="3 2"/><circle cx="22" cy="22" r="5.5" fill="var(--u1)"/></svg>`,
 2:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><path d="M6 36 h8 v-8 h8 v-8 h8 v-8 h8" fill="none" stroke="var(--u2)" stroke-width="2.6" stroke-linejoin="round"/><circle cx="38" cy="12" r="3.4" fill="var(--u2)"/></svg>`,
 3:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><path d="M22 5 L39 38 H5 Z" fill="none" stroke="var(--u3)" stroke-width="2.2" stroke-linejoin="round"/><path d="M13.5 22 H30.5 M9.5 30 H34.5" stroke="var(--u3)" stroke-width="1.6"/><path d="M22 5 L26 13 H18 Z" fill="var(--u3)"/></svg>`,
 4:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><path d="M8 22 H36 M22 8 V36" stroke="var(--u4)" stroke-width="1.6"/><circle cx="14" cy="14" r="5" fill="var(--u4)"/><circle cx="30" cy="30" r="5" fill="none" stroke="var(--u4)" stroke-width="2"/></svg>`,
 5:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><path d="M3 26 H12 L15 20 L19 33 L24 9 L28 26 H41" fill="none" stroke="var(--u5)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
 mid:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><rect x="9" y="5" width="26" height="34" rx="4" fill="none" stroke="var(--mid)" stroke-width="2.3"/><path d="M14 15 l3 3 6 -7 M14 26 l3 3 6 -7" stroke="var(--mid)" stroke-width="2.3" fill="none" stroke-linecap="round"/><path d="M26 16 h5 M26 27 h5" stroke="var(--mid)" stroke-width="2" opacity=".6"/></svg>`,
 terms:`<svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true"><rect x="6" y="11" width="24" height="17" rx="3" fill="none" stroke="var(--accent)" stroke-width="2"/><rect x="14" y="18" width="24" height="17" rx="3" fill="var(--paper)" stroke="var(--accent)" stroke-width="2"/><path d="M19 26 h14" stroke="var(--accent)" stroke-width="2"/></svg>`
};
H.LOGO = `<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="13" fill="none" stroke="var(--accent)" stroke-width="1.6"/><path d="M4 16 H9 L11 12 L14 21 L17 8 L19.5 16 H26" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

/* ---------- nav ---------- */
H.nav = active=>{
  const el=document.getElementById("nav"); if(!el) return;
  const a=(href,label,key)=>`<a href="${href}"${active===key?' aria-current="page"':""}>${label}</a>`;
  el.className="nav";
  el.innerHTML=`<div class="wrap"><a class="logo" href="index.html">${H.LOGO}<span>HLTH 101 Interactive</span></a>
  <nav aria-label="Site">${a("index.html#units","Units","units")}${a("terms.html","Terms","terms")}${a("midterm.html","Midterm prep","mid")}
  <button type="button" onclick="window.PULSE&&PULSE.open()">Ask Pulse</button>
  <button type="button" class="themebtn" aria-label="Toggle dark mode" onclick="H.toggleTheme()"><svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 2.5 A7.5 7.5 0 0 1 10 17.5 Z" fill="currentColor"/></svg></button></nav></div>`;
};
H.foot = ()=>{ const f=document.getElementById("foot"); if(!f) return;
  f.className="wrap foot";
  f.innerHTML=`An independent study aid for HLTH 101 (Introduction to Health 1) at the University of Waterloo, Fall 2026, built by Manaal Lakhani with help from Claude. It is not an official University of Waterloo resource; check details against the lecture slides and LEARN. Content follows Dr. Diane Williams's lecture slides, which cite <i>Core Concepts in Health</i> (Irwin et al.) and the AFMC Primer on Population Health. Every question here is original. All figures are original drawings. Progress is saved only in this browser. Data built ${H.esc(S.meta.built||"")}.`; };

/* ---------- countdown ---------- */
H.countdown = ()=>{ const t=new Date(S.meta.exam.date).getTime()-Date.now(); if(t<=0) return null;
  const d=Math.floor(t/864e5), h=Math.floor(t%864e5/36e5), m=Math.floor(t%36e5/6e4); return {d,h,m,ms:t}; };
H.countText = ()=>{ const c=H.countdown(); if(!c) return "Exam 1 has started or passed"; return (c.d?`${c.d}d `:"")+`${c.h}h ${c.m}m`; };
})();
