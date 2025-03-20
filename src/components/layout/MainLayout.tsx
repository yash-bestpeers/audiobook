'use client';

import { useState } from 'react';
import SlideBar from './SlideBar';
import AudioPlayer from '../audio/AudioPlayer';
import SearchBar from '../search/SearchBar';
import clsx from 'clsx';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SlideBar />
      <main
        className={clsx(
          "transition-all duration-300 min-h-screen",
          isOpen ? "lg:ml-64" : "lg:ml-20"
        )}
      >
        <div className="container mx-auto px-4 py-8">
          <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <SearchBar />
              </div>
            </div>
          </header>
          <main className="pb-24">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </main>
      <AudioPlayer />
    </div>
  );
} 