import { Project } from '../../types/portfolio';

export const sqlConverter: Project = {
  id: 'sql-command-generator',
  title: 'EXCEL TO SQL CONVERTER',
  category: 'Development',
  period: '2023',
  company: 'Dalkia Polska Energia',
  location: 'Katowice, Poland',
  summary: 'Created a sophisticated tool to convert Excel data into SQL commands, supporting multiple languages and complex database operations.',
  imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'The need to transfer data from Excel to SQL databases required a robust solution that could handle multiple languages and complex database requirements.',
    objectives: [
      'Develop automated SQL command generation',
      'Support multiple European languages',
      'Handle complex database operations',
      'Ensure data integrity'
    ],
    methodology: [
      'Created VBA modules for SQL syntax generation',
      'Implemented character encoding handling',
      'Developed constraint management system',
      'Built error handling and validation'
    ],
    results: [
      'Streamlined database updates',
      'Reduced manual SQL writing',
      'Improved data transfer accuracy',
      'Enhanced multi-language support'
    ],
    tools: ['Excel VBA', 'SQL', 'Unicode Processing']
  }
};