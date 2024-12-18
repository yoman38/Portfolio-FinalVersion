import React from 'react';
import { Education } from '../../types/cv';
import TimelineMarker from './TimelineMarker';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold tracking-wider mb-8">EDUCATION</h2>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="group relative pl-12">
            <TimelineMarker />
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <p className="text-gray-400">
                {edu.institution} • {edu.location}
                <span className="block text-sm">{edu.period}</span>
              </p>
              {edu.description && (
                <p className="text-sm text-gray-300">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;