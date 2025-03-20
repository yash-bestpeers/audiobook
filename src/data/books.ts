export interface Chapter {
  title: string;
  duration: string;
  audioFile: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  narrator: string;
  duration: string;
  coverImage: string;
  audioFile?: string;
  audioUrl?: string;
  category: string;
  description: string;
  releaseDate?: string;
  publishedYear?: number;
  rating: number;
  language?: string;
  chapters?: Chapter[];
}

// Available audio files that we'll cycle through
const availableAudioFiles = [
  '/audio/gameoflife01_scovelshinn_64kb.mp3',
  '/audio/gameoflife02_scovelshinn_64kb.mp3',
  '/audio/gameoflife03_scovelshinn_64kb.mp3',
  '/audio/gameoflife04_scovelshinn_64kb.mp3',
  '/audio/gameoflife05_scovelshinn_64kb.mp3',
  '/audio/gameoflife06_scovelshinn_64kb.mp3',
  '/audio/gameoflife07_scovelshinn_64kb.mp3',
  '/audio/gameoflife08_scovelshinn_64kb.mp3',
  '/audio/gameoflife09_scovelshinn_64kb.mp3',
  '/audio/gameoflife10_scovelshinn_64kb.mp3',
  '/audio/gameoflife11_scovelshinn_64kb.mp3',
  '/audio/loveconquersall_01-05_benchley_64kb.mp3',
  '/audio/loveconquersall_06-10_benchley_64kb.mp3',
  '/audio/loveconquersall_11-15_benchley_64kb.mp3',
  '/audio/loveconquersall_16-20_benchley_64kb.mp3',
  '/audio/loveconquersall_21-25_benchley_64kb.mp3',
  '/audio/loveconquersall_26-30_benchley_64kb.mp3',
];

// Helper function to generate a book
const generateBook = (
  id: string,
  title: string,
  author: string,
  category: string,
  description: string,
  rating: number = 4.5,
  duration: string = '6h 30m'
): Book => ({
  id,
  title,
  author,
  narrator: `${author.split(' ')[0]} Reader`,
  duration,
  coverImage: `https://picsum.photos/seed/${id}/400/600`,
  audioFile: availableAudioFiles[Number(id) % availableAudioFiles.length],
  category,
  description,
  publishedYear: 2020 + Math.floor(Math.random() * 4),
  rating,
  language: 'English',
});

