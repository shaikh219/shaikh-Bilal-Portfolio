// src/types/project.d.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category?: 'Excel' | 'Power BI' | 'SQL' | 'Machine Learning' | 'Web Development' | 'Data Science';
  featured?: boolean;        // optional flag for homepage or highlight
  date?: string;             // ISO format for sorting: "2024-05-10"
  status?: 'completed' | 'in-progress'; // for labeling/filtering
}
