import NavItem from './nav-item'
import {NavProps} from '../../types/nav-types'

export default function Nav({ariaLabel, navItems}: NavProps) {
  return (
    <nav aria-label={ariaLabel} className='flex flex-row h-[inherit]'>
      <ul className='flex flex-row h-[inherit] gap-10'>
        {navItems?.map(({href, target, label}) => (
          <NavItem key={href} href={href} target={target} label={label} />
        ))}
      </ul>
    </nav>
  )
}
