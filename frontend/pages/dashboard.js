import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import WatchCard from '../components/watch-card'
import MessengerPopup from '../components/messenger-popup'
import { LinkedButton } from '../components/buttons'

const Dashboard = () => {
  return (
    <Layout left={<Sidebar />}>
      <section className='section'>
        <div className='field'>
          <div className='control'>
            <LinkedButton className='button is-primary' href='#'>
              <ion-icon name='add-circle-outline' />
              <span>&nbsp;</span>
              New watch
            </LinkedButton>
          </div>
        </div>
        <WatchCard />
        <MessengerPopup />
      </section>
      <style jsx>{`
        .field {
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Dashboard
