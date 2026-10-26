/* W4 supplement: suicide, warning signs and getting help (Week 4 Part 2, slides 4 and 18 to 22).
   Fig 2.4 values are read off the line chart (approximate); questions use only the pattern. */
HLTH.extend("W4",{
  terms:[
    {id:"W4-T-suicide-severe-depression",term:"Suicide and severe depression",def:"Suicide is one of the principal dangers of severe depression. An attempt can happen unpredictably and without depression, but the chances are greater when symptoms are numerous and severe.",src:"W4 Part 2, slide 18",ch:"W4-C5",added:"2026-10-26"},
    {id:"W4-T-is-path-warm",term:"IS PATH WARM?",def:"A mnemonic for the warning signs of suicide: Ideation, Substance abuse, Purposeless, Anxiety, Trapped, Hopelessness, Withdrawal, Anger, Recklessness, Mood changes.",src:"W4 Part 2, slide 21",ch:"W4-C5",added:"2026-10-26"},
    {id:"W4-T-suicide-15-34",term:"Suicide in people aged 15 to 34",def:"Suicide is the second leading cause of death among people aged 15 to 34 in Canada.",src:"W4 Part 2, slide 4",ch:"W4-C5",added:"2026-10-26"}
  ],
  chapters:[{
    id:"W4-C5",title:"Suicide: warning signs and getting help",src:"W4 Part 2, slides 4, 18 to 22",added:"2026-10-26",
    blurb:"Why severe depression raises risk, the IS PATH WARM signs, common myths and what to do.",
    learn:"Suicide is one of the principal dangers of severe depression. Risk is greater when symptoms are numerous and severe, although an attempt can also happen unpredictably. In Canada, suicide is the second leading cause of death among people aged 15 to 34, and the suicide mortality rate for males is about three times the rate for females (Fig 2.4, 2006 to 2020).<br><br>Warning signs follow the mnemonic <b>IS PATH WARM?</b>: Ideation, Substance abuse, Purposeless, Anxiety, Trapped, Hopelessness, Withdrawal, Anger, Recklessness, Mood changes.<br><br>Table 2.3 corrects common myths: most people who die by suicide have talked about it; few people are single-minded about it; many are not mentally ill by ordinary criteria. If you are worried about someone: expert help is essential, do not be afraid to discuss suicide, and do not leave the person alone if the danger seems immediate. Campus and crisis resources (Counselling Services, Good2Talk, Here 24/7) are listed in the course outline.",
    summary:"Know the IS PATH WARM signs, know that talking about suicide is a warning sign and not a reason to do nothing, and know that expert help is essential.",
    steps:[
      {id:"W4-C5-S1",type:"match",prompt:"Match each letter of IS PATH WARM? to its warning sign.",src:"W4 Part 2, slide 21",pairs:[["I","Ideation"],["S","Substance abuse"],["P","Purposeless"],["T","Trapped"],["H","Hopelessness"],["W","Withdrawal"],["R","Recklessness"]]},
      {id:"W4-C5-S2",type:"sort",prompt:"Table 2.3: myth or fact?",src:"W4 Part 2, slide 20",bins:["Myth","Fact (per Table 2.3)"],items:[
        ["People who really intend to kill themselves do not let anyone know.",0,"Most people who eventually die by suicide have talked about doing it."],
        ["Most people who eventually die by suicide have talked about it.",1,"This is the fact that corrects the first myth in Table 2.3."],
        ["People who really want to die will do it regardless of attempts to prevent them.",0,"Few people are single-minded about suicide, even at the moment of attempting it."],
        ["Someone determined today may completely change their mind tomorrow.",1,"Table 2.3 makes this point when correcting the 'regardless of prevention' myth."],
        ["Suicide is proof of mental illness.",0,"Many deaths by suicide are by people who do not meet ordinary criteria for mental illness, though rates are higher with depression, schizophrenia and substance use disorders."],
        ["People inherit suicidal tendencies.",0,"Some depression has a genetic component, but family patterns can also come from identifying with a family member."],
        ["People with depression or schizophrenia have a much higher than average suicide rate.",1,"Table 2.3 states this while correcting the 'proof of mental illness' myth."]
      ]},
      {id:"W4-C5-S3",type:"mcq",src:"W4 Part 2, slide 22",case:"Your roommate says they have been thinking about ending their life and that it 'would be easier for everyone'. You think the danger may be immediate.",q:"Which response follows the lecture's guidance?",opts:[
        ["Stay with them and contact expert help right away.",true,"Slide 22: expert help is essential, and do not leave the person alone if the danger seems immediate."],
        ["Avoid the word suicide so you do not put the idea in their head.",false,"Slide 22 says not to be afraid to discuss suicide."],
        ["Give them space for the night and check in tomorrow.",false,"Do not leave the person alone if you feel the danger is immediate."],
        ["Assume they are not serious, since people who mean it do not tell anyone.",false,"That is a myth from Table 2.3. Most people who die by suicide have talked about it."]]}
    ]
  }],
  questions:[
    {id:"W4-Q41",ch:"W4-C5",src:"W4 Part 2, slide 21",added:"2026-10-26",q:"In the IS PATH WARM? mnemonic for suicide warning signs, what does the T stand for?",opts:[["Trapped",true,"I-S-P-A-T-H: the T is Trapped."],["Tension",false,"Not part of the mnemonic."],["Trauma",false,"Not part of the mnemonic."],["Tearfulness",false,"Not part of the mnemonic."]]},
    {id:"W4-Q42",ch:"W4-C5",src:"W4 Part 2, slide 20",added:"2026-10-26",q:"According to Table 2.3, which statement about suicide is a myth?",opts:[["Suicide is proof of mental illness.",true,"Many deaths by suicide are by people who do not meet ordinary criteria for mental illness."],["Most people who die by suicide have talked about it beforehand.",false,"This is the fact."],["People determined today may change their minds tomorrow.",false,"This is stated as fact."],["People with depression have a higher than average suicide rate.",false,"This is stated as fact."]]},
    {id:"W4-Q43",ch:"W4-C5",src:"W4 Part 2, slide 19",added:"2026-10-26",q:"Fig 2.4 shows Canadian suicide mortality rates by sex from 2006 to 2020. What pattern does it show?",opts:[["The male rate is about three times the female rate in every year.",true,"Males sit around 16 to 19 per 100,000; females around 5 to 6."],["The female rate is higher than the male rate in most years.",false,"The male line is above the female line in every year."],["Male and female rates are about equal.",false,"There is a large, steady gap."],["Both rates fell by half between 2006 and 2020.",false,"Both lines are fairly flat across the period."]]},
    {id:"W4-Q44",ch:"W4-C5",src:"W4 Part 2, slide 4",added:"2026-10-26",q:"Among Canadians aged 15 to 34, where does suicide rank as a cause of death?",opts:[["Second",true,"Slide 4: suicide is the second leading cause of death among people aged 15 to 34."],["First",false,"Second, per slide 4."],["Fifth",false,"Second, per slide 4."],["Tenth",false,"Second, per slide 4."]]}
  ]
});
