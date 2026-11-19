import { useState } from 'react';
import { AnimeContext } from './AnimeContext.js';
import { initialAnime } from '../data/animes.js';

function AnimeProvider({ children }) {
  const [animes, setAnime] = useState(initialAnime);

  function addAnime(newAnime) {
    setAnime([...animes, newAnime]); {/*eu to espalhando os itens da lista para criar uma lista nova. NewAnime: adiciona o novo anime*/}
  }

  const value = { animes, addAnime };

  return <AnimeContext value={value}>{children}</AnimeContext>;
}

export default AnimeProvider;
