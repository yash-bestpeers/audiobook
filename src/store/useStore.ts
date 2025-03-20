import { create } from 'zustand';
import { Howl } from 'howler';
import { Book } from '@/data/books';

interface AudioStore {
  currentBook: Book | null;
  sound: Howl | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  setCurrentBook: (book: Book) => void;
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  cleanup: () => void;
}

export const useStore = create<AudioStore>((set, get) => ({
  currentBook: null,
  sound: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,

  setCurrentBook: (book) => {
    const { sound, cleanup } = get();
    
    // Clean up existing sound
    cleanup();

    const audioSource = book.audioFile || book.audioUrl || '/audio/gameoflife01_scovelshinn_64kb.mp3';

    // Create new sound instance
    const newSound = new Howl({
      src: [audioSource],
      html5: true,
      onload: () => {
        set({ duration: newSound.duration() });
      },
      onplay: () => {
        set({ isPlaying: true });
        // Update current time while playing
        const updateTime = () => {
          if (newSound.playing()) {
            set({ currentTime: newSound.seek() as number });
            requestAnimationFrame(updateTime);
          }
        };
        requestAnimationFrame(updateTime);
      },
      onpause: () => {
        set({ isPlaying: false });
      },
      onstop: () => {
        set({ isPlaying: false, currentTime: 0 });
      },
      onseek: () => {
        set({ currentTime: newSound.seek() as number });
      },
      onend: () => {
        set({ isPlaying: false, currentTime: 0 });
        newSound.seek(0);
      },
    });

    set({ currentBook: book, sound: newSound, currentTime: 0, duration: 0 });
  },

  play: () => {
    const { sound } = get();
    if (sound) {
      sound.play();
    }
  },

  pause: () => {
    const { sound } = get();
    if (sound) {
      sound.pause();
    }
  },

  seek: (time) => {
    const { sound } = get();
    if (sound) {
      sound.seek(time);
      set({ currentTime: time });
    }
  },

  setCurrentTime: (time) => {
    set({ currentTime: time });
  },

  setDuration: (duration) => {
    set({ duration });
  },

  cleanup: () => {
    const { sound } = get();
    if (sound) {
      sound.unload();
    }
    set({ sound: null, currentBook: null, isPlaying: false, currentTime: 0, duration: 0 });
  },
})); 