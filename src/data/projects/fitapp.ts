import { Project } from '../../types/portfolio';

export const fitapp: Project = {
  id: 'fitapp',
  title: 'FITAPP',
  category: 'Software Development',
  period: '2023',
  company: 'Personal Project',
  location: 'Remote',
  summary: 'Created a Python-based application that generates personalized workout plans using vector mathematics and user preferences.',
  imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'Developed an innovative fitness application that uses vector mathematics to create personalized workout plans based on user preferences and time constraints.',
    objectives: [
      'Create dynamic workout plans matching user preferences',
      'Implement vector-based exercise selection algorithm',
      'Ensure workouts fit within time constraints',
      'Design intuitive interface for preference input'
    ],
    methodology: [
      'Developed vector mathematics for exercise matching',
      'Created GUI using Kivy for user interaction',
      'Implemented dynamic time adjustment algorithms',
      'Built exercise database with vector representations'
    ],
    results: [
      'Successfully generated personalized workout plans',
      'Achieved high accuracy in preference matching',
      'Created efficient time optimization system',
      'Developed scalable exercise database'
    ],
    tools: ['Python', 'Kivy', 'Vector Mathematics', 'SQLite']
  }
};