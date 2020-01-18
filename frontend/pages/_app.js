import App from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/index.scss'

const MyApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

export default MyApp
