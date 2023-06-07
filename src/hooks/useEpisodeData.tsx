import { useEffect, useState } from 'react';
import axios from 'axios';

interface CharacterData {
  name: string;
  image: string;
}

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export const useEpisodeData = (name: string) => {
  const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null);
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${name}`);
        const data = response.data.results[0];
        setEpisodeData(data);
        fetchCharacters(data.characters);
      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchEpisodeData();
  }, [name]);

  const fetchCharacters = async (characterUrls: string[]) => {
    const characterPromises = characterUrls.map(url => axios.get(url));
    const characterResponses = await Promise.all(characterPromises);
    const characterData = characterResponses.map(response => response.data);
    setCharacters(characterData);
  };

  return { episodeData, characters };
};