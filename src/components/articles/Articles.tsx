import React, { useState } from 'react';
import { articles } from '../../data/articles';
import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';

const Articles: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const selectedArticle = selectedArticleId 
    ? articles.find(article => article.id === selectedArticleId)
    : null;

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {selectedArticle ? (
          <ArticleDetail
            article={selectedArticle}
            onBack={() => setSelectedArticleId(null)}
          />
        ) : (
          <>
            <h1 className="text-center text-3xl font-bold tracking-wider mb-16">
              ARTICLES
            </h1>
            <ArticlesList
              articles={articles}
              onArticleClick={setSelectedArticleId}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Articles;