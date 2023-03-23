import AFRD_FirePreidction from "./Assets/Projects/AFRD_FirePrediction.png";
import EMORY_CovidDashboard from "./Assets/Projects/EMORY_CovidDashboard.png";
import T2D_DataQuality from "./Assets/Projects/T2D_DataQuality.png";
import PPD_Disparities from "./Assets/Projects/PPD_Disparities.jpeg";
import APAR_ApplicabilityArea from "./Assets/Projects/APAR_ApplicabilityArea.png";
import OHDSI_CommunityDashboard from "./Assets/Projects/OHDSI_CommunityDashboard.png";
import INDEPENDENT_MixedMethod from "./Assets/Projects/INDEPENDENT_MixedMethod.jpg";



export const PROJECTS = [
  
  {
    image: T2D_DataQuality,
    name: "Phenotyping & Data Quality",
    technologyUsed: "R, SQL, EHR, Claims",
    // eslint-disable-next-line no-multi-str
    description: "This project concerns the robustness of phenotypes in the face of data quality challenges. \
                  We used Johns Hopkins Medical Institution EHR data and Johns Hopkins Healthcare claims data \
                  from 2017-2019. We examine simulated data quality issues and assess differences in predicting \
                  healthcare utilitzation and potential racial disparities.\
                  ",
    url: "https://drive.google.com/file/d/1USd5srjbEQ-hyrIXnHu3AoJvsPRqgnvL/view?usp=share_link",
  },
  {
    image: APAR_ApplicabilityArea,
    name: "A Utility-based Approach for Evaluating Predictive Models",
    technologyUsed: "R, SQL, EHR, Claims",
    // eslint-disable-next-line no-multi-str
    description: "We propose the Applicability Area (ApAr), \
                  a decision-analytic utility-based approach to evaluating predictive models that \
                  communicate the range of prior probability and test cutoffs for which the model \
                  has positive utility; larger ApArs suggest a broader potential use of the model. \
                  Decision makers looking to adopt and implement models can\
                  leverage ApArs to assess if the local range of priors and utilities is within the respective ApArs.\
                  ",
    url: "https://drive.google.com/file/d/1AspxI6z95BkRwm1P4T_jK28rLEbYMYWT/view?usp=share_link",
  },
  {
    image: OHDSI_CommunityDashboard,
    name: "OHDSI Dashboard",
    technologyUsed: "Python, Flask, CosmosDB, API",
    // eslint-disable-next-line no-multi-str
    description: "The OHDSI Community Dashboard is a tool to highlight the \
                  collective accomplishments and impact of our community. A goal of the dashboard is help \
                  our community identify how members can see the OHDSI eco-system as an interconnected \
                  system to make a larger impact. We hope you find these tools useful staying up to date \
                  with all the activities in OHDSI as well as finding new colleagues in our community to \
                  collaborate with. Dashboards are developed to represent various aspects of the OHDSI \
                  community activities.\
                  ",
    url: "https://ohdsi.azurewebsites.net/",
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
    url: "https://ohdsi.azurewebsites.net/",
  },
  {
    image: PPD_Disparities,
    name: "Postpartum Depression Disparities",
    technologyUsed: "R, HCUP",
    // eslint-disable-next-line no-multi-str
    description: "Limited research has considered differential temporal associations with the outcome. \
                  We estimate the disparities in the risk of PPD and time to diagnosis for patients of \
                  different racial and socioeconomic backgrounds. \
                  Our findings serve to enhance intervention strategies and policies for phenotyping \
                  patients at the highest risk of PPD and to highlight needs in data quality to support \
                  future work on racial disparities in PPD.\
                  ",
    url: "https://pediatrics.jmir.org/2022/4/e38879/",
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
    url: "https://covid19.emory.edu/",
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
    url: "https://drive.google.com/file/d/1NUPmYKXdwcSrBFd2Uz8GuTuUWRqR-2TR/view",
  },
];