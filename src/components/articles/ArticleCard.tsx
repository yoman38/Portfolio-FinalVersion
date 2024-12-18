import React from 'react';
import { Clock } from 'lucide-react';
import { ArticlePreview } from '../../types/article';

interface ArticleCardProps {
  article: ArticlePreview;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-black border border-gray-800 p-6 cursor-pointer transition-all duration-300 hover:border-gray-600"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{article.date}</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{article.readingTime} min read</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium group-hover:text-gray-300 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-3">
          {article.summary}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 bg-gray-900 text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;