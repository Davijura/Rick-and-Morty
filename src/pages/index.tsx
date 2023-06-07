import { useState } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '@mantine/core';
import useCharacters from '@/hooks/useCharacters';
import CharacterList from '@/components/CharacterList';
import Pager from '@/components/Pager';
import SearchInput from '@/components/SearchInput';

const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}

function Home() {
  const { query, replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const { characters, isLoading, totalPages } = useCharacters({
    page: query.page ? parseInt(query.page as string) : undefined,
    searchTerm: debouncedSearchTerm // Use the debounced search term here
  });

  const setPage = (page: number) => {
    replace(`/?page=${page}`);
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = (value: string) => { // new function for handling search click
    setDebouncedSearchTerm(value);
  };

  return (
    <div>
      {isLoading && <Loader variant="dots" color="cyan" style={{ position: 'fixed', bottom: '20px', right: '30px' }} />}
      {!isLoading && (
        <>
          <SearchInput value={searchTerm} onChange={handleSearchChange} onSearch={handleSearchClick} />
          <CharacterList characters={characters} />
          <Pager
            page={query.page ? parseInt(query.page as string) : 1}
            onChange={setPage}
            total={totalPages}
          />
        </>
      )}
    </div>
  )
}

export default Home;