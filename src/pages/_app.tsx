import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import { NavContextProvider } from '@/contexts/nav'
import { TabsContextProvider } from '@/contexts/tabs'
import { AppProps } from 'next/app'
import Script from 'next/script'

const App = ({ Component, pageProps }: AppProps) => (
  <NavContextProvider>
    <Script src="https://kit.fontawesome.com/e969d99d15.js" crossOrigin="anonymous"></Script>
    <TabsContextProvider>
      <Wrapper>
        <Banner />
        <Header />
        <Component { ...pageProps } />
      </Wrapper>
    </TabsContextProvider>
  </NavContextProvider>
)

export default App