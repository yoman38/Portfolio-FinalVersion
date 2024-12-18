import React from 'react';
import { Project } from '../../types/portfolio';

interface ProjectThumbnailProps {
  project: Project;
  onClick: () => void;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square overflow-hidden cursor-pointer"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-xl font-medium tracking-wider mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm tracking-wide">
          {project.category}
        </p>
      </div>
    </div>
  );
};

export default ProjectThumbnail;