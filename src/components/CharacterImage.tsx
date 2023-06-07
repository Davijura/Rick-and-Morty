import { Image, Group } from '@mantine/core';

interface CharacterImageProps {
    src: string;
    alt: string;
}

export function CharacterImage({ src, alt }: CharacterImageProps) {
    return (
        <Group mx="auto" align='center'>
            <Image maw={250} src={src} radius="xl" alt={alt} />
        </Group>
    )
}