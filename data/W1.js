/* W1: Week 1 Part 1 "Different Perspectives on Health" and Week 1 Part 2 "Major Historical Developments Relevant to Public Health".
   Notes on the slides:
   - W1 Part 1 slide 4: "Allostastis" is a typo on the slide; written here as allostasis. The slide names homeostasis and allostasis but does not define them.
   - W1 Part 1 slide 6: "six" is struck through and replaced with "nine" dimensions of wellness.
   - W1 Part 1 slides 12 and 13: the agent/host/environment triad for lung cancer and COVID-19 is left blank for the class to fill in.
     No disease-specific answers are on the slides, so this file only uses the generic triad examples from slide 11.
   - W1 Part 1 slide 8 is an image only; content taken from the figure transcription.
   - Some source URLs on slides 2, 11 and 14 (Part 1) are cut off in the text layer. Nothing else was unreadable.
*/
HLTH.unit({
  id:"W1", n:1, added:"2026-10-26",
  title:"Perspectives on Health and the Rise of Public Health",
  short:"Perspectives & history",
  blurb:"How health, wellness, disease and its determinants are defined, and how public health developed from ancient times to modern Canada.",
  topics:[
    "Definitions of health and wellness",
    "Disease, illness, sickness and the biomedical model",
    "Risk factors, determinants and the social-ecological model",
    "From Hippocrates to germ theory and sanitary reform",
    "Public health in Canada: Lalonde, Ottawa Charter, PHAC",
    "Omran's epidemiologic transitions"
  ],
  lectures:["Week 1 Part 1: Different Perspectives on Health","Week 1 Part 2: Major Historical Developments Relevant to Public Health"],

  terms:[
    /* C1 */
    {id:"W1-T-biomedical-definition-of-health", term:"Biomedical definition of health", def:"Health is a \"state of normal function that can be disrupted from time to time by disease\". It is the predominant model in health care.", ex:"A doctor calls you healthy because your tests are normal.", src:"W1 Part 1, slide 2", ch:"W1-C1", added:"2026-10-26"},
    {id:"W1-T-who-1948-definition-of-health", term:"WHO definition of health (1948)", def:"Health is a state of \"physical, mental, and social wellbeing, and not merely the absence of disease and infirmity\". Its weakness: it is hard to measure.", src:"W1 Part 1, slide 3", ch:"W1-C1", added:"2026-10-26"},
    {id:"W1-T-health-as-a-resource-for-living", term:"Health as a resource for living (WHO, 1984)", def:"From the WHO health promotion movement of the 1980s: health is the extent to which a person or group can realize aspirations, satisfy needs, and change or cope with the environment. Health is a resource for everyday life, not the objective of living. It is not a static state but resiliency.", ex:"A person with a managed chronic condition who copes well with school and work.", src:"W1 Part 1, slide 4", ch:"W1-C1", added:"2026-10-26"},
    {id:"W1-T-wellness", term:"Wellness", def:"Optimal health and vitality. Health can be influenced by non-modifiable risk factors, while wellness is largely determined by modifiable risk factors.", ex:"Choosing to exercise and sleep well changes wellness; your age does not.", src:"W1 Part 1, slide 5", ch:"W1-C1", added:"2026-10-26"},
    {id:"W1-T-dimensions-of-wellness", term:"Dimensions of wellness", def:"Nine dimensions that continuously influence and are influenced by one another: physical, emotional, intellectual, interpersonal, cultural, spiritual, environmental, financial and occupational. Cultural, financial and occupational were added in the 4th edition. The older figure showed six dimensions on a continuum from low level of wellness (malaise) to high level of wellness (vital, meaningful life).", ex:"Financial wellness: living within your means and saving for emergencies.", src:"W1 Part 1, slides 6-7", ch:"W1-C1", added:"2026-10-26"},
    /* C2 */
    {id:"W1-T-disease", term:"Disease", def:"The underlying pathology, biologically defined. The practitioner's perspective: the illness seen in terms of a theory of disorder.", ex:"A biopsy shows a tumour.", src:"W1 Part 1, slide 8", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-illness", term:"Illness", def:"A person's subjective experience of their symptoms. What the patient brings to the doctor.", ex:"\"I have felt exhausted and achy for weeks.\"", src:"W1 Part 1, slide 8", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-sickness", term:"Sickness", def:"The social and cultural conceptions of a condition: cultural beliefs and reactions such as fear or rejection, which affect how the patient reacts. Also covers what is considered a disorder suitable for medical treatment.", ex:"Coworkers avoid someone after hearing their diagnosis.", src:"W1 Part 1, slide 8", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-biomedical-model", term:"Biomedical model of disease", def:"Focuses on pathological processes: understanding, diagnosing and treating the physical or biological aspect of disease. Illness results from disease, so removal of the disease means no illness and restored health.", ex:"A stent, a wire mesh tube, is inserted into a narrowed coronary artery.", src:"W1 Part 1, slide 9", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-reductionist", term:"Reductionist", def:"Describes the biomedical model: it explains disease as abnormal structure or function of cells, organs and systems.", src:"W1 Part 1, slide 9", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-clinical-course-of-disease", term:"Clinical course of a disease", def:"From the biomedical perspective: exposure to a pathogen (or another pathophysiological event), biological onset of disease, symptoms appear, diagnosis, therapy begun, outcomes (cured, living with the disease, deteriorated, died). Onset to symptoms is the preclinical phase; from symptoms onward is the clinical phase. Relapse can loop back to diagnosis.", ex:"Plaque building up in arteries before any chest pain is preclinical.", src:"W1 Part 1, slide 10", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-etiological-phase", term:"Etiological phase", def:"The stage before disease in the extended clinical course: social and environmental determinants (conditions in society, community circumstances, living environment) lead to risk and protective factors (lifestyle, genetics, education, occupation, social supports).", src:"W1 Part 1, slide 15", ch:"W1-C2", added:"2026-10-26"},
    {id:"W1-T-post-clinical-phase", term:"Post-clinical phase", def:"The stage after the clinical phase: longer-term outcomes such as impact on family and work, and economic impact. The figure also shows a sequence from impairment to disability to handicap.", ex:"After a stroke, a person cannot return to work and the family loses income.", src:"W1 Part 1, slide 15", ch:"W1-C2", added:"2026-10-26"},
    /* C3 */
    {id:"W1-T-epidemiology", term:"Epidemiology", def:"\"The study of the distribution and determinants of health-related states or events in specified populations, and the application of this study to the control of health problems.\"", src:"W1 Part 1, slide 11", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-epidemiologic-triad", term:"Interacting triad of causal factors", def:"Agent (virulence, infectivity, addictive qualities), host (genetic susceptibility, resiliency, nutritional status, motivation) and environment (public health sanitation, social context, availability of health care). Like the fireman's mantra: a fire needs air, fuel and heat.", ex:"Tobacco's addictive qualities belong to the agent corner.", src:"W1 Part 1, slides 11-13", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-risk-factor", term:"Risk factor", def:"A variable associated with an increased statistical probability of contracting a disease, injury, or infection. Risk factors tend to be proximal to the individual. Correlational, not causal.", ex:"Smoking a cigarette.", src:"W1 Part 1, slide 14", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-determinants", term:"Determinants", def:"Upstream factors that correlate with increased risk. They tend to be distal and occur at the population level. Correlational, not causal. \"Determinant\" does not imply determinism (inevitability); it comes from the Latin for \"from the end\", the origin of the causal chain or web.", ex:"An open drainage ditch running through a slum.", src:"W1 Part 1, slides 14 and 17", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-social-determinants-of-health", term:"Social determinants of health", def:"The Canadian Public Health Association lists 14 key social determinants: income and income distribution, education, unemployment and job security, early childhood development, food insecurity, housing, gender, social safety network, employment and working conditions, social exclusion, Aboriginal and Indigenous status, race, health services and disability. The instructor adds racism. Individual factors are separate: age, sex, biological and hereditary factors, and lifestyle or behaviours.", src:"W1 Part 1, slide 16", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-intersectionality", term:"Intersectionality", def:"Social determinants interact and intersect with each other, even though they are listed one by one.", ex:"Experiencing discrimination based on both race and gender.", src:"W1 Part 1, slide 16", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-social-ecological-model", term:"Social-ecological model", def:"The model of multiple determinants this course uses. Concentric rings from the centre out: innate individual traits (proximal), individual behaviour, social, family and community networks, living and working conditions (intermediate), and broad social, economic, cultural, health and environmental conditions and policies (distal). It applies over the life span.", src:"W1 Part 1, slides 17-18", ch:"W1-C3", added:"2026-10-26"},
    {id:"W1-T-integrated-life-course-model", term:"Integrated Life Course and Social Determinants Model of Indigenous Health", def:"A holistic view with mental, physical, emotional and spiritual aspects. The child sits at the centre and develops through youth into adulthood, within First Nations, Metis and Inuit contexts, all surrounded by social determinants of health.", src:"W1 Part 1, slide 19", ch:"W1-C3", added:"2026-10-26"},
    /* C4 */
    {id:"W1-T-agricultural-revolution", term:"Agricultural Revolution", def:"The shift from nomadic hunting and gathering to settled farming. It gave a more secure food supply and population growth, but also more infectious disease: zoonoses from living near animals, close quarters, less varied diets, and garbage that attracted rodents and insect vectors.", src:"W1 Part 2, slides 3-4", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-zoonoses", term:"Zoonoses", def:"Infectious diseases that the slides link to humans living near animals after the Agricultural Revolution.", src:"W1 Part 2, slide 4", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-hippocrates", term:"Hippocrates (460 BC)", def:"\"Father\" of Western medicine (Hippocratic Corpus). Said disease is caused by an imbalance of man with the environment, and linked disease to climate, water, lifestyle and nutrition. Also an imbalance in the humours: melancholy, phlegm, bile and blood.", src:"W1 Part 2, slide 5", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-black-death", term:"Black Death (1348)", def:"Plague in two forms: bubonic, transmitted by fleas from rats to humans, and pneumonic, spread by sneezing. Death in 60% of cases. Killed 1/3 of the European population, 60 million worldwide. Caused by the bacterium Yersinia pestis.", src:"W1 Part 2, slides 6-7", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-miasma", term:"Miasma", def:"A theory of the cause of the plague: disease came from vapours from swamps or cesspools.", src:"W1 Part 2, slide 7", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-reservoir-and-vector", term:"Reservoir and vector", def:"In the plague, rats were the reservoir for the bacteria and fleas were the vector that transmitted it by biting.", src:"W1 Part 2, slide 7", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-john-snow", term:"John Snow (1813-1858)", def:"London physician, the father of epidemiology. He systematically studied cholera outbreaks, and his data supported his theory of their source. In 1853 he removed the handle of the Broad Street Pump: the first public health intervention.", src:"W1 Part 2, slides 9-10", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-william-harvey", term:"William Harvey (1578-1657)", def:"English physician who did animal dissections. Published \"An Anatomical Study of the Motion of the Heart and of the Blood in Animals\" (1628). First to hypothesize that mammals reproduce by fertilization of an egg by sperm.", src:"W1 Part 2, slide 11", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-edward-jenner", term:"Edward Jenner (1796)", def:"English physician. His 1796 cowpox experiment showed that inoculation with cowpox (material from pustules) gave immunity against smallpox, a virus. He was not the first: smallpox inoculation was practised in China and India as early as 1000 CE using ground-up smallpox scabs.", src:"W1 Part 2, slide 12", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-louis-pasteur", term:"Louis Pasteur (1822-1895)", def:"In 1862 disproved the theory of spontaneous generation and published his germ theory. Pasteurization saved the wine industry. Made vaccines against anthrax and rabies and coined the term \"vaccine\" in honour of Jenner. Head of the Pasteur Institute in Paris (1888).", src:"W1 Part 2, slide 13", ch:"W1-C4", added:"2026-10-26"},
    {id:"W1-T-robert-koch", term:"Robert Koch (1843-1910)", def:"Discovered the tuberculosis bacterium (1882) and identified the bacterium that causes cholera (1883). Koch's postulates are his rules for proving that a specific microbe causes a specific disease.", src:"W1 Part 2, slide 13", ch:"W1-C4", added:"2026-10-26"},
    /* C5 */
    {id:"W1-T-jeremy-bentham", term:"Jeremy Bentham", def:"Industrial-era thinker: \"It is the greatest happiness of the greatest number that is the measure of right and wrong.\" Linked to the ideas that reducing mortality and improving health is better for the economy, and that good government and health and social policies matter.", src:"W1 Part 2, slide 14", ch:"W1-C5", added:"2026-10-26"},
    {id:"W1-T-edwin-chadwick", term:"Edwin Chadwick (1842)", def:"English social reformer. His 1842 report, \"Survey into the Sanitary Condition of the Labouring Classes in Great Britain\", described how filth in the environment spread disease in urban areas and exposed child labour: half of child labourers died before their 5th birthday. It led to reforms in sanitation and in treatment of the poor and working class.", src:"W1 Part 2, slide 16", ch:"W1-C5", added:"2026-10-26"},
    {id:"W1-T-great-sanitary-awakening", term:"Great Sanitary Awakening (1800 to 1900s)", def:"Period of more scientific knowledge of disease causes, greater humanitarian ideals and recognition of the link between poverty and disease. Brought clean water, sewage removal, garbage collection, public works departments, monitoring of community health status, and public health departments, regulation and inspection.", src:"W1 Part 2, slide 17", ch:"W1-C5", added:"2026-10-26"},
    /* C6 */
    {id:"W1-T-grosse-ile", term:"Grosse Ile", def:"A tiny island in the St. Lawrence in Quebec where many Irish immigrants arrived during the Great Irish famine of 1847. An example of early 19th century quarantine and isolation of immigrants carrying cholera and typhus.", src:"W1 Part 2, slide 18", ch:"W1-C6", added:"2026-10-26"},
    {id:"W1-T-lalonde-report", term:"Lalonde Report (1974)", def:"Report by former federal health minister Marc Lalonde. Looked beyond the individual to improving the health of the population and started the Population Health Movement. Argued that equating health with the availability of physicians and hospitals is inadequate; future gains lie in improving the environment, moderating self-imposed risks and adding to knowledge of human biology.", src:"W1 Part 2, slides 19-20", ch:"W1-C6", added:"2026-10-26"},
    {id:"W1-T-health-field-concept", term:"Health field concept", def:"Lalonde's model with 4 fields that each have a two-way link with health: human biology, environment, lifestyle and health care organization.", ex:"A provincial anti-smoking campaign works on the lifestyle field.", src:"W1 Part 2, slides 19-20", ch:"W1-C6", added:"2026-10-26"},
    {id:"W1-T-ottawa-charter", term:"Ottawa Charter for Health Promotion (1986)", def:"Result of the first international conference on health promotion, held in Ottawa. Aims: reduce inequities, ramp up prevention, empower individuals. Five action areas: build healthy public policy, create supportive environments, strengthen community action, develop personal skills, reorient health services. Seven prerequisites for health: peace, shelter, education, food, income, a stable eco-system and sustainable resources.", src:"W1 Part 2, slides 19, 21-22", ch:"W1-C6", added:"2026-10-26"},
    {id:"W1-T-phac-act-2006", term:"Public Health Agency of Canada Act (2006)", def:"Established the Public Health Agency of Canada and a Chief Public Health Officer, whose mandate is to advocate for disease prevention and health promotion, provide science-based policy advice to the federal health minister, lead special health initiatives and improve public health practice. Followed outbreaks in the early 2000s (Walkerton 2000, North Battlefield 2001, SARS 2002) that revealed cracks in public health. Dr. Joss Reimer became CPHO on April 1, 2026.", src:"W1 Part 2, slides 23-24", ch:"W1-C6", added:"2026-10-26"},
    /* C7 */
    {id:"W1-T-epidemiologic-transition", term:"Epidemiologic transition", def:"Theory first proposed by Abdel Omran in 1971: dramatic shifts in the patterns of mortality and disease as countries develop economically. Four transitions or stages.", src:"W1 Part 2, slide 25", ch:"W1-C7", added:"2026-10-26"},
    {id:"W1-T-age-of-pestilence-and-famine", term:"Age of Pestilence and Famine (stage 1)", def:"Most of human history. Life expectancy 20 to 40 years, high infant mortality, deaths mainly from malnutrition or infectious disease, no sustained population growth. CVD about 5 to 10% of deaths. Example: Sub-Saharan Africa.", src:"W1 Part 2, slide 26", ch:"W1-C7", added:"2026-10-26"},
    {id:"W1-T-age-of-receding-pandemics", term:"Age of Receding Pandemics (stage 2)", def:"Late 1800s to early 1900s in developed countries. Safer, more available food, sanitation, better prenatal and postnatal care, immunization and antibiotics drove down deaths from infection and malnutrition. Life expectancy about 50, infant mortality falls. CVD 15 to 35% of deaths. Example: some parts of Latin America and Southeast Asia.", src:"W1 Part 2, slide 27", ch:"W1-C7", added:"2026-10-26"},
    {id:"W1-T-age-of-degenerative-and-man-made-diseases", term:"Age of Degenerative and Man-Made Diseases (stage 3)", def:"Mid 20th century. Deaths from chronic diseases overtake deaths from infectious diseases. Life expectancy about 60. Peak in CVD and cancer; over 50% of deaths due to CVD. Example: some parts of Central Asia, Middle East, North Africa and urban India.", src:"W1 Part 2, slide 28", ch:"W1-C7", added:"2026-10-26"},
    {id:"W1-T-age-of-delayed-degenerative-disease", term:"Age of Delayed Degenerative Disease (stage 4)", def:"Mid-1960s to today. CVD mortality declines, though CVD is still a top 3 cause of death, thanks to prevention (smoking cessation, tobacco control), technology (blood pressure medications, coronary artery bypass surgery) and public health education. Life expectancy in Canada is about 82.", src:"W1 Part 2, slide 29", ch:"W1-C7", added:"2026-10-26"}
  ],

  chapters:[
    {
      id:"W1-C1", title:"Defining health and wellness", src:"W1 Part 1, slides 2-7",
      blurb:"Three definitions of health, and the nine dimensions of wellness.",
      learn:"The slides give three definitions of health. The <b>biomedical definition</b> calls health a \"state of normal function that can be disrupted from time to time by disease\". It is the predominant model in health care. The <b>1948 WHO definition</b> widens this to \"physical, mental, and social wellbeing, and not merely the absence of disease and infirmity\", but it is hard to measure. In the 1980s the WHO health promotion movement called health <b>a resource for everyday life, not the objective of living</b>: the ability to realize aspirations, satisfy needs, and change or cope with the environment. Health here is resiliency, not a static state.<br><br><b>Wellness</b> is optimal health and vitality. Health can be influenced by non-modifiable risk factors. Wellness is largely determined by modifiable ones. The 4th Canadian edition lists <b>nine dimensions</b> of wellness that keep influencing each other. Cultural, financial and occupational are the three that were added.",
      steps:[
        {id:"W1-C1-S1", type:"sort", src:"W1 Part 1, slides 2-4", prompt:"Sort each statement under the definition of health it belongs to.", bins:["Biomedical","WHO 1948","WHO 1980s health promotion"], items:[
          ["State of normal function, disrupted from time to time by disease", 0, "This is the biomedical quote on slide 2."],
          ["Predominant model in health care", 0, "Slide 2 says the biomedical definition dominates health care."],
          ["Physical, mental, and social wellbeing", 1, "The three parts of wellbeing in the 1948 WHO wording."],
          ["Not merely the absence of disease and infirmity", 1, "Also part of the 1948 WHO definition."],
          ["Hard to measure", 1, "Slide 3 gives this as the weakness of the 1948 definition."],
          ["A resource for everyday life, not the objective of living", 2, "From the 1984 WHO health promotion document."],
          ["Able to realize aspirations, satisfy needs, and change or cope with the environment", 2, "The 1984 WHO wording."],
          ["Health is resiliency, not a static state", 2, "Slide 4 heading for the health promotion view."]
        ]},
        {id:"W1-C1-S2", type:"match", src:"W1 Part 1, slide 7", prompt:"Match each dimension of wellness to an example from Fig 1.1.", pairs:[
          ["Physical", "Getting regular checkups"],
          ["Intellectual", "Ability to think critically"],
          ["Interpersonal", "Cultivating a support system of friends and family"],
          ["Cultural", "Maintaining and valuing your own cultural identity"],
          ["Spiritual", "Sense of meaning and purpose"],
          ["Financial", "Living within one's means"],
          ["Occupational", "Feeling valued by your manager"]
        ]},
        {id:"W1-C1-S3", type:"mcq", src:"W1 Part 1, slide 5", ch:"W1-C1", added:"2026-10-26",
          case:"Two students compare notes. Ana has a family history of heart disease. Ben stays up until 3 a.m. most nights and skips meals.",
          q:"Using the slides' distinction between health and wellness, which statement is correct?",
          opts:[
            ["Ana's family history is a non-modifiable factor that can influence her health; Ben's habits are modifiable factors that largely shape his wellness.", true, "Slide 5: health can be influenced by non-modifiable risk factors, wellness is largely determined by modifiable ones."],
            ["Ana's family history mainly shapes her wellness, while Ben's habits only affect his health.", false, "This reverses the slide. Wellness is tied to modifiable factors."],
            ["Neither student's situation matters, since wellness is defined as the absence of disease.", false, "Wellness is optimal health and vitality, not the absence of disease."],
            ["Both situations are determinants, since they occur at the population level.", false, "These are individual factors. Determinants are upstream, population-level factors."]
          ]}
      ],
      summary:"Health has a biomedical, a 1948 WHO and a 1980s WHO resource-for-living definition. Wellness is optimal health and vitality across nine interacting dimensions, shaped mostly by modifiable factors."
    },
    {
      id:"W1-C2", title:"Disease, illness, sickness and the biomedical model", src:"W1 Part 1, slides 8-10, 15",
      blurb:"Three perspectives on a condition, the biomedical model, and the clinical course of disease.",
      learn:"One condition can be seen three ways. <b>Disease</b> is the underlying pathology, biologically defined: the practitioner's view. <b>Illness</b> is the person's subjective experience of symptoms: what the patient brings to the doctor. <b>Sickness</b> is the social and cultural view of the condition, such as fear or rejection, and what counts as a disorder fit for medical treatment.<br><br>The <b>biomedical model</b> focuses on pathological processes. Illness results from disease, so removing the disease (for example, a stent in a narrowed coronary artery) restores health. It is <b>reductionist</b>: disease is abnormal structure or function of cells, organs and systems.<br><br>The <b>clinical course</b> runs from exposure, to biological onset, symptoms, diagnosis, therapy and outcomes. Onset to symptoms is the <b>preclinical phase</b>; after that is the <b>clinical phase</b>. An extended version adds an <b>etiological phase</b> before (determinants, then risk and protective factors) and a <b>post-clinical phase</b> after (impact on family, work and income).",
      steps:[
        {id:"W1-C2-S1", type:"sort", src:"W1 Part 1, slide 8", prompt:"Is each example about disease, illness or sickness?", bins:["Disease","Illness","Sickness"], items:[
          ["A biopsy shows abnormal cell growth in the lung", 0, "Biologically defined pathology, the practitioner's view."],
          ["Blood tests confirm high glucose", 0, "A measured biological abnormality."],
          ["Plaque narrowing a coronary artery", 0, "Underlying pathology."],
          ["A patient says she has felt exhausted and achy for weeks", 1, "Her subjective experience of symptoms."],
          ["\"My chest feels tight when I climb stairs\"", 1, "What the patient brings to the doctor."],
          ["Neighbours avoid a man after hearing his diagnosis", 2, "Cultural reactions such as fear or rejection."],
          ["A society debates whether a condition should be treated as a medical disorder", 2, "Sickness covers what is considered a disorder suitable for treatment."]
        ]},
        {id:"W1-C2-S2", type:"order", src:"W1 Part 1, slide 10", prompt:"Put the clinical course of a disease (biomedical view) in order.", items:[
          "Exposure to pathogen",
          "Biological onset of disease",
          "Symptoms appear",
          "Diagnosis",
          "Therapy begun",
          "Outcomes: cured, living with the disease, deteriorated, or died"
        ], why:"Onset to symptoms is the preclinical phase. From symptoms on is the clinical phase. A relapse loops back to diagnosis and a change in therapy."},
        {id:"W1-C2-S3", type:"sort", src:"W1 Part 1, slide 15", prompt:"Place each item in the phase of the extended clinical course where the figure shows it.", bins:["Etiological phase","Preclinical and clinical phases","Post-clinical phase"], items:[
          ["Conditions in society, such as economic stability", 0, "A social and environmental determinant, at the start of the etiological phase."],
          ["Community circumstances, such as services available", 0, "Also a social and environmental determinant."],
          ["Personal factors: lifestyle, genetics, education, occupation", 0, "Risk and protective factors, the second part of the etiological phase."],
          ["Biological onset of disease", 1, "Starts the preclinical phase."],
          ["Diagnosis and therapy", 1, "Clinical phase events."],
          ["Impairment", 1, "Shown under the clinical phase in the bottom row."],
          ["Longer-term impact on family, work and income", 2, "The longer-term outcome of the post-clinical phase."],
          ["Handicap", 2, "The last box in the impairment, disability, handicap row, under the post-clinical phase."]
        ]},
        {id:"W1-C2-S4", type:"mcq", src:"W1 Part 1, slide 9", ch:"W1-C2", added:"2026-10-26",
          case:"An oncologist explains a patient's lung tumour entirely as lung cells dividing in an uncontrolled way. The plan targets only the tumour cells.",
          q:"Which feature of the biomedical model does this explanation show most directly?",
          opts:[
            ["It treats illness as the patient's subjective experience.", false, "That is the illness perspective, not the biomedical focus on pathology."],
            ["It focuses on distal, population-level determinants.", false, "The biomedical model looks at pathology in the individual, not upstream determinants."],
            ["It is reductionist: disease is explained as abnormal structure or function of cells, organs and systems.", true, "Slide 9 calls the biomedical model reductionist for exactly this reason."],
            ["It views health as a resource for everyday life.", false, "That is the 1980s WHO health promotion view."]
          ]}
      ],
      summary:"Disease is pathology, illness is experience, sickness is the social view. The biomedical model is reductionist and equates removing disease with restored health; the clinical course can be extended to include etiological and post-clinical phases."
    },
    {
      id:"W1-C3", title:"Risk factors, determinants and the social-ecological model", src:"W1 Part 1, slides 11-19",
      blurb:"Epidemiology, the causal triad, risk factors versus determinants, and models of determinants.",
      learn:"<b>Epidemiology</b> is the study of the distribution and determinants of health-related states or events in specified populations, applied to control health problems. Causes form an interacting triad: <b>agent</b> (virulence, infectivity, addictive qualities), <b>host</b> (genetic susceptibility, resiliency, nutrition, motivation) and <b>environment</b> (sanitation, social context, access to care). A fire needs air, fuel and heat.<br><br>A <b>risk factor</b> is a variable linked to a higher statistical probability of disease, injury or infection. It is proximal to the individual, like smoking. A <b>determinant</b> is an upstream factor linked to higher risk. It is distal and works at the population level, like poor sanitation. Both are correlational, not causal. Determinant does not mean determinism.<br><br>The <b>social-ecological model</b> puts innate traits at the centre (proximal), then individual behaviour, social and community networks, living and working conditions (intermediate), and broad conditions and policies (distal). The Indigenous life course model adds mental, physical, emotional and spiritual health.",
      steps:[
        {id:"W1-C3-S1", type:"compare", src:"W1 Part 1, slides 14 and 17", prompt:"Risk factor or determinant?",
          a:{name:"Risk factor", points:["Variable associated with increased probability of disease, injury or infection","Proximal to the individual","Correlational, not causal"]},
          b:{name:"Determinant", points:["Upstream factor that correlates with increased risk","Distal, occurs at the population level","Correlational, not causal; not determinism"]},
          scenarios:[
            ["A student smokes a pack of cigarettes a day", 0, "Slide 14 shows smoking as a proximal risk factor."],
            ["An open drainage ditch runs through a low-income neighbourhood", 1, "Slide 14 shows poor sanitation as a distal, population-level determinant."],
            ["A country's income distribution is very unequal", 1, "Income distribution is an upstream social determinant."],
            ["A man rarely does any physical activity", 0, "An individual behaviour close to the person."],
            ["A city has a shortage of affordable housing", 1, "Housing is a social determinant at the population level."]
          ]},
        {id:"W1-C3-S2", type:"label", fig:"sem", src:"W1 Part 1, slide 18", prompt:"Drag each level onto the social-ecological model, from the proximal centre to the distal outer ring."},
        {id:"W1-C3-S3", type:"sort", src:"W1 Part 1, slide 16", prompt:"Is each item a social determinant of health (CPHA list) or an individual factor?", bins:["Social determinant","Individual factor"], items:[
          ["Income and income distribution", 0, "First item on the CPHA list."],
          ["Housing", 0, "On the CPHA list."],
          ["Social exclusion", 0, "On the CPHA list."],
          ["Racism", 0, "Added to the list by the instructor."],
          ["Early childhood development", 0, "On the CPHA list."],
          ["Age", 1, "Listed in the separate Individual Factors box."],
          ["Biological and hereditary factors", 1, "Individual Factors box."],
          ["Lifestyle and behaviours", 1, "Individual Factors box."]
        ]},
        {id:"W1-C3-S4", type:"mcq", src:"W1 Part 1, slides 11-12", ch:"W1-C3", added:"2026-10-26",
          case:"A class fills in the agent, host and environment triad for lung cancer.",
          q:"Where does the addictive quality of tobacco belong?",
          opts:[
            ["Host", false, "Host covers the person: genetic susceptibility, resiliency, nutritional status, motivation."],
            ["Agent", true, "Slide 11 lists addictive qualities under the agent, with virulence and infectivity."],
            ["Environment", false, "Environment covers sanitation, social context and availability of health care."],
            ["Vector", false, "Vector is not a corner of the triad; the slides use it for fleas in the plague."]
          ]}
      ],
      summary:"Risk factors are proximal and individual; determinants are distal and population-level; both are correlational. The social-ecological model arranges determinants from innate traits out to broad policies."
    },
    {
      id:"W1-C4", title:"From ancient health to germ theory", src:"W1 Part 2, slides 2-13",
      blurb:"Hunter-gatherers, farming, Hippocrates, the plague, and the scientists who built epidemiology.",
      learn:"Hunter-gatherers (10,000 years ago) followed tribal rules for survival, like avoiding stagnant water and keeping waste away from shelters. The <b>Agricultural Revolution</b> gave a secure food supply and population growth, but also zoonoses from living near animals, crowding, less varied diets, and garbage that drew rodents and insect vectors.<br><br><b>Hippocrates</b> (460 BC) said disease came from an imbalance between people and their environment, and an imbalance of humours. During the <b>Black Death</b> (1348), people blamed miasmas. The real cause was <i>Yersinia pestis</i>, with rats as reservoir and fleas as vector. Without a systematic way to test links between exposures and outcomes, there was little progress. Science and epidemiology filled that gap. Harvey published on the heart and blood (1628). Jenner used cowpox against smallpox (1796). <b>John Snow</b> removed the Broad Street Pump handle (1853). Pasteur published germ theory (1862). Koch found the tuberculosis (1882) and cholera (1883) bacteria.",
      steps:[
        {id:"W1-C4-S1", type:"order", src:"W1 Part 2, slides 5-13", prompt:"Put these events in historical order, earliest first.", items:[
          "Hippocrates links disease to imbalance with the environment (460 BC)",
          "The Black Death reaches Europe (1348)",
          "Harvey publishes his study of the motion of the heart and blood (1628)",
          "Jenner's cowpox experiment (1796)",
          "Snow removes the Broad Street Pump handle (1853)",
          "Pasteur disproves spontaneous generation and publishes germ theory (1862)",
          "Koch discovers the tuberculosis bacterium (1882)"
        ], why:"Ancient medicine, then the medieval plague, then the Age of Reason (Harvey, Jenner), then the 1800s rise of epidemiology and germ theory (Snow, Pasteur, Koch)."},
        {id:"W1-C4-S2", type:"match", src:"W1 Part 2, slides 5, 9-13", prompt:"Match each person to their contribution.", pairs:[
          ["Hippocrates", "Disease as an imbalance of humours and of man with the environment"],
          ["William Harvey", "Animal dissections and a study of the heart and blood"],
          ["Edward Jenner", "Cowpox inoculation conferred immunity to smallpox"],
          ["John Snow", "Systematically studied cholera outbreaks in London"],
          ["Louis Pasteur", "Disproved spontaneous generation; coined the term vaccine"],
          ["Robert Koch", "Postulates for proving a specific microbe causes a specific disease"]
        ]},
        {id:"W1-C4-S3", type:"mcq", src:"W1 Part 2, slide 7", ch:"W1-C4", added:"2026-10-26",
          case:"During the plague, a town council orders swamps drained and cesspools covered, convinced that bad vapours spread the disease.",
          q:"Which theory guided the council?",
          opts:[
            ["Germ theory", false, "Germ theory came from Pasteur in 1862, centuries later."],
            ["Imbalance of the humours", false, "That was Hippocrates' idea about body fluids, not vapours."],
            ["Koch's postulates", false, "Koch's postulates are rules for proving a microbe causes a disease (1880s)."],
            ["Miasma theory", true, "Slide 7: one theory blamed miasmas, vapours from swamps or cesspools."]
          ]},
        {id:"W1-C4-S4", type:"mcq", src:"W1 Part 2, slide 13", ch:"W1-C4", added:"2026-10-26",
          case:"Winemakers in the 1800s keep losing batches to spoilage.",
          q:"Which of Pasteur's contributions is credited on the slides with saving the wine industry?",
          opts:[
            ["Vaccination against rabies", false, "A Pasteur vaccine, but not linked to wine."],
            ["Identifying the cholera bacterium", false, "Koch identified the cholera bacterium in 1883."],
            ["Cowpox inoculation", false, "That was Jenner in 1796."],
            ["Pasteurization", true, "Slide 13: pasteurization saved the wine industry."]
          ]}
      ],
      summary:"Ideas about disease moved from imbalance and miasma to systematic study. Snow, Harvey, Jenner, Pasteur and Koch built the science that showed specific causes for specific diseases."
    },
    {
      id:"W1-C5", title:"Industrial era and sanitary reform", src:"W1 Part 2, slides 14-17",
      blurb:"Urban slums, Bentham, Chadwick's report and the Great Sanitary Awakening.",
      learn:"The Industrial Revolution brought ideals of democracy, reason and citizenship. <b>Jeremy Bentham</b> wrote that \"the greatest happiness of the greatest number\" is the measure of right and wrong. Reducing mortality was seen as good for the economy, and good government and social policy mattered.<br><br>Cities also brought slums, poverty, no indoor plumbing or sewage removal, fast spread of infection and dangerous work. Life expectancy took a nosedive. <b>Edwin Chadwick</b>'s 1842 report on the sanitary condition of the labouring classes showed how filth spread disease in cities. It exposed child labour: half of child labourers died before their 5th birthday. It led to sanitary reform.<br><br>The <b>Great Sanitary Awakening</b> (1800 to 1900s) joined scientific knowledge with humanitarian ideals. It linked poverty and disease and brought clean water, sewage removal, garbage collection, public works departments, health departments, regulation, inspection and monitoring of community health.",
      steps:[
        {id:"W1-C5-S1", type:"sort", src:"W1 Part 2, slides 15 and 17", prompt:"Was each item a problem of industrial cities or a response during the Great Sanitary Awakening?", bins:["Industrial-era problem","Sanitary Awakening response"], items:[
          ["Slums and poverty", 0, "Slide 15."],
          ["Lack of indoor plumbing and sewage removal", 0, "Slide 15."],
          ["Dangerous working conditions", 0, "Slide 15."],
          ["Life expectancy takes a nosedive", 0, "Slide 15."],
          ["Public works departments", 1, "Slide 17."],
          ["Monitoring community health status", 1, "Slide 17."],
          ["Public health departments, regulation and inspection", 1, "Slide 17."],
          ["Clean water supply and garbage collection", 1, "Slide 17."]
        ]},
        {id:"W1-C5-S2", type:"match", src:"W1 Part 2, slides 14-17", prompt:"Match each item to what the slides say about it.", pairs:[
          ["Jeremy Bentham", "Greatest happiness of the greatest number"],
          ["Edwin Chadwick", "1842 report on the sanitary condition of the labouring classes"],
          ["Child labourers in Chadwick's report", "Half died before their 5th birthday"],
          ["Great Sanitary Awakening", "Recognized the connection between poverty and disease"],
          ["Industrial cities", "Rapid spread of infectious diseases"]
        ]},
        {id:"W1-C5-S3", type:"mcq", src:"W1 Part 2, slide 15", ch:"W1-C5", added:"2026-10-26",
          case:"A historian notes that life expectancy fell in fast-growing industrial cities during the 1800s.",
          q:"Which explanation fits the slides?",
          opts:[
            ["Humans began living near farm animals, causing zoonoses", false, "That is the Agricultural Revolution, thousands of years earlier."],
            ["Slums, poverty, no proper sewage removal, rapid spread of infection and dangerous work", true, "These are the conditions listed on slide 15 before the line about life expectancy."],
            ["Chronic disease deaths overtook infectious disease deaths", false, "That describes Omran's stage 3, in the mid 20th century."],
            ["Pasteurization and vaccines were not yet invented anywhere", false, "Not the explanation given; Jenner's smallpox inoculation already existed (1796)."]
          ]}
      ],
      summary:"Industrial cities spread disease and cut life expectancy. Chadwick's 1842 report and the Great Sanitary Awakening tied poverty to disease and built public works and health departments."
    },
    {
      id:"W1-C6", title:"Public health in Canada", src:"W1 Part 2, slides 18-24",
      blurb:"From quarantine at Grosse Ile to Lalonde, the Ottawa Charter and the Public Health Agency of Canada.",
      learn:"In the early to mid 19th century, Canada focused on water, sanitation, and quarantine and isolation of immigrants carrying cholera and typhus, as at <b>Grosse Ile</b> during the Irish famine of 1847. The early 20th century brought water chlorination, milk pasteurization and vaccines for smallpox and diphtheria. The WHO was set up in 1948.<br><br>The 1974 <b>Lalonde Report</b> looked beyond the individual to population health and started the Population Health Movement. Its <b>health field concept</b> has four fields: human biology, environment, lifestyle and health care organization. Equating health with doctors and hospitals is inadequate.<br><br>The 1986 <b>Ottawa Charter</b> came from the first international health promotion conference. It has five action areas and seven prerequisites for health.<br><br>Outbreaks in the early 2000s (Walkerton 2000, North Battlefield 2001, SARS in Toronto 2002 with 44 deaths) showed cracks in public health. The 2006 Act created the <b>Public Health Agency of Canada</b> and a Chief Public Health Officer.",
      steps:[
        {id:"W1-C6-S1", type:"order", src:"W1 Part 2, slides 18-24", prompt:"Put these Canadian and global public health events in order.", items:[
          "Irish famine immigrants quarantined at Grosse Ile (1847)",
          "World Health Organization established within the UN (1948)",
          "Lalonde Report (1974)",
          "Ottawa Charter for Health Promotion (1986)",
          "E. coli outbreak in Walkerton, ON (2000)",
          "SARS in Toronto (2002)",
          "Public Health Agency of Canada Act (2006)"
        ], why:"Quarantine came first, then the WHO, then the population health and health promotion era, then the early-2000s outbreaks that led to PHAC."},
        {id:"W1-C6-S2", type:"label", fig:"lalonde", src:"W1 Part 2, slide 20", prompt:"Drag the four fields of Lalonde's health field concept onto the figure."},
        {id:"W1-C6-S3", type:"sort", src:"W1 Part 2, slides 21-22", prompt:"Ottawa Charter: is each item an action area or a prerequisite for health?", bins:["Action area","Prerequisite for health"], items:[
          ["Building healthy public policy", 0, "One of the five action areas."],
          ["Creating supportive environments", 0, "Action area."],
          ["Strengthening community action", 0, "Action area."],
          ["Reorienting health services", 0, "Action area."],
          ["Peace", 1, "One of the seven prerequisites."],
          ["Shelter", 1, "Prerequisite."],
          ["Income", 1, "Prerequisite."],
          ["A stable eco-system", 1, "Prerequisite."]
        ]},
        {id:"W1-C6-S4", type:"mcq", src:"W1 Part 2, slides 19, 21", ch:"W1-C6", added:"2026-10-26",
          case:"A regional health authority moves part of its hospital budget into prevention programs run by its own clinics.",
          q:"Which Ottawa Charter action area does this match best?",
          opts:[
            ["Developing personal skills", false, "That is about building individuals' abilities, not changing how services are run."],
            ["Strengthening community action", false, "That is about communities acting together, not a health authority changing its services."],
            ["Reorienting health services", true, "The health services themselves change direction, in line with the Charter's aim to ramp up prevention."],
            ["Creating supportive environments", false, "That is about the settings people live in, not the health system's priorities."]
          ]}
      ],
      summary:"Canada moved from quarantine and sanitation to population health (Lalonde, 1974) and health promotion (Ottawa Charter, 1986). Early-2000s outbreaks led to the Public Health Agency of Canada in 2006."
    },
    {
      id:"W1-C7", title:"Epidemiologic transitions", src:"W1 Part 2, slides 25-30",
      blurb:"Omran's four stages and the rise in Canadian life expectancy.",
      learn:"Abdel Omran proposed the <b>epidemiologic transition</b> in 1971: patterns of death and disease shift as countries develop economically. There are four stages.<ul><li><b>Pestilence and Famine</b>: most of human history. Life expectancy 20 to 40, high infant mortality, deaths from malnutrition and infection. CVD about 5 to 10% of deaths.</li><li><b>Receding Pandemics</b>: late 1800s to early 1900s in developed countries. Safer food, sanitation, immunization and antibiotics. Life expectancy about 50. CVD 15 to 35%.</li><li><b>Degenerative and Man-Made Diseases</b>: mid 20th century. Chronic disease deaths overtake infectious ones. Life expectancy about 60. CVD over 50%.</li><li><b>Delayed Degenerative Disease</b>: mid-1960s to today. CVD deaths fall through tobacco control, blood pressure drugs, bypass surgery and health education. Life expectancy in Canada is about 82.</li></ul>",
      steps:[
        {id:"W1-C7-S1", type:"label", fig:"transitions", src:"W1 Part 2, slides 26-29", prompt:"Drag Omran's four stages into order."},
        {id:"W1-C7-S2", type:"sort", src:"W1 Part 2, slides 26-29", prompt:"Which stage does each feature belong to?", bins:["1. Pestilence and Famine","2. Receding Pandemics","3. Degenerative and Man-Made Diseases","4. Delayed Degenerative Disease"], items:[
          ["Life expectancy between 20 and 40 years", 0, "Slide 26."],
          ["CVD about 5 to 10% of deaths", 0, "Slide 26."],
          ["Immunization programs and antibiotics introduced", 1, "Slide 27."],
          ["CVD 15 to 35% of deaths; life expectancy about 50", 1, "Slide 27."],
          ["Chronic disease deaths overtake infectious disease deaths", 2, "Slide 28."],
          ["Peak in CVD and cancer; over 50% of deaths from CVD", 2, "Slide 28."],
          ["Coronary artery bypass surgery and blood pressure medications", 3, "Slide 29, technological advances."],
          ["Life expectancy in Canada about 82", 3, "Slide 29."]
        ]},
        {id:"W1-C7-S3", type:"table", src:"W1 Part 2, slide 30", prompt:"Read Fig 1.2, life expectancy in Canada over time.", caption:"Fig 1.2 Public Health Achievements of the Twentieth and Twenty-First Centuries: life expectancy (years)",
          head:["Year","Life expectancy"],
          rows:[["1900","47.3"],["1910","50.0"],["1920","57.1"],["1930","59.8"],["1940","64.3"],["1950","68.1"],["1960","70.8"],["1970","72.5"],["1980","75.2"],["1990","77.5"],["2000","79.2"],["2010","81.5"],["2019","82.05"],["2022","81.3"]],
          qs:[
            {id:"W1-C7-S3-Q1", type:"mcq", src:"W1 Part 2, slide 30", ch:"W1-C7", added:"2026-10-26",
              q:"In which listed year did life expectancy first pass 70 years?",
              opts:[
                ["1960", true, "70.8 in 1960; 1950 was 68.1."],
                ["1950", false, "1950 was 68.1, still below 70."],
                ["1970", false, "1970 was 72.5, but it had already passed 70 in 1960."],
                ["1940", false, "1940 was 64.3."]
              ]},
            {id:"W1-C7-S3-Q2", type:"mcq", src:"W1 Part 2, slide 30", ch:"W1-C7", added:"2026-10-26",
              q:"Life expectancy fell from 82.05 to 81.3. Which period was this, and what does the figure place there?",
              opts:[
                ["2019 to 2022, the COVID-19 pandemic", true, "The only drop on the chart, marked with the COVID-19 icon."],
                ["2010 to 2019, the decline in heart disease deaths", false, "Life expectancy rose from 81.5 to 82.05 in that period."],
                ["1990 to 2000, healthier mothers and babies", false, "It rose from 77.5 to 79.2."],
                ["1960 to 1970, recognition of tobacco as a health hazard", false, "It rose from 70.8 to 72.5."]
              ]}
          ]},
        {id:"W1-C7-S4", type:"mcq", src:"W1 Part 2, slide 26", ch:"W1-C7", added:"2026-10-26",
          case:"In a region, most people die of malnutrition or infectious disease, infant mortality is high, and the population cannot sustain growth. Only about 5 to 10% of deaths are from CVD.",
          q:"Which epidemiologic transition stage is this?",
          opts:[
            ["Age of Receding Pandemics", false, "In stage 2 infectious and malnutrition deaths are being driven down, and CVD is 15 to 35%."],
            ["Age of Degenerative and Man-Made Diseases", false, "Stage 3 has chronic disease deaths overtaking infectious ones."],
            ["Age of Pestilence and Famine", true, "Every feature matches slide 26; the slide gives Sub-Saharan Africa as an example."],
            ["Age of Delayed Degenerative Disease", false, "Stage 4 is the modern stage with life expectancy around 82 in Canada."]
          ]}
      ],
      summary:"Omran (1971) described four stages, from pestilence and famine to delayed degenerative disease. Canadian life expectancy rose from 47.3 in 1900 to 82.05 in 2019, then dipped during COVID-19."
    }
  ],

  questions:[
    /* C1: definitions of health and wellness */
    {id:"W1-Q01", type:"mcq", ch:"W1-C1", src:"W1 Part 1, slide 2", added:"2026-10-26",
      q:"Which definition of health is described as the predominant model in health care?",
      opts:[
        ["Physical, mental, and social wellbeing, and not merely the absence of disease and infirmity", false, "The 1948 WHO definition. It is broad but hard to measure."],
        ["A state of normal function that can be disrupted from time to time by disease", true, "This is the biomedical definition, which slide 2 calls predominant in health care."],
        ["A resource for everyday life, not the objective of living", false, "The 1980s WHO health promotion view."],
        ["Optimal health and vitality", false, "That is the definition of wellness."]
      ]},
    {id:"W1-Q02", type:"mcq", ch:"W1-C1", src:"W1 Part 1, slide 3", added:"2026-10-26",
      case:"A health ministry tries to track how many citizens are healthy using the 1948 WHO definition.",
      q:"Which problem from the slides is the ministry most likely to face?",
      opts:[
        ["The definition ignores physical health.", false, "It explicitly includes physical wellbeing."],
        ["The definition treats health as only the absence of disease.", false, "It says health is not merely the absence of disease."],
        ["The definition applies only to people with a diagnosed disease.", false, "Nothing on the slide limits it this way."],
        ["The definition is hard to measure.", true, "Slide 3 names this as the weakness of the 1948 definition."]
      ]},
    {id:"W1-Q03", type:"mcq", ch:"W1-C1", src:"W1 Part 1, slide 4", added:"2026-10-26",
      case:"Priya has type 1 diabetes. She manages her blood sugar, leads a campus club, and says she can meet her goals and cope with the stress of first year.",
      q:"Which view of health best supports calling Priya healthy?",
      opts:[
        ["The biomedical definition: a state of normal function disrupted by disease", false, "Under this view her disease disrupts normal function."],
        ["Health determined mainly by non-modifiable risk factors", false, "This is not a definition of health on the slides; slide 5 says health can be influenced by such factors."],
        ["The sickness perspective", false, "Sickness is the social and cultural view of a condition, not a definition of health."],
        ["Health as a resource for everyday life: the ability to realize aspirations, satisfy needs and cope with the environment", true, "The 1980s WHO view focuses on coping and meeting needs, not on the absence of disease."]
      ]},
    {id:"W1-Q04", type:"mcq", ch:"W1-C1", src:"W1 Part 1, slides 6-7", added:"2026-10-26",
      q:"According to the 4th Canadian edition, how many dimensions of wellness are there, and which three were added?",
      opts:[
        ["Six; cultural, financial and occupational", false, "Six was the older count, before these three were added."],
        ["Nine; cultural, financial and occupational", true, "Slide 6: six was struck out for nine, and these three were added in the 4th edition."],
        ["Nine; spiritual, environmental and intellectual", false, "These three were already in the six-dimension figure."],
        ["Nine; interpersonal, emotional and physical", false, "These were already present; interpersonal is the new name for social."]
      ]},
    {id:"W1-Q05", type:"mcq", ch:"W1-C1", src:"W1 Part 1, slide 7", added:"2026-10-26",
      case:"Jordan makes a monthly budget, stops buying things he does not need on credit, and starts an emergency fund.",
      q:"Which dimension of wellness is Jordan working on?",
      opts:[
        ["Occupational", false, "Occupational is about enjoying your work and relationships at work."],
        ["Emotional", false, "Emotional covers optimism, self-esteem and sharing feelings."],
        ["Financial", true, "Fig 1.1: living within one's means, avoiding debt, saving for the future and emergencies."],
        ["Environmental", false, "Environmental covers clean resources, recycling and reducing pollution."]
      ]},
    {id:"W1-Q06", type:"mcq", ch:"W1-C1", src:"W1 Part 1, slide 7", added:"2026-10-26",
      case:"Mei joins a multicultural student association to build friendships with people from backgrounds unlike hers, while keeping up her own family's traditions.",
      q:"Which dimension of wellness does this best match?",
      opts:[
        ["Cultural", true, "Fig 1.1: creating relationships with those different from you, and valuing your own cultural identity."],
        ["Interpersonal", false, "Interpersonal is about relationships and support systems in general, not cultural identity or difference."],
        ["Spiritual", false, "Spiritual covers meaning, purpose, compassion and belonging to something greater."],
        ["Intellectual", false, "Intellectual covers openness to ideas, critical thinking and curiosity."]
      ]},

    /* C2: disease, illness, sickness, biomedical model */
    {id:"W1-Q07", type:"mcq", ch:"W1-C2", src:"W1 Part 1, slide 8", added:"2026-10-26",
      q:"Which perspective is defined as a person's subjective experience of their symptoms?",
      opts:[
        ["Illness", true, "Illness is what the patient brings to the doctor."],
        ["Disease", false, "Disease is the underlying pathology, the practitioner's view."],
        ["Sickness", false, "Sickness is the social and cultural conception of the condition."],
        ["Impairment", false, "Impairment is a box in the extended clinical course figure, not one of the three perspectives."]
      ]},
    {id:"W1-Q08", type:"mcq", ch:"W1-C2", src:"W1 Part 1, slide 8", added:"2026-10-26",
      case:"After his diagnosis becomes known, a man's neighbours stop visiting out of fear, and he begins hiding his condition.",
      q:"Which perspective describes the neighbours' reaction and its effect on him?",
      opts:[
        ["Illness", false, "Illness is his own experience of symptoms, not others' reactions."],
        ["Disease", false, "Disease is the biological pathology."],
        ["Sickness", true, "Sickness covers cultural reactions such as fear or rejection, which affect how the patient reacts."],
        ["Etiological phase", false, "That is the pre-disease stage of the extended clinical course."]
      ]},
    {id:"W1-Q09", type:"mcq", ch:"W1-C2", src:"W1 Part 1, slide 9", added:"2026-10-26",
      case:"A cardiologist inserts a stent into a narrowed coronary artery. Once blood flow is restored, she tells the patient he is healthy again.",
      q:"Which model is she applying?",
      opts:[
        ["The social-ecological model", false, "That model looks at layers of determinants around the person, not only the artery."],
        ["The biomedical model: removal of pathology results in restored health", true, "Slide 9 uses a stent as its example."],
        ["Lalonde's health field concept", false, "That model adds environment, lifestyle and health care organization to biology."],
        ["The 1980s WHO resource-for-living view", false, "That view defines health by coping and meeting needs, not by removal of pathology."]
      ]},
    {id:"W1-Q10", type:"mcq", ch:"W1-C2", src:"W1 Part 1, slide 10", added:"2026-10-26",
      case:"A 50-year-old feels fine, but plaque is building up in his arteries. He has had no symptoms and no diagnosis.",
      q:"Which phase of the clinical course is he in?",
      opts:[
        ["Clinical phase", false, "The clinical phase begins when symptoms appear."],
        ["Post-clinical phase", false, "That comes after the clinical phase, with longer-term outcomes."],
        ["Etiological phase", false, "The etiological phase is before biological onset: determinants and risk factors."],
        ["Preclinical phase", true, "Biological onset has occurred but symptoms have not appeared."]
      ]},
    {id:"W1-Q11", type:"mcq", ch:"W1-C2", src:"W1 Part 1, slide 15", added:"2026-10-26",
      case:"Two years after a stroke, a woman cannot return to her job, and her family's income has dropped.",
      q:"In the extended clinical course of disease, where do these effects belong?",
      opts:[
        ["Etiological phase: risk and protective factors", false, "Those come before the disease."],
        ["Preclinical phase", false, "That is before symptoms."],
        ["Social and environmental determinants", false, "Those are the upstream causes in the etiological phase."],
        ["Post-clinical phase: longer-term outcome", true, "Slide 15 lists impact on family, work and economic impact as the longer-term outcome."]
      ]},

    /* C3: risk factors, determinants, SEM */
    {id:"W1-Q12", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slide 11", added:"2026-10-26",
      q:"Which is the definition of epidemiology given in the course?",
      opts:[
        ["The study of pathological processes in cells, organs and systems", false, "That describes the reductionist biomedical model."],
        ["The study of the distribution and determinants of health-related states or events in specified populations, and the application of this study to the control of health problems", true, "This is the quoted definition on slide 11."],
        ["The study of a person's subjective experience of symptoms", false, "That describes illness."],
        ["The study of how countries' disease patterns shift as they develop economically", false, "That is the epidemiologic transition, one topic within epidemiology."]
      ]},
    {id:"W1-Q13", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slides 11 and 13", added:"2026-10-26",
      case:"Mapping COVID-19 onto the triad of causal factors, a student lists public health sanitation and availability of health care in one region.",
      q:"Which corner of the triad do these belong to?",
      opts:[
        ["Host", false, "Host is the person: genetic susceptibility, resiliency, nutritional status, motivation."],
        ["Agent", false, "Agent covers virulence, infectivity and addictive qualities."],
        ["Environment", true, "Slide 11 lists sanitation, social context and availability of health care under environment."],
        ["Reservoir", false, "Reservoir is not part of the triad; it was used for rats in the plague."]
      ]},
    {id:"W1-Q14", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slide 14", added:"2026-10-26",
      case:"In one city, low-income neighbourhoods have open drainage ditches of polluted water running between homes.",
      q:"How do the slides classify this?",
      opts:[
        ["A determinant: distal, upstream, at the population level", true, "Slide 14 uses this exact kind of photo to show a determinant."],
        ["A risk factor: proximal to the individual", false, "Risk factors are closer to the person, like smoking."],
        ["A proven cause of every disease in the area", false, "Determinants are correlational, not causal."],
        ["An innate individual trait", false, "Innate traits are age, sex, race and biology."]
      ]},
    {id:"W1-Q15", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slides 14 and 17", added:"2026-10-26",
      q:"Which statement about risk factors and determinants is NOT true?",
      opts:[
        ["Risk factors are causal, while determinants are only correlational.", true, "This is false: slide 14 says both are correlational, not causal."],
        ["Determinants tend to be distal and occur at the population level.", false, "True, from slide 14."],
        ["Risk factors tend to be proximal to the individual.", false, "True, from slide 14."],
        ["A determinant does not imply that an outcome is inevitable.", false, "True: slide 17 says determinant does not imply determinism."]
      ]},
    {id:"W1-Q16", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slide 18", added:"2026-10-26",
      case:"A factory worker has rotating night shifts, little job security and daily exposure to fumes.",
      q:"In the social-ecological model, which level do these conditions fall under?",
      opts:[
        ["Individual behaviour", false, "These are conditions of his job, not his own choices."],
        ["Social, family and community networks", false, "That level is about relationships and support."],
        ["Living and working conditions", true, "The slide 18 callout lists employment status and occupational factors here."],
        ["Innate individual traits", false, "That level is age, sex, race and biological factors."]
      ]},
    {id:"W1-Q17", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slide 18", added:"2026-10-26",
      case:"The federal government changes national tax and income support policy, which shifts income distribution for millions of people.",
      q:"Which level of the social-ecological model does this act on, and how is it labelled?",
      opts:[
        ["Living and working conditions; proximal", false, "Living and working conditions are labelled intermediate, and national policy sits further out."],
        ["Broad social, economic, cultural, health and environmental conditions and policies; distal", true, "The outer ring covers policies at the global, national, state and local levels and is labelled distal."],
        ["Social, family and community networks; intermediate", false, "Networks are relationships, not national policy."],
        ["Individual behaviour; proximal", false, "Tax policy is not an individual's behaviour."]
      ]},
    {id:"W1-Q18", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slide 16", added:"2026-10-26",
      case:"A Black woman reports being passed over at work in ways she links to both her race and her gender together.",
      q:"Which concept from the slides describes this?",
      opts:[
        ["Determinism", false, "Slide 17 says determinants do not imply determinism, or inevitability."],
        ["Reductionism", false, "Reductionism describes the biomedical model."],
        ["Sickness", false, "Sickness is the social view of a health condition, not overlapping determinants."],
        ["Intersectionality", true, "Slide 16 gives discrimination based on both race and gender as its example."]
      ]},
    {id:"W1-Q19", type:"mcq", ch:"W1-C3", src:"W1 Part 1, slide 19", added:"2026-10-26",
      q:"Which description fits the Integrated Life Course and Social Determinants Model of Indigenous Health?",
      opts:[
        ["Four fields of human biology, environment, lifestyle and health care organization linked to health", false, "That is Lalonde's health field concept."],
        ["Agent, host and environment interacting to cause disease", false, "That is the triad of causal factors."],
        ["Nine interacting dimensions on a continuum from malaise to a vital life", false, "That describes the dimensions of wellness."],
        ["The child is at the centre, developing to adulthood, with mental, physical, emotional and spiritual aspects, surrounded by social determinants", true, "This matches the slide 19 figure and text."]
      ]},

    /* C4: early history to germ theory */
    {id:"W1-Q20", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slide 4", added:"2026-10-26",
      case:"Early farmers keep cattle and pigs right beside their homes and begin catching diseases from them.",
      q:"Which term from the Agricultural Revolution slides fits this?",
      opts:[
        ["Miasma", false, "Miasma was a plague-era theory about vapours from swamps."],
        ["Zoonoses", true, "Slide 4: humans living near animals led to zoonoses."],
        ["Pandemics receding", false, "That is Omran's stage 2, thousands of years later."],
        ["Spontaneous generation", false, "A theory Pasteur disproved in 1862."]
      ]},
    {id:"W1-Q21", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slide 5", added:"2026-10-26",
      q:"Which idea is linked to Hippocrates on the slides?",
      opts:[
        ["Specific microbes cause specific diseases", false, "That is germ theory and Koch's postulates."],
        ["Rats are the reservoir and fleas are the vector", false, "That describes the plague."],
        ["Disease is caused by an imbalance of man with the environment and of the humours", true, "Slide 5, with links to climate, water, lifestyle and nutrition."],
        ["Mammals reproduce by fertilization of an egg by sperm", false, "Harvey was first to hypothesize this."]
      ]},
    {id:"W1-Q22", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slide 7", added:"2026-10-26",
      q:"In the bubonic plague, what roles did rats and fleas play?",
      opts:[
        ["Rats were the reservoir; fleas were the vector", true, "Slide 7 states this directly; the bacterium was Yersinia pestis."],
        ["Fleas were the reservoir; rats were the vector", false, "This reverses the roles."],
        ["Rats were the agent; fleas were the host", false, "The agent was the bacterium Yersinia pestis."],
        ["Both were sources of miasma", false, "Miasma was the mistaken vapour theory."]
      ]},
    {id:"W1-Q23", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slide 8", added:"2026-10-26",
      q:"According to the slides, what was the major factor that held back understanding of the causes of disease?",
      opts:[
        ["The lack of a systematic way to test associations between exposures and outcomes", true, "Slide 8, which leads to the need for science and epidemiology."],
        ["The lack of hospitals and physicians", false, "Not given as the reason; Lalonde later argued doctors and hospitals are not the whole story."],
        ["The belief that disease came from imbalanced humours", false, "This was one early idea, but slide 8 names the lack of systematic testing."],
        ["The lack of vaccines", false, "Not the reason given on slide 8."]
      ]},
    {id:"W1-Q24", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slides 9-10", added:"2026-10-26",
      q:"Why is John Snow's removal of the Broad Street Pump handle in 1853 significant?",
      opts:[
        ["It was the first time the cholera bacterium was seen under a microscope", false, "Koch identified the cholera bacterium in 1883."],
        ["It was the first vaccine trial", false, "Jenner's cowpox experiment was in 1796."],
        ["It is called the first public health intervention, based on systematic study of outbreak data", true, "Slides 9 and 10."],
        ["It disproved spontaneous generation", false, "That was Pasteur in 1862."]
      ]},
    {id:"W1-Q25", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slides 12-13", added:"2026-10-26",
      q:"Which statement about smallpox inoculation is true according to the slides?",
      opts:[
        ["Jenner coined the term vaccine", false, "Pasteur coined it, in honour of Jenner."],
        ["Inoculation against smallpox was practised in China and India as early as 1000 CE, before Jenner", true, "Slide 12: Jenner was not the first; ground-up smallpox scabs were used."],
        ["Jenner inoculated people with ground-up smallpox scabs", false, "Jenner used material from cowpox pustules."],
        ["Smallpox is caused by a bacterium", false, "The slide says smallpox is caused by a virus."]
      ]},
    {id:"W1-Q26", type:"mcq", ch:"W1-C4", src:"W1 Part 2, slide 13", added:"2026-10-26",
      case:"A researcher suspects a newly found microbe causes a lung disease and wants a formal set of rules to prove it.",
      q:"What would the researcher use?",
      opts:[
        ["The health field concept", false, "Lalonde's model of four influences on health."],
        ["The miasma theory", false, "A discredited theory about vapours."],
        ["The Ottawa Charter", false, "A health promotion framework."],
        ["Koch's postulates", true, "Slide 13: Koch's postulates prove that a specific microbe causes a specific disease."]
      ]},

    /* C5: industrial era and sanitary reform */
    {id:"W1-Q27", type:"mcq", ch:"W1-C5", src:"W1 Part 2, slide 16", added:"2026-10-26",
      case:"An 1842 report shows that filth in the environment spreads disease in cities and that half of child labourers die before age 5.",
      q:"Who wrote this report?",
      opts:[
        ["Jeremy Bentham", false, "Bentham is quoted for the greatest happiness principle, not this report."],
        ["John Snow", false, "Snow studied cholera outbreaks in the 1850s."],
        ["Marc Lalonde", false, "Lalonde wrote the 1974 Canadian report."],
        ["Edwin Chadwick", true, "His Survey into the Sanitary Condition of the Labouring Classes in Great Britain (1842)."]
      ]},
    {id:"W1-Q28", type:"mcq", ch:"W1-C5", src:"W1 Part 2, slide 14", added:"2026-10-26",
      case:"A 19th-century official argues for funding city sewers because healthier workers help the economy and benefit the most people.",
      q:"Which idea from the slides does this argument reflect?",
      opts:[
        ["Hippocrates' balance of the humours", false, "That is about body fluids, not economics or policy."],
        ["Bentham's \"greatest happiness of the greatest number\", and that lower mortality is better for the economy", true, "Slide 14 links these industrial-era ideals."],
        ["Koch's postulates", false, "Rules for linking microbes to disease."],
        ["Omran's epidemiologic transition", false, "A 1971 theory of shifting disease patterns."]
      ]},
    {id:"W1-Q29", type:"mcq", ch:"W1-C5", src:"W1 Part 2, slide 17", added:"2026-10-26",
      q:"Which was NOT a feature of the Great Sanitary Awakening (1800 to 1900s)?",
      opts:[
        ["Recognition of the connection between poverty and disease", false, "Listed on slide 17."],
        ["Public works departments", false, "Listed on slide 17."],
        ["Establishment of a national public health agency with a Chief Public Health Officer", true, "That is the 2006 Public Health Agency of Canada Act."],
        ["Monitoring community health status", false, "Listed on slide 17."]
      ]},

    /* C6: public health in Canada */
    {id:"W1-Q30", type:"mcq", ch:"W1-C6", src:"W1 Part 2, slide 20", added:"2026-10-26",
      case:"A province launches a campaign to cut smoking and get people more active.",
      q:"Which field of Lalonde's health field concept does it target?",
      opts:[
        ["Lifestyle", true, "Lalonde's report speaks of moderating self-imposed risks."],
        ["Human biology", false, "Human biology is about the body and genetics, not habits."],
        ["Environment", false, "Environment is about surroundings, not personal habits."],
        ["Health care organization", false, "That field is about the health care system."]
      ]},
    {id:"W1-Q31", type:"mcq", ch:"W1-C6", src:"W1 Part 2, slides 19-20", added:"2026-10-26",
      q:"What did the 1974 Lalonde Report argue?",
      opts:[
        ["Equating the level of health with the availability of physicians and hospitals is inadequate; look beyond the individual to the population", true, "Slides 19 and 20. It started the Population Health Movement."],
        ["Health is the absence of disease and is best restored by treatment", false, "That is the biomedical view."],
        ["The main threats to Canadians are infectious diseases arriving with immigrants", false, "That was the early 19th century focus on quarantine."],
        ["Canada needed a Chief Public Health Officer", false, "That came with the 2006 PHAC Act."]
      ]},
    {id:"W1-Q32", type:"mcq", ch:"W1-C6", src:"W1 Part 2, slide 21", added:"2026-10-26",
      case:"A community health centre runs cooking and budgeting workshops so residents can make healthier choices on their own.",
      q:"Which Ottawa Charter action area does this match?",
      opts:[
        ["Building healthy public policy", false, "That would be laws or policies, not workshops."],
        ["Reorienting health services", false, "That is about changing how health services are run."],
        ["Developing personal skills", true, "The workshops build individuals' abilities."],
        ["Strengthening community action", false, "That is about communities organizing to act together."]
      ]},
    {id:"W1-Q33", type:"mcq", ch:"W1-C6", src:"W1 Part 2, slide 22", added:"2026-10-26",
      q:"Which is NOT one of the Ottawa Charter's seven prerequisites for health?",
      opts:[
        ["Peace", false, "On the list."],
        ["Access to physicians", true, "Not on the list."],
        ["A stable eco-system", false, "On the list."],
        ["Income", false, "On the list."]
      ]},
    {id:"W1-Q34", type:"mcq", ch:"W1-C6", src:"W1 Part 2, slides 23-24", added:"2026-10-26",
      q:"The 2000 Walkerton E. coli outbreak, the 2001 North Battlefield cryptosporidium outbreak and SARS in Toronto in 2002 are presented as evidence of what?",
      opts:[
        ["Canada's entry into the Age of Pestilence and Famine", false, "Stage 1 is most of human history, with life expectancy 20 to 40."],
        ["The success of the Great Sanitary Awakening", false, "These outbreaks showed gaps, not success."],
        ["The start of the Population Health Movement", false, "That started with the 1974 Lalonde Report."],
        ["Cracks in the public health infrastructure, followed by the 2006 Public Health Agency of Canada Act", true, "Slides 23 and 24."]
      ]},
    {id:"W1-Q35", type:"mcq", ch:"W1-C6", src:"W1 Part 2, slide 24", added:"2026-10-26",
      q:"Which is part of the mandate of Canada's Chief Public Health Officer?",
      opts:[
        ["Run hospitals in each province", false, "Not part of the mandate."],
        ["Approve each physician's licence", false, "Not part of the mandate."],
        ["Write the Ottawa Charter", false, "The Charter came from a 1986 international conference."],
        ["Provide science-based health policy analysis and advice to the federal minister for health", true, "One of the four mandate points on slide 24."]
      ]},

    /* C7: epidemiologic transitions */
    {id:"W1-Q36", type:"mcq", ch:"W1-C7", src:"W1 Part 2, slide 25", added:"2026-10-26",
      q:"Who first proposed the epidemiologic transition, and when?",
      opts:[
        ["Marc Lalonde, 1974", false, "Lalonde wrote the health field concept report."],
        ["Abdel Omran, 1971", true, "Slide 25."],
        ["Edwin Chadwick, 1842", false, "Chadwick wrote the sanitary report."],
        ["John Snow, 1853", false, "Snow is the father of epidemiology, not of the transition theory."]
      ]},
    {id:"W1-Q37", type:"mcq", ch:"W1-C7", src:"W1 Part 2, slide 27", added:"2026-10-26",
      case:"A country introduces immunization programs and antibiotics, improves sanitation and prenatal care, and life expectancy rises to about 50. CVD causes 15 to 35% of deaths.",
      q:"Which stage is this country in?",
      opts:[
        ["Age of Pestilence and Famine", false, "Stage 1 has life expectancy of 20 to 40 and CVD at 5 to 10%."],
        ["Age of Degenerative and Man-Made Diseases", false, "Stage 3 has life expectancy about 60 and CVD over 50%."],
        ["Age of Receding Pandemics", true, "Every feature matches slide 27."],
        ["Age of Delayed Degenerative Disease", false, "Stage 4 has falling CVD deaths and life expectancy near 82 in Canada."]
      ]},
    {id:"W1-Q38", type:"mcq", ch:"W1-C7", src:"W1 Part 2, slide 28", added:"2026-10-26",
      case:"In a region, deaths from chronic disease have just overtaken deaths from infection. Life expectancy is about 60, and over half of deaths are from CVD.",
      q:"Which stage is this?",
      opts:[
        ["Age of Degenerative and Man-Made Diseases", true, "Slide 28: chronic overtakes infectious, about 60 years, over 50% CVD."],
        ["Age of Receding Pandemics", false, "In stage 2, CVD is only 15 to 35% of deaths."],
        ["Age of Delayed Degenerative Disease", false, "In stage 4, CVD deaths are declining."],
        ["Age of Pestilence and Famine", false, "In stage 1, people mainly die of malnutrition or infection."]
      ]},
    {id:"W1-Q39", type:"mcq", ch:"W1-C7", src:"W1 Part 2, slide 29", added:"2026-10-26",
      q:"In the Age of Delayed Degenerative Disease, which factors does the slide credit for the decline in CVD mortality?",
      opts:[
        ["Smoking cessation and tobacco control, blood pressure medications and bypass surgery, and public health education", true, "Slide 29 lists prevention, technology and education."],
        ["Draining swamps and covering cesspools", false, "That follows the old miasma theory."],
        ["Quarantine of immigrants", false, "An early 19th century Canadian measure against cholera and typhus."],
        ["The first introduction of antibiotics and immunization", false, "Slide 27 puts these in stage 2."]
      ]},
    {id:"W1-Q40", type:"mcq", ch:"W1-C7", src:"W1 Part 2, slides 26-29", added:"2026-10-26",
      q:"Which statement about Omran's stages is NOT true?",
      opts:[
        ["The Age of Pestilence and Famine covers most of human history.", false, "True, slide 26."],
        ["In the Age of Delayed Degenerative Disease, CVD is still a top 3 cause of death.", false, "True, slide 29."],
        ["In the Age of Degenerative and Man-Made Diseases, life expectancy is about 82 years.", true, "False: stage 3 is about 60. About 82 is today's Canada, in stage 4."],
        ["The Age of Receding Pandemics was in the late 1800s to early 1900s in developed countries.", false, "True, slide 27."]
      ]}
  ],

  review:[
    {id:"W1-R01", ch:"W1-C1", src:"W1 Part 1, slides 2-4", added:"2026-10-26",
      q:"Compare the three definitions of health on the slides. Give one strength or weakness of each.",
      answer:"The biomedical definition calls health a state of normal function that is disrupted from time to time by disease. It is the predominant model in health care, but it reduces health to the absence of disease. The 1948 WHO definition adds mental and social wellbeing and says health is not merely the absence of disease, but it is hard to measure. The 1980s WHO health promotion view calls health a resource for everyday life, not the objective of living: the ability to realize aspirations, satisfy needs, and change or cope with the environment. It treats health as resiliency rather than a fixed state.",
      points:["Biomedical: normal function disrupted by disease; predominant in health care","WHO 1948: physical, mental and social wellbeing, not merely absence of disease","WHO 1948 weakness: hard to measure","WHO 1980s: resource for everyday life; realize aspirations, satisfy needs, cope with environment","Health as resiliency, not a static state"]},
    {id:"W1-R02", ch:"W1-C2", src:"W1 Part 1, slides 8-9", added:"2026-10-26",
      q:"Explain the difference between disease, illness and sickness, using one condition as an example.",
      answer:"Disease is the underlying pathology, defined biologically from the practitioner's perspective. For heart disease, it is plaque narrowing a coronary artery. Illness is the person's subjective experience of symptoms, such as chest tightness and fatigue that the patient brings to the doctor. Sickness is the social and cultural conception of the condition, such as how others react with fear or rejection and whether it is seen as something needing medical treatment. The biomedical model focuses on disease and assumes that removing it ends the illness.",
      points:["Disease: underlying pathology, practitioner's view","Illness: subjective experience of symptoms","Sickness: social and cultural reactions and conceptions","A worked example for each","Biomedical model focuses on disease"]},
    {id:"W1-R03", ch:"W1-C3", src:"W1 Part 1, slides 14, 17-18", added:"2026-10-26",
      q:"Distinguish risk factors from determinants and place each in the social-ecological model.",
      answer:"A risk factor is a variable associated with an increased statistical probability of disease, injury or infection. It is proximal to the individual, like smoking, and fits the individual behaviour ring. A determinant is an upstream factor that correlates with increased risk. It is distal and works at the population level, like poor sanitation in a slum, and sits in the outer rings such as living and working conditions or broad conditions and policies. Both are correlational, not causal, and a determinant does not imply that an outcome is inevitable.",
      points:["Risk factor definition; proximal, individual","Determinant definition; distal, upstream, population level","Both correlational, not causal","Determinant is not determinism","Correct placement in the social-ecological rings"]},
    {id:"W1-R04", ch:"W1-C4", src:"W1 Part 2, slides 7-10", added:"2026-10-26",
      q:"Why is John Snow called the father of epidemiology? Connect his work to the problem described in the slide 8 concept.",
      answer:"Before Snow, ideas like miasma blamed disease on vapours from swamps or cesspools. Slide 8 says the lack of a systematic way to test associations between exposures and outcomes was the major factor holding back understanding of disease causes. Snow, a London physician, systematically studied cholera outbreaks, and his data supported his theory of the source. In 1853 he removed the handle from the Broad Street Pump, called the first public health intervention. His work showed how systematic study of exposures and outcomes could guide prevention.",
      points:["Earlier theories such as miasma","Lack of systematic testing of exposure and outcome links","Snow systematically studied cholera outbreaks in London","Broad Street Pump handle removed in 1853","First public health intervention"]},
    {id:"W1-R05", ch:"W1-C6", src:"W1 Part 2, slides 19-22", added:"2026-10-26",
      q:"Describe how the Lalonde Report (1974) and the Ottawa Charter (1986) changed the approach to health in Canada.",
      answer:"The Lalonde Report, by former federal health minister Marc Lalonde, looked beyond the individual to the health of the population and started the Population Health Movement. Its health field concept has four fields: human biology, environment, lifestyle and health care organization. It argued that equating health with the availability of physicians and hospitals is inadequate. The Ottawa Charter came from the first international conference on health promotion. It aimed to reduce inequities, ramp up prevention and empower individuals through five action areas, and named seven prerequisites for health such as peace, shelter, food and income.",
      points:["Lalonde: population health, Population Health Movement","Four fields of the health field concept","Doctors and hospitals alone are inadequate","Ottawa Charter: first international health promotion conference","Five action areas and seven prerequisites"]},
    {id:"W1-R06", ch:"W1-C7", src:"W1 Part 2, slides 25-29", added:"2026-10-26",
      q:"Outline Omran's four epidemiologic transitions, with life expectancy and share of deaths from CVD where the slides give them.",
      answer:"Omran proposed the theory in 1971: patterns of mortality and disease shift as countries develop economically. In the Age of Pestilence and Famine, life expectancy is 20 to 40 years, people die of malnutrition and infection, and CVD is about 5 to 10% of deaths. In the Age of Receding Pandemics, sanitation, safer food, immunization and antibiotics raise life expectancy to about 50, and CVD is 15 to 35%. In the Age of Degenerative and Man-Made Diseases, chronic disease deaths overtake infectious ones, life expectancy is about 60 and over 50% of deaths are from CVD. In the Age of Delayed Degenerative Disease, CVD deaths fall through tobacco control, medications, surgery and education, and Canadian life expectancy is about 82.",
      points:["Omran, 1971, linked to economic development","Stage 1: 20 to 40 years, CVD 5 to 10%","Stage 2: about 50 years, CVD 15 to 35%","Stage 3: about 60 years, CVD over 50%, chronic overtakes infectious","Stage 4: CVD deaths decline, Canada about 82"]}
  ],

  explore:[
    {fig:"sem", title:"Social-ecological model", caption:"Levels of influence on health, from proximal at the centre to distal at the edge, over the life span.",
      items:{
        innate:{label:"Innate individual traits", text:"Age, sex, race and biological factors: the biology of disease. The instructor labels the centre proximal.", src:"W1 Part 1, slide 18"},
        behaviour:{label:"Individual behaviour", text:"What the person does. Risk factors such as smoking are proximal to the individual.", src:"W1 Part 1, slides 14 and 18"},
        networks:{label:"Social, family and community networks", text:"The people and communities around the person. This ring and the next are labelled intermediate.", src:"W1 Part 1, slide 18"},
        living:{label:"Living and working conditions", text:"Psychosocial factors, employment and occupational factors, socioeconomic status, the natural and built environments, public health services and health care services.", src:"W1 Part 1, slide 18"},
        broad:{label:"Broad social, economic, cultural, health and environmental conditions and policies", text:"Conditions and policies at the global, national, state and local levels. Labelled distal. Determinants tend to sit out here, upstream and at the population level.", src:"W1 Part 1, slides 14 and 18"}
      }},
    {fig:"transitions", title:"Omran's epidemiologic transitions", caption:"Patterns of mortality and disease shift as countries develop economically (Omran, 1971).",
      items:{
        t1:{label:"Age of Pestilence and Famine", text:"Most of human history. Life expectancy 20 to 40 years, deaths mainly from malnutrition and infection, CVD about 5 to 10% of deaths.", src:"W1 Part 2, slide 26"},
        t2:{label:"Age of Receding Pandemics", text:"Late 1800s to early 1900s in developed countries. Sanitation, safer food, immunization and antibiotics; life expectancy about 50; CVD 15 to 35%.", src:"W1 Part 2, slide 27"},
        t3:{label:"Age of Degenerative and Man-Made Diseases", text:"Mid 20th century. Chronic disease deaths overtake infectious ones; life expectancy about 60; over 50% of deaths from CVD.", src:"W1 Part 2, slide 28"},
        t4:{label:"Age of Delayed Degenerative Disease", text:"Mid-1960s to today. CVD deaths decline through tobacco control, blood pressure medications, bypass surgery and education. Life expectancy in Canada is about 82.", src:"W1 Part 2, slide 29"}
      }}
  ]
});
