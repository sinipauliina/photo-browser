import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {PhotoProps} from '../types/photo-types'

const fetchPhotoInfo = async (id: number): Promise<{photoInfo: PhotoProps}> => {
  const url = new URL(`/api/photos/${id}`, window.location.origin)

  let response = null
  response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch photo info')
  }

  const data = await response.json()

  return data
}

export function usePhotoInfo(id: number = 0): UseQueryResult<{photoInfo: PhotoProps}, Error> {
  const query = useQuery({
    queryKey: ['photoInfo', id], 
    queryFn: () => fetchPhotoInfo(id),
    keepPreviousData: false,
  })

  return query
}
