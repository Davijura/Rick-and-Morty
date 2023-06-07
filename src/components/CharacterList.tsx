import React, { useState } from 'react';
import { Group, SimpleGrid } from '@mantine/core';
import { Character } from '@/hooks/useCharacters';
import CharacterCard from './CharacterCard';

type CharacterListProps = {
  characters: Character[];
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <Group position="center" mb={35}>
      <SimpleGrid
        cols={4}
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[
          { maxWidth: '62rem', cols: 3, spacing: 'md' },
          { maxWidth: '48rem', cols: 2, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </Group>

  );
};

export default CharacterList;