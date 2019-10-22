import WatchRegisteringForm from '../components/watch-registering/form'

const Index = () => (
  <div className='section is-flex'>
    <WatchRegisteringBox />
    <style jsx>{`
      justify-content: center;
    `}</style>
  </div>
)

const WatchRegisteringBox = () => (
  <div className='box is-flex'>
    <h3 className='title is-3'>WATCH REGISTERING</h3>
    <WatchRegisteringForm />
    <style jsx>{`
      align-items: center;
      flex-direction: column;
    `}</style>
  </div>
)

export default Index
