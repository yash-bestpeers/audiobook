'use client';

import Link from 'next/link';
import { Home, TrendingUp, Heart, List, Download, Settings } from 'lucide-react';
import AudioPlayer from '@/components/AudioPlayer';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: TrendingUp, label: 'Trending', href: '/trending' },
  { icon: Heart, label: 'Favorites', href: '/favorites' },
  { icon: List, label: 'Playlists', href: '/playlists' },
  { icon: Download, label: 'Downloads', href: '/downloads' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} flex h-screen bg-black text-white`}>
      {/* Sidebar */}
      <aside className="w-16 md:w-64 flex-shrink-0 border-r border-white/10">
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold hidden md:block">AudioBooks</span>
          </Link>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 hover:bg-white/10"
            >
              <item.icon className="w-6 h-6" />
              <span className="hidden md:block">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-24">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 bg-black/95 border-b border-white/10 p-4">
          <div className="max-w-3xl mx-auto">
            <input
              type="search"
              placeholder="Search for audiobooks..."
              className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {children}
      </main>

      {/* Audio Player */}
      <AudioPlayer />
    </div>
  );
} 