import React from 'react';
import { Achievement } from '../../types/cv';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold tracking-wider mb-8">ACHIEVEMENTS</h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 mt-2 rounded-full bg-white mr-4" />
            <div>
              <h3 className="text-lg font-medium">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-1">{achievement.date}</p>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;