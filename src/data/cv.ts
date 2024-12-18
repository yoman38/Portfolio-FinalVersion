import { CV } from '../types/cv';

export const cvData: CV = {
  summary: "Graduate energy engineer with expertise in project management, data analysis, and process optimization. Experienced in leveraging advanced analytical tools to improve workflows, manage industrial planning, and deliver data-driven solutions.",
  experience: [
    {
      title: "Method Engineer, EEC Specialist",
      company: "Dalkia, EDF group",
      location: "Lyon, France",
      period: "2021-2024",
      description: [
        "Managed technical projects for HVAC and thermal infrastructure, integrating resource planning and execution methods",
        "Drafted regulatory documents to ensure compliance and prepared team implementation",
        "Created detailed execution schedules to involve teams in process creation",
        "Designed KPI dashboards to enhance process efficiency",
        "Key Achievement: Restructured engineering team processes, increasing ESC-related productivity by 25%"
      ]
    },
    {
      title: "Data Analyst",
      company: "Dalkia Polska Energia",
      location: "Katowice, Poland",
      period: "2023",
      description: [
        "Developed Power BI dashboards for strategic KPI visualization",
        "Automated workflows using VBA and SQL to enhance operational efficiency",
        "Predicted electricity prices using statistical and ML models (Random Forest, ARIMA)",
        "Designed technical solutions for clean energy systems and industrial planning"
      ]
    },
    {
      title: "Business Manager HVAC",
      company: "CEA",
      location: "Grenoble, France",
      period: "2021",
      description: [
        "Managed critical industrial projects in controlled environments",
        "Coordinated subcontractors for complex projects",
        "Applied strict safety and quality control standards"
      ]
    }
  ],
  education: [
    {
      degree: "Engineering Degree in Energy and Installation Design",
      institution: "Ecole Centrale de Lyon",
      location: "Lyon, France",
      period: "2021-2024",
      description: "Projects in energy modeling (Matlab), dynamic simulations (IES), and CAD design (Revit)"
    }
  ],
  skills: [
    {
      category: "Technical Skills",
      items: [
        { name: "Software Development", level: 4 },
        { name: "Data Analysis", level: 5 },
        { name: "Project Management", level: 4 },
        { name: "HVAC Systems", level: 5 }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "French (Native)", level: 5 },
        { name: "English (C1)", level: 4 },
        { name: "Italian (B2)", level: 3 },
        { name: "Polish (A2-B1)", level: 2 }
      ]
    }
  ],
  achievements: [
    {
      title: "AI Tool Development",
      date: "2022",
      description: "Developed EASYANSWER (Gmail extension) and YT2GPT (YouTube learning application)"
    },
    {
      title: "TOEIC Score",
      date: "2023",
      description: "Achieved 960/990 in TOEIC English proficiency test"
    }
  ]
};