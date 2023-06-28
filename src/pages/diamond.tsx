import styled from 'styled-components'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Tabs from '@/components/Tabs'
import { useContext } from 'react'
import { navContext } from '@/contexts/nav'

const Diamond = () => {
  const { active } = useContext(navContext)

  return (
    <>
      <ContentBlock $expanded={true}>{active?.content}</ContentBlock>
      <Footer />
    </>
  )
}

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

export default Diamond