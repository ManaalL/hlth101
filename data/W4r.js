/* W4 reading supplement: Textbook Ch 2 "Psychological Health" (older Canadian edition of Core Concepts in Health, scanned, pp. 33 to 60).
   Focus: textbook content not on the slides, plus detail that sharpens slide topics. Edition-specific statistics avoided.
   Pages or passages not used (garbled OCR or interleaved columns):
   - p. 34: Figure 2.1 labels and margin glossary are garbled (Maslow is already covered by the slides).
   - pp. 36, 44, 47, 48, 52, 55, 58: "Quick Stats" sidebars are cut up and unreadable.
   - p. 48: Figure 2.2 (suicide rates by sex and age) is unreadable.
   - p. 49: "Could You Have a Mood Disorder?" box is partly scrambled; not used for questions.
   - p. 52: bipolar disorder glossary entry and the sentence on who it affects are garbled.
   - p. 56: "Antidepressant Use in Young People" box is partly interleaved; only the placebo effect idea is used.
   - p. 59: "Dealing with Social Anxiety" box is scrambled in order; not used for questions.
   Slide vs textbook differences (slides win; no question depends on these):
   - Erikson Table 2.1 important people: textbook says "Humankind" for older adulthood and "Neighbourhood and school" for 6 to 12 years; slides say "Society" and "Community".
   - Textbook "dysthymic disorder" = slides "persistent depressive disorder" (same definition, newer DSM name).
   - Textbook "social phobia" = slides "social anxiety disorder". This file uses the slide name where possible.
   - Textbook Table 2.2 lists 8 mechanisms; the slides list 12 (adds altruism, acting out, reaction formation, dissociation). Not a conflict.
   - Textbook prevalence figures (depression about 8% lifetime, GAD just over 1%, "anxiety disorders are the most common") differ from slide 4 figures. Not used.
   - Textbook defines assertiveness as "forceful but not hostile"; slides say "confident and direct but not hostile". Slide term kept; not redefined here.
*/
HLTH.extend("W4",{
  terms:[
    /* ---------- C6 ---------- */
    {id:"W4-T-tb-healthy-self-esteem",term:"Healthy self-esteem",def:"Regarding your self, which includes all aspects of your identity, as good, competent and worthy of love. The textbook calls it a critical component of wellness. Psychological health needs an appropriately high but realistic level of self-esteem, and self-acceptance includes tolerating your own imperfections.",src:"Textbook Ch 2, p. 38",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-demoralization",term:"Demoralization",def:"The worst reaction to a challenge to your self-concept: a lasting negative self-concept in which you feel bad, unloved and ineffective. Instead of coping, the person gives up, which reinforces the negative self-concept and starts a cycle of bad self-concept and failure. In people genetically predisposed to depression it can progress to further symptoms.",ex:"After one failed test, deciding you are hopeless and no longer studying at all.",src:"Textbook Ch 2, p. 39",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-inner-directed",term:"Inner-directed vs. other-directed",def:"Autonomous people are inner-directed: they find guidance from within, from their own rules and values, and have an internal locus of control and high self-efficacy. Other-directed people act mainly in response to pressure from others and tend to say what they think will make other people happy instead of their true feelings.",ex:"Saying honestly that you would rather not go to a party (inner-directed) vs. agreeing only because you think it will please your friends (other-directed).",src:"Textbook Ch 2, p. 35",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-identity-crisis",term:"Identity crisis",def:"Erikson's term for internal confusion about who you are, which happens without a personal identity. Until we have found ourselves we cannot have much self-esteem, because a self is not firmly in place.",src:"Textbook Ch 2, p. 37",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-moral-development",term:"Stages of moral development",def:"Young child: good is what brings immediate, tangible rewards and bad is whatever brings punishment. Older child: right and wrong are explained by authority figures and rules. Final stage, which not everyone reaches: right and wrong in abstract terms such as justice and virtue.",ex:"A values exercise from the textbook: write a draft of your own obituary as an honest, realistic appraisal, then ask how you will have to change to be the person you want to be.",src:"Textbook Ch 2, p. 37",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-realistic-vs-positive",term:"Realistic thinking vs. positive thinking",def:"Self-talk is the statements you make to yourself inside your own mind. Positive thinking means substituting a positive thought for a negative one. The textbook's approach is different: make your thoughts as logical and accurate as possible, based on the facts as you know them, not on snap judgments.",ex:"A friend is 30 minutes late. Neutral, realistic self-talk: 'He's never late. Something must be holding him up. I'll call and make sure everything is all right.'",src:"Textbook Ch 2, p. 40",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-self-fulfilling-prophecy",term:"Self-fulfilling prophecy",def:"Demoralized people can hold negative beliefs so firmly that their own behaviour makes the beliefs come true.",ex:"Concluding you are so boring that no one will like you, you stop socializing, and the belief becomes reality.",src:"Textbook Ch 2, p. 40",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-honest-communication",term:"Honest communication",def:"Recognize what you want to communicate, then express it clearly. Others can hardly meet your needs if they do not know them. Indirect statements may avoid a confrontation but are unfair because you are not clear about what you want.",ex:"'I feel like staying home tonight' may really mean 'Don't bother me' or may be opening a negotiation.",src:"Textbook Ch 2, p. 42",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-assertiveness-training",term:"Assertiveness training",def:"Learning to insist on your rights and bargain for what you want, including being able to say no or yes depending on the situation. It helps people who know what they want but do not say it because they fear a refusal, which they take as personal rejection.",src:"Textbook Ch 2, p. 42",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-loneliness",term:"Loneliness",def:"A passive feeling state. It may come from not knowing how to be happy alone, or from reading time alone as a sign of rejection. Fear of being alone is not the best reason to socialize, and rushing into a relationship can trade loneliness for worse problems. The remedy is to take action, such as joining a group around a real interest.",src:"Textbook Ch 2, pp. 42-43",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-ied",term:"Intermittent explosive disorder (IED)",def:"Anger that is explosive or misdirected. It is often accompanied by depression or another disorder. Like a child's tantrum, it leaves the person temporarily unable to think straight or act in their own interest; they may lash out, hurting someone or destroying property. Anyone who expresses anger this way should seek professional help.",src:"Textbook Ch 2, p. 43",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-reframing",term:"Reframing and distraction (own anger)",def:"Two strategies to head off explosive anger. Reframe: change what you are thinking, for example by considering that the other person's behaviour was not aimed at you, and avoid replaying past unjust criticism. Distract: count to 10, focus on your breathing, or take a cooling-off period, then return to the issue once you can think clearly.",ex:"A driver cuts in front of you. You consider that he did not see you or was rushing to an emergency.",src:"Textbook Ch 2, pp. 43-44",ch:"W4-C6",added:"2026-10-26"},
    {id:"W4-T-tb-asymmetrical-response",term:"Asymmetrical response to anger",def:"Anger is infectious, so respond to an angry person with calm, not anger. Validate that they have some reason to be angry (without apologizing if you are not to blame, and never accepting verbal abuse), focus on solving the problem, and if they cannot be calmed, disengage for a time-out.",src:"Textbook Ch 2, p. 44",ch:"W4-C6",added:"2026-10-26"},

    /* ---------- C7 ---------- */
    {id:"W4-T-tb-agoraphobia",term:"Agoraphobia",def:"An anxiety condition that can grow out of panic disorder: fear of attacks in places where escape is hard, loss of control would be dangerous or embarrassing, or no help is available spreads until the person is virtually housebound. Glossary: fear of being alone, away from help, with avoidance of many places and situations; in extreme cases, fear of leaving home.",ex:"People with panic disorder can often manage feared situations if someone they trust goes with them.",src:"Textbook Ch 2, p. 45",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-shyness",term:"Shyness",def:"A form of social anxiety: fear of what others will think of your behaviour or appearance. It is not the same as being introverted. Introverts prefer solitude; shy people often long to be more outgoing, but their negative thoughts get in the way. Help includes shyness classes, assertiveness groups, and for serious cases CBT and antidepressants.",src:"Textbook Ch 2, p. 46",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-mania",term:"Mania",def:"A less common feature of mood disorders. People are restless, have a lot of energy, need little sleep and often talk nonstop. They may take on fantastic projects and spend more money than they can afford. The chapter summary adds exalted mood with unrealistically high self-esteem.",src:"Textbook Ch 2, pp. 52, 60",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-dysthymic-disorder",term:"Dysthymic disorder",def:"The textbook's name for persistent symptoms of mild or moderate depression for two years or longer. The slides use the current name, persistent depressive disorder. Some depression is a clear reaction to an event such as a loss; in other cases no trigger is obvious.",src:"Textbook Ch 2, p. 48",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-sad",term:"Seasonal affective disorder (SAD)",def:"Depression that worsens in winter as daylight hours shrink and improves in spring and summer. It is more common at higher latitudes. It is treated with light therapy: sitting with eyes open in front of a bright light every morning, which may work by making the brain perceive a longer day.",src:"Textbook Ch 2, p. 51",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-ect",term:"Electroconvulsive therapy (ECT)",def:"Used for severe depression when other approaches, including medication and magnetic stimulation, have failed. An electrical impulse through electrodes on the head induces an epileptic-like seizure. Patients get an anaesthetic and a muscle relaxant. A typical course is three treatments a week for two to four weeks.",src:"Textbook Ch 2, p. 51",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-reuptake",term:"Neurotransmitter reuptake",def:"Neurotransmitters such as serotonin and norepinephrine are released into the synapse and attach to receptors on the next neuron. Their level depends on how much is released and how much is reabsorbed (reuptake) by the sending cell. Prozac, an SSRI, raises serotonin by slowing its reuptake.",src:"Textbook Ch 2, p. 52",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-mood-stabilizers",term:"Mood stabilizers",def:"Drugs such as lithium carbonate, valproic acid, lamotrigine and topiramate, taken to prevent the mood swings of bipolar disorder and certain kinds of schizophrenia. Tranquilizers are used for individual manic episodes.",src:"Textbook Ch 2, pp. 52, 54",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-antipsychotics",term:"Antipsychotics",def:"Older drugs (haloperidol, fluphenazine) and newer 'atypical' drugs (clozapine, olanzapine, risperidone and others) that reduce hallucinations and disordered thinking in schizophrenia, bipolar disorder and delirium, and calm agitated patients.",src:"Textbook Ch 2, p. 54",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-delusion",term:"Delusion",def:"A firmly held false belief, such as that your mind is controlled by outside forces, that people can read your mind, that you are a great personage, or that a group is persecuting you. One of the general characteristics of schizophrenia, with disorganized thoughts, inappropriate emotions, auditory hallucinations and deteriorating social and work functioning. None of these is always present.",src:"Textbook Ch 2, p. 53",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-exposure",term:"Exposure",def:"A behavioural technique for treating fear: the person deliberately and repeatedly enters the feared situation and stays in it until the fear begins to fade. Exposure to the real situation works best, but imagined or virtual reality exposure can also work.",ex:"Someone afraid of flying vividly imagines boarding and takeoff until the fear eases.",src:"Textbook Ch 2, p. 55",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-reinforcement",term:"Stimulus, response and reinforcement",def:"A stimulus is anything that causes a response; a response is a reaction to a stimulus; reinforcement increases the future probability of a response by following it with a reward. Behaviour therapy finds the reinforcements that keep an unwanted behaviour going and changes them.",ex:"Being asked to speak in class (stimulus), leaving the room (response), feeling instant relief (reinforcement for future avoidance).",src:"Textbook Ch 2, p. 55",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-placebo-effect",term:"Placebo effect",def:"People improve while taking pills that contain inactive compounds. The textbook reports it is significant in studies of depression and can exceed 30%.",src:"Textbook Ch 2, p. 56",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-self-injury",term:"Self-injury",def:"Cutting, burning, hitting or other self-inflicted harm, sometimes mistaken for a suicide attempt. A maladaptive coping strategy believed to relieve unbearable psychological distress, perhaps through the release of endorphins. It should be taken very seriously because it may signal an increased risk of suicide.",src:"Textbook Ch 2, p. 49",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-suicide-risk-factors",term:"Suicide warning signs and risk factors (textbook)",def:"Warning signs: expressing a wish to be dead or revealing planned methods, increasing social withdrawal and isolation, and a sudden, unexplained lightening of mood (which can mean the person has decided to act). Risk factors: previous attempts, suicide by a family member or friend, readily available means such as guns or pills, a history of substance abuse or eating disorders, and serious medical problems.",src:"Textbook Ch 2, p. 48",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-peer-counselling",term:"Peer counselling and support groups",def:"Peer counselling is usually done by volunteer students with special training that emphasizes confidentiality; they may steer you to a campus or community resource or simply listen. Support groups bring together people with a specific shared problem, such as eating disorders or substance abuse, to share experiences and support one another.",src:"Textbook Ch 2, p. 58",ch:"W4-C7",added:"2026-10-26"},
    {id:"W4-T-tb-self-help",term:"Self-help",def:"A smart first step for a personal problem. Behavioural and some cognitive approaches are especially useful: notice self-defeating actions and ideas and combat them by being more assertive, communicating honestly, countering negative thoughts, and confronting rather than avoiding what you fear. Journaling and, for some, religious practice can also help. Be selective with self-help books that make fantastic claims.",src:"Textbook Ch 2, pp. 57-58",ch:"W4-C7",added:"2026-10-26"}
  ],

  chapters:[
    /* ================= C6 ================= */
    {
      id:"W4-C6",title:"Reading: Meeting life's challenges",src:"Textbook Ch 2, pp. 34-44",added:"2026-10-26",
      blurb:"Textbook detail on self-esteem, demoralization, realistic self-talk, communication, loneliness and anger.",
      learn:"<b>Healthy self-esteem</b> means regarding yourself as good, competent and worthy of love. When a challenge hits, such as a failure or a rejection, the best response is to admit something went wrong and try again, adjusting your goals to your abilities. Denying the problem or blaming others is less productive. The worst response is <b>demoralization</b>: a lasting negative self-concept that sets up a cycle of failure.<br><br>To fight it, notice your thinking and use realistic self-talk. This is <i>not</i> positive thinking. The aim is thoughts that are logical and accurate, based on the facts you have. Otherwise negative beliefs can become <b>self-fulfilling prophecies</b>.<br><br>Defence mechanisms often work for a short time but make permanent solutions harder. Honest communication means knowing what you want and saying it clearly. Loneliness is a passive state, so take action. For your own anger, <b>reframe</b> and distract. For someone else's anger, respond <b>asymmetrically</b>, with calm. Explosive anger (IED) needs professional help.",
      summary:"Adjust goals instead of giving up, think accurately rather than just positively, say what you want clearly, and meet anger with reframing, distraction or calm.",
      steps:[
        {id:"W4-C6-S1",type:"sort",src:"Textbook Ch 2, p. 39",prompt:"A first-year student gets 52% on a midterm. Sort each reaction by how the textbook rates responses to a challenge to self-concept.",bins:["Best approach","Less productive","Worst: demoralization"],items:[
          ["'That study plan didn't work. I'll go to office hours and aim for 70 next time.'",0,"Acknowledge that something went wrong and try again."],
          ["'I'll keep my program but take a lighter course load so I can keep up.'",0,"Adjusting goals to your abilities without radically revising your self-concept."],
          ["'Nothing went wrong. That mark doesn't mean anything.'",1,"Denying that anything went wrong may protect self-concept for a while but keeps you from meeting the challenge."],
          ["'The prof wrote an unfair test. It's not on me.'",1,"Blaming someone else is a less productive response."],
          ["'I'm just not smart enough for university. There's no point studying for the final.'",2,"Giving up and feeling ineffective is demoralization."],
          ["'I fail at everything, so I've stopped going to class.'",2,"Giving up reinforces the negative self-concept and starts a cycle of failure."]
        ]},
        {id:"W4-C6-S2",type:"match",src:"Textbook Ch 2, p. 41 (Table 2.2)",prompt:"Match each new example to the Table 2.2 defence or coping mechanism it shows.",pairs:[
          ["After a fight with her manager, Priya snaps at her younger brother at dinner.","Displacement"],
          ["Omar resents his lab partner but is sure the lab partner resents him.","Projection"],
          ["Jess agrees to share notes with a classmate she competes with, then 'forgets' every week.","Passive-aggressive behaviour"],
          ["Leo, a heavy drinker, insists alcohol can't hurt him because he works out.","Denial"],
          ["Ana skips the club fair, telling herself the clubs are boring, when she is really afraid no one will talk to her.","Rationalization"],
          ["After failing to make the varsity team, Sam joins an intramural league instead.","Substitution"],
          ["When his laptop dies before a deadline, Ravi jokes that at least it picked a dramatic exit.","Humour"]
        ]},
        {id:"W4-C6-S3",type:"mcq",src:"Textbook Ch 2, pp. 39-40",case:"You are waiting for a friend at a restaurant. He is 30 minutes late and has not texted.",q:"Which self-talk matches the textbook's realistic, neutral approach?",opts:[
          ["'He's never late. Something must be holding him up. I'll call and check everything is OK.'",true,"This is the textbook's example: it recognizes a problem may exist but does not judge or assign blame."],
          ["'He isn't coming. He probably finds me boring.'",false,"Negative self-talk: it jumps to an unverified conclusion and personalizes the situation."],
          ["'Everything happens for a reason, and tonight will be amazing no matter what!'",false,"That is positive thinking, which the textbook says is not the same as realistic self-talk based on the facts."],
          ["'He's so inconsiderate. I'll leave and ignore his calls.'",false,"This places blame without knowing the facts."]]},
        {id:"W4-C6-S4",type:"mcq",src:"Textbook Ch 2, p. 44",case:"Your housemate storms into the kitchen shouting that you used all the hot water right before her exam.",q:"Which response follows the textbook's advice for dealing with anger in other people?",opts:[
          ["Stay calm, acknowledge she has some reason to be upset, and ask what would help right now.",true,"Respond asymmetrically with calm, validate her, and focus on solving the problem."],
          ["Raise your voice to match hers so she knows you won't be pushed around.",false,"Anger is infectious. The textbook says to react with calm, not anger."],
          ["Apologize over and over and accept any insults, since she is stressed.",false,"Validating does not mean apologizing if you are not to blame, and verbal abuse is always inappropriate."],
          ["Walk out and never raise the hot water issue again.",false,"Disengaging is a temporary last resort. A time-out does not mean permanently avoiding the issue."]]}
      ]
    },

    /* ================= C7 ================= */
    {
      id:"W4-C7",title:"Reading: Disorders, models of change and getting help",src:"Textbook Ch 2, pp. 44-58",added:"2026-10-26",
      blurb:"Textbook detail on anxiety and mood disorders, schizophrenia, suicide risk, the four models and where to get help.",
      learn:"The textbook adds detail to the anxiety disorders. A <b>simple phobia</b> is the most common and most understandable; fear of blood or injections usually comes from a tendency to faint. <b>Panic disorder</b> can spread into <b>agoraphobia</b>, where avoidance leaves a person nearly housebound. GAD worries are about ordinary concerns, while OCD obsessions are improbable fears. Simple phobias are best treated without drugs.<br><br>Depression usually involves demoralization, and loss of interest or pleasure seems to be universal. <b>Mania</b> brings high energy, little sleep and nonstop talk. A sudden, unexplained lightening of mood can be a suicide warning sign.<br><br>Each model leads to a therapy: biological (medication), behavioural (change reinforcements, use <b>exposure</b>), cognitive (test false ideas) and psychodynamic (speak freely to gain insight). Cognitive behavioural packages combine the middle two. For anxiety disorders, drugs and CBT work equally well, but CBT gains last longer.<br><br>Help ranges from self-help and peer counselling to support groups and mental health professionals.",
      summary:"Know how the anxiety disorders differ, the textbook's suicide warning signs and risk factors, how each model treats a problem, and the levels of help.",
      steps:[
        {id:"W4-C7-S1",type:"sort",src:"Textbook Ch 2, pp. 44-47",prompt:"Which anxiety disorder does each description fit best?",bins:["Simple phobia","Social anxiety (social phobia)","Panic disorder","Generalized anxiety disorder","Obsessive-compulsive disorder","PTSD"],items:[
          ["Feels faint and nauseated at the sight of a needle during a flu shot.",0,"Fear of blood or injections is a special kind of simple phobia, usually from a tendency to faint."],
          ["Has avoided high places ever since a fall from a ladder as a child.",0,"A fear of something definite, sometimes starting with a bad experience."],
          ["Turned down a promotion because it would mean presenting to clients.",1,"Fear of humiliation while being observed; people may restrict themselves to jobs that avoid it."],
          ["Gets sudden surges of pounding heart and breathlessness, and now avoids elevators and driving in case it happens there.",2,"Sudden unexpected surges of anxiety, then fear of places where escape is hard or loss of control is dangerous."],
          ["Lies awake worrying about next Friday's exam and how to pay for car repairs; the worry goes in circles.",3,"GAD worries are about ordinary concerns but take on a life of their own."],
          ["Fears having been contaminated by germs and washes their hands dozens of times a day.",4,"An improbable fear (obsession) with a repetitive action (compulsion)."],
          ["Since a serious car crash, has intrusive memories, nightmares and avoids anything linked to the crash.",5,"Reexperiencing the trauma and avoiding reminders are PTSD symptoms."],
          ["Checks again and again that the stove is off before leaving home.",4,"Repeated checking is a common compulsion."]
        ]},
        {id:"W4-C7-S2",type:"compare",src:"Textbook Ch 2, p. 55",prompt:"A student is afraid to speak in class. Decide which model each part of his treatment comes from.",
          a:{name:"Behavioural model",points:["Focuses on overt behaviour, not brain chemistry or thoughts","Treats problems as maladaptive behaviours or bad habits","Analyzes stimulus, response and reinforcement","Changes the reinforcements; uses exposure for fears"]},
          b:{name:"Cognitive model",points:["Emphasizes the effect of ideas on behaviour and feeling","Behaviour comes from attitudes, expectations and motives","Exposes and tests false ideas that cause anxiety","Substitutes realistic thoughts and repeatedly tests assumptions"]},
          scenarios:[
            ["He keeps a diary of each class contribution, how long he spoke and his anxiety level before, during and after.",0,"The textbook's behavioural program starts with a diary of the behaviour."],
            ["He asks himself whether one presentation will really change what classmates think of him.",1,"Critically examining an unrealistic expectation is cognitive therapy."],
            ["He rewards himself with time on a hobby each week he meets his speaking goal.",0,"Contracting to reward success changes the reinforcement."],
            ["He writes out the chain 'say something stupid, lose respect, get a low grade' and tests each link.",1,"Exposing and testing false ideas that produce anxiety is the cognitive approach."],
            ["He deliberately speaks up in every seminar until the fear starts to fade.",0,"Exposure is a behavioural technique."]
          ]},
        {id:"W4-C7-S3",type:"mcq",src:"Textbook Ch 2, pp. 48-49",case:"For a month, Dev has been withdrawn and hopeless and has skipped every social plan. This week he suddenly seems calm and cheerful, and he mentioned he 'won't be a problem much longer'.",q:"Which conclusion matches the textbook?",opts:[
          ["The sudden lightening of mood and his comment are warning signs. Ask him directly about suicide and get expert help.",true,"A sudden, unexplained lightening of mood can mean the person has decided to act. Asking direct questions is the best way to find out."],
          ["His mood has lifted, so the risk has passed.",false,"The textbook lists a sudden lightening of mood as a warning sign, not a sign of safety."],
          ["Asking about suicide could give him the idea, so avoid the topic.",false,"You won't give someone an idea they haven't already thought of."],
          ["He is probably just looking for attention, so wait and see.",false,"Most people who die by suicide have talked about it. Expert help is essential."]]},
        {id:"W4-C7-S4",type:"mcq",src:"Textbook Ch 2, p. 58",case:"Mia feels stressed about living away from home for the first time. Her marks are fine, she has no thoughts of suicide and no substance use problem. She wants someone confidential to listen and point her to resources.",q:"Which option fits the textbook's description best?",opts:[
          ["Campus peer counselling",true,"Trained student volunteers who emphasize confidentiality and may steer you to resources or simply listen."],
          ["A psychiatrist, to start medication",false,"Psychiatrists are the experts when a medical cause is suspected or medication or hospitalization is needed. None of the strong indications applies here."],
          ["An eating disorders support group",false,"Support groups are organized around a specific shared problem she does not have."],
          ["Nothing until her symptoms are severe",false,"Self-help and peer support are reasonable first steps. Waiting is not advised."]]}
      ]
    }
  ],

  questions:[
    /* ---------- C6 ---------- */
    {id:"W4-TQ01",ch:"W4-C6",src:"Textbook Ch 2, p. 39",added:"2026-10-26",q:"According to the textbook, what is the best way to react when a challenge hits your self-concept, such as failing at a goal?",opts:[
      ["Acknowledge that something went wrong and try again, adjusting your goals to your abilities.",true,"This is the textbook's best approach; it does not require radically revising your self-concept."],
      ["Deny that anything went wrong so your self-concept stays intact.",false,"Denial is a less productive response. It protects self-concept only temporarily."],
      ["Blame someone else so you can keep your goal unchanged.",false,"Blaming others is also listed as less productive."],
      ["Radically revise your self-concept so you are not disappointed again.",false,"The best approach adjusts goals without radically revising self-concept."]]},
    {id:"W4-TQ02",ch:"W4-C6",src:"Textbook Ch 2, p. 39",added:"2026-10-26",q:"Kai fails his driving test twice. He decides he is useless at everything, stops applying for jobs and no longer tries anything new. Which textbook term fits best?",opts:[
      ["Demoralization",true,"A lasting negative self-concept where the person gives up instead of coping, starting a cycle of failure."],
      ["Substitution",false,"Substitution deliberately replaces a frustrating goal with a more attainable one. Kai has given up on goals."],
      ["Rationalization",false,"Rationalization gives a false, acceptable reason for a choice. Kai is not offering an excuse."],
      ["Identity crisis",false,"An identity crisis is confusion about who you are, not giving up after failure."]]},
    {id:"W4-TQ03",ch:"W4-C6",src:"Textbook Ch 2, p. 40",added:"2026-10-26",q:"Ella is sure her new lab group finds her annoying, so she stops speaking in meetings. Soon the group stops asking for her opinion. What does the textbook call this pattern?",opts:[
      ["A self-fulfilling prophecy",true,"A negative belief held so firmly that the person's behaviour makes it come true."],
      ["Displacement",false,"Displacement shifts feelings about one person onto another."],
      ["Assertiveness",false,"Assertiveness would mean stating her views clearly, the opposite of what she did."],
      ["Altruism",false,"Altruism is serving others without expecting a return."]]},
    {id:"W4-TQ04",ch:"W4-C6",src:"Textbook Ch 2, p. 40",added:"2026-10-26",q:"How does the textbook distinguish realistic self-talk from positive thinking?",opts:[
      ["Realistic self-talk aims for logical, accurate thoughts based on the facts; positive thinking just swaps a negative thought for a positive one.",true,"The textbook says controlling your reactions this way 'is not the same as positive thinking'."],
      ["They are the same thing under different names.",false,"The textbook explicitly says they differ."],
      ["Realistic self-talk means always assuming the best about other people.",false,"It means sticking to the facts as you know them, not assuming the best or the worst."],
      ["Positive thinking is based on facts, while realistic self-talk is based on feelings.",false,"This reverses the idea. Realistic self-talk is the fact-based one."]]},
    {id:"W4-TQ05",ch:"W4-C6",src:"Textbook Ch 2, p. 35",added:"2026-10-26",q:"Whenever friends ask Lina's opinion, she says whatever she thinks will make them happy, even when she disagrees. In Maslow's terms as the textbook explains them, Lina is:",opts:[
      ["Other-directed",true,"Other-directed people act in response to outside pressure and say what they believe will please others."],
      ["Inner-directed",false,"Inner-directed people take guidance from their own rules and values."],
      ["Showing authenticity",false,"Authentic people respond in a real, spontaneous way without worrying about being judged."],
      ["Showing an internal locus of control",false,"An internal locus of control goes with autonomy and inner direction."]]},
    {id:"W4-TQ06",ch:"W4-C6",src:"Textbook Ch 2, p. 37",added:"2026-10-26",q:"An eight-year-old says lying is wrong 'because the teacher said so and it's against the rules.' Which stage of moral development does the textbook link to this?",opts:[
      ["The older child stage: right and wrong explained by authority figures and rules",true,"The textbook says an older child explains right and wrong in terms of authority figures and rules."],
      ["The young child stage: good means immediate rewards, bad means punishment",false,"That earliest stage is about rewards and punishment, not rules and authority."],
      ["The final stage: right and wrong in abstract terms such as justice and virtue",false,"The child is not reasoning about abstract principles."],
      ["Erikson's integrity vs. despair",false,"That is Erikson's stage for older adulthood, not a stage of moral reasoning."]]},
    {id:"W4-TQ07",ch:"W4-C6",src:"Textbook Ch 2, pp. 40, 42",added:"2026-10-26",q:"According to the textbook, what is the main drawback of many defence mechanisms?",opts:[
      ["They succeed temporarily but make finding permanent solutions harder.",true,"Stated directly with Table 2.2."],
      ["They are always deliberate, conscious choices.",false,"The textbook says they have often become habits that occur unconsciously."],
      ["Only people with psychological disorders use them.",false,"Everyone uses them when wants conflict with others or with conscience."],
      ["They work by changing the external situation.",false,"They resolve conflict internally by rearranging thoughts and feelings when the outside situation cannot be changed."]]},
    {id:"W4-TQ08",ch:"W4-C6",src:"Textbook Ch 2, p. 42",added:"2026-10-26",q:"Sasha says 'I feel like staying home tonight' when she really wants her partner to suggest a different plan. What problem does the textbook point out with this kind of statement?",opts:[
      ["It avoids a confrontation but is unfair because she is not clear about what she wants.",true,"Good communication means expressing yourself clearly."],
      ["It is too assertive and may sound hostile.",false,"The statement is indirect, not forceful."],
      ["It is an example of displacement.",false,"Displacement shifts feelings from one person to another."],
      ["There is no problem, because avoiding confrontation is always best.",false,"The textbook calls this approach unfair to the other person."]]},
    {id:"W4-TQ09",ch:"W4-C6",src:"Textbook Ch 2, p. 42",added:"2026-10-26",q:"Jon never asks his roommate to turn the music down, because he fears a 'no' would mean the roommate dislikes him. What does the textbook suggest could help?",opts:[
      ["Assertiveness training",true,"For people who fear a refusal and take it as personal rejection, learning to insist on their rights and bargain for what they want."],
      ["Antianxiety medication",false,"Nothing suggests a disorder; this is a communication skill problem."],
      ["Repressing his annoyance",false,"Repression is a defence mechanism that would leave the problem unsolved."],
      ["Waiting until the roommate notices on his own",false,"Others can hardly respond to our needs if they do not know them."]]},
    {id:"W4-TQ10",ch:"W4-C6",src:"Textbook Ch 2, pp. 42-43",added:"2026-10-26",q:"Which statement about loneliness matches the textbook?",opts:[
      ["Loneliness is a passive feeling state; if you are not spending enough time with people, take action to change it.",true,"The textbook suggests joining a group based on a genuine interest."],
      ["Fear of being alone is the best reason to spend time with others.",false,"The textbook says it is not the best reason to socialize."],
      ["Being alone is a reliable sign that others have rejected you.",false,"Reading time alone as rejection is a thinking pattern to examine."],
      ["Starting a close relationship as quickly as possible is the surest cure.",false,"Pressure to find a relationship may trade loneliness for worse problems."]]},
    {id:"W4-TQ11",ch:"W4-C6",src:"Textbook Ch 2, p. 43",added:"2026-10-26",q:"During arguments, Marc sometimes loses control, punches walls and once smashed a friend's phone. Afterward he says he 'couldn't think straight.' Which does the textbook describe, and what does it advise?",opts:[
      ["Intermittent explosive disorder; he should seek professional help.",true,"IED is explosive or misdirected anger that leaves people unable to think straight; anyone who expresses anger this way should get professional help."],
      ["Passive-aggressive behaviour; he should be more direct.",false,"Passive-aggressive behaviour is covert, not explosive."],
      ["Healthy venting; expressing anger protects the heart.",false,"Overtly hostile people seem to be at higher risk for heart attacks."],
      ["Displacement; he should yell at the person he is really angry with.",false,"His anger is aimed at the people he argues with, and yelling is not the advice."]]},
    {id:"W4-TQ12",ch:"W4-C6",src:"Textbook Ch 2, p. 43",added:"2026-10-26",q:"A driver cuts in front of you. Feeling your anger rise, you remind yourself that he may not have seen you, or may be rushing to an emergency. Which strategy is this?",opts:[
      ["Reframing",true,"Changing what you are thinking, for example by considering that the behaviour was not aimed at you."],
      ["Distraction",false,"Distraction is counting to 10, focusing on breathing or taking a cooling-off period."],
      ["Responding asymmetrically",false,"That is the strategy for dealing with another person's anger in front of you."],
      ["Rationalization",false,"Rationalization gives a false, acceptable reason for your own unacceptable motive."]]},
    {id:"W4-TQ13",ch:"W4-C6",src:"Textbook Ch 2, p. 37",added:"2026-10-26",q:"Noor has changed majors three times and says she doesn't know who she is or what she values. She feels she can't feel good about herself until she figures it out. Which term fits, and why does it affect her self-esteem?",opts:[
      ["Identity crisis; without a self firmly in place, a person cannot have much self-esteem.",true,"Erikson's term for internal confusion about who you are."],
      ["Demoralization; she has given up on all her goals.",false,"She is still searching, not giving up."],
      ["Self-actualization; she is fulfilling her potential.",false,"Self-actualization is the top of Maslow's hierarchy, not confusion about identity."],
      ["Generativity vs. self-absorption; she is focused on herself.",false,"That is Erikson's middle adulthood conflict, about doing things for others."]]},

    /* ---------- C7 ---------- */
    {id:"W4-TQ14",ch:"W4-C7",src:"Textbook Ch 2, p. 44",added:"2026-10-26",q:"Which anxiety disorder does the textbook call the most common and most understandable?",opts:[
      ["Simple (specific) phobia",true,"A fear of something definite, such as lightning, an animal or a location."],
      ["Generalized anxiety disorder",false,"GAD is described as excessive worry about ordinary concerns, not as the most common."],
      ["Obsessive-compulsive disorder",false,"Not described this way."],
      ["Panic disorder",false,"Not described this way."]]},
    {id:"W4-TQ15",ch:"W4-C7",src:"Textbook Ch 2, p. 45",added:"2026-10-26",q:"After several sudden attacks of pounding heart and dizziness, Rosa began avoiding malls, then buses, and now rarely leaves home unless her sister comes with her. What has developed?",opts:[
      ["Agoraphobia, arising from panic disorder",true,"Fears and avoidance spread until the person is virtually housebound; a trusted companion often helps."],
      ["Social anxiety disorder",false,"Social anxiety is fear of humiliation while being observed, not fear of panic attacks."],
      ["Generalized anxiety disorder",false,"GAD is ongoing worry about ordinary concerns, not avoidance after panic attacks."],
      ["A simple phobia of malls",false,"Her fear has spread to many places and is tied to the attacks."]]},
    {id:"W4-TQ16",ch:"W4-C7",src:"Textbook Ch 2, p. 46",added:"2026-10-26",q:"According to the textbook, what separates the obsessions of OCD from the worries of GAD?",opts:[
      ["Obsessions are improbable fears, such as of contamination or of suddenly committing an antisocial act; GAD worries are about ordinary concerns.",true,"The textbook draws exactly this contrast."],
      ["GAD worries come with repetitive rituals; obsessions do not.",false,"Rituals (compulsions) go with OCD."],
      ["Obsessions are usually about exams and money.",false,"Exams and money are the textbook's examples of GAD worries."],
      ["GAD worries can be stopped by an effort of will.",false,"GAD worries refuse banishment by any effort of will."]]},
    {id:"W4-TQ17",ch:"W4-C7",src:"Textbook Ch 2, p. 47",added:"2026-10-26",q:"According to the textbook, which anxiety disorder is best treated without drugs?",opts:[
      ["Simple phobias",true,"Both drugs and CBT work for panic disorder, OCD and GAD, but simple phobias are best treated without drugs."],
      ["Panic disorder",false,"Drug treatments and CBT are both effective."],
      ["Obsessive-compulsive disorder",false,"Drug treatments and CBT are both effective."],
      ["Generalized anxiety disorder",false,"Drug treatments and CBT are both effective."]]},
    {id:"W4-TQ18",ch:"W4-C7",src:"Textbook Ch 2, p. 46",added:"2026-10-26",q:"Ben prefers quiet evenings alone and has no wish to be more social. Cal wishes he could join conversations, but his negative thoughts stop him. Which is correct?",opts:[
      ["Ben is introverted; Cal is shy.",true,"Introverts prefer solitude. Shy people often long to be more outgoing but their negative thoughts get in the way."],
      ["Both are shy.",false,"Ben does not want more social contact, so he is not shy by the textbook's definition."],
      ["Ben is shy; Cal is introverted.",false,"This reverses the definitions."],
      ["Cal has agoraphobia.",false,"Agoraphobia is avoidance of places linked to panic, not social self-consciousness."]]},
    {id:"W4-TQ19",ch:"W4-C7",src:"Textbook Ch 2, pp. 48, 60",added:"2026-10-26",q:"Which symptom of depression does the textbook say seems to be universal?",opts:[
      ["Loss of interest or pleasure in things",true,"People can have depression without feeling depressed, but they usually lose interest or pleasure."],
      ["Poor appetite and weight loss",false,"Some people instead eat too much."],
      ["Insomnia",false,"Some people instead sleep too long."],
      ["Feeling sad",false,"People can have most symptoms of depression without feeling depressed."]]},
    {id:"W4-TQ20",ch:"W4-C7",src:"Textbook Ch 2, p. 52",added:"2026-10-26",q:"For a week, Tia has slept about three hours a night, talks nonstop, has launched three business ideas and maxed out her credit card. Which does this describe?",opts:[
      ["Mania",true,"Restless, lots of energy, little need for sleep, nonstop talk, fantastic projects and overspending."],
      ["Generalized anxiety disorder",false,"GAD is persistent worry, not elevated energy and mood."],
      ["Dysthymic disorder",false,"That is long-lasting mild or moderate depression."],
      ["Agoraphobia",false,"Agoraphobia is avoidance of places, not elevated mood."]]},
    {id:"W4-TQ21",ch:"W4-C7",src:"Textbook Ch 2, p. 51",added:"2026-10-26",q:"Every November, Erik in Yellowknife feels low and sluggish, and every spring he feels better. Which treatment does the textbook describe for this pattern?",opts:[
      ["Sitting in front of a bright light every morning",true,"Light therapy for SAD may work by making the brain perceive a longer day."],
      ["Electroconvulsive therapy as the first step",false,"ECT is for severe depression when other approaches have failed."],
      ["Antipsychotic medication",false,"Antipsychotics target hallucinations and disordered thinking."],
      ["St. John's wort instead of seeing a doctor",false,"The textbook advises a medical evaluation rather than self-treating with supplements."]]},
    {id:"W4-TQ22",ch:"W4-C7",src:"Textbook Ch 2, p. 52",added:"2026-10-26",q:"How does the antidepressant Prozac (an SSRI) raise serotonin levels in the synapse?",opts:[
      ["By slowing the reuptake of serotonin by the sending neuron",true,"Figure 2.3: neurotransmitter levels depend on how much is released and how much is reabsorbed."],
      ["By blocking serotonin receptors on the receiving neuron",false,"Blocking receptors would reduce the signal."],
      ["By inhibiting the enzyme monoamine oxidase",false,"That is how MAOIs such as Nardil work."],
      ["By making the axon grow longer",false,"Not a mechanism in the textbook."]]},
    {id:"W4-TQ23",ch:"W4-C7",src:"Textbook Ch 2, p. 53",added:"2026-10-26",q:"Lucas firmly believes the RCMP is tracking him and that his neighbours can read his mind, yet he speaks logically on other topics. Which feature of schizophrenia is this?",opts:[
      ["Delusions",true,"Firmly held false beliefs. Some people with schizophrenia are logical except on the subject of their delusions."],
      ["Auditory hallucinations",false,"Hallucinations are hearing voices when no one is present."],
      ["Inappropriate emotions",false,"That is emotion that is absent or strong but inappropriate."],
      ["Mania",false,"Mania is a mood state with high energy, not a fixed false belief."]]},
    {id:"W4-TQ24",ch:"W4-C7",src:"Textbook Ch 2, p. 55",added:"2026-10-26",q:"A therapist notes that each time Ana leaves a party early, she feels instant relief, and now she leaves sooner each time. Therapy focuses on changing what keeps the leaving going. Which model guides this?",opts:[
      ["Behavioural",true,"Analyzes stimulus, response and reinforcement and changes the reinforcement that keeps the behaviour going."],
      ["Cognitive",false,"The cognitive model would target her ideas and expectations."],
      ["Psychodynamic",false,"The psychodynamic model seeks insight into unconscious ideas."],
      ["Biological",false,"The biological model would use medication."]]},
    {id:"W4-TQ25",ch:"W4-C7",src:"Textbook Ch 2, p. 57",added:"2026-10-26",q:"Which statement about evaluating the models is NOT true, according to the textbook?",opts:[
      ["For anxiety disorders, drug therapy gives longer-lasting improvement than cognitive behavioural therapy.",true,"This is the false one. Drug effects last only while the drug is taken; CBT gives longer-term improvement."],
      ["Cognitive behavioural packages combine effective elements of the behavioural and cognitive models.",false,"True. For example, social anxiety treatment combines exposure with changing thinking patterns."],
      ["For schizophrenia, drug therapy is necessary, but a continuing relationship with therapists is also indispensable.",false,"True as stated in the textbook."],
      ["Psychodynamic therapies have been criticized as ineffective and endless.",false,"True. The textbook adds that their effectiveness is hard to demonstrate."]]},
    {id:"W4-TQ26",ch:"W4-C7",src:"Textbook Ch 2, p. 49",added:"2026-10-26",q:"A friend tells you she sometimes cuts herself when stress feels unbearable, but says she is not suicidal. What does the textbook say about this?",opts:[
      ["Take it very seriously; self-injury is a maladaptive coping strategy that may signal increased suicide risk.",true,"Self-harm should be taken very seriously, and psychotherapy can help."],
      ["It is harmless because it relieves stress.",false,"It is a maladaptive coping strategy, not harmless."],
      ["It is the same thing as a suicide attempt.",false,"It is sometimes mistaken for a suicide attempt but is described separately."],
      ["Ignore it, since she says she is not suicidal.",false,"It may signal increased risk, so it should not be ignored."]]},
    {id:"W4-TQ27",ch:"W4-C7",src:"Textbook Ch 2, p. 51",added:"2026-10-26",q:"Which statement does the textbook's suicide myths box identify as a myth?",opts:[
      ["People who survive a suicide attempt did not really intend to die.",true,"Myth. People who seriously want to die may fail because they misjudge what it takes."],
      ["Most people who eventually die by suicide have talked about doing it.",false,"This is the fact used to correct a different myth."],
      ["Someone determined to die today may change their mind tomorrow.",false,"Stated as fact: few people are single-minded about suicide."],
      ["Many suicides are by people who do not meet ordinary criteria for mental illness.",false,"Stated as fact."]]},
    {id:"W4-TQ28",ch:"W4-C7",src:"Textbook Ch 2, p. 48",added:"2026-10-26",q:"Which of these does the textbook list as a risk factor for suicide, rather than a warning sign?",opts:[
      ["Readily available means, such as guns or pills",true,"Listed with previous attempts, a suicide by a family member or friend, substance abuse or eating disorders, and serious medical problems."],
      ["A sudden, unexplained lightening of mood",false,"This is listed as a warning sign."],
      ["Increasing social withdrawal and isolation",false,"This is listed as a warning sign."],
      ["Expressing a wish to be dead",false,"This is listed as a warning sign."]]},
    {id:"W4-TQ29",ch:"W4-C7",src:"Textbook Ch 2, p. 58",added:"2026-10-26",q:"According to the textbook, who usually provides peer counselling at universities?",opts:[
      ["Volunteer students with special training that emphasizes confidentiality",true,"They may refer you to a campus or community resource or simply offer a sympathetic ear."],
      ["Psychiatrists",false,"Psychiatrists are medical doctors, not peers."],
      ["Clinical psychologists with a PhD",false,"These are mental health professionals."],
      ["Members of a support group for a specific problem",false,"Support groups are a separate option organized around a shared problem."]]},
    {id:"W4-TQ30",ch:"W4-C7",src:"Textbook Ch 2, p. 57",added:"2026-10-26",q:"Which approaches does the textbook say are especially useful for helping yourself?",opts:[
      ["Behavioural and some cognitive approaches",true,"They involve noticing self-defeating actions and ideas and combating them, for example by confronting rather than avoiding fears."],
      ["Psychodynamic approaches",false,"These depend on speaking freely in front of a therapist."],
      ["Self-treating with herbal supplements such as St. John's wort",false,"The textbook advises a medical evaluation instead of self-treating."],
      ["Pharmacological approaches",false,"Medications require a prescription from a psychiatrist or other medical doctor."]]}
  ],

  review:[
    {id:"W4-TR01",ch:"W4-C6",src:"Textbook Ch 2, pp. 39-40",added:"2026-10-26",q:"A friend is 30 minutes late for dinner. Using the textbook, contrast negative self-talk, positive thinking and realistic self-talk in this situation, and explain how negative self-talk can lead to demoralization.",
      answer:"Negative self-talk jumps to a conclusion and assigns blame: 'He isn't coming; he probably finds me boring.' Positive thinking simply swaps in a cheerful thought, which the textbook says is not the goal. Realistic self-talk sticks to the facts as you know them: 'He's never late, so something must be holding him up; I'll call.' Repeated negative self-talk feeds cognitive distortions and can become a self-fulfilling prophecy, for example avoiding people because you expect to be disliked. Over time this can produce demoralization, a lasting negative self-concept where the person gives up and starts a cycle of failure.",
      points:["Negative self-talk judges, blames and jumps to unverified conclusions","Positive thinking substitutes a positive thought; realistic self-talk aims for logical, accurate thoughts","Gives a realistic, neutral example","Self-fulfilling prophecy: behaviour makes the negative belief come true","Demoralization: lasting negative self-concept, giving up, cycle of failure"]},
    {id:"W4-TR02",ch:"W4-C6",src:"Textbook Ch 2, pp. 43-44",added:"2026-10-26",q:"Describe the textbook's strategies for managing your own anger and for dealing with anger in other people. When is professional help needed?",
      answer:"For your own anger, the textbook suggests reframing: change what you are thinking, for example by considering that the other person's behaviour was not aimed at you. Until you can change your thinking, distract yourself by counting to 10, focusing on your breathing or taking a cooling-off period, then return to the issue later. With an angry person, respond asymmetrically with calm, validate that they have some reason to be angry without apologizing if you are not to blame or accepting abuse, and focus on solving the problem. If they cannot be calmed, disengage for a time-out. Explosive or misdirected anger, called intermittent explosive disorder, calls for professional help.",
      points:["Reframing your thoughts about the other person's intent","Distraction: count to 10, breathing, cooling-off period","Asymmetrical response: calm, validate, problem-solve, disengage if needed","Validation does not mean apologizing or accepting verbal abuse","IED (explosive, misdirected anger) needs professional help"]},
    {id:"W4-TR03",ch:"W4-C7",src:"Textbook Ch 2, pp. 55-57",added:"2026-10-26",q:"A student is afraid to speak in class. Explain how the behavioural, cognitive and psychodynamic models would each approach the problem, and what the textbook says about combining them.",
      answer:"The behavioural model sees the fear as a bad habit kept going by reinforcement: leaving the situation brings relief, which rewards avoidance. Therapy uses a diary, realistic goals, self-rewards and exposure, entering the feared situation repeatedly until fear fades. The cognitive model targets false ideas such as 'If I speak I'll sound stupid, everyone will lose respect for me and I'll fail,' and teaches the student to test these assumptions and substitute realistic thoughts. The psychodynamic model holds that such thoughts are fed by unconscious ideas, so the student would speak freely with a therapist to gain insight. Cognitive behavioural therapy packages combine exposure with changing thinking patterns and produce significant improvement, with longer-lasting effects for anxiety than drugs alone.",
      points:["Behavioural: stimulus, response, reinforcement; exposure and rewards","Cognitive: identify and test false ideas, substitute realistic thoughts","Psychodynamic: unconscious ideas, speak freely, gain insight","CBT packages combine exposure with changing thinking","For anxiety, CBT gains last longer than drug effects"]}
  ]
});
