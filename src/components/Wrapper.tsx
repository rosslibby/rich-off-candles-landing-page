import { ReactNode } from 'react'
import styled from 'styled-components'

type WrapperProps = {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.main`
  align-items: baseline;
  background-color: #0d1529;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 42px 3fr 1.5fr 16fr;
  height: 100vh;
  left: 0;
  position: absolute;
  row-gap: 8px;
  top: 0;
  width: 100%;
`

export default Wrapper