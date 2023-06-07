import { Card, Image, SimpleGrid, createStyles, Text } from '@mantine/core';
import Link from "next/link";

interface LocationGridProps {
  characters: Array<{
    name: string;
    image: string;
  }>;
}

const useStyles = createStyles((theme: { shadows: { md: any; }; spacing: { xs: any; sm: any; }; }) => ({
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
  }
}))

const LocationGrid: React.FC<LocationGridProps> = ({ characters }) => {
  const { classes, cx } = useStyles();

  return (
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
              <Image fit='initial' src={character.image} alt={character.name} height="250" />
            </Card.Section>

            <Text fw="bold" mt={9} align='center'>{character.name}</Text>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}

export default LocationGrid;