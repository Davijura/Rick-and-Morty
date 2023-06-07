import { useEffect, useState } from 'react';
import axios from 'axios';

interface CharacterData {
  name: string;
  image: string;
  status: string;
}

interface LocationData {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export const useLocationData = (name: string) => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${name}`);
        const data = response.data.results[0];
        setLocationData(data);
        fetchCharacters(data.residents);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, [name]);

  const fetchCharacters = async (residentUrls: string[]) => {
    const characterPromises = residentUrls.map(url => axios.get(url));
    const characterResponses = await Promise.all(characterPromises);
    const characterData = characterResponses.map(response => response.data);
    setCharacters(characterData);
  };

  return { locationData, characters };
};