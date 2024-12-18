import { Project } from '../../types/portfolio';

export const ceeImprovement: Project = {
  id: 'cee-improvement',
  title: 'CEE PROCESS IMPROVEMENT',
  category: 'Process Optimization',
  period: '2023-2024',
  company: 'Dalkia Centre-Est',
  location: 'Lyon, France',
  summary: 'Led a comprehensive initiative to improve Energy Efficiency Certificate (CEE) processes, resulting in standardized workflows and enhanced compliance.',
  imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'Initiated and led a strategic project to enhance CEE management processes at DTGP, addressing inefficiencies in dossier handling and interdepartmental communication.',
    objectives: [
      'Implement standardized process for CEE dossier creation',
      'Reduce dossier errors by 50% through self-check mechanisms',
      'Improve completion rates via better tools and alignment',
      'Achieve 70% adoption rate among DTGP engineers'
    ],
    methodology: [
      'Conducted stakeholder interviews to identify pain points',
      'Analyzed workflows and mapped inefficiencies',
      'Developed Codex C2E tool for centralized resource access',
      'Created gamified training program ("Timeline of CEE")'
    ],
    results: [
      'Successfully implemented standardized CEE processes',
      'Reduced errors in dossier assembly',
      'Improved interdepartmental communication',
      'Achieved high engagement in training sessions'
    ],
    tools: ['Process Mapping', 'Training Development', 'Documentation', 'Workflow Optimization']
  }
};