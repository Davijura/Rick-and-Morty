import Location from '@/pages/locations/[name]';
import axios from 'axios';
import { useEffect, useState } from 'react'

export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

export type UseLocationsProps = {
    page?: number;
}

const useCharacters = ({ page = 1 }: UseLocationsProps) => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)

    useEffect(() => {

        const fetchCharacters = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
                setLocations(response.data.results);
                setTotalPages(response.data.info.pages)
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
            setIsLoading(false)
        };

        fetchCharacters();
    }, [page]);

    return {
        locations,
        isLoading,
        totalPages
    }

}

export default useCharacters