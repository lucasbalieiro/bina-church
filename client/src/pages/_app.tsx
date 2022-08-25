import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from 'react-bootstrap/Container'

import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header></Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
