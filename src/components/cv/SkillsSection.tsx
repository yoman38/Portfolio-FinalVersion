import React from 'react';
import { Skill } from '../../types/cv';
import { SkillLevel } from './SkillLevel';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold tracking-wider mb-8">SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium mb-4">{skillGroup.category}</h3>
            <div className="space-y-3">
              {skillGroup.items.map((skill, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-300">{skill.name}</span>
                  <SkillLevel level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;