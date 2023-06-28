import styled from 'styled-components'

const Banner = () => {
  return (
    <StyledBanner>{'⚡️'} Join today &amp; save 30% {'⚡️'}</StyledBanner>
  )
}

const StyledBanner = styled.div`
  align-items: center;
  background-color: #0058f8;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 0.75rem;
  position: sticky;
  top: 0;
  width: 100%;
`

export default Banner