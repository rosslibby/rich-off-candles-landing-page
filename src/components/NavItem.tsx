import { NavItem as NavItemIF, navContext } from '@/contexts/nav'
import Link from 'next/link'
import { useCallback, useContext } from 'react'
import styled from 'styled-components'

interface NavItemType extends NavItemIF {
  reduced: boolean
}

const NavItem = ({
  _id,
  active,
  color,
  content,
  icon,
  name,
  reduced,
  url,
}: NavItemType) => {
  const { active: activeItem, setNav } = useContext(navContext)
  const handleClick = useCallback(() => setNav(_id), [_id, setNav])

  return (
    <>
      <Button onClick={handleClick} $reduced={reduced}>
        <IconWrapper $reduced={reduced}>
          <IconBorder $active={activeItem?._id === _id && reduced} color={color} $reduced={reduced}>
            <Icon $active={active} color={color} $reduced={reduced}>{icon}</Icon>
          </IconBorder>
        </IconWrapper>
        {!reduced && (
          <span>{name}</span>
        )}
      </Button>
    </>
  )
}

const FooterLink = styled(Link)`
  background-color: #0058f8;
  borer: none;
  border-radius: 12px;
  box-sizing: border-box;
  color: #ffffff;
  display: grid;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 400;
  grid-template-columns: 2fr 14fr 2fr;
  letter-spacing: 0;
  margin-top: 1.25rem;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  background-color: #17fdfe;
  border: 1px solid #17fdfe;
  color: #1f4f5f;
  font-weight: 500;
`

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

const IconWrapper = styled.span<{ $reduced: boolean }>`
  ${props => props.$reduced ? 'margin-left: -22px' : ''};
  display: grid;
  height: 42px;
  margin-top: -2px;
  position: relative;
  width: 100%;
`

const IconBorder = styled.span<{ $active: boolean, color: string, $reduced: boolean }>`
  ${props => props.$reduced ? '' : 'animation: pulse 2s infinite;'}
  background-color: ${props => props.$reduced ? '#0058f8' : props.color}7d;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${props => props.$active ? 'background: linear-gradient(29deg, #0058f8, #17fdfe);' : `border: 1px solid #0058f852;`}
  padding: 7px;
  position: absolute;
`

const Icon = styled.span<{ $active: boolean, color: string, $reduced: boolean }>`
  align-items: center;
  background-color: ${props => {
    if (props.$reduced) {
      return '#151d33'
    }

    return `${props.color}`
  }};
  box-shadow: 0 0 1px 10px ${props => {
    if (props.$reduced) {
      return '#151d33'
    }

    return `${props.color}`
  }};
  box-sizing: border-box;
  color: ${props => props.$reduced
    ? props.$active ? props.color : '#0058f8'
    : '#0d1529a3'};
  display: inline-flex;
  font-size: 16px;
  justify-content: center;
  padding: 4px;
  border-radius: 30px;
  width: ${props => props.$reduced ? '1.5rem' : '1rem'};
  height: ${props => props.$reduced ? '1.5rem' : '1rem'};
`

const Button = styled.button<{ $reduced: boolean }>`
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
  grid-template-columns: ${props => props.$reduced ? 'auto' : '4fr 14fr'};
  justify-content: center;
  padding: 1.5rem 1rem;
  text-align: left;
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