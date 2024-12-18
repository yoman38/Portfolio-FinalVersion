import { Project } from '../../types/portfolio';

export const easyAnswer: Project = {
  id: 'easy-answer',
  title: 'EASYANSWER GMAIL EXTENSION',
  category: 'Software Development',
  period: '2022',
  company: 'Personal Project',
  location: 'Remote',
  summary: 'Developed an AI-powered Gmail extension for enhanced email productivity, featuring autocorrection, predictive replies, and instant translation.',
  imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'Created an innovative Gmail extension to address the growing need for efficient email communication tools, leveraging AI for enhanced productivity.',
    objectives: [
      'Develop user-friendly email assistance features',
      'Implement AI-powered text processing',
      'Enable seamless Gmail integration',
      'Support multiple languages and writing styles'
    ],
    methodology: [
      'Conducted user needs analysis through surveys',
      'Created iterative prototypes with user feedback',
      'Integrated ChatGPT for natural language processing',
      'Developed middleware using Make.com'
    ],
    results: [
      'Reduced email drafting time by 30%',
      'Successfully implemented all planned features',
      'Received positive feedback from beta testers',
      'Created comprehensive documentation'
    ],
    tools: ['JavaScript', 'ChatGPT API', 'Make.com', 'Gmail API']
  }
};