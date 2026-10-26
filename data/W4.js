/*
  W4: Psychological Health (Week 4 Part 1) and Psychological Disorders (Week 4 Part 2).
  Notes on slide content that was unclear:
  - W4 Part 1, slide 8: the text "a combination of where people sit on a continuum of" is cut off on the slide.
    The figure transcription (two axes: mental well-being and mental illness) was used to complete the idea.
  - W4 Part 1, slide 23: the realistic self-talk table is an image; some realistic self-talk lines are only
    partly legible (shown with "..." in the transcription). Only the readable parts are used.
  - W4 Part 2, slide 7 (Figure 2.3): values are read off a bar chart, so they are approximate ("about").
  - W4 Part 2, slide 26 (nerve cell communication) is a diagram only; it is not tested here.
  - W4 Part 2, slide 23 shows page number 24 on the slide; the notes-file numbering (23) is used for src.
*/
HLTH.unit({
  id:"W4", n:4, added:"2026-10-26",
  title:"Psychological Health and Psychological Disorders",
  short:"Psychological health",
  blurb:"What psychological health is, how we grow and cope across life, and the main anxiety, mood and psychotic disorders with their treatments.",
  topics:[
    "Maslow and the dual continua model",
    "Erikson's 8 stages and adult identity",
    "Self-talk, defence mechanisms, anger",
    "DSM-5 and Canadian prevalence",
    "Anxiety and mood disorders",
    "Treatments, models and getting help"
  ],
  lectures:[
    "Week 4 Part 1: Defining Psychological Health and Meeting Life's Challenges",
    "Week 4 Part 2: Psychological Disorders"
  ],

  terms:[
    /* ---------- C1 ---------- */
    {id:"W4-T-psychological-health", term:"Psychological health", def:"Our capacity to think, feel and behave in ways that contribute to our ability to enjoy life and manage challenges. It can be defined negatively, as the absence of illness, or positively, as the presence of wellness. It matters to every dimension of wellness and is influenced by factors such as diet, sleep patterns and relationship issues.", src:"W4 Part 1, slide 2", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-maslows-hierarchy-of-needs", term:"Maslow's hierarchy of needs", def:"Abraham Maslow (1960s) took a positive view of psychological health and described a hierarchy of needs one works toward. Bottom to top: physiological needs, safety and security, love and belongingness, self-esteem, and self-actualization.", ex:"Physiological needs include food and water, shelter, sleep, exercise and sex. Safety includes safe surroundings, protection by others and knowing to avoid risks.", src:"W4 Part 1, slides 3-4", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-self-actualization", term:"Self-actualization", def:"The top level of Maslow's hierarchy. Its qualities: realism (being realistic), acceptance (accepting oneself, positive self-concept, high but realistic self-esteem, tolerance of one's own imperfections), autonomy (independent and inner-directed, not other-directed), authenticity (not afraid to be judged for being yourself), capacity for intimacy (sharing feelings and thoughts without fear of rejection) and creativity (renewed appreciation of the world, openness to new experiences).", ex:"Choosing a program from your own interests rather than to please others shows autonomy.", src:"W4 Part 1, slides 4-6", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-psychological-normality", term:"Psychological normality", def:"Being close to average. Psychological health is not the same as psychological normality. Psychological diversity is a valuable asset to society that brings a wide variety of ideas, lifestyles and attitudes, and the mere presence or absence of symptoms does not decide whether someone is mentally ill or mentally healthy.", src:"W4 Part 1, slide 7", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-dual-continua-model", term:"Dual continua model of mental health", def:"A newer model in which mental health is a combination of where a person sits on two continua: mental well-being (high to low) and mental illness (low to high). The two are related but distinct, and the absence of illness does not guarantee high well-being.", ex:"Quadrants: flourishing (high well-being, low illness), symptomatic but content (high well-being, high illness), vulnerable (low well-being, low illness), languishing (low well-being, high illness).", src:"W4 Part 1, slide 8", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-erik-erikson", term:"Erik Erikson", def:"Proposed (Childhood and Society, 1963) that development progresses through 8 stages across the lifetime, each with a conflict. Once one stage is mastered we may move to the next; failing to master a stage before moving on can have repercussions later in life, such as an identity crisis.", ex:"Birth to 1 year: trust vs. mistrust. Adolescence: identity vs. identity confusion. Older adulthood: integrity vs. despair.", src:"W4 Part 1, slides 10-11", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-eriksons-stages", term:"Erikson's 8 stages (Table 2.1)", def:"Birth to 1 year: trust vs. mistrust (primary caregiver). 1 to 3 years: autonomy vs. shame and self-doubt (parents). 3 to 6 years: initiative vs. guilt (family). 6 to 12 years: industry vs. inferiority (community). Adolescence: identity vs. identity confusion (peers). Young adulthood: intimacy vs. isolation (close friends, sex partners). Middle adulthood: generativity vs. self-absorption (work associates, children, community). Older adulthood: integrity vs. despair (society).", ex:"Middle adulthood task: doing things for others, including parenting and civic activities.", src:"W4 Part 1, slide 11", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-adult-identity", term:"Adult identity", def:"A unified self characterized by attitudes, beliefs and ways of acting: knowing who you are, what you are capable of, what roles you play and your place among your peers. It begins in adolescence, is a lifelong process and is an important part of psychological wellness.", ex:"Characteristics include gender, interests and talents, socioeconomic status, ethnicity, religion, sexual orientation, style of dress and choice of major. Some are permanent, others change over time; role models help.", src:"W4 Part 1, slides 12-14", ch:"W4-C1", added:"2026-10-26"},
    {id:"W4-T-values", term:"Values", def:"Beliefs that underlie our moral decisions and behaviour by helping us tell 'good' from 'bad'. They are often reexamined throughout life. Living by your values means considering options carefully, choosing the best option without pressures that oppose your values, and making a choice and acting on it rather than doing nothing.", ex:"Assessing values: which personality traits, activities, social ideals and institutions you value, and how well your lifestyle reflects them.", src:"W4 Part 1, slides 16-18", ch:"W4-C1", added:"2026-10-26"},

    /* ---------- C2 ---------- */
    {id:"W4-T-spiritual-wellness", term:"Spiritual wellness", def:"A very personal wellness component associated with greater coping skills. It is linked to longer life expectancy, reduced risk of disease, faster recovery and improved emotional health. Explanations for why it helps: social support, healthy habits, positive attitude and moments of relaxation.", src:"W4 Part 1, slides 19-20", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-self-concept", term:"Positive self-concept", def:"Begins in childhood by feeling loved, feeling one can give love, and sensing one can accomplish goals. Integration, feeling that you created your own self-concept rather than adopting an image others created, is essential. Stability depends on that integration and on freedom from contradictions.", src:"W4 Part 1, slide 21", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-cognitive-distortion", term:"Cognitive distortion", def:"A negative, unrealistic pattern of thinking that harms self-esteem. Types in the table: focusing on negatives, expecting the worst, overgeneralizing, minimizing, blaming others, expecting perfection, believing you're the cause of everything, thinking in black and white, and magnifying events.", src:"W4 Part 1, slides 22-23", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-realistic-self-talk", term:"Realistic self-talk", def:"Replacing distorted negative self-talk with a balanced statement. To meet challenges to self-esteem: notice your patterns of thinking, avoid focusing on the negative (avoid cognitive distortion), and develop realistic self-talk.", ex:"Negative: 'I know I'm going to fail this course.' Realistic: 'I'm not doing well; I should ask my professor what help I can get.'", src:"W4 Part 1, slides 22-23", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-defence-mechanisms", term:"Defence mechanisms", def:"When our wants conflict with the people around us or with our conscience and we cannot change the external situation, frustration or anxiety can result. To resolve the conflict internally we sometimes rearrange our thoughts and feelings; these are defence mechanisms (Table 2.2).", src:"W4 Part 1, slide 24", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-projection", term:"Projection", def:"Reacting to unacceptable inner impulses as if they were from outside the self.", ex:"A student who dislikes a roommate feels that the roommate dislikes them.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-repression", term:"Repression", def:"Expelling from awareness an unpleasant feeling, idea or memory.", ex:"The child of an alcoholic, neglectful person remembers them as a giving, loving person.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-denial", term:"Denial", def:"Refusing to acknowledge to yourself what you really know to be true.", ex:"A person believes smoking won't harm them because they're young and healthy.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-passive-aggressive-behaviour", term:"Passive-aggressive behaviour", def:"Expressing hostility toward someone by being covertly uncooperative or passive.", ex:"A person promises to help a competing co-worker with a report, then never follows through.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-displacement", term:"Displacement", def:"Shifting your feelings about a person to another person.", ex:"A student angry with a professor goes home and yells at a housemate.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-rationalization", term:"Rationalization", def:"Giving a false, acceptable reason when the real reason is unacceptable.", ex:"A shy student skips a residence party, telling themself they'd be bored.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-substitution", term:"Substitution", def:"Deliberately replacing a frustrating goal with one that is more attainable.", ex:"A student struggling in chemistry switches majors from biology to economics.", src:"W4 Part 1, slide 25", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-humour", term:"Humour (coping)", def:"Finding something funny in unpleasant situations.", ex:"A student whose bike was stolen pictures the thief's surprise on discovering the brakes don't work.", src:"W4 Part 1, slide 26", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-altruism", term:"Altruism", def:"Serving others without expecting anything in return.", ex:"A person with little money to spare volunteers at a foundation that helps people get out of poverty.", src:"W4 Part 1, slide 26", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-acting-out", term:"Acting out", def:"Engaging in an action that makes an unacceptable feeling go away.", ex:"A person who feels disrespected and devalued gets into a fight at a bar with a stranger.", src:"W4 Part 1, slide 26", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-reaction-formation", term:"Reaction formation", def:"Concealing emotions or impulses by exaggerating the opposite ones.", ex:"A person who dislikes children often buys expensive gifts for, and speaks with enthusiasm about, friends' children.", src:"W4 Part 1, slide 26", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-dissociation", term:"Dissociation", def:"Detaching from a current experience to avoid emotional distress.", ex:"Rather than listen to an angry parent, a child composes a piece of music in their head.", src:"W4 Part 1, slide 26", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-pessimism", term:"Pessimism", def:"Expecting repeated failure and rejection and feeling you deserve it. It is typically learned at a young age from parents or other authority figures. Overcoming it requires recognizing and disputing irrational, false and negative self-talk.", src:"W4 Part 1, slide 27", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-assertiveness", term:"Assertiveness", def:"Expression that is confident and direct but not hostile. It helps when fear of denial or rejection keeps us from communicating clearly even though we know what we want.", src:"W4 Part 1, slide 28", ch:"W4-C2", added:"2026-10-26"},
    {id:"W4-T-dealing-with-anger", term:"Dealing with anger", def:"Expressing anger is commonly thought to be healthy, but studies suggest overtly hostile people are at higher risk for heart attacks. For your own anger, reframe and distract when explosive anger is coming on. With other people's anger: react with calmness, validate their feelings, try to solve the problem, and when all else fails, disengage.", src:"W4 Part 1, slides 30-31", ch:"W4-C2", added:"2026-10-26"},

    /* ---------- C3 ---------- */
    {id:"W4-T-psychological-disorder", term:"Psychological disorder", def:"When feelings or thoughts such as anxiety, feeling down or irrational thoughts interfere with daily activities and rob us of peace of mind. Types include anxiety disorders, mood disorders and schizophrenia. Contributing factors: genetics, learning and life events, exposure to trauma, and parental and peer influences.", src:"W4 Part 2, slide 2", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-dsm-5", term:"DSM-5", def:"The Diagnostic and Statistical Manual of Mental Disorders. It lists a wider range of conditions than the textbook covers: mood disorders (unipolar and bipolar depression), behavioural addiction, anxiety disorders, learning disorders, schizophrenia, eating disorders, substance use disorders, Alzheimer's disease and other dementias, ADHD, and autism spectrum disorders.", src:"W4 Part 2, slide 3", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-mental-illness-prevalence", term:"Mental illness prevalence in Canada", def:"1 in 5 Canadians live with a mental illness in any given year. Lifetime: 14% major depressive disorder, 13.3% generalized anxiety disorder, 21.6% substance use disorder, 3.4% bipolar disorder. Schizophrenia affects about 1%. About 0.3 to 1% experience an eating disorder (rate 10 times higher for women), which has the highest mortality rate of any mental illness. In 2020, 23% of hospitalizations of people aged 5 to 24 were for a mental illness.", src:"W4 Part 2, slide 4", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-anxiety", term:"Anxiety", def:"Another word for fear, especially fear that is not in response to any definite threat. When fear is disproportionate to the actual danger, it can be considered a problem.", src:"W4 Part 2, slide 6", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-specific-phobia", term:"Simple (specific) phobia", def:"Fear of something definite, such as a particular animal or heights.", src:"W4 Part 2, slide 8", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-social-anxiety-disorder", term:"Social anxiety disorder", def:"Fear of humiliation or embarrassment while being observed by others.", ex:"Dreading a class presentation because others will watch you.", src:"W4 Part 2, slide 8", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-panic-disorder", term:"Panic disorder", def:"Sudden, unexpected surges of anxiety with a rapid and strong heartbeat, shortness of breath, loss of physical equilibrium and a feeling of losing mental control. Agoraphobia is listed under panic disorders.", src:"W4 Part 2, slide 9", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-generalized-anxiety-disorder", term:"Generalized anxiety disorder (GAD)", def:"Excessive, uncontrollable worry about all kinds of things and anxiety in many situations.", src:"W4 Part 2, slide 10", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-obsessive-compulsive-disorder", term:"Obsessive-compulsive disorder (OCD)", def:"Obsessions are recurrent, unwanted thoughts. Compulsions are repetitive, difficult-to-resist actions.", ex:"A recurring thought that the door is unlocked (obsession) and checking it again and again (compulsion).", src:"W4 Part 2, slide 10", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-behavioural-addiction", term:"Behavioural addiction", def:"The urge to engage in a behaviour creates anxiety, and engaging in the behaviour brings relief. Listed with the anxiety disorders, and as its own DSM-5 category.", src:"W4 Part 2, slides 3, 11", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-ptsd", term:"Post-traumatic stress disorder (PTSD)", def:"A reaction to a severely traumatic event in which the person relives it through dreams, flashbacks or hallucinations.", src:"W4 Part 2, slide 11", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-benzodiazepines", term:"Benzodiazepines", def:"Antianxiety medications, such as Valium, that enhance the activity of the neurotransmitter GABA.", src:"W4 Part 2, slides 12, 25", ch:"W4-C3", added:"2026-10-26"},
    {id:"W4-T-cognitive-behavioural-therapy", term:"Cognitive-behavioural therapy (CBT)", def:"A psychological intervention that concentrates on a person's thoughts and behaviours. For anxiety disorders it is usually combined with medication. For mood disorders, cognitive and behavioural therapies address learned beliefs and behaviours that contribute to the disorder.", src:"W4 Part 2, slides 12, 24", ch:"W4-C3", added:"2026-10-26"},

    /* ---------- C4 ---------- */
    {id:"W4-T-mood-disorder", term:"Mood disorder", def:"An emotional disturbance intense and persistent enough to affect normal functioning, unlike daily, temporary mood changes. Prevalence of major depressive episodes in Canadians aged 15 and up is 7.6%, and women are 2 times as likely as men. Depression and anxiety disorders are often co-morbid.", ex:"Undergraduates' self-reported depression diagnosis over 12 months: 26.9% of cisgender women, 13.4% of cisgender men, 47.8% of trans and gender nonconforming students, and higher rates for Indigenous students.", src:"W4 Part 2, slides 13-14, 16", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-dysphoria", term:"Dysphoria", def:"A feeling of sadness and hopelessness; a symptom of depression.", src:"W4 Part 2, slide 15", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-anhedonia", term:"Anhedonia", def:"Loss of pleasure in doing usual activities; a symptom of depression.", ex:"No longer enjoying a sport or hobby you used to love.", src:"W4 Part 2, slide 15", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-rumination", term:"Rumination", def:"Constantly thinking about past 'bad events'; a symptom of depression.", src:"W4 Part 2, slide 15", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-unipolar-disorder", term:"Unipolar disorder", def:"One of the two main forms of depression: negative moods, sadness and loss of interest in the activities of life. Neuroinflammation may be a biological correlate of depression.", src:"W4 Part 2, slide 16", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-persistent-depressive-disorder", term:"Persistent depressive disorder", def:"Persistent symptoms of mild or moderate depression for 2 years or longer. Listed under unipolar depression.", src:"W4 Part 2, slide 16", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-bipolar-disorder", term:"Bipolar disorder (manic-depression)", def:"The person swings between opposite states of mania (restlessness, euphoria, recklessness, lots of energy) and depression. 3.4% of Canadians will experience it. Reckless behaviour is listed as a symptom of bipolar depression.", src:"W4 Part 2, slides 4, 15-16", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-depression-rating-scales", term:"Depression rating scales", def:"Clinical rating scales such as the Hamilton Rating Scale for Depression and the Beck Depression Inventory. Family doctors, psychiatrists, clinical psychologists, counsellors, social workers and researchers use them to measure the intensity of symptoms and changes over time.", src:"W4 Part 2, slide 17", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-treating-depression", term:"Treating depression", def:"80% of Canadians respond well to treatment, but only 10% of Canadians with depression seek treatment. Options: drug therapy, psychotherapy or a combination; exercise as an adjunct; rTMS (repetitive transcranial magnetic stimulation); electroconvulsive therapy (ECT) for severe depression; light therapy for seasonal affective disorder (SAD).", src:"W4 Part 2, slide 23", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-interpersonal-psychotherapy", term:"Interpersonal psychotherapy (IPT)", def:"Psychotherapy that focuses on problems in relationships and on understanding events that may have triggered depression, and works to remove guilt and self-blame.", src:"W4 Part 2, slide 24", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-antidepressants", term:"Antidepressant classes", def:"Selective serotonin reuptake inhibitors (SSRIs), serotonin and norepinephrine reuptake inhibitors (SNRIs), tricyclic antidepressants (TCAs), monoamine oxidase inhibitors (MAOIs) and other newer medications. Benzodiazepines (Valium) appear on the same slide for anxiety.", src:"W4 Part 2, slide 25", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-schizophrenia", term:"Schizophrenia", def:"Symptoms vary from severe and debilitating to mild and hardly noticeable, and may include disorganized thoughts, inappropriate emotions, delusions, auditory hallucinations and deteriorating social and work functioning. About 1% of Canadians have been diagnosed. Caused by a combination of genes and environmental factors; treatment may include psychotherapy and medication.", src:"W4 Part 2, slide 29", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-models-of-human-nature", term:"Four models of human nature", def:"Biological: the mind depends entirely on the brain and its genetic makeup; treated with drugs (antidepressants, mood stabilizers, antipsychotics). Behavioural: stimulus, response and reinforcement determine behaviour; identify and alter reinforcers. Cognitive: attitudes, expectations and motives determine behaviour; expose and identify false ideas that produce anxiety or depression. Psychodynamic: unconscious ideas and impulses feed thoughts and behaviours; patients speak freely to gain insight.", src:"W4 Part 2, slides 30-31", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-when-to-get-professional-help", term:"When professional help is indicated", def:"When depression, anxiety or other emotional problems seriously interfere with school, work or relationships; when suicide is attempted or seriously considered; when hallucinations, delusions, memory loss or incoherent speech occur; or when alcohol or drugs impair normal functioning or cutting back causes psychological withdrawal symptoms. Other routes to help: self-help, peer counselling and support groups.", src:"W4 Part 2, slides 32-33", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-psychiatrist", term:"Psychiatrist", def:"A specialized medical physician who can prescribe medications and determine whether there is a medical cause or connection for the patient's problems.", src:"W4 Part 2, slide 34", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-clinical-psychologist", term:"Clinical psychologist", def:"Usually holds a PhD; treatment is generally based on behavioural and cognitive therapies. Other professionals on the slide: social workers (master's degree, skilled in counselling and finding community support), licensed counsellors, and clergy with additional counselling training.", src:"W4 Part 2, slide 34", ch:"W4-C4", added:"2026-10-26"},
    {id:"W4-T-indigenous-mental-health", term:"Traditional mental health support for Indigenous Peoples", def:"Colonization and intergenerational trauma have caused difficult mental health challenges for Indigenous Peoples in Canada. Effective, culturally appropriate supports must be respectful and honour the history and values of the people harmed. Holistic and traditional practices are paramount for healing.", src:"W4 Part 2, slide 35", ch:"W4-C4", added:"2026-10-26"}
  ],

  chapters:[
    /* ================= C1 ================= */
    {
      id:"W4-C1", title:"Defining psychological health and growing up", src:"W4 Part 1, slides 2-18",
      blurb:"Maslow, health vs. normality, the dual continua model, Erikson's stages, identity and values.",
      learn:"<b>Psychological health</b> is our capacity to think, feel and behave in ways that let us enjoy life and manage challenges. It can be defined negatively (absence of illness) or positively (presence of wellness).<br><b>Maslow</b> (1960s) took the positive view. We work up from physiological needs to safety, love and belongingness, self-esteem, and finally <b>self-actualization</b>: realism, acceptance, autonomy, authenticity, capacity for intimacy and creativity.<br>Psychological health is not <b>normality</b>, which only means being close to average. The <b>dual continua model</b> treats mental well-being and mental illness as related but distinct, so having no illness does not guarantee high well-being.<br><b>Erikson</b> described 8 stages, each with a conflict to master. Failing one can cause problems later, such as an identity crisis. <b>Adult identity</b> begins in adolescence and is lifelong. <b>Values</b> help us tell good from bad and guide our choices.",
      steps:[
        {id:"W4-C1-S1", type:"label", fig:"maslow", prompt:"Drag each level of Maslow's hierarchy of needs onto the pyramid, from the base to the top.", src:"W4 Part 1, slide 4"},
        {id:"W4-C1-S2", type:"label", fig:"dual", prompt:"Place each quadrant of the dual continua model. Vertical axis: mental well-being (high at the top). Horizontal axis: mental illness (low on the left, high on the right).", src:"W4 Part 1, slide 8"},
        {id:"W4-C1-S3", type:"match", prompt:"Match each Erikson conflict to its age. (Trust vs. mistrust is birth to 1 year.)", src:"W4 Part 1, slide 11",
          pairs:[
            ["Autonomy vs. shame and self-doubt","1 to 3 years"],
            ["Initiative vs. guilt","3 to 6 years"],
            ["Industry vs. inferiority","6 to 12 years"],
            ["Identity vs. identity confusion","Adolescence"],
            ["Intimacy vs. isolation","Young adulthood"],
            ["Generativity vs. self-absorption","Middle adulthood"],
            ["Integrity vs. despair","Older adulthood"]
          ]},
        {id:"W4-C1-S4", type:"mcq", ch:"W4-C1", added:"2026-10-26", src:"W4 Part 1, slide 11",
          case:"Two-year-old Theo insists on walking without holding hands and feeding himself. His parents let him try while setting clear limits.",
          q:"Which Erikson conflict is Theo working through?",
          opts:[
            ["Autonomy vs. shame and self-doubt", true, "Ages 1 to 3, with parents as the important people. The task is learning self-control through locomotion and exploration without losing assertiveness."],
            ["Initiative vs. guilt", false, "That stage is 3 to 6 years and centres on developing a conscience through playful talking and locomotion."],
            ["Trust vs. mistrust", false, "That stage is birth to 1 year and centres on being fed and comforted by a primary caregiver."],
            ["Industry vs. inferiority", false, "That stage is 6 to 12 years and centres on school and accomplishment with peers."]
          ]}
      ],
      summary:"Psychological health is the presence of wellness, not just the absence of illness or being average. It keeps developing across life through Erikson's stages, adult identity and values."
    },

    /* ================= C2 ================= */
    {
      id:"W4-C2", title:"Self-esteem, defences and everyday challenges", src:"W4 Part 1, slides 19-31",
      blurb:"Spiritual wellness, self-concept, self-talk, defence mechanisms, optimism, assertiveness, loneliness and anger.",
      learn:"<b>Spiritual wellness</b> is linked to better coping, longer life expectancy, lower disease risk, faster recovery and better emotional health, possibly through social support, healthy habits, a positive attitude and moments of relaxation.<br>A positive <b>self-concept</b> starts in childhood and depends on <b>integration</b>: you built your self-image yourself instead of adopting one others made. To protect self-esteem, notice your thinking patterns, avoid <b>cognitive distortions</b> and use <b>realistic self-talk</b>.<br>When our wants clash with others or our conscience and we cannot change the situation, we may use <b>defence mechanisms</b> (Table 2.2) to resolve the conflict inside our heads.<br><b>Pessimists</b> expect failure and feel they deserve it; disputing negative self-talk helps. <b>Assertiveness</b> is confident and direct but not hostile. Learning to be happy alone helps with <b>loneliness</b>. Overtly hostile people are at higher risk of heart attacks, so reframe and distract when anger builds.",
      steps:[
        {id:"W4-C2-S1", type:"match", prompt:"Match each cognitive distortion to the negative self-talk that shows it.", src:"W4 Part 1, slide 23",
          pairs:[
            ["Focusing on negatives","Babysitting is such a pain. I wish I didn't need the extra money so badly."],
            ["Expecting the worst","I know I'm going to fail this course. I should just drop out now."],
            ["Overgeneralizing","My hair is a mess and I'm gaining weight. No one would ever want to date me."],
            ["Minimizing","Everyone ate the dinner I cooked even though I ruined it. I'm such a rotten cook."],
            ["Blaming others","Everyone I meet is such a jerk. Why aren't people friendlier?"],
            ["Expecting perfection","I can't believe I flubbed that solo. They won't even let me audition next year."],
            ["Thinking in black and white","After what Mike said today, I realize we have nothing in common."]
          ]},
        {id:"W4-C2-S2", type:"sort", prompt:"Which defence mechanism is each person using?", src:"W4 Part 1, slides 25-26",
          bins:["Projection","Displacement","Rationalization","Reaction formation"],
          items:[
            ["Dev resents his lab partner but keeps insisting that the lab partner has a problem with him.", 0, "He treats his own unacceptable feeling as if it came from outside himself."],
            ["Furious at her coach after practice, Aisha comes home and slams doors at her roommate.", 1, "Her anger at one person is shifted onto another person."],
            ["Leo is not picked for a leadership role he badly wanted and tells himself it would have taken too much time anyway.", 2, "He gives a false, acceptable reason in place of the real, painful one."],
            ["Nina envies a classmate's grades and goes out of her way to praise her loudly in front of everyone.", 3, "She hides envy by exaggerating the opposite feeling."],
            ["A worker who is angry at a rude customer later yells at his younger brother over nothing.", 1, "The feeling about the customer is moved onto his brother."],
            ["A student who is tempted to cheat on an exam becomes convinced that everyone else in the room is cheating.", 0, "His own unacceptable impulse is seen as coming from other people."],
            ["Sam skips the campus gym and tells himself it is to rest his muscles, when really he feels self-conscious there.", 2, "A false but acceptable reason covers the real one."],
            ["A man who feels hostile toward his new step-parent is extremely polite to them and buys them gifts.", 3, "Hostility is concealed by exaggerated kindness, the opposite impulse."]
          ]},
        {id:"W4-C2-S3", type:"order", prompt:"Put the steps for dealing with anger in other people in the order the slides give them.", src:"W4 Part 1, slide 31",
          items:["React with calmness","Validate their feelings","Try to solve the problem","When all else fails, disengage"],
          why:"Start calm, show the person their feelings are understood, then work on the problem. Disengaging is the last resort when nothing else works."},
        {id:"W4-C2-S4", type:"mcq", ch:"W4-C2", added:"2026-10-26", src:"W4 Part 1, slides 23, 25, 29-30",
          case:"Since moving into residence, Theo spends most Friday nights alone. He reads each one as proof that nobody likes him and feels miserable whenever he is by himself.",
          q:"Based on the slides, what would help Theo most?",
          opts:[
            ["Venting his anger openly at floormates, since expressing anger is good for health", false, "Slide 30: studies suggest overtly hostile people are at higher risk for heart attacks."],
            ["Learning to be happy by himself and not reading time alone as a sign of rejection", true, "Slide 29: unhappiness with being alone may come from interpreting it as rejection, and being happy alone helps you cope when you must be alone."],
            ["Telling himself he prefers being alone even though he does not", false, "That is rationalization, a defence mechanism that gives a false reason instead of dealing with the feeling."],
            ["Focusing on the worst outcomes so he is never disappointed", false, "Expecting the worst and focusing on negatives are cognitive distortions to avoid."]
          ]}
      ],
      summary:"Realistic self-talk, healthy self-concept and assertive communication protect self-esteem. Defence mechanisms rearrange thoughts and feelings when a conflict cannot be solved in the outside world."
    },

    /* ================= C3 ================= */
    {
      id:"W4-C3", title:"Psychological disorders and anxiety", src:"W4 Part 2, slides 2-12",
      blurb:"What counts as a disorder, the DSM-5, how common mental illness is in Canada, and the anxiety disorders.",
      learn:"A <b>psychological disorder</b> is present when anxiety, low mood or irrational thoughts interfere with daily life and rob us of peace of mind. Contributing factors include genetics, learning and life events, trauma, and parental and peer influences. The <b>DSM-5</b> lists many conditions, from mood and anxiety disorders to ADHD and dementias.<br>Mental illness is common: 1 in 5 Canadians live with one in any given year. Ethnicity can affect how symptoms are expressed, along with assimilation and biological risk factors.<br><b>Anxiety</b> is fear not tied to a definite threat; it is a problem when it is out of proportion to the danger. Types: specific phobia, social anxiety disorder, panic disorder (with agoraphobia), GAD, OCD, behavioural addictions and PTSD.<br>Treatment ranges from antianxiety drugs such as <b>benzodiazepines</b> (Valium, which enhances GABA) to <b>cognitive-behavioural therapy</b>, usually a combination of the two.",
      steps:[
        {id:"W4-C3-S1", type:"table", src:"W4 Part 2, slide 7",
          prompt:"Read Figure 2.3, then answer the questions.",
          caption:"Figure 2.3: 12-month prevalence of selected mental disorders in Canada, 2012 and 2022 (Statistics Canada, 2023). Values are read off the bar chart, so they are approximate.",
          head:["Disorder","Group","2012","2022"],
          rows:[
            ["Major depressive episode","Mood disorder","about 4.7%","about 7.6%"],
            ["Bipolar disorder","Mood disorder","about 1.5%","about 2.1%"],
            ["Generalized anxiety disorder","Anxiety disorder","about 2.6%","about 5.2%"],
            ["Social phobia","Anxiety disorder","about 3.0%","about 7.1%"]
          ],
          qs:[
            {id:"W4-C3-S1a", type:"mcq", ch:"W4-C3", added:"2026-10-26", src:"W4 Part 2, slide 7",
              q:"Which disorder had the largest increase in 12-month prevalence from 2012 to 2022?",
              opts:[
                ["Major depressive episode", false, "About 4.7% to 7.6%, a rise of roughly 3 points."],
                ["Generalized anxiety disorder", false, "About 2.6% to 5.2%, a rise of roughly 2.6 points."],
                ["Social phobia", true, "About 3.0% to 7.1%, a rise of roughly 4 percentage points."],
                ["Bipolar disorder", false, "About 1.5% to 2.1%, the smallest change."]
              ]},
            {id:"W4-C3-S1b", type:"mcq", ch:"W4-C3", added:"2026-10-26", src:"W4 Part 2, slide 7",
              q:"Which statement does Figure 2.3 support?",
              opts:[
                ["Bipolar disorder was the most common of the four disorders in 2022", false, "It was the least common, at about 2.1%."],
                ["Mood disorders decreased while anxiety disorders increased", false, "All four disorders increased."],
                ["Social phobia was less common than generalized anxiety disorder in 2022", false, "Social phobia (about 7.1%) was higher than GAD (about 5.2%)."],
                ["Generalized anxiety disorder prevalence roughly doubled from 2012 to 2022", true, "About 2.6% in 2012 and about 5.2% in 2022."]
              ]}
          ]},
        {id:"W4-C3-S2", type:"match", prompt:"Match each Canadian statistic from slide 4 to the condition it describes.", src:"W4 Part 2, slide 4",
          pairs:[
            ["1 in 5 Canadians in any given year","Living with a mental illness"],
            ["14% of Canadians in their lifetime","Major depressive disorder"],
            ["13.3% of Canadians in their lifetime","Generalized anxiety disorder"],
            ["21.6% of Canadians","Substance use disorder"],
            ["3.4% of Canadians","Bipolar disorder"],
            ["About 1% of Canadians","Schizophrenia"],
            ["About 0.3 to 1%, with a rate 10 times higher in women","Eating disorder"]
          ]},
        {id:"W4-C3-S3", type:"sort", prompt:"Sort each person into the anxiety disorder that best fits.", src:"W4 Part 2, slides 8-11",
          bins:["Specific phobia","Social anxiety disorder","Panic disorder","Generalized anxiety disorder","Obsessive-compulsive disorder","Post-traumatic stress disorder"],
          items:[
            ["Jun avoids hiking trips because standing anywhere high terrifies him.", 0, "Fear of something definite, such as heights."],
            ["Bea dreads presentations because she fears looking foolish while classmates watch.", 1, "Fear of humiliation or embarrassment while being observed."],
            ["Out of nowhere in a grocery line, Raj's heart pounds, he can't catch his breath and he feels he is losing control of his mind.", 2, "A sudden, unexpected surge of anxiety with physical symptoms and a feeling of losing mental control."],
            ["Kim worries constantly about grades, money, her parents' health and the weather, and cannot switch it off.", 3, "Excessive, uncontrollable worry about all kinds of things."],
            ["Ola has recurring unwanted thoughts that her hands are contaminated and washes them over and over.", 4, "A recurrent unwanted thought (obsession) plus a repetitive, hard-to-resist action (compulsion)."],
            ["Months after a serious car crash, Ben keeps reliving it in nightmares and flashbacks.", 5, "Reliving a severely traumatic event through dreams and flashbacks."],
            ["Lia won't eat in the dining hall because she fears people will watch her and judge her.", 1, "The fear is about being observed and embarrassed."],
            ["Sam cannot go near any dog, even a puppy on a leash.", 0, "Fear of a particular animal."]
          ]},
        {id:"W4-C3-S4", type:"mcq", ch:"W4-C3", added:"2026-10-26", src:"W4 Part 2, slide 12",
          case:"A physician prescribes a benzodiazepine to a patient with generalized anxiety disorder and refers them to a therapist who will work on their thoughts and behaviours.",
          q:"Which statement about this plan matches the slides?",
          opts:[
            ["It combines an antianxiety drug that enhances GABA with cognitive-behavioural therapy, which is the usual approach", true, "Slide 12: benzodiazepines like Valium enhance GABA, and treatment is usually a combination of medication and CBT."],
            ["Benzodiazepines work by blocking the reuptake of serotonin", false, "That describes SSRIs, an antidepressant class. Benzodiazepines enhance GABA."],
            ["Medication and therapy should not be combined for anxiety disorders", false, "The slide says treatment is usually a combination of the two."],
            ["The therapy will focus on unconscious impulses from early life", false, "That is the psychodynamic model. CBT concentrates on thoughts and behaviours."]
          ]}
      ],
      summary:"Mental illness is common in Canada, and both mood and anxiety disorders rose from 2012 to 2022. Anxiety disorders differ by what triggers the fear, and treatment usually combines medication with CBT."
    },

    /* ================= C4 ================= */
    {
      id:"W4-C4", title:"Mood disorders, treatment and getting help", src:"W4 Part 2, slides 13-17, 23-35",
      blurb:"Depression and bipolar disorder, how they are measured and treated, schizophrenia, four models of human nature, and getting help.",
      learn:"<b>Mood disorders</b> are emotional disturbances intense and persistent enough to affect normal functioning. 7.6% of Canadians aged 15 and up have had a major depressive episode; women are twice as likely as men. Symptoms include <b>dysphoria</b> (sadness, hopelessness), <b>anhedonia</b> (loss of pleasure), sleep and appetite changes, self-loathing and <b>rumination</b>.<br><b>Unipolar</b> depression brings negative moods and loss of interest; <b>persistent depressive disorder</b> means mild or moderate symptoms for 2 years or longer. In <b>bipolar disorder</b> a person swings between mania and depression. Scales such as the Beck Depression Inventory track symptoms over time.<br>80% respond well to treatment, yet only 10% seek it. Options: antidepressants, psychotherapy (IPT, CBT), exercise as an adjunct, rTMS, ECT for severe cases, and light therapy for SAD.<br><b>Schizophrenia</b> affects about 1%. Four models (biological, behavioural, cognitive, psychodynamic) guide treatment.",
      steps:[
        {id:"W4-C4-S1", type:"match", prompt:"Match each treatment to how the slides describe its use.", src:"W4 Part 2, slides 12, 23-25",
          pairs:[
            ["Light therapy","Typical treatment for seasonal affective disorder (SAD)"],
            ["Electroconvulsive therapy (ECT)","May be used for severe depression"],
            ["Interpersonal psychotherapy (IPT)","Works on relationship problems and events that may have triggered depression"],
            ["Cognitive and behavioural therapies","Address learned beliefs and behaviours that contribute to the mood disorder"],
            ["Exercise","Sometimes used as an adjunct to other treatments"],
            ["SSRIs","Selective serotonin reuptake inhibitors, an antidepressant class"],
            ["Benzodiazepines (Valium)","Medication listed for anxiety"]
          ]},
        {id:"W4-C4-S2", type:"compare", src:"W4 Part 2, slides 27-28",
          prompt:"Psychotherapy or pharmacotherapy? Pick the one whose pros fit each person best.",
          a:{name:"Psychotherapy", points:[
            "Pro: can give long-term skills that last after treatment",
            "Pro: can reduce relapse rates",
            "Pro: effective for several types of psychological disorders",
            "Pro: no side effects",
            "Con: depression can impair executive functioning, making the cognitive control therapy needs hard",
            "Con: not as effective in severe depression (needs a combination with drugs)"
          ]},
          b:{name:"Pharmacotherapy", points:[
            "Pro: easier to access than psychotherapy",
            "Pro: recommended for severe depression",
            "Pro: some disorders need medication to relieve symptoms",
            "Requires a visit to a family doctor or psychiatrist",
            "Con: side effects can be severe (GI and sexual problems, fainting, dry mouth)",
            "Con: poor compliance, hard to find the right drug and dose, tolerance, relapse, drug interactions"
          ]},
          scenarios:[
            ["Ravi wants to learn skills he can keep using after treatment ends.", 0, "Psychotherapy can provide long-term skills that last after treatment."],
            ["Dana's depression is severe, and her doctor wants the option the slides recommend for severe cases.", 1, "Pharmacotherapy is recommended for severe depression; psychotherapy alone is not as effective there."],
            ["Jess had bad reactions to medications before and wants a treatment with no side effects.", 0, "Psychotherapy is listed as having no side effects."],
            ["Tom lives far from any therapist and needs the option that is easier to access.", 1, "Pharmacotherapy is easier to access than psychotherapy."],
            ["Alex's main goal is lowering the chance of relapse.", 0, "Psychotherapy can reduce relapse rates; with medication, people can relapse."]
          ]},
        {id:"W4-C4-S3", type:"match", prompt:"Match each model of human nature to its view of what drives behaviour.", src:"W4 Part 2, slide 31",
          pairs:[
            ["Biological model","The mind's activity depends entirely on the brain and its genetic makeup"],
            ["Behavioural model","Stimulus, response and reinforcement determine behaviour"],
            ["Cognitive model","Attitudes, expectations and motives determine behaviour"],
            ["Psychodynamic model","Unconscious ideas and impulses feed thoughts and behaviours"]
          ]},
        {id:"W4-C4-S4", type:"mcq", ch:"W4-C4", added:"2026-10-26", src:"W4 Part 2, slides 13, 33",
          q:"Which situation most clearly shows that professional help is indicated, according to the slides?",
          opts:[
            ["A student feels down for an afternoon after a low quiz mark", false, "Daily, temporary mood changes typically don't affect overall emotional state (slide 13)."],
            ["A student's anxiety has grown so strong that she stopped going to class and avoids her friends", true, "Slide 33: help is indicated when emotional problems seriously interfere with school, work or relationships."],
            ["A student feels nervous before a big exam but studies and writes it", false, "This fear fits the situation and does not interfere with functioning."],
            ["A student enjoys spending some evenings alone reading", false, "Being happy by yourself is a healthy skill, not a warning sign."]
          ]}
      ],
      summary:"Depression is common and treatable, but few people seek treatment. Psychotherapy and medication each have trade-offs, and severe cases often need both."
    }
  ],

  questions:[
    /* ---------- C1 ---------- */
    {id:"W4-Q01", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slides 2, 7", added:"2026-10-26",
      q:"Defined positively, psychological health is:",
      opts:[
        ["The absence of illness", false, "That is the negative definition."],
        ["Being close to average in thoughts and behaviour", false, "That is psychological normality, which the slides say is not the same as psychological health."],
        ["The presence of wellness", true, "Slide 2 gives this as the positive definition."],
        ["Having no symptoms of any disorder", false, "Slide 7: the presence or absence of symptoms alone does not decide whether someone is mentally healthy."]
      ]},
    {id:"W4-Q02", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 4", added:"2026-10-26",
      case:"A family that fled a conflict now has stable housing, regular meals and a safe neighbourhood. They have no friends or community in their new city yet.",
      q:"According to Maslow's hierarchy, which need are they working toward next?",
      opts:[
        ["Self-esteem", false, "Self-esteem sits above love and belongingness."],
        ["Physiological needs", false, "Food and shelter are already in place."],
        ["Safety and security", false, "They already have safe surroundings."],
        ["Love and belongingness", true, "Physiological and safety needs are met, so the next level is being loved, loving and connected."]
      ]},
    {id:"W4-Q03", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slides 5-6", added:"2026-10-26",
      case:"Hana chooses her university program based on her own interests and standards, even though her parents and friends push her toward a different field.",
      q:"Which quality of self-actualization does Hana show most clearly?",
      opts:[
        ["Autonomy", true, "Being independent and inner-directed as opposed to other-directed."],
        ["Realism", false, "Realism means being realistic; the case is about whose direction she follows."],
        ["Capacity for intimacy", false, "That is sharing feelings and thoughts without fear of rejection."],
        ["Creativity", false, "That is renewed appreciation of the world and openness to new experiences."]
      ]},
    {id:"W4-Q04", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 7", added:"2026-10-26",
      q:"Which statement matches the slides on what psychological health is not?",
      opts:[
        ["Psychological diversity is a risk to society, so health means fitting the average", false, "The slide calls psychological diversity a valuable asset to society."],
        ["Being mentally normal simply means being close to average, which is not the same as being psychologically healthy", true, "Slide 7 says this directly."],
        ["A person with no symptoms is by definition mentally healthy", false, "The mere presence or absence of symptoms does not decide this."],
        ["Psychological health can only be defined as the absence of illness", false, "It can also be defined positively as the presence of wellness."]
      ]},
    {id:"W4-Q05", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 8", added:"2026-10-26",
      case:"Marco has no symptoms of mental illness, but he says he feels flat and disconnected, with low well-being most days.",
      q:"Where does Marco sit in the dual continua model?",
      opts:[
        ["Languishing", false, "Languishing is low well-being with high mental illness."],
        ["Flourishing", false, "Flourishing needs high well-being."],
        ["Vulnerable", true, "Low mental illness with low well-being. The absence of illness does not guarantee high well-being."],
        ["Symptomatic but content", false, "That quadrant has high illness and high well-being."]
      ]},
    {id:"W4-Q06", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 11", added:"2026-10-26",
      case:"Four-year-old Zara makes up games and wants to help cook dinner. Her parents scold her harshly every time she tries something new.",
      q:"Which Erikson conflict is Zara facing, and what is at risk?",
      opts:[
        ["Autonomy vs. shame and self-doubt; she may lose her capacity for assertiveness", false, "That stage is 1 to 3 years."],
        ["Industry vs. inferiority; she may feel inadequate compared with peers at school", false, "That stage is 6 to 12 years."],
        ["Trust vs. mistrust; she may not trust others to meet her needs", false, "That stage is birth to 1 year."],
        ["Initiative vs. guilt; she may develop a conscience that is too inhibiting", true, "Ages 3 to 6, with family. The task is developing a conscience that is not too inhibiting."]
      ]},
    {id:"W4-Q07", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 11", added:"2026-10-26",
      case:"Raj, 52, coaches his daughter's soccer team, mentors new staff at work and sits on a neighbourhood community board.",
      q:"Which Erikson stage does this fit?",
      opts:[
        ["Generativity vs. self-absorption", true, "Middle adulthood: doing things for others, including parenting and civic activities."],
        ["Integrity vs. despair", false, "That is older adulthood: affirming the value of life and its ideals."],
        ["Intimacy vs. isolation", false, "That is young adulthood: learning to live and share intimately with others."],
        ["Industry vs. inferiority", false, "That is 6 to 12 years: learning the value of accomplishment and perseverance."]
      ]},
    {id:"W4-Q08", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 11", added:"2026-10-26",
      case:"A 16-year-old keeps trying new friend groups, styles and beliefs while she works out what she values and who she is.",
      q:"Which stage and important people does Table 2.1 link to this?",
      opts:[
        ["Intimacy vs. isolation, with close friends and sex partners", false, "That is young adulthood."],
        ["Identity vs. identity confusion, with peers", true, "Adolescence: developing a stable sense of your needs, abilities, interpersonal style and values."],
        ["Industry vs. inferiority, with the community", false, "That is 6 to 12 years."],
        ["Initiative vs. guilt, with the family", false, "That is 3 to 6 years."]
      ]},
    {id:"W4-Q09", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slides 12-14", added:"2026-10-26",
      q:"Which statement about adult identity is true according to the slides?",
      opts:[
        ["It is complete by the end of adolescence", false, "The slides say it is a lifelong process."],
        ["All of its characteristics are permanent once formed", false, "Some characteristics are permanent, others may change over time."],
        ["It begins in adolescence, is a lifelong process, and role models help develop it", true, "Slides 12 and 14 state each part of this."],
        ["Lacking a personal identity has no effect on wellness", false, "Without a personal identity we can feel confused about who we are, which can lead to an identity crisis."]
      ]},
    {id:"W4-Q10", type:"mcq", ch:"W4-C1", src:"W4 Part 1, slide 17", added:"2026-10-26",
      q:"According to the slides, which is NOT part of living according to your values?",
      opts:[
        ["Considering your options carefully before making a choice", false, "This is listed on slide 17."],
        ["Choosing the best option without pressures that oppose your values", false, "This is listed on slide 17."],
        ["Making a choice and acting on it", false, "This is listed on slide 17."],
        ["Putting off a choice so you never have to act on it", true, "The slides say living by values means making a choice and acting on it rather than doing nothing."]
      ]},

    /* ---------- C2 ---------- */
    {id:"W4-Q11", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 20", added:"2026-10-26",
      q:"Which is NOT one of the explanations on the slides for why spirituality improves health?",
      opts:[
        ["Stronger genetic protection against disease", true, "Genetics is not among the explanations given."],
        ["Social support", false, "Listed on slide 20."],
        ["Healthy habits", false, "Listed on slide 20."],
        ["Moments of relaxation", false, "Listed on slide 20, along with a positive attitude."]
      ]},
    {id:"W4-Q12", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 21", added:"2026-10-26",
      case:"Jordan's whole sense of who he is comes from what his parents and coach have told him he should be. He has never formed his own view of himself.",
      q:"Which element that the slides call essential to a positive self-concept is missing?",
      opts:[
        ["Assertiveness", false, "Assertiveness is about confident, direct communication, not how a self-concept forms."],
        ["Integration", true, "Feeling that you created your own self-concept rather than adopting an image others created."],
        ["Altruism", false, "Altruism is a coping mechanism: serving others without expecting anything back."],
        ["Stability", false, "Stability depends on integration; integration is the missing piece here."]
      ]},
    {id:"W4-Q13", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 23", added:"2026-10-26",
      case:"The night before her job interview, Leila thinks: 'I'll freeze and they'll reject me, so there's no point preparing.'",
      q:"Which cognitive distortion is this?",
      opts:[
        ["Magnifying events", false, "Magnifying blows up a small thing that already happened, like one stutter in a speech."],
        ["Overgeneralizing", false, "Overgeneralizing draws a sweeping conclusion from a few details."],
        ["Expecting the worst", true, "She predicts failure before it happens and gives up."],
        ["Minimizing", false, "Minimizing downplays good outcomes, like guests eating every bite of a 'ruined' meal."]
      ]},
    {id:"W4-Q14", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 25", added:"2026-10-26",
      case:"Nico, 19, vapes daily and has had a cough for weeks. He tells himself vaping can't hurt him because he is young and plays varsity sports.",
      q:"Which defence mechanism is Nico using?",
      opts:[
        ["Repression", false, "Repression expels an unpleasant feeling, idea or memory from awareness altogether."],
        ["Projection", false, "Projection treats your own impulses as if they came from outside you."],
        ["Substitution", false, "Substitution replaces a frustrating goal with a more attainable one."],
        ["Denial", true, "Refusing to acknowledge to yourself what you really know to be true."]
      ]},
    {id:"W4-Q15", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 25", added:"2026-10-26",
      case:"Priya resents being given the hardest part of a group project. She agrees to do it, then keeps 'forgetting' and misses every deadline.",
      q:"Which defence mechanism is this?",
      opts:[
        ["Passive-aggressive behaviour", true, "Hostility expressed by being covertly uncooperative or passive."],
        ["Acting out", false, "Acting out is an action that makes the feeling go away, such as getting into a fight."],
        ["Displacement", false, "Displacement shifts feelings about one person onto a different person."],
        ["Reaction formation", false, "Reaction formation would mean showing exaggerated enthusiasm for the task."]
      ]},
    {id:"W4-Q16", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 25", added:"2026-10-26",
      case:"After failing to make the varsity hockey team, Ethan deliberately sets a new goal of becoming captain of his intramural team.",
      q:"Which mechanism is Ethan using?",
      opts:[
        ["Rationalization", false, "Rationalization would be telling himself he never wanted to make varsity."],
        ["Substitution", true, "Deliberately replacing a frustrating goal with one that is more attainable."],
        ["Denial", false, "He is not refusing to acknowledge what happened."],
        ["Altruism", false, "Altruism is serving others without expecting anything in return."]
      ]},
    {id:"W4-Q17", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 26", added:"2026-10-26",
      case:"Dylan feels disrespected after being passed over at work. That night he picks a fight at a bar to make the feeling go away.",
      q:"Which mechanism from Table 2.2 fits best?",
      opts:[
        ["Dissociation", false, "Dissociation detaches from a current experience to avoid distress."],
        ["Substitution", false, "Substitution deliberately swaps in a more attainable goal."],
        ["Acting out", true, "Engaging in an action that makes an unacceptable feeling go away."],
        ["Reaction formation", false, "Reaction formation exaggerates the opposite feeling, such as being overly friendly."]
      ]},
    {id:"W4-Q18", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 25", added:"2026-10-26",
      case:"Ines is attracted to her best friend's partner but becomes convinced that the partner is the one flirting with her.",
      q:"Which defence mechanism is Ines using?",
      opts:[
        ["Reaction formation", false, "That would mean acting cold or hostile toward the partner to hide the attraction."],
        ["Displacement", false, "Displacement shifts feelings about one person onto a different person."],
        ["Denial", false, "Denial refuses to acknowledge a fact; here she relocates her impulse onto someone else."],
        ["Projection", true, "She reacts to her own unacceptable impulse as if it came from outside herself."]
      ]},
    {id:"W4-Q19", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slides 25-26", added:"2026-10-26",
      case:"While his parents argue loudly, 10-year-old Sami mentally replays every level of his favourite video game until the argument is over.",
      q:"Which mechanism is Sami using?",
      opts:[
        ["Dissociation", true, "Detaching from a current experience to avoid emotional distress."],
        ["Repression", false, "Repression expels a feeling, idea or memory from awareness; Sami is tuning out something happening now."],
        ["Humour", false, "Humour finds something funny in the situation."],
        ["Rationalization", false, "Rationalization gives a false, acceptable reason for something."]
      ]},
    {id:"W4-Q20", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slide 27", added:"2026-10-26",
      q:"Which statement about pessimism matches the slides?",
      opts:[
        ["It is inherited and cannot be changed", false, "The slide says it is typically learned."],
        ["It is typically learned young from parents or other authority figures, and overcoming it means disputing negative self-talk", true, "Slide 27 states both points."],
        ["Pessimists expect failure but feel they do not deserve it", false, "Pessimists expect failure and rejection and feel they deserve it."],
        ["Expressing anger openly is the main way to overcome it", false, "The slides tie overcoming pessimism to disputing irrational, negative self-talk."]
      ]},
    {id:"W4-Q21", type:"mcq", ch:"W4-C2", src:"W4 Part 1, slides 25, 28", added:"2026-10-26",
      case:"Your roommate plays loud music past midnight on weeknights, and you have 8:30 classes.",
      q:"Which response is assertive as the slides define it?",
      opts:[
        ["Say nothing and hope they notice how tired you look", false, "This avoids clear communication, often from fear of rejection."],
        ["'You are the most inconsiderate person I have ever lived with.'", false, "This is hostile, not assertive."],
        ["'I need quiet after 11 on weeknights so I can sleep. Could you use headphones after that?'", true, "Confident and direct but not hostile."],
        ["Agree it's fine, then quietly unplug their speaker whenever they leave", false, "This is covertly uncooperative, which is passive-aggressive behaviour."]
      ]},
    {id:"W4-Q22", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 3", added:"2026-10-26",
      q:"Which statement about the DSM-5 matches the slides?",
      opts:[
        ["It lists only anxiety disorders, mood disorders and schizophrenia", false, "Those are the three types the textbook focuses on; the DSM-5 lists more."],
        ["It is a Statistics Canada survey of how common mental disorders are", false, "That describes the source of Figure 2.3."],
        ["It excludes substance use disorders and dementias", false, "Both are on the DSM-5 list on slide 3."],
        ["It lists a wider range of conditions than the textbook covers, including ADHD and autism spectrum disorders", true, "Slide 3 says this and lists both."]
      ]},
    {id:"W4-Q23", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 4", added:"2026-10-26",
      q:"According to the slides, how many Canadians are living with a mental illness in any given year?",
      opts:[
        ["1 in 5", true, "Slide 4."],
        ["1 in 10", false, "Too low; slide 4 says 1 in 5."],
        ["1 in 3", false, "Too high; slide 4 says 1 in 5."],
        ["1 in 100", false, "About 1% is the figure for schizophrenia."]
      ]},
    {id:"W4-Q24", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 4", added:"2026-10-26",
      q:"Of these conditions on slide 4, which has the highest percentage of Canadians affected?",
      opts:[
        ["Major depressive disorder", false, "14% over a lifetime."],
        ["Substance use disorder", true, "21.6% of Canadians."],
        ["Generalized anxiety disorder", false, "13.3% over a lifetime."],
        ["Bipolar disorder", false, "3.4%."]
      ]},
    {id:"W4-Q25", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 4", added:"2026-10-26",
      q:"Which statement about eating disorders matches slide 4?",
      opts:[
        ["They affect about 3.4% of Canadians", false, "3.4% is the figure for bipolar disorder."],
        ["They are about 10 times more common in men", false, "The rate is 10 times higher for women."],
        ["About 0.3 to 1% of Canadians experience one, the rate is 10 times higher in women, and they have the highest mortality rate of any mental illness", true, "All three points are on slide 4."],
        ["They have the lowest mortality rate of any mental illness", false, "They have the highest mortality rate."]
      ]},
    {id:"W4-Q26", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 6", added:"2026-10-26",
      case:"Uma feels intense dread every time she opens her email, though nothing bad has ever arrived and there is no specific threat.",
      q:"According to the slides, when does fear like this become a problem?",
      opts:[
        ["Any time fear is felt at all", false, "Everyone feels anxious at times; that alone is not a disorder."],
        ["Only once it has lasted 2 years or longer", false, "The 2-year rule is for persistent depressive disorder."],
        ["Only when it comes with hallucinations", false, "Hallucinations are linked to schizophrenia and PTSD, not the definition of anxiety."],
        ["When it is disproportionate to the actual danger", true, "Slide 6: fear out of proportion to the danger can be considered a problem."]
      ]},
    {id:"W4-Q27", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 10", added:"2026-10-26",
      case:"Dev has recurring, unwanted thoughts that he left the stove on, and he checks it 15 times before he can leave home.",
      q:"In OCD terms, the repeated checking is:",
      opts:[
        ["A compulsion: a repetitive, difficult-to-resist action", true, "Compulsions are the actions; obsessions are the thoughts."],
        ["An obsession: a recurrent, unwanted thought", false, "The thought about the stove is the obsession; the checking is the action."],
        ["A panic attack: a sudden surge of anxiety", false, "Panic disorder involves sudden, unexpected surges with physical symptoms."],
        ["A specific phobia: fear of something definite", false, "A phobia is fear of a definite object or situation, such as heights."]
      ]},
    {id:"W4-Q28", type:"mcq", ch:"W4-C3", src:"W4 Part 2, slide 9", added:"2026-10-26",
      case:"During a lecture, with no warning, Ana's heart races, she is short of breath and dizzy, and she fears she is losing control of her mind.",
      q:"Which anxiety disorder do these symptoms describe?",
      opts:[
        ["Generalized anxiety disorder", false, "GAD is ongoing, excessive worry about many things, not a sudden surge."],
        ["Panic disorder", true, "Sudden, unexpected surges of anxiety with a racing heart, shortness of breath, loss of equilibrium and a feeling of losing mental control."],
        ["Social anxiety disorder", false, "That is fear of embarrassment while being observed."],
        ["Post-traumatic stress disorder", false, "PTSD involves reliving a traumatic event."]
      ]},
    {id:"W4-Q29", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 15", added:"2026-10-26",
      case:"Since the fall, Lucy no longer enjoys painting or playing piano, activities she used to love.",
      q:"Which symptom of depression is this?",
      opts:[
        ["Dysphoria", false, "Dysphoria is a feeling of sadness and hopelessness."],
        ["Rumination", false, "Rumination is constantly thinking about past bad events."],
        ["Anhedonia", true, "Loss of pleasure in doing usual activities."],
        ["Self-loathing", false, "Self-loathing is thoughts of worthlessness and guilt."]
      ]},
    {id:"W4-Q30", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 15", added:"2026-10-26",
      case:"Mateo keeps replaying an argument from last year and a failed exam from high school, over and over, for hours.",
      q:"Which symptom does this describe?",
      opts:[
        ["Anhedonia", false, "Anhedonia is loss of pleasure in usual activities."],
        ["Mania", false, "Mania is restlessness, euphoria, recklessness and lots of energy."],
        ["Dysphoria", false, "Dysphoria is a feeling of sadness and hopelessness, not repeated replaying of events."],
        ["Rumination", true, "Constantly thinking about past bad events."]
      ]},
    {id:"W4-Q31", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 16", added:"2026-10-26",
      case:"For the past 3 years, Joy has had mild to moderate depressive symptoms that never fully go away.",
      q:"Which diagnosis fits best?",
      opts:[
        ["Persistent depressive disorder", true, "Persistent mild or moderate depressive symptoms for 2 years or longer."],
        ["Bipolar disorder", false, "There are no swings into mania."],
        ["Seasonal affective disorder", false, "Her symptoms are constant, not tied to a season."],
        ["Generalized anxiety disorder", false, "GAD is excessive, uncontrollable worry; her main symptoms are depressive."]
      ]},
    {id:"W4-Q32", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slides 15-16", added:"2026-10-26",
      case:"For several weeks Leo is restless, euphoric, takes reckless risks and seems to have endless energy. Later he becomes sad and hopeless and loses interest in everything.",
      q:"Which disorder does this pattern describe?",
      opts:[
        ["Unipolar disorder", false, "Unipolar depression has negative moods without manic states."],
        ["Bipolar disorder", true, "Swinging between opposite states of mania and depression."],
        ["Persistent depressive disorder", false, "That is long-lasting mild or moderate depression, with no mania."],
        ["Schizophrenia", false, "Schizophrenia involves symptoms such as delusions and auditory hallucinations, not mood swings between mania and depression."]
      ]},
    {id:"W4-Q33", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 17", added:"2026-10-26",
      case:"A counsellor has a client complete the Beck Depression Inventory at the first session and again 8 weeks later.",
      q:"What is the main purpose of using the scale this way?",
      opts:[
        ["To choose which antidepressant to prescribe", false, "Counsellors do not prescribe; the scale measures symptoms."],
        ["To diagnose schizophrenia", false, "The Beck Depression Inventory measures depressive symptoms."],
        ["To measure the intensity of symptoms and how they change over time", true, "Slide 17: rating scales measure symptom intensity and changes over time."],
        ["To uncover unconscious impulses", false, "That is the aim of the psychodynamic approach, not a rating scale."]
      ]},
    {id:"W4-Q34", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 23", added:"2026-10-26",
      case:"Every winter Sofia's mood drops and she sleeps much more, then she recovers in spring. She is diagnosed with seasonal affective disorder.",
      q:"Which treatment do the slides list as typical for her condition?",
      opts:[
        ["Electroconvulsive therapy", false, "ECT is listed for severe depression."],
        ["Benzodiazepines", false, "Benzodiazepines are listed for anxiety."],
        ["Repetitive transcranial magnetic stimulation", false, "rTMS is listed as a depression treatment, but light therapy is the one named for SAD."],
        ["Light therapy", true, "SAD is typically treated with light therapy."]
      ]},
    {id:"W4-Q35", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slides 24, 31", added:"2026-10-26",
      case:"A therapist helps a client look at conflict with her partner and at the breakup that seemed to trigger her depression, and works to remove her guilt and self-blame.",
      q:"Which type of psychotherapy is this?",
      opts:[
        ["Interpersonal psychotherapy (IPT)", true, "IPT focuses on relationship problems and events that may have triggered depression, and removes guilt and self-blame."],
        ["Cognitive and behavioural therapy", false, "That addresses learned beliefs and behaviours that contribute to the mood disorder."],
        ["Psychodynamic therapy", false, "That has patients speak freely to understand unconscious sources of their feelings."],
        ["Electroconvulsive therapy", false, "ECT is not a psychotherapy; it is listed for severe depression."]
      ]},
    {id:"W4-Q36", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 25", added:"2026-10-26",
      q:"Which medication on the pharmacological therapy slide is listed for anxiety rather than as an antidepressant class?",
      opts:[
        ["Selective serotonin reuptake inhibitors (SSRIs)", false, "An antidepressant class."],
        ["Benzodiazepines (Valium)", true, "Listed 'for anxiety'; they enhance GABA."],
        ["Serotonin and norepinephrine reuptake inhibitors (SNRIs)", false, "An antidepressant class."],
        ["Monoamine oxidase inhibitors (MAOIs)", false, "An antidepressant class."]
      ]},
    {id:"W4-Q37", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slides 30-31", added:"2026-10-26",
      case:"In therapy, Ken talks freely about whatever comes to mind so he can understand the basis of his feelings and gain insight.",
      q:"Which model of human nature guides this treatment?",
      opts:[
        ["Cognitive model", false, "Cognitive therapy exposes and identifies false ideas that produce anxiety or depression."],
        ["Behavioural model", false, "Behavioural treatment identifies and alters reinforcers of behaviour."],
        ["Psychodynamic model", true, "Unconscious ideas and impulses feed thoughts and behaviours; patients speak freely to gain insight."],
        ["Biological model", false, "Biological treatment is pharmacological therapy."]
      ]},
    {id:"W4-Q38", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 34", added:"2026-10-26",
      case:"Amira's family doctor thinks her symptoms may have a medical cause and that she may need medication.",
      q:"Which professional on the slides can prescribe and determine whether there is a medical cause?",
      opts:[
        ["Clinical psychologist", false, "Usually holds a PhD and treats with behavioural and cognitive therapies."],
        ["Social worker", false, "Holds a master's degree; skilled in counselling and finding community support."],
        ["Licensed counsellor", false, "Requirements vary; the slides do not describe them as prescribing."],
        ["Psychiatrist", true, "A specialized medical physician who can prescribe medications and check for a medical cause."]
      ]},
    {id:"W4-Q39", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 29", added:"2026-10-26",
      q:"Which statement about schizophrenia matches the slides?",
      opts:[
        ["It is caused by a combination of genes and environmental factors, and symptoms can include delusions and auditory hallucinations", true, "Slide 29 lists both points."],
        ["It affects about 13.3% of Canadians", false, "About 1% of Canadians have been diagnosed; 13.3% is the GAD figure."],
        ["Its symptoms are always severe and debilitating", false, "Symptoms range from severe to mild and hardly noticeable."],
        ["It is treated with light therapy", false, "Treatment may include psychotherapy and medication; light therapy is for SAD."]
      ]},
    {id:"W4-Q40", type:"mcq", ch:"W4-C4", src:"W4 Part 2, slide 35", added:"2026-10-26",
      q:"Which approach to mental health support for Indigenous Peoples in Canada matches the slides?",
      opts:[
        ["The same standard approach used for every group, without reference to history", false, "The slide stresses respect for the history of colonization and intergenerational trauma."],
        ["Culturally appropriate supports that honour the history and values of the people harmed, with holistic and traditional practices", true, "Slide 35 says these are paramount for healing."],
        ["Medication alone, since challenges are mainly biological", false, "The slide ties the challenges to colonization and intergenerational trauma."],
        ["Avoiding traditional practices in favour of new ones", false, "Holistic and traditional practices are called paramount."]
      ]}
  ],

  review:[
    {id:"W4-R01", ch:"W4-C1", src:"W4 Part 1, slides 2, 7-8", added:"2026-10-26",
      q:"Explain why psychological health is not the same as psychological normality, and use the dual continua model to show why having no mental illness does not guarantee wellness.",
      answer:"Psychological health is our capacity to think, feel and behave in ways that help us enjoy life and manage challenges, and it can be defined positively as the presence of wellness. Normality only means being close to average, and psychological diversity is a valuable asset to society. The presence or absence of symptoms alone does not decide whether someone is mentally healthy. The dual continua model places people on two related but distinct continua, mental well-being and mental illness. A person with low illness can still have low well-being (vulnerable), and a person with high illness can still have high well-being (symptomatic but content).",
      points:["Defines psychological health (capacity to enjoy life and manage challenges; presence of wellness)","Normality = close to average; diversity is an asset","Symptoms alone do not decide mental health","Two continua: well-being and mental illness, related but distinct","Uses a quadrant example such as vulnerable or symptomatic but content"]},
    {id:"W4-R02", ch:"W4-C1", src:"W4 Part 1, slides 10-13", added:"2026-10-26",
      q:"Describe Erikson's view of development. Which stages are first-year university students in or entering, and what can happen if an earlier stage is not mastered?",
      answer:"Erikson proposed that development progresses through 8 stages across the lifetime, each with a conflict. Once one stage is mastered we may move to the next. In adolescence the conflict is identity vs. identity confusion, with peers as the important people, and the task is developing a stable sense of your needs, abilities, interpersonal style and values. Young adulthood brings intimacy vs. isolation, learning to live and share intimately with close friends and partners. Failing to master a stage before moving on can have repercussions later, such as an identity crisis. Adult identity begins in adolescence and is a lifelong process.",
      points:["8 stages across life, each with a conflict","Adolescence: identity vs. identity confusion, peers","Young adulthood: intimacy vs. isolation","Unmastered stage can cause later problems, e.g., identity crisis","Adult identity begins in adolescence and is lifelong"]},
    {id:"W4-R03", ch:"W4-C2", src:"W4 Part 1, slides 22-23", added:"2026-10-26",
      q:"Describe how to meet challenges to self-esteem. Pick one cognitive distortion from the realistic self-talk table, give an example of negative self-talk, and rewrite it as realistic self-talk.",
      answer:"To meet challenges to self-esteem, notice your patterns of thinking, avoid focusing on the negative by avoiding cognitive distortions, and develop realistic self-talk. One distortion is expecting the worst. Negative self-talk would be: 'I know I'm going to fail this course, so I should drop out.' Realistic self-talk would be: 'I'm not doing well in this course, so I should talk to my professor about what help I can get.' The realistic version admits the problem but points to an action instead of giving up.",
      points:["Notice patterns of thinking","Avoid focusing on the negative / cognitive distortions","Names a distortion from the table","Gives a negative statement and a realistic rewrite","Explains how the rewrite is balanced and action-focused"]},
    {id:"W4-R04", ch:"W4-C2", src:"W4 Part 1, slides 24-26", added:"2026-10-26",
      q:"Define defence mechanisms and explain why people use them. Then distinguish projection, displacement and reaction formation, with an example of each.",
      answer:"When our wants conflict with people around us or with our conscience and we cannot change the external situation, frustration or anxiety can result. Defence mechanisms are ways we rearrange our thoughts and feelings to resolve the conflict internally. Projection is reacting to unacceptable inner impulses as if they came from outside, such as a student who dislikes a roommate feeling that the roommate dislikes them. Displacement is shifting feelings about one person to another person, such as yelling at a housemate when you are angry at a professor. Reaction formation is concealing feelings by exaggerating the opposite ones, such as a person who dislikes children buying them expensive gifts.",
      points:["Conflict with others or conscience that can't be changed externally","Rearranging thoughts and feelings to resolve it internally","Projection defined with example","Displacement defined with example","Reaction formation defined with example"]},
    {id:"W4-R05", ch:"W4-C4", src:"W4 Part 2, slides 14-16, 23", added:"2026-10-26",
      q:"Describe how common depression is in Canada and among undergraduates, the symptoms it can involve, and the treatment options listed in the slides.",
      answer:"The prevalence of major depressive episodes in Canadians aged 15 and up is 7.6%, and women are twice as likely as men to be affected. Among undergraduates, self-reported depression diagnosis over 12 months was 26.9% of cisgender women, 13.4% of cisgender men and 47.8% of trans and gender nonconforming students, with even higher rates for Indigenous students. Symptoms can include dysphoria, anhedonia, appetite and sleep changes, restlessness or fatigue, self-loathing, poor concentration, irritability and rumination. 80% of Canadians respond well to treatment, but only 10% of those with depression seek it. Treatment can be drug therapy, psychotherapy or both, with exercise as an adjunct, rTMS, ECT for severe depression, and light therapy for SAD.",
      points:["7.6% major depressive episodes; women 2x men","Undergraduate rates by gender identity","Names several symptoms including dysphoria, anhedonia, rumination","80% respond to treatment but only 10% seek it","Lists drug therapy, psychotherapy, exercise, rTMS, ECT, light therapy"]},
    {id:"W4-R06", ch:"W4-C4", src:"W4 Part 2, slides 27-28", added:"2026-10-26",
      q:"Compare psychotherapy and pharmacotherapy for depression. When do the slides suggest combining them?",
      answer:"Psychotherapy can give long-term skills that last after treatment, can reduce relapse rates, works for several disorders and has no side effects. Its drawbacks are that depression can impair executive functioning, which makes the cognitive control therapy needs hard, and it is not as effective in severe depression. Pharmacotherapy is easier to access, is recommended for severe depression and is needed to relieve symptoms in some disorders. Its drawbacks include severe side effects such as GI and sexual problems, poor compliance, difficulty finding the right drug and dose, tolerance, relapse and drug interactions. For severe depression the slides say a combination of psychotherapy and pharmacotherapy is needed.",
      points:["At least two psychotherapy pros (lasting skills, lower relapse, no side effects)","At least one psychotherapy con (executive function, less effective when severe)","At least two pharmacotherapy pros (access, severe depression)","At least two pharmacotherapy cons (side effects, compliance, tolerance, relapse)","Combination recommended for severe depression"]}
  ],

  explore:[
    {fig:"maslow", title:"Maslow's hierarchy of needs", caption:"Maslow (1970), Motivation and Personality. Needs build from the base of the pyramid up to self-actualization.",
      items:{
        physio:{label:"Physiological needs", text:"The base of the pyramid: food and water, shelter, sleep, exercise and sex.", src:"W4 Part 1, slide 4"},
        safety:{label:"Safety and security", text:"Safe surroundings, protection by others, and knowing to avoid risks.", src:"W4 Part 1, slide 4"},
        love:{label:"Love and belongingness", text:"Being loved, being loving, and feeling connected.", src:"W4 Part 1, slide 4"},
        esteem:{label:"Self-esteem", text:"Esteem as a person and as a doer in relationships.", src:"W4 Part 1, slide 4"},
        self:{label:"Self-actualization", text:"The top level. Its qualities are realism, acceptance, autonomy, authenticity, capacity for intimacy and creativity.", src:"W4 Part 1, slides 4-6"}
      }},
    {fig:"dual", title:"Dual continua model of mental health", caption:"Scutt et al. (2023). Mental well-being and mental illness are related but distinct, so the absence of illness does not guarantee high well-being.",
      items:{
        flourish:{label:"Flourishing", text:"High mental well-being and low mental illness.", src:"W4 Part 1, slide 8"},
        symptomatic:{label:"Symptomatic but content", text:"High mental illness but still high well-being. Illness and well-being can move separately.", src:"W4 Part 1, slide 8"},
        vulnerable:{label:"Vulnerable", text:"Low mental illness but low well-being. Having no illness does not guarantee wellness.", src:"W4 Part 1, slide 8"},
        languish:{label:"Languishing", text:"High mental illness and low mental well-being.", src:"W4 Part 1, slide 8"}
      }}
  ]
});
