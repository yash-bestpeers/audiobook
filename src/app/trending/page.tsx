'use client';

import { books } from '@/data/books';
import { BookCard } from '@/components/BookCard';

export default function TrendingPage() {
  // Sort books by rating to show trending books
  const trendingBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent">
        Trending Now
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {trendingBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
} 