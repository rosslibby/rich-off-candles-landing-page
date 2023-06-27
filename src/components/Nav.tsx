import { useContext } from 'react'
import { NavItem as NavItemType, navContext } from '@/contexts/nav'
import styled from 'styled-components'
import NavItem from './NavItem'

const Nav = () => {
  const { items } = useContext(navContext)
  return (
    <StyledNav>
      {items.map((item: NavItemType) => (
        <NavItem key={`nav-item_${item._id}`} {...item} />
      ))}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
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
  padding-top: 12px;
  width: calc(100% - 2rem);
`

export default Nav