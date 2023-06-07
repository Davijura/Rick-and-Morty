import React from 'react';
import { Group, SimpleGrid, createStyles, Text, Card, Image } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  pointer: {
    cursor: 'pointer',
  },
  hoverEffect: {
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: theme.shadows.md,
    },
  },
  linkUnder: {
    textDecoration: 'none',
  },
}));

type CharacterGridData = {
  name: string;
  image: string;
};

type CharacterGridProps = {
  characters: CharacterGridData[];
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  const { classes, cx } = useStyles();

  return (
    <Group position="center" mx="auto" mt={20} mb={30}>
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
        {characters.map((character, index) => (
          <Link key={index} className={classes.linkUnder} href={`/characters/${character.name}`}>
            <Card
              key={index}
              className={cx(classes.pointer, classes.hoverEffect)}
              mx="auto"
              w={280}
              h={300}
              shadow="xs"
              padding="sm"
              radius="xl"
              withBorder
            >
              <Card.Section>
                <Image fit="cover" src={character.image} alt={character.name} height="250" />
              </Card.Section>

              <Text mt={10} fw="bold" align="center">
                {character.name}
              </Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Group>
  );
};

export default CharacterGrid;