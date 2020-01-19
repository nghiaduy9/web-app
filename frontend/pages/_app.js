import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
