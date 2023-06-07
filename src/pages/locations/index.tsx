import { Inter } from 'next/font/google'
import LocationList from '@/components/LocationList'
import Pager from '@/components/Pager'
import { Loader } from '@mantine/core';
import { useRouter } from 'next/router';
import useLocations from '@/hooks/useLocations';

const defaultEndpoint = "https://rickandmortyapi.com/api/location/"

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

const inter = Inter({ subsets: ['latin'] })

function Home() {
  const { query, replace } = useRouter()
  const { locations, isLoading, totalPages } = useLocations({ page: query.page ? parseInt(query.page as string) : undefined })
  const setPage = (page: number) => {
    replace(`locations/?page=${page}`)
  }

  return (
    <div>
      {isLoading && <Loader variant="dots" color="cyan" style={{ position: 'fixed', bottom: '20px', right: '30px' }} />}
      {!isLoading && <>
        <LocationList locations={locations} />

        <Pager page={query.page ? parseInt(query.page as string) : 1} onChange={setPage} total={totalPages} />
      </>}
    </div>
  )
}
export default Home