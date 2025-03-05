import {usePaginationStore} from '@store/pagination-store'

type paginationProps = {
  links: {
    prev: number | undefined;
    current: number | undefined;
    next: number | undefined;
  }
}

export default function Pagination({links}: paginationProps) {
  const setLinks = usePaginationStore((state) => state.setLinks)
  
  return (
    <nav aria-label="Pagination" className="flex flex-col items-center">
      <ul className="flex flex-row items-center gap-8 custom-button-height-mobile"> 
        {links.prev ? (
          <li>
            <button 
              className="custom-link"
              title="Previous page"
              onClick={() => setLinks({current: links.prev})}
            >
              Previous
            </button>
          </li>
        ) : (
          <li aria-hidden='true'>
            <span className='disabled'>Previous</span>
          </li>
        )}
        
        <li>
          <span title='Current page'>{links.current}</span>
        </li>

        {links.next ? (
          <li>
            <button 
              className="custom-link"
              title="Next page"
              onClick={() => setLinks({current: links.next})}
            >
              Next
            </button>
          </li>
        ) : (
          <li aria-hidden='true'>
            <span className='disabled'>Next</span>
          </li>
        )}
      </ul>
    </nav>
  )
}
