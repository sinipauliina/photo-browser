import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons'
import Nav from './nav/nav'
import {mainNavItems} from '@app/_nav-items'

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between ps-4 pe-4 custom-background-color shadow-lg shadow-zinc-950/50 custom-button-height-mobile fixed  top-0 right-0 left-0 z-[999]">
      <span className="flex flex-col items-center justify-center h-[inherit]">
        <Link href={'/'} className="flex flex-row items-center justify-center h-[inherit]">
          <FontAwesomeIcon icon={faCameraRetro} className="flex fa-regular mr-2" /> Photo Browser
        </Link>
      </span>

      <Nav ariaLabel='Main' navItems={mainNavItems} />
    </header>
  )
}
