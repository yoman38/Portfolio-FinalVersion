import { Project } from '../../types/portfolio';

export const electricityPrediction: Project = {
  id: 'electricity-price-prediction',
  title: 'ELECTRICITY PRICE PREDICTION',
  category: 'Data Science',
  period: '2023',
  company: 'Dalkia Polska Energia',
  location: 'Katowice, Poland',
  summary: 'Developed advanced machine learning models to predict daily electricity prices, integrating market data and weather patterns.',
  imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
  details: {
    context: 'In a volatile energy market, accurate price prediction is crucial for operational planning. This project focused on developing sophisticated models to predict D+1 electricity prices using various data sources and machine learning techniques.',
    objectives: [
      'Develop accurate models for daily electricity price prediction',
      'Integrate multiple data sources including market and weather data',
      'Create automated data processing pipelines',
      'Enable data-driven decision making through visualization'
    ],
    methodology: [
      'Implemented multiple ML models (Linear Regression, Random Forest, ARIMA)',
      'Conducted correlation analysis with gas and oil prices',
      'Developed sentiment analysis using Twitter data',
      'Created automated data cleaning and processing workflows'
    ],
    results: [
      'Successfully predicted price trends with reasonable accuracy',
      'Developed reusable ML pipeline for future predictions',
      'Created comprehensive market analysis tools',
      'Enhanced understanding of price influencing factors'
    ],
    tools: ['Python', 'Random Forest', 'ARIMA', 'Twitter API', 'SQL']
  }
};