/* W2 reading supplement: Textbook Ch 1 "Taking Charge of Your Health" (Insel et al., Core Concepts in Health, older Canadian edition scan).
   W2-C7 covers pp. 3 to 16 (wellness, dimensions, diverse populations, factors that influence wellness).
   W2-C8 covers pp. 16 to 29 (lifestyle management and behaviour change). About 60% of the bank is C8, per the Behaviour Change Assignment.
   Pages / parts not readable or skipped:
   - p. 2 (chapter opener image) is OCR noise.
   - Table 1.2 (p. 5) columns are interleaved. Only items whose column is clear are used; "capacity for love", "optimism", "sense of humour" are left out.
   - Tables 1.3 to 1.6, Figures 1.2 to 1.5 (pp. 7 to 14) are partly garbled and are edition-specific statistics, so they are not used.
   - p. 9 text on the "two dangers" is partly garbled; the definitions used come from the readable part on p. 10.
   - p. 17 environment box, pp. 18 to 19 lifestyle quiz scoring, p. 25 Figure 1.7 journal, p. 26 Figure 1.8 contract and p. 28 Quick Stats are partly garbled; only clear text is used.
   - The "Tips for Moving Forward" box (p. 23) has interleaved columns. Only tips whose stage is clear are used in the sort.
   Slides vs textbook (slides win, none of these is tested):
   - Textbook lists six dimensions of wellness (occupational as a possible seventh, financial as part of occupational). The slides (4th ed.) list nine. No question asks how many dimensions there are.
   - Textbook Table 1.1 lists PHAC's 12 determinants of health; the slides use the CPHA list of 14 social determinants. Not tested.
   - Textbook gives the Pan-Canadian Healthy Living Strategy objectives as +20% healthy eating, activity and healthy weights; the slide wording differs. Not tested.
   - Textbook leading causes of death for ages 15 to 24 are older data than the slides. Not tested.
   - Textbook describes termination as "no longer tempted, total self-efficacy"; slides say "the new behaviour is adopted". Consistent, used only as added detail. */
