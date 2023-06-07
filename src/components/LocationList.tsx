import { Card, Text, Group, SimpleGrid, createStyles } from "@mantine/core"
import { Location } from '@/hooks/useLocations';
import Link from "next/link";

type LocationListProps = {
    locations: Location[]
}

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
        justifyContent: 'center',
        height: '100%',
    },

}))

const LocationList = ({ locations }: LocationListProps) => {
    const { classes, cx } = useStyles();

    return (

        <Group position="center" mb={35} >
            <SimpleGrid mt={15} cols={4} spacing="xl" verticalSpacing="sm" breakpoints={[

                { maxWidth: '62rem', cols: 3, spacing: 'md' },
                { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                { maxWidth: '36rem', cols: 1, spacing: 'sm' },
            ]}>

                {locations.map((location) => (
                    <Link key={location.id} className={classes.linkUnder} href={`/locations/${location.name}`}>
                        <Card className={cx(classes.pointer, classes.hoverEffect)} mx="auto" w={250} h={150} shadow="xs" padding="sm" radius="md" withBorder>
                            <Group align="center" position="center" mx="auto" className={classes.contentCenter}>
                                <Text fw="bold">{location.name}</Text>
                            </Group>
                        </Card>
                    </Link>
                ))}

            </SimpleGrid>
        </Group>



    );

};

export default LocationList;