import React from 'react';
import { Experience } from '../../types/cv';
import TimelineMarker from './TimelineMarker';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold tracking-wider mb-8">EXPERIENCE</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative pl-12">
            <TimelineMarker />
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{exp.title}</h3>
              <p className="text-gray-400">
                {exp.company} • {exp.location}
                <span className="block text-sm">{exp.period}</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-300">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;