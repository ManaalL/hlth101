/* HLTH 101 Interactive: built-in figures, drawn as original SVG in a textbook style.
   Each figure has fixed slot ids (see SCHEMA.md). Modes: "explore" (labels shown, clickable),
   "label" (empty drop slots), "static". */
(function(){
"use strict";
const esc=H.esc;
const T=(x,y,t,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||"middle"}" ${o.cls?`class="${o.cls}"`:""} style="font-size:${o.s||11}px;${o.w?`font-weight:${o.w};`:""}${o.f?`fill:${o.f};`:""}${o.i?"font-style:italic;":""}">${esc(t)}</text>`;
const arrowDef=`<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--fig-stroke)"/></marker><marker id="ahd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>`;
const L=(x1,y1,x2,y2,o={})=>`<path d="M${x1} ${y1} L${x2} ${y2}" class="${o.cls||"ln"}" ${o.dash?`stroke-dasharray="${o.dash}"`:""} marker-end="${o.both?"url(#ah)":(o.noh?"":"url(#ah)")}" ${o.both?'marker-start="url(#ah)"':""} ${o.st?`style="${o.st}"`:""}/>`;
const B=(x,y,w,h,t,o={})=>`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="${o.r||6}" class="${o.cls||"sf"}" stroke="var(--fig-stroke)" stroke-width="${o.sw||1}"/>`+(t?wrap(x,y,w,t,o.s||11,o.w):"");
function wrap(x,y,w,text,size,weight){
  const max=Math.max(6,Math.floor((w-10)/(size*0.53))); const words=String(text).split(" "); const lines=[""];
  words.forEach(wd=>{ const cur=lines[lines.length-1]; if((cur+" "+wd).trim().length>max && cur) lines.push(wd); else lines[lines.length-1]=(cur+" "+wd).trim(); });
  const lh=size*1.18, y0=y-(lines.length-1)*lh/2+size*0.36;
  return `<text x="${x}" y="${y0}" text-anchor="middle" style="font-size:${size}px;${weight?`font-weight:${weight};`:""}">${lines.map((l,i)=>`<tspan x="${x}" dy="${i?lh:0}">${esc(l)}</tspan>`).join("")}</text>`;
}
H.wrapText=wrap;

const F={};
/* 1. Social-ecological model */
F.sem={ vb:[600,450], title:"The social-ecological model", caption:"The social-ecological model (after the Institute of Medicine, 2002). Determinants run from proximal at the centre to distal at the edge.",
  labels:{innate:"Innate individual traits",behaviour:"Individual behaviour",networks:"Social, family & community networks",living:"Living & working conditions",broad:"Broad social, economic, cultural, health & environmental conditions & policies"},
  slots:{broad:{x:300,y:38,w:330,h:34},living:{x:300,y:86,w:220,h:22},networks:{x:300,y:126,w:250,h:22},behaviour:{x:300,y:166,w:170,h:22},innate:{x:300,y:228,w:118,h:34}},
  base:()=>{ let g=""; const r=[205,165,125,85,45], f=["fl","sf","fl","sf","fl"]; r.forEach((R,i)=>g+=`<circle cx="300" cy="228" r="${R}" class="${f[i]}" stroke="var(--fig-stroke)" stroke-width="${i?1:1.4}" ${i?'stroke-dasharray="5 3"':""}/>`);
    g+=T(300,262,"the biology of disease",{s:9.5,i:1,f:"var(--ink2)"});
    g+=`<text x="300" y="300" class="cap" text-anchor="middle">proximal</text><text x="300" y="352" class="cap" text-anchor="middle">intermediate</text><text x="300" y="420" class="cap" text-anchor="middle">distal</text>`;
    g+=`<path d="M300 228 L95 310" class="lt" marker-end="url(#ah)" stroke-dasharray="2 3"/>`+T(118,330,"over the life span",{s:10,i:1,f:"var(--ink2)",a:"start"});
    return g; } };
/* 2. Lalonde health field concept */
F.lalonde={ vb:[600,330], title:"Lalonde's health field concept (1974)", caption:"The four fields of the health field concept, each with a two-way link to health.",
  labels:{biology:"Human biology",environment:"Environment",lifestyle:"Lifestyle",care:"Health care organization"},
  slots:{biology:{x:130,y:70,w:170,h:40},environment:{x:470,y:70,w:170,h:40},care:{x:130,y:260,w:190,h:40},lifestyle:{x:470,y:260,w:170,h:40}},
  base:()=>`<circle cx="300" cy="165" r="150" class="lt"/>`+B(300,165,110,50,"Health",{s:16,w:600,cls:"fl"})+L(215,90,250,140,{both:1})+L(385,90,350,140,{both:1})+L(215,240,250,190,{both:1})+L(385,240,350,190,{both:1}) };
/* 3. Levels of prevention */
F.prevention={ vb:[640,330], title:"Levels of prevention", caption:"Levels of prevention lined up against the course of disease (after AFMC Primer Fig 4.1).",
  labels:{primordial:"Primordial",primary:"Primary",secondary:"Secondary",tertiary:"Tertiary"},
  slots:{primordial:{x:75,y:150,w:120,h:30},primary:{x:205,y:150,w:120,h:30},secondary:{x:385,y:150,w:150,h:30},tertiary:{x:560,y:150,w:130,h:30}},
  base:()=>{ let g=L(10,70,630,70,{st:"stroke-width:2"}); const st=[[75,"Underlying health determinants"],[205,"Risk & protective factors"],[330,"Preclinical phase"],[445,"Clinical phase"],[560,"Post-clinical phase"]];
    st.forEach(([x,t])=>{ g+=`<circle cx="${x}" cy="70" r="5" fill="var(--paper)" stroke="var(--fig-stroke)" stroke-width="1.4"/>`+wrap(x,38,118,t,10.5,600); });
    g+=`<text x="10" y="112" class="cap" text-anchor="start">level of prevention</text>`;
    const tp=[[75,"Whole population"],[205,"At-risk groups"],[385,"Patients with disease"],[560,"Recovering individuals"]];
    g+=`<text x="10" y="200" class="cap" text-anchor="start">target population</text>`; tp.forEach(([x,t])=>g+=wrap(x,224,130,t,10.5));
    const ac=[[75,"Modify social determinants"],[205,"Limit exposures that lead to disease"],[385,"Detect & treat early, when intervention works better"],[560,"Avoid relapse & further deterioration"]];
    g+=`<text x="10" y="262" class="cap" text-anchor="start">aim</text>`; ac.forEach(([x,t])=>g+=wrap(x,292,140,t,10,null));
    return g; } };
/* 4. Epidemiologic transitions */
F.transitions={ vb:[620,340], title:"Omran's epidemiologic transitions (1971)", caption:"Life expectancy climbs and the share of deaths from cardiovascular disease (CVD) shifts as countries develop.",
  labels:{t1:"Age of pestilence & famine",t2:"Age of receding pandemics",t3:"Age of degenerative & man-made diseases",t4:"Age of delayed degenerative diseases"},
  slots:{t1:{x:90,y:40,w:150,h:40},t2:{x:240,y:40,w:140,h:40},t3:{x:390,y:40,w:150,h:40},t4:{x:540,y:40,w:150,h:40}},
  base:()=>{ let g=L(30,300,610,300)+L(30,300,30,80); g+=`<text x="22" y="190" class="cap" transform="rotate(-90 22 190)" text-anchor="middle">life expectancy</text>`;
    const s=[[90,260,"LE 20 to 40","CVD ~5 to 10%"],[240,215,"LE ~50","CVD 15 to 35%"],[390,175,"LE ~60","CVD >50%"],[540,120,"LE ~82 (Canada)","CVD declining"]];
    let p="M35 "+s[0][1]; s.forEach(([x,y],i)=>{ p+=` L${x+70} ${y}`; if(s[i+1]) p+=` L${x+70} ${s[i+1][1]}`; });
    g+=`<path d="${p}" fill="none" stroke="var(--accent)" stroke-width="2.4"/>`;
    s.forEach(([x,y,a,b])=>{ g+=T(x,y-10,a,{s:10.5,w:600})+T(x,y+16,b,{s:10,f:"var(--ink2)"}); g+=`<line x1="${x+75}" y1="70" x2="${x+75}" y2="300" class="lt" stroke-dasharray="2 4"/>`; });
    return g; } };
/* 5. Transtheoretical model */
F.ttm={ vb:[620,320], title:"Stages of change (transtheoretical model)", caption:"Moving through the stages of change. Relapse to an earlier stage is a common part of the cycle.",
  labels:{pre:"Precontemplation",contemp:"Contemplation",prep:"Preparation",action:"Action",maint:"Maintenance",term:"Termination"},
  slots:{pre:{x:62,y:262,w:116,h:28},contemp:{x:162,y:222,w:116,h:28},prep:{x:262,y:182,w:110,h:28},action:{x:362,y:142,w:96,h:28},maint:{x:462,y:102,w:110,h:28},term:{x:562,y:62,w:106,h:28}},
  base:()=>{ let g=""; for(let i=0;i<6;i++){ const x=12+i*100, y=280-i*40; g+=`<path d="M${x} ${y} H${x+100} V300 H${x} Z" class="${i%2?"sf":"fl"}" stroke="var(--fig-stroke)" stroke-width="1"/>`; }
    g+=`<path d="M470 120 C 400 250, 200 300, 120 290" fill="none" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#ahd)"/>`+T(330,262,"relapse",{s:11,i:1,f:"var(--accent)"});
    return g; } };
/* 6. SMART */
F.smart={ vb:[620,190], title:"SMART goals", caption:"Each letter of a SMART goal.",
  labels:{s:"Specific",m:"Measurable",a:"Attainable",r:"Realistic",t:"Time frame specific"},
  slots:{s:{x:66,y:140,w:112,h:30},m:{x:188,y:140,w:112,h:30},a:{x:310,y:140,w:112,h:30},r:{x:432,y:140,w:112,h:30},t:{x:554,y:140,w:118,h:40}},
  base:()=>["S","M","A","R","T"].map((l,i)=>B(66+i*122,62,70,70,"",{cls:"fl"})+T(66+i*122,78,l,{s:40,w:600,f:"var(--accent)"})).join("") };
/* 7. Study design tree */
F.designs={ vb:[640,400], title:"Choosing a study design", caption:"Study designs for quantitative research (after AFMC Primer Fig 5.1).",
  labels:{exp:"Experimental study",obs:"Observational study",rct:"Randomized controlled trial",nonrand:"Non-randomized design",desc:"Descriptive study",anal:"Analytical study",cohort:"Cohort study",cc:"Case-control study",cross:"Cross-sectional study"},
  slots:{exp:{x:150,y:110,w:150,h:30},obs:{x:440,y:110,w:160,h:30},rct:{x:80,y:250,w:130,h:40},nonrand:{x:230,y:250,w:130,h:40},desc:{x:560,y:200,w:130,h:30},anal:{x:390,y:200,w:130,h:30},cohort:{x:290,y:360,w:110,h:30},cc:{x:420,y:360,w:120,h:30},cross:{x:560,y:360,w:126,h:40}},
  base:()=>B(300,30,280,34,"Did the investigator assign exposures?",{s:11.5,w:600,cls:"fl"})+L(250,47,170,94)+T(196,72,"yes",{s:10,i:1})+L(350,47,420,94)+T(400,72,"no",{s:10,i:1})
    +T(150,160,"Random allocation?",{s:10.5,i:1})+L(130,166,90,229)+T(98,198,"yes",{s:10,i:1})+L(170,166,220,229)+T(210,198,"no",{s:10,i:1})+L(150,126,150,148,{noh:1,cls:"lt"})
    +T(440,150,"Testing a hypothesis?",{s:10.5,i:1})+L(470,155,545,184)+T(522,160,"no",{s:10,i:1})+L(425,155,400,184)+T(404,170,"yes",{s:10,i:1})+L(440,126,440,140,{noh:1,cls:"lt"})
    +T(390,268,"Sampling based on:",{s:10.5,i:1})+L(390,216,390,256,{noh:1,cls:"lt"})+L(360,276,300,344)+T(312,306,"exposure",{s:9.5,i:1,a:"end"})+L(400,276,418,344)+T(426,316,"outcome",{s:9.5,i:1,a:"start"})+L(430,272,540,338)+T(520,290,"neither",{s:9.5,i:1,a:"start"}) };
/* 8. Evidence pyramid */
F.pyramid={ vb:[620,410], title:"The study design pyramid", caption:"Strength of evidence rises toward the top of the pyramid.",
  labels:{meta:"Meta-analysis",sr:"Systematic review",guide:"Practice guideline",rct:"Randomized controlled trial",cohort:"Cohort study",cc:"Case-control study",case:"Case reports / case series"},
  slots:{meta:{x:495,y:47,w:150,h:28},sr:{x:495,y:99,w:150,h:28},guide:{x:495,y:151,w:150,h:28},rct:{x:495,y:203,w:200,h:28},cohort:{x:495,y:255,w:150,h:28},cc:{x:495,y:307,w:150,h:28},case:{x:495,y:359,w:190,h:28}},
  base:()=>{ let g=""; const top=21, bot=385, ax=230, hw=200, n=7, bh=(bot-top)/n;
    for(let i=0;i<n;i++){ const y1=top+i*bh, y2=y1+bh, w1=hw*(y1-top)/(bot-top), w2=hw*(y2-top)/(bot-top);
      g+=`<path d="M${ax-w1} ${y1} L${ax+w1} ${y1} L${ax+w2} ${y2} L${ax-w2} ${y2} Z" fill="color-mix(in srgb,var(--u3) ${8+ (n-i)*7}%,var(--paper))" stroke="var(--fig-stroke)" stroke-width="1"/>`;
      g+=`<line x1="${ax+(w1+w2)/2+4}" y1="${(y1+y2)/2}" x2="395" y2="${(y1+y2)/2}" class="lt" stroke-dasharray="2 3"/>`; }
    g+=L(14,385,14,30,{st:"stroke-width:1.6"})+`<text x="8" y="210" class="cap" transform="rotate(-90 8 210)" text-anchor="middle">stronger evidence</text>`;
    return g; } };
/* 9. Maslow */
F.maslow={ vb:[620,400], title:"Maslow's hierarchy of needs", caption:"Maslow's hierarchy (Maslow, 1970). Lower needs come first; self-actualization sits at the top.",
  labels:{physio:"Physiological needs",safety:"Safety and security",love:"Love and belongingness",esteem:"Self-esteem",self:"Self-actualization"},
  slots:{self:{x:490,y:56,w:170,h:28},esteem:{x:490,y:128,w:150,h:28},love:{x:490,y:200,w:180,h:28},safety:{x:490,y:272,w:170,h:28},physio:{x:490,y:344,w:170,h:28}},
  base:()=>{ let g=""; const top=20, bot=380, ax=210, hw=195, n=5, bh=(bot-top)/n, sub=["realism, autonomy, authenticity, creativity","as a person, as a doer","loved, loving, connected","safe surroundings, protection","food, water, shelter, sleep"];
    for(let i=0;i<n;i++){ const y1=top+i*bh, y2=y1+bh, w1=hw*(y1-top)/(bot-top), w2=hw*(y2-top)/(bot-top);
      g+=`<path d="M${ax-w1} ${y1} L${ax+w1} ${y1} L${ax+w2} ${y2} L${ax-w2} ${y2} Z" fill="color-mix(in srgb,var(--u4) ${10+(n-i)*8}%,var(--paper))" stroke="var(--fig-stroke)" stroke-width="1"/>`;
      if(i>0) g+=wrap(ax,(y1+y2)/2+6,2*w1-10,sub[i],9.5); else g+=T(ax,y2-12,"",{});
      g+=`<line x1="${ax+(w1+w2)/2+4}" y1="${(y1+y2)/2}" x2="400" y2="${(y1+y2)/2}" class="lt" stroke-dasharray="2 3"/>`; }
    return g; } };
/* 10. Dual continua */
F.dual={ vb:[600,420], title:"The dual continua model of mental health", caption:"Mental illness and mental well-being are related but separate axes (Scutt et al., 2023).",
  labels:{flourish:"Flourishing",symptomatic:"Symptomatic but content",vulnerable:"Vulnerable",languish:"Languishing"},
  slots:{flourish:{x:165,y:120,w:150,h:30},symptomatic:{x:435,y:120,w:170,h:30},vulnerable:{x:165,y:300,w:150,h:30},languish:{x:435,y:300,w:150,h:30}},
  base:()=>`<rect x="40" y="30" width="520" height="360" class="fl" stroke="none"/>`+L(300,210,300,30,{both:0})+L(300,210,300,392)+L(300,210,40,210)+L(300,210,560,210)
    +T(300,22,"High mental well-being",{s:11,w:600})+T(300,412,"Low mental well-being",{s:11,w:600})+T(44,232,"Low mental illness",{s:11,w:600,a:"start"})+T(556,232,"High mental illness",{s:11,w:600,a:"end"}) };
/* 11. HPA axis */
F.hpa={ vb:[620,470], title:"The HPA axis", caption:"Hypothalamus, pituitary and adrenal gland. Glucocorticoids feed back to turn the response down.",
  labels:{hyp:"Hypothalamus (PVN)",crh:"CRH",pit:"Pituitary gland",acth:"ACTH",adr:"Adrenal gland",cort:"Glucocorticoids (cortisol)"},
  slots:{hyp:{x:200,y:70,w:170,h:36},crh:{x:200,y:140,w:90,h:26},pit:{x:200,y:210,w:150,h:36},acth:{x:200,y:280,w:90,h:26},adr:{x:200,y:350,w:150,h:36},cort:{x:200,y:425,w:200,h:36}},
  base:()=>T(200,22,"stressor sensed",{s:11,i:1,f:"var(--ink2)"})+L(200,28,200,50)+L(200,88,200,125)+L(200,153,200,190)+L(200,228,200,265)+L(200,293,200,330)+L(200,368,200,405)
    +`<path d="M300 425 C 420 420, 430 220, 277 212" fill="none" stroke="var(--u4)" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#ah)"/>`
    +`<path d="M300 425 C 470 420, 470 80, 287 72" fill="none" stroke="var(--u4)" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#ah)"/>`
    +`<path d="M300 425 C 520 430, 560 160, 520 130" fill="none" stroke="var(--u4)" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#ah)"/>`
    +B(520,110,120,30,"Hippocampus",{s:11,cls:"fl"})+T(470,300,"negative feedback",{s:11,i:1,f:"var(--u4)"})+T(470,316,"via glucocorticoid receptors",{s:9.5,f:"var(--ink2)"}) };
/* 12. General adaptation syndrome */
F.gas={ vb:[620,300], title:"General adaptation syndrome", caption:"Selye's general adaptation syndrome: resistance to injury dips, rises, then falls with prolonged stress.",
  labels:{alarm:"Alarm",resist:"Resistance",exhaust:"Exhaustion"},
  slots:{alarm:{x:110,y:34,w:120,h:28},resist:{x:310,y:34,w:130,h:28},exhaust:{x:510,y:34,w:130,h:28}},
  base:()=>`<line x1="20" y1="170" x2="610" y2="170" class="lt" stroke-dasharray="6 4"/>`+T(24,162,"normal resistance to injury",{s:10,a:"start",f:"var(--ink2)"})
    +`<line x1="210" y1="56" x2="210" y2="280" class="lt" stroke-dasharray="2 4"/><line x1="410" y1="56" x2="410" y2="280" class="lt" stroke-dasharray="2 4"/>`
    +`<path d="M20 170 C 70 170, 90 235, 130 232 C 175 228, 180 100, 230 95 L390 95 C 440 95, 450 250, 500 255 C 540 258, 570 258, 605 258" fill="none" stroke="var(--u5)" stroke-width="2.6"/>`
    +T(310,290,"time under stress",{s:10,i:1,f:"var(--ink2)"}) };
/* 13. Stress curve */
F.yerkes={ vb:[620,330], title:"The stress curve", caption:"Stress level, performance and well-being (after Core Concepts in Health Fig 3.2).",
  labels:{under:"Too little stress (underload)",optimum:"Optimum stress",over:"Too much stress (overload)",burnout:"Burnout"},
  slots:{under:{x:105,y:300,w:150,h:34},optimum:{x:255,y:300,w:120,h:34},over:{x:405,y:300,w:150,h:34},burnout:{x:550,y:300,w:110,h:34}},
  base:()=>`<rect x="30" y="30" width="150" height="240" fill="color-mix(in srgb,var(--u4) 14%,var(--paper))"/><rect x="180" y="30" width="150" height="240" fill="color-mix(in srgb,var(--u2) 16%,var(--paper))"/><rect x="330" y="30" width="150" height="240" fill="color-mix(in srgb,var(--u1) 16%,var(--paper))"/><rect x="480" y="30" width="130" height="240" fill="color-mix(in srgb,var(--bad) 18%,var(--paper))"/>`
    +L(30,270,612,270)+L(30,270,30,24)+`<text x="18" y="150" class="cap" transform="rotate(-90 18 150)" text-anchor="middle">performance</text><text x="320" y="286" class="cap" text-anchor="middle">stress level</text>`
    +`<path d="M40 255 C 140 245, 200 60, 290 58 C 380 60, 440 200, 600 255" fill="none" stroke="var(--head)" stroke-width="2.4"/>`
    +T(60,240,"inactive",{s:10,i:1,a:"start"})+T(150,150,"laid back",{s:10,i:1,a:"end"})+T(290,50,"fatigue",{s:10,i:1})+T(380,110,"exhaustion",{s:10,i:1,a:"start"})+T(470,190,"anxiety, panic, anger",{s:10,i:1,a:"start"})+T(560,240,"breakdown",{s:10,i:1,a:"end"}) };

H.FIG=F;
/* render. opts: mode, labels (slot->text override), filled (slot->text for label mode), states (slot->"right"/"wrong"), on (active slot), color */
H.figSVG=(id,opts={})=>{
  const f=F[id]; if(!f) return "";
  const mode=opts.mode||"explore"; let g=`<svg class="fig" viewBox="0 0 ${f.vb[0]} ${f.vb[1]}" role="img" aria-label="${esc(f.title)}" style="--c:${opts.color||"var(--accent)"}">${arrowDef}${f.base()}`;
  Object.entries(f.slots).forEach(([k,s])=>{
    let text, cls="slot";
    if(mode==="label"){ text=(opts.filled||{})[k]; if(!text){ text="drop here"; cls+=" empty"; } if(opts.states&&opts.states[k]) cls+=" "+opts.states[k]; }
    else text=(opts.labels&&opts.labels[k])||f.labels[k];
    if(opts.on===k) cls+=" on";
    g+=`<g class="${cls}" data-slot="${k}" ${mode==="label"?`data-drop="${k}"`:""} tabindex="0" role="button" aria-label="${esc(mode==="label"?"slot "+k:text)}"><rect x="${s.x-s.w/2}" y="${s.y-s.h/2}" width="${s.w}" height="${s.h}" rx="6"/>${wrap(s.x,s.y,s.w,text,s.h>32?11.5:12)}</g>`;
  });
  return g+`</svg>`;
};
})();
