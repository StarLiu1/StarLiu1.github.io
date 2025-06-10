import AFRD_FirePreidction from "./Assets/Projects/AFRD_FirePrediction.png";
import EMORY_CovidDashboard from "./Assets/Projects/EMORY_CovidDashboard.png";
import LACE_ReadmissionPrediction from "./Assets/Projects/LACE_ReadmissionPrediction.png";
import PPD_Disparities from "./Assets/Projects/PPD_Disparities.jpeg";
import INDEPENDENT_MixedMethod from "./Assets/Projects/INDEPENDENT_MixedMethod.jpg";
import OHDSI_CommunityDashboard from "./Assets/Projects/OHDSI_CommunityDashboard.png";
import APAR_ApplicabilityArea from "./Assets/Projects/APAR_ApplicabilityArea.png";
import T2D_DataQuality from "./Assets/Projects/T2D_DataQuality.png";
import HIE_Phenotyping from "./Assets/Projects/HIEPhenotype.jpg";
import MLDL_ClassProject from "./Assets/Projects/MLDL_ClassProject.jpg";
import CUP_DecisionAnalysis from "./Assets/Projects/CUP_DecisionAnalysis.jpg";
import T2D_Subtyping from "./Assets/Projects/T2D_Subtyping.jpg";
import OHDSI_SepsisNetworkStudy from "./Assets/Projects/OHDSI_SepsisNetworkStudy.jpg";
import NICU_AbxStewardship from "./Assets/Projects/NICU_AbxStewardship.jpg";
import NICU_Pathogen from "./Assets/Projects/NICU_Pathogen.jpg";
import CUP_dashboard from "./Assets/Projects/CUP_dashboard.jpg";

//T2D_Subtyping, OHDSI_SepsisNetworkStudy, NICU_AbxStewardship, NICU_Pathogen
// pathogen specific neonatal severity of illness, bacteremia and abx stewardship, sepsis network study, subtyping t2d, amia podium CUP and Bayesian boot

