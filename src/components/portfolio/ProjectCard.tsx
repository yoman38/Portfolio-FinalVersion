import React from 'react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-video overflow-hidden cursor-pointer bg-gray-900 transition-transform duration-300 hover:-translate-y-1"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover filter grayscale opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
      />
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col">
        <div>
          <h3 className="text-lg sm:text-xl font-medium tracking-wider mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            {project.company} • {project.location}
          </p>
        </div>
        
        <div className="mt-auto">
          <p className="hidden md:block text-xs sm:text-sm text-gray-300 line-clamp-2">
            {project.summary}
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            {project.period}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;