import { Project } from '../../types/portfolio';

export const shiftAnalyzer: Project = {
  id: 'shift-data-processor',
  title: 'EMPLOYEE SHIFT ANALYZER',
  category: 'Process Automation',
  period: '2023',
  company: 'Dalkia Polska Energia',
  location: 'Katowice, Poland',
  summary: 'Automated employee shift data processing using Excel VBA, improving efficiency and accuracy.',
  imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'Manual processing of employee shift data was time-consuming and error-prone. This project aimed to automate and streamline the entire process.',
    objectives: [
      'Automate shift data processing',
      'Ensure data integrity and accuracy',
      'Generate SQL-ready output',
      'Reduce manual processing time'
    ],
    methodology: [
      'Developed VBA modules for data processing',
      'Implemented error checking algorithms',
      'Created data pivoting functionalities',
      'Built SQL command generation system'
    ],
    results: [
      'Reduced processing time by 80%',
      'Eliminated manual data entry errors',
      'Streamlined database updates',
      'Improved data consistency'
    ],
    tools: ['Excel VBA', 'SQL', 'Data Validation Tools']
  }
};