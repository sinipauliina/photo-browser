'use client'

import {usePaginationStore} from '@store/pagination-store'
import {usePhotos} from '@hooks/usePhotos'
import Thumbnails from '@components/thumbnails'
import Pagination from '@components/pagination'

export default function SectionPhotos() {
  const prev = usePaginationStore(state => state.prev)
  const current = usePaginationStore(state => state.current)
  const next = usePaginationStore(state => state.next)

  const links = {
    prev, 
    current,
    next,
  }

  const usePhotosData = usePhotos(current)
  const {data, isLoading, error} = usePhotosData

  const thumbnails = isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Oops! Something went wrong during fetching the photos.</p>
  ) : !data?.photos ? (
    <p>No photos available.</p>
  ) : (
    <Thumbnails photos={data.photos} />
  )

  return (
    <section id="main" className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full max-w-7xl items-center ml-auto mr-auto pt-24 pr-16 pb-24 pl-16 gap-16">
        <p className='mb-8'>Tip! Click the photo to see it in a larger size.</p>

        {thumbnails}

        <Pagination links={links} />
      </div>
    </section>
  )
}
