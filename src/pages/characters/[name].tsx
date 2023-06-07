import { useRouter } from "next/router"
import CharacterDetail from "@/components/CharacterDetail"
import { Group } from "@mantine/core"

const Character = () => {
    const router = useRouter()
    return (

        <Group>
            <CharacterDetail name={router.query.name as string} />
        </Group>

    )
}

export default Character