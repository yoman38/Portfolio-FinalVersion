import { Project } from '../../types/portfolio';

export const yt2gpt: Project = {
  id: 'yt2gpt',
  title: 'YT2GPT',
  category: 'AI Development',
  period: '2022',
  company: 'Personal Project',
  location: 'Remote',
  summary: 'Developed an innovative tool to transform YouTube content into AI-optimized prompts, supporting multiple languages and AI models.',
  imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'Created a solution to bridge the gap between video content and AI processing, enabling efficient extraction and transformation of YouTube transcripts into structured prompts for various AI applications.',
    objectives: [
      'Build a tool for extracting and processing YouTube transcripts',
      'Implement custom prompt generation for different use cases',
      'Support multiple languages and AI models',
      'Create an intuitive GUI for easy operation'
    ],
    methodology: [
      'Developed GUI using PyQt5 for user interaction',
      'Implemented YouTube API integration for transcript retrieval',
      'Created chunking algorithms for optimal AI processing',
      'Built multilingual support and translation features'
    ],
    results: [
      'Successfully processed transcripts from various content types',
      'Enabled seamless integration with multiple AI models',
      'Improved content accessibility through translation',
      'Received positive user feedback on interface design'
    ],
    tools: ['Python', 'PyQt5', 'YouTube API', 'Natural Language Processing']
  }
};