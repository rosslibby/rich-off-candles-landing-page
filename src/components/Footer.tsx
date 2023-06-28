import { navContext } from '@/contexts/nav'
import Link from 'next/link'
import { useContext } from 'react'
import styled from 'styled-components'

const Footer = () => {
  const { active } = useContext(navContext)
  const isActive = active !== undefined
  const text = active?.cta.text || 'Get started for free'
  const iconLeft = active?.cta.iconLeft
  const iconRight = active?.cta.iconRight

  return (
    <StyledFooter>
      <FooterLink href="/sign-up" $active={isActive}>
        {iconLeft && (
          <span>{iconLeft}</span>
        )}
        {text}
        {iconRight && (
          <span>{iconRight}</span>
        )}
      </FooterLink>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: fixed;
  width: 100%;
`

const FooterLink = styled(Link)<{$active: boolean}>`
  background-color: #0058f8;
  border: none;
  border-radius: 12px;
  color: #ffffff;
  display: inline-block;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 1.125rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  ${props => props.$active && `
    display: grid;
    grid-template-columns: 2fr 14fr 2fr;
    background-color: #17fdfe;
    border: 1px solid #17fdfe;
    color: #1f4f5f;
    font-weight: 500;
  `}
`

export default Footer