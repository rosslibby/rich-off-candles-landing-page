import { ReactNode, createContext, useCallback, useState } from 'react'

export type NavItem = {
  _id: string
  active: boolean
  color: string
  name: string
  url: string
  icon: ReactNode
}

export type NavContext = {
  active?: NavItem
  items: NavItem[]
  setNav: (id: string) => void
}

const initialNav: NavItem[] = [
  {
    _id: 'about',
    active: false,
    color: '#0058f8',
    name: 'About us',
    url: '/about',
    icon: <i className="fas fa-fire-flame-curved" />,
  },
  {
    _id: 'diamond',
    active: false,
    color: '#17fdfe',
    name: 'Diamond tier',
    url: '/diamond',
    icon: <i className="fa-brands fa-discord" />,
  },
  {
    _id: 'platinum',
    active: false,
    color: '#93bfe3',
    name: 'Platinum tier',
    url: '/platinum',
    icon: <i className="fa-brands fa-discord" />,
  },
  {
    _id: 'contact',
    active: false,
    color: '#ffffff',
    name: 'Get in touch',
    url: '/contact',
    icon: <i className="fas fa-message" />,
  }
]

export const navContext = createContext<NavContext>({
  items: initialNav,
  setNav: (id: string) => null,
})

type NavContextProviderProps = {
  children: ReactNode
}

export const NavContextProvider = ({ children }: NavContextProviderProps) => {
  const [navItems, setNavItems] = useState<NavItem[]>(initialNav)
  const current = navItems.find((navItem: NavItem) => navItem.active)
  const setNav = useCallback((id: string) => setNavItems(
    (prevState: NavItem[]) => prevState.map((navItem: NavItem) => ({
      ...navItem,
      active: navItem._id === id,
    }))
  ), [setNavItems])

  return (
    <navContext.Provider value={{
      active: current,
      items: navItems,
      setNav,
    }}>
      {children}
    </navContext.Provider>
  )
}