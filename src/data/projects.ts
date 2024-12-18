import { Project } from '../types/portfolio';
import { ceeImprovement } from './projects/cee-improvement';
import { easyAnswer } from './projects/easy-answer';
import { publicTenders } from './projects/public-tenders';
import { ceeMonitoring } from './projects/cee-monitoring';
import { electricityPrediction } from './projects/electricity-prediction';
import { solarisDashboard } from './projects/solaris-dashboard';
import { shiftAnalyzer } from './projects/shift-analyzer';
import { sqlConverter } from './projects/sql-converter';
import { yt2gpt } from './projects/yt2gpt';
import { fitapp } from './projects/fitapp';

export const projects: Project[] = [
  ceeImprovement,
  easyAnswer,
  yt2gpt,
  fitapp,
  publicTenders,
  ceeMonitoring,
  electricityPrediction,
  solarisDashboard,
  shiftAnalyzer,
  sqlConverter
];