export const PROJECTS = [
  
  {
    image: NICU_Pathogen,
    name: "NICU - Pathogen Specific Severity of Illness",
    technologyUsed: "NICU, SQL, Python",
    // eslint-disable-next-line no-multi-str
    description: "Sepsis is complex, especially among neonates. \
                  Existing literature has treated sepsis as a homgeneous group, yet \
                  sepsis can be caused by a number of different pathogens. \
                  We are interested in characterizing pathogen-specific severity of illness. \
                  This work will enable individualized therapy for neonates with sepsis.\
                  ",
    date: "Ongoing",
    url: "",
    linkType: ["No shareable work yet"]
  },
  {
    image: NICU_AbxStewardship,
    name: "NICU - Sepsis-Negative Antibiotics Stewardship",
    technologyUsed: "NICU, SQL, Python",
    // eslint-disable-next-line no-multi-str
    description: "Neonates are given antibiotics to avoid developing life-threatening infections or illness. \
                  However, unnecessary antibiotics exposure may lead to antibiotic resistance \
                  that further lead to adverse drug events or complications. The earlier neonates stop unnecessary antibiotics, \
                  the better. \
                  The current gold standard for discontinuing antibiotics is \
                  a negative blood culture at 48 hours. \
                  Our goal is to move up the needle well before 48 hours, i.e., 6, 12, or 24 hours. \
                  ",
    date: "Ongoing",
    url: "",
    linkType: ["No shareable work yet"]
  },
  {
    image: OHDSI_SepsisNetworkStudy,
    name: "PICU - ADEs associated with broad-spectrum antibiotics",
    technologyUsed: "OMOP, SQL, Python",
    // eslint-disable-next-line no-multi-str
    description: "We are conducting a network study across OMOP data partners and institutions to answer \
                  the following question: \
                  What is the risk of adverse drug events associated with broad-spectrum antibiotics among \
                  pediatric patients with sepsis. \
                  ",
    date: "Ongoing",
    url: "",
    linkType: ["No shareable work yet"]
  },
  {
    image: T2D_Subtyping,
    name: "Subtyping Newly Diagnosed Type 2 Diabetes",
    technologyUsed: "Python, Cohort Data, EHR",
    // eslint-disable-next-line no-multi-str
    description: "Type 2 diabetes subtypes exhibit differences in treatment response and risk of complications. \
                  We aimed to replicate subtypes, previously identified in RCT, using routinely collected \
                  EHR data to improve the translational value of subtyping. \
                  We developed and validated classification algorithms to accurately identify 3 out of the 4 major subtypes. \
                  We found novel variations in treatment patterns and underscore the need to develop tailored management strategies. \
                  ",
    date: "Under Review at Nature Medicine",
    url: "https://www.medrxiv.org/content/10.1101/2024.10.08.24315128v2",
    linkType: ["View Preprint"]
  },
  {
    image: CUP_dashboard,
    name: "interactive Clinical Utility Decision Analytic (iCUDA) Dashboard",
    technologyUsed: "Python, JavaScript, Azure",
    // eslint-disable-next-line no-multi-str
    description: "Driven by decision analysis and utility theory, we built an intuitive and \
                  interactive dashboard for visualizing and analyzing the utility of machine \
                  learning (ML) models and their success and failure modes in the target context.\
                  The home dashboard presents typical machine learning evaluation with a touch of \
                  decision analysis, examining the utility of different operating points on the \
                  ROC given harms and benefits (expressed in utility 0 to 1)\
                  You can upload your own dataset with 'true_labels' and 'predictions' columns.\
                  The home dashboard also comes with ability to generate a structured PDF report.\
                  ",
    date: "Ongoing work and official URL will be posted to GitHub",
    url: "https://github.com/StarLiu1/icuda",
    url2: "https://icuda-cah8f2cfgzcba8fn.eastus2-01.azurewebsites.net/",
    linkType: ["GitHub Repo","Temporary Link"]
  },
  {
    image: CUP_DecisionAnalysis,
    name: "Clinical Utility Profiling (CUP)",
    technologyUsed: "Python",
    // eslint-disable-next-line no-multi-str
    description: "Deploying models in practice to support decision-making \
                  requires an understanding of a model’s fit to the problem of interest, \
                  and its predictive performance, clinical value, and applicability to the target population.\
                  We define and demonstrate the Clinical Utility Profiling (CUP), show how it aligns the SMLM \
                  with the decision- makers’ value, and show the potential value of the model for the target population in use.\
                  Ongoing efforts to also identify the ideal point on the ROC curve and quantify its uncertainty.\
                  ",
    date: "Podium presentation at AMIA 2024",
    url: "https://drive.google.com/drive/folders/1DTKf88LhVBQMs2SEl7oVt2MpzUSMjugz?usp=drive_link",
    linkType: ["View slide and abstract"]
  },
  {
    image: HIE_Phenotyping,
    name: "Phenotyping Hypoxic-Ischemic Encephalopathy",
    technologyUsed: "OMOP, OHDSI Atlas, Cohort Diagnostics",
    // eslint-disable-next-line no-multi-str
    description: "Neonatologists and pediatricians are  challenged by the differential diagnosis of neonatal \
                  encephalopathy, but there lacks a definitive computable phenotype. Thus, our \
                  objective was to develop a phenotype for \
                  HIE and assess the algorithm using Observational Medical Outcomes Partnership \
                  (OMOP) Common Data Model (CDM) datasets and tools.\
                  Better clinical characterization, clinical phenotyping, and \
                  identification of subgroups most responsive to existing therapies for \
                  patients with HIE could potentially lower the risk of adverse \
                  neurodevelopmental outcomes.\
                  ",
    date: "Preparing Manuscript",
    url: "https://www.ohdsi.org/2023showcase-317/",
    linkType: ["View Poster"]
  },
  {
    image: MLDL_ClassProject,
    name: "Bridging Domains: Harnessing Ensemble and ADDA for Domain Adaptation",
    technologyUsed: "Python, OfficeHome Dataset, Deep Learning",
    // eslint-disable-next-line no-multi-str
    description: "This is a CS482/682 Machine Learning Deep Learning Final Project. \
                  Unsupervised domain adaptation concerns the scenario where there are labeled images \
                  from the source domain dataset and unlabeled images from the target domain dataset.\
                  In the context of deep learning, the task is to learn features from the images of one \
                  domain and transfer learned representations to classify unlabeled target domain images. \
                  We implemented ADDA and ensemble strategies to enhance the adaptability and \
                  accuracy of image classification across various domains.\
                  ",
    date: "Final Class Report",
    url: "https://github.com/StarLiu1/MLDL_Domain_Adaptation",
    linkType: ["View GitHub"]
  },
  {
    image: T2D_DataQuality,
    name: "Phenotyping & Data Quality",
    technologyUsed: "R, SQL, EHR, Claims",
    // eslint-disable-next-line no-multi-str
    description: "Computable phenotypes are critical for purposes such as research, \
                  clinical trials, and population health management. However, the impact \
                  of data quality in conjunction with phenotype is unknown. This project \
                  concerns the robustness of phenotypes in the face of data quality \
                  challenges. \
                  We used Johns Hopkins Medical Institution EHR data and Johns \
                  Hopkins Healthcare claims data \
                  from 2017-2019. We examine simulated data quality issues and \
                  assessed differences in predicting \
                  healthcare utilitzation and potential racial disparities.\
                  ",
    date: "First paper published in JMIR Medical Informatics. 3 More Papers Under Review",
    url: "https://pubmed.ncbi.nlm.nih.gov/39189917/",
    linkType: ["View Paper 1"]
  },
  {
    image: INDEPENDENT_MixedMethod,
    name: "A mixed methods study on collaborative care intervention components",
    technologyUsed: "R, RCT Data",
    // eslint-disable-next-line no-multi-str
    description: "This was a secondary analysis of RCT data. Our objective was to assess which components of this \
                  clinically and cost-effective collaborative care intervention were associated with improvements \
                  in diabetes and depression. The qualitative findings illuminate reasons for variation in fidelity from the core model \
                  and the importance of the complementarity of the different intervention components.\
                  ",
    date: "Published in Primary Care Diabetes in 06/2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38360505/",
    linkType: ["View Project"]
  },
  {
    image: OHDSI_CommunityDashboard,
    name: "OHDSI Dashboard",
    technologyUsed: "Python, Flask, CosmosDB, API",
    // eslint-disable-next-line no-multi-str
    description: "Components of OHDSI's successful uptake have been attributed to an \
                  open science and collaborative culture for research and development. To investigate \
                  the adoption of OHDSI as a field of study, we developed \
                  a dashboard to track, study, and evaluate its community’s growth and impact.\
                  As other scientific networks adopt open-source frameworks, \
                  our approach serves as a model for tracking the growth of their \
                  community, driving the perception of their development, \
                  engaging their members, and attaining higher impact.\
                  ",
    date: "Transitioned out of dashboard dev in 04/23. Paper published in JAMIA Open in 02/2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38425704/",
    linkType: ["View Paper"]
  },
  {
    image: APAR_ApplicabilityArea,
    name: "A Utility-based Approach for Evaluating Predictive Models",
    technologyUsed: "R, SQL, EHR, Claims",
    // eslint-disable-next-line no-multi-str
    description: "Clinical predictive models have been increasingly adopted to \
                  support decision making but continues to be evaluated and \
                  implemented without articulating and aligning human concerns. \
                  We propose the Applicability Area (ApAr), \
                  a decision-analytic utility-based approach to evaluating predictive models\
                  Decision makers looking to adopt and implement models can\
                  leverage ApArs to assess if the target range of priors and utilities \
                  is within the respective ApArs.\
                  ",
    date: "Accepted by and presented at AMIA Symposium 07/2023",
    url: "https://www.medrxiv.org/content/10.1101/2023.07.06.23292124v4",
    url2: "https://drive.google.com/file/d/1VtbreaWhwGmLZgu2O9n8RKgSnX87pno6/view?usp=sharing",
    linkType: ["View Paper","View Presentation"]
  },
  {
    image: PPD_Disparities,
    name: "Postpartum Depression Disparities",
    technologyUsed: "R, HCUP",
    // eslint-disable-next-line no-multi-str
    description: "Limited research has considered differential temporal associations with the outcome. \
                  Our findings serve to enhance intervention strategies and policies for phenotyping \
                  patients at the highest risk of PPD and to highlight needs in data quality to support \
                  future work on racial disparities in PPD.\
                  ",
    date: "Published in JMIR Pediatrics and Parenting in 10/2022",
    url: "https://pediatrics.jmir.org/2022/4/e38879/",
    linkType: ["View Paper"]
  },
  {
    image: LACE_ReadmissionPrediction,
    name: "SDoH, LACE, 30-day Readmission",
    technologyUsed: "Python, HCUP (done by the first author)",
    // eslint-disable-next-line no-multi-str
    description: "Early and accurate prediction of patients at risk of readmission is key \
                  to reducing costs and improving outcomes. LACE is a widely used score to predict \
                  30-day readmissions. We examine whether adding social determinants of health (SDOH) \
                  to LACE can improve its predictive performance.\
                  ",
    date: "Published in JAMIA Open in 07/2022",
    url: "https://academic.oup.com/jamiaopen/article/5/2/ooac046/6605166",
    linkType: ["View Paper"]
  },
  {
    image: EMORY_CovidDashboard,
    name: "COVID-19 Equity Dashboard",
    technologyUsed: "Python, ReactJS, MongoDB",
    // eslint-disable-next-line no-multi-str
    description: "The COVID-19 Health Equity Dashboard is an open-source web-based interactive data \
                  visualization, that provides timely, localized, and actionable data of the ongoing COVID-19 pandemic. \
                  The dashboard features interactive maps and charts alongside population vulnerability characteristics, \
                  allowing for benchmarking county-level outcomes and disparities against the state and nation.",
    date: "Transitioned out in 06/2021",
    url: "https://covid19.emory.edu/",
    linkType: ["View Dashboard"]
  },
  {
    image: AFRD_FirePreidction,
    name: "AFRD Fire Prediction",
    technologyUsed: "R, R Shiny, QGIS",
    // eslint-disable-next-line no-multi-str
    description: "This project is the result of a collaboration between Emory University’s Quantitative \
                  Theory and Methods department and the Atlanta Fire Rescue Department (AFRD). The purpose \
                  of this project is to build a predictive model that helps to understand where fire incidents are \
                  likely to occur in the City of Atlanta.",
    date: "Presented to stakeholders in 05/2020",
    url: "https://drive.google.com/file/d/1NUPmYKXdwcSrBFd2Uz8GuTuUWRqR-2TR/view",
    url2: "https://drive.google.com/file/d/19jiWZkMVzw52IzZItWRKaoNCGo5GoTho/view?usp=sharing",
    
    linkType: ["View Presentation", "View Report"]
  },
];