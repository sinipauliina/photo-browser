import {useEffect} from 'react'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {usePaginationStore} from '@store/pagination-store'
import {PhotoProps} from '../types/photo-types'

const fetchPhotos = async (page: number): Promise<{photos: PhotoProps, links: Record<string, string>}> => {
  const url = new URL('/api/photos', window.location.origin)
  url.searchParams.set('page', page.toString())

  let response = null
  response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch photos')
  }

  const data = await response.json()

  return data
}

export function usePhotos(page: number = 1): UseQueryResult<{photos: PhotoProps; links: Record<string, string>}, Error> {
  const setLinks = usePaginationStore(state => state.setLinks)

  const query = useQuery({
    queryKey: ['photos', page], 
    queryFn: () => fetchPhotos(page),
  })

  useEffect(() => {
    if (query.data?.links) {
      setLinks(query.data.links)
    }
  }, [query.data?.links, setLinks])

  return query
}
