import { useContext } from 'react'
import { NavItem as NavItemType, navContext } from '@/contexts/nav'
import styled from 'styled-components'
import NavItem from './NavItem'
import Link from 'next/link'
import '@/styles/nav.css'

const Nav = () => {
  const { active, items } = useContext(navContext)

  return (
    <StyledNav>
      {active && (
        <>
          <NavItem reduced={false} {...active} />
          <ContentBlock $expanded={true}>
            {active.content}
          </ContentBlock>
          <ReducedContainer>
            {items.map((item: NavItemType) => (
              <NavItem key={`nav-item-reduced_${item._id}`} reduced={true} {...item} />
            ))}
          </ReducedContainer>
        </>
      )}
      {!active && items.map((item: NavItemType) => (
        <NavItem key={`nav-item_${item._id}`} reduced={false} {...item} />
      ))}
    </StyledNav>
  )
}

const ContentBlock = styled.div<{$expanded: boolean}>`
  background-color: #222f4f;
  box-sizing: border-box;
  color: #6e84d8;
  display: grid;
  font-family: system-ui;
  font-weight: 400;
  height: ${props => props.$expanded ? '100%' : 0};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 25px;
  overflow: hidden;
  padding: ${props => props.$expanded ? '1.25rem' : 0};
  transition: all .35s ease;
  width: 100%;
`

const StyledNav = styled.div`
  background-color: #151d33;
  border: 1px solid #222f4f63;
  border-radius: 8px;
  border-top: none;
  box-shadow: 0 6px 28px 0 rgba(0, 0, 0, .15);
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: row;
  margin: 1.25rem 1rem;
  overflow: scroll;
  width: calc(100% - 2rem);
`

const ReducedContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

export default Nav