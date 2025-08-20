import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '@/components/ProjectCard';

const mockProject = {
  title: 'Loan Default Predictor',
  description: 'ML model to predict loan defaults using customer data.',
  image: '/images/loan-prediction.png',
  technologies: ['Python', 'Scikit-learn', 'Pandas'],
  github: 'https://github.com/shaikh219/loan-default-prediction',
  demo: 'https://loan-demo.com',
};

describe('ProjectCard', () => {
  it('renders project title, description, and tech stack', () => {
    render(<ProjectCard {...mockProject} />);

    expect(screen.getByText('Loan Default Predictor')).toBeInTheDocument();
    expect(screen.getByText(/ML model to predict/i)).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Scikit-learn')).toBeInTheDocument();
    expect(screen.getByText('Pandas')).toBeInTheDocument();
  });

  it('renders GitHub and Live Demo links', () => {
    render(<ProjectCard {...mockProject} />);

    expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute('href', mockProject.github);
    expect(screen.getByRole('link', { name: /live/i })).toHaveAttribute('href', mockProject.demo);
  });

  it('renders image with correct alt text', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByAltText('Loan Default Predictor')).toBeInTheDocument();
  });

  it('does not crash without optional links', () => {
    const projectWithoutLinks = { ...mockProject, github: undefined, demo: undefined };
    render(<ProjectCard {...projectWithoutLinks} />);
    expect(screen.queryByText(/code/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/live/i)).not.toBeInTheDocument();
  });
});
