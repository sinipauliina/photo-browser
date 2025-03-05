'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavItemProps} from '../../types/nav-types'

export default function NavItem({href, target = '_self', label}: NavItemProps) {
  const pathname = usePathname()
  const isCurrent = (pathname === href)
  const currentClass = isCurrent ? 'custom-link-current' : ''
  const currentAria = isCurrent ? 'page' : 'false'

  return (
    <li className={`flex flex-col items-center justify-center h-[inherit] ${currentClass}`}>
      <Link href={href} target={target} aria-current={currentAria}>{label}</Link>
    </li>
  )
}
