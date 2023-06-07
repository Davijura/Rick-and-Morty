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
      width: '80%',
    },
  },
  hoverEffect: {
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: theme.shadows.sm,
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

        <ScrollArea type="auto" style={{ maxHeight: 240, overflowY: 'auto', width: '100%' }}>
          {episodes.map((episode, index) => (
            <Link className={classes.linkUnder} key={index} href={`/episodes/${episode.name}`}>

              <Card className={cx(classes.responsive, classes.hoverEffect)} mx="auto" my={5} padding="sm" radius="md" withBorder>
                <Flex justify="space-between">
                  <Text fw="bold">{episode.name}</Text>
                  <Text fw="bold">{episode.episode}</Text>
                </Flex>
              </Card>

            </Link>
          ))}
        </ScrollArea>

      </Card>

    </Flex>
  );
}