import React from 'react';
import { Card, Text, Image, Badge, createStyles } from '@mantine/core';
import Link from 'next/link';
import { Character } from '@/hooks/useCharacters';

const useStyles = createStyles((theme) => ({
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

const getStatusColor = (status: string): string => {
    if (status === 'Alive') {
        return 'green';
    } else if (status === 'Unknown') {
        return 'gray';
    } else if (status === 'Dead') {
        return 'red';
    } else {
        return 'gray';
    }
};

type CharacterCardProps = {
    character: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const { classes, cx } = useStyles();

    return (
        <Link className={cx(classes.linkUnder, classes.hoverEffect)} key={character.id} href={`/characters/${character.name}`}>
            <Card mx="auto" w={300} h={380} shadow="xs" padding="sm" radius="md" withBorder>

                <Card.Section>
                    <Image fit="cover" src={character.image} alt={character.name} height="300" />
                    <Badge
                        color={getStatusColor(character.status)}
                        size="xl"
                        radius="sm"
                        variant="filled"
                        style={{ position: 'absolute', top: 10, right: 10, padding: '4px 8px' }}
                    >
                        {character.status}
                    </Badge>
                </Card.Section>

                <Text align="left" size="lg" weight={500} mt={10}>
                    {character.name}
                </Text>

                <Text align="left">{character.species}</Text>

            </Card>
        </Link>
    );
};

export default CharacterCard;