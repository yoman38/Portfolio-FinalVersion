import { Project } from '../../types/portfolio';

export const ceeMonitoring: Project = {
  id: 'cee-monitoring',
  title: 'CEE MONITORING SYSTEM',
  category: 'Process Optimization',
  period: '2022-2024',
  company: 'Dalkia Centre-Est',
  location: 'Lyon, France',
  summary: 'Designed and implemented a comprehensive operational monitoring system for Energy Savings Certificates (CEE), improving efficiency and compliance.',
  imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'Developed a monitoring system to streamline the management of Energy Savings Certificates, addressing challenges in dossier management and performance tracking while facilitating the transition to a centralized digital platform.',
    objectives: [
      'Create real-time tracking for dossiers and MWhc production',
      'Ensure regulatory compliance and policy alignment',
      'Improve stakeholder communication and transparency',
      'Integrate with Portail CEE platform'
    ],
    methodology: [
      'Collected requirements from regional managers and directors',
      'Designed prototype using PowerPoint for stakeholder validation',
      'Developed Excel dashboards with VBA automation',
      'Integrated with Salesforce-based Portail CEE'
    ],
    results: [
      'Validated 341,691 MWhc by mid-2022',
      'Reduced dossier processing time significantly',
      'Improved visibility into team performance',
      'Enhanced decision-making with actionable insights'
    ],
    tools: ['Excel VBA', 'Salesforce', 'PowerPoint', 'Business Intelligence']
  }
};