import AFRD_FirePreidction from "./Assets/Projects/AFRD_FirePrediction.png";
import EMORY_CovidDashboard from "./Assets/Projects/EMORY_CovidDashboard.png";
import LACE_ReadmissionPrediction from "./Assets/Projects/LACE_ReadmissionPrediction.png";
import PPD_Disparities from "./Assets/Projects/PPD_Disparities.jpeg";
import INDEPENDENT_MixedMethod from "./Assets/Projects/INDEPENDENT_MixedMethod.jpg";
import OHDSI_CommunityDashboard from "./Assets/Projects/OHDSI_CommunityDashboard.png";
import APAR_ApplicabilityArea from "./Assets/Projects/APAR_ApplicabilityArea.png";
import T2D_DataQuality from "./Assets/Projects/T2D_DataQuality.png";
import HIE_Phenotyping from "./Assets/Projects/HIEPhenotype.jpg";



export const PROJECTS = [
  
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
    date: "Multiple Papers Under Review",
    url: "",
    linkType: ["View Project"]
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
    url2: "https://drive.google.com/file/d/1USd5srjbEQ-hyrIXnHu3AoJvsPRqgnvL/view?usp=share_link",
    linkType: ["View Paper","View Presentation"]
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
    date: "Transitioned out of dashboard dev in 04/23. Paper Under 2nd Round of Review",
    url: "",
    linkType: ["View Project"]
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
    date: "Paper Under Review",
    url: "",
    linkType: ["View Project"]
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