import { Flex, Text, Group, createStyles } from '@mantine/core';
import Link from 'next/link';

interface CharacterInfoProps {
    name: string;
    status: string;
    gender: string;
    species: string;
    type: string;
    location: string;
    episode: {};
}

const useStyles = createStyles(() => ({
    linkUnder: {
        textDecoration: 'none',
    },
    title: {
        textAlign: 'left',
        [`@media (max-width: 768px)`]: {
            textAlign: 'center',
        },
    },
}));

export function CharacterInfo({ name, status, gender, species, type, location }: CharacterInfoProps) {
    const { classes, cx } = useStyles();

    return (
        <Group>
            <Flex mx="auto" direction="column">
                <Text size={25} mb={10} fw="bold" className={classes.title}>
                    {name}
                </Text>
                <Text >Status: {status}</Text>
                <Text py={10}>Gender: {gender}</Text>
                <Text>Specie: {species}</Text>
                <Text py={10}>Typ: {type || 'unknown'}</Text>
                <Link className={classes.linkUnder} href={`/locations/${location}`}>
                    <Text fw="bold" color='cyan'>Location: {location} </Text>
                </Link>
            </Flex>
        </Group>
    )
}