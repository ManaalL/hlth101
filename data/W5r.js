/* W5 readings supplement: Textbook Ch 3, Stress: The Constant Challenge (pp. 65 to 90).
   Source is an older Canadian edition (OCR scan). Concepts only; edition statistics left out.
   Pages or passages that could not be read cleanly (skipped):
   - p. 65: Test Your Knowledge quiz is partly garbled.
   - p. 67: "How High Is Your Stress Level?" box is interleaved with body text.
   - p. 70: Table 3.1 (Symptoms of Excess Stress): column placement of several items is unclear in the OCR. Not used.
   - p. 71: Heart and Stroke report card grades box is scrambled. Not used.
   - p. 78: "Diverse Populations, Discrimination, and Stress" box is partly scrambled. Only the acculturation sentence is used.
   - p. 82: part of the insomnia paragraph and Fig 3.4 labels are garbled.
   - p. 85: end of the meditation paragraph is garbled.
   - p. 89: Fig 3.5 (handwritten stress journal) is hard to read. Not used.
   Slide vs textbook differences (slides win; no questions written on these points):
   - Changing personality: W5 Part 2 slides say you can change some elements of personality. Textbook p. 70 says changing personality traits "isn't likely", though behaviours and thinking patterns can change. No question on this.
   - Fourth cause of high allostatic load: slides say "inadequate response that leads to hyperactivity in other systems"; textbook p. 73 says "imbalances in the stress response of different body systems". Not tested here.
   - Acute stress and white blood cells: slides say they move "into the periphery"; textbook p. 73 says "into the skin". Not tested here.
   - GAS: slides say it was replaced by allostatic load; textbook p. 73 says GAS is still valued as a conceptual contribution, with some aspects outdated. Not tested here.
   - Effective and ineffective behavioural responses: textbook p. 69 lists talking, laughing, exercising, meditating, time management and assertiveness (effective) and overeating, expressing hostility, tobacco, alcohol or other drugs (ineffective). The slide lists differ in part (procrastination, frustration, self-medicating). Not a contradiction; questions use the textbook lists only where they agree in spirit.
   - The textbook spells the name "Seyle", like the slides. The W5 file uses Selye. Not named here.
*/
HLTH.extend("W5",{
  terms:[
    /* W5-C8 */
    {id:"W5-T-tb-hormone",term:"Hormone",def:"A chemical messenger produced in the body and transported in the bloodstream to target cells or organs for specific regulation of their activities.",ex:"Cortisol and epinephrine are hormones released during the stress response.",src:"Textbook Ch 3, p. 66",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-norepinephrine",term:"Norepinephrine (noradrenaline)",def:"A neurotransmitter released by the sympathetic nervous system onto specific tissues to increase their function during increased activity. When released by the brain, it causes arousal: increased attention, awareness, and alertness. Sympathetic nerves use it to act on nearly every organ, sweat gland, blood vessel, and muscle.",src:"Textbook Ch 3, p. 66",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-endorphins",term:"Endorphins",def:"Brain secretions that have pain-inhibiting effects. During the fight-or-flight reaction the brain releases them in case you are injured.",ex:"Hearty laughter also triggers the release of endorphins.",src:"Textbook Ch 3, pp. 67, 84",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-behavioural-responses",term:"Behavioural responses to stressors",def:"Responses controlled by the somatic nervous system, which manages conscious actions, so they are entirely under our control. The textbook lists effective responses (talking, laughing, exercising, meditating, learning time management, becoming more assertive) and ineffective ones (overeating, expressing hostility, using tobacco, alcohol, or other drugs).",ex:"Amelia takes a deep breath and answers the questions she knows first; David lets his anxiety build until he stares into space.",src:"Textbook Ch 3, p. 69",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-type-a",term:"Type A personality",def:"Described as ultracompetitive, controlling, impatient, aggressive, and even hostile. Type A people have a higher perceived stress level, more problems coping, and react explosively to minor annoyances. Anger, cynicism, and hostility increase the risk of heart disease.",src:"Textbook Ch 3, p. 69",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-type-b",term:"Type B personality",def:"Relaxed and contemplative. Type B people are less frustrated by daily events and more tolerant of the behaviour of others.",src:"Textbook Ch 3, p. 69",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-type-c",term:"Type C personality",def:"Characterized by anger suppression, difficulty expressing emotions, feelings of hopelessness and despair, and an exaggerated response to minor stressors. This heightened response may impair immune functions.",src:"Textbook Ch 3, p. 69",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-type-d",term:"Type D (distressed) personality",def:"A newer personality construct: a joint tendency to feel (but not express) negative emotions and to avoid social contact. These people tend to be gloomy, socially inept, anxious worriers, a combination that puts them at risk for heart problems.",src:"Textbook Ch 3, p. 69",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-hardiness",term:"Hardiness",def:"A particular form of optimism. Hardy people view potential stressors as challenges and opportunities for growth and learning, not burdens. They are committed to their activities, have a sense of inner purpose and an inner locus of control, and feel at least partly in control of their lives.",src:"Textbook Ch 3, p. 70",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-resilience-types",term:"Three types of resilience",def:"Nonreactive resilience: the person does not react to a stressor. Homeostatic resilience: the person may react strongly but returns to baseline functioning quickly. Positive growth resilience: the person learns and grows from the stress experience.",src:"Textbook Ch 3, p. 70",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-gender-role",term:"Gender role",def:"A culturally expected pattern of behaviour and attitudes determined by a person's sex. Strict adherence to gender roles can limit a person's response to stress, can itself become a source of stress, and can affect how a stressor is perceived.",ex:"A man who gets most of his self-worth from work may find retirement more stressful than a woman whose self-image rests on several roles.",src:"Textbook Ch 3, p. 70",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-tend-and-befriend",term:"Tend and befriend",def:"The pattern of responding to stressors by seeking social support. Research suggests women are more likely than men to respond this way.",src:"Textbook Ch 3, p. 72",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-atherosclerosis",term:"Atherosclerosis",def:"A disease in which blood vessels become damaged and caked with fatty deposits that can block arteries and cause heart attacks and strokes. Chronic high blood pressure from the stress response is a major cause.",src:"Textbook Ch 3, p. 74",ch:"W5-C8",added:"2026-10-26"},
    {id:"W5-T-tb-stress-cardiomyopathy",term:"Stress cardiomyopathy",def:"Also called broken heart syndrome: a condition caused by the stress response that mimics a heart attack but does not damage the heart.",src:"Textbook Ch 3, p. 74",ch:"W5-C8",added:"2026-10-26"},

    /* W5-C9 */
    {id:"W5-T-tb-major-life-changes",term:"Major life changes",def:"Any major change that requires adjustment and accommodation. Even positive changes such as graduation, a job promotion, or marriage can be stressful. A strong support network and a stress-resistant personality make illness less likely after life changes.",ex:"Moving out of the family home for university.",src:"Textbook Ch 3, p. 75",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-daily-hassles",term:"Daily hassles",def:"Minor problems such as losing your keys or wallet. Researchers propose they can be an even greater source of stress than major life changes because they occur much more often. People who perceive hassles negatively have a moderate stress response each time.",src:"Textbook Ch 3, p. 75",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-burnout",term:"Burnout",def:"A state of physical, mental, and emotional exhaustion that can result from severe or chronic job-related (or school-related) stress. It occurs most often in highly motivated, driven people who feel their work is not recognized or that they are not reaching their goals. People in the helping professions are prone to it.",ex:"Remedies include a vacation or leave, a reduced schedule, better communication with superiors, a change in job goals, or better time management.",src:"Textbook Ch 3, p. 77",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-acculturation",term:"Acculturation",def:"The process recent immigrants go through to live in a new society, balancing changing to be like the majority with keeping a connection to their own culture, language, and religion. It is generally stressful, especially when the person's background is very different.",src:"Textbook Ch 3, p. 78",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-environmental-stress",term:"Environmental stress",def:"A condition or event in the physical environment that causes stress. Mild examples are easy to avoid, such as a noisy restaurant; some are unavoidable daily stressors, such as pollen or construction noise. Severe examples include natural disasters, acts of violence, and industrial accidents.",src:"Textbook Ch 3, p. 78",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-internal-stressors",term:"Internal stressors",def:"Stressors found within ourselves. Reasonable goals can build self-esteem, but unrealistic expectations are a significant source of stress. Physical and emotional states such as illness and exhaustion are also internal stressors and can be both a cause and an effect of unmanaged stress.",ex:"Expecting to earn 100% on every test.",src:"Textbook Ch 3, pp. 78-79",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-assertive-communication",term:"Assertive communication",def:"Communicating your wants and needs in a way that respects the rights of others while protecting your own. People who suppress their feelings may benefit from assertiveness training; people who have trouble controlling anger may benefit from anger-management strategies.",src:"Textbook Ch 3, p. 80",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-overtraining",term:"Overtraining",def:"A risk for people who exercise compulsively, characterized by fatigue, irritability, depression, and diminished athletic performance. An overly strenuous program can compromise immune function.",src:"Textbook Ch 3, p. 81",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-insomnia",term:"Insomnia",def:"Trouble falling asleep or staying asleep. The most common causes are lifestyle factors, such as high caffeine or alcohol intake before bedtime. Many people with chronic insomnia report a stressful life event at its onset.",src:"Textbook Ch 3, p. 82",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-sleep-apnea",term:"Sleep apnea",def:"A chronic sleep problem in which a person stops breathing while asleep, usually because soft tissue at the back of the mouth collapses and blocks the airway. The sleeper wakes repeatedly to start breathing again, often without being aware of it.",src:"Textbook Ch 3, p. 82",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-problem-solving",term:"Problem solving (8 steps)",def:"A cognitive technique: 1 define the problem in one or two sentences; 2 identify its causes; 3 consider all solutions; 4 weigh positive and negative consequences of each; 5 make a decision; 6 list what you need to do; 7 begin to carry out the list; 8 evaluate the outcome and revise if needed.",src:"Textbook Ch 3, p. 84",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-progressive-relaxation",term:"Progressive relaxation",def:"Also called deep muscle relaxation. You tense and then relax the muscles of the body group by group, breathing in as you tense and out as you relax. Unlike most relaxation techniques, it needs no imagination, willpower, or self-suggestion.",src:"Textbook Ch 3, p. 85",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-mindfulness-meditation",term:"Mindfulness meditation",def:"A form of meditation that involves paying attention to physical sensations, perceptions, thoughts, and imagery. Instead of focusing on a word or object to quiet the mind, you observe the thoughts that occur without evaluating or judging them.",src:"Textbook Ch 3, p. 86",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-diaphragmatic-breathing",term:"Diaphragmatic breathing",def:"Slower, deeper stomach breathing with free expansion of the diaphragm and lower abdomen. It is the breathing pattern of children and sleeping adults. Many breathing exercises aim to shift people from chest breathing to this pattern.",src:"Textbook Ch 3, p. 86",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-biofeedback",term:"Biofeedback",def:"A technique in which monitoring devices help a person become conscious of unconscious body processes, such as body temperature or blood pressure, to exert some control over them. The goal is to learn how relaxation feels and transfer the skill to daily life without the equipment.",ex:"A tone gets louder as heart rate rises and softer as it falls.",src:"Textbook Ch 3, p. 87",ch:"W5-C9",added:"2026-10-26"},
    {id:"W5-T-tb-systematic-desensitization",term:"Systematic desensitization",def:"A method for test anxiety based on the premise that you cannot feel anxiety and be relaxed at the same time. Phase I: build an anxiety hierarchy of ten or more situations. Phase II: learn muscle relaxation. Phase III: imagine each situation while relaxed, from least to most tense. Success rehearsal is a variation in which you imagine yourself dealing with each situation successfully.",src:"Textbook Ch 3, p. 90",ch:"W5-C9",added:"2026-10-26"}
  ],

  chapters:[
    {
      id:"W5-C8",title:"Reading: The stress response and health",src:"Textbook Ch 3, pp. 65-75",added:"2026-10-26",
      blurb:"Textbook detail on the physical response, personality types, hardiness, resilience, PNI and stress-linked conditions.",
      learn:"During stress, the sympathetic nervous system triggers the endocrine system. Sympathetic nerves use <b>norepinephrine</b> on nearly every organ, and hormones such as cortisol and epinephrine drive the fight-or-flight changes. The same basic set of reactions occurs for any stressor: positive or negative, physical or psychological.<br><b>Behavioural responses</b> are controlled by the somatic nervous system, so they are under our control. Personality types: <b>Type A</b> (competitive, impatient, hostile; anger, cynicism and hostility raise heart disease risk), <b>Type B</b> (relaxed), <b>Type C</b> (suppressed anger, hopelessness; may impair immunity), <b>Type D</b> (feels but does not express negative emotions, avoids people; heart risk). <b>Hardiness</b> and three types of <b>resilience</b> (nonreactive, homeostatic, positive growth) help people cope.<br>In GAS, the response is the same for eustress and distress. <b>PNI</b> holds that stress impairs immunity through the nervous and endocrine systems. Chronic stressors such as unemployment harm almost all measures of immunity. Stress also raises inflammation, which damages blood vessels.",
      summary:"Personality shapes stress: hostility (Type A) and unexpressed negative emotion (Type D) raise heart risk, while hardiness and resilience protect. Chronic stress harms immunity and the heart.",
      steps:[
        {id:"W5-C8-S1",type:"match",src:"Textbook Ch 3, pp. 69-70",prompt:"Match each personality pattern to its textbook description.",pairs:[
          ["Type A","Ultracompetitive, impatient and hostile; reacts explosively"],
          ["Type B","Relaxed and contemplative; tolerant of others"],
          ["Type C","Suppresses anger, feels hopeless, overreacts to minor stressors"],
          ["Type D","Feels but does not express negative emotions; avoids social contact"],
          ["Hardiness","Sees stressors as challenges; inner locus of control"],
          ["Positive growth resilience","Learns and grows from the stress experience"]
        ]},
        {id:"W5-C8-S2",type:"sort",src:"Textbook Ch 3, p. 74",prompt:"Sort each stress-linked problem into the textbook's category.",bins:["Cardiovascular disease","Psychological problems","Immune system changes","Other health problems"],items:[
          ["Chronic high blood pressure leading to atherosclerosis",0,"Chronic high blood pressure is a major cause of atherosclerosis, which can block arteries."],
          ["Stress cardiomyopathy that mimics a heart attack",0,"Listed under cardiovascular disease: it mimics a heart attack but does not damage the heart."],
          ["Raised C-reactive protein (CRP), a marker of CVD risk",0,"Stress-induced inflammation is linked to raised CRP and homocysteine, markers for CVD risk."],
          ["Excess PKC hurting focus and judgment",1,"Stress activates the enzyme PKC, which acts on the prefrontal cortex. Listed under psychological problems."],
          ["Post-traumatic stress disorder",1,"Listed under psychological problems, along with depression, panic attacks, anxiety and eating disorders."],
          ["Asthma and allergy attacks",2,"Listed among problems linked to stress-related changes in immune function."],
          ["Flare-ups of genital herpes",2,"Flare-ups of chronic diseases such as genital herpes and HIV infection are linked to immune changes."],
          ["Irritable bowel syndrome and ulcers",3,"Digestive problems are listed under other health problems."],
          ["Repetitive strain injuries at work",3,"Injuries, including on-the-job repetitive strain, are listed under other health problems."]
        ]},
        {id:"W5-C8-S3",type:"mcq",src:"Textbook Ch 3, p. 70",ch:"W5-C8",added:"2026-10-26",
          case:"Right after a minor car accident, Jae is shaken: he cries and cannot sleep that night. Two days later he is back to his usual mood and routine.",
          q:"Which type of resilience does Jae show?",
          opts:[
            ["Homeostatic resilience",true,"He reacts strongly but returns to baseline functioning quickly."],
            ["Nonreactive resilience",false,"Nonreactive means not reacting to the stressor. Jae reacted strongly."],
            ["Positive growth resilience",false,"Positive growth means learning and growing from the experience. Nothing shows growth, only a quick return to normal."],
            ["Hardiness",false,"Hardiness is a form of optimism that views stressors as challenges. It is not one of the three types of resilience."]
          ]},
        {id:"W5-C8-S4",type:"mcq",src:"Textbook Ch 3, p. 73",ch:"W5-C8",added:"2026-10-26",
          case:"Kai is generally pessimistic. When he gets sick he stays passive, skips follow-up appointments, and has stopped exercising.",
          q:"How does the textbook connect this pattern to health?",
          opts:[
            ["Mood, personality, behaviour and immune function are intertwined: pessimists may neglect health care and health-promoting behaviour",true,"The textbook uses pessimism as its example of how mood and behaviour tie into immune functioning."],
            ["Pessimism has no link to immunity; only cortisol levels matter",false,"The textbook says mood, personality and behaviour are intertwined with immune functioning."],
            ["Pessimism makes lymphocytes more efficient, so he recovers faster",false,"Nothing in the textbook says this. Optimism and positive problem solving are what may help immunity."],
            ["His pattern shows positive growth resilience",false,"Positive growth resilience means learning and growing from stress. Kai is withdrawing, not growing."]
          ]}
      ]
    },
    {
      id:"W5-C9",title:"Reading: Sources of stress and managing it",src:"Textbook Ch 3, pp. 75-90",added:"2026-10-26",
      blurb:"Life changes, hassles, job and internal stressors, and the textbook's coping, relaxation and planning tools.",
      learn:"<b>Major life changes</b>, even positive ones like graduation, need adjustment. <b>Daily hassles</b> may stress you more because they happen often. Job stress is high when workers are left out of decisions, and severe or chronic job stress can lead to <b>burnout</b>. <b>Internal stressors</b> include unrealistic expectations and states such as illness.<br>To manage stress: build social support, communicate <b>assertively</b>, exercise (it completes the energy cycle, but watch for <b>overtraining</b>), limit caffeine, protect sleep, and manage time. Cognitive techniques include an 8-step <b>problem-solving</b> approach. Relaxation techniques bring on the relaxation response: heart rate, breathing and metabolism slow, and brain waves shift from beta to alpha. Options include progressive relaxation, visualization, meditation (including <b>mindfulness</b>), diaphragmatic breathing, yoga, tai chi, music and <b>biofeedback</b>.<br>Counterproductive: tobacco, alcohol, stimulants, marijuana, opioids, and eating to cope. A personal plan starts with learning to listen to your body. Keep a stress journal, design a plan with rewards, and get help if needed: peer counselling, support groups, psychotherapy.",
      summary:"Know the stressor types (life changes, hassles, job, internal, environmental) and the textbook toolkit: support, assertiveness, exercise, sleep, problem solving, relaxation, and a written plan.",
      steps:[
        {id:"W5-C9-S1",type:"sort",src:"Textbook Ch 3, pp. 75, 78-79",prompt:"Sort each stressor into its textbook category.",bins:["Major life change","Daily hassle","Internal stressor","Environmental stressor"],items:[
          ["Moving out of the family home for university",0,"The textbook names moving out of the family home as a major change of early adulthood."],
          ["Getting married",0,"Even positive changes such as marriage can be stressful major life changes."],
          ["Losing your keys on the way to class",1,"Losing your keys or wallet is the textbook's example of a daily hassle."],
          ["Misplacing your wallet",1,"A minor, frequent problem: a daily hassle."],
          ["Expecting to earn 100% on every test",2,"Unrealistic expectations are an internal stressor."],
          ["Fighting the flu during midterms",2,"Physical states such as illness are internal stressors."],
          ["A restaurant so noisy it puts you on edge",3,"The textbook's example of a mild environmental stressor."],
          ["Construction noise outside your window every morning",3,"An unavoidable daily environmental stressor."]
        ]},
        {id:"W5-C9-S2",type:"order",src:"Textbook Ch 3, p. 84",prompt:"Put the textbook's problem-solving steps in order.",items:[
          "Define the problem in one or two sentences",
          "Identify the causes of the problem",
          "Consider all solutions, not just the most obvious one",
          "Weigh positive and negative consequences of each solution",
          "Make a decision: choose a solution",
          "List what you will need to do to act on your decision",
          "Carry out your list, then evaluate the outcome and revise if needed"
        ],why:"Define, find causes, list all solutions, weigh them, decide, plan the actions, then act and evaluate. Students with better problem-solving skills report easier adjustment, lower stress and higher grades."},
        {id:"W5-C9-S3",type:"mcq",src:"Textbook Ch 3, p. 77",ch:"W5-C9",added:"2026-10-26",
          case:"Dana is a highly driven social worker. For a year she has felt that her work is never recognized and that she is not meeting her goals. She now feels physically, mentally and emotionally drained.",
          q:"Which textbook term best fits Dana?",
          opts:[
            ["Burnout",true,"Burnout is physical, mental and emotional exhaustion from severe or chronic job stress, most common in driven people who feel unrecognized. Helping professions are prone to it."],
            ["Overtraining",false,"Overtraining comes from compulsive exercise, not job stress."],
            ["Daily hassles",false,"Daily hassles are minor, frequent problems such as losing keys, not a year of exhausting work stress."],
            ["Type B personality",false,"Type B people are relaxed and less frustrated by daily events."]
          ]},
        {id:"W5-C9-S4",type:"mcq",src:"Textbook Ch 3, p. 83",ch:"W5-C9",added:"2026-10-26",
          case:"It is 1 a.m. Tomas has been lying in bed for 25 minutes and cannot fall asleep before his 8 a.m. class.",
          q:"Which step follows the textbook's advice on insomnia?",
          opts:[
            ["Get out of bed, leave the room if possible, and do something monotonous until he feels sleepy",true,"If you do not fall asleep in 15 to 20 minutes, get up and do something monotonous until sleepy."],
            ["Take a sleeping pill every night from now on",false,"Sleeping pills are not recommended for chronic insomnia. They can be habit forming and lose effectiveness."],
            ["Study in bed until he gets tired",false,"The textbook says to use your bed only for sleep: no eating, reading, studying or TV."],
            ["Have a drink to relax",false,"Alcohol before bedtime causes disturbed, fragmented sleep."]
          ]}
      ]
    }
  ],

  questions:[
    /* W5-C8: the stress response and health */
    {id:"W5-TQ01",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 67",added:"2026-10-26",
      q:"According to the textbook, for which stressors does the same basic set of physical reactions occur?",
      opts:[
        ["Any type: positive or negative, physical or psychological",true,"The changes vary in intensity, but the same basic set occurs for any type of stressor."],
        ["Only negative events, such as failing a test",false,"Pleasant stressors trigger the same set of reactions."],
        ["Only physical threats, such as a swerving car",false,"Psychological stressors trigger the same reactions."],
        ["Only stressors that truly need a physical response",false,"Fight or flight prepares the body for action whether or not action is needed. That is why it is often inappropriate in modern life."]
      ]},
    {id:"W5-TQ02",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 66",added:"2026-10-26",
      q:"According to the textbook, what triggers the endocrine system during stress?",
      opts:[
        ["The sympathetic nervous system",true,"During stress, the sympathetic nervous system triggers the endocrine system."],
        ["The parasympathetic division",false,"The parasympathetic division calms the body after the stressor ends."],
        ["The somatic nervous system",false,"The somatic system manages conscious actions, such as behavioural responses."],
        ["The immune system",false,"PNI describes the nervous and endocrine systems acting on the immune system, not the reverse."]
      ]},
    {id:"W5-TQ03",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 68",added:"2026-10-26",
      case:"As a car swerves toward you, your body goes through the fight-or-flight changes shown in Fig 3.1.",
      q:"Which change does NOT happen?",
      opts:[
        ["Secretion of saliva and mucus increases",true,"Saliva and mucus secretion decreases, since digestion has low priority in an emergency."],
        ["The spleen releases more red blood cells",false,"This happens, to meet the demand for oxygen and replace blood lost from injuries."],
        ["The bronchi dilate to let more air into the lungs",false,"This happens."],
        ["Blood vessels in skeletal muscles dilate while those in skin and viscera contract",false,"This happens, raising blood pressure and sending blood where it is most needed."]
      ]},
    {id:"W5-TQ04",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 68",added:"2026-10-26",
      case:"Two classmates get the same email: the midterm has moved up a week. They agree on the facts (what changed, when and where). One panics; the other shrugs.",
      q:"According to the textbook, which part of cognitive appraisal most likely differs between them?",
      opts:[
        ["Their evaluation of personal outcome: what this means for me and whether I can do anything about it",true,"Facts are evaluated fairly consistently from person to person; evaluation of personal outcome varies."],
        ["Their evaluation of the facts: who, what, where and when",false,"The textbook says facts are typically evaluated fairly consistently. They agree on them here."],
        ["Their GAS stage, since one of them is in exhaustion",false,"Nothing suggests prolonged stress. The difference is in how each appraises the same event."],
        ["The type of stressor, since one received eustress",false,"They received the same stressor. The difference is in appraisal."]
      ]},
    {id:"W5-TQ05",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 69",added:"2026-10-26",
      case:"Before reading her exam, Amelia takes a deep breath, focuses on the answers she knows, and then goes back to the questions she is unsure of.",
      q:"Which part of the nervous system controls these behavioural responses?",
      opts:[
        ["The somatic nervous system",true,"Behavioural responses are controlled by the somatic nervous system, which manages conscious actions."],
        ["The sympathetic division",false,"The sympathetic division drives the automatic fight-or-flight reaction, not chosen behaviour."],
        ["The parasympathetic division",false,"The parasympathetic division controls involuntary functions when relaxed."],
        ["The autonomic nervous system as a whole",false,"The autonomic system controls involuntary processes such as digestion and heart rate."]
      ]},
    {id:"W5-TQ06",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 69",added:"2026-10-26",
      case:"Kevin is ultracompetitive and impatient. He honks the moment a light turns green and often reacts to small annoyances with cynicism and open hostility.",
      q:"Which personality type does Kevin show, and which features of it raise heart disease risk?",
      opts:[
        ["Type A; anger, cynicism and hostility",true,"Studies indicate anger, cynicism and hostility in the type A pattern increase the risk of heart disease."],
        ["Type A; patience and trust",false,"Kevin is impatient and cynical. Patience and trust are not type A traits."],
        ["Type C; anger suppression",false,"Kevin expresses anger openly. Type C suppresses it."],
        ["Type D; avoiding social contact",false,"Nothing in the case shows social avoidance. Kevin's pattern is type A."]
      ]},
    {id:"W5-TQ07",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 69",added:"2026-10-26",
      case:"Mei rarely shows anger and finds it hard to express emotions. She often feels hopeless and has an exaggerated reaction to small annoyances.",
      q:"Which personality type fits, and what health effect does the textbook link to it?",
      opts:[
        ["Type C; the heightened response may impair immune functions",true,"Type C: anger suppression, difficulty expressing emotions, hopelessness and an exaggerated response to minor stressors, which may impair immunity."],
        ["Type B; lower perceived stress",false,"Type B is relaxed and tolerant, not hopeless and overreactive."],
        ["Type A; explosive anger raises heart disease risk",false,"Mei suppresses anger rather than expressing it explosively."],
        ["Hardiness; she sees stressors as chances to grow",false,"Hopelessness is the opposite of hardiness."]
      ]},
    {id:"W5-TQ08",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 69",added:"2026-10-26",
      case:"Owen feels gloomy and worried much of the time but keeps it to himself. He avoids parties, group work and social contact in general.",
      q:"Which pattern does Owen show?",
      opts:[
        ["Type D, which puts him at risk for heart problems",true,"Type D: a joint tendency to feel but not express negative emotions and to avoid social contact."],
        ["Type B, since he seems calm on the outside",false,"Type B is truly relaxed and contemplative, not hiding gloom and worry."],
        ["Type A, since he is hostile toward others",false,"Nothing shows hostility or competitiveness."],
        ["Hardiness, since he handles stress on his own",false,"Hardy people view stressors as challenges. Owen is an anxious worrier."]
      ]},
    {id:"W5-TQ09",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 70",added:"2026-10-26",
      case:"When her co-op placement falls through, Leila calls it a chance to learn something new. She stays committed to her courses and believes her own choices shape what happens next.",
      q:"Which trait does Leila show?",
      opts:[
        ["Hardiness",true,"Hardy people see stressors as challenges and chances to grow, stay committed, and have an inner locus of control."],
        ["Trait anxiety",false,"High trait anxiety makes people more vulnerable to stress. Leila is coping well."],
        ["Type C personality",false,"Type C involves hopelessness and overreaction. Leila is optimistic."],
        ["Tend and befriend",false,"Tend and befriend means seeking social support. Leila is reframing the setback herself."]
      ]},
    {id:"W5-TQ10",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 70",added:"2026-10-26",
      case:"Daniel is upset for a week after failing his first chemistry midterm. He then changes how he studies, joins a study group, and says the failure made him a stronger student.",
      q:"Which type of resilience does Daniel show?",
      opts:[
        ["Positive growth resilience",true,"He learns and grows from the stress experience."],
        ["Nonreactive resilience",false,"He did react: he was upset for a week."],
        ["Homeostatic resilience",false,"Homeostatic resilience is a quick return to baseline. Daniel goes beyond baseline and grows."],
        ["Type B personality",false,"Type B is a personality type, not a type of resilience."]
      ]},
    {id:"W5-TQ11",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 70",added:"2026-10-26",
      case:"Frank built almost all of his self-worth around his engineering career. His wife sees herself as a parent, volunteer and teacher.",
      q:"Why might retirement be more stressful for Frank, according to the textbook?",
      opts:[
        ["Gender roles shape how a stressor is perceived; his self-worth rests mostly on work",true,"The textbook uses this exact example: a man whose self-worth comes from work may find retirement more stressful than a woman with several roles."],
        ["Retirement is a daily hassle, and hassles are always worse than life changes",false,"Retirement is a major life change, not a daily hassle."],
        ["Retirement is pleasant, so it cannot cause stress",false,"Pleasant changes can still be stressful."],
        ["Men cannot seek social support",false,"The textbook says traditional male roles may limit building a support network, not that men cannot seek it."]
      ]},
    {id:"W5-TQ12",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 72",added:"2026-10-26",
      q:"In general adaptation syndrome theory, how do eustress and distress compare?",
      opts:[
        ["They follow the same sequence of physical responses",true,"The sequence of physical responses in GAS is the same for eustress and distress."],
        ["Eustress skips the alarm stage",false,"Both go through the same three stages."],
        ["Eustress activates the parasympathetic division instead of the sympathetic",false,"A pleasant stressor still triggers the stress response."],
        ["Distress is the stress from a pleasant stressor",false,"Distress comes from an unpleasant stressor; eustress from a pleasant one."]
      ]},
    {id:"W5-TQ13",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 74",added:"2026-10-26",
      case:"After hearing that her husband died suddenly, a woman has chest pain and symptoms that look like a heart attack. Tests later show no damage to her heart.",
      q:"Which condition does the textbook describe that fits this case?",
      opts:[
        ["Stress cardiomyopathy (broken heart syndrome)",true,"The stress response can cause a condition that mimics a heart attack but does not damage the heart."],
        ["Atherosclerosis",false,"Atherosclerosis is damaged vessels caked with fatty deposits, which develops over time."],
        ["High allostatic load",false,"Allostatic load is long-term wear and tear, not a sudden event without heart damage."],
        ["Exhaustion stage of GAS",false,"Exhaustion follows prolonged or repeated stressors, not a single sudden shock."]
      ]},
    {id:"W5-TQ14",type:"mcq",ch:"W5-C8",src:"Textbook Ch 3, p. 75",added:"2026-10-26",
      case:"Sam remembers tiny details of a minor fender bender last year, but he cannot recall much about a serious crash he was in later.",
      q:"Which textbook explanation fits best?",
      opts:[
        ["Moderate stress enhances the ability to remember, while high levels of acute stress can impair learning",true,"The textbook uses this example: people recall minute details of a fender bender but not of a major crash."],
        ["Higher stress always improves memory",false,"High levels of acute stress impair learning."],
        ["Stress affects memory only after years of chronic stress",false,"High acute stress can impair learning right away."],
        ["The adult hippocampus cannot grow new neurons",false,"The textbook says the hippocampus does grow new neurons in adulthood; stress reduces new cell birth."]
      ]},

    /* W5-C9: sources of stress and managing it */
    {id:"W5-TQ15",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 75",added:"2026-10-26",
      case:"Aisha and Kiara both graduated, got married and moved to a new city in the same year.",
      q:"According to the textbook, what would make one of them less likely to become ill from these changes?",
      opts:[
        ["A strong support network and a stress-resistant personality",true,"These are named as moderating influences on the health effects of life changes."],
        ["Seeing the changes as positive, since positive changes are never stressful",false,"Even positive changes such as graduation and marriage can be stressful."],
        ["Adding more daily hassles to stay busy",false,"Hassles add stress, especially when perceived negatively."],
        ["Avoiding social contact to save energy",false,"Social support buffers stress. Avoiding people removes that buffer."]
      ]},
    {id:"W5-TQ16",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 75",added:"2026-10-26",
      q:"Why do researchers propose that daily hassles can be an even greater source of stress than major life changes?",
      opts:[
        ["They occur much more often",true,"Major changes seldom occur regularly; hassles happen often, and each one can trigger a stress response if perceived negatively."],
        ["They always involve physical danger",false,"Hassles are minor problems such as losing your keys."],
        ["They always require moving or changing jobs",false,"Those are major life changes."],
        ["They cannot be perceived negatively",false,"The textbook says people who perceive hassles negatively have a moderate stress response each time."]
      ]},
    {id:"W5-TQ17",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 77",added:"2026-10-26",
      case:"At a call centre, managers set every script and schedule with no input from staff. Stress among workers is high.",
      q:"Which change does the textbook suggest would most likely raise job satisfaction and lower stress?",
      opts:[
        ["Let workers help shape how their jobs are performed",true,"When workers can shape how their jobs are done, job satisfaction goes up and stress goes down."],
        ["Add overtime so work gets done faster",false,"Tight schedules and overtime leave less time for exercise and other stress-proofing activities."],
        ["Require staff to be reachable by text at all times",false,"Being 'always on' is described as a source of stress."],
        ["Cut breaks so shifts end sooner",false,"The textbook advises giving yourself breaks; play renews you."]
      ]},
    {id:"W5-TQ18",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, pp. 78-79",added:"2026-10-26",
      case:"Jun expects to earn 100% on every test and feels like a failure after getting 91%.",
      q:"What kind of stressor is this?",
      opts:[
        ["An internal stressor: unrealistic expectations",true,"The textbook gives expecting 100% on every test as an example of an internal stressor."],
        ["An environmental stressor",false,"Environmental stressors come from the physical environment, such as noise or disasters."],
        ["A daily hassle",false,"Hassles are minor outside problems such as losing keys."],
        ["A social stressor from discrimination",false,"Nothing in the case involves prejudice or discrimination."]
      ]},
    {id:"W5-TQ19",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 80",added:"2026-10-26",
      case:"Leah agrees to every favour her friends ask, says nothing when she is upset, and now feels resentful and taken advantage of.",
      q:"Which textbook suggestion fits Leah best?",
      opts:[
        ["An assertiveness training course to change her patterns of communication",true,"People who suppress their feelings may benefit from assertiveness training."],
        ["Anger-management strategies for verbal aggression",false,"Anger management is for people who express anger aggressively. Leah suppresses hers."],
        ["Cutting off her social support so no one can ask favours",false,"Social support buffers stress. The fix is communicating her needs."],
        ["More caffeine to keep up with the extra favours",false,"Caffeine can raise blood pressure and cortisol and disrupt sleep."]
      ]},
    {id:"W5-TQ20",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 80",added:"2026-10-26",
      q:"How does the textbook explain why exercise reduces the effects of stress?",
      opts:[
        ["The stress response readies the body for physical action; activity completes the energy cycle and trains the body to return to homeostasis",true,"If you are stressed and do not exert yourself, you are not completing the energy cycle."],
        ["Exercise stops the release of all hormones",false,"The textbook does not claim this."],
        ["Exercise helps only if done at the moment the stressor occurs",false,"You can be active at other times of the day and still get the benefit."],
        ["Exercise raises cortisol, and higher cortisol lowers stress",false,"Higher cortisol is part of the stress response, not a cure for it."]
      ]},
    {id:"W5-TQ21",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 81",added:"2026-10-26",
      case:"Bea copes with stress by running twice a day, every day. She now feels tired, irritable and low, and her race times are getting worse.",
      q:"Which condition does this most likely describe?",
      opts:[
        ["Overtraining",true,"Compulsive exercise risks overtraining: fatigue, irritability, depression and diminished athletic performance."],
        ["Burnout",false,"Burnout is exhaustion from severe or chronic job or school stress, not from compulsive exercise."],
        ["The relaxation response",false,"The relaxation response is a calm state, not fatigue and irritability."],
        ["Positive growth resilience",false,"Her performance and mood are getting worse, not growing."]
      ]},
    {id:"W5-TQ22",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 82",added:"2026-10-26",
      case:"Gil's roommate notices that Gil stops breathing for a few seconds and then gasps, many times a night. Gil does not remember waking up but is exhausted every day.",
      q:"Which sleep problem is most likely?",
      opts:[
        ["Sleep apnea",true,"In apnea, breathing stops during sleep and the sleeper wakes repeatedly, often without being aware of it."],
        ["Insomnia",false,"Insomnia is trouble falling or staying asleep that the person notices. Gil does not know he is waking."],
        ["Normal REM sleep",false,"REM brings dreams and limb paralysis, not repeated pauses in breathing."],
        ["Overtraining",false,"Overtraining comes from compulsive exercise."]
      ]},
    {id:"W5-TQ23",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 84",added:"2026-10-26",
      q:"In the textbook's problem-solving approach, what comes right after defining the problem in one or two sentences?",
      opts:[
        ["Identify the causes of the problem",true,"Step 2 is to identify the causes."],
        ["Choose the most obvious solution",false,"Step 3 says to consider all solutions, not just the most obvious one."],
        ["Evaluate the outcome",false,"Evaluating the outcome is the last step."],
        ["List what you will need to do",false,"Listing actions comes after making a decision."]
      ]},
    {id:"W5-TQ24",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 86",added:"2026-10-26",
      case:"Instead of repeating a word to quiet her mind, Tess sits and observes whatever thoughts and sensations come up, without judging them.",
      q:"Which technique is Tess using?",
      opts:[
        ["Mindfulness meditation",true,"Mindfulness means observing thoughts, sensations and imagery without evaluating or judging them."],
        ["Progressive relaxation",false,"Progressive relaxation tenses and relaxes muscle groups."],
        ["Visualization",false,"Visualization means imagining a scene, such as floating on a cloud."],
        ["Biofeedback",false,"Biofeedback uses monitoring devices to show body processes."]
      ]},
    {id:"W5-TQ25",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 87",added:"2026-10-26",
      case:"At a clinic, a sensor tracks Ben's heart rate. A tone gets louder as his heart speeds up and softer as it slows. Over several sessions he learns to make the tone softer.",
      q:"Which technique is this, and what is its goal?",
      opts:[
        ["Biofeedback; to learn how relaxation feels and use the skill in daily life without the equipment",true,"Biofeedback training aims to transfer relaxation to daily life without electronic equipment."],
        ["Biofeedback; to keep using the monitor every time he feels stressed",false,"The point is to no longer need the equipment."],
        ["Systematic desensitization; to build an anxiety hierarchy",false,"Desensitization uses ranked anxiety situations, not a heart rate monitor."],
        ["Diaphragmatic breathing; to shift from chest to stomach breathing",false,"No breathing technique is described."]
      ]},
    {id:"W5-TQ26",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 88",added:"2026-10-26",
      q:"What does the textbook say about using marijuana to cope with stress?",
      opts:[
        ["Some of its neurochemicals enhance the stress response, and getting high regularly can bring on panic attacks",true,"Physiological effects show marijuana does not cause relaxation."],
        ["It reliably causes physical relaxation",false,"The textbook says physiological effects clearly show it does not."],
        ["Withdrawal lowers stress hormones",false,"Withdrawal may be linked to an increase in circulating stress hormones."],
        ["It improves short-term memory and attention",false,"It decreases short-term memory and attention."]
      ]},
    {id:"W5-TQ27",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 90",added:"2026-10-26",
      case:"To beat test anxiety, Noah writes ten test-related situations on cards and ranks them from least to most tense. He learns muscle relaxation, then imagines each card while staying relaxed, moving on only when his anxiety is low.",
      q:"Which technique is this, and what is its premise?",
      opts:[
        ["Systematic desensitization: you cannot feel anxiety and be relaxed at the same time",true,"This is the three-phase program in the textbook's test anxiety box."],
        ["Success rehearsal: imagine failing so you are ready for the worst",false,"Success rehearsal means imagining yourself dealing with each situation successfully."],
        ["Biofeedback: electronic monitoring of arousal",false,"No monitoring equipment is used."],
        ["Mindfulness meditation: observe thoughts without judging",false,"Noah works through a ranked hierarchy while relaxed."]
      ]},
    {id:"W5-TQ28",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 88",added:"2026-10-26",
      q:"According to the textbook, what is the most important starting point for a successful stress-management plan?",
      opts:[
        ["Learning to listen to your body",true,"Recognizing the stress response and the emotions and thoughts that go with it lets you handle the moment in a healthy way."],
        ["Starting psychotherapy",false,"Psychotherapy is an option under getting help, not the starting point."],
        ["Removing every stressor from your life",false,"The textbook focuses on managing stressors, not removing all of them."],
        ["Taking dietary supplements marketed for stress",false,"Supplements do not have to meet the same standards as medications."]
      ]},
    {id:"W5-TQ29",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 80",added:"2026-10-26",
      case:"Two students live in cramped, overcrowded apartments. One has close friends and family she talks to often. The other handles everything alone.",
      q:"What does research in the textbook predict?",
      opts:[
        ["The student with strong social support will be less distressed by the cramped space",true,"In the study, students with a strong support system were less distressed than loners."],
        ["Both will feel the same, since the stressor is the same",false,"Social support changed how distressed the students were."],
        ["The loner will cope better because she has fewer demands",false,"The loners were more distressed."],
        ["Social support helps only married people",false,"The overcrowding study was of university students."]
      ]},
    {id:"W5-TQ30",type:"mcq",ch:"W5-C9",src:"Textbook Ch 3, p. 85",added:"2026-10-26",
      q:"When a relaxation technique triggers the relaxation response, which change does the textbook describe?",
      opts:[
        ["Brain waves shift from an alert beta rhythm to a relaxed alpha rhythm",true,"Heart rate, breathing and metabolism also slow, and blood pressure and oxygen use fall."],
        ["Heart rate and breathing speed up",false,"They slow down."],
        ["Blood flow to the brain and skin decreases",false,"Blood flow to the brain and skin increases."],
        ["Oxygen consumption rises",false,"Oxygen consumption decreases."]
      ]}
  ],

  review:[
    {id:"W5-TR01",ch:"W5-C8",src:"Textbook Ch 3, pp. 69-70",added:"2026-10-26",
      q:"Compare Type A, B, C and D personalities and their health links. Then explain how hardiness and resilience help people deal with stress.",
      answer:"Type A people are ultracompetitive, impatient and hostile, and their anger, cynicism and hostility raise heart disease risk. Type B people are relaxed and tolerant. Type C people suppress anger, feel hopeless and overreact to minor stressors, which may impair immune function. Type D people feel but do not express negative emotions and avoid social contact, which puts them at risk for heart problems. Hardy people see stressors as challenges with an inner locus of control, and resilience (nonreactive, homeostatic or positive growth) shapes how a person responds to and recovers from stress.",
      points:["Type A: hostility, anger, cynicism; heart disease","Type B: relaxed; Type C: suppressed anger, hopelessness; immune effects","Type D: unexpressed negative emotions plus social avoidance; heart problems","Hardiness: stressors as challenges, commitment, inner locus of control","Three resilience types: nonreactive, homeostatic, positive growth"]},
    {id:"W5-TR02",ch:"W5-C8",src:"Textbook Ch 3, pp. 73-74",added:"2026-10-26",
      q:"Explain the premise of psychoneuroimmunology and how different kinds of stress affect immunity. Give two stress-linked health problems from the textbook.",
      answer:"PNI holds that stress, acting through the nervous and endocrine systems, impairs the immune system and so affects health. Higher cortisol is linked to fewer lymphocytes, and epinephrine promotes lymphocyte release but reduces their efficiency. Acute stress enhances the immune response, a stressful event sequence usually brings no overall significant change, and chronic stressors such as unemployment harm almost all measures of immunity. Even large immune changes can have small clinical effects because they are short-term or the immune system compensates. Stress-linked problems include colds and other infections, asthma and allergy attacks, and cardiovascular disease through high blood pressure and inflammation.",
      points:["Premise: stress acts through nervous and endocrine systems to impair immunity","Cortisol lowers lymphocytes; epinephrine releases them but reduces efficiency","Acute enhances; event sequence little change; chronic harms almost all measures","Names two conditions (e.g. infections, asthma or allergies, CVD, herpes flare-ups)"]},
    {id:"W5-TR03",ch:"W5-C9",src:"Textbook Ch 3, pp. 88-89",added:"2026-10-26",
      q:"Describe how to build a personal stress-management plan using the textbook's steps.",
      answer:"Start by learning to listen to your body so you recognize the stress response and the thoughts that go with it. Identify stressors by keeping a stress journal for a week or two, recording the time, circumstances, your thoughts and the outcome, and look for patterns. Then design a plan: choose the techniques that suit you, find a friend to work with, consider a contract with yourself, build in rewards, and evaluate and redesign the plan as needs change. If that is not enough, get help from self-help books, peer counselling, support groups or short-term psychotherapy.",
      points:["Start by learning to listen to your body","Identify stressors with a stress journal and spot patterns","Design: pick techniques, friend, contract, rewards, regular evaluation","Get help: self-help guides, peer counselling, support groups, psychotherapy"]}
  ]
});
