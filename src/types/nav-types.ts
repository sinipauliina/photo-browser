export interface NavItemProps {
  href: string;
  target?: string;
  label: string;
}

export interface NavProps {
  ariaLabel: string;
  navItems: NavItemProps[];
}
