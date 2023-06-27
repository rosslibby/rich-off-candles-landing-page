import { Tab as TabType, tabsContext } from '@/contexts/tabs'
import { useContext } from 'react'
import styled from 'styled-components'
import Tab from './Tab'

const Tabs = () => {
  const { tabs } = useContext(tabsContext)

  return (
    <StyledTabs>
      {tabs.map((tab: TabType) => (
        <Tab key={`tab_${tab._id}`} { ...tab } />
      ))}
    </StyledTabs>
  )
}

const StyledTabs = styled.div`
  box-shadow: 0 6px 28px 0 rgba(0, 0, 0, .15);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  height: 100%;
  align-items: center;
  background-color: #151d33;
  column-gap: 16px;
  margin: 0 1rem;
  padding: 0 0.5rem;
  border-radius: 30px;
`

export default Tabs