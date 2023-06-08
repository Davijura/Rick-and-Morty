import axios from 'axios';
import { useEffect, useState } from 'react';

export type Character = {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
  episode: {};
};

export type UseCharactersProps = {
  page?: number;
  searchTerm?: string;
};

const useCharacters = ({ page = 1, searchTerm = '' }: UseCharactersProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/', {
          params: {
            page,
            name: searchTerm,
          },
        });
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        const axiosError = error as any;
        if (axiosError.response && axiosError.response.status === 404) {
          // Handle the 404 error
          console.error('Character not found:', searchTerm);
        } else {
          // Handle other errors
          console.error('Error fetching characters:', error);
        }
      }
      setIsLoading(false);
    };

    fetchCharacters();
  }, [page, searchTerm]);

  return {
    characters,
    isLoading,
    totalPages,
  };
};

export default useCharacters;