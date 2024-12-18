import React from 'react';
import { cvData } from '../../data/cv';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import AchievementsSection from './AchievementsSection';

const CV: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-center text-3xl font-bold tracking-wider mb-8">
          CURRICULUM VITAE
        </h1>
        
        <p className="text-center text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
          {cvData.summary}
        </p>

        <ExperienceSection experiences={cvData.experience} />
        <EducationSection education={cvData.education} />
        <SkillsSection skills={cvData.skills} />
        <AchievementsSection achievements={cvData.achievements} />
      </div>
    </div>
  );
};

export default CV;