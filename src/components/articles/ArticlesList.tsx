import React from 'react';
import { ArticlePreview } from '../../types/article';
import ArticleCard from './ArticleCard';

interface ArticlesListProps {
  articles: ArticlePreview[];
  onArticleClick: (id: string) => void;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles, onArticleClick }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onClick={() => onArticleClick(article.id)}
        />
      ))}
    </div>
  );
};

export default ArticlesList;