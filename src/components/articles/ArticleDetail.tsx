import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Article } from '../../types/article';
import MarkdownContent from './MarkdownContent';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        <span>Back to Articles</span>
      </button>

      <article className="space-y-6">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">{article.title}</h1>
          
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{article.date}</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{article.readingTime} min read</span>
            </div>
          </div>

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
        </header>

        <div className="prose prose-invert max-w-none">
          <MarkdownContent content={article.content} />
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;