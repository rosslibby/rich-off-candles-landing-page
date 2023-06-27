import { Tab as TabType, tabsContext } from '@/contexts/tabs'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Tab from './Tab'

const Tabs = () => {
  const tabsRef = useRef<HTMLDivElement>(null)
  const { active, tabs } = useContext(tabsContext)
  const [dimensions, setDimensions] = useState<{
    height: number
    left: number
    top: number
    width: number
  }>({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
  })

  const updateWidth = useCallback(() => {
    const { current } = tabsRef

    if (current) {
      const activeTab = current.querySelector('[data-active-tab="true"]')
      const top = (activeTab as HTMLDivElement)?.offsetTop
      const left = (activeTab as HTMLDivElement)?.offsetLeft
      const height = (activeTab as HTMLDivElement)?.offsetHeight
      const width = (activeTab as HTMLDivElement)?.offsetWidth
      const activeTabHeight = activeTab?.getBoundingClientRect().height
      const activeTabWidth = activeTab?.getBoundingClientRect().width
      
      if (top && left && height && width) {
        setDimensions({ height, left, top, width })
      }
    }
  }, [tabsRef, setDimensions])

  useEffect(() => {
    updateWidth()
  }, [active, updateWidth])

  return (
    <StyledTabs ref={tabsRef}>
      {tabs.map((tab: TabType) => (
        <Tab key={`tab_${tab._id}`} { ...tab } />
      ))}
      <Floater {...dimensions} />
    </StyledTabs>
  )
}

const Floater = styled.div<{ height: number, left: number, top: number, width: number }>`
  background-color: #222f4f;
  border-radius: 30px;
  box-sizing: border-box;
  height: ${props => props.height}px;
  left: ${props => props.left}px;
  position: absolute;
  top: ${props => props.top}px;
  transition: all .35s ease;
  width: ${props => props.width}px;
  z-index: 0;
`

const StyledTabs = styled.div`
  align-items: center;
  background-color: #151d33;
  border-radius: 30px;
  box-shadow: 0 6px 28px 0 rgba(0, 0, 0, .15);
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  margin: 0 1rem;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
`

export default Tabs