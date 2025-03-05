import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface HeroProps {
  title: string;
  subtitle: string;
  size?: string;
}

export default function Hero({title, subtitle, size}: HeroProps) {
  const height = (size === 'lg') ? 'h-dvh' : 'h-[500px]'

  return (
    <div className={`flex flex-col items-start md:items-center justify-center w-screen ${height} pt-[9.75rem] pr-16 pb-24 pl-16 custom-background-secondary-color`}>
      <h1>{title}</h1>
      <span className="text-xl mb-3 custom-text-secondary-color">{subtitle}</span>

      {(size === 'lg') && (
        <Link href="#main" className="flex items-center justify-center size-[60px] link-color">
          <FontAwesomeIcon icon={faAnglesDown} className="fa-regular" aria-hidden="true" />
          <span className="sr-only">Go to main content</span>
        </Link>
      )}
    </div>
  )
}
