'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { books, Book } from '@/data/books';
import { Star, Play } from 'lucide-react';

const categories = [
  { name: 'Mystery', icon: '🔍' },
  { name: 'Science Fiction', icon: '🚀' },
  { name: 'Historical Fiction', icon: '📜' },
  { name: 'Fiction', icon: '📚' },
  { name: 'Non-Fiction', icon: '📖' },
  { name: 'Business', icon: '💼' },
  { name: 'Science', icon: '🔬' },
  { name: 'Biography', icon: '👤' },
];

interface BookRowProps {
  title: string;
  books: Book[];
}

const BookRow = ({ title, books }: BookRowProps) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="flex gap-4 overflow-x-auto pb-4">
      {books.map((book) => (
        <Link
          key={book.id}
          href={`/books/${book.id}`}
          className="flex-none w-48 group"
        >
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold mb-1">{book.title}</h3>
                <p className="text-white/80 text-sm mb-2">{book.author}</p>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/80 text-sm">{book.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default function Home() {
  // Get featured book (first book)
  const featuredBook = books[0];

  // Group books by category
  const booksByCategory = categories.reduce((acc, category) => {
    acc[category.name] = books.filter((book) => book.category === category.name);
    return acc;
  }, {} as Record<string, Book[]>);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src={featuredBook.coverImage}
            alt={featuredBook.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-center px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {featuredBook.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              {featuredBook.description}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>{featuredBook.rating}</span>
              </div>
              <span>{featuredBook.duration}</span>
            </div>
            <Link
              href={`/books/${featuredBook.id}`}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>Play Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 lg:px-16 py-8">
        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/books?category=${encodeURIComponent(category.name)}`}
              className="flex-none bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Book Rows */}
        {categories.map((category) => (
          booksByCategory[category.name]?.length > 0 && (
            <BookRow
              key={category.name}
              title={category.name}
              books={booksByCategory[category.name]}
            />
          )
        ))}
      </div>
    </div>
  );
}
