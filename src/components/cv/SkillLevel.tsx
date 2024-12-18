import React from 'react';

interface SkillLevelProps {
  level: number;
  maxLevel?: number;
}

export const SkillLevel: React.FC<SkillLevelProps> = ({ level, maxLevel = 5 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxLevel }).map((_, index) => (
        <div
          key={index}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            index < level ? 'bg-white' : 'border border-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

export default SkillLevel;