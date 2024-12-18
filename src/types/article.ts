export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  readingTime: number;
}

export type ArticlePreview = Omit<Article, 'content'>;