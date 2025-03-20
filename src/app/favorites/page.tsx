'use client';

import { Heart } from 'lucide-react';
import { books } from '@/data/books';
import { BookCard } from '@/components/BookCard';

export default function FavoritesPage() {
  // For demo, showing some random books as favorites
  const favoriteBooks = [...books]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-8 h-8 text-red-500 fill-current" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
          Your Favorites
        </h1>
      </div>
      
      {favoriteBooks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-300 mb-2">No favorites yet</h2>
          <p className="text-gray-400">Start adding books to your favorites collection</p>
        </div>
      )}
    </div>
  );
} 