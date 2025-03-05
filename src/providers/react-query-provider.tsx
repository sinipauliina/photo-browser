'use client'

import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from '@hooks/query-client'

type ReactQueryProviderProps = {
  children: React.ReactNode
}

export default function ReactQueryProvider({children}: ReactQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
