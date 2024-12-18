import { Article } from '../types/article';

export const articles: Article[] = [
  {
    id: 'cee-monitoring-system',
    title: 'Designing an Operational Monitoring System for Energy Savings Certificates',
    date: '2024-03-20',
    summary: 'A deep dive into the development of a comprehensive monitoring system for managing Energy Savings Certificates (CEE) at Dalkia Centre-Est.',
    content: `The management of Energy Savings Certificates (CEE) represents a critical challenge for energy service companies. This article explores the development of a monitoring system that transformed how Dalkia Centre-Est handles these essential regulatory instruments.

## The Challenge

Energy service companies like Dalkia must incentivize energy-saving investments through CEEs. The existing system faced several challenges:

1. Decentralized dossier management leading to inefficiencies
2. Limited visibility into key performance metrics
3. Need for integration with the new Portail CEE platform

## Solution Design

The solution centered around creating an integrated dashboard system that would serve multiple organizational levels. Key features included:

1. Real-time Tracking
   - Instant visibility of dossier status
   - MWhc production monitoring
   - Urgent and incomplete dossier alerts

2. Stakeholder-Specific Views
   - Customized dashboards for different roles
   - Financial summaries and KPIs
   - A4-ready print formats for offline review

## Technical Implementation

The implementation leveraged existing tools while introducing new capabilities:

1. Integration with Salesforce-based Portail CEE
2. Excel-based dashboards with VBA automation
3. Automated data processing and visualization

## Impact and Results

The new system delivered significant improvements:

1. Enhanced visibility across all organizational levels
2. Streamlined decision-making processes
3. Validated 341,691 MWhc by mid-2022
4. Reduced dossier processing time

## Lessons Learned

The project revealed several key insights:

1. The importance of stakeholder involvement in iterative design
2. The value of balancing technical sophistication with usability
3. The critical role of proper change management in system adoption

## Future Developments

Looking ahead, several enhancements are planned:

1. Advanced financial projection capabilities
2. Geospatial visualization features
3. Enhanced data segmentation tools

This project demonstrates how thoughtful system design can transform regulatory compliance into a strategic advantage, improving both efficiency and effectiveness in managing energy savings certificates.`,
    tags: ['Energy Efficiency', 'Project Management', 'Digital Transformation'],
    readingTime: 8
  },
  {
    id: 'energy-efficiency-2024',
    title: 'Energy Efficiency Trends in 2024',
    date: '2024-03-15',
    summary: 'An analysis of emerging trends in industrial energy efficiency and their impact on sustainability goals.',
    content: `Energy efficiency has become a cornerstone of industrial strategy in 2024. This article explores the latest trends and innovations in the field, drawing from real-world implementations and data-driven insights.

## Key Trends

1. AI-Driven Optimization
2. Smart Grid Integration
3. Renewable Energy Storage Solutions

## Impact on Industry

The adoption of these technologies has led to significant improvements in operational efficiency...`,
    tags: ['Energy', 'Industry', 'Innovation'],
    readingTime: 5
  },
  {
    id: 'machine-learning-hvac',
    title: 'Machine Learning Applications in HVAC Systems',
    date: '2024-02-28',
    summary: 'How machine learning is revolutionizing HVAC system management and optimization.',
    content: `The integration of machine learning into HVAC systems represents a significant leap forward in building management technology. This article examines practical applications and results from recent implementations.

## Applications

1. Predictive Maintenance
2. Energy Usage Optimization
3. Comfort Level Prediction

## Case Studies

Recent implementations have shown promising results...`,
    tags: ['HVAC', 'Machine Learning', 'Technology'],
    readingTime: 7
  }
];