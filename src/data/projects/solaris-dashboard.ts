import { Project } from '../../types/portfolio';

export const solarisDashboard: Project = {
  id: 'solaris-power-bi',
  title: 'SOLARIS PROJECT DASHBOARD',
  category: 'Business Intelligence',
  period: '2023',
  company: 'Dalkia Polska Energia',
  location: 'Katowice, Poland',
  summary: 'Created comprehensive Power BI dashboards for strategic KPI visualization and market analysis.',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'The Solaris project required sophisticated data visualization and analysis capabilities to support strategic decision-making in energy market operations.',
    objectives: [
      'Design intuitive dashboards for KPI monitoring',
      'Enable real-time market analysis',
      'Integrate multiple data sources',
      'Provide actionable insights for stakeholders'
    ],
    methodology: [
      'Developed custom visualizations in Power BI',
      'Created advanced DAX calculations',
      'Implemented automated data refresh processes',
      'Designed user-friendly interface for stakeholders'
    ],
    results: [
      'Enhanced decision-making capabilities',
      'Improved market trend visibility',
      'Reduced time spent on manual reporting',
      'Increased stakeholder engagement with data'
    ],
    tools: ['Power BI', 'DAX', 'SQL', 'Excel']
  }
};