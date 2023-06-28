import { ReactNode, createContext, useCallback, useState } from 'react'

export type CallToAction = {
  text: string
  iconLeft: ReactNode
  iconRight: ReactNode
}

export interface NavItem {
  _id: string
  active: boolean
  color: string
  content: ReactNode
  cta: CallToAction
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
    content: (
      <span>
        Get started
      </span>
    ),
    cta: {
      text: 'Get started',
      iconLeft: <i className="fas fa-fire-flame-curved" />,
      iconRight: <i className="fal fa-arrow-up-right-from-square" />,
    },
    name: 'About us',
    url: '/about',
    icon: <i className="fas fa-fire-flame-curved" />,
  },
  {
    _id: 'diamond',
    active: false,
    color: '#17fdfe',
    content: (
      <span>
        Includes everything in Platinum Tier, plus:<br />
        <ul>
          <li>Advanced, in-depth mentorship</li>
          <li>One-on-one classes</li>
          <li>Weekly live reviews</li>
          <li>Monthly progress check-in</li>
          <li>Exclusive perks</li>
        </ul>
        Join me as I teach you how to trade step-by-step!
      </span>
    ),
    cta: {
      text: 'Join the Discord',
      iconLeft: <i className="fa-brands fa-discord" />,
      iconRight: <i className="fal fa-arrow-up-right-from-square" />,
    },
    name: 'Diamond tier',
    url: '/diamond',
    icon: <i className="fa-brands fa-discord" />,
  },
  {
    _id: 'platinum',
    active: false,
    color: '#93bfe3',
    content: (
      <span>
        Learn the ins and outs of <strong>profitable trading</strong> with access to in-depth education, monthly &amp; weekly group reviews.
      </span>
    ),
    cta: {
      text: 'Join the Discord',
      iconLeft: <i className="fa-brands fa-discord" />,
      iconRight: <i className="fal fa-arrow-up-right-from-square" />,
    },
    name: 'Platinum tier',
    url: '/platinum',
    icon: <i className="fa-brands fa-discord" />,
  },
  {
    _id: 'contact',
    active: false,
    color: '#ffffff',
    content: '',
    cta: {
      text: 'Send me a message',
      iconLeft: <i className="fal fa-message" />,
      iconRight: <i className="fal fa-arrow-up-right-from-square" />,
    },
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
  const setNav = useCallback((id?: string) =>
    id
      ? setNavItems(
      (prevState: NavItem[]) => prevState.map((navItem: NavItem) => ({
        ...navItem,
        active: navItem._id === id,
      })))
      : setNavItems(
        (prevState: NavItem[]) => prevState.map((navItem: NavItem) => ({
          ...navItem,
          active: false,
        }))), [setNavItems])

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