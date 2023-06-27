import styled from 'styled-components'

type TabProps = {
  active: boolean
  name: string
  url: string
}

const Tab = ({ active, name, url }: TabProps) => {
  return (
    <StyledTab $active={active}>{name}</StyledTab>
  )
}

const StyledTab = styled.button<{ $active?: boolean }>`
  background-color: ${props => props.$active ? '#222f4f' : 'transparent'};
  border: none;
  border-radius: 30px;
  color: ${props => props.$active ? '#648fe2' : '#7983a9'};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 12px 20px;
`

export default Tab