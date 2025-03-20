'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useDebounce } from 'use-debounce';

interface SearchResult {
  id: string;
  title: string;
  author: string;
  category: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 300);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search results - replace with actual API call
  useEffect(() => {
    if (debouncedQuery) {
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'The Art of Mindfulness',
          author: 'Dr. Sarah Johnson',
          category: 'Self-Development',
        },
        {
          id: '2',
          title: 'Science of Sleep',
          author: 'Prof. Michael Chen',
          category: 'Health',
        },
        {
          id: '3',
          title: 'Future of AI',
          author: 'Tech Expert Lisa Wong',
          category: 'Technology',
        },
      ].filter(
        (result) =>
          result.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          result.author.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          result.category.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search for content..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                // Handle result selection
                setIsOpen(false);
              }}
            >
              <h3 className="font-medium">{result.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {result.author}
              </p>
              <span className="text-xs text-primary-600 dark:text-primary-400">
                {result.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 