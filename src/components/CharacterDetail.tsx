import { useEffect, useState } from 'react';
import { Card, Flex, Group, Loader } from '@mantine/core';
import { useCharacterData } from '../hooks/useCharacterData';
import { CharacterImage } from './CharacterImage';
import { CharacterInfo } from './CharacterInfo';
import { CharacterEpisodesList } from './CharacterEpisodes';

interface CharacterDetailProps {
  name: string;
}

export default function CharacterDetail({ name }: CharacterDetailProps) {
  const characterData = useCharacterData(name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!characterData) {
    return <Loader variant="dots" color="cyan" style={{ position: 'fixed', bottom: '20px', right: '30px' }} />;
  }

  return (
    <Card mx="auto" w={isMobile ? '100%' : 1000} >
      <Flex mb={25} gap={35} justify="center" mx="auto" direction="row">
        <Group position="center">
          <CharacterImage src={characterData.image} alt="Postava" />
        </Group>

        <CharacterInfo
          name={characterData.name}
          status={characterData.status}
          gender={characterData.gender}
          species={characterData.species}
          type={characterData.type}
          location={characterData.location.name}
          episode={characterData.episode}

        />
      </Flex>

      <CharacterEpisodesList episodes={characterData.episode} />

    </Card>
  );
}