import { NavItem } from '@/contexts/nav'
import Link from 'next/link'
import styled from 'styled-components'

const NavItem = ({ color, icon, name, url }: NavItem) => {
  return (
    <Button href={url}>
      <Icon color={color}>{icon}</Icon>
      <span>{name}</span>
    </Button>
  )
}

const Icon = styled.span<{ color: string }>`
  align-items: center;
  background-color: ${props => props.color}38;
  box-shadow: 0 0 1px 10px ${props => props.color}38;
  box-sizing: border-box;
  color: ${props => props.color};
  display: inline-flex;
  font-size: 16px;
  justify-content: center;
  padding: 4px;
  border-radius: 30px;
  width: 1rem;
  height: 1rem;
  margin-left: 1rem;
`

const Button = styled(Link)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #171924;
  box-sizing: border-box;
  color: #7e8cac;
  color: #ffffff;
  display: grid;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 500;
  grid-template-columns: 4fr 14fr;
  justify-content: center;
  padding: 1.5rem 1rem;
  text-decoration: none;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

export default NavItem