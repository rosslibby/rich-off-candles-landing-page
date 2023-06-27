import styled from 'styled-components'

const Banner = () => {
  return (
    <StyledBanner>{'⚡️'} Join today &amp; save 30% {'⚡️'}</StyledBanner>
  )
}

const StyledBanner = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0071;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;
`

export default Banner