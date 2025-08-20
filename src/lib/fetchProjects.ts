import type { Project } from '@/types/project';
import rawProjects from '@/data/projects.json';
import { z } from 'zod';

// Define project schema
const projectSchema = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional()
  })
);

// Simulated delay (optional – for loader UX testing)
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    // Simulate network delay (remove in production if needed)
    if (process.env.NODE_ENV === 'development') {
      await sleep(300);
    }

    // Validate and parse data
    const validated = projectSchema.parse(rawProjects);
    return validated;
  } catch (error) {
    console.error('❌ Error fetching or validating projects:', error);
    return [];
  }
};
