import Episode from '@/pages/episodes/[name]';
import axios from 'axios';
import { useEffect, useState } from 'react'

export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string;
}

export type UseEpisodesProps = {
    page?: number;
}

const useCharacters = ({ page = 1 }: UseEpisodesProps) => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)

    useEffect(() => {

        const fetchCharacters = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
                setEpisodes(response.data.results);
                setTotalPages(response.data.info.pages)
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
            setIsLoading(false)
        };

        fetchCharacters();
    }, [page]);

    return {
        episodes,
        isLoading,
        totalPages
    }
}

export default useCharacters