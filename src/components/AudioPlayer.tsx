'use client';

import { useEffect, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import Image from 'next/image';

export default function AudioPlayer() {
  const { currentBook, sound, isPlaying, currentTime, duration, play, pause, seek } = useStore();
  const [volume, setVolume] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [localTime, setLocalTime] = useState(0);

  useEffect(() => {
    if (!isDragging) {
      setLocalTime(currentTime);
    }
  }, [currentTime, isDragging]);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [sound, volume]);

  if (!currentBook) return null;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setLocalTime(newTime);
    if (!isDragging) {
      seek(newTime);
    }
  };

  const handleSeekStart = () => {
    setIsDragging(true);
  };

  const handleSeekEnd = () => {
    setIsDragging(false);
    seek(localTime);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 border-t border-white/10">
      <div className="container mx-auto flex items-center gap-4">
        {/* Book Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={currentBook.coverImage}
              alt={currentBook.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold truncate">{currentBook.title}</h3>
            <p className="text-sm text-gray-400 truncate">{currentBook.author}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-4">
            <button className="hover:text-primary-500">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={isPlaying ? pause : play}
              className="p-2 rounded-full bg-primary-500 hover:bg-primary-600"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button className="hover:text-primary-500">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full flex items-center gap-2 text-sm">
            <span>{formatTime(localTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={localTime}
              onChange={handleSeek}
              onMouseDown={handleSeekStart}
              onMouseUp={handleSeekEnd}
              onTouchStart={handleSeekStart}
              onTouchEnd={handleSeekEnd}
              className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${(localTime / (duration || 100)) * 100}%, #374151 ${(localTime / (duration || 100)) * 100}%)`
              }}
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <Volume2 className="w-5 h-5" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 ${volume * 100}%, #374151 ${volume * 100}%)`
            }}
          />
        </div>
      </div>
    </div>
  );
} 