import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {QuoteProps} from '../types/quote-types'

const fetchQuote = async (): Promise<{quote: QuoteProps}> => {
  const url = new URL('/api/quote/', window.location.origin)
  console.log('url: ', url)

  let response = null
  response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch quote')
  }

  const data = await response.json()

  return data
}

export function useQuote(): UseQueryResult<{quote: QuoteProps}, Error> {
  const query = useQuery({
    queryKey: ['quote'], 
    queryFn: () => fetchQuote(),
    keepPreviousData: false,
  })

  return query
}
