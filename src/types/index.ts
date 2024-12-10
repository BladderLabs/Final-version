export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: 'learn' | 'books';
  coverImage?: string;
  tags: string[];
  author: string;
  readingTime: number;
}

export interface BookReview extends Post {
  bookAuthor: string;
  rating: number;
  recommended: boolean;
  affiliateLinks?: {
    amazon?: string;
    bookshop?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export type ColorMode = 'default' | 'light' | 'dark' | 'sepia';

export interface ColorTheme {
  name: string;
  icon: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  border: string;
}

export interface AnalyticsEvent {
  type: 'pageview' | 'affiliate_click';
  timestamp: string;
  page?: string;
  linkId?: string;
  destination?: string;
}