import { Tab as TabType, tabsContext } from '@/contexts/tabs'
import { useRouter } from 'next/router'
import { useCallback, useContext } from 'react'
import styled from 'styled-components'

const Tab = ({ _id, active, name, url }: TabType) => {
  const router = useRouter()
  const { setTab } = useContext(tabsContext)
  const handleClick = useCallback(() => {
    router.push(url, undefined, { shallow: true })
    setTab(_id)
  }, [_id, router, setTab, url])

  return (
    <StyledTab
      $active={active}
      data-active-tab={active}
      onClick={handleClick}
    >{name}</StyledTab>
  )
}

const StyledTab = styled.button<{ $active?: boolean }>`
  background-color: transparent;
  border: none;
  border-radius: 30px;
  color: ${props => props.$active ? '#648fe2' : '#7983a9'};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 12px 20px;
  position: relative;
  z-index: 1;
`

export default Tab