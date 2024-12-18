export interface ProjectDetails {
  context: string;
  objectives: string[];
  methodology: string[];
  results: string[];
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  company: string;
  location: string;
  summary: string;
  imageUrl: string;
  details: ProjectDetails;
}