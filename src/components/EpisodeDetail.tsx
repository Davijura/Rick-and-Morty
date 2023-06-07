import React from 'react';
import { Group, Card, Text, Loader } from '@mantine/core';
import { useEpisodeData } from '../hooks/useEpisodeData';
import CharacterGrid from './CharacterGrid';

interface EpisodeDetailProps {
  name: string;
}

export default function EpisodeDetail({ name }: EpisodeDetailProps) {
  const { episodeData, characters } = useEpisodeData(name);

  if (!episodeData) {
    return <Loader variant="dots" color="cyan" style={{ position: 'fixed', bottom: '20px', right: '30px' }} />;
  }

  return (
    <Group>
      <Group position="center" mx="auto">
        <Card shadow="sm" padding="lg" radius="md" withBorder w={350}>
          <Text fw="bold" size={20} align="center">
            {episodeData.name}
          </Text>
          <p>Air date: {episodeData.air_date}</p>
          <p>Episode: {episodeData.episode}</p>
        </Card>
      </Group>

      <CharacterGrid characters={characters} />
    </Group>
  );
}