import { Card, Text, Loader, Flex, Group } from '@mantine/core';
import { useLocationData } from '../hooks/useLocationData';
import LocationGrid from './LocationGrid';

interface LocationDetailProps {
  name: string;
}

export default function LocationDetail({ name }: LocationDetailProps) {
  const { locationData, characters } = useLocationData(name);

  if (!locationData) {
    return <Loader variant="dots" color="cyan" style={{ position: 'fixed', bottom: '20px', right: '30px' }} />;
  }

  if (!characters.length) {
    return (
      <Flex direction="column" mx="auto">
        <Group position="center" mx="auto">
          <Card shadow="sm" padding="lg" radius="md" withBorder w={350}>
            <Text fw="bold" size={20} align="center">{locationData.name}</Text>
            <p>Type: {locationData.type}</p>
            <p>Dimension: {locationData.dimension}</p>
          </Card>
        </Group>

        <Group position="center" mx="auto" mt={20} mb={30}>
          <Text>No residents found</Text>
        </Group>
      </Flex>
    );
  }

  return (
    
      <Flex direction="column" mx="auto">
        <Group position="center" mx="auto">
          <Card shadow="sm" padding="lg" radius="md" withBorder w={350}>
            <Text fw="bold" size={20} align="center">{locationData.name}</Text>
            <p>Type: {locationData.type}</p>
            <p>Dimension: {locationData.dimension}</p>
          </Card>
        </Group>

        <Group position="center" mx="auto" mt={20} mb={30}>
          <LocationGrid characters={characters} />
        </Group>
      </Flex>
    
  );
}