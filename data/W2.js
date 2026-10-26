/* W2: Current health challenges; population and public health; personal wellness.
   Sources: W2 Part 1 (26 slides), W2 Part 2 (15 slides), W2 Part 3 (22 slides), figs-W1W2.md.
   Reading notes:
   - W2 Part 1 slide 2 (Table 1.2): the "Lifestyle Factors" column uses a letter C (e.g. "DISAOC", and "C" alone for COVID-19 and
     Alzheimer's disease), but the table notes only define D, I, S, A and O. C is left undefined here and no item tests it.
   - W2 Part 1 slide 2: heart disease is shown as 53,704 deaths and 17.2%. 53,704 / 334,081 is about 16.1%, and the ten listed
     counts add to 224,059, not the stated 227,712. No item asks students to calculate from the heart disease count.
   - W2 Part 1 slide 15: "A healthy disparity that is deemed unfair" reads as a typo for "health disparity".
   - W2 Part 1 slide 18: life expectancy 84 (women) and 80 (men) has no unit or year printed on the slide.
   - W2 Part 1 slides 4 to 6: WHO dot plots give rank order and category only; death counts are not labelled, so only ranks are used.
   - W2 Part 2 slide 13 (Table 1.4): Yukon, Northwest Territories and Nunavut rows are blank; footnotes 1 to 5 are not shown.
   - W2 Part 2 slide 14: Yukon physical activity target reads "increase by percentage points" with no number.
   - W2 Part 3 slides 4 and 22: slide titles are images ("Getting Serious About Your Health", "Staying with It").
*/
HLTH.unit({
  id:"W2", n:2, added:"2026-10-26",
  title:"Current Health Challenges and How We Meet Them",
  short:"Challenges & change",
  blurb:"Leading causes of death, health inequities, public and population health strategies, levels of prevention, and the models and steps of personal behaviour change.",
  topics:[
    "Leading causes of death: Canada 2022, ages 15 to 24, WHO 2021",
    "Health inequality, disparity, inequity; levels of racism",
    "PHAC mandate; public vs population health",
    "Levels of prevention; protection, promotion, surveillance",
    "Ottawa Charter and the Pan-Canadian Healthy Living Strategy",
    "Stages of change, Health Belief Model, Theory of Planned Behaviour, SMART goals"
  ],
  lectures:[
    "Week 2 Part 1: Current Health Challenges in Canada and the World",
    "Week 2 Part 2: Meeting the Challenges: Population and Public Health Approaches",
    "Week 2 Part 3: Meeting the Challenges: Personal Wellness"
  ],

  /* ===================== TERMS ===================== */
  terms:[
    /* C1 */
    {id:"W2-T-canada-leading-causes-2022", term:"Ten leading causes of death in Canada, 2022", def:"Of 334,081 deaths in 2022, the ten leading causes made up 227,712 (68.3%). Ranked: cancer (82,412; 24.7%), heart disease, COVID-19, unintentional injuries, stroke, chronic lower respiratory diseases, diabetes, influenza and pneumonia, Alzheimer's disease, chronic liver disease and cirrhosis. Lifestyle codes: D diet, I inactive lifestyle, S smoking, A excessive alcohol, O obesity.", ex:"Chronic lower respiratory diseases are coded S and O: smoking and obesity play a part.", src:"W2 Part 1, slide 2", ch:"W2-C1", added:"2026-10-26"},
    {id:"W2-T-youth-leading-causes-2023", term:"Leading causes of death, Canadians aged 15 to 24, 2023", def:"Of 2,326 deaths: 1. accidents (unintentional injuries) 694 (29.8%); 2. intentional self-harm (death by suicide) 391 (16.8%); 3. cancer 131 (5.6%); 4. assault (homicide) 68 (2.9%); 5. heart disease 37 (1.6%).", src:"W2 Part 1, slide 3", ch:"W2-C1", added:"2026-10-26"},
    {id:"W2-T-who-global-top-10-2021", term:"Top 10 global causes of death, 2021 (WHO)", def:"The top 10 causes accounted for 39 million deaths, or 57% of the 68 million deaths worldwide. Ischaemic heart disease ranked first, COVID-19 second and stroke third.", src:"W2 Part 1, slide 4", ch:"W2-C1", added:"2026-10-26"},
    {id:"W2-T-high-vs-low-income-deaths", term:"High-income vs low-income country death patterns", def:"High-income countries: deaths mostly from noncommunicable chronic diseases (cancers, cardiovascular diseases, chronic obstructive lung disease, dementia, kidney diseases); the only leading communicable causes are COVID-19 and lower respiratory infections. Low-income countries: deaths mostly from communicable (infectious) diseases (lower respiratory infections, COVID-19, diarrhoeal diseases, HIV/AIDS, malaria, TB), plus many deaths from complications in childbirth.", src:"W2 Part 1, slides 5-7", ch:"W2-C1", added:"2026-10-26"},
    {id:"W2-T-who-13-urgent-challenges", term:"WHO 13 urgent health challenges (2020)", def:"WHO list for the next decade: climate crisis; health in conflict and crisis; access to medicines; stopping infectious diseases; preparing for epidemics/pandemics; lack of food, unsafe food, unhealthy diets and dangerous products; under-investment in health care workers; keeping adolescents safe; earning public trust; ethical and social implications of new technologies; antimicrobial resistance; lack of water, sanitation and hygiene in health facilities; health inequities.", src:"W2 Part 1, slides 8, 11", ch:"W2-C1", added:"2026-10-26"},
    {id:"W2-T-environmental-health", term:"Environmental health", def:"Grew out of efforts to control communicable diseases: clean water, sanitary waste disposal, safe food, insect and rodent control, and responding to natural or human-made disasters. Its focus has expanded and become more complex over the last few decades.", ex:"Burning fossil fuels releases greenhouse gases that contribute to global warming, with more severe weather, rising sea levels, flooding, drought and insect vectors moving into new regions.", src:"W2 Part 1, slides 9-10", ch:"W2-C1", added:"2026-10-26"},
    /* C2 */
    {id:"W2-T-health-inequality", term:"Health inequality", def:"A systematic difference in health between groups of people due to biological differences and/or lifestyle, socio-economic status, or differential access to health care.", src:"W2 Part 1, slide 15", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-health-disparity", term:"Health disparity", def:"Systematic inequalities in health due mainly to social disadvantages.", src:"W2 Part 1, slide 15", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-health-inequity", term:"Health inequity", def:"A health disparity that is deemed unfair, which creates a moral imperative to try to correct it.", ex:"Systematic health disparities for Indigenous Canadians.", src:"W2 Part 1, slide 15", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-sex", term:"Sex", def:"The different biological and physiological characteristics of females, males and intersex persons, such as chromosomes, hormones and reproductive organs.", src:"W2 Part 1, slide 17", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-gender", term:"Gender", def:"The socially constructed characteristics of women, men, girls and boys, including norms, behaviours, roles and relationships with each other. It varies from society to society and can change over time.", src:"W2 Part 1, slide 17", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-gender-identity", term:"Gender identity", def:"A person's deeply felt, internal and individual experience of gender, which may or may not correspond to the person's physiology or designated sex at birth.", src:"W2 Part 1, slide 17", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-social-gradient", term:"Social gradient in health", def:"The steady rise in longevity across income levels. Gradients also exist in rates of disability and ill-health, and between certain racial or ethnic groups.", ex:"Remaining life expectancy at age 25 in Canada rises with each income quintile, for both men and women (Figure 2.1, 1991 to 2006).", src:"W2 Part 1, slide 19", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-institutionalized-racism", term:"Institutionalized (structural) racism", def:"Racism built into systems, seen in differences in material conditions and in access to power.", ex:"A racialized neighbourhood that has worse housing and fewer services, and little say in decisions about them.", src:"W2 Part 1, slide 21", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-personally-mediated-racism", term:"Personally-mediated racism", def:"Racism carried out between people, as prejudice and discrimination.", ex:"A clinic receptionist treats a patient differently because of their race.", src:"W2 Part 1, slide 21", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-internalized-racism", term:"Internalized racism", def:"Acceptance by members of the stigmatized races of negative messages about their own abilities and intrinsic worth.", src:"W2 Part 1, slide 21", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-camara-jones", term:"Camara Jones (2000)", def:"Published 'Levels of racism: a theoretic framework and a gardener's tale' (American Journal of Public Health, 2000), which sets out three levels of racism: institutionalized, personally-mediated, and internalized.", src:"W2 Part 1, slide 21", ch:"W2-C2", added:"2026-10-26"},
    {id:"W2-T-indigenous-health-inequities", term:"Health inequities among Indigenous Peoples of Canada", def:"Compared with non-Indigenous populations: higher infant mortality, shorter life expectancy, 1.5x higher rate of heart disease, 2 to 5x higher rate of type 2 diabetes, 40x higher rate of tuberculosis, and higher food insecurity (inadequate nutritional intake from less access to both quality and quantity of nutritious food, such as fresh fruits and vegetables). Contributing factors include diet, physical activity, substance use, trauma and colonization. Indigenous people are 4x more likely to be unemployed, and people living on reserves earn half the income.", src:"W2 Part 1, slide 25", ch:"W2-C2", added:"2026-10-26"},
    /* C3 */
    {id:"W2-T-phac-mandate", term:"Mandate of the Public Health Agency of Canada (PHAC)", def:"Promote health; prevent and control chronic diseases and injuries; prevent and control infectious diseases; prepare for and respond to public health emergencies; share Canada's expertise with the world; apply international research to Canada's public health programs; strengthen intergovernmental collaboration and national approaches to public health policy and planning.", src:"W2 Part 2, slide 4", ch:"W2-C3", added:"2026-10-26"},
    {id:"W2-T-public-vs-population-health", term:"Public health and population health", def:"Both look at patterns of health and illness in groups rather than individuals, monitor health trends, examine their determinants, and propose population-level interventions to protect and promote health. The population model takes a broader view and often looks at underlying social determinants, such as poverty or lack of access to care, with the aim of reducing health inequities.", src:"W2 Part 2, slide 5", ch:"W2-C3", added:"2026-10-26"},
    {id:"W2-T-primordial-prevention", term:"Primordial prevention", def:"Actions to minimize future hazards to health by addressing broad health determinants. Targets the whole population, mainly through government legislation and fiscal measures and community agencies' social programs.", ex:"Legislation that raises income supports for low-income families.", src:"W2 Part 2, slides 6-7", ch:"W2-C3", added:"2026-10-26"},
    {id:"W2-T-primary-prevention", term:"Primary prevention", def:"Prevents the onset of specific diseases through risk reduction, by limiting exposures that lead to disease. Targets at-risk groups through public health community action and family physician counselling.", ex:"A family physician counsels a healthy patient who smokes to quit.", src:"W2 Part 2, slides 6-7", ch:"W2-C3", added:"2026-10-26"},
    {id:"W2-T-secondary-prevention", term:"Secondary prevention", def:"Procedures to detect and treat pathological changes early, when intervention can be more effective. Aimed at patients with disease in the preclinical phase, for example through public health screening.", ex:"A screening test finds an early change that is then treated.", src:"W2 Part 2, slides 6-7", ch:"W2-C3", added:"2026-10-26"},
    {id:"W2-T-tertiary-prevention", term:"Tertiary prevention", def:"After a disease has been treated in the clinical phase, actions to prevent relapse or decrease its impact on the patient. Aimed at recovering individuals through clinicians' counselling, follow-up care and rehabilitation.", ex:"Rehabilitation after a heart attack.", src:"W2 Part 2, slides 6-7", ch:"W2-C3", added:"2026-10-26"},
    /* C4 */
    {id:"W2-T-health-protection", term:"Health protection", def:"Reducing threats to population health through primordial and primary prevention activities, such as the safety of food and water, addressing environmental threats and controlling infectious diseases. One of the roles of PHAC and other government agencies.", src:"W2 Part 2, slide 8", ch:"W2-C4", added:"2026-10-26"},
    {id:"W2-T-surveillance", term:"Surveillance", def:"The ongoing, systematic collection and analysis of population-level health information to guide the design of public health and preventive interventions. May include long-term, passive monitoring of general health trends, or active, short-term checking for emergent diseases or outbreaks.", src:"W2 Part 2, slide 9", ch:"W2-C4", added:"2026-10-26"},
    {id:"W2-T-health-promotion", term:"Health promotion", def:"Aims to enhance health through education, developing healthy public policy, preventing disease, organizational, economic and political interventions that support healthy behaviour change, and strengthening the skills and resiliency of individuals and community groups. Differs from health protection, which focuses on removing negative threats.", src:"W2 Part 2, slide 11", ch:"W2-C4", added:"2026-10-26"},
    {id:"W2-T-ottawa-charter", term:"Ottawa Charter for Health Promotion", def:"Five action areas: building healthy public policy, creating supportive environments, strengthening community action, developing personal skills, and reorienting health services. At its centre are three strategies: enable, mediate, advocate.", src:"W2 Part 2, slide 10", ch:"W2-C4", added:"2026-10-26"},
    {id:"W2-T-pan-canadian-healthy-living-strategy", term:"Integrated Pan-Canadian Healthy Living Strategy", def:"Created in 2002 by the federal, provincial and territorial ministers of health. Goals (by 2015): improve health outcomes by focusing on modifiable risk factors for non-communicable diseases (physical inactivity, unhealthy diets, tobacco use) and reduce health disparities. Strengthened in 2010 by two initiatives: making prevention of disease, disability and injury and health promotion priorities, and decreasing childhood obesity.", ex:"Alberta's target: raise physical activity by 10 percentage points, from 52% to 62%.", src:"W2 Part 2, slides 12-15", ch:"W2-C4", added:"2026-10-26"},
    /* C5 */
    {id:"W2-T-behaviour-change", term:"Behaviour change", def:"An approach to lifestyle management: moving toward wellness by cultivating healthy behaviours and working to overcome unhealthy ones. Getting serious means examining your current habits, choosing a target behaviour, learning about it, and finding help.", src:"W2 Part 3, slide 3", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-self-efficacy", term:"Self-efficacy", def:"Belief in your ability to make a change. Ways to boost it: an internal locus of control, visualization and self-talk, role models and other supportive people, and identifying and overcoming barriers to change.", src:"W2 Part 3, slide 6", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-locus-of-control", term:"Locus of control", def:"The figurative place a person designates as the source of responsibility for the events in their life. Internal: the person sees themselves as responsible. External: the person sees outside forces as responsible.", ex:"'I failed because I did not study' is internal; 'I failed because the test was unfair' is external.", src:"W2 Part 3, slide 6", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-transtheoretical-model", term:"Transtheoretical model (stages of change)", def:"A model of a person's readiness to change: to change a target behaviour you move through distinct stages (precontemplation, contemplation, preparation, action, maintenance, termination). Knowing your current stage helps you choose strategies to progress. Relapse, slipping back to a previous stage, is a common part of the cycle (Fig 1.7).", src:"W2 Part 3, slides 7-9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-precontemplation", term:"Precontemplation", def:"Stage of change: the person has no intention to change and sees no reason to.", ex:"'I do not see why I should stop vaping.'", src:"W2 Part 3, slide 9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-contemplation", term:"Contemplation", def:"Stage of change: the person intends to change the target behaviour within 6 months.", src:"W2 Part 3, slide 9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-preparation", term:"Preparation", def:"Stage of change: the person plans to take action within a month or is already taking small steps to change.", src:"W2 Part 3, slide 9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-action-stage", term:"Action", def:"Stage of change: the person is already making changes to the behaviour, which requires time and energy.", src:"W2 Part 3, slide 9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-maintenance", term:"Maintenance", def:"Stage of change: the person has maintained the new, healthier lifestyle for at least 6 months.", src:"W2 Part 3, slide 9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-termination", term:"Termination", def:"Stage of change: the new behaviour is adopted.", src:"W2 Part 3, slide 9", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-health-belief-model", term:"Health Belief Model (HBM)", def:"Decisions depend on a pattern of beliefs. People are most likely to take preventive action if they see the threat as serious, see themselves as susceptible, and believe the benefits of acting outweigh not acting; a strong enough belief triggers action. Perceived susceptibility and severity form the perceived threat.", ex:"A student gets a flu shot.", src:"W2 Part 3, slides 7, 11-12", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-cues-to-action", term:"Cues to action (HBM)", def:"Triggers in the Health Belief Model that raise perceived threat: raised awareness (mass media campaign, newspaper article), personal advice (reminder from a health professional), personal symptoms, or illness of a family member or friend.", src:"W2 Part 3, slide 12", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-theory-of-planned-behaviour", term:"Theory of Planned Behaviour (TPB)", def:"Assumes rational planning by the person. An extension of the HBM that adds subjective norms and self-efficacy. Attitude, subjective norms and perceived behavioural control (from control beliefs, self-efficacy) shape intention to act, and intention leads to behaviour; perceived behavioural control also has a direct path to behaviour.", src:"W2 Part 3, slides 7, 13", ch:"W2-C5", added:"2026-10-26"},
    {id:"W2-T-subjective-norms", term:"Subjective norms (TPB)", def:"Felt social pressure to act (perceived social pressure to change), built from normative beliefs about how others view the behaviour.", src:"W2 Part 3, slides 7, 13", ch:"W2-C5", added:"2026-10-26"},
    /* C6 */
    {id:"W2-T-personalized-plan-steps", term:"Five steps of a personalized plan", def:"1. Monitor your behaviour and gather data. 2. Analyze the data and identify patterns. 3. Be SMART about setting goals. 4. Devise a plan of action. 5. Make a personal contract.", src:"W2 Part 3, slide 14", ch:"W2-C6", added:"2026-10-26"},
    {id:"W2-T-health-journal", term:"Health journal", def:"A record of the target behaviour on each occurrence: what the activity was, when and where it happened, what you were doing, and how you felt at the time.", ex:"Fig 1.8 logs time, meal or snack, food, hunger rating, place, who influenced you, and emotions.", src:"W2 Part 3, slides 15-16", ch:"W2-C6", added:"2026-10-26"},
    {id:"W2-T-smart-goals", term:"SMART goals", def:"Specific (do not be vague), Measurable (give your goal a number), Attainable (recognize your limits), Realistic (manage your expectations), Time frame specific (how long will it take?).", ex:"Walk 2 km, 3 days a week, for 15 to 20 minutes, in week 2 (Fig 1.9).", src:"W2 Part 3, slide 18", ch:"W2-C6", added:"2026-10-26"},
    {id:"W2-T-personal-contract", term:"Personal contract", def:"A signed statement of your goal and your commitment to it: when you will start, how you will measure progress, which strategies you will use, and the date you expect to succeed. It can list mini-goals with rewards and a helper who witnesses it.", src:"W2 Part 3, slide 20", ch:"W2-C6", added:"2026-10-26"}
  ],

  /* ===================== CHAPTERS ===================== */
  chapters:[
  /* ---------- C1 ---------- */
  {
    id:"W2-C1", title:"Leading causes of death and global challenges", src:"W2 Part 1, slides 2-11",
    blurb:"What Canadians and people worldwide die of, and the WHO's 13 urgent challenges.",
    learn:"In <b>Canada in 2022</b> there were 334,081 deaths. The ten leading causes made up 68.3% of them. <b>Cancer</b> ranked first (24.7%), then heart disease, COVID-19 and unintentional injuries. Most causes carry lifestyle codes: <b>D</b> diet, <b>I</b> inactive lifestyle, <b>S</b> smoking, <b>A</b> excessive alcohol, <b>O</b> obesity.<br><br>For Canadians <b>aged 15 to 24 (2023)</b>, accidents came first (29.8%), then suicide (16.8%).<br><br><b>Worldwide in 2021</b>, the top 10 causes made up 39 million of 68 million deaths (57%). Ischaemic heart disease ranked first. In <b>high-income</b> countries deaths are mostly from noncommunicable chronic diseases. In <b>low-income</b> countries they are mostly from communicable diseases, plus complications in childbirth.<br><br>In 2020 the WHO named <b>13 urgent health challenges</b>, from the climate crisis to health inequities. Environmental health grew out of efforts to control communicable diseases.",
    steps:[
      {id:"W2-C1-S1", type:"table", src:"W2 Part 1, slide 2", added:"2026-10-26",
        prompt:"Read Table 1.2, then answer the questions.",
        caption:"Table 1.2 Ten Leading Causes of Death in Canada, 2022 (Statistics Canada, 2023). Lifestyle factors: D diet, I inactive lifestyle, S smoking, A excessive alcohol use, O obesity. (C is not defined on the slide.)",
        head:["Rank","Cause of death","Number of deaths","% of total deaths","Lifestyle factors"],
        rows:[
          ["","All causes","334,081","100.0",""],
          ["","Total, ten leading causes","227,712","68.3",""],
          ["1","Cancer","82,412","24.7","DISAOC"],
          ["2","Heart disease","53,704","17.2","DISAOC"],
          ["3","COVID-19","19,716","5.9","C"],
          ["4","Unintentional injuries (accidents)","18,365","5.5","ISAC"],
          ["5","Cerebrovascular diseases (stroke)","13,915","4.2","DISAOC"],
          ["6","Chronic lower respiratory diseases","12,462","3.7","SOC"],
          ["7","Diabetes mellitus","7,557","2.3","DISOC"],
          ["8","Influenza and pneumonia","5,985","1.8","DISAC"],
          ["9","Alzheimer's disease","5,413","1.6","C"],
          ["10","Chronic liver disease and cirrhosis","4,530","1.4","DSAOC"]
        ],
        qs:[
          {id:"W2-C1-S1-Q1", type:"mcq", src:"W2 Part 1, slide 2", ch:"W2-C1", added:"2026-10-26",
            q:"Which leading cause of death lists inactive lifestyle (I) but NOT diet (D) as a lifestyle factor?",
            opts:[
              ["Chronic lower respiratory diseases", false, "Coded SOC: neither diet nor inactive lifestyle is listed."],
              ["Unintentional injuries (accidents)", true, "Coded ISAC: inactive lifestyle, smoking and alcohol play a part, but diet does not."],
              ["Diabetes mellitus", false, "Coded DISOC, so diet does play a part."],
              ["Chronic liver disease and cirrhosis", false, "Coded DSAOC: diet is listed, and inactive lifestyle is not."]
            ]},
          {id:"W2-C1-S1-Q2", type:"mcq", src:"W2 Part 1, slide 2", ch:"W2-C1", added:"2026-10-26",
            q:"A public health campaign targets excessive alcohol use (A). Based on the table, which ranked cause would it NOT be expected to affect?",
            opts:[
              ["Cancer", false, "Cancer is coded DISAOC, which includes A."],
              ["Chronic liver disease and cirrhosis", false, "Coded DSAOC, which includes A."],
              ["Influenza and pneumonia", false, "Coded DISAC, which includes A."],
              ["Diabetes mellitus", true, "Diabetes is coded DISOC, with no A."]
            ]}
        ]},
      {id:"W2-C1-S2", type:"table", src:"W2 Part 1, slide 3", added:"2026-10-26",
        prompt:"Read Table 1.3, then answer the question.",
        caption:"Table 1.3 Five Leading Causes of Death among Canadians Aged 15 to 24, 2023 (Statistics Canada, 2023).",
        head:["Rank","Cause of death","Number of deaths","% of total deaths"],
        rows:[
          ["","All causes","2,326",""],
          ["1","Accidents (unintentional injuries)","694","29.8"],
          ["2","Intentional self-harm (death by suicide)","391","16.8"],
          ["3","Cancer","131","5.6"],
          ["4","Assault (homicide)","68","2.9"],
          ["5","Heart disease","37","1.6"]
        ],
        qs:[
          {id:"W2-C1-S2-Q1", type:"mcq", src:"W2 Part 1, slides 2-3", ch:"W2-C1", added:"2026-10-26",
            q:"Which statement correctly compares Table 1.3 (ages 15 to 24, 2023) with Table 1.2 (all ages, 2022)?",
            opts:[
              ["Accidents rank first in both tables.", false, "Accidents are first for ages 15 to 24 but fourth for all ages."],
              ["Suicide appears in both top-ten lists.", false, "Intentional self-harm is second for ages 15 to 24 but is not in the all-ages top ten."],
              ["Cancer ranks first for all ages but third for ages 15 to 24.", true, "Cancer is rank 1 in Table 1.2 (24.7%) and rank 3 in Table 1.3 (5.6%)."],
              ["Heart disease ranks second in both tables.", false, "Heart disease is second for all ages but fifth (1.6%) for ages 15 to 24."]
            ]}
        ]},
      {id:"W2-C1-S3", type:"table", src:"W2 Part 1, slides 4-7", added:"2026-10-26",
        prompt:"Compare the WHO top 10 causes of death in 2021 for the world, high-income countries and low-income countries.",
        caption:"WHO (2024), top 10 causes of death, 2021. Rank order from the slide charts. NCD = noncommunicable disease; Comm = communicable, maternal, perinatal or nutritional condition. Worldwide, the top 10 caused 39 million of 68 million deaths (57%).",
        head:["Rank","World","High-income countries","Low-income countries"],
        rows:[
          ["1","Ischaemic heart disease (NCD)","Ischaemic heart disease (NCD)","Lower respiratory infections (Comm)"],
          ["2","COVID-19 (Comm)","COVID-19 (Comm)","Stroke (NCD)"],
          ["3","Stroke (NCD)","Stroke (NCD)","Ischaemic heart disease (NCD)"],
          ["4","Chronic obstructive pulmonary disease (NCD)","Alzheimer disease and other dementias (NCD)","Malaria (Comm)"],
          ["5","Lower respiratory infections (Comm)","Trachea, bronchus, lung cancers (NCD)","Preterm birth complications (Comm)"],
          ["6","Trachea, bronchus, lung cancers (NCD)","Chronic obstructive pulmonary disease (NCD)","COVID-19 (Comm)"],
          ["7","Alzheimer disease and other dementias (NCD)","Colon and rectum cancers (NCD)","Diarrhoeal diseases (Comm)"],
          ["8","Diabetes mellitus (NCD)","Lower respiratory infections (Comm)","Tuberculosis (Comm)"],
          ["9","Kidney diseases (NCD)","Kidney diseases (NCD)","Birth asphyxia and birth trauma (Comm)"],
          ["10","Tuberculosis (Comm)","Hypertensive heart disease (NCD)","HIV/AIDS (Comm)"]
        ],
        qs:[
          {id:"W2-C1-S3-Q1", type:"mcq", src:"W2 Part 1, slides 5-7", ch:"W2-C1", added:"2026-10-26",
            q:"Which statement about 2021 is supported by the WHO data?",
            opts:[
              ["Malaria, HIV/AIDS and tuberculosis are in the top 10 for low-income countries but not for high-income countries.", true, "All three appear only in the low-income list; high-income communicable causes are only COVID-19 and lower respiratory infections."],
              ["Noncommunicable diseases are absent from the low-income top 10.", false, "Stroke (2nd) and ischaemic heart disease (3rd) are NCDs in the low-income list."],
              ["Lower respiratory infections rank first in high-income countries.", false, "They rank 8th in high-income countries; they rank first in low-income countries."],
              ["Dementia ranks higher in low-income countries than in high-income countries.", false, "Alzheimer disease and other dementias rank 4th in high-income countries and do not appear in the low-income top 10."]
            ]},
          {id:"W2-C1-S3-Q2", type:"mcq", src:"W2 Part 1, slide 7", ch:"W2-C1", added:"2026-10-26",
            q:"Besides communicable diseases, what other source of many deaths in low-income countries does the lecture name?",
            opts:[
              ["Hypertensive heart disease", false, "This appears only in the high-income top 10."],
              ["Road injuries", false, "No injury category appears in the low-income top 10."],
              ["Complications in childbirth", true, "Slide 7 lists 'many deaths from complications in child birth' for low-income countries; preterm birth complications and birth asphyxia appear in the top 10."],
              ["Colon and rectum cancers", false, "This appears only in the high-income top 10."]
            ]}
        ]},
      {id:"W2-C1-S4", type:"mcq", src:"W2 Part 1, slides 8-11", ch:"W2-C1", added:"2026-10-26",
        case:"A WHO briefing describes a growing movement that spreads false claims about vaccines online, and falling trust in health advice.",
        q:"Which of the WHO's 13 urgent health challenges (2020) does this fit best?",
        opts:[
          ["Anti-microbial resistance", false, "This challenge concerns drugs losing effect, with tuberculosis and STIs as examples."],
          ["Earning public trust", true, "Challenge 9 is earning public trust, with misinformation and the anti-vaccine movement as its examples."],
          ["Ethical and social implications of new technologies", false, "This challenge covers genome editing, synthetic biology, digital health and artificial intelligence."],
          ["Stopping infectious diseases", false, "Related, but the problem described is trust and misinformation, which is its own challenge."]
        ]}
    ],
    summary:"Cancer and heart disease lead deaths in Canada; accidents and suicide lead for ages 15 to 24. High-income countries die mostly of chronic noncommunicable disease, low-income countries mostly of communicable disease."
  },
  /* ---------- C2 ---------- */
  {
    id:"W2-C2", title:"Health differences across populations", src:"W2 Part 1, slides 12-26",
    blurb:"Inequality, disparity and inequity; sex and gender; the social gradient; racism; Indigenous health.",
    learn:"Some people are genetically predisposed to health problems, but blaming lifestyle alone is too simple. Many conditions come from interactions between biology, culture and higher-level determinants that create structural disadvantage. Do not stereotype or overgeneralize.<ul><li><b>Health inequality</b>: a systematic difference in health between groups, due to biology and/or lifestyle, socio-economic status or access to care.</li><li><b>Health disparity</b>: inequalities due mainly to social disadvantages.</li><li><b>Health inequity</b>: a disparity deemed unfair, so there is a moral imperative to correct it.</li></ul><b>Sex</b> is biological; <b>gender</b> is socially constructed; <b>gender identity</b> is a person's internal experience of gender. Longevity rises steadily across income levels: the <b>social gradient in health</b>. Jones (2000) describes three levels of racism: <b>institutionalized</b>, <b>personally-mediated</b> and <b>internalized</b>. Indigenous Peoples face 1.5x the heart disease, 2 to 5x the type 2 diabetes and 40x the tuberculosis of non-Indigenous people, plus higher food insecurity.",
    steps:[
      {id:"W2-C2-S1", type:"match", src:"W2 Part 1, slides 15, 17, 19", added:"2026-10-26",
        prompt:"Match each term to its definition from the slides.",
        pairs:[
          ["Health inequality","Systematic difference in health between groups due to biology and/or lifestyle, SES or access to care"],
          ["Health disparity","Systematic inequalities due mainly to social disadvantages"],
          ["Health inequity","A disparity deemed unfair, with a moral imperative to correct it"],
          ["Sex","Biological and physiological characteristics such as chromosomes, hormones and reproductive organs"],
          ["Gender","Socially constructed norms, behaviours and roles that vary between societies and over time"],
          ["Gender identity","A person's deeply felt, internal and individual experience of gender"],
          ["Social gradient in health","Steady rise in longevity across income levels"]
        ]},
      {id:"W2-C2-S2", type:"sort", src:"W2 Part 1, slide 21", added:"2026-10-26",
        prompt:"Sort each example into the level of racism it shows (Jones, 2000).",
        bins:["Institutionalized (structural)","Personally-mediated","Internalized"],
        items:[
          ["Racialized neighbourhoods receive fewer clinics and worse housing", 0, "Differences in material conditions built into systems."],
          ["A racialized community has almost no representation on the board that sets local health budgets", 0, "Differences in access to power are institutionalized racism."],
          ["A landlord refuses to rent to an applicant because of their ethnicity", 1, "Discrimination by one person toward another."],
          ["A nurse assumes a patient is exaggerating pain because of the patient's race", 1, "Prejudice acted out between individuals."],
          ["A teenager comes to believe people of her race are not smart enough for university", 2, "Acceptance of negative messages about one's own abilities."],
          ["A man feels his community is worth less than others because of messages he grew up with", 2, "Acceptance of negative messages about one's intrinsic worth."]
        ]},
      {id:"W2-C2-S3", type:"table", src:"W2 Part 1, slide 24", added:"2026-10-26",
        prompt:"Read Fig 1.9, then answer the questions.",
        caption:"Fig 1.9 Prevalence of Diabetes Among Adults in Canada Aged 18+, % (Public Health Agency of Canada, Framework for Diabetes in Canada, 2022).",
        head:["Grouping","Category","Prevalence (%)"],
        rows:[
          ["Household income","Lowest","10.5"],["Household income","2nd","8.1"],["Household income","3rd","7.2"],["Household income","4th","6.5"],["Household income","Highest","5.2"],
          ["Education","Less than high school","11.0"],["Education","High school graduate","7.8"],["Education","Community college/technical","7.6"],["Education","University graduate","5.7"],
          ["Indigenous identity","First Nations living off-reserve","12.2"],["Indigenous identity","Inuit","9.0"],["Indigenous identity","Metis","8.9"],["Indigenous identity","Non-Indigenous","7.4"],
          ["Cultural/racial background","South Asian","15.3"],["Cultural/racial background","Black","12.9"],["Cultural/racial background","Arab/West Asian","12.4"],["Cultural/racial background","East/Southeast Asian","8.4"],["Cultural/racial background","White","6.8"]
        ],
        qs:[
          {id:"W2-C2-S3-Q1", type:"mcq", src:"W2 Part 1, slides 19, 24", ch:"W2-C2", added:"2026-10-26",
            q:"Diabetes prevalence falls step by step from the lowest income group (10.5%) to the highest (5.2%). What does this pattern show?",
            opts:[
              ["Internalized racism", false, "The pattern is by income, not about accepting negative messages about one's own race."],
              ["Primordial prevention", false, "That is a level of prevention, not a pattern in data."],
              ["A health inequality caused only by biology", false, "Income differences reflect socio-economic status, not biology alone."],
              ["A social gradient in health", true, "Health improves steadily with each step up in income, as on the social gradient slide."]
            ]},
          {id:"W2-C2-S3-Q2", type:"mcq", src:"W2 Part 1, slide 24", ch:"W2-C2", added:"2026-10-26",
            q:"Which group has the highest diabetes prevalence in Fig 1.9?",
            opts:[
              ["South Asian adults (15.3%)", true, "15.3% is the highest value in the figure."],
              ["Black adults (12.9%)", false, "Second highest in the cultural/racial group, below South Asian."],
              ["First Nations adults living off-reserve (12.2%)", false, "Highest in the Indigenous identity group, but below South Asian and Black."],
              ["Adults with less than high school (11.0%)", false, "Highest in the education group, but lower than South Asian."]
            ]}
        ]},
      {id:"W2-C2-S4", type:"mcq", src:"W2 Part 1, slide 15", ch:"W2-C2", added:"2026-10-26",
        case:"Indigenous Canadians have a 40x higher rate of tuberculosis than non-Indigenous Canadians. The gap is linked to social disadvantage and the effects of colonization, and a health agency states it must work to close it.",
        q:"Which term best describes this difference?",
        opts:[
          ["Internalized racism", false, "That is acceptance of negative messages about one's own worth, not a population difference in disease."],
          ["Health inequity", true, "A disparity judged unfair, with a moral imperative to correct it. The slide gives Indigenous health disparities as the example."],
          ["Health inequality due to biological differences", false, "The case links the gap to social disadvantage and colonization, and calls for correction."],
          ["Gender difference", false, "The case is about Indigenous identity, not socially constructed gender roles."]
        ]}
    ],
    summary:"An inequality is any systematic difference; a disparity comes mainly from social disadvantage; an inequity is a disparity judged unfair. Income, racism and colonization all shape who gets sick."
  },
  /* ---------- C3 ---------- */
  {
    id:"W2-C3", title:"PHAC, public vs population health, and levels of prevention", src:"W2 Part 2, slides 2-7",
    blurb:"Who leads public health in Canada, and the four levels of prevention.",
    learn:"The <b>Public Health Agency of Canada (PHAC)</b> promotes health, prevents and controls chronic and infectious diseases and injuries, prepares for emergencies, shares expertise worldwide, and strengthens intergovernmental collaboration.<br><br><b>Public and population health</b> both study patterns of health in groups, monitor trends and propose population-level interventions. The <b>population</b> model is broader: it looks at underlying social determinants such as poverty or lack of access to care, to reduce health inequities.<br><br><b>Prevention</b> includes stopping disease from starting and limiting its progress and consequences.<ul><li><b>Primordial</b>: modify social determinants; whole population; government legislation, fiscal measures, social programs.</li><li><b>Primary</b>: limit exposures through risk reduction; at-risk groups.</li><li><b>Secondary</b>: detect and treat early, as in screening; patients with disease.</li><li><b>Tertiary</b>: prevent relapse after clinical treatment; recovering individuals; rehabilitation.</li></ul>",
    steps:[
      {id:"W2-C3-S1", type:"label", fig:"prevention", src:"W2 Part 2, slide 7", added:"2026-10-26",
        prompt:"Place each level of prevention at the right point along the course of disease, from underlying health determinants to the post-clinical phase."},
      {id:"W2-C3-S2", type:"sort", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
        prompt:"Sort each action into its level of prevention.",
        bins:["Primordial","Primary","Secondary","Tertiary"],
        items:[
          ["The federal government passes legislation that raises income supports for low-income families", 0, "Government legislation that modifies a broad social determinant for the whole population."],
          ["A community agency runs a social program that improves housing across a city", 0, "Community social programs that address underlying determinants are primordial."],
          ["A family physician counsels a healthy patient who smokes to quit", 1, "Risk reduction before any disease is present."],
          ["Public health offers a vaccine to students before flu season", 1, "Prevents the onset of a specific disease by limiting exposure risk."],
          ["A public health program screens adults for early signs of cancer", 2, "Screening detects pathological changes early, in the preclinical phase."],
          ["A blood test finds early kidney changes in a patient with no symptoms, and treatment starts", 2, "Detecting and treating a disease process early."],
          ["A heart attack survivor attends a rehabilitation program", 3, "After clinical treatment, rehabilitation reduces impact and prevents relapse."],
          ["A clinician provides follow-up care to a cancer survivor to prevent recurrence", 3, "Follow-up care for recovering individuals is tertiary."]
        ]},
      {id:"W2-C3-S3", type:"mcq", src:"W2 Part 2, slide 5", ch:"W2-C3", added:"2026-10-26",
        case:"A health unit notices that diabetes rates are highest in neighbourhoods with high poverty and few clinics. It decides its main goal will be to reduce the poverty and access barriers that drive the gap.",
        q:"Which approach is this most typical of?",
        opts:[
          ["Personal behaviour change", false, "The focus is on social conditions in neighbourhoods, not on individual habits."],
          ["Secondary prevention", false, "Secondary prevention is early detection and treatment, such as screening."],
          ["A population health approach", true, "The population model takes a broader view of underlying social determinants such as poverty and access to care, to reduce inequities."],
          ["Tertiary prevention", false, "Tertiary prevention targets recovering individuals after clinical treatment."]
        ]},
      {id:"W2-C3-S4", type:"mcq", src:"W2 Part 2, slide 7", ch:"W2-C3", added:"2026-10-26",
        case:"A program targets people who already have high blood pressure but no symptoms yet, by offering checks in pharmacies and referring anyone with a high reading for early treatment.",
        q:"Which level of prevention, and which target population, does this match on the prevention figure?",
        opts:[
          ["Tertiary prevention; recovering individuals", false, "Tertiary prevention follows clinical treatment to avoid relapse."],
          ["Secondary prevention; patients with disease", true, "Detect and treat the pathological process early, in the preclinical phase, through screening."],
          ["Primary prevention; at-risk groups", false, "Primary prevention limits exposures before disease starts; here the disease process is already present."],
          ["Primordial prevention; whole population", false, "Primordial prevention modifies social determinants through legislation and social programs."]
        ]}
    ],
    summary:"PHAC leads public health federally. Primordial addresses social determinants, primary reduces risk, secondary detects early, tertiary limits relapse and impact."
  },
  /* ---------- C4 ---------- */
  {
    id:"W2-C4", title:"Protection, surveillance, promotion, and national strategy", src:"W2 Part 2, slides 8-15",
    blurb:"How public health removes threats, watches trends, enhances health, and sets national targets.",
    learn:"<b>Health protection</b> reduces threats to population health. It uses primordial and primary prevention: safe food and water, addressing environmental threats, controlling infectious diseases. It is one of PHAC's roles.<br><br><b>Surveillance</b> is the ongoing, systematic collection and analysis of population health information to guide interventions. It can be long-term passive monitoring of trends or active short-term checking for outbreaks.<br><br><b>Health promotion</b> aims to enhance health, not just remove threats: education, healthy public policy, disease prevention, interventions that support behaviour change, and building skills and resiliency. The <b>Ottawa Charter</b> names five action areas: healthy public policy, supportive environments, community action, personal skills, reorienting health services.<br><br>The <b>Integrated Pan-Canadian Healthy Living Strategy</b> (2002) targeted physical inactivity, unhealthy diets and tobacco use, and aimed to reduce health disparities. In 2010 it added prevention and health promotion priorities and childhood obesity.",
    steps:[
      {id:"W2-C4-S1", type:"compare", src:"W2 Part 2, slides 8, 11", added:"2026-10-26",
        prompt:"Decide whether each activity is mainly health protection or health promotion.",
        a:{name:"Health protection", points:["Reduces or removes threats to population health","Uses primordial and primary prevention","Food and water safety, environmental threats, infectious disease control"]},
        b:{name:"Health promotion", points:["Aims to enhance health","Education and healthy public policy","Builds skills and resiliency of individuals and communities"]},
        scenarios:[
          ["Inspectors test a town's drinking water after a flood", 0, "Removing a threat through water safety."],
          ["A university runs workshops teaching students to cook healthy meals on a budget", 1, "Education that builds personal skills enhances health."],
          ["Public health isolates cases and traces contacts during a measles outbreak", 0, "Controlling an infectious disease is protection."],
          ["A province funds community programs that strengthen resiliency in youth groups", 1, "Strengthening skills and resiliency of community groups is promotion."],
          ["Restaurants are inspected for safe food handling", 0, "Food safety removes a threat."]
        ]},
      {id:"W2-C4-S2", type:"match", src:"W2 Part 2, slide 10", added:"2026-10-26",
        prompt:"Match each Ottawa Charter action area to the example that fits it best.",
        pairs:[
          ["Build healthy public policy","A city passes a bylaw banning smoking on restaurant patios"],
          ["Create supportive environments","A campus adds safe bike lanes and water refill stations"],
          ["Strengthen community action","Neighbours organize together to start a community garden"],
          ["Develop personal skills","A clinic teaches teens how to read nutrition labels"],
          ["Reorient health services","A hospital shifts funding toward prevention and health promotion, not only treatment"]
        ]},
      {id:"W2-C4-S3", type:"table", src:"W2 Part 2, slide 13", added:"2026-10-26",
        prompt:"Read Table 1.4, then answer the questions.",
        caption:"Table 1.4 Eating Habits and Physical Activity and Smoking Levels among People in Canada, by province, % (Statistics Canada, 2023). Territories (Yukon, Northwest Territories, Nunavut) have no data shown.",
        head:["Province","Smoking 2019, daily or occasional","Smoking 2019, daily","Vaping 2017, ever used","Vaping 2017, past 30 days","Healthy eating habits","Physically active"],
        rows:[
          ["British Columbia","8.9","6.3","18.7","6.4","21.2","62.4"],
          ["Alberta","11.4","9.1","20.2","6.8","19.4","58.0"],
          ["Saskatchewan","14.9","10.8","22.3","6.8","21.9","52.2"],
          ["Manitoba","11.7","10.4","19.8","6.2","19.7","52.8"],
          ["Ontario","10.8","8.4","17.2","5.2","19.9","51.5"],
          ["Quebec","13.2","10.3","19.2","5.5","28.6","51.7"],
          ["New Brunswick","13.2","11.8","20.2","5.0","15.9","50.6"],
          ["Nova Scotia","15.1","12.7","20.2","6.2","17.7","55.4"],
          ["Prince Edward Island","15.5","13.1","21.5","7.2","16.6","51.3"],
          ["Newfoundland and Labrador","16.3","13.0","20.2","6.0","11.9","50.3"]
        ],
        qs:[
          {id:"W2-C4-S3-Q1", type:"mcq", src:"W2 Part 2, slide 13", ch:"W2-C4", added:"2026-10-26",
            q:"Which province has the highest percentage with healthy eating habits AND which has the lowest?",
            opts:[
              ["Highest British Columbia (21.2); lowest New Brunswick (15.9)", false, "Both values exist, but Quebec is higher than 21.2 and NL is lower than 15.9."],
              ["Highest Saskatchewan (21.9); lowest Prince Edward Island (16.6)", false, "Quebec (28.6) is higher and NL (11.9) is lower."],
              ["Highest Quebec (28.6); lowest Nova Scotia (17.7)", false, "Quebec is right, but NL at 11.9 is lower than Nova Scotia."],
              ["Highest Quebec (28.6); lowest Newfoundland and Labrador (11.9)", true, "28.6 is the top value in the column and 11.9 is the bottom."]
            ]},
          {id:"W2-C4-S3-Q2", type:"mcq", src:"W2 Part 2, slide 13", ch:"W2-C4", added:"2026-10-26",
            q:"British Columbia has the lowest smoking rate (8.9% daily or occasional). Which other measure does BC lead?",
            opts:[
              ["Lowest vaping, ever used", false, "Ontario is lowest (17.2); BC is 18.7."],
              ["Lowest vaping, past 30 days", false, "New Brunswick has the lowest past-30-day vaping (5.0); BC is 6.4."],
              ["Highest physically active (62.4%)", true, "62.4 is the highest value in the physically active column."],
              ["Highest healthy eating habits", false, "Quebec leads at 28.6; BC is 21.2."]
            ]}
        ]},
      {id:"W2-C4-S4", type:"mcq", src:"W2 Part 2, slide 9", ch:"W2-C4", added:"2026-10-26",
        case:"After reports of a new respiratory illness, a public health team spends three weeks actively contacting hospitals each day to count new cases and look for an outbreak.",
        q:"What is this?",
        opts:[
          ["Active, short-term surveillance", true, "Checking actively over a short period for emergent diseases or outbreaks is one form of surveillance."],
          ["Long-term, passive surveillance", false, "Passive surveillance is long-term monitoring of general health trends, not daily active checking."],
          ["Health promotion", false, "Promotion enhances health through education, policy and skill building; this is data collection."],
          ["Tertiary prevention", false, "Tertiary prevention helps recovering patients avoid relapse."]
        ]}
    ],
    summary:"Protection removes threats, promotion enhances health, and surveillance collects the data that guide both. The Ottawa Charter and the Pan-Canadian strategy frame health promotion in Canada."
  },
  /* ---------- C5 ---------- */
  {
    id:"W2-C5", title:"Personal wellness: motivation and models of behaviour", src:"W2 Part 3, slides 2-13",
    blurb:"Self-efficacy, locus of control, the stages of change, the Health Belief Model and the Theory of Planned Behaviour.",
    learn:"Wellness depends on health habits, heredity, environment and access to care, but behaviour can make a difference. <b>Behaviour change</b> means building healthy behaviours and overcoming unhealthy ones. Start by examining your habits and choosing one <b>target behaviour</b>.<br><br>To build motivation, weigh the pros and cons and boost <b>self-efficacy</b>: an internal <b>locus of control</b>, visualization and self-talk, role models, and overcoming barriers.<br><br>The <b>transtheoretical model</b> says you move through stages: precontemplation (no intention), contemplation (within 6 months), preparation (within a month, or small steps), action, maintenance (6 months or more), termination. Relapse is common.<br><br>The <b>Health Belief Model</b>: people act when they see a threat as serious, see themselves as susceptible, and believe benefits outweigh barriers; cues to action trigger them. The <b>Theory of Planned Behaviour</b> extends it with subjective norms and self-efficacy (perceived behavioural control).",
    steps:[
      {id:"W2-C5-S1", type:"label", fig:"ttm", src:"W2 Part 3, slides 9-10", added:"2026-10-26",
        prompt:"Place the six stages of change in order, from no intention to change through to the new behaviour being adopted."},
      {id:"W2-C5-S2", type:"sort", src:"W2 Part 3, slide 9", added:"2026-10-26",
        prompt:"Sort each student into their stage of change.",
        bins:["Precontemplation","Contemplation","Preparation","Action","Maintenance"],
        items:[
          ["Ali vapes daily and says he sees no reason to stop", 0, "No intention to change and no reason seen."],
          ["Bea knows her sleep schedule is hurting her grades and plans to fix it sometime this term, within 6 months", 1, "Intends to change within 6 months but has not started."],
          ["Chen bought a reusable water bottle and will cut out pop starting next week", 2, "Plans to act within a month and is taking small steps."],
          ["Dana has cooked dinner instead of ordering takeout for the past 6 weeks", 3, "Already making changes, but for less than 6 months."],
          ["Eli has walked to campus every day for the past 10 months", 4, "Has kept the new behaviour for at least 6 months."],
          ["Farah already goes to bed 15 minutes earlier and plans a full schedule change in two weeks", 2, "Small steps now and action planned within a month."],
          ["Gus started limiting energy drinks 2 months ago and is sticking to it", 3, "Making the change, but not yet for 6 months."]
        ]},
      {id:"W2-C5-S3", type:"compare", src:"W2 Part 3, slides 7, 11-13", added:"2026-10-26",
        prompt:"Which model's component is each statement describing?",
        a:{name:"Health Belief Model", points:["Perceived susceptibility and severity form perceived threat","Perceived benefits minus barriers","Cues to action trigger behaviour"]},
        b:{name:"Theory of Planned Behaviour", points:["Assumes rational planning","Attitude, subjective norms and perceived behavioural control shape intention","Extension of the HBM adding subjective norms and self-efficacy"]},
        scenarios:[
          ["A student gets a flu shot after a reminder email from campus health services", 0, "A reminder from a health professional is a cue to action in the HBM."],
          ["A student plans to stop vaping because her friends now think vaping is uncool", 1, "Felt social pressure from others is a subjective norm."],
          ["A man books a skin check because his brother was just diagnosed with skin cancer and he feels at risk", 0, "Illness of a family member is a cue to action and raises perceived susceptibility."],
          ["A student intends to exercise and believes she can fit it into her schedule, which makes her follow through", 1, "Perceived behavioural control (self-efficacy) feeds intention and behaviour."]
        ]},
      {id:"W2-C5-S4", type:"mcq", src:"W2 Part 3, slide 6", ch:"W2-C5", added:"2026-10-26",
        case:"Jordan wants to sleep more but says, 'There's no point trying. My roommate is loud and my profs assign too much. It's out of my hands.'",
        q:"What does this show, and what would the lecture suggest?",
        opts:[
          ["The maintenance stage; he should focus on preventing relapse", false, "Maintenance means the new behaviour has lasted 6 months or more."],
          ["High self-efficacy; no motivation strategies are needed", false, "Saying change is out of his hands shows low belief in his own ability."],
          ["An external locus of control; boost self-efficacy, for example by identifying and overcoming barriers", true, "Jordan places responsibility outside himself. Boosting self-efficacy includes moving toward an internal locus of control and tackling barriers."],
          ["An internal locus of control; he should move straight to a personal contract", false, "An internal locus would mean he sees himself as responsible."]
        ]}
    ],
    summary:"Know your stage of change and build self-efficacy. The HBM explains action through perceived threat, benefits and cues; the TPB adds social norms and perceived control."
  },
  /* ---------- C6 ---------- */
  {
    id:"W2-C6", title:"Creating a personalized plan", src:"W2 Part 3, slides 14-22",
    blurb:"The five steps of a behaviour change plan, SMART goals, and staying with it.",
    learn:"A personalized plan has <b>five steps</b>:<ul><li><b>Monitor</b> your behaviour and gather data. Record each occurrence in a health journal: what, when and where, what you were doing, how you felt.</li><li><b>Analyze</b> the data and identify patterns: triggers, links between feelings and cues such as time of day, place, or other people.</li><li><b>Set SMART goals</b>: Specific, Measurable, Attainable, Realistic, Time frame specific.</li><li><b>Devise a plan of action</b>: get what you need, modify your environment, control related habits, reward yourself, involve others, plan for challenges.</li><li><b>Make a personal contract</b>: your goal, start date, how you will measure progress, strategies, and target date.</li></ul>Putting the plan into action takes commitment; keep your environment change-friendly and congratulate yourself. Barriers to staying with it: social influences, motivation and commitment, choice of techniques and effort, stress, and procrastinating, rationalizing and blaming.",
    steps:[
      {id:"W2-C6-S1", type:"order", src:"W2 Part 3, slide 14", added:"2026-10-26",
        prompt:"Put the steps for creating a personalized behaviour change plan in order.",
        items:["Monitor your behaviour and gather data","Analyze the data and identify patterns","Be SMART about setting goals","Devise a plan of action","Make a personal contract"],
        why:"You need baseline data before you can find patterns, patterns before you can set fitting goals, goals before a plan, and the contract records the whole plan as a commitment."},
      {id:"W2-C6-S2", type:"label", fig:"smart", src:"W2 Part 3, slide 18", added:"2026-10-26",
        prompt:"Label each letter of a SMART goal."},
      {id:"W2-C6-S3", type:"sort", src:"W2 Part 3, slides 15-20", added:"2026-10-26",
        prompt:"Sort each task into the step of the personalized plan it belongs to.",
        bins:["1. Monitor and gather data","2. Analyze patterns","3. SMART goals","4. Plan of action","5. Personal contract"],
        items:[
          ["Write down each time you snack, where you were and how you felt", 0, "Recording each occurrence is monitoring."],
          ["Notice that you snack most when studying alone late at night", 1, "Finding a trigger in the journal is analysis."],
          ["Change 'eat better' to 'eat one serving of fruit at lunch, 5 days a week, for 4 weeks'", 2, "Making the goal specific, measurable and time-bound."],
          ["Stop keeping chips in your residence room", 3, "Modifying your environment is part of the plan of action."],
          ["Plan a small reward for each week you meet your goal", 3, "Reward yourself is a plan-of-action strategy."],
          ["Sign a statement with your start date and target date, witnessed by a friend", 4, "That is the personal contract."]
        ]},
      {id:"W2-C6-S4", type:"mcq", src:"W2 Part 3, slide 18", ch:"W2-C6", added:"2026-10-26",
        case:"Sam writes the goal: 'I will run 4 to 5 km, 4 days a week.'",
        q:"Which SMART element is clearly missing?",
        opts:[
          ["Attainable", false, "Nothing in the goal shows it is beyond Sam's limits; the clear gap is the time frame."],
          ["Time frame specific", true, "The goal does not say how long it will take or by when."],
          ["Specific", false, "Running 4 to 5 km is a specific activity."],
          ["Measurable", false, "Distance and days per week are numbers."]
        ]}
    ],
    summary:"Monitor, analyze, set SMART goals, plan, and sign a contract. Then expect barriers and plan for them."
  }
  ],

  /* ===================== EXAM BANK ===================== */
  questions:[
    /* ---- C1 ---- */
    {id:"W2-Q01", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slide 2", added:"2026-10-26",
      q:"According to Table 1.2, what was the leading cause of death in Canada in 2022?",
      opts:[
        ["Heart disease", false, "Heart disease ranked second."],
        ["COVID-19", false, "COVID-19 ranked third (5.9%)."],
        ["Unintentional injuries", false, "Unintentional injuries ranked fourth (5.5%)."],
        ["Cancer", true, "Cancer ranked first with 82,412 deaths (24.7%)."]
      ]},
    {id:"W2-Q02", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slide 3", added:"2026-10-26",
      case:"A campus health office wants to focus on the single largest cause of death among students aged 18 to 24.",
      q:"Based on Canadian data for ages 15 to 24 (2023), what should it focus on?",
      opts:[
        ["Accidents (unintentional injuries)", true, "Ranked first with 694 of 2,326 deaths (29.8%)."],
        ["Intentional self-harm (suicide)", false, "Ranked second (16.8%)."],
        ["Cancer", false, "Ranked third (5.6%)."],
        ["Assault (homicide)", false, "Ranked fourth (2.9%)."]
      ]},
    {id:"W2-Q03", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slide 2", added:"2026-10-26",
      q:"In Table 1.2, which cause of death lists smoking (S) and obesity (O) but NOT diet (D) as lifestyle factors?",
      opts:[
        ["Unintentional injuries", false, "Coded ISAC: smoking but no obesity."],
        ["Chronic lower respiratory diseases", true, "Coded SOC: smoking and obesity, no diet."],
        ["Diabetes mellitus", false, "Coded DISOC, which includes diet."],
        ["Cerebrovascular diseases (stroke)", false, "Coded DISAOC, which includes diet."]
      ]},
    {id:"W2-Q04", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slide 4", added:"2026-10-26",
      q:"In 2021, what share of the world's 68 million deaths did the top 10 causes account for?",
      opts:[
        ["39%", false, "39 is the number of deaths in millions, not the percentage."],
        ["24.7%", false, "24.7% is cancer's share of deaths in Canada in 2022."],
        ["57% (39 million deaths)", true, "Slide 4: 39 million deaths, or 57% of 68 million."],
        ["68.3%", false, "68.3% is the share of Canada's 2022 deaths from its ten leading causes."]
      ]},
    {id:"W2-Q05", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slides 5-7", added:"2026-10-26",
      case:"Country X's top causes of death in 2021 include lower respiratory infections, malaria, diarrhoeal diseases, tuberculosis, HIV/AIDS and preterm birth complications.",
      q:"Which description of Country X fits the lecture?",
      opts:[
        ["A country with no noncommunicable deaths in its top 10", false, "Even low-income countries have stroke and ischaemic heart disease in the top 10."],
        ["A low-income country, where deaths are mostly from communicable diseases", true, "These causes match the WHO low-income top 10."],
        ["A high-income country, where deaths are mostly from noncommunicable chronic diseases", false, "High-income lists are dominated by heart disease, stroke, dementia and cancers."],
        ["A high-income country, since lower respiratory infections are its top cause", false, "Lower respiratory infections rank 8th in high-income countries."]
      ]},
    {id:"W2-Q06", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slides 8, 11", added:"2026-10-26",
      q:"Which of these is NOT one of the WHO's 13 urgent health challenges for the next decade (2020)?",
      opts:[
        ["Climate crisis", false, "Challenge 1."],
        ["Under-investment in health care workers", false, "Challenge 7."],
        ["Lack of basic water, sanitation and hygiene in health facilities", false, "Challenge 12."],
        ["Reducing surgical wait times in high-income countries", true, "This is not on the WHO list."]
      ]},
    {id:"W2-Q07", type:"mcq", ch:"W2-C1", src:"W2 Part 1, slides 9-10", added:"2026-10-26",
      q:"According to the lecture, environmental health originally grew out of efforts to:",
      opts:[
        ["Slow global warming", false, "Global warming is a newer, more complex concern."],
        ["Reduce health inequities among Indigenous Peoples", false, "Health inequities are a separate topic in this lecture."],
        ["Control communicable diseases", true, "Through clean water, sanitary waste disposal, safe food, and insect and rodent control."],
        ["Reduce chronic diseases such as cancer", false, "Not stated; its roots are in communicable disease control."]
      ]},
    /* ---- C2 ---- */
    {id:"W2-Q08", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 15", added:"2026-10-26",
      q:"Which term means a health disparity that is deemed unfair, creating a moral imperative to correct it?",
      opts:[
        ["Health inequity", true, "Slide 15 definition."],
        ["Health inequality", false, "A systematic difference that can be due to biology and/or social factors; not defined by unfairness."],
        ["Health disparity", false, "Systematic inequalities due mainly to social disadvantage; inequity adds the judgment of unfairness."],
        ["Social gradient in health", false, "The steady rise in longevity across income levels."]
      ]},
    {id:"W2-Q09", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 15", added:"2026-10-26",
      case:"Researchers find a systematic difference in a health outcome between two groups and trace it to biological differences between them.",
      q:"Which term from the lecture fits this difference?",
      opts:[
        ["Health inequity", false, "An inequity is a disparity deemed unfair."],
        ["Internalized racism", false, "That is a level of racism, not a biological difference."],
        ["Health inequality", true, "A systematic difference in health between groups can be due to biological differences."],
        ["Health disparity", false, "A disparity is due mainly to social disadvantages."]
      ]},
    {id:"W2-Q10", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 17", added:"2026-10-26",
      case:"In one society, men are expected to 'tough it out' and avoid seeing a doctor. Over the past generation this expectation has weakened.",
      q:"Which concept does this describe?",
      opts:[
        ["Social gradient", false, "The social gradient is about health rising with income."],
        ["Gender", true, "Socially constructed norms and roles that vary between societies and change over time."],
        ["Sex", false, "Sex refers to biological characteristics such as chromosomes and hormones."],
        ["Gender identity", false, "Gender identity is a person's internal experience of gender, not a social expectation."]
      ]},
    {id:"W2-Q11", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 18", added:"2026-10-26",
      q:"According to the sex and gender differences slide, how do heart disease symptoms tend to differ?",
      opts:[
        ["Women often have chest pain; men's symptoms are more subtle", false, "This reverses the slide."],
        ["Both sexes show the same symptoms", false, "The slide lists heart disease as a sex and gender difference."],
        ["Women rarely develop heart disease", false, "The slide makes no such claim."],
        ["Men often have chest pain; women's symptoms are more subtle, such as fatigue and general malaise", true, "This is what the slide states."]
      ]},
    {id:"W2-Q12", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 21", added:"2026-10-26",
      case:"A hospital's policies mean that patients from a racialized community wait longer for referrals, and no one from that community sits on the hospital's board.",
      q:"Which level of racism (Jones, 2000) does this show?",
      opts:[
        ["Institutionalized (structural) racism", true, "Differences in material conditions (access to care) and in access to power are built into the system."],
        ["Personally-mediated racism", false, "That is prejudice and discrimination by individuals."],
        ["Internalized racism", false, "That is acceptance of negative messages about one's own abilities and worth."],
        ["Gender identity", false, "Not a level of racism."]
      ]},
    {id:"W2-Q13", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 25", added:"2026-10-26",
      q:"Which statement about Indigenous Peoples of Canada, compared with non-Indigenous populations, is NOT on the slides?",
      opts:[
        ["They are 4x more likely to be unemployed", false, "Stated on slide 25."],
        ["They have a lower infant mortality rate", true, "The slide says a higher infant mortality rate."],
        ["They have a 40x higher rate of tuberculosis", false, "Stated on slide 25."],
        ["They have a 2 to 5x higher rate of type 2 diabetes", false, "Stated on slide 25."]
      ]},
    {id:"W2-Q14", type:"mcq", ch:"W2-C2", src:"W2 Part 1, slide 22", added:"2026-10-26",
      case:"Chart 2 (Canada, 2020) shows age-standardized COVID-19 deaths per 100,000. Black, in low income: 103; Black, not in low income: 36. Non-racialized, in low income: 30; not in low income: 21.",
      q:"Which conclusion does the chart support?",
      opts:[
        ["Non-racialized Canadians in low income had the highest rate", false, "Their rate was 30, far below 103."],
        ["The gap was caused by biology alone", false, "The chart groups by income and race, which point to social factors."],
        ["Within each group, people in low income had higher COVID-19 mortality, and the gap was largest for Black Canadians", true, "Low income is higher in every group; 103 vs 36 is the widest gap."],
        ["Income made no difference to COVID-19 mortality", false, "Every group shows a higher rate in low income."]
      ]},
    /* ---- C3 ---- */
    {id:"W2-Q15", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slide 4", added:"2026-10-26",
      q:"Which of these is NOT part of the mandate of the Public Health Agency of Canada?",
      opts:[
        ["Prevent and control chronic diseases and injuries", false, "Part of the mandate."],
        ["Run hospitals and deliver surgical care", true, "Not on the PHAC mandate slide."],
        ["Prepare for and respond to public health emergencies", false, "Part of the mandate."],
        ["Serve as a central point for sharing Canada's expertise with the world", false, "Part of the mandate."]
      ]},
    {id:"W2-Q16", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slide 5", added:"2026-10-26",
      q:"Which statement about public health and population health is true?",
      opts:[
        ["Public health focuses on individuals, while population health focuses on groups", false, "Both are concerned with patterns in groups, not individuals."],
        ["Only population health monitors health trends", false, "Both monitor health trends and examine their determinants."],
        ["Population health does not propose interventions", false, "Both propose population-level interventions."],
        ["The population model takes a broader view and often looks at underlying social determinants, aiming to reduce health inequities", true, "Slide 5."]
      ]},
    {id:"W2-Q17", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
      case:"A province passes a law and new tax measures to reduce child poverty across the whole population.",
      q:"Which level of prevention is this?",
      opts:[
        ["Secondary", false, "Secondary prevention detects and treats disease early."],
        ["Tertiary", false, "Tertiary prevention follows clinical treatment."],
        ["Primordial", true, "Government legislation and fiscal measures that modify social determinants for the whole population."],
        ["Primary", false, "Primary prevention limits exposures to specific disease risks in at-risk groups."]
      ]},
    {id:"W2-Q18", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
      case:"A public health nurse gives the HPV vaccine to grade 7 students, who do not have the infection.",
      q:"Which level of prevention is this?",
      opts:[
        ["Primary", true, "It prevents the onset of a specific disease through risk reduction."],
        ["Primordial", false, "Primordial prevention addresses broad social determinants, not a specific disease."],
        ["Secondary", false, "Secondary prevention detects disease that has already started."],
        ["Tertiary", false, "Tertiary prevention applies after clinical treatment."]
      ]},
    {id:"W2-Q19", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
      case:"A woman with no symptoms has a routine Pap test. Abnormal cells are found and removed before they become cancer.",
      q:"Which level of prevention does the Pap test represent?",
      opts:[
        ["Tertiary", false, "Tertiary prevention is after clinical treatment of established disease."],
        ["Primordial", false, "Primordial prevention modifies social determinants."],
        ["Secondary", true, "Screening detects and treats pathological changes early, in the preclinical phase."],
        ["Primary", false, "Primary prevention acts before any pathological change exists."]
      ]},
    {id:"W2-Q20", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
      case:"After surgery and treatment for a stroke, a man attends physiotherapy and receives follow-up care so he can regain function and avoid another stroke.",
      q:"Which level of prevention is this?",
      opts:[
        ["Primordial", false, "Primordial prevention targets broad determinants in the whole population."],
        ["Tertiary", true, "After clinical treatment: rehabilitation and follow-up to prevent relapse and reduce impact."],
        ["Secondary", false, "Secondary prevention catches disease early, before the clinical phase."],
        ["Primary", false, "Primary prevention stops disease from starting."]
      ]},
    {id:"W2-Q21", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slide 7", added:"2026-10-26",
      q:"On the levels of prevention figure, which target population matches primary prevention?",
      opts:[
        ["Whole population", false, "That is primordial prevention."],
        ["Patients with disease", false, "That is secondary prevention."],
        ["Recovering individuals", false, "That is tertiary prevention."],
        ["At-risk groups", true, "Primary prevention sits under risk and protective factors and targets at-risk groups."]
      ]},
    {id:"W2-Q22", type:"mcq", ch:"W2-C3", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
      case:"A family physician sees a patient with a strong family history of heart disease but no disease yet, and counsels him on diet and exercise.",
      q:"Which level of prevention is the physician practising?",
      opts:[
        ["Primary", true, "Counselling for risk factor change before disease starts; family physicians work at the primary level through counselling."],
        ["Secondary", false, "There is no pathological change to detect yet."],
        ["Tertiary", false, "There has been no clinical disease or treatment."],
        ["Primordial", false, "Primordial prevention works through legislation and social programs, not individual counselling."]
      ]},
    /* ---- C4 ---- */
    {id:"W2-Q23", type:"mcq", ch:"W2-C4", src:"W2 Part 2, slides 8, 11", added:"2026-10-26",
      q:"How does health promotion differ from health protection?",
      opts:[
        ["They are the same thing", false, "Slide 11 says promotion differs from protection."],
        ["Promotion aims to enhance health; protection focuses on removing negative threats", true, "Slide 11."],
        ["Promotion removes threats; protection builds skills", false, "This reverses the two."],
        ["Promotion is only for individuals; protection is only for governments", false, "Promotion includes policy and community work, not only individuals."]
      ]},
    {id:"W2-Q24", type:"mcq", ch:"W2-C4", src:"W2 Part 2, slide 8", added:"2026-10-26",
      case:"After a storm, the city tests well water for contamination and issues a boil-water advisory.",
      q:"Which public health strategy is this?",
      opts:[
        ["Tertiary prevention", false, "Tertiary prevention is for recovering patients."],
        ["Strengthening community action", false, "That is an Ottawa Charter action area led by communities."],
        ["Health protection", true, "Ensuring water safety reduces a threat to population health."],
        ["Health promotion", false, "Promotion enhances health through education, policy and skill building."]
      ]},
    {id:"W2-Q25", type:"mcq", ch:"W2-C4", src:"W2 Part 2, slide 9", added:"2026-10-26",
      q:"Which activity is an example of long-term, passive surveillance?",
      opts:[
        ["Teaching high school students to read food labels", false, "That is health promotion."],
        ["Yearly reports that track obesity rates across Canada", true, "Ongoing, long-term monitoring of general health trends."],
        ["Calling every clinic daily during a suspected outbreak", false, "That is active, short-term surveillance."],
        ["Vaccinating students before flu season", false, "That is primary prevention."]
      ]},
    {id:"W2-Q26", type:"mcq", ch:"W2-C4", src:"W2 Part 2, slide 10", added:"2026-10-26",
      case:"A family health team changes its focus from treating illness to also running prevention and health promotion programs.",
      q:"Which Ottawa Charter action area fits best?",
      opts:[
        ["Building healthy public policy", false, "That involves laws and policies, such as bylaws or taxes."],
        ["Strengthening community action", false, "That involves communities organizing themselves."],
        ["Developing personal skills", false, "That involves teaching individuals skills."],
        ["Reorienting health services", true, "Shifting the role of health services toward prevention and promotion."]
      ]},
    {id:"W2-Q27", type:"mcq", ch:"W2-C4", src:"W2 Part 2, slide 12", added:"2026-10-26",
      q:"Which modifiable risk factor was NOT named as a focus of the Integrated Pan-Canadian Healthy Living Strategy (2002)?",
      opts:[
        ["Unhealthy diets", false, "Named on slide 12."],
        ["Tobacco use", false, "Named on slide 12."],
        ["Excessive alcohol use", true, "The strategy named physical inactivity, unhealthy diets and tobacco use."],
        ["Physical inactivity", false, "Named on slide 12."]
      ]},
    {id:"W2-Q28", type:"mcq", ch:"W2-C4", src:"W2 Part 2, slides 12, 15", added:"2026-10-26",
      q:"British Columbia's healthy living target was to raise physical activity from 58% to 69.6%. By how many percentage points is that?",
      opts:[
        ["11.6", true, "69.6 minus 58 is 11.6 percentage points, as slide 15 states."],
        ["10", false, "Most provinces chose 10 points; BC's target was larger."],
        ["8.4", false, "8.4 points is BC's target for reducing obesity and overweight."],
        ["20", false, "Not a value on the slide."]
      ]},
    /* ---- C5 ---- */
    {id:"W2-Q29", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slide 5", added:"2026-10-26",
      q:"In the 2022 National College Health Assessment of Canadian students, which health issue affected the most students?",
      opts:[
        ["Anxiety (43.4%)", false, "Third."],
        ["Sleep difficulties (31.9%)", false, "Fourth."],
        ["Procrastination (61.0%)", true, "The top entry in the table."],
        ["Stress (51.5%)", false, "Second."]
      ]},
    {id:"W2-Q30", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slide 6", added:"2026-10-26",
      q:"What is locus of control?",
      opts:[
        ["The stage at which a person has kept a new behaviour for 6 months", false, "That is maintenance."],
        ["The figurative place a person designates as the source of responsibility for the events in their life", true, "Slide 6 definition."],
        ["A person's belief that a health threat is serious", false, "That is perceived severity in the Health Belief Model."],
        ["Felt social pressure to act", false, "That is subjective norms in the Theory of Planned Behaviour."]
      ]},
    {id:"W2-Q31", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slide 9", added:"2026-10-26",
      case:"Priya says, 'I know I should cut back on caffeine. I'm going to do it sometime in the next few months, but not yet.'",
      q:"Which stage of change is Priya in?",
      opts:[
        ["Precontemplation", false, "She does see a reason to change."],
        ["Preparation", false, "Preparation means acting within a month or already taking small steps."],
        ["Action", false, "She has not started changing."],
        ["Contemplation", true, "She intends to change within 6 months but has not started."]
      ]},
    {id:"W2-Q32", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slide 9", added:"2026-10-26",
      case:"Marcus has swapped energy drinks for water every day for the last 8 months.",
      q:"Which stage of change is Marcus in?",
      opts:[
        ["Maintenance", true, "He has kept the new behaviour for at least 6 months."],
        ["Action", false, "Action is making the change, before the 6-month mark."],
        ["Preparation", false, "He is past planning and small steps."],
        ["Contemplation", false, "He has already changed."]
      ]},
    {id:"W2-Q33", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slides 9-10", added:"2026-10-26",
      case:"After 3 months of regular workouts, Lena stops exercising during exam season and goes back to only thinking about restarting.",
      q:"How does the lecture describe what happened?",
      opts:[
        ["Maintenance, because she exercised for 3 months", false, "Maintenance requires at least 6 months."],
        ["Relapse, slipping back to a previous stage, which is a common part of the cycle of change", true, "Fig 1.7 notes that relapse is common in the spiral model."],
        ["Termination, because she ended the behaviour", false, "Termination means the new behaviour is fully adopted."],
        ["Proof that the stages of change model does not apply to her", false, "The model expects relapse."]
      ]},
    {id:"W2-Q34", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slides 11-12", added:"2026-10-26",
      case:"A student had not planned to get a flu shot. Then his roommate got very sick with the flu, and he booked a shot the next day.",
      q:"In the Health Belief Model, what role did the roommate's illness play?",
      opts:[
        ["A perceived barrier", false, "A barrier would discourage the action."],
        ["A modifying factor", false, "Modifying factors are demographics, sociopsychological and structural variables."],
        ["A cue to action", true, "Illness of a family member or friend is listed as a cue to action that raises perceived threat."],
        ["A subjective norm", false, "Subjective norms belong to the Theory of Planned Behaviour."]
      ]},
    {id:"W2-Q35", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slides 7, 13", added:"2026-10-26",
      q:"What does the Theory of Planned Behaviour add to the Health Belief Model?",
      opts:[
        ["Cues to action", false, "Cues to action are part of the HBM."],
        ["Subjective norms (perceived social pressure) and self-efficacy", true, "Slide 7: an extension of the HBM that incorporates subjective norms and self-efficacy."],
        ["Perceived susceptibility and perceived severity", false, "These are already part of the HBM."],
        ["Stages of readiness to change", false, "That is the transtheoretical model."]
      ]},
    {id:"W2-Q36", type:"mcq", ch:"W2-C5", src:"W2 Part 3, slide 13", added:"2026-10-26",
      q:"In the Theory of Planned Behaviour diagram, which component has a direct arrow to behaviour as well as an arrow to intention?",
      opts:[
        ["Attitude toward the behaviour", false, "Attitude only feeds intention."],
        ["Subjective norms", false, "Subjective norms only feed intention."],
        ["Normative beliefs", false, "Normative beliefs feed subjective norms."],
        ["Perceived behavioural control", true, "It feeds intention and also points directly to behaviour."]
      ]},
    /* ---- C6 ---- */
    {id:"W2-Q37", type:"mcq", ch:"W2-C6", src:"W2 Part 3, slide 18", added:"2026-10-26",
      q:"Which goal best meets all the SMART criteria?",
      opts:[
        ["Run 10 km every day starting tomorrow, after not exercising for a year", false, "Not attainable or realistic for a beginner."],
        ["Exercise more often", false, "Not specific, measurable or time-bound."],
        ["Walk 2 km, 3 days a week, for 15 to 20 minutes, for the next 4 weeks", true, "Specific activity, numbers to measure, a modest level, and a time frame."],
        ["Get healthier this year", false, "Vague and not measurable."]
      ]},
    {id:"W2-Q38", type:"mcq", ch:"W2-C6", src:"W2 Part 3, slides 14-17", added:"2026-10-26",
      case:"After a week of logging, Noor sees that she scrolls on her phone mostly after 11 p.m., when alone and feeling anxious about deadlines.",
      q:"Which step of the personalized plan is Noor doing now?",
      opts:[
        ["Analyze the data and identify patterns", true, "Finding triggers and links between feelings and cues such as time of day."],
        ["Monitor your behaviour and gather data", false, "She already did that by logging for a week."],
        ["Make a personal contract", false, "The contract comes after goals and a plan."],
        ["Devise a plan of action", false, "She has not chosen strategies yet."]
      ]},
    {id:"W2-Q39", type:"mcq", ch:"W2-C6", src:"W2 Part 3, slide 19", added:"2026-10-26",
      case:"To cut back on junk food, Omar stops buying chips for his residence room and keeps cut fruit in his mini-fridge.",
      q:"Which plan-of-action strategy is he using?",
      opts:[
        ["Involve the people around you", false, "He is acting alone."],
        ["Make a personal contract", false, "That is step 5, not a plan-of-action strategy."],
        ["Modify your environment", true, "He is changing what is around him to support the new behaviour."],
        ["Reward yourself", false, "No reward is described."]
      ]},
    {id:"W2-Q40", type:"mcq", ch:"W2-C6", src:"W2 Part 3, slides 20, 22", added:"2026-10-26",
      case:"Kai's friends keep inviting him to late-night fast food runs, and he keeps going even though his goal is to eat out less.",
      q:"Which barrier to staying with a plan is this?",
      opts:[
        ["Procrastinating, rationalizing and blaming", false, "He is not delaying or making excuses in the case."],
        ["Social influences", true, "Pressure from friends is listed as a social influence."],
        ["Stress barrier", false, "No stress is described."],
        ["Choice of techniques and level of effort", false, "The issue is the friends, not his technique."]
      ]}
  ],

  /* ===================== WRITTEN REVIEW ===================== */
  review:[
    {id:"W2-R01", ch:"W2-C2", src:"W2 Part 1, slide 15", added:"2026-10-26",
      q:"Define health inequality, health disparity and health inequity, and give the example from the slides of an inequity.",
      answer:"A health inequality is a systematic difference in health between groups, due to biological differences and/or lifestyle, socio-economic status or differential access to care. A health disparity is a systematic inequality due mainly to social disadvantages. A health inequity is a disparity that is deemed unfair, which creates a moral imperative to correct it. The slides give systematic health disparities for Indigenous Canadians as the example of an inequity.",
      points:["Inequality: systematic difference; biology and/or social causes","Disparity: due mainly to social disadvantage","Inequity: disparity judged unfair, moral imperative to correct","Example: Indigenous Canadians"]},
    {id:"W2-R02", ch:"W2-C3", src:"W2 Part 2, slides 6-7", added:"2026-10-26",
      q:"Describe the four levels of prevention. For each, name its target population and give one example.",
      answer:"Primordial prevention addresses broad health determinants to minimize future hazards; it targets the whole population, for example through government legislation and fiscal measures or community social programs. Primary prevention prevents the onset of specific diseases through risk reduction; it targets at-risk groups, for example a physician counselling a smoker to quit. Secondary prevention detects and treats pathological changes early; it targets patients with disease in the preclinical phase, for example public health screening. Tertiary prevention prevents relapse or reduces impact after clinical treatment; it targets recovering individuals, for example rehabilitation and follow-up care.",
      points:["Primordial: social determinants, whole population","Primary: risk reduction before onset, at-risk groups","Secondary: early detection and treatment, screening","Tertiary: after treatment, prevent relapse, rehabilitation","One fitting example for each level"]},
    {id:"W2-R03", ch:"W2-C4", src:"W2 Part 2, slides 8-11", added:"2026-10-26",
      q:"Compare health protection, surveillance and health promotion. Give one example of each.",
      answer:"Health protection reduces threats to population health using primordial and primary prevention, for example food and water safety or controlling infectious diseases. Surveillance is the ongoing, systematic collection and analysis of population-level health information to guide interventions; it can be long-term passive monitoring of trends or active short-term checking for outbreaks. Health promotion differs from protection because it aims to enhance health rather than remove threats, through education, healthy public policy, supportive interventions and building skills and resiliency. An example is teaching cooking skills, which fits the Ottawa Charter area of developing personal skills.",
      points:["Protection removes threats (water, food, infectious disease)","Surveillance collects and analyzes data to guide interventions","Passive long-term vs active short-term surveillance","Promotion enhances health (education, policy, skills)","An example for each"]},
    {id:"W2-R04", ch:"W2-C5", src:"W2 Part 3, slides 8-10", added:"2026-10-26",
      q:"Describe the stages of the transtheoretical model and explain why knowing your current stage matters.",
      answer:"In precontemplation the person has no intention to change and sees no reason to. In contemplation they intend to change within 6 months. In preparation they plan to act within a month or are taking small steps. In action they are already changing, which takes time and energy. In maintenance they have kept the new lifestyle for at least 6 months, and in termination the new behaviour is adopted. Knowing your stage lets you choose strategies that fit it so you can progress, and relapse to an earlier stage is a common part of the cycle.",
      points:["All six stages in order","Time markers: 6 months, 1 month, at least 6 months","Knowing your stage guides strategy choice","Relapse is common"]},
    {id:"W2-R05", ch:"W2-C5", src:"W2 Part 3, slides 7, 11-13", added:"2026-10-26",
      q:"Compare the Health Belief Model and the Theory of Planned Behaviour, using a student getting a flu shot as an example.",
      answer:"The Health Belief Model says people take preventive action when they believe the threat is serious, believe they are susceptible, and believe the benefits of acting outweigh the barriers; a strong enough belief or a cue to action triggers them. A student might get a flu shot after a reminder from campus health services. The Theory of Planned Behaviour assumes rational planning and extends the HBM by adding subjective norms and self-efficacy. Attitude, subjective norms and perceived behavioural control shape intention, which leads to behaviour. In TPB terms, the student gets the shot because friends expect it and the student feels able to book it.",
      points:["HBM: perceived severity, susceptibility, benefits vs barriers","HBM: cues to action","TPB: rational planning, extension of HBM","TPB: subjective norms and self-efficacy (perceived behavioural control) shape intention","Applies both to the flu shot"]},
    {id:"W2-R06", ch:"W2-C6", src:"W2 Part 3, slides 14-20", added:"2026-10-26",
      q:"Outline the five steps of a personalized behaviour change plan and write one SMART goal for a target behaviour of your choice.",
      answer:"First, monitor your behaviour and gather data in a health journal: what, when and where, what you were doing and how you felt. Second, analyze the data to find triggers and patterns. Third, set SMART goals: specific, measurable, attainable, realistic and time frame specific. Fourth, devise a plan of action, such as modifying your environment, rewarding yourself and planning for challenges. Fifth, sign a personal contract stating your goal, start date, how you will measure progress, your strategies and your target date. A SMART goal: 'I will be in bed by 11:30 p.m. at least 5 nights a week for the next 4 weeks.'",
      points:["Five steps in order","Health journal contents","SMART letters explained","Plan-of-action strategies and contract contents","A goal with a number and a time frame"]}
  ],

  /* ===================== EXPLORE ===================== */
  explore:[
    {fig:"prevention", title:"Levels of prevention", caption:"Figure 4.1 (AFMC Primer): each level of prevention acts at a different point along the course of disease, with a different target population.",
      items:{
        primordial:{label:"Primordial", text:"Modify social determinants. Targets the whole population through government legislation and fiscal measures, and community agencies' social programs.", src:"W2 Part 2, slides 6-7"},
        primary:{label:"Primary", text:"Limit exposures that lead to disease, through risk reduction. Targets at-risk groups through public health community action and family physician counselling.", src:"W2 Part 2, slides 6-7"},
        secondary:{label:"Secondary", text:"Detect and treat the pathological process early, when intervention can be more effective. Targets patients with disease, for example through public health screening.", src:"W2 Part 2, slides 6-7"},
        tertiary:{label:"Tertiary", text:"After treatment in the clinical phase, modify risk factors to avoid relapse and further deterioration. Targets recovering individuals through counselling, follow-up care and rehabilitation.", src:"W2 Part 2, slides 6-7"}
      }},
    {fig:"ttm", title:"Stages of change", caption:"The transtheoretical model: to change a target behaviour you move through distinct stages. Relapse to a previous stage is a common part of the cycle (Fig 1.7).",
      items:{
        pre:{label:"Precontemplation", text:"No intention to change and no reason seen to make a change.", src:"W2 Part 3, slide 9"},
        contemp:{label:"Contemplation", text:"Intends to change the target behaviour within 6 months.", src:"W2 Part 3, slide 9"},
        prep:{label:"Preparation", text:"Plans to take action within a month, or is already taking small steps.", src:"W2 Part 3, slide 9"},
        action:{label:"Action", text:"Already making changes to the behaviour, which requires time and energy.", src:"W2 Part 3, slide 9"},
        maint:{label:"Maintenance", text:"Has kept the new, healthier lifestyle for at least 6 months.", src:"W2 Part 3, slide 9"},
        term:{label:"Termination", text:"The new behaviour is adopted.", src:"W2 Part 3, slide 9"}
      }}
  ]
});
