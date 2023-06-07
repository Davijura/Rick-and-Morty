import { useRouter } from "next/router"
import EpisodeDetail from "@/components/EpisodeDetail"
import { Group } from "@mantine/core"

const Episode = () => {
    const router = useRouter()
    return (

        <Group>
            <EpisodeDetail name={router.query.name as string} />
        </Group>

    )
}

export default Episode