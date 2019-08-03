import App, { Container } from 'next/app'
import Layout from '../components/layout'
import '../styles/index.scss'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
