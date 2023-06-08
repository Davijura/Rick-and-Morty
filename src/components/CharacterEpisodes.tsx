import { Card, Flex, Group, ScrollArea, Text, createStyles } from '@mantine/core';
import Link from 'next/link';

interface Episode {
  name: string;
  episode: string;
}

interface CharacterEpisodesProps {
  episodes: Episode[];
}

const useStyles = createStyles((theme) => ({
  linkUnder: {
    textDecoration: "none",
  },
  responsive: {
    width: '95%',
    '@media (max-width: 768px)': {
      width: '30%',
    },
    '@media (max-width: 992px)': {
      width: '60%',
    },
    '@media (max-width: 1200px)': {
      width: '95%',
    },
  },
  hoverEffect: {
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: theme.shadows.sm,
    },
  },
  cardMobile: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  textMobile: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
    '@media (max-width: 1200px)': {
      width: '94%',
    },
  },
}));

export function CharacterEpisodesList({ episodes }: CharacterEpisodesProps) {
  const { classes, cx } = useStyles();

  return (
    <Flex justify="center" align="center" style={{ width: '100%' }}>

      <Card shadow="sm" padding="lg" radius="xl" withBorder className={classes.responsive}>
        <Group position='center'>
          <Text mb={10} size={20} fw="bold" align='center' color='cyan'>Episodes</Text>
        </Group>

        <ScrollArea scrollbarSize={14} type="auto" h={350}>
          {episodes.map((episode, index) => (
            <Link className={classes.linkUnder} key={index} href={`/episodes/${episode.name}`}>

              <Card className={cx(classes.responsive, classes.hoverEffect, classes.cardMobile)} mx="auto" mb={5} padding="sm" radius="md" withBorder>
                <Flex justify="space-between">
                  <Text fw="bold">{episode.name}</Text>
                  <Text fw="bold">{episode.episode}</Text>
                </Flex>
              </Card>

              <Card radius="md" my={10} withBorder className={classes.textMobile}>
                <Text fw="bold">{episode.name}</Text>
                <Text fw="bold">{episode.episode}</Text>
              </Card>

            </Link>
          ))}
        </ScrollArea>

      </Card>

    </Flex>
  );
}