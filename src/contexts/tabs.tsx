import { ReactNode, createContext, useCallback, useState } from 'react'

export type Tab = {
  _id: string
  active: boolean
  name: string
  url: string
}

export type TabsContext = {
  active?: Tab
  tabs: Tab[]
  setTab: (id: string) => void
}

const initialTabs: Tab[] = [
  {
    _id: 'links',
    active: true,
    name: 'Links',
    url: '#links',
  },
  {
    _id: 'signals',
    active: false,
    name: 'Signals',
    url: '#signals',
  },
  {
    _id: 'reviews',
    active: false,
    name: 'Reviews',
    url: '#reviews',
  },
]

export const tabsContext = createContext<TabsContext>({
  tabs: initialTabs,
  setTab: (id: string) => null,
})

type TabsContextProviderProps = {
  children: ReactNode
}

export const TabsContextProvider = ({ children }: TabsContextProviderProps) => {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs)
  const current = tabs.find((tab: Tab) => tab.active)
  const setTab = useCallback((id: string) => setTabs(
    (prevState: Tab[]) => prevState.map((tab: Tab) => ({
      ...tab,
      active: tab._id === id,
    }))
  ), [setTabs])

  return (
    <tabsContext.Provider value={{
      active: current,
      tabs,
      setTab,
    }}>
      {children}
    </tabsContext.Provider>
  )
}