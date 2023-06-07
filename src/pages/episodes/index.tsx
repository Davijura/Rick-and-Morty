import { Inter } from 'next/font/google'
import EpisodeList from '@/components/EpisodeList'
import Pager from '@/components/Pager'
import { Loader } from '@mantine/core';
import { useRouter } from 'next/router';
import useEpisodes from '@/hooks/useEpisodes';

const defaultEndpoint = "https://rickandmortyapi.com/api/episode/"

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
  const { episodes, isLoading, totalPages } = useEpisodes({ page: query.page ? parseInt(query.page as string) : undefined })
  const setPage = (page: number) => {
    replace(`episodes/?page=${page}`)
  }

  return (
    <div>
      {isLoading && <Loader variant="dots" color="cyan" style={{ position: 'fixed', bottom: '20px', right: '30px' }} />}
      {!isLoading && <>
        <EpisodeList episodes={episodes} />

        <Pager page={query.page ? parseInt(query.page as string) : 1} onChange={setPage} total={totalPages} />
      </>}
    </div>
  )
}
export default Home