export const books: Book[] = [
  {
    id: '1',
    title: 'Game of Life - Chapter 1',
    author: 'Scovel Shinn',
    narrator: 'LibriVox',
    duration: '25m 32s',
    coverImage: 'https://picsum.photos/seed/game1/400/600',
    audioFile: '/audio/gameoflife01_scovelshinn_64kb.mp3',
    category: 'Self-Development',
    description: 'First chapter of the transformative book about the game of life and how to play it.',
    releaseDate: '2024-03-20',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Game of Life - Chapter 2',
    author: 'Scovel Shinn',
    narrator: 'LibriVox',
    duration: '22m 15s',
    coverImage: 'https://picsum.photos/seed/game2/400/600',
    audioFile: '/audio/gameoflife02_scovelshinn_64kb.mp3',
    category: 'Self-Development',
    description: 'Second chapter continuing the journey through the game of life.',
    releaseDate: '2024-03-20',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Love Conquers All - Part 1',
    author: 'Robert Benchley',
    narrator: 'LibriVox',
    duration: '35m 45s',
    coverImage: 'https://picsum.photos/seed/love1/400/600',
    audioFile: '/audio/loveconquersall_01-05_benchley_64kb.mp3',
    category: 'Fiction',
    description: 'A collection of humorous essays about life, love, and everything in between.',
    releaseDate: '2024-03-20',
    rating: 4.7,
  },
  {
    id: '5',
    title: 'Beyond the Stars',
    author: 'David Clarke',
    narrator: 'Jane Smith',
    duration: '7h 21m',
    coverImage: 'https://picsum.photos/id/238/400/600',
    audioFile: '/audio/beyond-the-stars.mp3',
    category: 'Science Fiction',
    description: 'An epic journey through the cosmos in search of a new home.',
    releaseDate: '2023-11-10',
    rating: 4.8,
    chapters: [
      {
        title: 'Chapter 1: Departure',
        duration: '18m 10s',
        audioFile: '/audio/beyond-the-stars-ch1.mp3'
      },
      {
        title: 'Chapter 2: Lost in Space',
        duration: '15m 22s',
        audioFile: '/audio/beyond-the-stars-ch2.mp3'
      }
    ]
  },
  {
    id: '6',
    title: 'Echoes of the Past',
    author: 'Sarah Lynn',
    narrator: 'Michael Brown',
    duration: '6h 45m',
    coverImage: 'https://picsum.photos/id/239/400/600',
    audioFile: '/audio/echoes-of-the-past.mp3',
    category: 'Historical Fiction',
    description: 'A heartwarming tale of love and resilience during wartime.',
    releaseDate: '2022-09-05',
    rating: 4.6,
    chapters: [
      {
        title: 'Chapter 1: Memories',
        duration: '16m 20s',
        audioFile: '/audio/echoes-of-the-past-ch1.mp3'
      },
      {
        title: 'Chapter 2: The Letter',
        duration: '14m 55s',
        audioFile: '/audio/echoes-of-the-past-ch2.mp3'
      }
    ]
  },
  {
    id: '7',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A story of decadence and excess, Gatsby explores the darker aspects of the Jazz Age, and the dangers of materialism and the pursuit of wealth.',
    coverImage: 'https://picsum.photos/seed/gatsby/400/600',
    category: 'Fiction',
    duration: '8h 45m',
    rating: 4.8,
    audioUrl: '/audio/gatsby.mp3',
    narrator: 'James Earl Jones',
    publishedYear: 1925,
    language: 'English',
  },
  {
    id: '8',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian masterpiece that explores totalitarianism, surveillance, and the manipulation of truth.',
    coverImage: 'https://picsum.photos/seed/1984/400/600',
    category: 'Fiction',
    duration: '11h 30m',
    rating: 4.9,
    audioUrl: '/audio/1984.mp3',
    narrator: 'Simon Prebble',
    publishedYear: 1949,
    language: 'English',
  },
  {
    id: '9',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness through 19 short stories.',
    coverImage: 'https://picsum.photos/seed/psychology/400/600',
    category: 'Non-Fiction',
    duration: '5h 45m',
    rating: 4.7,
    audioUrl: '/audio/psychology.mp3',
    narrator: 'Chris Hill',
    publishedYear: 2020,
    language: 'English',
  },
  {
    id: '10',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
    coverImage: 'https://picsum.photos/seed/atomic/400/600',
    category: 'Self-Development',
    duration: '5h 35m',
    rating: 4.8,
    audioUrl: '/audio/atomic.mp3',
    narrator: 'James Clear',
    publishedYear: 2018,
    language: 'English',
  },
  {
    id: '11',
    title: 'The Innovator\'s Dilemma',
    author: 'Clayton M. Christensen',
    description: 'When New Technologies Cause Great Firms to Fail.',
    coverImage: 'https://picsum.photos/seed/innovator/400/600',
    category: 'Business',
    duration: '7h 15m',
    rating: 4.6,
    audioUrl: '/audio/innovator.mp3',
    narrator: 'Deaver Brown',
    publishedYear: 1997,
    language: 'English',
  },
  {
    id: '12',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    description: 'From the Big Bang to Black Holes.',
    coverImage: 'https://picsum.photos/seed/time/400/600',
    category: 'Science',
    duration: '5h 55m',
    rating: 4.7,
    audioUrl: '/audio/time.mp3',
    narrator: 'Michael Jackson',
    publishedYear: 1988,
    language: 'English',
  },
  {
    id: '13',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    description: 'The biography of Apple co-founder Steve Jobs.',
    coverImage: 'https://picsum.photos/seed/jobs/400/600',
    category: 'Biography',
    duration: '25h 15m',
    rating: 4.8,
    audioUrl: '/audio/jobs.mp3',
    narrator: 'Dylan Baker',
    publishedYear: 2011,
    language: 'English',
  },
  {
    id: '14',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'A Handbook of Agile Software Craftsmanship.',
    coverImage: 'https://picsum.photos/seed/clean/400/600',
    category: 'Technology',
    duration: '8h 30m',
    rating: 4.9,
    audioUrl: '/audio/clean.mp3',
    narrator: 'Nicholas C. Martin',
    publishedYear: 2008,
    language: 'English',
  },
  
  // Mystery Books
  generateBook('15', 'The Midnight Conspiracy', 'Rachel Morgan', 'Mystery', 'A gripping tale of political intrigue and murder in Washington D.C.'),
  generateBook('16', 'The Last Witness', 'Marcus Chen', 'Mystery', 'A detective races against time to protect the sole witness of a high-profile crime.'),
  generateBook('17', 'Shadows in the Fog', 'Elena Torres', 'Mystery', 'A series of mysterious disappearances plague a small coastal town.'),
  
  // Science Fiction
  generateBook('18', 'Quantum Dreams', 'Alex Rivera', 'Science Fiction', 'A scientist discovers a way to enter and manipulate dreams, with unforeseen consequences.'),
  generateBook('19', 'The Mars Protocol', 'Sarah Chen', 'Science Fiction', 'The first Mars colony faces an unknown threat that could doom humanity\'s future in space.'),
  generateBook('20', 'Digital Horizon', 'James Zhang', 'Science Fiction', 'In a world where consciousness can be uploaded, a detective investigates digital crimes.'),
  
  // Historical Fiction
  generateBook('21', 'The Silk Merchant\'s Daughter', 'Lisa Wong', 'Historical Fiction', 'A tale of love and survival along the ancient Silk Road.'),
  generateBook('22', 'Echoes of Revolution', 'Carlos Ruiz', 'Historical Fiction', 'A family\'s saga during the Mexican Revolution.'),
  generateBook('23', 'The Last Samurai\'s Son', 'Takeshi Yamamoto', 'Historical Fiction', 'A young man struggles with tradition and modernization in Meiji-era Japan.'),
  
  // Fiction
  generateBook('24', 'The Art of Letting Go', 'Maya Patel', 'Fiction', 'A moving story about family, forgiveness, and finding oneself.'),
  generateBook('25', 'Summer in Paris', 'Sophie Martin', 'Fiction', 'A heartwarming romance set in the City of Light.'),
  generateBook('26', 'The Bookshop on Corner Street', 'Emma Thompson', 'Fiction', 'A charming tale about a small bookshop that changes lives.'),
  
  // Non-Fiction
  generateBook('27', 'The Future of AI', 'Dr. Alan Chen', 'Non-Fiction', 'An accessible exploration of artificial intelligence and its impact on society.'),
  generateBook('28', 'Mindful Living', 'Sarah Johnson', 'Non-Fiction', 'A practical guide to incorporating mindfulness into daily life.'),
  generateBook('29', 'The Climate Solution', 'Dr. Michael Green', 'Non-Fiction', 'Innovative approaches to addressing climate change.'),
  
  // Business
  generateBook('30', 'Start-Up Nation', 'David Cohen', 'Business', 'How small countries are leading the global innovation economy.'),
  generateBook('31', 'The Digital CEO', 'Jennifer Wu', 'Business', 'Leadership strategies for the digital age.'),
  generateBook('32', 'Future of Work', 'Robert Miller', 'Business', 'How AI and automation are transforming the workplace.'),
  
  // Science
  generateBook('33', 'The Quantum World', 'Dr. Richard Feynman Jr.', 'Science', 'Making quantum physics accessible to everyone.'),
  generateBook('34', 'Origins of Life', 'Dr. Maria Garcia', 'Science', 'The latest theories about how life began on Earth.'),
  generateBook('35', 'The Brain\'s Secret Life', 'Dr. Sarah Thompson', 'Science', 'New discoveries in neuroscience and consciousness.'),
  
  // Biography
  generateBook('36', 'The Code Breaker', 'Walter Thompson', 'Biography', 'The life of a pioneering computer scientist who changed the digital world.'),
  generateBook('37', 'Beyond the Canvas', 'Maria Rodriguez', 'Biography', 'The extraordinary life of a revolutionary artist.'),
  generateBook('38', 'The Space Pioneer', 'James Anderson', 'Biography', 'The untold story of a visionary space entrepreneur.'),
  
  // Self-Development
  generateBook('39', 'The 5 AM Revolution', 'Robin Sharma', 'Self-Development', 'Transform your life by owning your morning routine.'),
  generateBook('40', 'Deep Focus', 'Cal Wilson', 'Self-Development', 'Achieve more by mastering the art of concentration.'),
  generateBook('41', 'The Resilience Code', 'Dr. Angela Lee', 'Self-Development', 'Building mental strength in challenging times.'),
  
  // Technology
  generateBook('42', 'Blockchain Revolution', 'Alex Thompson', 'Technology', 'How blockchain technology is reshaping the future of business.'),
  generateBook('43', 'The Privacy War', 'Edward Snow', 'Technology', 'Protecting personal data in the digital age.'),
  generateBook('44', 'Code as Craft', 'Linda Zhang', 'Technology', 'The art and science of writing beautiful software.'),
  
  // Additional Categories
  generateBook('45', 'The Mindful Chef', 'Jamie Oliver', 'Cooking', 'Healthy and delicious recipes for busy people.'),
  generateBook('46', 'Urban Gardening', 'Maria Green', 'Lifestyle', 'Growing your own food in small spaces.'),
  generateBook('47', 'The Travel Photographer', 'David Bailey', 'Photography', 'Capturing the world through your lens.'),
  generateBook('48', 'Financial Freedom', 'Robert Kiyosaki', 'Finance', 'Building wealth through smart investing.'),
  generateBook('49', 'The Fitness Revolution', 'Chris Hemsworth', 'Health', 'Transform your body and mind with functional fitness.'),
  generateBook('50', 'Modern Architecture', 'Zaha Hadid', 'Architecture', 'The future of sustainable building design.'),
  generateBook('51', 'The Art of Film', 'Christopher Nolan', 'Film', 'Understanding cinema in the digital age.'),
  generateBook('52', 'Music Theory', 'Hans Zimmer', 'Music', 'A comprehensive guide to understanding music.'),
  generateBook('53', 'The Fashion Code', 'Anna Wintour', 'Fashion', 'Decoding style in the modern era.'),
]; 