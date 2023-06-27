import Image from 'next/image'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <Image
        src="/logo.png"
        alt="Rich off candles"
        width="80"
        height="55"
      />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  align-items: center;
  display: grid;
  justify-content: center;
  padding: 34px 0;
`

export default Header