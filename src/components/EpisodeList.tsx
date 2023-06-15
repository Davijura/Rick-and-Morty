import { Card, Text, Group, createStyles, Flex } from "@mantine/core";
import { Episode } from '@/hooks/useEpisodes';
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

type EpisodeListProps = {
  episodes: Episode[];
};

const useStyles = createStyles((theme) => ({
  pointer: {
    cursor: "pointer"
  },
  hoverEffect: {
    transition: "box-shadow 0.3s",
    "&:hover": {
      boxShadow: theme.shadows.md
    }
  },
  linkUnder: {
    textDecoration: "none"
  },
  contentCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  card: {
    width: "600px",
    maxWidth: "100%",
    margin: "auto",
    marginBottom: theme.spacing.xs,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.xs,
    transition: "box-shadow 0.3s",

    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
}));

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  const { classes, cx } = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Group position="center" mb={35}>
      <Flex
        mih={50}
        mt={15}
        gap="md"
        justify="center"
        align="left"
        direction="column"
        wrap="wrap"
      >
        {episodes.map((episode) => (
          <Link key={episode.id} className={classes.linkUnder} href={`/episodes/${episode.name}`}>
            <Card withBorder className={cx(classes.pointer, classes.hoverEffect, classes.card)}>
              <Group w="full" position="center" className={classes.contentCenter}>
                <Text>{episode.episode}</Text>
                <Text>{episode.name}</Text>
                {!isMobile && <Text>{episode.air_date}</Text>}
              </Group>
            </Card>
          </Link>
        ))}
      </Flex>
    </Group>
  );
};

export default EpisodeList;