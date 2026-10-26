/* W3: Health research, study designs and population health measures.
   Sources: Week 3 Parts 1 to 4 slide text plus figs-W3.md transcriptions.
   Reading notes:
   - W3 Part 2, slide 9: the slide asks "What is the historical relevance of this study?" (Hymes 1981) but the answer is not on the slide. It was not added here.
   - W3 Part 4, slide 4: arrow paths in the "Etiological sequence" column are unclear in the figure; not used for questions.
   - W3 Part 4, slides 7, 8 and 13: chart values (infant mortality by quintile, life expectancy, PYLL bars) are read off the graphs and approximate; only trends are used, no exact values.
   - W3 Part 4, slide 6: as printed, unintentional injuries (4.4%) sits above cerebrovascular disease (4.5%), and the "all other causes 42%" bar is drawn short. Values copied as printed.
   - W3 Part 4, slide 12: DALYs are named but not defined on the slides.
*/
HLTH.unit({
  id:"W3", n:3, added:"2026-10-26",
  title:"Health Research: Study Designs and Population Health Measures",
  short:"Study designs & measures",
  blurb:"How health research is designed, which designs give the strongest evidence, and how population health is measured.",
  topics:[
    "Qualitative vs quantitative research, epidemiology, Bradford Hill",
    "Observational designs and confounding",
    "Cohort vs case-control: relative risk and odds ratio",
    "RCTs, clinical trial phases, evidence pyramid",
    "Mortality, morbidity, prevalence, incidence",
    "PYLL, QALY, DALY, HALE"
  ],
  lectures:[
    "Week 3 Part 1: Introduction to Health Research: Study Designs",
    "Week 3 Part 2: Observational Studies",
    "Week 3 Part 3: Experimental Studies & Evidence Pyramid",
    "Week 3 Part 4: Population Health Measures"
  ],

  terms:[
    {id:"W3-T-qualitative-research", term:"Qualitative research",
     def:"Research that studies particular instances, generates hypotheses and is generally inductive (works from the particular instance to the general conclusion). It answers 'why?' and 'what does it mean?' questions and captures rich, contextual, detailed information from a small number of participants. Sampling gives representative coverage of ideas or concepts.",
     ex:"Study question: What is the experience of being treated for breast cancer?",
     src:"W3 Part 1, slide 2", ch:"W3-C1", added:"2026-10-26"},
    {id:"W3-T-quantitative-research", term:"Quantitative research",
     def:"Research that identifies general principles, tests hypotheses and is generally deductive (works from the general theory to the particular explanation). It answers 'what?', 'how much?' and 'how many?' and gives numeric estimates of frequency, severity and associations from a large number of participants. It uses counting, rigorous study designs and statistical analysis to minimize the role of human judgment.",
     ex:"Study question: Does treatment for breast cancer reduce mortality and improve quality of life?",
     src:"W3 Part 1, slides 2-3", ch:"W3-C1", added:"2026-10-26"},
    {id:"W3-T-epidemiology", term:"Epidemiology",
     def:"The study of the occurrence of disease in populations, from the Greek 'epi' (upon) and 'demos' (people). It operates within public health and emphasizes prevention through reducing risk factors. It is a comparative discipline: it compares the risk of disease in people exposed to an agent with those not exposed. The ultimate goal is to establish whether a relationship is causal.",
     src:"W3 Part 1, slide 4", ch:"W3-C1", added:"2026-10-26"},
    {id:"W3-T-austin-bradford-hill", term:"Austin Bradford Hill (1965) criteria",
     def:"In 1965 Austin Bradford Hill proposed criteria for assessing whether an epidemiological relationship is causal: strength of association (high relative risk), a graded response to a graded dose, consistency, a temporal relationship, and a plausible mechanism.",
     ex:"If people who smoke more cigarettes per day get more disease, that is a graded response to a graded dose.",
     src:"W3 Part 1, slide 5", ch:"W3-C1", added:"2026-10-26"},
    {id:"W3-T-observational-study", term:"Observational study",
     def:"A study where the researcher observes what happens to people under exposure conditions outside the researcher's control. It is a non-randomized design, so confounders can make it hard to infer causation. Two types: descriptive and analytical.",
     src:"W3 Part 2, slides 3, 6", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-confounding", term:"Confounding (confounder)",
     def:"Occurs when a third variable is associated with BOTH the exposure and the outcome being studied. If it is not taken into account, the relationship between the other two variables may be misinterpreted. Exposed and unexposed groups may differ on such factors, which may be the true cause of the outcome. The slides contrast a risk marker with a risk (or causal) factor.",
     ex:"Birth order 4th or higher seemed linked to Down syndrome. Maternal age over 35 is linked to both. Adjusting for maternal age made the birth order association disappear.",
     src:"W3 Part 2, slides 3-5", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-descriptive-study", term:"Descriptive study",
     def:"An observational study that does NOT test hypotheses. It describes how things are and is useful for public health agencies and health care planning. Case studies and case series are also descriptive.",
     ex:"The National College Health Assessment survey of the health habits of post-secondary students.",
     src:"W3 Part 2, slides 6, 8", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-analytical-study", term:"Analytical study",
     def:"An observational study that tests a hypothesis. It looks at an outcome variable (like CVD) in relation to an exposure variable (like smoking or obesity) to test a predicted association. Types: cross-sectional, cohort and case-control.",
     src:"W3 Part 2, slides 6, 12", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-case-study", term:"Case study",
     def:"A descriptive study of one diseased individual, giving a detailed description of an uncommon disease. It provides timely or rare information, does not test a hypothesis and has no comparison or control group.",
     src:"W3 Part 2, slide 8", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-case-series", term:"Case series",
     def:"A descriptive study of multiple occurrences of unusual cases that have similar characteristics. Investigators can calculate the frequency of symptoms or characteristics of people with the disease. Results may generate causal hypotheses but do NOT test one. Usually carried out by clinicians and published in medical journals. No comparison or control group.",
     ex:"Hymes et al. (1981): eight cases of Kaposi's sarcoma.",
     src:"W3 Part 2, slides 8-10", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-hymes-1981", term:"Hymes et al. (1981)",
     def:"Case series published in the Lancet in 1981: 'Kaposi's sarcoma in homosexual men: a report of eight cases'. The lecture's example of a case series; the slide asks students to consider its historical relevance.",
     src:"W3 Part 2, slide 9", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-wakefield-1998", term:"Wakefield et al. (1998) MMR case series",
     def:"Lancet case series of 12 children with neuropsychiatric diagnoses (mostly autism) where parents or a pediatrician named the MMR vaccine as the cause, with symptoms appearing from 24 hours to weeks later. The slide calls it one of the most infamous case series published.",
     ex:"Like every case series, it had no control group and could not test whether MMR causes autism.",
     src:"W3 Part 2, slides 8, 10", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-cross-sectional-study", term:"Cross-sectional study",
     def:"An analytical observational survey in which the purpose of the analysis is to record associations between variables, rather than merely to report how often they occur (that would be descriptive). On the design tree, sampling is based on neither exposure nor outcome.",
     ex:"Bobak et al. (2003), beer and obesity: in men, waist-to-hip ratio was related to beer intake, but the association became insignificant when other risk factors were controlled.",
     src:"W3 Part 2, slides 11-13", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-ecological-study", term:"Ecological study",
     def:"A study that measures variables at the level of populations rather than individuals. Advantages: can give powerful clues when comparing large populations, and can use data already available, like government statistics. Disadvantage: cannot prove cause and effect, because the two factors must be studied in individuals.",
     ex:"Colli and Colli (2006): prostate cancer mortality vs per-capita sugar consumption in 71 countries. Also the diet-cancer correlation, and following migrating populations to compare cancer rates.",
     src:"W3 Part 2, slides 27-28", ch:"W3-C2", added:"2026-10-26"},
    {id:"W3-T-cohort-study", term:"Cohort study",
     def:"An analytical observational study, also called longitudinal or prospective. It selects a population without the disease of interest, groups people by exposure (e.g. smokers vs non-smokers) and follows them over time, sometimes years. The number of new (incident) cases is recorded and compared between exposure groups. Sampling is based on exposure.",
     ex:"The Framingham Heart Study.",
     src:"W3 Part 2, slides 15-16", ch:"W3-C3", added:"2026-10-26"},
    {id:"W3-T-framingham-heart-study", term:"Framingham Heart Study",
     def:"A famous cohort study started in 1948 in Framingham, Massachusetts, on risk factors for coronary heart disease (exercise, tobacco, blood pressure, cholesterol, obesity, etc.). Data include two generations after the initial families studied, with over 1000 publications.",
     ex:"Hubert et al. (1983) followed 5209 men and women of the original cohort for 26 years and found obesity was an independent risk factor for cardiovascular disease.",
     src:"W3 Part 2, slides 19-20", ch:"W3-C3", added:"2026-10-26"},
    {id:"W3-T-relative-risk", term:"Relative risk (RR)",
     def:"Also called the risk ratio; used in cohort studies. Risk in the exposed group is a/(a+b) (the incidence); risk in the unexposed is c/(c+d). RR = [a/(a+b)] / [c/(c+d)]. An RR greater than 1.0 means a person who was exposed has a greater chance of becoming diseased than a person who was not.",
     ex:"Exposed: 40 of 400 get the disease (0.10). Unexposed: 15 of 600 (0.025). RR = 0.10 / 0.025 = 4.0.",
     src:"W3 Part 2, slide 17", ch:"W3-C3", added:"2026-10-26"},
    {id:"W3-T-case-control-study", term:"Case-control study",
     def:"An analytical observational study, also called retrospective. The health profiles of a 'case' group (has the disease or outcome) are compared with a control group (without it) selected to be as similar as possible to the cases (similar spread of ages, sex, etc.). Researchers review records back in time for exposure. Sampling is based on outcome.",
     ex:"Pan et al. (2004): 21,022 cancer cases and 5,039 controls in Canada, looking at obesity.",
     src:"W3 Part 2, slides 21-22, 25", ch:"W3-C3", added:"2026-10-26"},
    {id:"W3-T-odds-ratio", term:"Odds ratio (OR)",
     def:"Used in case-control studies. Odds that a case was exposed = a/c; odds that a control was exposed = b/d. OR = (a/c)/(b/d) = ad/bc. An OR greater than 1.0 means diseased people had a greater chance of having been exposed to the risk factor than controls. The OR can approximate the RR when the disease is rare.",
     ex:"Pan et al. (2004): obese people had an odds ratio of 1.34 for overall cancer and 2.74 for kidney cancer, compared with BMI under 25.",
     src:"W3 Part 2, slides 23, 25", ch:"W3-C3", added:"2026-10-26"},
    {id:"W3-T-recall-bias", term:"Memory and recall bias",
     def:"A data quality problem of retrospective (case-control) studies: they rely on past information, so they have more problems with data quality, including memory and recall bias.",
     src:"W3 Part 2, slide 24", ch:"W3-C3", added:"2026-10-26"},
    {id:"W3-T-experimental-study", term:"Experimental (interventional) study",
     def:"A study that tests the effects of a treatment (medical or surgical procedure, new drug, lifestyle change, dietary change) where the researcher controls the intervention: its timing, dose and intensity. The test question: is the investigator controlling the primary exposure?",
     ex:"A study in which your diet is prescribed and provided and you keep a food diary is experimental. If you choose what you eat and only your weight is monitored, it is observational.",
     src:"W3 Part 3, slides 3-4", ch:"W3-C4", added:"2026-10-26"},
    {id:"W3-T-randomized-controlled-trial", term:"Randomized controlled trial (RCT)",
     def:"The 'gold standard' for evaluation. State the hypothesis; assemble participants as similar as possible (with free and informed consent); randomly assign them to the experimental group or a control group, which may get no treatment, the conventional treatment or a placebo; give the intervention, preferably double-blind; and monitor outcomes at a pre-determined time (e.g. mortality, functional health status, physiological or biochemical measures).",
     ex:"Sacher et al. (2010): 116 obese children randomly assigned to the MEND program or a waiting list control.",
     src:"W3 Part 3, slides 6-8, 12", ch:"W3-C4", added:"2026-10-26"},
    {id:"W3-T-randomization", term:"Randomization",
     def:"Random assignment of participants to study groups. Its advantage is that confounding factors, like genetic characteristics, are likely equally represented in each group. Assuming no systematic error or bias, the only thing that should differ between two randomly assigned groups is the intervention.",
     src:"W3 Part 3, slide 9", ch:"W3-C4", added:"2026-10-26"},
    {id:"W3-T-null-hypothesis", term:"Null hypothesis",
     def:"The hypothesis that the experimental treatment had no effect. If the probability (p) that the observed difference is due to chance alone is less than 1 in 20 (p ≤ 0.05), the null hypothesis is disproved and the observed difference is significant.",
     src:"W3 Part 3, slide 10", ch:"W3-C4", added:"2026-10-26"},
    {id:"W3-T-rct-ethics", term:"Ethics of RCTs",
     def:"Tension between two principles: it is unethical to deny a patient access to an effective treatment, and it is unethical to adopt a new treatment without rigorous testing to prove efficacy. An RCT should only be used when there is 'genuine uncertainty' about whether the treatment is superior. It is also unethical to continue a trial once the treatment is found to be obviously effective or obviously dangerous.",
     src:"W3 Part 3, slide 11", ch:"W3-C4", added:"2026-10-26"},
    {id:"W3-T-clinical-trial-phases", term:"Clinical trial phases (I to IV)",
     def:"Medications and vaccines are tested in phases before approval by regulators (Health Products and Food Branch (HPFB) of Health Canada; FDA in the US). Phase I: small group, side effects and safe dosage. Phase II: larger groups, efficacy and safety (usually not randomized). Phase III: series of RCTs to confirm efficacy, monitor side effects and compare to other common treatments. Phase IV: after approval and public use, post-marketing surveillance of efficacy and side effects (not RCTs).",
     src:"W3 Part 3, slide 13", ch:"W3-C4", added:"2026-10-26"},
    {id:"W3-T-evidence-pyramid", term:"Evidence (study design) pyramid",
     def:"Ranks study designs by strength of evidence, which increases toward the top. Top to bottom: meta-analysis, systematic review, practice guideline, randomized control trial, cohort study, case control study, case reports/series.",
     src:"W3 Part 3, slides 14, 21", ch:"W3-C5", added:"2026-10-26"},
    {id:"W3-T-practice-guideline", term:"Practice guideline",
     def:"Also called an evidence-based or clinical guideline. A statement by a panel of experts after an extensive review of the literature, created by professional associations, government agencies or public/private organizations. It gives guidance for integrating information into clinical practice.",
     ex:"Canadian Task Force on Preventive Health Care (CTFPHC) guideline on prevention and management of overweight and obesity in children and youth in primary health care.",
     src:"W3 Part 3, slides 15-16", ch:"W3-C5", added:"2026-10-26"},
    {id:"W3-T-systematic-review", term:"Systematic review",
     def:"A document written by a panel that gives a comprehensive review of all relevant studies on a particular health topic or question, with stringent selection criteria for including studies. Cochrane Database systematic reviews include a plain language summary.",
     ex:"Kothandan (2014): school-based vs family-based interventions for childhood obesity; study quality was appraised with the CASP tool.",
     src:"W3 Part 3, slides 17-18", ch:"W3-C5", added:"2026-10-26"},
    {id:"W3-T-meta-analysis", term:"Meta-analysis",
     def:"A method to systematically combine data from different studies to develop a single conclusion. It can establish statistical significance when studies have conflicting results. Combining data from several RCTs is the highest level of evidence. Cochrane databases also contain meta-analyses.",
     ex:"Ho et al. (2012) pooled studies comparing lifestyle interventions with no-treatment or wait-list controls for child obesity.",
     src:"W3 Part 3, slides 19-20", ch:"W3-C5", added:"2026-10-26"},
    {id:"W3-T-five-ds", term:"The five Ds",
     def:"The scope of health measures: death, disease, disability, discomfort and distress. Measures range from objective and numerical to subjective and qualitative.",
     src:"W3 Part 4, slide 2", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-aggregate-measures", term:"Aggregate measures",
     def:"Population-level indicators made of combined data from individual people, summarized at regional or national levels.",
     ex:"Prevalence of obesity.",
     src:"W3 Part 4, slide 3", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-environmental-indicators", term:"Environmental indicators",
     def:"Population-level indicators of factors external to the individual, such as air or water quality. They can also be social characteristics, and may have analogues at the individual level.",
     src:"W3 Part 4, slide 3", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-global-indicators", term:"Global indicators",
     def:"Population-level indicators with no analogues at the individual level.",
     ex:"Healthy public policy; social equity in access to health care.",
     src:"W3 Part 4, slide 3", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-mortality", term:"Mortality and mortality rate",
     def:"Mortality is the state of being mortal, or the incidence of death (number of deaths) in a population. The mortality rate is the rate at which members of a population die during a specific period: numerator = number of people dying during the period; denominator = size of the population at the middle of the period. International agencies use mortality (e.g. death rates per 1000) to compare countries.",
     ex:"Canada, 2020: malignant neoplasms caused 26.4% of all deaths and diseases of the heart 17.5%.",
     src:"W3 Part 4, slides 2, 5-6", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-morbidity", term:"Morbidity",
     def:"The disease state of an individual, or the incidence of illness in a population. Measured with prevalence and incidence.",
     src:"W3 Part 4, slide 5", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-infant-mortality-rate", term:"Infant mortality rate",
     def:"Deaths among children under 1 year old divided by the number of live births in the same year, times 1,000.",
     ex:"In Canada from 1971 to 1996, infant mortality fell in every income quintile, but the poorest quintile stayed highest and the richest lowest (Wilkins, Statistics Canada, 2003).",
     src:"W3 Part 4, slide 7", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-life-expectancy", term:"Life expectancy",
     def:"An estimate of the expected number of years to be lived by a newborn, based on age-specific mortality rates. A summary indicator of health that can be compared across countries.",
     src:"W3 Part 4, slide 8", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-prevalence", term:"Prevalence",
     def:"A measure of disease state: the number of people with a given characteristic (commonly a disease or risk factor) at a given time, divided by the population at risk of having that condition. Good for assessing the burden of chronic disease. It answers: how many people are sick?",
     ex:"1,500 of 10,000 adults have asthma on a given day: prevalence = 15%.",
     src:"W3 Part 4, slide 9", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-incidence", term:"Incidence",
     def:"A measure of the speed at which new cases of disease (or deaths) arise in a population during a fixed time: the number of new cases in a specified time divided by the number of people in the population at risk. Useful for communicating risk. It can be measured in a cohort study and used to calculate a relative risk. It answers: how many people get sick?",
     ex:"400 new cases in one year among 8,000 people at risk: incidence = 5% per year.",
     src:"W3 Part 4, slide 10", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-health-measurement-scales", term:"Health measurement scales",
     def:"More subjective indicators of health. They are used because morbidity and mortality measures only apply to serious conditions, give no indication of positive aspects of health, and do not show level of function.",
     ex:"Short-form 36 Survey (SF-36); Canadian Index of Wellbeing.",
     src:"W3 Part 4, slide 11", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-pyll", term:"Potential years of life lost (PYLL)",
     def:"One way to judge diseases by their impact on society: rank them by the total potential years of life lost due to each. Priorities based on PYLL will differ from priorities based on simple mortality rates.",
     ex:"Canada, 2004 to 2007: cancer ranked first on both measures, but unintentional injury and suicide had PYLL bars longer than their mortality-rate bars.",
     src:"W3 Part 4, slides 12-13", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-qaly", term:"Quality-Adjusted Life Years (QALYs)",
     def:"A measure that combines morbidity and mortality outcomes by adjusting years of life for their quality. Example from the slides: one year after a disabling stroke might be worth 0.8 normal years.",
     ex:"Twins Bob and Bill both die at 65. Bob had a stroke at 55. Quality-adjusting his last 10 years: 10 - (10 x 0.8) = 2 years lost.",
     src:"W3 Part 4, slides 12, 15", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-daly", term:"Disability-Adjusted Life Years (DALYs)",
     def:"Listed with QALYs and HALE as a disease impact measure that combines morbidity and mortality outcomes.",
     src:"W3 Part 4, slides 12, 14", ch:"W3-C6", added:"2026-10-26"},
    {id:"W3-T-hale", term:"Health-Adjusted Life Expectancy (HALE)",
     def:"An indicator of the average number of years an individual is expected to live in a healthy state, so it reflects both quality and quantity of life. HALE in Canada (2012) was reported by SES, by chronic disease (diabetes and cancer) and by chronic conditions (hypertension).",
     src:"W3 Part 4, slide 16", ch:"W3-C6", added:"2026-10-26"}
  ],

  chapters:[
    {id:"W3-C1", title:"Research basics and causation", src:"W3 Part 1, slides 2-6",
     blurb:"Qualitative vs quantitative research, epidemiology, Bradford Hill criteria and the design tree.",
     learn:"Health research is <b>qualitative</b> or <b>quantitative</b>. Qualitative research studies particular instances, generates hypotheses, works inductively and answers 'why?' with rich detail from a few people. Quantitative research looks for general principles, tests hypotheses, works deductively and gives numbers (frequency, severity, associations) from many people, using counting, rigorous designs and statistics.<br><br><b>Epidemiology</b> is the study of the occurrence of disease in populations ('epi' upon, 'demos' people). It compares the risk of disease in people exposed to an agent with people not exposed, and tries to establish whether the relationship is causal.<br><br><b>Austin Bradford Hill (1965)</b> listed criteria for causation: strength of association (high relative risk), a graded response to a graded dose, consistency, a temporal relationship and a plausible mechanism.<br><br>The design tree starts with one question: did the investigator assign the exposure? Yes: experimental. No: observational.",
     steps:[
       {id:"W3-C1-S1", type:"compare", src:"W3 Part 1, slide 2", added:"2026-10-26",
        prompt:"Decide whether each study is qualitative or quantitative.",
        a:{name:"Qualitative research", points:["Studies particular instances","Generates hypotheses","Inductive: particular to general","Answers 'why?' and 'what does it mean?'","Rich detail from a small number of participants"]},
        b:{name:"Quantitative research", points:["Identifies general principles","Tests hypotheses","Deductive: general theory to particular explanation","Answers 'what?', 'how much?', 'how many?'","Numeric estimates from a large number of participants"]},
        scenarios:[
          ["In-depth interviews with 12 women about what it is like to be treated for breast cancer.", 0, "Studies particular experiences and asks what they mean: qualitative."],
          ["A survey of 5,000 adults to estimate how many smoke daily.", 1, "Asks 'how many?' with a large sample: quantitative."],
          ["A trial testing whether a breast cancer treatment reduces mortality.", 1, "Tests a hypothesis and measures 'how much': quantitative."],
          ["Focus groups exploring why students skip breakfast, used to come up with new hypotheses.", 0, "Generates hypotheses from rich detail: qualitative."],
          ["Statistical analysis of the association between obesity and heart disease in 5,000 people.", 1, "Looks for statistical associations between variables: quantitative."]
        ]},
       {id:"W3-C1-S2", type:"match", src:"W3 Part 1, slide 5", added:"2026-10-26",
        prompt:"Match each Bradford Hill criterion to an example of it.",
        pairs:[
          ["Strength of association", "Smokers have a relative risk of lung disease far above 1.0"],
          ["Graded response to a graded dose", "The more cigarettes per day, the more disease"],
          ["Consistency", "The same link shows up across different studies"],
          ["Temporal relationship", "The exposure comes before the disease"],
          ["Plausible mechanism", "There is a believable biological explanation for how exposure causes disease"]
        ]},
       {id:"W3-C1-S3", type:"label", fig:"designs", src:"W3 Part 1, slide 6", added:"2026-10-26",
        prompt:"Drag each study design onto the decision tree. Start at the top: did the investigator assign exposures?"},
       {id:"W3-C1-S4", type:"mcq", src:"W3 Part 1, slide 6", ch:"W3-C1", added:"2026-10-26",
        case:"Researchers want to know if a new exercise program lowers blood pressure. They decide who joins the program and who does not, and they set how often and how hard each person exercises.",
        q:"Where does this study start on the design tree?",
        opts:[
          ["Experimental study, because the investigator assigned the exposure", true, "The first question is whether the investigator assigned exposures. Here they did, so it is experimental."],
          ["Observational study, because blood pressure is only measured", false, "Measuring an outcome does not make a study observational. The question is who controls the exposure."],
          ["Descriptive study, because no hypothesis is stated", false, "A hypothesis is being tested (does the program lower blood pressure?), and the exposure is assigned."],
          ["Cohort study, because participants are followed over time", false, "Cohorts are observational: people are grouped by exposures they chose, not ones the researcher assigned."]
        ]}
     ],
     summary:"Qualitative research generates hypotheses; quantitative research tests them. Epidemiology compares exposed and unexposed groups, and the Bradford Hill criteria help judge causation."},

    {id:"W3-C2", title:"Observational studies and confounding", src:"W3 Part 2, slides 2-14, 27-28",
     blurb:"Confounding, descriptive vs analytical designs, case studies and series, cross-sectional and ecological studies.",
     learn:"In an <b>observational study</b> the researcher watches what happens under exposures they do not control. Groups are not randomized, so exposed and unexposed people may differ on other factors that are the true cause. A <b>confounder</b> is a third variable linked to both the exposure and the outcome. Example: birth order 4th or higher seemed linked to Down syndrome, but higher birth order goes with maternal age over 35. After adjusting for maternal age, the link disappeared.<br><br><b>Descriptive</b> studies do not test hypotheses; they describe how things are. A <b>case study</b> looks at one patient; a <b>case series</b> at several similar unusual cases (Hymes 1981; Wakefield 1998). Neither has a control group, so they can only generate hypotheses.<br><br><b>Analytical</b> studies test a hypothesis about an exposure and an outcome. A <b>cross-sectional</b> study records associations between variables. An <b>ecological</b> study measures whole populations, not individuals, so it cannot prove cause and effect.",
     steps:[
       {id:"W3-C2-S1", type:"mcq", src:"W3 Part 2, slides 4-5", ch:"W3-C2", added:"2026-10-26",
        case:"A study finds that people who carry matches or lighters have more lung cancer. People who smoke are more likely to carry matches, and smoking is linked to lung cancer.",
        q:"In this study, what is smoking?",
        opts:[
          ["The outcome being studied", false, "The outcome is lung cancer."],
          ["A confounder", true, "Smoking is associated with both the exposure (carrying matches) and the outcome (lung cancer). Ignoring it would make carrying matches look like a cause."],
          ["The exposure being studied", false, "The exposure under study is carrying matches. Smoking is the third variable."],
          ["A temporal relationship", false, "A temporal relationship is a Bradford Hill criterion about timing, not a variable."]
        ]},
       {id:"W3-C2-S2", type:"sort", src:"W3 Part 2, slides 6, 8, 12", added:"2026-10-26",
        prompt:"Sort each study into descriptive (no hypothesis tested) or analytical (tests a hypothesis).",
        bins:["Descriptive","Analytical"],
        items:[
          ["A detailed report of one patient with a rare disease", 0, "A case study describes one individual and tests nothing."],
          ["The National College Health Assessment survey of students' health habits", 0, "The slides use it as the descriptive example: it describes how things are."],
          ["A report of eight men with Kaposi's sarcoma", 0, "A case series. It may generate hypotheses but does not test one."],
          ["A survey testing whether beer intake is associated with waist-to-hip ratio", 1, "A cross-sectional study recording an association between variables."],
          ["Following smokers and non-smokers for 20 years to compare heart disease", 1, "A cohort study testing an exposure-outcome hypothesis."],
          ["Comparing past exposures of people with and without a cancer", 1, "A case-control study testing an association."],
          ["Counting how often each symptom appears in 12 unusual cases", 0, "Case series can calculate the frequency of symptoms but still do not test a hypothesis."]
        ]},
       {id:"W3-C2-S3", type:"table", src:"W3 Part 2, slide 10", added:"2026-10-26",
        prompt:"This table is from one of the most infamous case series ever published.",
        caption:"Table 1: Neuropsychiatric diagnosis and interval post MMR vaccination. Adapted from Table 2 in Wakefield et al. (1998), Lancet 351:637-641.",
        head:["Child","Behavioral Diagnosis","Causal agent (identified by parents or pediatrician)","Interval from exposure to symptoms"],
        rows:[
          ["1","Autism","MMR","1 week"],
          ["2","Autism","MMR","2 weeks"],
          ["3","Autism","MMR","48 hours"],
          ["4","Autism? Disintegrative disorder?","MMR","Dramatic deterioration immediately after MMR booster at 4.5 years"],
          ["5","Autism","None, but MMR at 16 months","Self-injurious behavior started at 18 months"],
          ["6","Autism","MMR","1 week"],
          ["7","Autism","MMR","24 hours"],
          ["8","Post-vaccinial encephalitis?","MMR","2 weeks"],
          ["9","Autistic spectrum disorder","Recurrent inner-ear infections","1 week (MMR 2 months previously)"],
          ["10","Post-viral encephalitis?","Measles (previously vaccinated with MMR)","24 hours"],
          ["11","Autism","MMR","1 week"],
          ["12","Autism","None, but MMR at 15 months","Developmental deterioration noted at 16 months"]
        ],
        qs:[
          {id:"W3-C2-S3-Q1", type:"mcq", src:"W3 Part 2, slides 8, 10", ch:"W3-C2", added:"2026-10-26",
           q:"What is the main reason this study cannot show that MMR causes autism?",
           opts:[
             ["It has no comparison or control group of children", true, "Case series do not include a control group, so there is nothing to compare these 12 children with. They can generate a hypothesis but not test it."],
             ["It used a sample that was too large", false, "Twelve children is a small sample. Size is not the main design problem named on the slides."],
             ["It measured variables at the population level", false, "That describes an ecological study. This table reports individual children."],
             ["Participants were randomized to receive MMR", false, "No one was randomized. The children were described after the fact."]
           ]},
          {id:"W3-C2-S3-Q2", type:"mcq", src:"W3 Part 2, slide 8", ch:"W3-C2", added:"2026-10-26",
           q:"Who identified the 'causal agent' in the table?",
           opts:[
             ["Parents or a pediatrician", true, "The column heading says the causal agent was identified by parents or pediatrician, not tested by the researchers."],
             ["A randomized trial", false, "No trial was done. The table only reports what was believed about each child."],
             ["A meta-analysis of earlier studies", false, "Nothing was pooled. This is a single case series."],
             ["A matched control group", false, "There was no control group."]
           ]}
        ]},
       {id:"W3-C2-S4", type:"mcq", src:"W3 Part 2, slides 27-28", ch:"W3-C2", added:"2026-10-26",
        case:"Researchers plot per-capita sugar consumption against age-adjusted prostate cancer mortality for 71 countries. Countries with higher sugar intake tend to have higher prostate cancer mortality.",
        q:"Which design is this, and what is its main limit?",
        opts:[
          ["Cross-sectional study; it cannot show associations", false, "Cross-sectional studies do record associations, and they use data on individuals, not country averages."],
          ["Ecological study; it cannot prove cause and effect in individuals", true, "Each data point is a country, so variables are measured at the population level. Cause and effect needs the two factors studied in individuals."],
          ["Cohort study; it is expensive to follow countries over time", false, "No group of disease-free people is followed. Country-level data are compared at once."],
          ["Case series; it has no control group", false, "A case series describes individual patients, not country averages."]
        ]}
     ],
     summary:"Observational studies can be confounded because groups are not randomized. Descriptive studies (including case studies and series) describe; analytical studies test hypotheses."},

    {id:"W3-C3", title:"Cohort and case-control studies", src:"W3 Part 2, slides 15-26",
     blurb:"Prospective vs retrospective designs, relative risk and odds ratio with 2x2 tables.",
     learn:"A <b>cohort study</b> (longitudinal, prospective) starts with people free of the disease, groups them by exposure and follows them over time, counting new (incident) cases in each group. Cohorts use the <b>relative risk</b>: RR = [a/(a+b)] / [c/(c+d)]. RR above 1.0 means the exposed have a greater chance of disease.<br><br>A <b>case-control study</b> (retrospective) starts with the outcome: cases with the disease and similar controls without it. It looks back at past exposure and uses the <b>odds ratio</b>: OR = (a/c)/(b/d) = ad/bc. OR above 1.0 means cases were more likely to have been exposed. OR approximates RR when the disease is rare.<br><br>In the 2x2 table, a = exposed with disease, b = exposed without, c = unexposed with disease, d = unexposed without.<br><br>Cohort: clear time order, fewer confounding problems, many diseases from one cohort, but long and expensive. Case-control: faster, good for rare diseases, but has memory and recall bias.",
     steps:[
       {id:"W3-C3-S1", type:"compare", src:"W3 Part 2, slides 15-26", added:"2026-10-26",
        prompt:"Which design fits each situation?",
        a:{name:"Cohort (prospective)", points:["Groups classified by exposure","Starts with people without the disease","Follows forward in time","Measures incidence and relative risk","Clear temporal relationship; expensive"]},
        b:{name:"Case-control (retrospective)", points:["Groups identified by outcome","Starts with cases and similar controls","Looks back at past exposure","Uses the odds ratio","Good for rare diseases; recall bias"]},
        scenarios:[
          ["300 people with lung cancer and 300 similar people without it are asked about past smoking.", 1, "Groups are chosen by outcome and exposure is recalled: case-control."],
          ["5,000 disease-free adults record their smoking status and are followed for 20 years.", 0, "Groups are defined by exposure and followed forward: cohort."],
          ["A team needs quick results on a very rare cancer.", 1, "Case-control studies are good for rare diseases and take less time."],
          ["Researchers must show clearly that the exposure came before the disease.", 0, "Cohort studies can clearly establish the temporal relationship."],
          ["One group of people will be used to study heart disease, stroke and diabetes.", 0, "Many different diseases can be studied using the same cohort."]
        ]},
       {id:"W3-C3-S2", type:"mcq", src:"W3 Part 2, slide 17", ch:"W3-C3", added:"2026-10-26",
        case:"A cohort study follows 400 factory workers exposed to a solvent and 600 unexposed workers for 10 years. 40 exposed workers and 15 unexposed workers develop liver disease.",
        q:"What is the relative risk of liver disease for exposed workers?",
        opts:[
          ["2.7", false, "This is 40/15, the ratio of case counts. RR compares risks, so divide each count by its group size first."],
          ["0.25", false, "This is the inverse (0.025/0.10). The exposed risk goes on top."],
          ["4.0", true, "Risk exposed = 40/400 = 0.10. Risk unexposed = 15/600 = 0.025. RR = 0.10 / 0.025 = 4.0."],
          ["0.075", false, "This is the difference in risk (0.10 - 0.025), not the ratio."]
        ]},
       {id:"W3-C3-S3", type:"mcq", src:"W3 Part 2, slide 23", ch:"W3-C3", added:"2026-10-26",
        case:"A case-control study has 80 cases with a disease and 120 controls without it. 48 cases and 36 controls were exposed. So a = 48, b = 36, c = 32, d = 84.",
        q:"What is the odds ratio?",
        opts:[
          ["3.5", true, "OR = ad/bc = (48 x 84) / (36 x 32) = 4032 / 1152 = 3.5."],
          ["1.3", false, "This is 48/36, cases exposed over controls exposed. The OR needs the cross-products ad/bc."],
          ["0.29", false, "This is bc/ad, the inverse. The OR is ad/bc."],
          ["2.0", false, "This is (48/80)/(36/120) = 0.6/0.3, a ratio of proportions exposed, not the odds ratio."]
        ]},
       {id:"W3-C3-S4", type:"table", src:"W3 Part 2, slide 25", added:"2026-10-26",
        prompt:"Read the odds ratios from Pan et al. (2004).",
        caption:"Pan et al. (2004), Association of obesity and cancer risk in Canada: obese (BMI 30 or more) vs BMI under 25, multivariable adjusted odds ratios. 21,022 incident cases of 19 cancer types and 5,039 controls aged 20 to 76, 1994 to 1997.",
        head:["Cancer","Odds ratio","95% CI"],
        rows:[
          ["Overall cancer","1.34","1.22, 1.48"],
          ["Non-Hodgkin's lymphoma","1.46","1.24, 1.72"],
          ["Leukemia","1.61","1.32, 1.96"],
          ["Multiple myeloma","2.06","1.46, 2.89"],
          ["Kidney","2.74","2.30, 3.25"],
          ["Colon","1.93","1.61, 2.31"],
          ["Rectum","1.65","1.36, 2.00"],
          ["Pancreas","1.51","1.19, 1.92"],
          ["Breast (postmenopausal women)","1.66","1.33, 2.06"],
          ["Ovary","1.95","1.44, 2.64"],
          ["Prostate","1.27","1.09, 1.47"]
        ],
        qs:[
          {id:"W3-C3-S4-Q1", type:"mcq", src:"W3 Part 2, slide 25", ch:"W3-C3", added:"2026-10-26",
           q:"Which cancer had the strongest association with obesity in this study?",
           opts:[
             ["Multiple myeloma", false, "OR 2.06 is high, but kidney is higher."],
             ["Kidney", true, "Kidney cancer has the highest odds ratio, 2.74."],
             ["Overall cancer", false, "OR 1.34 is one of the lowest in the table."],
             ["Ovary", false, "OR 1.95 is lower than kidney's 2.74."]
           ]},
          {id:"W3-C3-S4-Q2", type:"mcq", src:"W3 Part 2, slides 21-23", ch:"W3-C3", added:"2026-10-26",
           q:"Why does this study report odds ratios instead of relative risks?",
           opts:[
             ["It is a case-control study, which starts from people with and without cancer", true, "Groups were chosen by outcome (cancer cases vs controls), so the odds of past exposure are compared with an odds ratio."],
             ["It is a cohort study that followed obese people forward", false, "A cohort would report relative risk. This study started with incident cancer cases."],
             ["It is an RCT, and RCTs always use odds ratios", false, "No one was randomly assigned to be obese."],
             ["It is an ecological study of provinces", false, "Data are on individual cases and controls, not population averages."]
           ]}
        ]}
     ],
     summary:"Cohort studies sample on exposure, follow forward and give relative risk. Case-control studies sample on outcome, look back and give the odds ratio."},

    {id:"W3-C4", title:"Experimental studies and RCTs", src:"W3 Part 3, slides 2-13",
     blurb:"Who controls the exposure, randomization, blinding, the null hypothesis, ethics and trial phases.",
     learn:"In an <b>experimental (interventional)</b> study the researcher controls the exposure: its timing, dose and intensity. Ask: is the investigator controlling the primary exposure?<br><br>The <b>randomized controlled trial (RCT)</b> is the 'gold standard'. State the hypothesis; recruit similar participants with free and informed consent; randomly assign them to the experimental group or a control group (no treatment, conventional treatment or placebo); give the intervention, preferably double-blind; measure outcomes at a set time. Randomization makes it likely that confounders, like genetic traits, are spread equally between groups.<br><br>The <b>null hypothesis</b> says the treatment had no effect. If p ≤ 0.05 (less than 1 in 20), the null is disproved and the difference is significant. An RCT is ethical only when there is real uncertainty about which treatment is better, and must stop if the treatment is obviously effective or dangerous.<br><br>Drugs and vaccines go through Phases I to IV, with approval by Health Canada's HPFB or the US FDA.",
     steps:[
       {id:"W3-C4-S1", type:"sort", src:"W3 Part 3, slides 3-4", added:"2026-10-26",
        prompt:"Is the investigator controlling the primary exposure? Sort each study.",
        bins:["Experimental","Observational"],
        items:[
          ["Your diet is prescribed and provided, and you keep a food diary", 0, "The slides' own example: the researcher controls the diet."],
          ["You choose what you eat and your weight is monitored", 1, "The slides' own example: you choose the exposure, so it is observational."],
          ["Patients are randomly assigned to a new drug or a placebo", 0, "The researcher assigns the drug: an RCT."],
          ["116 obese children are randomly assigned to the MEND program or a waiting list", 0, "Sacher et al. (2010) is the lecture's RCT example."],
          ["Framingham residents' blood pressure is recorded and they are followed for decades", 1, "The researchers do not set anyone's blood pressure: a cohort study."],
          ["People with and without cancer are asked about their past diets", 1, "A case-control study: exposure is recalled, not assigned."],
          ["A researcher sets the dose and timing of a walking program, without random allocation", 0, "The investigator assigns the exposure, so it is experimental: a non-randomized design."]
        ]},
       {id:"W3-C4-S2", type:"order", src:"W3 Part 3, slide 13", added:"2026-10-26",
        prompt:"Put the clinical trial phases for a new drug in order.",
        items:[
          "Tested in a small group of people to examine side effects and safe dosage",
          "Tested on larger groups with a focus on efficacy and safety, usually not randomized",
          "Series of RCTs to confirm efficacy, monitor side effects and compare with other common treatments",
          "After approval and public use, continued monitoring for efficacy and side effects (post-marketing surveillance)"
        ],
        why:"Phase I: small group, safety and dose. Phase II: larger groups, efficacy and safety. Phase III: series of RCTs. Phase IV: post-marketing surveillance after approval by HPFB (Health Canada) or the FDA."},
       {id:"W3-C4-S3", type:"mcq", src:"W3 Part 3, slide 10", ch:"W3-C4", added:"2026-10-26",
        case:"In an RCT of a new blood pressure drug, the drug group's blood pressure fell more than the placebo group's. The probability that a difference this large is due to chance alone is p = 0.03.",
        q:"What should the researchers conclude?",
        opts:[
          ["The null hypothesis is supported, because p is small", false, "A small p means the result is unlikely under the null hypothesis, so the null is disproved, not supported."],
          ["The null hypothesis is disproved and the difference is significant", true, "p = 0.03 is below 0.05 (less than 1 in 20), so the difference is significant."],
          ["The result is not significant, because p must be below 0.01", false, "The cut-off on the slides is p ≤ 0.05."],
          ["The trial must be stopped for ethical reasons", false, "A trial stops if the treatment is obviously effective or dangerous. A single significant result does not say that."]
        ]},
       {id:"W3-C4-S4", type:"mcq", src:"W3 Part 3, slide 11", ch:"W3-C4", added:"2026-10-26",
        case:"Halfway through an RCT, the data show that patients on the new treatment are having far more serious harms than the control group.",
        q:"What do the ethics of RCTs require?",
        opts:[
          ["Finish the trial so the results are complete", false, "The slides say it is unethical to continue once a treatment is obviously dangerous."],
          ["Switch the control group to the new treatment", false, "That would expose more people to a treatment shown to be harmful."],
          ["Stop the trial, because the treatment is obviously dangerous", true, "It is unethical to continue a trial when the treatment is found to be obviously effective or obviously dangerous."],
          ["Remove blinding but keep going", false, "Unblinding does not fix the harm. The trial should stop."]
        ]}
     ],
     summary:"Experimental studies assign the exposure. RCTs use randomization so the intervention is the only systematic difference, and test the null hypothesis at p ≤ 0.05."},

    {id:"W3-C5", title:"The evidence pyramid", src:"W3 Part 3, slides 14-21",
     blurb:"Ranking designs by strength of evidence; practice guidelines, systematic reviews and meta-analyses.",
     learn:"The <b>evidence pyramid</b> ranks study designs. Evidence gets stronger toward the top. From the base up: case reports/series, case control study, cohort study, randomized control trial, practice guideline, systematic review, and meta-analysis at the top.<br><br>A <b>practice guideline</b> (evidence-based or clinical guideline) is a statement by an expert panel, after an extensive literature review, that guides clinical practice. Example: the Canadian Task Force on Preventive Health Care guideline on overweight and obesity in children and youth.<br><br>A <b>systematic review</b> is a panel's comprehensive review of all relevant studies on one question, with stringent selection criteria. A <b>meta-analysis</b> statistically combines data from different studies into one conclusion and can settle studies that conflict. Combining several RCTs is the highest level of evidence.<br><br>One study climbed the pyramid in this lecture: the MEND RCT (Sacher 2010) appears in Kothandan's systematic review (2014) and Ho's meta-analysis (2012).",
     steps:[
       {id:"W3-C5-S1", type:"label", fig:"pyramid", src:"W3 Part 3, slide 14", added:"2026-10-26",
        prompt:"Place each design on the evidence pyramid, strongest evidence at the top."},
       {id:"W3-C5-S2", type:"match", src:"W3 Part 2, slides 8, 15; W3 Part 3, slides 6, 15, 17, 19", added:"2026-10-26",
        prompt:"Match each level of the pyramid to its description.",
        pairs:[
          ["Meta-analysis", "Statistically combines data from different studies into a single conclusion"],
          ["Systematic review", "A panel's comprehensive review of all relevant studies, with stringent selection criteria"],
          ["Practice guideline", "Expert panel statement on how to integrate evidence into clinical practice"],
          ["Randomized control trial", "Participants randomly assigned to an experimental or control group"],
          ["Cohort study", "People without the disease grouped by exposure and followed over time"],
          ["Case reports/series", "Unusual cases described in detail, with no control group"]
        ]},
       {id:"W3-C5-S3", type:"mcq", src:"W3 Part 3, slides 18-20", ch:"W3-C5", added:"2026-10-26",
        case:"Ho et al. (2012) took the results of many trials of child obesity lifestyle programs, including the MEND trial, and pooled the numbers to get one overall estimate: a BMI change of -1.25 kg/m² compared with no-treatment or wait-list controls.",
        q:"What did Ho et al. carry out?",
        opts:[
          ["A practice guideline", false, "A guideline is an expert panel's guidance for clinical practice. It does not pool numbers into one estimate."],
          ["A randomized controlled trial", false, "Ho et al. did not assign anyone to groups. They combined data from trials others ran."],
          ["A case series", false, "A case series describes individual patients and has no pooled analysis."],
          ["A meta-analysis", true, "Systematically combining data from different studies into a single conclusion is a meta-analysis. Pooling RCTs is the highest level of evidence."]
        ]}
     ],
     summary:"Meta-analyses and systematic reviews sit at the top of the pyramid; case reports and series sit at the base."},

    {id:"W3-C6", title:"Population health measures", src:"W3 Part 4, slides 2-16",
     blurb:"The five Ds, indicator types, mortality and morbidity, prevalence and incidence, PYLL, QALY, DALY, HALE.",
     learn:"Health measures cover <b>the five Ds</b>: death, disease, disability, discomfort and distress. Population indicators come in three kinds: <b>aggregate</b> (individual data summarized for a region, e.g. prevalence of obesity), <b>environmental</b> (factors outside the person, like air or water quality, or social traits) and <b>global</b> (no individual analogue, e.g. healthy public policy).<br><br><b>Mortality</b> is the incidence of death; <b>morbidity</b> is disease in a person or illness in a population. Morbidity is measured by <b>prevalence</b> (people with the condition at a given time: how many are sick?) and <b>incidence</b> (new cases in a fixed time: how many get sick?). <b>Life expectancy</b> estimates years a newborn will live, from age-specific mortality rates.<br><br>These measures only cover serious conditions. <b>PYLL</b> ranks diseases by years of life lost. <b>QALYs</b>, <b>DALYs</b> and <b>HALE</b> combine morbidity and mortality. If a year after a stroke is worth 0.8, then 10 such years count as 8, so 2 years are lost.",
     steps:[
       {id:"W3-C6-S1", type:"sort", src:"W3 Part 4, slide 3", added:"2026-10-26",
        prompt:"Sort each population-level indicator into its class.",
        bins:["Aggregate","Environmental","Global"],
        items:[
          ["Prevalence of obesity in Ontario", 0, "Individual data combined and summarized at a regional level."],
          ["Average blood pressure of adults in a region", 0, "Built from individual measurements: aggregate."],
          ["Air quality in a city", 1, "A factor external to the individual."],
          ["Water quality in a town", 1, "A factor external to the individual."],
          ["Social characteristics of a neighbourhood", 1, "The slides say environmental indicators can also be social characteristics."],
          ["Healthy public policy", 2, "Has no analogue at the individual level."],
          ["Social equity in access to health care", 2, "Has no analogue at the individual level."]
        ]},
       {id:"W3-C6-S2", type:"sort", src:"W3 Part 4, slides 9-10", added:"2026-10-26",
        prompt:"Prevalence or incidence?",
        bins:["Prevalence","Incidence"],
        items:[
          ["How many people are sick?", 0, "Prevalence counts everyone with the condition at a given time."],
          ["How many people get sick?", 1, "Incidence counts new cases in a fixed time."],
          ["Good for assessing the burden of chronic disease", 0, "Stated on the prevalence slide."],
          ["Useful for communicating the idea of risk", 1, "Stated on the incidence slide."],
          ["Measured in a cohort study and used to calculate relative risk", 1, "a/(a+b) in a cohort is the incidence in the exposed."],
          ["Number of Canadians living with diabetes on January 1", 0, "Everyone with the condition at one point in time."],
          ["New flu cases in a school during March", 1, "New cases during a fixed period."]
        ]},
       {id:"W3-C6-S3", type:"table", src:"W3 Part 4, slide 6", added:"2026-10-26",
        prompt:"Read the leading causes of death chart from the mortality rates slide.",
        caption:"Ten leading causes of death, Canada, 2020 (sexes combined, all ages). Percentage of all deaths, as printed. Source: Statistics Canada.",
        head:["Cause of death","Percentage of all deaths"],
        rows:[
          ["Malignant neoplasms","26.4%"],
          ["Diseases of the heart","17.5%"],
          ["COVID-19","5.25%"],
          ["Unintentional injuries (accidents)","4.4%"],
          ["Cerebrovascular disease","4.5%"],
          ["Chronic lower respiratory disease","4.2%"],
          ["Diabetes mellitus","2.5%"],
          ["Influenza & pneumonia","1.9%"],
          ["Alzheimer's disease","1.9%"],
          ["Chronic liver disease & Cirrhosis","1.4%"],
          ["All other causes","42%"]
        ],
        qs:[
          {id:"W3-C6-S3-Q1", type:"mcq", src:"W3 Part 4, slide 6", ch:"W3-C6", added:"2026-10-26",
           q:"Together, what share of all 2020 deaths in Canada did the top two causes account for?",
           opts:[
             ["17.5%", false, "That is diseases of the heart alone."],
             ["31.65%", false, "That is malignant neoplasms plus COVID-19 (26.4 + 5.25)."],
             ["43.9%", true, "Malignant neoplasms 26.4% + diseases of the heart 17.5% = 43.9%."],
             ["42%", false, "That is the share for all other causes outside the top ten."]
           ]},
          {id:"W3-C6-S3-Q2", type:"mcq", src:"W3 Part 4, slides 5-6", ch:"W3-C6", added:"2026-10-26",
           q:"This chart is an example of which kind of measure?",
           opts:[
             ["A mortality measure", true, "It shows deaths by cause, which is mortality: the incidence of death in a population."],
             ["A morbidity measure", false, "Morbidity is about illness (prevalence, incidence of disease), not deaths."],
             ["A health measurement scale", false, "Scales like the SF-36 are subjective indicators of health and function."],
             ["A HALE estimate", false, "HALE estimates years lived in a healthy state."]
           ]}
        ]},
       {id:"W3-C6-S4", type:"mcq", src:"W3 Part 4, slide 15", ch:"W3-C6", added:"2026-10-26",
        case:"Priya has a heart attack at 50 and lives to 70. Assume each year she lives after the heart attack is worth 0.75 of a normal year. Her twin sister, with no heart attack, also dies at 70.",
        q:"Using the QALY method from the Bob and Bill example, how many years did the heart attack cost Priya?",
        opts:[
          ["15 years", false, "15 is the quality-adjusted years she lived (20 x 0.75), not the years lost."],
          ["20 years", false, "20 is the number of years she lived after the heart attack. They are not all lost, only adjusted."],
          ["0 years", false, "Both twins died at 70, so no years of life were lost, but quality-adjusted years were."],
          ["5 years", true, "20 years x 0.75 = 15 quality-adjusted years. 20 - 15 = 5 years lost."]
        ]}
     ],
     summary:"Mortality counts deaths; morbidity is measured by prevalence and incidence. PYLL, QALYs, DALYs and HALE add years of life and quality into the picture."}
  ],

  questions:[
    /* ---- C1: research basics ---- */
    {id:"W3-Q01", type:"mcq", ch:"W3-C1", src:"W3 Part 1, slide 2", added:"2026-10-26",
     q:"Which statement describes qualitative research?",
     opts:[
       ["It tests hypotheses and is generally deductive", false, "That describes quantitative research."],
       ["It provides numeric estimates of frequency and severity from many participants", false, "That describes quantitative research."],
       ["It generates hypotheses and is generally inductive", true, "Qualitative research works from particular instances to general conclusions and generates hypotheses."],
       ["Its sampling gives representative coverage of people in the population", false, "Quantitative research samples people; qualitative research samples to cover the range of ideas."]
     ]},
    {id:"W3-Q02", type:"mcq", ch:"W3-C1", src:"W3 Part 1, slides 2-3", added:"2026-10-26",
     case:"A researcher asks: 'Does a new smoking cessation drug reduce the number of cigarettes smoked per day?' She plans to enrol 2,000 smokers.",
     q:"Which type of research is this, and why?",
     opts:[
       ["Qualitative, because it studies the experience of quitting", false, "The question asks 'how much?', not what the experience means."],
       ["Quantitative, because it tests a hypothesis and asks 'how much?'", true, "Testing a hypothesis with numbers from a large sample is quantitative."],
       ["Qualitative, because it is inductive", false, "This study starts with a hypothesis to test, which is deductive."],
       ["Quantitative, because it captures rich detail from a few participants", false, "Rich detail from a few people is a feature of qualitative research."]
     ]},
    {id:"W3-Q03", type:"mcq", ch:"W3-C1", src:"W3 Part 1, slide 4", added:"2026-10-26",
     q:"Epidemiology is described as a 'comparative discipline'. What does it compare?",
     opts:[
       ["The risk of disease in people exposed to an agent with those not exposed", true, "Epidemiology compares disease risk between exposed and unexposed people to judge whether the relationship is causal."],
       ["The experiences of patients treated in different hospitals", false, "That is closer to a qualitative question about experience."],
       ["The cost of treatment between countries", false, "Cost is not part of the slide's definition."],
       ["Health measurement scale scores between individuals", false, "Epidemiology studies disease occurrence in populations."]
     ]},
    {id:"W3-Q04", type:"mcq", ch:"W3-C1", src:"W3 Part 1, slide 5", added:"2026-10-26",
     case:"In a study of air pollution, people living in areas with low, medium and high pollution have progressively higher rates of asthma.",
     q:"Which Bradford Hill criterion does this finding support?",
     opts:[
       ["Consistency", false, "Consistency is about the same result across studies, not across levels of exposure in one study."],
       ["Temporal relationship", false, "That is about the exposure coming before the outcome."],
       ["A graded response to a graded dose", true, "More exposure (pollution) goes with more of the outcome (asthma)."],
       ["Plausible mechanism", false, "That is about a believable explanation for how the exposure causes disease."]
     ]},
    {id:"W3-Q05", type:"mcq", ch:"W3-C1", src:"W3 Part 1, slide 5", added:"2026-10-26",
     q:"Which of the following is NOT one of the Bradford Hill (1965) criteria listed in the lecture?",
     opts:[
       ["Strength of association", false, "Listed, shown by a high relative risk."],
       ["Random allocation to groups", true, "Random allocation is a feature of RCTs on the design tree, not a Bradford Hill criterion."],
       ["Consistency", false, "Listed."],
       ["A plausible mechanism", false, "Listed."]
     ]},
    {id:"W3-Q06", type:"mcq", ch:"W3-C1", src:"W3 Part 1, slide 6", added:"2026-10-26",
     q:"On the study design tree, which question separates descriptive studies from analytical studies?",
     opts:[
       ["Did the investigator assign exposures?", false, "That splits experimental from observational studies."],
       ["Random allocation to groups?", false, "That splits RCTs from non-randomised experimental designs."],
       ["Was sampling based on exposure or outcome?", false, "That splits the analytical designs (cohort, case-control, cross-sectional)."],
       ["Testing a hypothesis?", true, "Observational studies that test a hypothesis are analytical; those that do not are descriptive."]
     ]},

    /* ---- C2: observational studies ---- */
    {id:"W3-Q07", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slide 4", added:"2026-10-26",
     q:"When does confounding occur?",
     opts:[
       ["When a third variable is associated with both the exposure and the outcome", true, "This is the slide definition. If the third variable is ignored, the exposure-outcome link may be misread."],
       ["When participants are randomly assigned to groups", false, "Randomization is what spreads confounders evenly."],
       ["When participants misremember past exposures", false, "That is recall bias."],
       ["When data are measured for populations instead of individuals", false, "That describes an ecological study."]
     ]},
    {id:"W3-Q08", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slide 5", added:"2026-10-26",
     case:"A study finds that children born fourth or later among their siblings are more likely to have Down syndrome. Researchers then adjust statistically for maternal age over 35.",
     q:"What happens, and what does it show?",
     opts:[
       ["The association gets stronger, showing birth order is a cause", false, "The slide reports the opposite."],
       ["Nothing changes, showing maternal age is unrelated", false, "Maternal age is linked to both birth order and Down syndrome."],
       ["The association disappears, showing Down syndrome causes later birth order", false, "Adjusting points to a third variable, not to reverse causation."],
       ["The association disappears, showing maternal age was a confounder", true, "Higher birth order is linked to higher maternal age, which is the more plausible cause. Adjusting removes the birth order association."]
     ]},
    {id:"W3-Q09", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slide 8", added:"2026-10-26",
     case:"A physician publishes a detailed description of a single patient with a very rare skin disease, including how it progressed and responded to treatment.",
     q:"Which design is this?",
     opts:[
       ["Case series", false, "A case series covers multiple similar cases."],
       ["Case study", true, "A study of one diseased individual describing an uncommon disease."],
       ["Cross-sectional study", false, "Cross-sectional studies record associations between variables in a sample."],
       ["Case-control study", false, "There is no control group and no comparison."]
     ]},
    {id:"W3-Q10", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slides 8-9", added:"2026-10-26",
     q:"Hymes et al. (1981) reported eight men with Kaposi's sarcoma. Which statement about this kind of study is true?",
     opts:[
       ["It tested a causal hypothesis using a control group", false, "Case series have no control group and do not test hypotheses."],
       ["It is analytical because it involves more than one person", false, "Number of people does not make a study analytical. Testing a hypothesis does."],
       ["It is a case series that may generate causal hypotheses", true, "Results from case series may generate causal hypotheses but do not test them."],
       ["It is ranked above cohort studies on the evidence pyramid", false, "Case reports/series are at the base of the pyramid."]
     ]},
    {id:"W3-Q11", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slide 8", added:"2026-10-26",
     q:"Which statement about case series is NOT true?",
     opts:[
       ["They are usually carried out by clinicians", false, "True: usually by clinicians and published in medical journals."],
       ["Investigators can calculate the frequency of symptoms", false, "True, stated on the slide."],
       ["They include a comparison or control group", true, "Not true. Case studies and case series do not include a comparison or control group."],
       ["They may generate causal hypotheses", false, "True, though they do not test them."]
     ]},
    {id:"W3-Q12", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slides 12-13", added:"2026-10-26",
     case:"Researchers survey 2,000 men once, measuring beer intake and waist-to-hip ratio, to see whether the two are associated. Sampling is not based on exposure or on outcome.",
     q:"Which design is this?",
     opts:[
       ["Cross-sectional study", true, "An analytical survey that records associations between variables, sampling on neither exposure nor outcome (Bobak et al., 2003)."],
       ["Cohort study", false, "No one is followed over time from an exposure."],
       ["Descriptive study", false, "It is testing an association, not only reporting frequencies."],
       ["Ecological study", false, "Data are on individual men, not population averages."]
     ]},
    {id:"W3-Q13", type:"mcq", ch:"W3-C2", src:"W3 Part 2, slide 27", added:"2026-10-26",
     case:"Researchers compare cancer rates in people from one country with rates among the same population after they migrate to a new country, using government statistics.",
     q:"Which design is this, and what is a disadvantage?",
     opts:[
       ["Cohort study; blinding is difficult", false, "Population rates are compared; no individuals are followed by exposure."],
       ["Ecological study; it cannot prove cause and effect", true, "Following migrating populations is an ecological example on the slides. Cause and effect needs data on individuals."],
       ["Case-control study; it has recall bias", false, "There are no cases and matched controls here."],
       ["Ecological study; it cannot use existing data", false, "Using existing data such as government statistics is an advantage of ecological studies."]
     ]},

    /* ---- C3: cohort and case-control ---- */
    {id:"W3-Q14", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slides 15, 19", added:"2026-10-26",
     case:"Since 1948, researchers in a Massachusetts town have recorded residents' exercise, tobacco use, blood pressure and cholesterol, then followed them for decades to see who develops coronary heart disease.",
     q:"Which design is this?",
     opts:[
       ["Case-control study", false, "Groups were not chosen by whether they had heart disease."],
       ["Cohort study", true, "This is the Framingham Heart Study: people grouped by exposure and followed forward over time."],
       ["Randomized controlled trial", false, "No one was assigned to smoke or to have high blood pressure."],
       ["Cross-sectional study", false, "People are followed over time, not measured once."]
     ]},
    {id:"W3-Q15", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slides 21-22", added:"2026-10-26",
     case:"200 people with stomach cancer and 200 people without it, matched for age and sex, fill out questionnaires about what they ate over the past 20 years.",
     q:"Which design is this?",
     opts:[
       ["Cohort study", false, "A cohort starts with people without the disease and follows them forward."],
       ["Cross-sectional study", false, "Sampling here is based on outcome, not on neither."],
       ["Case-control study", true, "Groups are identified by outcome (cancer vs no cancer) and exposures are looked at retrospectively."],
       ["Case series", false, "A case series has no control group."]
     ]},
    {id:"W3-Q16", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 17", added:"2026-10-26",
     case:"A cohort of 1,000 smokers and 1,000 non-smokers is followed for 10 years. 100 smokers and 25 non-smokers develop lung disease.",
     q:"What is the relative risk for smokers?",
     opts:[
       ["4.0", true, "Risk in smokers = 100/1,000 = 0.10. Risk in non-smokers = 25/1,000 = 0.025. RR = 0.10 / 0.025 = 4.0."],
       ["0.075", false, "This is the difference in risk (0.10 - 0.025), not the ratio."],
       ["0.25", false, "This is the non-smokers' risk divided by the smokers' risk, upside down."],
       ["75", false, "This is the difference in case counts (100 - 25)."]
     ]},
    {id:"W3-Q17", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 17", added:"2026-10-26",
     case:"In a cohort study, 30 of 200 exposed people and 15 of 300 unexposed people develop the outcome.",
     q:"What is the relative risk?",
     opts:[
       ["2.0", false, "This is 30/15, case counts only. Each count must be divided by its group size."],
       ["0.10", false, "This is the risk difference (0.15 - 0.05)."],
       ["1.5", false, "This mixes up the group sizes (300/200)."],
       ["3.0", true, "Risk exposed = 30/200 = 0.15. Risk unexposed = 15/300 = 0.05. RR = 0.15 / 0.05 = 3.0."]
     ]},
    {id:"W3-Q18", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 17", added:"2026-10-26",
     case:"A cohort study follows 400 people who exercise regularly and 400 who do not. 20 exercisers and 40 non-exercisers develop type 2 diabetes. Exercise is treated as the exposure.",
     q:"What is the relative risk, and what does it mean?",
     opts:[
       ["2.0; exercisers have twice the risk", false, "This puts the unexposed risk on top. Exposed (exercisers) must be the numerator."],
       ["0.5; exercisers have half the risk of non-exercisers", true, "Risk exposed = 20/400 = 0.05. Risk unexposed = 40/400 = 0.10. RR = 0.05 / 0.10 = 0.5."],
       ["0.05; exercisers have a 5% risk", false, "0.05 is the incidence among exercisers, not the relative risk."],
       ["1.0; exercise makes no difference", false, "The two risks differ (0.05 vs 0.10), so RR is not 1.0."]
     ]},
    {id:"W3-Q19", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 17", added:"2026-10-26",
     case:"In a cohort study, 250 people are exposed to a risk factor. 50 of them develop the disease.",
     q:"What is the risk (incidence) of disease in the exposed group?",
     opts:[
       ["50%", false, "This would need 125 cases out of 250."],
       ["25%", false, "This is 50/200, which uses the wrong denominator. The denominator is everyone exposed (a + b = 250)."],
       ["20%", true, "Risk in the exposed = a/(a + b) = 50/250 = 0.20, or 20%. The slide calls this the incidence."],
       ["5%", false, "This would need 12.5 cases out of 250."]
     ]},
    {id:"W3-Q20", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 23", added:"2026-10-26",
     case:"A case-control study: of 100 cases, 50 were exposed and 50 were not. Of 100 controls, 25 were exposed and 75 were not. So a = 50, b = 25, c = 50, d = 75.",
     q:"What is the odds ratio?",
     opts:[
       ["2.0", false, "This is 50/25, cases exposed over controls exposed. Use ad/bc."],
       ["0.33", false, "This is bc/ad, the inverse."],
       ["1.5", false, "This is 75/50, which is only part of the calculation."],
       ["3.0", true, "OR = ad/bc = (50 x 75) / (25 x 50) = 3750 / 1250 = 3.0."]
     ]},
    {id:"W3-Q21", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 23", added:"2026-10-26",
     case:"A case-control study of a rare liver cancer finds: a = 40 cases exposed, c = 10 cases unexposed, b = 20 controls exposed, d = 40 controls unexposed.",
     q:"What is the odds ratio, and how should it be read?",
     opts:[
       ["8.0; cases had much greater odds of having been exposed than controls", true, "OR = ad/bc = (40 x 40) / (20 x 10) = 1600 / 200 = 8.0. Because the disease is rare, it also approximates the RR."],
       ["2.0; cases were twice as likely to have been exposed", false, "This is a/b (40/20). The OR is ad/bc."],
       ["0.125; exposure protects against the cancer", false, "This is bc/ad, the inverse."],
       ["4.0; the incidence in the exposed is 4%", false, "Case-control studies start from cases, so they do not give incidence."]
     ]},
    {id:"W3-Q22", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slide 26", added:"2026-10-26",
     q:"What is the main difference between how groups are formed in cohort and case-control studies?",
     opts:[
       ["Cohorts are randomized; case-control studies are not", false, "Neither is randomized. Both are observational."],
       ["Cohort groups are classified by exposure status; case-control groups by health outcome", true, "This is the slide's stated difference."],
       ["Cohorts use population-level data; case-control studies use individual data", false, "Both use individual data. Population-level data is ecological."],
       ["Cohort groups are classified by health outcome; case-control groups by exposure", false, "This is reversed."]
     ]},
    {id:"W3-Q23", type:"mcq", ch:"W3-C3", src:"W3 Part 2, slides 18, 24", added:"2026-10-26",
     q:"Which is a disadvantage of case-control studies compared with cohort studies?",
     opts:[
       ["They take longer and cost more", false, "That is a cohort disadvantage. Case-control studies need less time."],
       ["They cannot study rare diseases", false, "Case-control studies are good for rare diseases."],
       ["Data quality problems such as memory and recall bias", true, "Retrospective studies have more data quality problems, including memory and recall bias."],
       ["Only one risk factor can be studied at a time", false, "Case-control studies can look at multiple risk factors."]
     ]},

    /* ---- C4: experimental studies ---- */
    {id:"W3-Q24", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 4", added:"2026-10-26",
     case:"Two weight studies run at the same time. In Study A, participants choose their own meals and researchers record their weight each month. In Study B, researchers prescribe and deliver all meals and participants keep a food diary.",
     q:"How should the two studies be classified?",
     opts:[
       ["Both are experimental because weight is measured", false, "Measuring an outcome does not make a study experimental."],
       ["A is experimental; B is observational", false, "This is reversed."],
       ["A is observational; B is experimental", true, "In B the investigator controls the primary exposure (diet). In A participants choose it."],
       ["Both are observational because no drug is used", false, "Experimental studies include dietary changes, not just drugs."]
     ]},
    {id:"W3-Q25", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 6", added:"2026-10-26",
     q:"In an RCT, what may the control group receive?",
     opts:[
       ["Only the experimental treatment at a lower dose", false, "That is not listed. The control group is a comparison for the experimental treatment."],
       ["No treatment, the conventional treatment, or a placebo", true, "These are the three options listed on the slide."],
       ["Whatever treatment each participant prefers", false, "Participants are randomly assigned, not choosing their treatment."],
       ["The experimental treatment after a case series", false, "Not on the slide."]
     ]},
    {id:"W3-Q26", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 9", added:"2026-10-26",
     q:"What is the main advantage of randomization in an RCT?",
     opts:[
       ["Participants know which treatment they get", false, "That is the opposite of blinding."],
       ["It removes the need for informed consent", false, "Free and informed consent is always required."],
       ["Confounding factors are likely equally represented in each group", true, "So, assuming no systematic error or bias, the only difference between groups should be the intervention."],
       ["It lets researchers study rare diseases quickly", false, "That is an advantage of case-control studies."]
     ]},
    {id:"W3-Q27", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 10", added:"2026-10-26",
     case:"An RCT finds that a new sleep drug improves sleep slightly more than placebo. The probability that this difference is due to chance alone is p = 0.20.",
     q:"What should the researchers conclude?",
     opts:[
       ["The difference is significant because the drug group did better", false, "Doing better is not enough. p must be 0.05 or less."],
       ["The null hypothesis is disproved", false, "p = 0.20 is above 0.05, so it is not disproved."],
       ["The difference is not significant at p ≤ 0.05", true, "There is a 1 in 5 chance the difference is due to chance alone, which is more than 1 in 20."],
       ["The trial is unethical and must stop", false, "Nothing suggests the drug is obviously effective or dangerous."]
     ]},
    {id:"W3-Q28", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 13", added:"2026-10-26",
     case:"A vaccine has been approved by Health Canada and is in wide public use. Health officials keep tracking reports of rare side effects.",
     q:"Which clinical trial phase is this?",
     opts:[
       ["Phase I", false, "Phase I tests a new treatment in a small group for side effects and safe dosage."],
       ["Phase II", false, "Phase II tests larger groups for efficacy and safety before approval."],
       ["Phase III", false, "Phase III is a series of RCTs before approval."],
       ["Phase IV", true, "After approval and public use: post-marketing surveillance, not RCTs."]
     ]},
    {id:"W3-Q29", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 13", added:"2026-10-26",
     case:"A new drug is given for the first time to 20 people to examine side effects and find a safe dosage.",
     q:"Which phase is this?",
     opts:[
       ["Phase I", true, "Phase I: a new drug or treatment is tested in a small group for side effects and safe dosage."],
       ["Phase II", false, "Phase II uses larger groups with a focus on efficacy and safety."],
       ["Phase III", false, "Phase III is a series of RCTs comparing with common treatments."],
       ["Phase IV", false, "Phase IV happens after approval."]
     ]},
    {id:"W3-Q30", type:"mcq", ch:"W3-C4", src:"W3 Part 3, slide 11", added:"2026-10-26",
     q:"According to the ethics of RCTs, when is it appropriate to run an RCT?",
     opts:[
       ["When there is genuine uncertainty about whether the treatment is superior", true, "This balances two principles: not denying an effective treatment, and not adopting a treatment without rigorous testing."],
       ["When the treatment is already known to be effective", false, "Then denying it to the control group would be unethical."],
       ["When the disease is too rare for a case-control study", false, "Rarity favours case-control studies, not RCTs."],
       ["Only after Phase IV surveillance is complete", false, "Phase III RCTs come before approval and Phase IV."]
     ]},

    /* ---- C5: evidence pyramid ---- */
    {id:"W3-Q31", type:"mcq", ch:"W3-C5", src:"W3 Part 3, slide 14", added:"2026-10-26",
     q:"Which list orders study designs from strongest to weakest evidence?",
     opts:[
       ["RCT, meta-analysis, cohort study, case-control study", false, "Meta-analysis sits above the RCT."],
       ["Systematic review, practice guideline, RCT, cohort study", true, "This follows the pyramid from the top down."],
       ["Practice guideline, systematic review, case-control study, cohort study", false, "Systematic review is above practice guideline, and cohort is above case-control."],
       ["Cohort study, RCT, case-control study, case series", false, "RCTs sit above cohort studies."]
     ]},
    {id:"W3-Q32", type:"mcq", ch:"W3-C5", src:"W3 Part 3, slides 15-16", added:"2026-10-26",
     case:"The Canadian Task Force on Preventive Health Care reviews the literature and issues a statement telling primary care providers how to prevent and manage overweight and obesity in children and youth.",
     q:"What is this document?",
     opts:[
       ["A meta-analysis", false, "A meta-analysis statistically combines data into one result. This is guidance for practice."],
       ["A case series", false, "No individual cases are described."],
       ["A randomized controlled trial", false, "No one is assigned to groups."],
       ["A practice guideline", true, "An expert panel statement, after extensive literature review, that guides clinical practice."]
     ]},
    {id:"W3-Q33", type:"mcq", ch:"W3-C5", src:"W3 Part 3, slides 17-18", added:"2026-10-26",
     case:"A researcher gathers every relevant trial comparing school-based and family-based childhood obesity programs, uses strict rules for which studies to include, and rates each study's quality with the CASP tool. No data are pooled into one number.",
     q:"Which type of study is this?",
     opts:[
       ["Systematic review", true, "A comprehensive review of all relevant studies with stringent selection criteria (Kothandan, 2014)."],
       ["Meta-analysis", false, "A meta-analysis would statistically combine the data into a single result."],
       ["Practice guideline", false, "A guideline gives advice for clinical practice from an expert panel."],
       ["Cohort study", false, "No participants are followed over time by the researcher."]
     ]},
    {id:"W3-Q34", type:"mcq", ch:"W3-C5", src:"W3 Part 3, slide 19", added:"2026-10-26",
     q:"Which statement about meta-analysis is true?",
     opts:[
       ["It is ranked below practice guidelines on the evidence pyramid", false, "Meta-analysis is at the top of the pyramid."],
       ["It can only include studies that agree with each other", false, "It can establish statistical significance when studies have conflicting results."],
       ["It describes one unusual patient in detail", false, "That is a case study."],
       ["It can establish statistical significance among studies with conflicting results", true, "Stated on the slide. Combining several RCTs gives the highest level of evidence."]
     ]},

    /* ---- C6: population health measures ---- */
    {id:"W3-Q35", type:"mcq", ch:"W3-C6", src:"W3 Part 4, slide 2", added:"2026-10-26",
     q:"Which is NOT one of 'the five Ds' of health measures?",
     opts:[
       ["Disability", false, "One of the five Ds."],
       ["Distress", false, "One of the five Ds."],
       ["Diagnosis", true, "The five Ds are death, disease, disability, discomfort and distress."],
       ["Discomfort", false, "One of the five Ds."]
     ]},
    {id:"W3-Q36", type:"mcq", ch:"W3-C6", src:"W3 Part 4, slides 9-10", added:"2026-10-26",
     case:"A town has 10,000 adults. On January 1, 1,500 of them have asthma. During the year, 400 new cases of diabetes appear among the 8,000 adults at risk of diabetes.",
     q:"Which pair of values is correct?",
     opts:[
       ["Asthma incidence 15%; diabetes prevalence 5%", false, "The labels are swapped. The asthma count is at one point in time; the diabetes count is new cases."],
       ["Asthma prevalence 15%; diabetes incidence 4% per year", false, "4% uses the whole population (400/10,000). Incidence divides by the people at risk (8,000)."],
       ["Asthma prevalence 1.5%; diabetes incidence 5% per year", false, "1,500/10,000 is 15%, not 1.5%."],
       ["Asthma prevalence 15%; diabetes incidence 5% per year", true, "Prevalence = 1,500/10,000 = 15%. Incidence = 400/8,000 = 5% over the year."]
     ]},
    {id:"W3-Q37", type:"mcq", ch:"W3-C6", src:"W3 Part 4, slides 2, 6", added:"2026-10-26",
     case:"A region has 600 deaths in one year. Its population at the middle of the year is 200,000.",
     q:"What is the mortality rate per 1,000?",
     opts:[
       ["0.3 per 1,000", false, "This is 600/200,000 x 100, not x 1,000."],
       ["3 per 1,000", true, "600 / 200,000 = 0.003. Times 1,000 = 3 deaths per 1,000 people."],
       ["30 per 1,000", false, "This is ten times too high."],
       ["333 per 1,000", false, "This divides the population by the deaths."]
     ]},
    {id:"W3-Q38", type:"mcq", ch:"W3-C6", src:"W3 Part 4, slide 3", added:"2026-10-26",
     case:"A health report rates provinces on how fairly people with low and high incomes can get health care.",
     q:"What class of population-level indicator is social equity in access to health care?",
     opts:[
       ["Aggregate measure", false, "Aggregate measures add up individual data, like prevalence of obesity."],
       ["Environmental indicator", false, "Environmental indicators are external factors like air or water quality and may have individual analogues."],
       ["Individual measure", false, "Equity of access describes a population, not a person."],
       ["Global indicator", true, "Global indicators have no analogue at the individual level. Social equity in access to health care is a slide example."]
     ]},
    {id:"W3-Q39", type:"mcq", ch:"W3-C6", src:"W3 Part 4, slide 15", added:"2026-10-26",
     case:"Sam has a disabling injury at 40 and lives to 52. Assume each year after the injury is worth 0.5 of a normal year. His identical twin, with no injury, also dies at 52.",
     q:"Using the quality-adjusted approach from the Bob and Bill example, how many years did the injury cost Sam?",
     opts:[
       ["6 years", true, "12 years x 0.5 = 6 quality-adjusted years. 12 - 6 = 6 years lost."],
       ["12 years", false, "12 is the number of years lived after the injury, not the years lost."],
       ["0 years", false, "Both twins died at 52, but quality adjustment still counts years lost."],
       ["2 years", false, "That is Bob's result from the stroke example (10 years at 0.8)."]
     ]},
    {id:"W3-Q40", type:"mcq", ch:"W3-C6", src:"W3 Part 4, slides 13, 16", added:"2026-10-26",
     q:"Which statement about disease impact measures is true?",
     opts:[
       ["HALE measures only how long people live, not how healthy they are", false, "HALE is the average years lived in a healthy state, so it reflects quality and quantity."],
       ["Priorities based on PYLL will differ from priorities based on simple mortality rates", true, "Stated on the PYLL slide. In Canada 2004 to 2007, unintentional injury and suicide had larger PYLL bars than mortality-rate bars."],
       ["PYLL and mortality rates always rank diseases the same way", false, "The slide says the priorities will be different."],
       ["QALYs measure mortality only", false, "QALYs combine morbidity and mortality outcomes."]
     ]}
  ],

  review:[
    {id:"W3-R01", ch:"W3-C2", src:"W3 Part 2, slides 3-5", added:"2026-10-26",
     q:"What is confounding? Explain it with the Down syndrome and birth order example.",
     answer:"Confounding happens when a third variable is associated with both the exposure and the outcome. If it is not taken into account, the link between the exposure and outcome can be misinterpreted. A study saw that children born fourth or later were more likely to have Down syndrome. Higher birth order goes with higher maternal age, and maternal age over 35 is a more plausible cause of Down syndrome. When researchers adjusted statistically for maternal age, the birth order association disappeared, so maternal age was the confounder. Confounding is a risk in observational studies because groups are not randomized.",
     points:["Third variable linked to BOTH exposure and outcome","Exposure = birth order 4th or higher; outcome = Down syndrome","Confounder = maternal age over 35","Adjusting for maternal age made the association disappear","Observational, non-randomized designs are prone to it"]},
    {id:"W3-R02", ch:"W3-C3", src:"W3 Part 2, slides 15-26", added:"2026-10-26",
     q:"Compare cohort and case-control studies: how groups are chosen, the direction in time, the measure of association, and one advantage and disadvantage of each.",
     answer:"A cohort (prospective) study chooses people without the disease and classifies them by exposure, then follows them forward in time to count new cases. It uses the relative risk, [a/(a+b)] / [c/(c+d)]. It can clearly establish the temporal relationship, but it is long and expensive. A case-control (retrospective) study chooses people by outcome, cases with the disease and similar controls without it, and looks back at past exposures. It uses the odds ratio, ad/bc, which approximates the RR when the disease is rare. It is good for rare diseases and faster, but it has data quality problems such as recall bias.",
     points:["Cohort groups by exposure; case-control groups by outcome","Cohort follows forward; case-control looks back","Cohort gives RR; case-control gives OR (ad/bc)","One valid advantage and disadvantage for each","OR approximates RR when disease is rare"]},
    {id:"W3-R03", ch:"W3-C4", src:"W3 Part 3, slides 6-11", added:"2026-10-26",
     q:"Describe the steps of a randomized controlled trial and explain why randomization and the null hypothesis matter.",
     answer:"An RCT states a hypothesis, assembles participants as similar as possible who give free and informed consent, and randomly assigns them to the experimental group or a control group that gets no treatment, the conventional treatment or a placebo. The intervention is given, preferably double-blind, and outcomes are measured at a pre-determined time. Randomization makes it likely that confounders, like genetic characteristics, are equally spread across groups, so the intervention should be the only difference. The null hypothesis says the treatment had no effect. If the probability that the difference is due to chance is 0.05 or less, the null is disproved and the result is significant.",
     points:["Hypothesis, similar participants, informed consent","Random assignment to experimental or control (none, conventional, placebo)","Preferably double-blind; outcomes at a set time","Randomization balances confounders","Null hypothesis rejected when p ≤ 0.05"]},
    {id:"W3-R04", ch:"W3-C5", src:"W3 Part 3, slides 14-21; W3 Part 2, slides 8, 10", added:"2026-10-26",
     q:"List the levels of the evidence pyramid from top to bottom. Why is a meta-analysis at the top, and why is a case series such as Wakefield (1998) at the bottom?",
     answer:"From top to bottom: meta-analysis, systematic review, practice guideline, randomized control trial, cohort study, case control study, case reports/series. A meta-analysis systematically combines data from different studies into a single conclusion and can establish significance when studies conflict; combining several RCTs is the highest level of evidence. A case series describes several unusual cases with no control group. It may generate a causal hypothesis but cannot test one. The Wakefield case series of 12 children linked MMR and autism only through what parents or a pediatrician reported, with nothing to compare against.",
     points:["Correct order of all seven levels","Meta-analysis combines data from many studies into one conclusion","Pooling several RCTs is the highest evidence","Case series have no control group and do not test hypotheses","Wakefield: 12 children, cause named by parents or pediatrician"]},
    {id:"W3-R05", ch:"W3-C6", src:"W3 Part 4, slides 5, 9-10", added:"2026-10-26",
     q:"Distinguish prevalence from incidence. Which is better for the burden of chronic disease, and which for communicating risk?",
     answer:"Both measure morbidity. Prevalence is the number of people with a condition at a given time divided by the population at risk; it answers 'how many people are sick?'. It is good for assessing the burden of chronic disease. Incidence is the number of new cases in a specified time divided by the people at risk; it answers 'how many people get sick?' and measures the speed at which new cases arise. Incidence is useful for communicating risk and can be measured in a cohort study to calculate a relative risk.",
     points:["Prevalence = existing cases at a given time / population at risk","Incidence = new cases in a set time / people at risk","Prevalence for chronic disease burden","Incidence for risk; used in cohort studies for RR"]},
    {id:"W3-R06", ch:"W3-C6", src:"W3 Part 4, slides 11-16", added:"2026-10-26",
     q:"Why are measures beyond mortality and morbidity needed? Use the Bob and Bill example to explain QALYs, and name the other combined measures.",
     answer:"Morbidity and mortality measures only apply to serious conditions, show nothing about positive health and do not show level of function. PYLL ranks diseases by the years of life lost, which gives different priorities than simple mortality rates. QALYs, DALYs and HALE combine morbidity and mortality. In the example, twins Bob and Bill both die at 65, but Bob had a disabling stroke at 55. If a year after a stroke is worth 0.8 normal years, his last 10 years count as 8, so he lost the equivalent of 2 years: 10 - (10 x 0.8) = 2. HALE is the average number of years a person is expected to live in a healthy state.",
     points:["Limits: serious conditions only, no positive health, no function","PYLL priorities differ from mortality-rate priorities","Bob: 10 - (10 x 0.8) = 2 years lost","QALYs, DALYs and HALE combine morbidity and mortality","HALE = expected years in a healthy state"]}
  ],

  explore:[
    {fig:"designs", title:"Study design decision tree",
     caption:"Fig 5.1 from the AFMC Primer on Population Health. Work down from 'Did the investigator assign exposures?'",
     items:{
       exp:{label:"Experimental study", text:"The investigator assigned the exposure and controls its timing, dose and intensity.", src:"W3 Part 3, slides 3-4"},
       obs:{label:"Observational study", text:"The researcher observes exposures outside their control. Non-randomized, so confounders can make causation hard to infer.", src:"W3 Part 2, slide 3"},
       rct:{label:"Randomised controlled trial", text:"Participants are randomly allocated to experimental or control groups. The 'gold standard' for evaluation.", src:"W3 Part 3, slide 6"},
       nonrand:{label:"Non-randomised designs", text:"Experimental studies where the investigator assigns exposure but there is no random allocation to groups.", src:"W3 Part 1, slide 6"},
       desc:{label:"Descriptive study", text:"Does not test a hypothesis; describes how things are. Includes case studies and case series.", src:"W3 Part 2, slides 6, 8"},
       anal:{label:"Analytical study", text:"Tests a hypothesis about an outcome in relation to an exposure, such as CVD and smoking.", src:"W3 Part 2, slide 6"},
       cohort:{label:"Cohort study", text:"Sampling based on exposure. People without the disease are followed over time; gives relative risk.", src:"W3 Part 2, slides 15-17"},
       cc:{label:"Case-control study", text:"Sampling based on outcome. Cases and similar controls are compared for past exposure; gives the odds ratio.", src:"W3 Part 2, slides 21-23"},
       cross:{label:"Cross-sectional study", text:"Sampling based on neither. A survey that records associations between variables.", src:"W3 Part 2, slide 12"}
     }},
    {fig:"pyramid", title:"Evidence pyramid",
     caption:"Study design pyramid. Evidence gets stronger toward the top.",
     items:{
       meta:{label:"Meta-analysis", text:"Systematically combines data from different studies into a single conclusion. Combining several RCTs is the highest level of evidence.", src:"W3 Part 3, slide 19"},
       sr:{label:"Systematic review", text:"A panel's comprehensive review of all relevant studies on a question, with stringent selection criteria.", src:"W3 Part 3, slide 17"},
       guide:{label:"Practice guideline", text:"Expert panel statement after an extensive literature review that guides clinical practice. Example: CTFPHC guideline on child obesity.", src:"W3 Part 3, slides 15-16"},
       rct:{label:"Randomized control trial", text:"Random assignment to experimental or control group, preferably double-blind. Example: the MEND trial (Sacher 2010).", src:"W3 Part 3, slides 6-8, 12"},
       cohort:{label:"Cohort study", text:"Follows people grouped by exposure forward in time. Example: the Framingham Heart Study, started in 1948.", src:"W3 Part 2, slides 15, 19"},
       cc:{label:"Case control study", text:"Compares cases with similar controls for past exposure. Good for rare diseases but prone to recall bias.", src:"W3 Part 2, slides 21, 24"},
       case:{label:"Case reports/series", text:"Detailed descriptions of one or several unusual cases with no control group. Example: Hymes et al. (1981).", src:"W3 Part 2, slides 8-9"}
     }}
  ]
});
