'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { books } from '@/data/books';

function BookListContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {category ? `${category} Books` : 'All Books'}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1 group-hover:text-primary-600">
                {book.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {book.author}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{book.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{book.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BookList() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[3/4]"></div>
            ))}
          </div>
        </div>
      </div>
    }>
      <BookListContent />
    </Suspense>
  );
} 