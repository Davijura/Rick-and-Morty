import { useRouter } from "next/router"
import LocationDetail from "@/components/LocationDetail"
import { Group } from "@mantine/core"

const Location = () => {
    const router = useRouter()
    return (

        <Group>
            <LocationDetail name={router.query.name as string} />
        </Group>

    )

}

export default Location