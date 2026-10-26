/* W5: Stress (Chapter 3). Week 5 Parts 1 to 4.
   Notes on slides that were hard to read or need care:
   - W5 Part 1, slide 16: the Bucci et al. (2016) figure caption is cropped at the bottom ("Fig. 3. Stress response pathway ... SAM axis ..."). Boxes and arrows were readable.
   - W5 Part 3, slides 14-15 (Whitehall charts): bar values are not printed. Only the caption figures (Administrators about half the average, Other about twice, four-fold gap) and the order of the bars are used here.
   - W5 Part 4, slide 16 (sample stress journal): some text behind the title bar is hidden.
   - W5 Part 3, slide 2 spells the name "Hans Seyle". Written here as Selye.
   - W5 Part 1, slide 8 spells "norephinephrine" (typo for norepinephrine).
   Places where slides disagree:
   - Symptoms of excess stress: the W5 Part 2, slide 9 table puts Fatigue, Inability to concentrate and Trouble remembering things under Emotional. Fig 3.3 (W5 Part 2, slide 10) puts Fatigue under Physical and the other two under a fourth group, Cognitive, and lists Irritability under both Emotional and Behavioural. Sort steps and questions avoid these items.
   - Sleep: W5 Part 4, slide 6 and the hypnogram caption say NREM has 4 stages; the hypnogram itself shows NREM 1 to 3 only.
   - "Figure 3.3" is used for two different figures (symptoms circle, W5 Part 2 slide 10; GAS, W5 Part 3 slide 4), and "Table 3.1" for both the PSS and the symptom table (different textbook editions).
*/
HLTH.unit({
  id:"W5", n:5, added:"2026-10-26",
  title:"Stress: The Constant Challenge",
  short:"Stress",
  blurb:"How the body and mind respond to stressors, how chronic stress wears down health, and how to manage stress.",
  topics:[
    "Stressor, stress response, stress and the Perceived Stress Scale",
    "Nervous and endocrine systems, HPA and SAM axes",
    "Appraisal, personality, the stress curve and symptoms",
    "GAS, allostatic load and psychoneuroimmunology",
    "Whitehall studies and gradients of health",
    "Sleep, time management and coping techniques"
  ],
  lectures:[
    "Week 5 Part 1: Physiological Response to Stress",
    "Week 5 Part 2: Emotional and Behavioral Responses to Stress",
    "Week 5 Part 3: Chronic Stress, Allostatic Load, and Health",
    "Week 5 Part 4: Managing Stress"
  ],

  terms:[
    /* C1 */
    {id:"W5-T-stressor", term:"Stressor", def:"A situation or event that triggers physical and emotional reactions.", ex:"An exam, or a mess left by a roommate.", src:"W5 Part 1, slide 2", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-stress-response", term:"Stress response", def:"The physical and emotional reactions to a stressor.", ex:"Your heart races and your palms sweat as the exam is handed out.", src:"W5 Part 1, slide 2", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-stress", term:"Stress", def:"The general physical and emotional state that accompanies the stress response. In everyday use the word can mean both the triggering situation and the reactions.", src:"W5 Part 1, slide 2", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-perceived-stress-scale", term:"Perceived Stress Scale (PSS)", def:"A 10-item test of how much stress you experienced in the past week (Table 3.1, adapted from Cohen, Kamarck and Mermelstein, 1983). Each item is answered never 0, almost never 1, sometimes 2, fairly often 3, very often 4. Add items 1, 2, 3, 6, 9 and 10, then subtract the starred items 4, 5, 7 and 8. A total above 14 means you should take time to develop effective stress management techniques.", ex:"Added items total 18, starred items total 3: score = 18 - 3 = 15, which is above 14.", src:"W5 Part 1, slides 3-4", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-cns-pns", term:"CNS and PNS", def:"The nervous system (brain, spinal cord, and nerves) has two parts. The central nervous system (CNS) is the brain and spinal cord. The peripheral nervous system (PNS) divides into the somatic nervous system and the autonomic nervous system.", src:"W5 Part 2, slide 2; W5 Part 1, slide 6", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-somatic-nervous-system", term:"Somatic nervous system", def:"Part of the PNS that handles motor and sensory functions, mostly under conscious control.", ex:"Deciding to raise your hand in class.", src:"W5 Part 2, slide 2", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-autonomic-nervous-system", term:"Autonomic nervous system", def:"Part of the PNS that controls basic body processes under involuntary control. It is made up of the parasympathetic division and the sympathetic division.", src:"W5 Part 1, slides 6, 8; W5 Part 2, slide 2", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-parasympathetic-division", term:"Parasympathetic division", def:"The autonomic division in control when you are relaxed ('rest and digest'). It aids in digesting food, storing energy, and promoting growth. Once a stressful situation ends, it takes command and stops the stress response.", ex:"An hour after the exam, your heart rate settles and you feel hungry.", src:"W5 Part 1, slides 8-9, 13", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-sympathetic-division", term:"Sympathetic division", def:"The autonomic division activated during times of arousal, including exercise, and in emergencies such as severe pain, anger, or fear. It drives the fight-or-flight reaction, and its activation releases catecholamines.", ex:"Your heart pounds when a car swerves toward you.", src:"W5 Part 1, slides 8-9; W5 Part 2, slide 2", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-catecholamines", term:"Catecholamines", def:"Chemicals released when the sympathetic division is activated: norepinephrine (noradrenaline) and epinephrine (adrenaline).", src:"W5 Part 1, slide 9", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-endocrine-system", term:"Endocrine system", def:"Glands, tissues, and cells that help control bodily functions by releasing hormones. It helps prepare the body to respond to a stressor.", ex:"The slide highlights the hypothalamus, pituitary, and adrenal glands, the three glands of the HPA axis.", src:"W5 Part 1, slide 10", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-fight-or-flight", term:"Fight-or-flight reaction", def:"The physical changes that hormones and neurotransmitters trigger in response to a stressor: heart and breathing rates speed up, hearing and vision become more acute, the liver releases extra sugar, perspiration increases, and the brain releases endorphins. Also called the fight-flight-or-freeze reaction.", ex:"Pupils dilate, digestion halts, and skeletal muscles tense (Fig 3.1).", src:"W5 Part 1, slides 11-12", ch:"W5-C1", added:"2026-10-26"},
    {id:"W5-T-homeostasis", term:"Homeostasis", def:"A state of stability and consistency in an individual's physiological functioning. The parasympathetic division restores it after the stressful situation ends.", src:"W5 Part 1, slide 13", ch:"W5-C1", added:"2026-10-26"},

    /* C2 */
    {id:"W5-T-hpa-axis", term:"HPA axis", def:"Hypothalamus-pituitary-adrenal axis. The hypothalamus receives sensory stressors and its paraventricular nucleus (PVN) releases CRH. CRH flows to the pituitary, which releases ACTH into the blood. ACTH reaches the adrenal gland, which releases glucocorticoids (cortisol in humans).", src:"W5 Part 1, slides 14, 16", ch:"W5-C2", added:"2026-10-26"},
    {id:"W5-T-crh", term:"Corticotropin-releasing hormone (CRH)", def:"Hormone released by the paraventricular nucleus (PVN) of the hypothalamus. It flows through veins to the nearby pituitary gland and stimulates release of ACTH.", src:"W5 Part 1, slide 14", ch:"W5-C2", added:"2026-10-26"},
    {id:"W5-T-acth", term:"Adrenocorticotropic hormone (ACTH)", def:"Hormone the pituitary releases into the bloodstream. It flows through blood vessels to the adrenal gland and stimulates release of glucocorticoids.", src:"W5 Part 1, slide 14", ch:"W5-C2", added:"2026-10-26"},
    {id:"W5-T-glucocorticoids", term:"Glucocorticoids (cortisol)", def:"Hormones released by the adrenal gland (adrenal cortex) when stimulated by ACTH. In humans the glucocorticoid is cortisol.", src:"W5 Part 1, slides 14, 16", ch:"W5-C2", added:"2026-10-26"},
    {id:"W5-T-negative-feedback", term:"Negative feedback (HPA axis)", def:"The process that turns down the stress response. Glucocorticoids bind to glucocorticoid receptors (GCRs) in the hypothalamus, pituitary, and hippocampus, which leads to a decrease in glucocorticoids in the blood.", src:"W5 Part 1, slide 15", ch:"W5-C2", added:"2026-10-26"},
    {id:"W5-T-sam-axis", term:"SAM axis", def:"Sympathetic-adrenal-medullary axis. It mediates a rapid response to stress: sympathetic neurons release norepinephrine to organs, glands and vessels, and trigger the adrenal medulla to secrete circulating epinephrine, activating fight or flight.", src:"W5 Part 1, slide 16", ch:"W5-C2", added:"2026-10-26"},
    {id:"W5-T-allostasis", term:"Allostasis", def:"How allostatic systems respond to stress: they start the adaptive response, sustain it until the stress ends, then shut it off (recovery). It is started by catecholamines from the autonomic nervous system and glucocorticoids from the adrenal cortex (McEwen, 1998).", src:"W5 Part 1, slide 17", ch:"W5-C2", added:"2026-10-26"},

    /* C3 */
    {id:"W5-T-cognitive-appraisal", term:"Cognitive appraisal", def:"Your mental assessment of a stressor, shaped by successful prediction and perception of control. It is highly individual and strongly related to emotions.", ex:"A student who expected the quiz and feels prepared appraises it as less threatening than one who is caught off guard.", src:"W5 Part 2, slide 3", ch:"W5-C3", added:"2026-10-26"},
    {id:"W5-T-effective-ineffective-responses", term:"Effective vs ineffective responses", def:"Effective responses lessen stress: talking, laughing, exercise, and time management. Ineffective responses may make it worse: overeating, procrastination, frustration, and self-medicating.", src:"W5 Part 2, slides 3, 11", ch:"W5-C3", added:"2026-10-26"},
    {id:"W5-T-stress-curve", term:"Stress curve (Fig 3.2)", def:"An inverted-U of performance against stress level. A moderate level of stress promotes optimal performance and well-being. Too little stress (underload) means not enough challenge to improve; too much stress (overload) and burnout impair physical and emotional health.", src:"W5 Part 2, slide 4", ch:"W5-C3", added:"2026-10-26"},
    {id:"W5-T-big-five", term:"Big Five (Five Factor) model", def:"The most widely used model of personality traits: conscientiousness, agreeableness, neuroticism, openness to experience, and extraversion. Personality is the sum of cognitive, behavioural, and emotional tendencies and affects how people perceive and react to stressors.", src:"W5 Part 2, slides 5-6", ch:"W5-C3", added:"2026-10-26"},
    {id:"W5-T-trait-anxiety", term:"Trait anxiety", def:"A personality trait. People with higher trait anxiety are more vulnerable to stress than those who score low on this trait.", src:"W5 Part 2, slide 6", ch:"W5-C3", added:"2026-10-26"},
    {id:"W5-T-resilience", term:"Resilience", def:"Personality traits associated with social and academic success in at-risk populations. Resilience helps people handle stress more positively, and academic resilience helps students succeed.", src:"W5 Part 2, slide 7", ch:"W5-C3", added:"2026-10-26"},

    /* C4 */
    {id:"W5-T-general-adaptation-syndrome", term:"General adaptation syndrome (GAS)", def:"A pattern of stress responses with three stages: alarm, resistance, and exhaustion. Some aspects are now outdated and it was replaced by the idea of allostatic load.", src:"W5 Part 3, slides 2-4", ch:"W5-C4", added:"2026-10-26"},
    {id:"W5-T-hans-selye", term:"Hans Selye", def:"Canadian endocrinologist, called the father of the field of stress research, who first proposed the general adaptation syndrome. (The slide spells the name Seyle; no year is given.)", src:"W5 Part 3, slide 2", ch:"W5-C4", added:"2026-10-26"},
    {id:"W5-T-alarm-stage", term:"Alarm stage", def:"First GAS stage. The body is more susceptible to disease or injury; a person may have headaches, indigestion, anxiety, or disrupted eating or sleep patterns. On Fig 3.3, resistance to injury dips below normal.", src:"W5 Part 3, slides 3-4", ch:"W5-C4", added:"2026-10-26"},
    {id:"W5-T-resistance-stage", term:"Resistance stage", def:"Second GAS stage. Homeostasis develops and the body becomes more resistant to disease and injury; resistance rises above the normal level.", src:"W5 Part 3, slides 3-4", ch:"W5-C4", added:"2026-10-26"},
    {id:"W5-T-exhaustion-stage", term:"Exhaustion stage", def:"Third GAS stage: a life-threatening physiological state. With prolonged exposure to repeated stressors, resistance falls back to the low levels seen during acute stress.", src:"W5 Part 3, slides 3-4", ch:"W5-C4", added:"2026-10-26"},
    {id:"W5-T-eustress-distress", term:"Eustress and distress", def:"Eustress is a pleasant stressor; distress is an unpleasant stressor.", ex:"Starting a job you are excited about (eustress) vs receiving a failing grade (distress).", src:"W5 Part 3, slide 2", ch:"W5-C4", added:"2026-10-26"},
    {id:"W5-T-allostatic-load", term:"Allostatic load", def:"The long-term wear and tear of the stress response. High allostatic load may be due to frequent stressors, poor adaptation to common stressors, inability to shut down the stress response, or an inadequate response that leads to hyperactivity in other systems.", ex:"McEwen's four patterns: repeated hits, lack of adaptation, prolonged response, inadequate response.", src:"W5 Part 3, slides 5-8", ch:"W5-C4", added:"2026-10-26"},

    /* C5 */
    {id:"W5-T-psychoneuroimmunology", term:"Psychoneuroimmunology", def:"The study of the interactions among the nervous, endocrine, and immune systems. Increased cortisol leads to decreased numbers of lymphocytes. Neuropeptides translate stressful emotions into biochemical events that affect the immune system. Acute stress moves white blood cells into the periphery to enhance the immune response; chronic stress and prolonged cortisol increase inflammation.", src:"W5 Part 3, slides 5, 16", ch:"W5-C5", added:"2026-10-26"},
    {id:"W5-T-hippocampus", term:"Hippocampus", def:"A neurogenic brain region (new neurons keep forming in the adult brain) involved in learning, memory processing, and emotion. Stress, anxiety, and depression are associated with suppressed neurogenesis here; exercise increases it. It is also a site of HPA negative feedback.", ex:"Running animals showed more new hippocampal cells than controls (van Praag et al., 1999).", src:"W5 Part 3, slide 12; W5 Part 1, slide 15", ch:"W5-C5", added:"2026-10-26"},
    {id:"W5-T-whitehall-studies", term:"Whitehall studies and gradients of health", def:"Classic studies measuring mortality and morbidity across employment grades in the British Civil Service. Death rate rose step by step from the top grade (Administrators, about half the average) to the bottom grade (Other, about twice the average): a four-fold gap. In Whitehall II, lower job control went with a higher likelihood of coronary heart disease. The slides also note that societies with high conflict and instability have increased mortality and morbidity.", ex:"A 40% increase in death rate in Russian men following the fall of communism.", src:"W5 Part 3, slides 13-15", ch:"W5-C5", added:"2026-10-26"},
    {id:"W5-T-michael-marmot", term:"Sir Michael Marmot", def:"Led the classic Whitehall studies of the British Civil Service, which showed gradients of health by employment grade (25-year follow-up data: Marmot and Shipley, 1996).", src:"W5 Part 3, slides 13-14", ch:"W5-C5", added:"2026-10-26"},

    /* C6 */
    {id:"W5-T-sources-of-stress", term:"Common sources of stress", def:"Major life changes, daily hassles, job-related stressors (burnout), postsecondary stressors (academic, interpersonal, time pressures, financial concerns, future worries), social stressors (real and virtual social networks; diverse populations, discrimination, racism), environmental stressors (natural disasters, acts of violence, industrial accidents), and internal stressors.", src:"W5 Part 4, slides 2-3", ch:"W5-C6", added:"2026-10-26"},
    {id:"W5-T-rem-sleep", term:"REM sleep", def:"Rapid eye movement sleep, one of the two phases of sleep. Stress hormone levels increase during REM.", src:"W5 Part 4, slides 5-6, 9", ch:"W5-C6", added:"2026-10-26"},
    {id:"W5-T-nrem-sleep", term:"NREM sleep", def:"Non-rapid eye movement sleep: 4 stages of successively deeper sleep. Blood pressure drops, breathing and heart rates slow, body temperature declines, growth hormone is released, and brain waves become slow and even. Stress hormones are low.", src:"W5 Part 4, slides 6, 9", ch:"W5-C6", added:"2026-10-26"},
    {id:"W5-T-sleep-deprivation", term:"Sleep deprivation", def:"A lack of sleep over time. It is linked to increased stress hormones, stress, depression, and risk of suicide, and it slows the daytime decline in stress hormones. Most adults need 7 to 9 hours of sleep a night.", src:"W5 Part 4, slides 5, 8-9", ch:"W5-C6", added:"2026-10-26"},

    /* C7 */
    {id:"W5-T-time-management", term:"Time management", def:"Strategies on the slides: set priorities, schedule tasks for peak efficiency, set realistic goals, budget enough time, break up long-term goals, visualize achievement, keep track of tasks you put off, do least favourite tasks first, consolidate tasks, identify quick transitional tasks, delegate, say no when necessary, give yourself a break, avoid time sinks, and just do it.", src:"W5 Part 4, slides 10-11", ch:"W5-C7", added:"2026-10-26"},
    {id:"W5-T-journaling", term:"Confiding in yourself through writing", def:"Keeping a diary or journal. Helpful for people who are shy or introverted. It may lower short-term mood, but over the long term stress is reduced.", src:"W5 Part 4, slide 12", ch:"W5-C7", added:"2026-10-26"},
    {id:"W5-T-relaxation-response", term:"Relaxation response", def:"The opposite of the fight-or-flight reaction. Relaxation techniques aim to trigger it: progressive muscle relaxation, visualization, meditation, deep breathing, yoga, tai chi, listening to music, and biofeedback.", src:"W5 Part 4, slide 14", ch:"W5-C7", added:"2026-10-26"},
    {id:"W5-T-counterproductive-coping", term:"Counterproductive coping strategies", def:"Coping strategies that work against you: tobacco use, use of alcohol and other drugs, and unhealthy eating habits.", src:"W5 Part 4, slide 15", ch:"W5-C7", added:"2026-10-26"}
  ],

  chapters:[
    {
      id:"W5-C1", title:"What stress is and how the body reacts", src:"W5 Part 1, slides 2-13, 18; W5 Part 2, slide 2",
      blurb:"Stressor vs stress response vs stress, the PSS, nervous system divisions, fight or flight.",
      learn:"The slides separate three words. A <b>stressor</b> is the event that triggers reactions. The <b>stress response</b> is the reactions. <b>Stress</b> is the general physical and emotional state that goes with the response.<br>The <b>Perceived Stress Scale</b> scores 10 items from 0 (never) to 4 (very often) for the past week. Add items 1, 2, 3, 6, 9 and 10, then subtract the starred items 4, 5, 7 and 8. A total above 14 means you should build stress management skills.<br>The nervous system splits into the CNS (brain, spinal cord) and PNS. The PNS has a somatic part (mostly conscious) and an autonomic part (involuntary). The autonomic system has a <b>sympathetic</b> division (arousal, fight or flight, releases catecholamines) and a <b>parasympathetic</b> division (rest and digest). The endocrine system adds hormones. When the stressor ends, the parasympathetic division restores <b>homeostasis</b>.",
      steps:[
        {id:"W5-C1-S1", type:"match", src:"W5 Part 1, slides 2, 9-10, 13",
          prompt:"Match each term to its slide definition.",
          pairs:[
            ["Stressor","The situation or event that triggers physical and emotional reactions"],
            ["Stress response","The physical and emotional reactions to the stressor"],
            ["Stress","The general state that accompanies the stress response"],
            ["Homeostasis","Stability and consistency in physiological functioning"],
            ["Catecholamines","Norepinephrine and epinephrine"],
            ["Endocrine system","Glands, tissues and cells that release hormones"]
          ]},
        {id:"W5-C1-S2", type:"table", src:"W5 Part 1, slide 4",
          prompt:"Use the Perceived Stress Scale scoring rule to answer.",
          caption:"Table 3.1 Perceived Stress Scale (adapted from Cohen, Kamarck and Mermelstein, 1983). Answer each item: never 0, almost never 1, sometimes 2, fairly often 3, very often 4. Starred items are subtracted. A total above 14: take time to develop effective stress management techniques.",
          head:["Item","In the past week, how often have you...","Scoring"],
          rows:[
            ["1","Been upset because of something that happened unexpectedly?","Add"],
            ["2","Felt that you were unable to control the important things in your life?","Add"],
            ["3","Felt nervous and stressed?","Add"],
            ["4*","Felt confident about your ability to handle your personal problems?","Subtract"],
            ["5*","Felt that things were going your way?","Subtract"],
            ["6","Found that you could not cope with all the things you had to do?","Add"],
            ["7*","Been able to control irritations in your life?","Subtract"],
            ["8*","Felt that you were on top of things?","Subtract"],
            ["9","Been angered because things happened that were outside your control?","Add"],
            ["10","Felt difficulties were piling up so high that you could not overcome them?","Add"]
          ],
          qs:[
            {id:"W5-C1-S2-Q1", type:"mcq", src:"W5 Part 1, slide 4", ch:"W5-C1", added:"2026-10-26",
              case:"Noor's answers: item 1 = 3, item 2 = 3, item 3 = 4, item 6 = 3, item 9 = 2, item 10 = 3. Starred items: item 4 = 1, item 5 = 1, item 7 = 1, item 8 = 0.",
              q:"What is Noor's PSS score, and what does the slide advise?",
              opts:[
                ["15, which is above 14, so she should develop stress management techniques", true, "Added items: 3+3+4+3+2+3 = 18. Starred items: 1+1+1+0 = 3. 18 - 3 = 15, which is above the cutoff of 14."],
                ["21, which is above 14, so she should develop stress management techniques", false, "21 comes from adding all ten items. The starred items must be subtracted."],
                ["18, which is above 14, so she should develop stress management techniques", false, "18 is only the added items. The starred items 4, 5, 7 and 8 still need to be subtracted."],
                ["15, which is not above 14, so no action is suggested", false, "The arithmetic is right, but 15 is above 14, so the slide advises building stress management techniques."]
              ]},
            {id:"W5-C1-S2-Q2", type:"mcq", src:"W5 Part 1, slide 4", ch:"W5-C1", added:"2026-10-26",
              q:"Which PSS item is subtracted from the total?",
              opts:[
                ["Felt that things were going your way", true, "Item 5 is starred, so its answer is subtracted."],
                ["Found that you could not cope with all the things you had to do", false, "Item 6 is not starred; it is added."],
                ["Felt nervous and stressed", false, "Item 3 is added."],
                ["Been angered because things happened that were outside your control", false, "Item 9 is added."]
              ]}
          ]},
        {id:"W5-C1-S3", type:"compare", src:"W5 Part 1, slides 8-9, 13",
          prompt:"Which autonomic division is in charge in each scenario?",
          a:{name:"Sympathetic division", points:["Activated during arousal: exercise and emergencies such as severe pain, anger, or fear","Releases catecholamines: norepinephrine and epinephrine","Drives the fight-or-flight reaction"]},
          b:{name:"Parasympathetic division", points:["In control when you are relaxed: rest and digest","Aids digesting food, storing energy, and promoting growth","Takes command after the stressor ends and restores homeostasis"]},
          scenarios:[
            ["A cyclist sprinting up a steep hill", 0, "Exercise is a time of arousal, which activates the sympathetic division."],
            ["Lying on the couch digesting a big lunch", 1, "Digesting food while relaxed is parasympathetic."],
            ["A car swerves toward you and adrenaline surges", 0, "Emergency plus epinephrine release: sympathetic."],
            ["An hour after the exam ends, your heart rate settles back to normal", 1, "After the stressor ends, the parasympathetic division stops the stress response and restores homeostasis."],
            ["A sudden, severe pain makes your heart pound", 0, "Severe pain is listed as an emergency that activates the sympathetic division."]
          ]},
        {id:"W5-C1-S4", type:"mcq", src:"W5 Part 1, slide 18", ch:"W5-C1", added:"2026-10-26",
          case:"When a professor calls on Maya without warning, she goes still and cannot speak. Maya has a history of trauma.",
          q:"Which statement from the slides best fits Maya's reaction?",
          opts:[
            ["Freezing may occur as a result of previous trauma", true, "The slide on fight, flight or freeze in modern life says freezing may follow previous trauma."],
            ["Freezing shows the parasympathetic division has taken control", false, "The parasympathetic division takes over after the stressor ends. Freezing is part of the stress response itself."],
            ["Freezing is the most common response in modern life", false, "The slide says the common response is flight."],
            ["People who show more aggression tend to freeze more", false, "The slide says aggression may go with fewer freezing reactions."]
          ]}
      ],
      summary:"Stressor = trigger, stress response = reactions, stress = the overall state. The sympathetic division drives fight or flight; the parasympathetic division brings you back to homeostasis."
    },
    {
      id:"W5-C2", title:"HPA axis and SAM axis", src:"W5 Part 1, slides 14-17",
      blurb:"The hormone chain from hypothalamus to cortisol, negative feedback, and the rapid SAM pathway.",
      learn:"Two pathways carry the stress response. In the <b>HPA axis</b> (hypothalamus-pituitary-adrenal), the hypothalamus receives sensory stressors. Its paraventricular nucleus (PVN) releases <b>CRH</b>, which flows through veins to the pituitary gland. The pituitary releases <b>ACTH</b> into the bloodstream. ACTH reaches the adrenal gland, which releases glucocorticoids: <b>cortisol</b> in humans.<br><b>Negative feedback</b> turns the response down. Glucocorticoids bind to receptors (GCRs) in the hypothalamus, pituitary, and hippocampus, and glucocorticoids in the blood fall.<br>The <b>SAM axis</b> (sympathetic-adrenal-medullary) is the rapid pathway. Sympathetic neurons release norepinephrine to organs and trigger the adrenal medulla to secrete epinephrine. So HPA ends at the adrenal cortex (cortisol) and SAM at the adrenal medulla (epinephrine).<br>McEwen calls the whole pattern <b>allostasis</b>: start the response, sustain it until the stress ends, then shut it off.",
      steps:[
        {id:"W5-C2-S1", type:"order", src:"W5 Part 1, slides 14-15",
          prompt:"Put the HPA axis steps in order, from stressor to shut-off.",
          items:[
            "Hypothalamus receives sensory stressors",
            "PVN in the hypothalamus releases CRH",
            "CRH flows through veins to the pituitary gland",
            "Pituitary releases ACTH into the bloodstream",
            "ACTH reaches the adrenal gland",
            "Adrenal gland releases glucocorticoids (cortisol)",
            "Glucocorticoids bind GCRs and turn the response down"
          ],
          why:"Hypothalamus (CRH) to pituitary (ACTH) to adrenal gland (cortisol). Cortisol then feeds back on the hypothalamus, pituitary, and hippocampus to lower the response."},
        {id:"W5-C2-S2", type:"label", fig:"hpa", src:"W5 Part 1, slides 14-15",
          prompt:"Drag each structure and hormone onto the HPA axis chain."},
        {id:"W5-C2-S3", type:"compare", src:"W5 Part 1, slide 16",
          prompt:"HPA axis or SAM axis?",
          a:{name:"HPA axis", points:["Hypothalamus, pituitary gland, adrenal cortex","Hormone chain: CRH (and AVP), then ACTH, then cortisol","Cortisol gives negative feedback to the hypothalamus"]},
          b:{name:"SAM axis", points:["Sympathetic neurons and adrenal medulla","Rapid response through interconnected neurons","Releases epinephrine and norepinephrine"]},
          scenarios:[
            ["ACTH in the blood stimulates the adrenal gland", 0, "ACTH is the pituitary hormone of the HPA axis."],
            ["The adrenal medulla secretes circulating epinephrine", 1, "The adrenal medulla is the 'M' in SAM."],
            ["The pathway the figure describes as the rapid response to stress", 1, "The SAM box says it mediates a rapid response through interconnected neurons."],
            ["CRH from the paraventricular nucleus reaches the pituitary", 0, "CRH is the first hormone of the HPA chain."],
            ["Norepinephrine is released to peripheral organs, glands and vessels", 1, "Sympathetic neurons release norepinephrine in the SAM axis."]
          ]},
        {id:"W5-C2-S4", type:"mcq", src:"W5 Part 1, slide 15", ch:"W5-C2", added:"2026-10-26",
          case:"In a lab study, glucocorticoid receptors (GCRs) in an animal's hypothalamus, pituitary, and hippocampus are blocked. The animal is then exposed to a stressor.",
          q:"What would you predict?",
          opts:[
            ["Cortisol stays high longer, because negative feedback cannot turn the response down", true, "Glucocorticoids binding GCRs is what lowers glucocorticoids in the blood. Block the receptors and the shut-off fails."],
            ["CRH release stops, because the hypothalamus can no longer receive stressors", false, "The hypothalamus receives sensory stressors through other routes. GCRs are for feedback, not for detecting stressors."],
            ["ACTH falls, because the pituitary responds only to epinephrine", false, "The pituitary releases ACTH in response to CRH, not epinephrine."],
            ["The adrenal medulla takes over cortisol release", false, "Cortisol comes from the adrenal cortex. The adrenal medulla secretes epinephrine."]
          ]}
      ],
      summary:"HPA: hypothalamus (CRH) to pituitary (ACTH) to adrenal cortex (cortisol), with negative feedback at the hypothalamus, pituitary and hippocampus. SAM: sympathetic neurons and adrenal medulla, fast, epinephrine and norepinephrine."
    },
    {
      id:"W5-C3", title:"Emotional and behavioural responses", src:"W5 Part 2, slides 3-12",
      blurb:"Cognitive appraisal, effective vs ineffective responses, the stress curve, personality, and symptoms.",
      learn:"How you react depends on <b>cognitive appraisal</b>: whether you can predict a stressor and whether you feel in control. Appraisal is highly individual and strongly tied to emotion.<br><b>Effective responses</b> (talking, laughing, exercise, time management) lessen stress. <b>Ineffective responses</b> (overeating, procrastination, frustration, self-medicating) can make it worse.<br>The <b>stress curve</b> (Fig 3.2) shows performance rising from too little stress (underload) to an optimum, then falling with too much stress (overload) and burnout.<br>Personality is the sum of cognitive, behavioural and emotional tendencies. The <b>Big Five</b> are conscientiousness, agreeableness, neuroticism, openness to experience, and extraversion. Higher <b>trait anxiety</b> means more vulnerability to stress. <b>Resilience</b> helps people handle stress more positively, and you can change some elements of personality. Gender and gender roles, cultural background, and experiences also matter.<br>Symptoms of excess stress can be physical, emotional, or behavioural.",
      steps:[
        {id:"W5-C3-S1", type:"sort", src:"W5 Part 2, slide 3",
          prompt:"Sort each response as effective or ineffective.",
          bins:["Effective response","Ineffective response"],
          items:[
            ["Talking it through with a friend", 0, "Talking is listed as an effective response."],
            ["Laughing at a comedy show after a long day", 0, "Laughing is listed as effective."],
            ["Going for a run before studying", 0, "Exercise is listed as effective."],
            ["Building a weekly study schedule", 0, "Time management is listed as effective."],
            ["Eating a whole bag of chips while stressed", 1, "Overeating is listed as ineffective."],
            ["Putting off the assignment until the night before", 1, "Procrastination is listed as ineffective."],
            ["Drinking to calm down before a presentation", 1, "Self-medicating is listed as ineffective."],
            ["Staying angry and frustrated about a group project", 1, "Frustration is listed as ineffective."]
          ]},
        {id:"W5-C3-S2", type:"label", fig:"yerkes", src:"W5 Part 2, slide 4",
          prompt:"Place each zone of the stress curve (Fig 3.2), from too little stress to burnout."},
        {id:"W5-C3-S3", type:"sort", src:"W5 Part 2, slide 9",
          prompt:"Sort each symptom of excess stress using the slide 9 table.",
          bins:["Physical","Emotional","Behavioural"],
          items:[
            ["Dry mouth", 0, "Listed under physical symptoms."],
            ["Grinding of teeth", 0, "Listed under physical symptoms."],
            ["High blood pressure", 0, "Listed under physical symptoms."],
            ["Stiff neck or aching lower back", 0, "Listed under physical symptoms."],
            ["Hypervigilance", 1, "Listed under emotional symptoms."],
            ["Edginess", 1, "Listed under emotional symptoms."],
            ["Impulsiveness", 1, "Listed under emotional symptoms."],
            ["Harsh treatment of others", 2, "Listed under behavioural symptoms."],
            ["Social isolation", 2, "Listed under behavioural symptoms."]
          ]},
        {id:"W5-C3-S4", type:"mcq", src:"W5 Part 2, slide 6", ch:"W5-C3", added:"2026-10-26",
          case:"Jordan and Priya write the same midterm. On a personality test, Jordan scored high on trait anxiety and Priya scored low.",
          q:"Based on the slides, which outcome is most likely?",
          opts:[
            ["Jordan is more vulnerable to stress from the midterm than Priya", true, "People with higher trait anxiety are more vulnerable to stress than those who score low on it."],
            ["Priya is more vulnerable, because low trait anxiety makes stressors feel stronger", false, "The slide says the opposite: higher trait anxiety means more vulnerability."],
            ["Their stress will be the same, because personality does not affect stress", false, "The slides say personality clearly affects how people perceive and react to stressors."],
            ["Jordan will perform better, because more stress always raises performance", false, "The stress curve shows performance falls once stress goes past the optimum."]
          ]}
      ],
      summary:"Appraisal (prediction and control), personality (Big Five, trait anxiety, resilience), gender and culture shape the response. Moderate stress is best; too little or too much hurts performance."
    },
    {
      id:"W5-C4", title:"General adaptation syndrome and allostatic load", src:"W5 Part 3, slides 2-8",
      blurb:"Selye's three stages, eustress vs distress, why GAS is outdated, and the four causes of high allostatic load.",
      learn:"Canadian endocrinologist Hans Selye, the father of stress research, proposed the <b>general adaptation syndrome (GAS)</b>: three stages. In <b>alarm</b>, the body is more susceptible to disease or injury, with possible headaches, indigestion, anxiety, and disrupted eating or sleep. In <b>resistance</b>, homeostasis develops and the body becomes more resistant to disease and injury. <b>Exhaustion</b> is a life-threatening physiological state. A stressor can be pleasant (<b>eustress</b>) or unpleasant (<b>distress</b>).<br>Parts of GAS are outdated. Disease susceptibility is now traced to the stress response itself, not to depleted resources. GAS was replaced by <b>allostatic load</b>: the long-term wear and tear of the stress response. High allostatic load may come from:<ul><li>frequent stressors (repeated hits)</li><li>poor adaptation to common stressors</li><li>inability to shut down the response (prolonged response)</li><li>an inadequate response that leads to hyperactivity in other systems</li></ul>",
      steps:[
        {id:"W5-C4-S1", type:"label", fig:"gas", src:"W5 Part 3, slides 3-4",
          prompt:"Place the three GAS stages on the resistance-to-injury curve."},
        {id:"W5-C4-S2", type:"match", src:"W5 Part 3, slides 7-8",
          prompt:"Match each cause of high allostatic load to its pattern on McEwen's figure.",
          pairs:[
            ["Frequent stressors","Repeated hits: a normal response repeated many times"],
            ["Poor adaptation to common stressors","The response stays full height instead of shrinking with repetition"],
            ["Inability to shut down the stress response","Prolonged response with no recovery"],
            ["Inadequate response","A small response that leads to hyperactivity in other systems"]
          ]},
        {id:"W5-C4-S3", type:"mcq", src:"W5 Part 3, slide 2", ch:"W5-C4", added:"2026-10-26",
          case:"Sam has just been offered his dream job in a new city. He is excited, but his heart races as he plans the move.",
          q:"Which term best describes this stressor?",
          opts:[
            ["Eustress", true, "Eustress is a pleasant stressor, such as a welcome job offer."],
            ["Distress", false, "Distress is an unpleasant stressor. Sam is excited about the change."],
            ["Allostatic load", false, "Allostatic load is long-term wear and tear, not a single pleasant event."],
            ["Exhaustion stage", false, "Exhaustion is a life-threatening state after prolonged stress, not an exciting new event."]
          ]},
        {id:"W5-C4-S4", type:"mcq", src:"W5 Part 3, slides 3-4", ch:"W5-C4", added:"2026-10-26",
          case:"Two weeks into exam season, Lee's early headaches and poor sleep have stopped. Her body seems to have settled and she has not been sick, even though exams continue.",
          q:"Which GAS stage is Lee most likely in?",
          opts:[
            ["Resistance", true, "In resistance, homeostasis develops and the body becomes more resistant to disease and injury."],
            ["Alarm", false, "Alarm brings headaches, indigestion and disrupted sleep. Lee is past those."],
            ["Exhaustion", false, "Exhaustion is a life-threatening state with low resistance. Lee is coping and not getting sick."],
            ["Burnout zone of the stress curve", false, "Burnout is on Fig 3.2, the performance curve, and comes with breakdown. Lee is coping well."]
          ]}
      ],
      summary:"GAS: alarm, resistance, exhaustion. It is outdated because disease comes from the stress response itself; allostatic load (wear and tear) replaced it."
    },
    {
      id:"W5-C5", title:"Chronic stress and long-term health", src:"W5 Part 3, slides 9-17",
      blurb:"Health risks of chronic stress, psychoneuroimmunology, the hippocampus, and the Whitehall gradient.",
      learn:"Unresolved chronic stress, or handling stressors poorly, raises the risk of many health problems: cardiovascular disease (chronic high blood pressure; inflammation damages blood vessels), psychological problems (depression, anxiety, panic attacks, eating disorders, PTSD), and altered immune function (more infections). Others include digestive problems, headaches, insomnia, injuries, menstrual irregularities, and pregnancy complications.<br><b>Psychoneuroimmunology</b> studies how the nervous, endocrine, and immune systems interact. Higher cortisol lowers lymphocyte numbers. Neuropeptides turn stressful emotions into biochemical events. Acute stress moves white blood cells into the periphery; chronic stress and prolonged cortisol increase inflammation.<br>The <b>hippocampus</b> (learning, memory, emotion) keeps making new neurons. Stress, anxiety and depression suppress this neurogenesis; exercise increases it.<br>Sir Michael Marmot's <b>Whitehall studies</b> found a gradient: the lower the employment grade, the higher the death rate. Low job control went with more coronary heart disease.",
      steps:[
        {id:"W5-C5-S1", type:"table", src:"W5 Part 3, slide 14",
          prompt:"Read the Whitehall data and answer.",
          caption:"Whitehall Figure 1: death rate by employment grade over a 25-year period in men, relative to the civil service average (set at 1). Source data: Marmot and Shipley, 1996. Bar values are not printed; the descriptions below come from the figure caption and bar order.",
          head:["Employment grade","Death rate vs average, ages 40-64"],
          rows:[
            ["Administrators (top grade)","About half the average"],
            ["Professional/Executive","Below the average"],
            ["Clerical","Above the average"],
            ["Other (office support, bottom grade)","About twice the average"]
          ],
          qs:[
            {id:"W5-C5-S1-Q1", type:"mcq", src:"W5 Part 3, slide 14", ch:"W5-C5", added:"2026-10-26",
              q:"Which conclusion does Figure 1 support?",
              opts:[
                ["Death rate rises step by step as employment grade falls", true, "In every age group the bars rise from Administrators to Professional/Executive to Clerical to Other."],
                ["Only the bottom grade differs from the average", false, "Administrators are well below the average and Clerical is above it, so several grades differ."],
                ["Administrators have about twice the average death rate", false, "Administrators have about half the average. The Other grade has about twice."],
                ["Higher grades have higher death rates because of heavier responsibility", false, "The chart shows the reverse: the top grade has the lowest death rate."]
              ]},
            {id:"W5-C5-S1-Q2", type:"mcq", src:"W5 Part 3, slide 14", ch:"W5-C5", added:"2026-10-26",
              q:"At ages 40-64, about how many times higher is the bottom grade's death rate than the top grade's?",
              opts:[
                ["About four times", true, "About 2 (twice average) divided by about 0.5 (half average) = 4. The caption calls it a four-fold difference."],
                ["About two times", false, "Two times is the gap between the Other grade and the average, not between the top and bottom grades."],
                ["About half", false, "Half is the Administrators' rate compared with the average."],
                ["About 40 percent higher", false, "40% is the rise in death rate in Russian men after the fall of communism, a different statistic."]
              ]}
          ]},
        {id:"W5-C5-S2", type:"sort", src:"W5 Part 3, slides 10, 16",
          prompt:"Sort each long-term effect of chronic stress into its category on the slides.",
          bins:["Cardiovascular","Psychological","Immune system"],
          items:[
            ["Chronic high blood pressure", 0, "Listed as leading to cardiovascular disease."],
            ["Inflammation damaging blood vessels", 0, "Listed under cardiovascular disease."],
            ["Panic attacks", 1, "Listed under psychological problems."],
            ["Eating disorders", 1, "Listed under psychological problems."],
            ["Post-traumatic stress disorder", 1, "Listed under psychological problems."],
            ["Depression", 1, "Listed under psychological problems."],
            ["Increased vulnerability to infections", 2, "Listed under altered functioning of the immune system."],
            ["Fewer lymphocytes as cortisol rises", 2, "Psychoneuroimmunology slide: increased cortisol leads to decreased numbers of lymphocytes."]
          ]},
        {id:"W5-C5-S3", type:"mcq", src:"W5 Part 3, slide 12", ch:"W5-C5", added:"2026-10-26",
          case:"After months of chronic stress and low mood, Ethan finds it much harder to learn and remember new course material.",
          q:"Which explanation from the slides fits best?",
          opts:[
            ["Stress and depression are associated with suppressed neurogenesis in the hippocampus, a region involved in learning and memory", true, "The slide links stress, anxiety and depression to suppressed neurogenesis in the hippocampus."],
            ["Stress increases neurogenesis in the hippocampus, which overloads memory", false, "Stress suppresses neurogenesis. Exercise is what increases it."],
            ["The hippocampus releases ACTH, which blocks learning", false, "ACTH comes from the pituitary. The hippocampus is a site of negative feedback."],
            ["Exercise suppresses neurogenesis, so his gym habit is the cause", false, "Exercise has been shown to increase neurogenesis in the hippocampus."]
          ]}
      ],
      summary:"Chronic stress raises cardiovascular, psychological and immune risks through cortisol and inflammation, suppresses hippocampal neurogenesis, and follows a social gradient (Whitehall)."
    },
    {
      id:"W5-C6", title:"Sources of stress and sleep", src:"W5 Part 4, slides 2-9",
      blurb:"Where stress comes from, first steps for managing it, and how sleep and stress hormones connect.",
      learn:"Common sources of stress: major life changes, daily hassles, job-related stressors (burnout), and postsecondary stressors (academic, interpersonal, time pressures, financial concerns, future worries). There are also social stressors (real and virtual social networks; diverse populations, discrimination, racism), environmental stressors (natural disasters, acts of violence, industrial accidents), and internal stressors.<br>To manage stress: shore up your support system, improve communication skills, do acts of kindness, build healthy exercise, eating and sleeping habits, and learn to identify and moderate your stressors.<br>Most adults need 7 to 9 hours of sleep. Sleep has two phases. <b>NREM</b> has 4 stages of deeper sleep: blood pressure, breathing, heart rate and temperature drop, growth hormone is released, and brain waves slow. <b>REM</b> is rapid eye movement sleep. Lack of sleep has the greatest impact on stress. Stress hormones are low in NREM and rise in REM, and sleep deprivation slows their daytime decline.",
      steps:[
        {id:"W5-C6-S1", type:"sort", src:"W5 Part 4, slides 2-3",
          prompt:"Sort each stressor into its category from the slides.",
          bins:["Postsecondary stressor","Social stressor","Environmental stressor"],
          items:[
            ["Worrying about finding work after graduation", 0, "Future worries are a postsecondary stressor."],
            ["Figuring out how to pay next term's tuition", 0, "Financial concerns are a postsecondary stressor."],
            ["Three assignments due in the same week", 0, "Time pressures are a postsecondary stressor."],
            ["Comparing yourself to friends' posts online", 1, "Virtual social networks are a social stressor."],
            ["Experiencing racism on the bus", 1, "Discrimination and racism are social stressors."],
            ["A flood in your hometown", 2, "Natural disasters are environmental stressors."],
            ["A chemical spill at a nearby plant", 2, "Industrial accidents are environmental stressors."],
            ["An act of violence near campus", 2, "Acts of violence are listed as environmental stressors."]
          ]},
        {id:"W5-C6-S2", type:"compare", src:"W5 Part 4, slides 6-7, 9",
          prompt:"NREM sleep or REM sleep?",
          a:{name:"NREM sleep", points:["4 stages of successively deeper sleep","Blood pressure, heart rate, breathing and temperature drop; growth hormone released","Stress hormones are low"]},
          b:{name:"REM sleep", points:["Rapid eye movement","Stress hormones increase","Shown in red on the hypnogram; REM periods get longer toward morning"]},
          scenarios:[
            ["Brain wave patterns become slow and even", 0, "Listed as a physiological change of NREM sleep."],
            ["Stress hormone levels rise", 1, "Stress hormones increase during REM."],
            ["Growth hormone is released", 0, "Listed under NREM changes."],
            ["Body temperature declines", 0, "Listed under NREM changes."],
            ["The red segments on the hypnogram, longer late in the night", 1, "REM is drawn in red, and REM periods lengthen toward morning."]
          ]},
        {id:"W5-C6-S3", type:"mcq", src:"W5 Part 4, slides 8-9", ch:"W5-C6", added:"2026-10-26",
          case:"After three nights of only four hours of sleep, Ali notices he feels more stressed and on edge in the afternoons than usual.",
          q:"Which explanation from the slides fits best?",
          opts:[
            ["Sleep deprivation slows the normal daytime decline in stress hormones", true, "The slide says sleep deprivation slows the daytime decline in stress hormones."],
            ["Missing NREM sleep means he missed the phase when stress hormones are highest", false, "Stress hormones are low during NREM and increase during REM."],
            ["Lack of sleep lowers stress hormones, so he feels flat rather than stressed", false, "The slides link sleep deprivation to an increase in stress hormones."],
            ["Short sleep raises growth hormone during the day", false, "Growth hormone release is listed as part of NREM sleep, not a daytime effect of short sleep."]
          ]}
      ],
      summary:"Stress comes from life changes, daily hassles, school, social and environmental sources. Sleep loss has the biggest effect on stress: stress hormones rise in REM, and deprivation keeps them up during the day."
    },
    {
      id:"W5-C7", title:"Coping techniques", src:"W5 Part 4, slides 10-17",
      blurb:"Time management, journaling, cognitive and relaxation techniques, and what to avoid.",
      learn:"<b>Time management</b>: set priorities, schedule tasks for peak efficiency, set realistic goals, budget enough time, break up long-term goals, track tasks you put off, do least favourite tasks first, consolidate tasks, delegate, say no when needed, take breaks, avoid time sinks, and just do it.<br><b>Journaling</b> (confiding in yourself through writing) helps people who are shy or introverted. It may lower mood in the short term, but stress drops over the long term.<br><b>Cognitive techniques</b>: think and act constructively, take control, problem solve, stay positive, cultivate humour, focus on what matters, and modify expectations.<br><b>Relaxation techniques</b> trigger the relaxation response, the opposite of fight or flight: progressive muscle relaxation, visualization, meditation, deep breathing, yoga, tai chi, music, and biofeedback.<br><b>Counterproductive</b> strategies: tobacco, alcohol and other drugs, and unhealthy eating. A personal plan: identify stressors, design your plan, get help.",
      steps:[
        {id:"W5-C7-S1", type:"sort", src:"W5 Part 4, slides 10-15",
          prompt:"Sort each strategy into its slide category.",
          bins:["Time management","Cognitive technique","Relaxation technique","Counterproductive"],
          items:[
            ["Delegate responsibility", 0, "Listed under time management."],
            ["Do least favourite tasks first", 0, "Listed under time management."],
            ["Modify expectations", 1, "Listed under cognitive techniques."],
            ["Cultivate your sense of humour", 1, "Listed under cognitive techniques."],
            ["Progressive muscle relaxation", 2, "Listed under relaxation techniques."],
            ["Biofeedback", 2, "Listed under relaxation techniques."],
            ["Yoga", 2, "Listed under relaxation techniques."],
            ["Smoking to calm down", 3, "Tobacco use is a counterproductive coping strategy."],
            ["Stress eating fast food", 3, "Unhealthy eating habits are counterproductive."]
          ]},
        {id:"W5-C7-S2", type:"mcq", src:"W5 Part 4, slide 12", ch:"W5-C7", added:"2026-10-26",
          case:"Kim is introverted and starts a journal about her stress. After a week, she says writing about her worries made her feel worse on some evenings.",
          q:"What do the slides predict for Kim?",
          opts:[
            ["Her short-term mood may dip, but over the long term her stress should drop", true, "Journaling may negatively affect short-term mood, but over the long term stress is reduced."],
            ["Journaling does not work for introverts, so she should stop", false, "The slide says journaling is helpful for people who are shy or introverted."],
            ["The low mood means journaling is a counterproductive coping strategy", false, "Counterproductive strategies on the slides are tobacco, alcohol and other drugs, and unhealthy eating."],
            ["Writing triggers the relaxation response right away", false, "The slide expects a possible short-term dip in mood, not instant relaxation."]
          ]},
        {id:"W5-C7-S3", type:"mcq", src:"W5 Part 4, slide 16", ch:"W5-C7", added:"2026-10-26",
          case:"A student's stress journal has a column for time, stressor, and reaction. Entries include 'Late for class: slouched in back of room, chewed my nails' and 'Ed asked to borrow money: stayed calm, counted to 10, explained he already owes me $50.'",
          q:"What is the main purpose of this journal, according to Fig 3.5?",
          opts:[
            ["Tracking stressful events and reactions helps you understand how you normally cope", true, "Fig 3.5's caption says tracking stressors and reactions helps you understand how you normally cope. It supports the first step of a personal plan: identify stressors."],
            ["It replaces getting help, the last step of a personal plan", false, "The plan is identify stressors, design your plan, and get help. The journal does not replace getting help."],
            ["It measures stress hormone levels across the day", false, "Stress hormone levels are shown in Fig 3.4, a cortisol graph, not a journal."],
            ["It gives a PSS score to compare against the cutoff of 14", false, "The PSS is a separate 10-item scale. The journal records events and reactions."]
          ]}
      ],
      summary:"Manage stress with time management, journaling, cognitive and relaxation techniques. Avoid tobacco, alcohol and drugs, and unhealthy eating. Plan: identify stressors, design a plan, get help."
    }
  ],

  questions:[
    /* C1: what stress is, PSS, nervous system */
    {id:"W5-Q01", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slide 2", added:"2026-10-26",
      q:"In the textbook's terms, what is a stressor?",
      opts:[
        ["A situation or event that triggers physical and emotional reactions", true, "This is the slide definition of a stressor."],
        ["The physical and emotional reactions to a triggering event", false, "That is the stress response."],
        ["The general physical and emotional state that accompanies the reactions", false, "That is stress."],
        ["The long-term wear and tear of repeated reactions", false, "That is allostatic load."]
      ]},
    {id:"W5-Q02", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slide 2", added:"2026-10-26",
      case:"Kai has four deadlines this week. When he opens his calendar, his heart races and his hands sweat. By Friday he describes himself as tense and worn out overall.",
      q:"Which matching of terms is correct?",
      opts:[
        ["Deadlines = stressor; racing heart = stress response; overall tense state = stress", true, "Stressor is the trigger, stress response is the reaction, and stress is the general state that goes with the response."],
        ["Deadlines = stress; racing heart = stressor; overall tense state = stress response", false, "The deadlines trigger the reaction, so they are the stressor."],
        ["Deadlines = stressor; racing heart = stress; overall tense state = stress response", false, "The racing heart is a reaction (stress response). The overall state is stress."],
        ["Deadlines = stress response; racing heart = stress; overall tense state = stressor", false, "This reverses trigger and reaction."]
      ]},
    {id:"W5-Q03", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slide 4", added:"2026-10-26",
      case:"Rina's PSS answers to items 1, 2, 3, 6, 9 and 10 add up to 16. Her answers to the starred items are: item 4 = 2, item 5 = 1, item 7 = 1, item 8 = 0.",
      q:"What is Rina's total score, and how does it compare with the cutoff?",
      opts:[
        ["12, which is not above 14", true, "16 - (2+1+1+0) = 16 - 4 = 12. The slide's action point is a total above 14."],
        ["20, which is above 14", false, "20 comes from adding the starred items instead of subtracting them."],
        ["16, which is above 14", false, "16 ignores the starred items, which must be subtracted."],
        ["12, which is above 14", false, "The arithmetic is right, but 12 is below the cutoff of 14."]
      ]},
    {id:"W5-Q04", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slide 4", added:"2026-10-26",
      q:"On the Perceived Stress Scale, which item is ADDED to the score (not subtracted)?",
      opts:[
        ["Found that you could not cope with all the things you had to do", true, "Item 6 is not starred, so it is added."],
        ["Felt confident about your ability to handle your personal problems", false, "Item 4 is starred and subtracted."],
        ["Been able to control irritations in your life", false, "Item 7 is starred and subtracted."],
        ["Felt that you were on top of things", false, "Item 8 is starred and subtracted."]
      ]},
    {id:"W5-Q05", type:"mcq", ch:"W5-C1", src:"W5 Part 2, slide 2", added:"2026-10-26",
      q:"Which statement about the divisions of the nervous system is correct?",
      opts:[
        ["The autonomic nervous system is part of the PNS and works under involuntary control", true, "The slide diagram places the autonomic nervous system under the PNS, with involuntary control."],
        ["The somatic nervous system contains the sympathetic and parasympathetic divisions", false, "Those two divisions belong to the autonomic nervous system."],
        ["The CNS is made up of the brain, spinal cord, and autonomic nervous system", false, "The CNS is the brain and spinal cord. The autonomic system is in the PNS."],
        ["The somatic nervous system controls basic body processes such as digestion", false, "The autonomic system controls basic body processes. The somatic system handles motor and sensory functions under mostly conscious control."]
      ]},
    {id:"W5-Q06", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slide 9", added:"2026-10-26",
      q:"Activation of the sympathetic division causes release of which catecholamines?",
      opts:[
        ["Norepinephrine and epinephrine", true, "The slide lists norepinephrine (noradrenaline) and epinephrine (adrenaline)."],
        ["CRH and ACTH", false, "These are HPA axis hormones from the hypothalamus and pituitary, not catecholamines."],
        ["Cortisol and other glucocorticoids", false, "Glucocorticoids come from the adrenal cortex through the HPA axis."],
        ["Endorphins and oxytocin", false, "Endorphins block pain in fight or flight and oxytocin is mentioned under gender differences. Neither is listed as a catecholamine."]
      ]},
    {id:"W5-Q07", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slides 11-12", added:"2026-10-26",
      case:"A cyclist swerves to avoid a car door that opens suddenly in front of her.",
      q:"Which body change would you expect during her fight-or-flight reaction?",
      opts:[
        ["Her liver releases extra sugar into the blood to boost energy", true, "The slides list the liver releasing extra sugar as part of fight or flight."],
        ["Digestion speeds up to supply fuel to the muscles", false, "Digestion halts during an emergency."],
        ["Her pupils constrict to sharpen focus", false, "Fig 3.1 says pupils dilate to let in more light."],
        ["Her heart rate slows to save oxygen", false, "Heart rate accelerates during fight or flight."]
      ]},
    {id:"W5-Q08", type:"mcq", ch:"W5-C1", src:"W5 Part 1, slides 13, 18", added:"2026-10-26",
      q:"Which statement about the stress response in modern life matches the slides?",
      opts:[
        ["Many modern stressors, such as an exam, do not require a physical response", true, "The slide says fight, flight or freeze is part of our biological heritage, but many stressors do not need a physical response."],
        ["Once a stressor ends, the sympathetic division stops the stress response", false, "The parasympathetic division takes command and stops the stress response."],
        ["Everyone responds the same way to the same stressor", false, "The slide says people respond differently to various stressors."],
        ["Freezing is the most common modern response", false, "The slide says the common response is flight."]
      ]},

    /* C2: HPA and SAM */
    {id:"W5-Q09", type:"mcq", ch:"W5-C2", src:"W5 Part 1, slide 14", added:"2026-10-26",
      q:"In the HPA axis, which hormone does the pituitary gland release into the bloodstream?",
      opts:[
        ["ACTH (adrenocorticotropic hormone)", true, "CRH stimulates the pituitary to release ACTH into the blood."],
        ["CRH (corticotropin-releasing hormone)", false, "CRH is released by the hypothalamus."],
        ["Cortisol", false, "Cortisol is released by the adrenal gland."],
        ["Epinephrine", false, "Epinephrine comes from the adrenal medulla in the SAM axis."]
      ]},
    {id:"W5-Q10", type:"mcq", ch:"W5-C2", src:"W5 Part 1, slide 14", added:"2026-10-26",
      q:"Where is CRH released?",
      opts:[
        ["The paraventricular nucleus (PVN) of the hypothalamus", true, "The PVN in the hypothalamus releases CRH."],
        ["The adrenal cortex", false, "The adrenal cortex releases glucocorticoids."],
        ["The adrenal medulla", false, "The adrenal medulla secretes epinephrine."],
        ["The hippocampus", false, "The hippocampus is a site of negative feedback, not CRH release."]
      ]},
    {id:"W5-Q11", type:"mcq", ch:"W5-C2", src:"W5 Part 1, slides 14-15", added:"2026-10-26",
      case:"A patient has a pituitary condition that makes the gland release far more ACTH than normal, even with no stressor.",
      q:"What would you expect next in the HPA chain?",
      opts:[
        ["The adrenal gland releases more glucocorticoids", true, "ACTH travels to the adrenal gland and stimulates glucocorticoid release, so more ACTH means more cortisol."],
        ["The adrenal gland releases less cortisol", false, "ACTH stimulates the adrenal gland. More ACTH raises cortisol."],
        ["The hypothalamus releases more CRH because ACTH stimulates it", false, "ACTH acts on the adrenal gland. Rising glucocorticoids feed back to turn the hypothalamus down, not up."],
        ["The adrenal medulla releases cortisol in place of epinephrine", false, "Cortisol comes from the adrenal cortex. The adrenal medulla secretes epinephrine."]
      ]},
    {id:"W5-Q12", type:"mcq", ch:"W5-C2", src:"W5 Part 1, slide 15", added:"2026-10-26",
      q:"Besides the hypothalamus and pituitary, where else do glucocorticoids turn down the stress response?",
      opts:[
        ["The hippocampus", true, "The slide says negative feedback also turns down the response in the hippocampus."],
        ["The adrenal medulla", false, "The adrenal medulla is part of the SAM axis. It is not named as a feedback site."],
        ["The locus coeruleus", false, "On the Bucci figure, norepinephrine (not glucocorticoids) feeds back to the locus coeruleus."],
        ["The spleen", false, "The spleen releases red blood cells in fight or flight. It is not a feedback site."]
      ]},
    {id:"W5-Q13", type:"mcq", ch:"W5-C2", src:"W5 Part 1, slide 16", added:"2026-10-26",
      q:"Which pairing of stress pathway and output is correct?",
      opts:[
        ["SAM axis: adrenal medulla secretes epinephrine. HPA axis: adrenal cortex secretes cortisol.", true, "This matches the Bucci et al. (2016) figure."],
        ["SAM axis: adrenal cortex secretes cortisol. HPA axis: adrenal medulla secretes epinephrine.", false, "The glands are swapped."],
        ["SAM axis: pituitary secretes ACTH. HPA axis: sympathetic neurons release norepinephrine.", false, "ACTH belongs to the HPA axis and sympathetic neurons to the SAM axis."],
        ["Both axes end with the adrenal cortex secreting epinephrine", false, "The adrenal cortex secretes cortisol. Epinephrine comes from the adrenal medulla."]
      ]},
    {id:"W5-Q14", type:"mcq", ch:"W5-C2", src:"W5 Part 1, slide 17", added:"2026-10-26",
      q:"According to McEwen's (1998) figure, how do allostatic systems respond to stress?",
      opts:[
        ["They start the adaptive response, sustain it until the stress ends, then shut it off", true, "The caption describes initiation, sustaining the response until the stress ceases, then shut-off (recovery)."],
        ["They keep the response at full strength permanently once it starts", false, "That would be a prolonged response, one cause of allostatic load, not normal allostasis."],
        ["They respond only through catecholamines, never glucocorticoids", false, "Responses are started by both catecholamines and glucocorticoids, and cross-talk can occur."],
        ["They prevent any physiological change so the body stays at baseline", false, "Allostasis involves an adaptive response that alters cell and tissue function before recovery."]
      ]},

    /* C3: appraisal, personality, curve, symptoms */
    {id:"W5-Q15", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 3", added:"2026-10-26",
      case:"Tom and Ana get the same surprise quiz. Tom had guessed a quiz was coming and feels he can control how he prepares. Ana did not see it coming and feels helpless.",
      q:"Which concept best explains why Ana feels more stressed?",
      opts:[
        ["Cognitive appraisal: successful prediction and perception of control", true, "Appraisal depends on whether you can predict the stressor and whether you feel in control. Tom had both; Ana had neither."],
        ["Eustress: the quiz is a pleasant stressor for Tom", false, "Nothing suggests either student finds the quiz pleasant. The difference is in prediction and control."],
        ["The exhaustion stage of the general adaptation syndrome", false, "Exhaustion follows prolonged stress. This is a single quiz."],
        ["Repeated hits causing allostatic load", false, "Repeated hits are frequent stressors over time, not a difference in how one event is appraised."]
      ]},
    {id:"W5-Q16", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 3", added:"2026-10-26",
      q:"Which is listed on the slides as an INEFFECTIVE response to stress?",
      opts:[
        ["Procrastination", true, "Procrastination is listed with overeating, frustration, and self-medicating as ineffective."],
        ["Laughing", false, "Laughing is listed as effective."],
        ["Time management", false, "Time management is listed as effective."],
        ["Talking", false, "Talking is listed as effective."]
      ]},
    {id:"W5-Q17", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 4", added:"2026-10-26",
      case:"Deshawn has no deadlines, no job, and no goals this term. He describes himself as inactive and says nothing pushes him to improve.",
      q:"Where is Deshawn on the stress curve (Fig 3.2)?",
      opts:[
        ["Too little stress (underload)", true, "Too little stress means people are not challenged enough to improve; the curve marks this zone 'inactive' and 'laid back'."],
        ["Optimum stress", false, "Optimum stress challenges people in a way that promotes their best performance."],
        ["Too much stress (overload)", false, "Overload comes with fatigue and exhaustion from too many demands."],
        ["Burnout", false, "Burnout comes after overload, with anxiety, panic, anger, and breakdown."]
      ]},
    {id:"W5-Q18", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 6", added:"2026-10-26",
      q:"Which of these is NOT one of the Big Five personality factors?",
      opts:[
        ["Trait anxiety", true, "Trait anxiety is listed separately on the slide. The Big Five are conscientiousness, agreeableness, neuroticism, openness to experience, and extraversion."],
        ["Conscientiousness", false, "Conscientiousness is one of the Big Five."],
        ["Neuroticism", false, "Neuroticism is one of the Big Five."],
        ["Openness to experience", false, "Openness to experience is one of the Big Five."]
      ]},
    {id:"W5-Q19", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 7", added:"2026-10-26",
      q:"Which statement about resilience matches the slides?",
      opts:[
        ["It is linked to social and academic success in at-risk populations and helps people handle stress more positively", true, "This is how the slide describes resilience."],
        ["It is fixed at birth, since basic elements of personality cannot change", false, "The slide says research suggests you can change some basic elements of your personality."],
        ["It is one of the five factors in the Big Five model", false, "Resilience is discussed separately from the Big Five."],
        ["It makes people more vulnerable to stress", false, "That describes higher trait anxiety, not resilience."]
      ]},
    {id:"W5-Q20", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 8", added:"2026-10-26",
      q:"Which physiological gender difference is described on the slides?",
      opts:[
        ["Women have higher levels of oxytocin, linked to social interaction and mood regulation", true, "The slide lists higher oxytocin in women, linked to social interaction and mood regulation."],
        ["Testosterone lowers blood pressure and protects against CVD", false, "The slide says testosterone affects blood pressure and could increase risk for CVD."],
        ["Men have higher oxytocin, which affects the amygdala", false, "Higher oxytocin is listed for women. Testosterone is linked to the amygdala."],
        ["Gender affects only expectations, not physiology", false, "The slide lists both expectations about behaviour and physiological differences."]
      ]},
    {id:"W5-Q21", type:"mcq", ch:"W5-C3", src:"W5 Part 2, slide 9", added:"2026-10-26",
      q:"In the slide 9 table of symptoms of excess stress, which is classed as a behavioural symptom?",
      opts:[
        ["Problems communicating", true, "Problems communicating is in the behavioural column."],
        ["Hypervigilance", false, "Hypervigilance is in the emotional column."],
        ["Grinding of teeth", false, "Grinding of teeth is in the physical column."],
        ["Pounding heart", false, "Pounding heart is in the physical column."]
      ]},

    /* C4: GAS and allostatic load */
    {id:"W5-Q22", type:"mcq", ch:"W5-C4", src:"W5 Part 3, slide 2", added:"2026-10-26",
      q:"Who first proposed the general adaptation syndrome?",
      opts:[
        ["Hans Selye, a Canadian endocrinologist", true, "The slide credits Selye, the father of the field of stress research."],
        ["Sir Michael Marmot", false, "Marmot led the Whitehall studies of health gradients."],
        ["Bruce McEwen", false, "McEwen's 1998 figures are used for allostasis and allostatic load."],
        ["Sheldon Cohen", false, "Cohen is first author of the Perceived Stress Scale (1983)."]
      ]},
    {id:"W5-Q23", type:"mcq", ch:"W5-C4", src:"W5 Part 3, slide 3", added:"2026-10-26",
      case:"The day after learning his parent is seriously ill, Ravi has headaches and indigestion and cannot sleep.",
      q:"Which GAS stage best fits Ravi?",
      opts:[
        ["Alarm", true, "In alarm the body is more susceptible to disease or injury, with headaches, indigestion, anxiety, and disrupted eating or sleep."],
        ["Resistance", false, "In resistance, homeostasis develops and the body becomes more resistant. Ravi's symptoms are just starting."],
        ["Exhaustion", false, "Exhaustion is a life-threatening state after prolonged exposure. This is one day in."],
        ["Optimum stress", false, "Optimum stress is a zone on the stress curve, not a GAS stage."]
      ]},
    {id:"W5-Q24", type:"mcq", ch:"W5-C4", src:"W5 Part 3, slide 4", added:"2026-10-26",
      q:"Why is the general adaptation syndrome considered partly outdated?",
      opts:[
        ["Increased disease susceptibility is now traced to the stress response itself rather than depletion of resources", true, "This is the reason given on the slide; GAS was replaced with the idea of allostatic load."],
        ["It left out the resistance stage", false, "Resistance is one of the three GAS stages."],
        ["It was replaced by the Perceived Stress Scale", false, "GAS was replaced by allostatic load. The PSS is a self-test."],
        ["It assumed all stressors are pleasant", false, "GAS already separated eustress (pleasant) from distress (unpleasant)."]
      ]},
    {id:"W5-Q25", type:"mcq", ch:"W5-C4", src:"W5 Part 3, slides 7-8", added:"2026-10-26",
      case:"Mia gives a class presentation. Her heart rate and stress hormones are still high hours after it ended, with no recovery period.",
      q:"Which cause of high allostatic load does this show?",
      opts:[
        ["Inability to shut down the stress response", true, "McEwen's figure shows this as a prolonged response with no recovery."],
        ["Frequent stressors", false, "Frequent stressors are repeated hits: many separate normal responses."],
        ["Poor adaptation to common stressors", false, "Poor adaptation is a response that does not shrink with repetition. This is one event that does not end."],
        ["Inadequate response", false, "An inadequate response is too small, leading to hyperactivity in other systems."]
      ]},
    {id:"W5-Q26", type:"mcq", ch:"W5-C4", src:"W5 Part 3, slides 7-8", added:"2026-10-26",
      case:"Ben gives a talk every week. By his tenth talk, his stress response is just as large as it was the first time.",
      q:"Which cause of high allostatic load does this show?",
      opts:[
        ["Poor adaptation to common stressors", true, "Normally the response shrinks with repetition. Ben's stays at full height: lack of adaptation."],
        ["Inability to shut down the stress response", false, "Nothing suggests his response fails to recover after each talk."],
        ["Inadequate response", false, "His response is large, not too small."],
        ["Eustress", false, "Eustress is a pleasant stressor, not a cause of allostatic load."]
      ]},
    {id:"W5-Q27", type:"mcq", ch:"W5-C4", src:"W5 Part 3, slides 5, 7", added:"2026-10-26",
      q:"Which of these is NOT listed as a reason for high allostatic load?",
      opts:[
        ["A quick return to baseline after each stressor", true, "A response that rises then recovers is the normal pattern on McEwen's figure, not a cause of load."],
        ["Frequent stressors", false, "Listed as a cause."],
        ["Inability to shut down the stress response", false, "Listed as a cause."],
        ["An inadequate response that leads to hyperactivity in other systems", false, "Listed as a cause."]
      ]},

    /* C5: chronic stress and health */
    {id:"W5-Q28", type:"mcq", ch:"W5-C5", src:"W5 Part 3, slide 5", added:"2026-10-26",
      q:"Psychoneuroimmunology is the study of interactions among which systems?",
      opts:[
        ["Nervous, endocrine, and immune", true, "This is the slide definition."],
        ["Nervous, cardiovascular, and digestive", false, "Cardiovascular and digestive problems are health outcomes of stress, not the systems in the definition."],
        ["Endocrine, respiratory, and immune", false, "The nervous system, not the respiratory system, is part of the definition."],
        ["Somatic, autonomic, and central nervous", false, "These are nervous system divisions only."]
      ]},
    {id:"W5-Q29", type:"mcq", ch:"W5-C5", src:"W5 Part 3, slide 16", added:"2026-10-26",
      case:"A nurse has worked night shifts under heavy pressure for two years, and her cortisol has stayed high for long periods.",
      q:"According to the psychoneuroimmunology slide, what would you expect?",
      opts:[
        ["Increased inflammation", true, "Chronic stress and prolonged secretion of cortisol increase inflammation."],
        ["More lymphocytes", false, "Increased cortisol leads to decreased numbers of lymphocytes."],
        ["A boosted immune response as white blood cells move to the periphery", false, "That describes acute stress, not chronic stress."],
        ["Increased neurogenesis in the hippocampus", false, "Stress is associated with suppressed neurogenesis. Exercise increases it."]
      ]},
    {id:"W5-Q30", type:"mcq", ch:"W5-C5", src:"W5 Part 3, slide 15", added:"2026-10-26",
      case:"Two civil servants in the same employment grade have the same coronary risk factors. One reports high control over her job; the other reports low control.",
      q:"Based on Whitehall II Figure 2, which is more likely?",
      opts:[
        ["The low-control worker has a higher likelihood of coronary heart disease", true, "Low job control had the highest likelihood of CHD, even after adjusting for grade and coronary risk factors."],
        ["The high-control worker has a higher likelihood of CHD from extra responsibility", false, "High job control had the lowest likelihood on the chart."],
        ["They have equal risk because they are in the same grade", false, "The chart was adjusted for grade and still showed a difference by job control."],
        ["Job control affects mortality but not CHD", false, "Figure 2 is specifically about CHD incidence and job control."]
      ]},
    {id:"W5-Q31", type:"mcq", ch:"W5-C5", src:"W5 Part 3, slide 13", added:"2026-10-26",
      q:"Which example on the slides shows that societies with high conflict and instability have higher mortality?",
      opts:[
        ["A 40% increase in death rate in Russian men following the fall of communism", true, "This is the example given on the slide."],
        ["A four-fold gap in mortality between top and bottom British civil service grades", false, "That is the Whitehall employment-grade gradient, not a society in conflict."],
        ["A 40% decrease in death rate in Russian men following the fall of communism", false, "The slide reports an increase."],
        ["Low job control doubling the likelihood of coronary heart disease", false, "That is the Whitehall II job control finding."]
      ]},
    {id:"W5-Q32", type:"mcq", ch:"W5-C5", src:"W5 Part 3, slide 17", added:"2026-10-26",
      q:"In the Neuropsychopharmacology Reviews (2012) figure, which is shown as an OUTCOME of chronic inflammation?",
      opts:[
        ["Depression", true, "Arrows point out from chronic inflammation to diabetes, cancer, depression, and cardiovascular disease."],
        ["Psychosocial stress", false, "Psychosocial stress is an input that feeds into chronic inflammation."],
        ["Obesity", false, "Obesity is an input on the figure."],
        ["Early life stress", false, "Early life stress is an input on the figure."]
      ]},

    /* C6: sources and sleep */
    {id:"W5-Q33", type:"mcq", ch:"W5-C6", src:"W5 Part 4, slide 2", added:"2026-10-26",
      case:"A second-year student is juggling rent, a part-time job that barely covers groceries, and a growing student loan.",
      q:"Which postsecondary stressor is this?",
      opts:[
        ["Financial concerns", true, "Money worries fall under financial concerns."],
        ["Time pressures", false, "Time pressures are about too little time, not money."],
        ["Interpersonal", false, "Interpersonal stressors involve relationships with other people."],
        ["Future worries", false, "Future worries are about what comes later, such as careers. Rent and loans are present financial concerns."]
      ]},
    {id:"W5-Q34", type:"mcq", ch:"W5-C6", src:"W5 Part 4, slide 5", added:"2026-10-26",
      q:"How much sleep do most adults need each night to stay healthy and perform their best?",
      opts:[
        ["7 to 9 hours", true, "This is the range on the slide."],
        ["5 to 6 hours", false, "Below the slide's range."],
        ["10 to 12 hours", false, "Above the slide's range."],
        ["4 hours of NREM plus 1 hour of REM", false, "The slide gives a total of 7 to 9 hours, not a split by phase."]
      ]},
    {id:"W5-Q35", type:"mcq", ch:"W5-C6", src:"W5 Part 4, slide 6", added:"2026-10-26",
      q:"Which change happens during NREM sleep?",
      opts:[
        ["Growth hormone is released", true, "Listed among NREM changes."],
        ["Blood pressure rises", false, "Blood pressure drops during NREM."],
        ["Stress hormones increase", false, "Stress hormones are low during NREM and increase during REM."],
        ["Brain waves become fast and uneven", false, "Brain wave patterns become slow and even."]
      ]},
    {id:"W5-Q36", type:"mcq", ch:"W5-C6", src:"W5 Part 4, slide 9", added:"2026-10-26",
      q:"According to Fig 3.4, when do stress hormones such as cortisol reach a high level?",
      opts:[
        ["During the last stages of sleep, toward morning", true, "The caption says cortisol reaches a high level during the last stages of sleep. The graph peaks around 08h00."],
        ["Around midnight, at the start of sleep", false, "The graph is near its lowest around midnight to 02h00."],
        ["In the mid-afternoon", false, "Afternoon levels are lower than the morning peak."],
        ["At a constant level all day and night", false, "The caption says levels fluctuate through the day and night."]
      ]},

    /* C7: coping techniques */
    {id:"W5-Q37", type:"mcq", ch:"W5-C7", src:"W5 Part 4, slide 14", added:"2026-10-26",
      q:"Relaxation techniques aim to trigger the relaxation response. What is it?",
      opts:[
        ["The opposite of the fight-or-flight reaction", true, "The slide defines the relaxation response this way."],
        ["The alarm stage of the general adaptation syndrome", false, "Alarm is a stress stage, not relaxation."],
        ["Activation of the SAM axis", false, "The SAM axis drives fight or flight."],
        ["A rise in stress hormones during REM sleep", false, "That is a sleep pattern, not the relaxation response."]
      ]},
    {id:"W5-Q38", type:"mcq", ch:"W5-C7", src:"W5 Part 4, slides 10-11", added:"2026-10-26",
      case:"Lena plans to study from 7 to 10 p.m. but loses almost two hours to scrolling videos between chapters.",
      q:"Which time management tip targets her problem most directly?",
      opts:[
        ["Avoid time sinks", true, "Scrolling that swallows study time is a time sink."],
        ["Consolidate tasks", false, "Consolidating groups similar tasks. It does not address the lost time."],
        ["Delegate responsibility", false, "Studying for her own course cannot be handed off."],
        ["Visualize achievement", false, "Visualizing does not stop the scrolling."]
      ]},
    {id:"W5-Q39", type:"mcq", ch:"W5-C7", src:"W5 Part 4, slides 13-15", added:"2026-10-26",
      q:"Which is a counterproductive coping strategy on the slides?",
      opts:[
        ["Using alcohol to unwind after a stressful day", true, "Use of alcohol and other drugs is listed as counterproductive."],
        ["Deep breathing", false, "Deep breathing is a relaxation technique."],
        ["Tai chi", false, "Tai chi is a relaxation technique."],
        ["Problem solving", false, "Problem solving is a cognitive technique."]
      ]},
    {id:"W5-Q40", type:"mcq", ch:"W5-C7", src:"W5 Part 4, slide 13", added:"2026-10-26",
      case:"After a poor quiz mark, Omar reminds himself that one quiz does not decide his term grade and changes his target from a perfect score to a strong one.",
      q:"Which type of stress management is Omar using?",
      opts:[
        ["A cognitive technique: modify expectations", true, "Modify expectations is listed under cognitive techniques."],
        ["A relaxation technique: visualization", false, "He is changing how he thinks about the result, not using visualization to relax."],
        ["Time management: set priorities", false, "He is not ordering tasks; he is changing his expectations."],
        ["Confiding in yourself through writing", false, "He is not keeping a journal."]
      ]}
  ],

  review:[
    {id:"W5-R01", ch:"W5-C1", src:"W5 Part 1, slides 2-4", added:"2026-10-26",
      q:"Define stressor, stress response, and stress using one example. Then explain how the Perceived Stress Scale is scored and what score calls for action.",
      answer:"A stressor is the situation or event that triggers physical and emotional reactions, such as an upcoming exam. The stress response is the reactions themselves, such as a racing heart and sweaty palms. Stress is the general physical and emotional state that accompanies the stress response. The PSS has 10 items about the past week, each answered from 0 (never) to 4 (very often). You add items 1, 2, 3, 6, 9 and 10 and subtract the starred items 4, 5, 7 and 8. A total above 14 means you should take time to develop effective stress management techniques.",
      points:["Stressor = triggering situation or event","Stress response = the reactions; stress = the general state","PSS: 10 items scored 0 to 4 for the past week","Add 1, 2, 3, 6, 9, 10; subtract starred 4, 5, 7, 8","Above 14 = develop stress management techniques"]},
    {id:"W5-R02", ch:"W5-C2", src:"W5 Part 1, slides 14-16", added:"2026-10-26",
      q:"Describe the HPA axis from stressor to cortisol, explain how negative feedback shuts it down, and contrast it with the SAM axis.",
      answer:"The hypothalamus receives sensory stressors, and its paraventricular nucleus releases CRH. CRH flows through veins to the pituitary, which releases ACTH into the bloodstream. ACTH travels to the adrenal gland, which releases glucocorticoids, cortisol in humans. Glucocorticoids then bind to glucocorticoid receptors in the hypothalamus, pituitary, and hippocampus, turning the response down and lowering glucocorticoids in the blood. The SAM axis is the rapid pathway: sympathetic neurons release norepinephrine and trigger the adrenal medulla to secrete epinephrine, activating fight or flight.",
      points:["Hypothalamus (PVN) releases CRH","Pituitary releases ACTH; adrenal gland releases cortisol","Negative feedback via GCRs in hypothalamus, pituitary, and hippocampus","SAM: sympathetic neurons and adrenal medulla, epinephrine and norepinephrine, rapid"]},
    {id:"W5-R03", ch:"W5-C3", src:"W5 Part 2, slides 3-8", added:"2026-10-26",
      q:"Two students face the same exam but react very differently. Use cognitive appraisal, personality, and the stress curve to explain why.",
      answer:"Cognitive appraisal is highly individual: a student who can predict the exam and feels in control will appraise it as less threatening. Personality, the sum of cognitive, behavioural and emotional tendencies, affects how people perceive and react to stressors. A student high in trait anxiety is more vulnerable to stress, while resilience helps people handle stress more positively. Gender, cultural background, and past experiences also shape the response. On the stress curve, a moderate level of stress gives optimal performance, while too little stress (underload) or too much (overload, burnout) lowers performance and can harm health.",
      points:["Appraisal: prediction and perception of control","Trait anxiety raises vulnerability; resilience helps","Other factors: gender, culture, experiences","Stress curve: moderate stress is optimal; underload and overload or burnout lower performance"]},
    {id:"W5-R04", ch:"W5-C4", src:"W5 Part 3, slides 2-8", added:"2026-10-26",
      q:"Outline Selye's general adaptation syndrome, explain why it is considered outdated, and describe what replaced it.",
      answer:"Hans Selye proposed GAS as a pattern of three stages. In alarm, the body is more susceptible to disease or injury and may show headaches, indigestion, anxiety, or disrupted eating and sleep. In resistance, homeostasis develops and the body becomes more resistant. Exhaustion is a life-threatening physiological state. GAS is partly outdated because increased disease susceptibility is now traced to the stress response itself rather than to depleted resources. It was replaced by allostatic load, the long-term wear and tear of the stress response, which may come from frequent stressors, poor adaptation, inability to shut down the response, or an inadequate response.",
      points:["Three stages: alarm, resistance, exhaustion, with one feature of each","Outdated: disease comes from the stress response itself, not depleted resources","Replaced by allostatic load (long-term wear and tear)","Names at least two of the four causes of high allostatic load"]},
    {id:"W5-R05", ch:"W5-C5", src:"W5 Part 3, slides 10-16", added:"2026-10-26",
      q:"Explain how chronic stress can damage long-term health. Include psychoneuroimmunology, the hippocampus, and the Whitehall findings.",
      answer:"Chronic stress raises the risk of cardiovascular disease through chronic high blood pressure and inflammation that damages blood vessels, and of psychological problems such as depression and anxiety. Psychoneuroimmunology studies the links among the nervous, endocrine, and immune systems: higher cortisol lowers lymphocyte numbers, and chronic stress with prolonged cortisol increases inflammation, raising vulnerability to infection. In the hippocampus, which handles learning, memory and emotion, stress is associated with suppressed neurogenesis, while exercise increases it. The Whitehall studies of British civil servants found that death rate rose as employment grade fell, a four-fold gap from top to bottom, and that low job control was linked to more coronary heart disease.",
      points:["Cardiovascular and psychological risks","PNI: cortisol lowers lymphocytes; chronic stress increases inflammation","Hippocampus: stress suppresses neurogenesis; exercise increases it","Whitehall: lower grade and lower job control, worse health"]},
    {id:"W5-R06", ch:"W5-C7", src:"W5 Part 4, slides 4-16", added:"2026-10-26",
      q:"A first-year student asks how to manage exam-season stress. Give a plan using at least four strategies from the slides, and name what to avoid.",
      answer:"Start by identifying stressors, for example with a stress journal, then design a plan and get help if needed. Protect sleep: most adults need 7 to 9 hours, and sleep deprivation keeps stress hormones high during the day. Use time management, such as setting priorities, breaking up long-term goals, and avoiding time sinks. Use cognitive techniques like problem solving and modifying expectations, and relaxation techniques such as deep breathing or yoga to trigger the relaxation response. Avoid counterproductive strategies: tobacco, alcohol and other drugs, and unhealthy eating.",
      points:["Personal plan: identify stressors, design plan, get help","Sleep 7 to 9 hours; deprivation keeps stress hormones up","At least two of: time management, journaling, cognitive, relaxation techniques","Avoid tobacco, alcohol and drugs, unhealthy eating"]}
  ],

  explore:[
    {fig:"hpa", title:"The HPA axis", caption:"From stressor to cortisol, and how negative feedback turns it off (Englert, 2004, as shown in W5 Part 1, slides 14-15).",
      items:{
        hyp:{label:"Hypothalamus", text:"Receives sensory stressors. Its paraventricular nucleus (PVN) releases CRH. Glucocorticoids feed back here to turn the response down.", src:"W5 Part 1, slides 14-15"},
        crh:{label:"CRH", text:"Corticotropin-releasing hormone. It flows through veins to the nearby pituitary gland and stimulates release of ACTH. The figure also shows vasopressin taking the same route.", src:"W5 Part 1, slide 14"},
        pit:{label:"Pituitary gland", text:"Releases ACTH into the bloodstream when stimulated by CRH. It is also a site of negative feedback.", src:"W5 Part 1, slides 14-15"},
        acth:{label:"ACTH", text:"Adrenocorticotropic hormone. It flows through blood vessels to the adrenal gland and stimulates release of glucocorticoids.", src:"W5 Part 1, slide 14"},
        adr:{label:"Adrenal gland", text:"Sits on top of the kidney. Its cortex releases glucocorticoids when stimulated by ACTH. In the SAM axis, its medulla secretes epinephrine.", src:"W5 Part 1, slides 14, 16"},
        cort:{label:"Cortisol", text:"The glucocorticoid in humans. It binds glucocorticoid receptors (GCRs) in the hypothalamus, pituitary, and hippocampus, which turns the response down and lowers glucocorticoids in the blood.", src:"W5 Part 1, slides 14-15"}
      }},
    {fig:"gas", title:"General adaptation syndrome", caption:"Selye's three stages of resistance to injury over time (Fig 3.3, W5 Part 3, slide 4).",
      items:{
        alarm:{label:"Alarm", text:"Resistance to injury dips below normal. The body is more susceptible to disease or injury; headaches, indigestion, anxiety, and disrupted eating or sleep may occur.", src:"W5 Part 3, slides 3-4"},
        resist:{label:"Resistance", text:"With continued stress, resistance rises above normal. Homeostasis develops and the body becomes more resistant to disease and injury.", src:"W5 Part 3, slides 3-4"},
        exhaust:{label:"Exhaustion", text:"With prolonged exposure to repeated stressors, resistance falls back to low levels. A life-threatening physiological state.", src:"W5 Part 3, slides 3-4"}
      }}
  ]
});
