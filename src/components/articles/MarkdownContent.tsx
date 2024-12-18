import React from 'react';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  // Simple markdown-like rendering
  const formattedContent = content
    .split('\n\n')
    .map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-xl font-bold mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      if (paragraph.startsWith('1. ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i} className="text-gray-300">
                {item.replace(/^\d+\.\s/, '')}
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={index} className="text-gray-300 leading-relaxed my-4">
          {paragraph}
        </p>
      );
    });

  return <>{formattedContent}</>;
};

export default MarkdownContent;