HLTH.extend("W2",{
  terms:[
    {id:"W2-T-tb-health",term:"Health (textbook definition)",def:"The overall condition of body or mind and the presence or absence of illness or injury. Some aspects of health can be determined or influenced by factors beyond your control, such as your genes, age, the health care system and the care you received as a young child.",ex:"A 60-year-old man with a strong family history of prostate cancer and limited access to screening has a higher-than-average risk.",src:"Textbook Ch 1, p. 4",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-wellness-decisions",term:"Wellness as a product of decisions",def:"Wellness is optimal health and vitality, encompassing all the dimensions of well-being. Unlike health, it is largely determined by the decisions you make about how you live.",ex:"The same 60-year-old man can lower his cancer risk by eating sensibly, exercising and getting screened, and can still live a rich life if he becomes ill.",src:"Textbook Ch 1, p. 4",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-modifiable-nonmodifiable",term:"Modifiable vs nonmodifiable risk factors",def:"Nonmodifiable risk factors, such as age and family history, cannot be controlled. Modifiable risk factors are behaviours you can change, such as smoking, exercising and eating a healthy diet. Enhanced wellness means making conscious decisions to control the modifiable ones.",src:"Textbook Ch 1, p. 4",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-wellness-continuum",term:"Wellness continuum (Fig 1.1)",def:"Wellness runs from a low level of wellness (physical, mental and emotional symptoms) to a high level of wellness, through change and growth. Wellness is constant and dynamic, not static, and ignoring any dimension can harm your life.",src:"Textbook Ch 1, pp. 4-5",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-physical-wellness",term:"Physical wellness",def:"Your body's overall condition and the absence of disease, plus your fitness level and your ability to care for yourself. The higher your fitness level and self-care ability, the higher your physical wellness.",ex:"Eating well, exercising, getting regular checkups, avoiding injuries.",src:"Textbook Ch 1, p. 5",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-emotional-wellness",term:"Emotional wellness",def:"Your ability to understand and deal with your feelings: attending to your thoughts and feelings, monitoring your reactions, identifying obstacles to emotional stability, and finding solutions to emotional problems, with professional help if necessary.",ex:"Self-esteem, self-acceptance, self-confidence.",src:"Textbook Ch 1, p. 5",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-intellectual-wellness",term:"Intellectual wellness",def:"Constantly challenging your mind. An active mind detects problems, finds solutions and directs behaviour. People with intellectual wellness never stop learning and seek out new experiences and challenges.",ex:"Openness to new ideas, critical thinking, curiosity, lifelong learning.",src:"Textbook Ch 1, p. 5",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-interpersonal-wellness",term:"Interpersonal (social) wellness",def:"Your ability to develop and maintain satisfying and supportive relationships, which are essential to physical and emotional health. It also requires participating in and contributing to your community and society.",ex:"Communication skills, capacity for intimacy, a support system of friends and family.",src:"Textbook Ch 1, p. 5",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-spiritual-wellness",term:"Spiritual wellness",def:"Having a set of guiding beliefs, principles or values that give meaning and purpose to your life, especially in difficult times. Organized religion is one source, but not the only one: people also find meaning through nature, art, meditation, good works or loved ones.",src:"Textbook Ch 1, pp. 5-6",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-environmental-wellness",term:"Environmental wellness",def:"Defined by the livability of your surroundings. Personal health depends on the health of the planet, from the safety of the food supply to the degree of violence in society. You improve it by protecting yourself from hazards and working to make your world cleaner and safer.",ex:"Recycling, reducing pollution and waste.",src:"Textbook Ch 1, p. 6",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-occupational-wellness",term:"Occupational wellness",def:"The level of happiness and fulfillment you gain through your work. High salaries and prestigious titles alone generally do not bring it. Aspects: enjoyable work, job satisfaction, feelings of achievement, opportunities to learn and grow, and recognition from managers and colleagues.",src:"Textbook Ch 1, p. 6",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-financial-wellness",term:"Financial wellness",def:"Being comfortable with your financial situation, not necessarily rich. Financially well people understand the limits of their income, live within their means, can manage a bank account and try to save for the future.",src:"Textbook Ch 1, p. 6",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-biological-cultural",term:"Biological vs cultural health differences",def:"Health-related differences among people can be biological (determined genetically) or cultural (patterns of behaviour learned through daily interactions with family, community and society). Many conditions combine both: a person with a genetic predisposition may not develop a disease unless lifestyle factors such as stress or a poor diet are present.",src:"Textbook Ch 1, p. 9",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-stereotyping-overgeneralizing",term:"Stereotyping and overgeneralizing",def:"The two dangers in talking about health for diverse populations. Stereotyping: talking about people as groups rather than as individuals. Overgeneralizing: ignoring the large biological and cultural diversity among peoples who are grouped together.",ex:"The label Aboriginal peoples includes First Nations, Metis and Inuit, each with its own genetic and cultural heritage.",src:"Textbook Ch 1, pp. 9-10",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-diversity-dimensions",term:"Dimensions for describing health differences",def:"Health-related differences among groups can be described in the context of gender, ethnicity, income and education, disability, geographic location and sexual orientation. Poverty and low educational attainment are far more important predictors of poor health than any ethnic factor.",src:"Textbook Ch 1, pp. 10, 12-13",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-factors-wellness",term:"Factors that influence wellness",def:"Behaviour (health habits), heredity and family history, environment, and access to health care. These vary for individuals and groups and can interact to produce either health or disease. Behaviour can often tip the balance toward good health even when heredity or environment is a negative factor.",src:"Textbook Ch 1, pp. 14-16",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-genome-gene",term:"Genome and gene",def:"Genome: the complete set of genetic material in an individual's cells (about 25,000 genes, half from each parent). Gene: the basic unit of heredity, a section of genetic material containing chemical instructions for making a particular protein.",src:"Textbook Ch 1, p. 15",ch:"W2-C7",added:"2026-10-26"},
    {id:"W2-T-tb-target-behaviour",term:"Target behaviour",def:"An isolated behaviour selected as the subject of a behaviour change program. Start small with one behaviour and a simple first goal, work on it until you succeed, then make the next goal a little more significant.",ex:"Resisting the urge to snack between classes.",src:"Textbook Ch 1, pp. 18-19",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-pros-cons",term:"Pros and cons of change (cost-benefit analysis)",def:"Health behaviours have short-term and long-term benefits and costs. To change, you must believe the benefits of change outweigh the costs. Most people are moved more by short-term, personal benefits (feeling better, looking better, doing better in school, less stress) than by long-term goals.",src:"Textbook Ch 1, p. 21",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-visualization",term:"Visualization",def:"Imagining yourself successfully doing the new, healthier behaviour and enjoying its short-term and long-term benefits, and creating a new self-image. One of the best ways to boost confidence and self-efficacy.",src:"Textbook Ch 1, pp. 21-22",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-self-talk",term:"Self-talk",def:"The internal dialogue you carry on with yourself. To build self-efficacy, counter self-defeating thoughts with more positive or realistic ones.",ex:"\"I am a strong, capable person, and I can maintain my commitment to change.\"",src:"Textbook Ch 1, p. 22",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-lapse",term:"Lapse",def:"A single slip back to the old behaviour. People in maintenance may have lapses but quickly re-establish the desired behaviour.",src:"Textbook Ch 1, pp. 22-23",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-relapse",term:"Relapse vs failure",def:"Relapse is a return to old habits. It can be demoralizing but is not failure. Failure means stopping before you reach your goal and never changing the target behaviour. Plan for relapse early so you can avoid guilt and self-blame.",src:"Textbook Ch 1, pp. 23-24",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-spiral-model",term:"Spiral model of change (Fig 1.6)",def:"People seldom move through the stages of change in a straight line. They cycle back through earlier stages but are further along each time they renew their commitment. Most people make several attempts before they succeed.",src:"Textbook Ch 1, pp. 23-24",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-relapse-steps",term:"Three steps for dealing with relapse",def:"1. Forgive yourself: one setback is not the end of the world. 2. Give yourself credit for the progress you have made, and use it as motivation. 3. Move on: learn from the relapse to handle future setbacks. If relapses keep happening, return to an earlier stage and re-evaluate your goals and strategy.",src:"Textbook Ch 1, p. 24",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-plan-of-action",term:"Plan of action strategies",def:"Get what you need (resources, equipment, right away); modify your environment (control cues that trigger the behaviour); control related habits; reward yourself (planned, instant, real rewards tied to goals, preferably not food or alcohol); involve the people around you (give them a list of dos and don'ts); plan for challenges.",src:"Textbook Ch 1, pp. 25-26",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-habit-goals",term:"Habit goals vs outcome goals",def:"For some situations it makes more sense to focus on something other than the outcome goal. Early in change, the goal may be to learn about the risks or do a cost-benefit analysis. For long-term lifestyle change, such as reaching a healthy weight, focus on developing healthy habits rather than a specific weight loss.",ex:"Exercise 30 minutes a day, reduce portion sizes, cut late-night snacks.",src:"Textbook Ch 1, p. 25",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-procrastinating",term:"Procrastinating",def:"Putting off the start of your plan. Fix: break the plan into smaller steps you can do one day at a time.",ex:"\"It's Friday already; I might as well wait until Monday to start.\"",src:"Textbook Ch 1, p. 27",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-rationalizing",term:"Rationalizing",def:"Making excuses for not following your plan. When you win by deceiving yourself, it is not much of a victory.",ex:"\"I wanted to go swimming today but wouldn't have had time to wash my hair afterward.\"",src:"Textbook Ch 1, p. 27",ch:"W2-C8",added:"2026-10-26"},
    {id:"W2-T-tb-blaming",term:"Blaming",def:"Blaming others for your own failure to follow through. It takes your focus off the real problem and denies responsibility for your own actions.",ex:"\"I couldn't exercise because Dave was hogging the elliptical trainer.\"",src:"Textbook Ch 1, p. 27",ch:"W2-C8",added:"2026-10-26"}
  ],

  chapters:[
  {
    id:"W2-C7",title:"Reading: Wellness, its dimensions and what shapes it",src:"Textbook Ch 1, pp. 3-16",added:"2026-10-26",
    blurb:"Textbook Ch 1, first half: health vs wellness, the dimensions, diverse populations and the factors that influence wellness.",
    learn:"The textbook separates two ideas. <b>Health</b> is the overall condition of body or mind and the presence or absence of illness or injury. Parts of it are shaped by things you cannot control: genes, age, the health care system. <b>Wellness</b> is optimal health and vitality, and it is largely determined by your decisions.<br><br>Wellness is dynamic: it moves along a <b>continuum</b> from symptoms to a high level of wellness. The textbook describes physical, emotional, intellectual, interpersonal, spiritual and environmental wellness, plus occupational and financial wellness in a box. (The slides list nine dimensions; use the slide list on the exam.)<br><br>Health differences can be <b>biological</b> or <b>cultural</b>. Avoid two dangers: <b>stereotyping</b> and <b>overgeneralizing</b>. Poverty and low education predict poor health more than any ethnic factor.<br><br>Four factors influence wellness: <b>health habits, heredity, environment and access to health care</b>. Behaviour can often tip the balance even when heredity is a negative factor.",
    summary:"Health can be shaped by things you cannot control; wellness is mostly your choices. Behaviour can tip the balance even against family history.",
    steps:[
      {id:"W2-C7-S1",type:"sort",src:"Textbook Ch 1, p. 5 (Table 1.2)",prompt:"Table 1.2: sort each quality or behaviour into its dimension of wellness.",bins:["Physical","Emotional","Intellectual","Interpersonal","Spiritual","Environmental"],items:[
        ["Getting regular checkups",0,"Table 1.2 lists checkups under physical wellness, along with eating well and exercising."],
        ["Avoiding injuries",0,"Physical wellness includes making choices that help you avoid illness and injury."],
        ["Self-acceptance",1,"Emotional wellness qualities include self-esteem, self-acceptance and self-confidence."],
        ["Capacity to question and think critically",2,"An active, questioning mind is intellectual wellness."],
        ["Lifelong learning",2,"People with intellectual wellness never stop learning."],
        ["Ability to cultivate a support system of friends and family",3,"Interpersonal wellness is the ability to build satisfying, supportive relationships."],
        ["Sense of meaning and purpose",4,"Spiritual wellness means guiding beliefs or values that give life meaning and purpose."],
        ["Sense of belonging to something greater than yourself",4,"Table 1.2 lists this under spiritual wellness."],
        ["Recycling whenever possible",5,"Environmental wellness includes recycling and reducing pollution and waste."]
      ]},
      {id:"W2-C7-S2",type:"compare",src:"Textbook Ch 1, p. 4",prompt:"Health or wellness? Decide which idea each detail about a 60-year-old man best illustrates.",
        a:{name:"Health",points:["Overall condition of body or mind; presence or absence of illness or injury","Can be shaped by factors beyond your control: genes, age, health care system, early childhood care"]},
        b:{name:"Wellness",points:["Optimal health and vitality; living life to its fullest","Largely determined by the decisions you make about how you live"]},
        scenarios:[
          ["He has a strong family history of prostate cancer.",0,"Family history is beyond his control, so it shapes his health, not his wellness choices."],
          ["His rural community has limited access to cancer screening.",0,"The health care system around him is a factor beyond his control."],
          ["He starts eating sensibly, exercising and booking screening tests when available.",1,"These are decisions about how he lives, which is what wellness is built from."],
          ["After a diagnosis, he keeps up his friendships and challenges himself intellectually.",1,"The textbook says he can still rise above the disease to live a rich, meaningful life: a wellness choice."]
        ]},
      {id:"W2-C7-S3",type:"mcq",src:"Textbook Ch 1, p. 16",case:"Hana's mother and aunt both had breast cancer. Hana says, \"It runs in my family, so it doesn't matter what I do.\"",q:"What does the textbook say about her situation?",opts:[
        ["Behaviour can tip the balance: controlling her weight, eating well, exercising and having regular mammograms make her less likely to develop and die from the disease.",true,"The textbook uses this exact example under 'Behaviour can make a difference'."],
        ["Her genes determine the outcome, so only screening is worth her effort.",false,"The textbook says breast cancer is also linked to controllable factors such as being overweight, poor nutrition and inactivity."],
        ["Family history is a modifiable risk factor, so she can change it.",false,"Family history is nonmodifiable. What she can change is her behaviour."],
        ["She is right, because genetic alterations cause common diseases on their own.",false,"In common, complex disorders, altered genes only increase risk; the disease comes from many genes interacting with other factors."]]},
      {id:"W2-C7-S4",type:"mcq",src:"Textbook Ch 1, pp. 9-10",case:"A health report describes \"Aboriginal peoples\" as one group with one set of health risks, without separating First Nations, Metis and Inuit.",q:"Which danger in talking about health for diverse populations does this show?",opts:[
        ["Overgeneralizing",true,"Overgeneralizing ignores the biological and cultural diversity among peoples grouped together. The textbook uses this same label as its example."],
        ["Rationalizing",false,"Rationalizing is making excuses in a behaviour change plan."],
        ["Internalized racism",false,"That is the acceptance of negative messages by members of stigmatized groups (Jones, W2 slides)."],
        ["External locus of control",false,"Locus of control is about who a person sees as responsible for events in their life."]]}
    ]
  },
  {
    id:"W2-C8",title:"Reading: Lifestyle management and behaviour change",src:"Textbook Ch 1, pp. 16-29",added:"2026-10-26",
    blurb:"Textbook Ch 1, second half: getting serious, motivation, stages of change, relapse, the personalized plan and staying with it.",
    learn:"<b>Getting serious</b>: examine your habits, choose one <b>target behaviour</b>, learn its risks, and find help if it is too serious for self-management. Knowledge alone is usually not enough; you need motivation.<br><br><b>Motivation</b>: weigh pros and cons (short-term, personal benefits move most people), boost <b>self-efficacy</b> (internal locus of control, <b>visualization</b>, <b>self-talk</b>, role models, a buddy), and plan around barriers.<br><br><b>Readiness</b>: the stages of change are best seen as a <b>spiral</b>. A <b>lapse</b> is one slip; a <b>relapse</b> is a return to old habits; <b>failure</b> is quitting for good. After a relapse: forgive yourself, give yourself credit, move on.<br><br><b>The plan</b>: monitor in a journal, analyze patterns, set SMART goals with smaller intermediate goals, devise a plan of action, sign a contract with a witness.<br><br><b>Staying with it</b>: watch for social influences, low commitment, the wrong technique, stress, and the games of procrastinating, rationalizing and blaming.",
    summary:"Pick one behaviour, build motivation, know your stage, plan for relapse, write a SMART plan and contract, and watch for the games you play with yourself.",
    steps:[
      {id:"W2-C8-S1",type:"match",src:"Textbook Ch 1, pp. 22-23",prompt:"Match each stage of change to the textbook detail that describes it.",pairs:[
        ["Precontemplation","May deny the risks, blame others, or think the situation is hopeless after past failures"],
        ["Contemplation","Knows there is a problem and weighs costs, but does not know how to proceed"],
        ["Preparation","Doing the new behaviour now and then, not yet regularly; may be worried about failing"],
        ["Action","Outwardly changes behaviour and environment; needs the greatest commitment of time and energy"],
        ["Maintenance","Lapses may happen but the behaviour is quickly re-established; can last months or years"],
        ["Termination","No longer tempted to lapse; a new self-image and total self-efficacy"]
      ]},
      {id:"W2-C8-S2",type:"sort",src:"Textbook Ch 1, p. 23",prompt:"'Tips for Moving Forward in the Cycle of Behaviour Change': which stage is each tip listed under?",bins:["Precontemplation","Contemplation","Preparation","Action","Maintenance"],items:[
        ["Raise your awareness: research your target behaviour and its effects",0,"People in precontemplation may be unaware of the risks, so awareness comes first."],
        ["Be self-aware: look at how you resist change, such as denial or rationalization",0,"Denial is typical of precontemplation."],
        ["Keep a journal of your target behaviour and what triggers it",1,"A record helps a contemplator plan a change program."],
        ["Do a cost-benefit analysis of keeping vs changing the behaviour",1,"Contemplators are weighing benefits against costs."],
        ["Create a plan with a start date, goals and rewards",2,"Preparation is when you plan to act within a month."],
        ["Take short steps: practise the new behaviour for even a single day",2,"Small early successes build confidence in preparation."],
        ["Change your environment, for example get rid of snack foods",3,"In action, people outwardly modify their behaviour and environment."],
        ["Find alternatives to your target behaviour",3,"Listed under action, alongside monitoring progress and rewarding yourself."],
        ["Be a role model: help someone else make the same change",4,"Once you have changed and kept it up, you can help others."]
      ]},
      {id:"W2-C8-S3",type:"mcq",src:"Textbook Ch 1, p. 27",case:"Devon's contract says he starts running on Wednesday. On Wednesday he thinks, \"It's already midweek; I might as well start fresh on Monday.\"",q:"Which game is Devon playing, and what does the textbook suggest?",opts:[
        ["Procrastinating; break the plan into smaller steps he can do one day at a time.",true,"The textbook's own example is 'It's Friday already; I might as well wait until Monday'."],
        ["Rationalizing; sign a new contract with a later start date.",false,"Rationalizing is making excuses like the hair-washing example. Moving the date feeds the delay."],
        ["Blaming; tell his helper to stop pressuring him.",false,"He is not blaming anyone else."],
        ["Relapse; forgive himself and give himself credit.",false,"He has not started yet, so there is nothing to relapse from."]]},
      {id:"W2-C8-S4",type:"mcq",src:"Textbook Ch 1, p. 25",case:"Luis is sedentary. His long-term goal is to run 5 km in 30 minutes within six months.",q:"Which approach follows the textbook?",opts:[
        ["Set smaller intermediate goals, such as walking under 2 km for 10 to 15 minutes, 3 days a week, in week 1, and adjust them as he goes.",true,"The textbook builds this exact goal from walking up to running, and says to make goals harder or easier as needed to stay motivated."],
        ["Run 5 km every day from week 1 so he reaches the goal sooner.",false,"Too challenging goals make steady progress hard and make giving up more likely."],
        ["Keep the short-term goals fixed even if he progresses faster than expected.",false,"The textbook says it may be reasonable to make goals more challenging if you progress faster."],
        ["Skip the time frame so he does not feel pressure.",false,"Time-frame specific is one of the SMART criteria."]]}
    ]
  }],

  questions:[
    /* W2-C7: wellness, dimensions, diverse populations, influences */
    {id:"W2-TQ01",ch:"W2-C7",src:"Textbook Ch 1, p. 4",added:"2026-10-26",q:"According to the textbook, how does wellness differ from health?",opts:[
      ["Health can be shaped by factors beyond your control, while wellness is largely determined by the decisions you make about how you live.",true,"These are the two differences the textbook names."],
      ["They mean exactly the same thing, so there is no difference.",false,"The textbook uses the words interchangeably but says two important differences exist."],
      ["Wellness means only the absence of disease or injury.",false,"That is closer to the traditional view of health. Wellness goes beyond it to optimal health and vitality."],
      ["Health is mostly decided by lifestyle, while wellness is mostly genetic.",false,"This reverses the textbook."]]},
    {id:"W2-TQ02",ch:"W2-C7",src:"Textbook Ch 1, p. 4",added:"2026-10-26",q:"Ravi, 45, is worried about type 2 diabetes. Which of his risk factors is nonmodifiable?",opts:[
      ["His father and grandfather both had type 2 diabetes.",true,"Family history, like age, is a nonmodifiable risk factor."],
      ["He rarely exercises.",false,"Physical activity is a modifiable behaviour."],
      ["He drinks two cans of pop a day.",false,"Diet is modifiable."],
      ["He smokes.",false,"Smoking is a modifiable behaviour the textbook names."]]},
    {id:"W2-TQ03",ch:"W2-C7",src:"Textbook Ch 1, p. 5",added:"2026-10-26",q:"Jamal joins a debate club, reads widely outside his program and keeps trying to master new skills. Which dimension of wellness is he building most directly?",opts:[
      ["Intellectual",true,"Intellectual wellness means constantly challenging your mind and never stopping learning."],
      ["Emotional",false,"Emotional wellness is about understanding and dealing with your feelings."],
      ["Spiritual",false,"Spiritual wellness is about guiding beliefs and values that give meaning and purpose."],
      ["Occupational",false,"Occupational wellness is fulfillment gained through work."]]},
    {id:"W2-TQ04",ch:"W2-C7",src:"Textbook Ch 1, pp. 5-6",added:"2026-10-26",q:"Sofia is not religious. She draws meaning and purpose from meditation and time in nature, and these values help her through hard times. What does the textbook say?",opts:[
      ["This is spiritual wellness; religion is one source of it but not the only one.",true,"Many people find meaning on their own, through nature, art, meditation or good works."],
      ["This cannot be spiritual wellness because it does not involve organized religion.",false,"The textbook says religion is not the only source or form of spiritual wellness."],
      ["This is environmental wellness, because it involves nature.",false,"Environmental wellness is about the livability of your surroundings, not personal meaning."],
      ["This is emotional wellness, because spirituality is a feeling.",false,"Guiding beliefs that give meaning and purpose define spiritual wellness."]]},
    {id:"W2-TQ05",ch:"W2-C7",src:"Textbook Ch 1, p. 6",added:"2026-10-26",q:"Marco earns a high salary and has an impressive title, but he dislikes his work, feels no connection to co-workers and has no chance to learn. How does the textbook view his occupational wellness?",opts:[
      ["It is low, because salary and title alone generally do not bring occupational wellness.",true,"An occupationally well person likes the work, feels connected to others there, and can learn and be challenged."],
      ["It is high, because income is the main part of occupational wellness.",false,"High salaries and prestigious titles alone generally do not bring it."],
      ["It is high, because financial wellness and occupational wellness are the same thing.",false,"Financial wellness is a related facet, not the same thing."],
      ["It cannot be judged, since occupational wellness is not discussed in the textbook.",false,"The textbook has a box on occupational wellness."]]},
    {id:"W2-TQ06",ch:"W2-C7",src:"Textbook Ch 1, p. 6",added:"2026-10-26",q:"Which student best shows financial wellness as the textbook describes it?",opts:[
      ["Mia earns little, but she knows the limits of her income, keeps expenses in check and saves a small amount each month.",true,"Financial wellness means being comfortable with your situation and living within your means, not being rich."],
      ["Owen has a large allowance but overspends and worries about bills every week.",false,"Money problems are a source of stress; wealth alone does not make you financially well."],
      ["Lea avoids looking at her bank statements so money does not stress her.",false,"Financially well people can interpret their bank statements."],
      ["Ben believes more possessions will make him happy, so he buys on credit.",false,"Money and possessions in themselves will not necessarily make you happy."]]},
    {id:"W2-TQ07",ch:"W2-C7",src:"Textbook Ch 1, pp. 9-10",added:"2026-10-26",q:"The textbook names two dangers when talking about health issues for diverse populations. What are they?",opts:[
      ["Stereotyping and overgeneralizing",true,"Stereotyping treats people as groups rather than individuals; overgeneralizing ignores diversity within a group."],
      ["Rationalizing and blaming",false,"These are games that undermine a behaviour change plan."],
      ["Medicalizing and individualizing",false,"These are not the two dangers named."],
      ["Stigma and discrimination",false,"Discrimination is discussed as a cause of disparities, but it is not one of the two dangers."]]},
    {id:"W2-TQ08",ch:"W2-C7",src:"Textbook Ch 1, pp. 9-10",added:"2026-10-26",q:"Which health difference is cultural rather than biological, as the textbook uses those terms?",opts:[
      ["A traditional diet learned from family and community",true,"Cultural differences are patterns of behaviour acquired through daily interactions with family, community and society."],
      ["Higher rates of sickle-cell disease among people of African ancestry",false,"This is a genetic (biological) difference concentrated in a gene pool."],
      ["Tay-Sachs disease among people of Eastern European Jewish and French-Canadian heritage",false,"This is a genetic (biological) difference."],
      ["Higher rates of cystic fibrosis among people of Northern European descent",false,"This is a genetic (biological) difference."]]},
    {id:"W2-TQ09",ch:"W2-C7",src:"Textbook Ch 1, pp. 12-13",added:"2026-10-26",q:"According to the textbook, which factors are far more important predictors of poor health than any ethnic factor?",opts:[
      ["Poverty and low educational attainment",true,"Income and education are closely related, and the groups with the highest poverty and least education have the worst health."],
      ["Genetic predisposition and family history",false,"Heredity matters, but the textbook names poverty and education as the strongest predictors of disparities."],
      ["Geographic location and climate",false,"Location matters, but it is not what the textbook ranks highest."],
      ["Sex and age",false,"These are not named as the strongest predictors."]]},
    {id:"W2-TQ10",ch:"W2-C7",src:"Textbook Ch 1, p. 16",added:"2026-10-26",q:"Diabetes has risen sharply among Canadians in recent years. How does the textbook explain the rise?",opts:[
      ["Rising obesity from poor dietary choices and lack of physical activity, not a change in genes",true,"The textbook uses this as an example of the power of behaviour and environment."],
      ["A sudden change in the Canadian gene pool",false,"The textbook says the rise is not due to any sudden change in our genes."],
      ["Better screening that finds cases that were always there",false,"The textbook does not give this explanation."],
      ["An increase in infectious causes of diabetes",false,"Not the textbook's explanation."]]},
    {id:"W2-TQ11",ch:"W2-C7",src:"Textbook Ch 1, pp. 14-16",added:"2026-10-26",q:"Which statement about the factors that influence wellness is NOT true, according to the textbook?",opts:[
      ["Once a person has a genetic predisposition to a common disease such as heart disease, behaviour cannot change the outcome.",true,"This is false. In common, complex disorders, altered genes only increase risk, and behaviour can tip the balance."],
      ["Vaccinations and screening tests show how access to health care improves quality and quantity of life.",false,"This is true; the textbook gives these examples."],
      ["Environment includes conditions in your home, workplace and community, not only air and water.",false,"This is true."],
      ["Behaviour, family history, environment and access to health care can interact to produce health or disease.",false,"This is true; these are the four factors named."]]},

    /* W2-C8: lifestyle management and behaviour change */
    {id:"W2-TQ12",ch:"W2-C8",src:"Textbook Ch 1, pp. 18-19",added:"2026-10-26",q:"Leila wants to start exercising, quit vaping, sleep eight hours a night and cut out sugar, all starting this Monday. What does the textbook advise?",opts:[
      ["Choose one target behaviour, start with a simple goal, and build on success before taking on the next.",true,"Changing any behaviour is demanding, so start small with one target behaviour."],
      ["Change everything at once while motivation is high.",false,"The textbook recommends one behaviour at a time."],
      ["Start with the hardest behaviour first to prove her commitment.",false,"Success is more likely if the first goal is simple; later goals can be a little more significant."],
      ["Wait until she reaches the termination stage for all four behaviours.",false,"Termination is the end of a cycle of change, not a starting condition."]]},
    {id:"W2-TQ13",ch:"W2-C8",src:"Textbook Ch 1, p. 21",added:"2026-10-26",q:"According to the textbook, what kind of benefit moves most people to change a health behaviour?",opts:[
      ["Shorter-term, personal benefits, such as feeling better, doing better in school or reducing stress",true,"Some people are moved by long-term goals, but most respond more to short-term, personal ones."],
      ["Avoiding a disease that may develop 30 years from now",false,"The textbook says this moves some people, but most respond more to short-term goals."],
      ["Knowing the facts about the behaviour's risks",false,"Knowledge is necessary but usually not enough to make people act."],
      ["Pressure from family members to change",false,"Asking family about the effects of your behaviour helps the analysis, but it is not what the textbook says moves most people."]]},
    {id:"W2-TQ14",ch:"W2-C8",src:"Textbook Ch 1, p. 21",added:"2026-10-26",q:"Dana says, \"My mother died of breast cancer, so I will too. Self-exams and checkups are a waste of time.\" What does her thinking show?",opts:[
      ["An external locus of control, which can sabotage efforts to change",true,"This is the textbook's own example of an external locus of control."],
      ["An internal locus of control",false,"An internal locus would mean believing she can act to reduce her risk."],
      ["High self-efficacy",false,"Self-efficacy is belief in your ability to act; Dana believes action is pointless."],
      ["The termination stage of change",false,"Termination means total self-efficacy for a behaviour already changed."]]},
    {id:"W2-TQ15",ch:"W2-C8",src:"Textbook Ch 1, pp. 21-22",added:"2026-10-26",q:"Before a party, Omar repeats to himself, \"I am a strong, capable person, and I can keep my commitment not to drink tonight.\" Which self-efficacy strategy is he using?",opts:[
      ["Self-talk",true,"Self-talk is the internal dialogue you use to counter self-defeating thoughts with positive or realistic ones."],
      ["Visualization",false,"Visualization means picturing yourself doing the new behaviour and enjoying its benefits."],
      ["Cost-benefit analysis",false,"That is weighing the pros and cons of change."],
      ["Rationalizing",false,"Rationalizing is making excuses, which works against change."]]},
    {id:"W2-TQ16",ch:"W2-C8",src:"Textbook Ch 1, p. 22",added:"2026-10-26",q:"Kai has started walking after class, but only once or twice a week so far. He has written a plan and plans to walk daily within a month, but he worries he will fail. Which stage is he in?",opts:[
      ["Preparation",true,"Preparation: plans to act within a month or has begun small changes, not yet regularly, and may fear failing."],
      ["Contemplation",false,"Contemplators intend to act within six months and do not yet know how to proceed."],
      ["Action",false,"In action, the behaviour change is outward and consistent and takes the most time and energy."],
      ["Maintenance",false,"Maintenance requires at least six months of the new behaviour."]]},
    {id:"W2-TQ17",ch:"W2-C8",src:"Textbook Ch 1, p. 22",added:"2026-10-26",q:"Theo tried to cut back on drinking last year and failed. Now he says it's hopeless, blames his roommates for his habits, and has no plan to change. Which stage is he in?",opts:[
      ["Precontemplation",true,"People in precontemplation may think change is hopeless after past failures and may blame others or external factors."],
      ["Contemplation",false,"Contemplators know they have a problem and intend to act within six months."],
      ["Relapse in the maintenance stage",false,"He is not maintaining any change, and he does not intend to change."],
      ["Termination",false,"Termination means he is no longer tempted by the old behaviour."]]},
    {id:"W2-TQ18",ch:"W2-C8",src:"Textbook Ch 1, p. 23",added:"2026-10-26",q:"How does the textbook describe the termination stage?",opts:[
      ["The person has exited the cycle, is no longer tempted to lapse, and has total self-efficacy for the behaviour; it is reached for some behaviours.",true,"This is the textbook's description of the sixth and final stage."],
      ["The person has kept the new behaviour for at least six months but still has occasional lapses.",false,"That describes maintenance."],
      ["The person outwardly changes behaviour and environment with great effort.",false,"That describes action."],
      ["The person decides to stop trying to change.",false,"Stopping before reaching the goal is what the textbook calls failure."]]},
    {id:"W2-TQ19",ch:"W2-C8",src:"Textbook Ch 1, pp. 23-24",added:"2026-10-26",q:"In the textbook, what is the difference between a relapse and failure?",opts:[
      ["A relapse is a return to old habits; failure is stopping before you reach your goal and never changing the behaviour.",true,"Relapse can be demoralizing, but it is not the same as failure."],
      ["A relapse is a single slip; failure is any return to old habits.",false,"A single slip is a lapse. A return to old habits is a relapse."],
      ["They are the same thing.",false,"The textbook separates them."],
      ["Failure happens only in the action stage; relapse only in maintenance.",false,"The textbook does not tie them to stages this way."]]},
    {id:"W2-TQ20",ch:"W2-C8",src:"Textbook Ch 1, p. 24",added:"2026-10-26",q:"Mei went three weeks without late-night snacking, then snacked every night of exam week. Which response follows the textbook's steps for dealing with relapse?",opts:[
      ["Forgive herself, give herself credit for the three good weeks, learn what triggered the slip and move on.",true,"Forgive yourself, give yourself credit, move on."],
      ["Decide the plan has failed and drop it until next term.",false,"Abandoning the effort is what turns a relapse into failure."],
      ["Punish herself with a stricter goal of no snacks at all for a month.",false,"The textbook aims to avoid guilt and self-blame. A harder goal makes giving up more likely."],
      ["Keep the slip to herself so her helper does not lose faith in her.",false,"The textbook stresses support from others and learning from the relapse."]]},
    {id:"W2-TQ21",ch:"W2-C8",src:"Textbook Ch 1, p. 24",added:"2026-10-26",q:"Akira has smoked for 15 years. Her goal is to quit cold turkey tomorrow with no other support. Which SMART criterion does the textbook say this kind of goal is most likely to miss?",opts:[
      ["Realistic",true,"The textbook's Realistic example: a long-time smoker may not be able to quit cold turkey; a more realistic plan uses nicotine replacement and a support group."],
      ["Specific",false,"Her goal is specific: quit, starting tomorrow."],
      ["Measurable",false,"Smoking zero cigarettes is measurable."],
      ["Attainable",false,"In the textbook, Attainable is about physical limits, like a poor swimmer choosing walking instead of laps."]]},
    {id:"W2-TQ22",ch:"W2-C8",src:"Textbook Ch 1, p. 25",added:"2026-10-26",q:"Jordan's long-term aim is to reach a healthy weight. What kind of goal does the textbook suggest he focus on?",opts:[
      ["Healthy habits, such as exercising 30 minutes a day or cutting late-night snacks",true,"For long-term lifestyle change, focus on habits rather than a specific weight loss."],
      ["A specific number of kilograms to lose by a set date",false,"The textbook says it is better to focus on habits than a specific weight loss."],
      ["Whatever his friends are aiming for, so they can do it together",false,"The textbook says to make choices that are right for you."],
      ["No goal at all until he reaches the action stage",false,"Even early in change, a goal such as learning about the risks is useful."]]},
    {id:"W2-TQ23",ch:"W2-C8",src:"Textbook Ch 1, p. 26",added:"2026-10-26",q:"Sam always buys chips from the same vending machine on his way to class, so he changes his route to avoid it. Which plan-of-action strategy is this?",opts:[
      ["Modify your environment",true,"If cues in your environment trigger the behaviour, control them. The textbook gives this vending machine example."],
      ["Control related habits",false,"That means changing a linked habit, like putting an exercise bike in front of the TV."],
      ["Reward yourself",false,"Rewards reinforce progress; changing his route removes a cue."],
      ["Involve the people around you",false,"That means telling friends and family and giving them a list of dos and don'ts."]]},
    {id:"W2-TQ24",ch:"W2-C8",src:"Textbook Ch 1, p. 26",added:"2026-10-26",q:"Which reward plan best fits the textbook's guidance?",opts:[
      ["Deciding in advance to see a movie after one week of avoiding unhealthy snacks",true,"Rewards should be planned, instant and real, tied to specific goals or subgoals, and preferably not food or alcohol."],
      ["A large dessert after every workout",false,"Rewards should preferably be unrelated to food or alcohol."],
      ["Picking a treat on the spot whenever she feels she deserves one",false,"The textbook says to decide in advance what each reward will be and how you will earn it."],
      ["One reward only, after the final goal is reached in six months",false,"The textbook ties rewards to subgoals too, so you get regular reinforcement."]]},
    {id:"W2-TQ25",ch:"W2-C8",src:"Textbook Ch 1, p. 26",added:"2026-10-26",q:"According to the textbook, why make a serious personal contract, and who should sign it as a witness?",opts:[
      ["It leads to more follow-through than a casual promise and helps prevent procrastination by setting dates; ideally someone actively helping with your program signs it.",true,"Both points are in the textbook's description of the contract."],
      ["It is legally binding, so it protects you if you break your plan; a lawyer or notary should sign it as the witness.",false,"It is a personal commitment, not a legal document."],
      ["It replaces the need for a health journal, and it works best when kept private so no one else signs it.",false,"The contract lists the tools you will use to monitor progress, such as a journal, and should be witnessed."],
      ["It lets you skip goal-setting; your doctor should sign it.",false,"The contract states your goal, and the witness is ideally someone helping with the program."]]},
    {id:"W2-TQ26",ch:"W2-C8",src:"Textbook Ch 1, p. 27",added:"2026-10-26",q:"Nadia skips her planned run and tells herself, \"It might rain later, and I'd hate to get my new shoes muddy.\" Which game is she playing?",opts:[
      ["Rationalizing",true,"Rationalizing is making excuses. When you win by deceiving yourself, it is not much of a victory."],
      ["Procrastinating",false,"Procrastinating is putting off the start, like waiting until Monday."],
      ["Blaming",false,"Blaming puts the fault on another person."],
      ["Visualization",false,"Visualization is a positive strategy for picturing success."]]},
    {id:"W2-TQ27",ch:"W2-C8",src:"Textbook Ch 1, p. 27",added:"2026-10-26",q:"Priya has quit smoking and keeps pushing her roommate to quit too. Her own plan is stalling. What does the textbook say?",opts:[
      ["Trying to change others is a trap; she can offer facts or support tactfully, but should focus on herself and may become a role model.",true,"The decision to make a major change comes only after intensive self-examination."],
      ["She should keep pushing, since social influences are the strongest tool for change.",false,"The textbook calls trying to change friends or family a trap."],
      ["She should drop her own plan until her roommate is ready.",false,"The textbook says to focus on yourself."],
      ["She should end the friendship right away.",false,"The textbook says to connect with others who are more supportive, not to cut people off."]]},
    {id:"W2-TQ28",ch:"W2-C8",src:"Textbook Ch 1, p. 27",added:"2026-10-26",q:"Halfway through her exercise plan, Grace catches a cold during the week a term paper is due. What does the textbook suggest for this stress barrier?",opts:[
      ["Because the stress is temporary, she may wait until it passes before strengthening her efforts.",true,"For temporary stress, waiting can make sense. For ongoing stress, find healthy ways to manage it."],
      ["She should drop the plan, since stress means she is not ready to change.",false,"The textbook does not say to quit."],
      ["She should double her workouts to make up for lost time.",false,"The textbook suggests waiting out temporary stress."],
      ["She should make stress management her new target behaviour right away.",false,"The textbook suggests this for ongoing stress, not a temporary cold and deadline."]]},
    {id:"W2-TQ29",ch:"W2-C8",src:"Textbook Ch 1, p. 20",added:"2026-10-26",q:"A news story says that drinking coffee is \"associated with\" a longer life. Which response follows the textbook's advice on evaluating health information?",opts:[
      ["Remember that 'associated with' does not prove cause and effect, check the original study, and do not change your behaviour on the basis of a single report.",true,"All three are textbook guidelines for judging health information."],
      ["Start drinking more coffee, since the study was reported in the news and a published finding is enough to act on.",false,"Do not change behaviour based on a single report or study."],
      ["Trust it if a friend says coffee helped him.",false,"Anecdotes are not facts."],
      ["Trust it if the article calls it a breakthrough, since strong wording means the evidence is strong.",false,"Words like 'breakthrough' and 'dramatic proof' are probably hype."]]}
  ],

  review:[
    {id:"W2-TR01",ch:"W2-C7",src:"Textbook Ch 1, pp. 4, 16",added:"2026-10-26",q:"Explain the two differences the textbook draws between health and wellness, and use the example of a person with a family history of disease to show why behaviour still matters.",answer:"Health is the overall condition of body or mind and the presence or absence of illness or injury, and some of it is shaped by factors beyond your control, such as genes, age and the health care system. Wellness is optimal health and vitality, and it is largely determined by the decisions you make about how you live. A woman with a family history of breast cancer has a nonmodifiable risk factor. She can still lower her chance of developing and dying from the disease by controlling her weight, eating well, exercising and having regular mammograms. In common diseases, genes only raise risk, so behaviour can tip the balance.",points:["Health: condition of body or mind; partly beyond your control","Wellness: optimal health and vitality; largely your decisions","Family history is nonmodifiable","Behaviour can tip the balance (weight, diet, exercise, screening)"]},
    {id:"W2-TR02",ch:"W2-C8",src:"Textbook Ch 1, pp. 22-24",added:"2026-10-26",q:"Define a lapse, a relapse and failure. Explain why the stages of change are drawn as a spiral, and describe the three steps for dealing with relapse.",answer:"A lapse is a single slip, and a relapse is a return to old habits. Failure is different: it means stopping before you reach your goal and never changing the target behaviour. People seldom move through the stages in a straight line; they slip back to earlier stages but are further along each time they renew their commitment, so the model is a spiral. To deal with a relapse, forgive yourself, give yourself credit for the progress you have made, and move on by learning from it. If relapses keep happening, go back to an earlier stage and re-evaluate your goals and strategy.",points:["Lapse = single slip; relapse = return to old habits","Failure = stopping and never changing","Spiral: cycle back but further along each time","Forgive yourself, give yourself credit, move on","Repeated relapse: return to an earlier stage and re-evaluate"]},
    {id:"W2-TR03",ch:"W2-C8",src:"Textbook Ch 1, p. 27",added:"2026-10-26",q:"Your behaviour change program is grinding to a halt. Describe the sources of obstacles the textbook lists under 'Staying with it' and what to do about each.",answer:"First check social influences: if the people you counted on are not supportive, connect with others who are, and do not try to change other people. If motivation and commitment are low, you may need to wait until the behaviour bothers you more, or change your goal. If the technique is wrong, change it, for example an aerobics class instead of running, or push harder. If stress is temporary, wait until it passes; if it is ongoing, manage it and perhaps make it your target. Finally, stop the games: procrastinating (break the plan into small daily steps), rationalizing (making excuses) and blaming (taking your focus off the real problem).",points:["Social influences: find supportive people; focus on yourself","Motivation and commitment: wait or change the goal","Technique and effort: switch method or push harder","Stress: wait out temporary stress; manage ongoing stress","Procrastinating, rationalizing, blaming"]}
  ]
});
