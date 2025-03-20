'use client';

import { Download } from 'lucide-react';
import { books } from '@/data/books';
import { BookCard } from '@/components/BookCard';

export default function DownloadsPage() {
  // For demo, showing first 3 books as downloaded
  const downloadedBooks = books.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Download className="w-8 h-8 text-blue-500" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Downloads
        </h1>
      </div>

      {downloadedBooks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {downloadedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Download className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-300 mb-2">No downloads yet</h2>
          <p className="text-gray-400">Download books to listen offline</p>
        </div>
      )}
    </div>
  );
} 