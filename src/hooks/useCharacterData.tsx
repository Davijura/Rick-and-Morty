import { useEffect, useState } from 'react';
import axios from 'axios';

interface Episode {
  name: string;
  episode: string;
}

interface CharacterData {
  air_date: Episode[];
  episode: Episode[];
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
  type: string;
  status: string;
  location: {
    name: string;
  };
}

export function useCharacterData(name: string): CharacterData | null {
  const [characterData, setCharacterData] = useState<CharacterData | null>(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      if (!name) {
        console.log('Name is not defined yet');
        return;
      }

      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${name}`
        );
        const character = response.data.results[0];
        const episodeNames = await fetchEpisodeNames(character.episode);
        const updatedData = { ...character, episode: episodeNames };
        setCharacterData(updatedData);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacterData();
  }, [name]);

  const fetchEpisodeNames = async (episodeUrls: string[]): Promise<Episode[]> => {
    const episodePromises = episodeUrls.map(async (url) => {
      const response = await axios.get(url);
      return {
        name: response.data.name,
        episode: response.data.episode,
      };
    });

    const episodes = await Promise.all(episodePromises);
    return episodes;
  };

  return characterData;
}