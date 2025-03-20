'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock } from 'lucide-react';
import { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="group">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-gray-900 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary-400 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-400">{book.author}</p>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{book.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{book.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 