'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Star, Play, Clock, BookOpen } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { books } from '@/data/books';

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);
  const { setCurrentBook, play, isPlaying, currentBook } = useStore();

  if (!book) {
    return <div>Book not found</div>;
  }

  const handlePlay = () => {
    setCurrentBook(book);
    play();
  };

  const isThisBookPlaying = isPlaying && currentBook?.id === book.id;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900/50 to-black/90 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Book Cover */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <Image
                src={book.coverImage}
                alt={book.title}
                width={500}
                height={700}
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-primary-500/20 transition-shadow duration-300"
                priority
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {book.title}
              </h1>
              <p className="text-2xl text-gray-400">
                by {book.author}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Rating */}
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">{book.rating}</span>
                </div>
                <p className="text-sm text-gray-400">Rating</p>
              </div>

              {/* Duration */}
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="text-lg font-semibold">{book.duration}</span>
                </div>
                <p className="text-sm text-gray-400">Duration</p>
              </div>

              {/* Language */}
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary-400" />
                  <span className="text-lg font-semibold">{book.language}</span>
                </div>
                <p className="text-sm text-gray-400">Language</p>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">{book.description}</p>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-400 mb-1">Narrator</p>
                <p className="font-medium">{book.narrator}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-400 mb-1">Published</p>
                <p className="font-medium">{book.publishedYear}</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlay}
              className="w-full md:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <Play className="w-6 h-6" />
              {isThisBookPlaying ? 'Now Playing...' : 'Play Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 