/* Build: validates data/*.js and writes studydata.js. Run: node build.js */
const fs=require("fs"), path=require("path"), vm=require("vm");
const FIG_SLOTS={sem:["innate","behaviour","networks","living","broad"],lalonde:["biology","environment","lifestyle","care"],prevention:["primordial","primary","secondary","tertiary"],transitions:["t1","t2","t3","t4"],ttm:["pre","contemp","prep","action","maint","term"],smart:["s","m","a","r","t"],designs:["exp","obs","rct","nonrand","desc","anal","cohort","cc","cross"],pyramid:["meta","sr","guide","rct","cohort","cc","case"],maslow:["physio","safety","love","esteem","self"],dual:["flourish","symptomatic","vulnerable","languish"],hpa:["hyp","crh","pit","acth","adr","cort"],gas:["alarm","resist","exhaust"],yerkes:["under","optimum","over","burnout"]};
const units=[]; const errs=[]; const warn=[];
const ext=[]; const ctx={HLTH:{unit:u=>units.push(u), extend:(id,add)=>ext.push([id,add])}}; vm.createContext(ctx);
const dir=path.join(__dirname,"data");
fs.readdirSync(dir).filter(f=>/^W\d+[a-z]?\.js$/.test(f)).sort((a,b)=>parseInt(a.slice(1))-parseInt(b.slice(1))||a.localeCompare(b)).forEach(f=>{
  try{ vm.runInContext(fs.readFileSync(path.join(dir,f),"utf8"),ctx,{filename:f}); }catch(e){ errs.push(f+": "+e.message); }
});
/* HLTH.extend("W4",{terms,chapters,questions,review}) adds to a unit from a second file (e.g. data/W4b.js) */
ext.forEach(([id,add])=>{ const u=units.find(x=>x.id===id); if(!u) return errs.push("extend: no unit "+id); ["terms","chapters","questions","review","explore"].forEach(k=>{ if(add[k]) u[k]=(u[k]||[]).concat(add[k]); }); });
const ids=new Set(); const seen=(id,where)=>{ if(!id) errs.push(where+": missing id"); else if(ids.has(id)) errs.push("duplicate id "+id); else ids.add(id); };
const DASH=/—/;
function checkText(o,where){ JSON.stringify(o).match(DASH)&&warn.push(where+": contains an em dash"); }
function mcq(q,where){
  if(!q.q) errs.push(where+": no question text");
  if(!Array.isArray(q.opts)||q.opts.length<2) return errs.push(where+": needs opts");
  const n=q.opts.filter(o=>o[1]===true).length; if(n!==1) errs.push(where+": has "+n+" correct options");
  const t=q.opts.map(o=>String(o[0]).trim().toLowerCase()); if(new Set(t).size!==t.length) errs.push(where+": duplicate option text");
  if(!q.src) warn.push(where+": no src");
}
function step(s,where){
  seen(s.id,where); const w=where+" "+s.id;
  switch(s.type){
    case "mcq": mcq(s,w); break;
    case "sort": if(!s.bins||!s.items||!s.items.length) errs.push(w+": sort needs bins+items"); else s.items.forEach(it=>{ if(!(it[1]>=0&&it[1]<s.bins.length)) errs.push(w+": bad bin for "+it[0]); }); break;
    case "order": if(!s.items||s.items.length<3) errs.push(w+": order needs 3+ items"); break;
    case "match": if(!s.pairs||s.pairs.length<3) errs.push(w+": match needs 3+ pairs"); else { const l=s.pairs.map(p=>p[0]), r=s.pairs.map(p=>p[1]); if(new Set(l).size!==l.length||new Set(r).size!==r.length) errs.push(w+": duplicate match sides"); } break;
    case "compare": if(!s.a||!s.b||!s.scenarios) errs.push(w+": compare needs a,b,scenarios"); else s.scenarios.forEach(x=>{ if(x[1]!==0&&x[1]!==1) errs.push(w+": scenario answer must be 0/1"); }); break;
    case "table": if(!s.head||!s.rows) errs.push(w+": table needs head+rows"); (s.qs||[]).forEach((q,i)=>{ seen(q.id,w+" q"+i); mcq(q,w+" "+q.id); }); break;
    case "label": if(!FIG_SLOTS[s.fig]) errs.push(w+": unknown fig "+s.fig); break;
    default: errs.push(w+": unknown type "+s.type);
  }
}
units.forEach(u=>{
  const W=u.id; seen(W,"unit");
  ["title","short","blurb"].forEach(k=>{ if(!u[k]) errs.push(W+": missing "+k); });
  const chIds=new Set((u.chapters||[]).map(c=>c.id));
  (u.terms||[]).forEach(t=>{ seen(t.id,W+" term"); if(!t.term||!t.def) errs.push(W+" "+t.id+": term needs term+def"); if(!t.src) warn.push(t.id+": no src"); if(t.ch&&!chIds.has(t.ch)) warn.push(t.id+": unknown ch "+t.ch); });
  (u.chapters||[]).forEach(c=>{ seen(c.id,W+" chapter"); if(!c.learn) errs.push(c.id+": no learn text"); (c.steps||[]).forEach(s=>step(s,c.id)); if(!(c.steps||[]).length) errs.push(c.id+": no steps"); });
  (u.questions||[]).forEach(q=>{ seen(q.id,W+" question"); mcq(q,q.id); if(q.ch&&!chIds.has(q.ch)) errs.push(q.id+": unknown ch "+q.ch); });
  (u.review||[]).forEach(r=>{ seen(r.id,W+" review"); if(!r.answer||!r.points||!r.points.length) errs.push(r.id+": review needs answer+points"); });
  (u.explore||[]).forEach((e,i)=>{ const slots=FIG_SLOTS[e.fig]; if(!slots) return errs.push(W+" explore "+i+": unknown fig "+e.fig); Object.keys(e.items||{}).forEach(k=>{ if(!slots.includes(k)) errs.push(W+" explore "+e.fig+": unknown slot "+k); }); });
  checkText(u,W);
  console.log(`${W}: ${(u.terms||[]).length} terms, ${(u.chapters||[]).length} chapters, ${(u.chapters||[]).reduce((a,c)=>a+(c.steps||[]).length,0)} steps, ${(u.questions||[]).length} bank questions, ${(u.review||[]).length} review prompts`);
});
warn.forEach(w=>console.warn("warn:",w));
if(errs.length){ errs.forEach(e=>console.error("ERROR:",e)); console.error(errs.length+" errors. studydata.js not written."); process.exit(1); }
const meta={built:new Date().toISOString().slice(0,10), exam:{date:"2026-10-27T16:00:00-04:00", label:"Exam 1", where:"STC 0010, in class", count:45, minutes:60}};
fs.writeFileSync(path.join(__dirname,"studydata.js"),"/* Generated by build.js from data/*.js. Do not edit by hand. */\nwindow.STUDY="+JSON.stringify({meta,figSlots:FIG_SLOTS,units})+";\n");
console.log("studydata.js written: "+units.length+" units, "+ids.size+" ids.");
