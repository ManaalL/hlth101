# Data file format

Each unit lives in its own file, `data/W1.js`, `data/W2.js`, ... Run `node build.js` to validate every file and write `studydata.js`, which all pages read. Adding a week = add one file, run the build, push.

Every data file calls `HLTH.unit({...})` once. Plain text everywhere except `learn`, which may use `<b>`, `<i>`, `<br>`, `<ul><li>`.

## IDs never change
Saved progress is keyed by ID. Once an ID is published, never rename it. To retire an item, add `retired:true` instead of deleting it.
- terms: `W1-T-<slug>` (slug of the term, lowercase, hyphens)
- chapters: `W1-C1`, `W1-C2`, ...
- chapter steps: `W1-C1-S1`, `W1-C1-S2`, ...
- bank questions: `W1-Q01`, `W1-Q02`, ...
- written review prompts: `W1-R01`, ...

Every item has `src` (e.g. `"W1 Part 2, slide 16"`) and `added` (`"2026-10-26"`).

## Shape

```js
HLTH.unit({
  id:"W1", n:1, added:"2026-10-26",
  title:"Perspectives on Health and the Rise of Public Health",
  short:"Perspectives & history",            // 2 to 4 words
  blurb:"One sentence on what the unit covers.",
  topics:["4 to 6 short topic lines for the hub card"],
  lectures:["Week 1 Part 1: Different Perspectives on Health", "Week 1 Part 2: Major Historical Developments"],

  terms:[ {id, term, def, ex /*optional example*/, src, ch /*chapter id*/, added} ],

  chapters:[ {
    id:"W1-C1", title, src:"W1 Part 1, slides 2-7", blurb:"one line",
    learn:"60 to 160 words of plain teaching text. Only course content.",
    steps:[ /* 2 to 4 activities, see below; each has id, src */ ],
    summary:"one or two sentences shown at the end"
  } ],

  questions:[ /* the exam bank: mcq objects with ch set */ ],
  review:[ {id, q, answer /*model answer*/, points:["checklist point", ...], src, ch, added} ],
  explore:[ {fig:"sem", title, caption, items:{ slotId:{label, text, src} }} ]
});
```

## Step / question types

All of these need `id` and `src`. MCQ-like items need exactly one correct option.

- `mcq`: `{type:"mcq", case:"optional scenario text", q, opts:[["text", true, "why"], ["text", false, "why"], ...], ch, added}` 4 options.
- `sort`: `{type:"sort", prompt, bins:["A","B","C"], items:[["text", binIndex, "why"], ...]}` 5 to 9 items.
- `order`: `{type:"order", prompt, items:["first", "second", ...], why:"explanation"}` 4 to 7 items, listed in the correct order.
- `match`: `{type:"match", prompt, pairs:[["left", "right"], ...]}` 4 to 7 pairs. Each left matches exactly one right.
- `compare`: `{type:"compare", prompt, a:{name, points:[...]}, b:{name, points:[...]}, scenarios:[["scenario", 0 or 1, "why"], ...]}` 0 = a, 1 = b. 3 to 5 scenarios.
- `table`: `{type:"table", prompt, caption, head:[...], rows:[[...], ...], qs:[mcq, ...]}` A real chart or table from the slides, values copied exactly (keep years). 1 to 3 mcqs, each with its own id.
- `label`: `{type:"label", fig, prompt}` Drag the labels onto a built-in figure. Uses the slot labels defined for that figure.

## Built-in figures (for `label` and `explore`)
Slot ids are fixed:
- `sem` Social-ecological model rings: `innate`, `behaviour`, `networks`, `living`, `broad`
- `lalonde` Health field concept: `biology`, `environment`, `lifestyle`, `care`
- `prevention` Levels of prevention along the course of disease: `primordial`, `primary`, `secondary`, `tertiary`
- `transitions` Omran's epidemiologic transitions: `t1`, `t2`, `t3`, `t4`
- `ttm` Stages of change: `pre`, `contemp`, `prep`, `action`, `maint`, `term`
- `smart` SMART goals: `s`, `m`, `a`, `r`, `t`
- `designs` Study design decision tree: `exp`, `obs`, `rct`, `nonrand`, `desc`, `anal`, `cohort`, `cc`, `cross`
- `pyramid` Evidence pyramid, top to bottom: `meta`, `sr`, `guide`, `rct`, `cohort`, `cc`, `case`
- `maslow` bottom to top: `physio`, `safety`, `love`, `esteem`, `self`
- `dual` Dual continua quadrants: `flourish`, `symptomatic`, `vulnerable`, `languish`
- `hpa` HPA axis chain: `hyp`, `crh`, `pit`, `acth`, `adr`, `cort`
- `gas` General adaptation syndrome: `alarm`, `resist`, `exhaust`
- `yerkes` Stress curve zones (Fig 3.2): `under` (too little stress, underload), `optimum`, `over` (too much stress, overload), `burnout`
