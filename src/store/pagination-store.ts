import {create} from 'zustand'

interface PaginationStore {
  prev: number | undefined,
  current: number | undefined,
  next: number | undefined,
  setLinks: (links: { prev?: number, current?: number, next?: number }) => void
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  prev: undefined,
  current: 1,
  next: 2,

  setLinks: (links) => set({
    prev: links.prev || (links.current && links.current - 1) || (links.next && links.next - 2),
    current: links.current || (links.next && links.next - 1) || (links.prev && links.prev + 1),
    next: links.next || (links.current && links.current + 1) || (links.prev && links.prev + 2),
  }),
}))
