import Link from 'next/link'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  scroll?: boolean
}

const NavLink = ({ children, href, ...props }: NavLinkProps) => (
  <Link
    href={href}
    {...props}
    className={`rounded-lg px-4 py-2.5 text-center duration-150 ${props?.className || ''}`}
  >
    {children}
  </Link>
)

export default NavLink
