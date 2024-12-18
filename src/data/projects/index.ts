import { Project } from '../../types/portfolio';
import { ceeImprovement } from './cee-improvement';
import { easyAnswer } from './easy-answer';
import { publicTenders } from './public-tenders';
import { ceeMonitoring } from './cee-monitoring';
import { electricityPrediction } from './electricity-prediction';
import { solarisDashboard } from './solaris-dashboard';
import { shiftAnalyzer } from './shift-analyzer';
import { sqlConverter } from './sql-converter';

// Export all projects in the desired order
export const projects: Project[] = [
  ceeImprovement,
  easyAnswer,
  publicTenders,
  ceeMonitoring,
  electricityPrediction,
  solarisDashboard,
  shiftAnalyzer,
  sqlConverter
];

// For debugging
console.log('Projects loaded:', projects.length);