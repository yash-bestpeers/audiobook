'use client';

import { ListMusic, Plus } from 'lucide-react';
import { books } from '@/data/books';
import { BookCard } from '@/components/BookCard';

// Demo playlists
const playlists = [
  {
    id: '1',
    name: 'Self Development',
    books: books.filter(book => book.category === 'Self-Development').slice(0, 4)
  },
  {
    id: '2',
    name: 'Fiction Favorites',
    books: books.filter(book => book.category === 'Fiction').slice(0, 4)
  }
];

export default function PlaylistsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <ListMusic className="w-8 h-8 text-primary-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent">
            Your Playlists
          </h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Create Playlist</span>
        </button>
      </div>

      {playlists.length > 0 ? (
        <div className="space-y-12">
          {playlists.map(playlist => (
            <div key={playlist.id} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100">{playlist.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {playlist.books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <ListMusic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-300 mb-2">No playlists yet</h2>
          <p className="text-gray-400">Create your first playlist to organize your audiobooks</p>
        </div>
      )}
    </div>
  );
} 