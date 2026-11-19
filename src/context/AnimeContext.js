import { createContext, useContext } from 'react';

export const AnimeContext = createContext(null);

export function useAnime() {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error('useAnime() precisa estar dentro do <AnimeProvider>.');
  }
  return context;
}
