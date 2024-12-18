import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-16 animate-fadeIn">
        <button
          onClick={onClose}
          className="fixed top-8 right-8 text-white hover:text-gray-300 transition-all duration-300 hover:rotate-90"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="space-y-12">
          <header className="space-y-4 animate-slideDown">
            <h2 className="text-3xl font-medium">{project.title}</h2>
            <p className="text-gray-400">
              {project.company} • {project.location} • {project.period}
            </p>
          </header>

          <div className="relative aspect-video overflow-hidden rounded-lg animate-scaleIn">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover filter grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-12 animate-slideUp">
            <section>
              <h3 className="text-lg font-medium mb-4">Context</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.details.context}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-4">Objectives</h3>
              <ul className="space-y-2">
                {project.details.objectives.map((objective, index) => (
                  <li 
                    key={index} 
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-4">Methodology</h3>
              <ul className="space-y-2">
                {project.details.methodology.map((method, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white flex-shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-4">Results</h3>
              <ul className="space-y-2">
                {project.details.results.map((result, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded hover:bg-gray-800 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;