import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLink href="/sign-up">Get started for free</FooterLink>
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

const FooterLink = styled(Link)`
  background-color: #0058f8;
  borer: none;
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
`

export default Footer