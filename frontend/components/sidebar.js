const Sidebar = () => {
  return (
    <section className='section has-background-light'>
      <div className='avatar is-flex'>
        <figure className='image is-128x128'>
          <img
            className='is-rounded'
            src='https://bulma.io/images/placeholders/128x128.png'
          />
        </figure>
      </div>
      <h6 className='title is-6 has-text-centered'>
        Hoàng Kim Minh&nbsp;&nbsp;&nbsp;
        <span className='tag is-rounded is-dark'>normal</span>
      </h6>

      <p className='menu-label'>NOTIFICATIONS</p>
      <ul className='menu-list'></ul>

      <p className='menu-label'>WATCHES</p>
      <ul className='menu-list'>
        <li>
          <a href='#'>
            <span className='icon'>
              <ion-icon name='eye' />
            </span>
            <span>&nbsp;Manage watches</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'>
              <ion-icon name='analytics' />
            </span>
            <span>&nbsp;Analytics</span>
          </a>
        </li>
      </ul>

      <p className='menu-label'>ACCOUNT</p>
      <ul className='menu-list'>
        <li>
          <a href='#'>
            <span className='icon'>
              <ion-icon name='person' />
            </span>
            <span>&nbsp;Profile</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'>
              <ion-icon name='settings' />
            </span>
            <span>&nbsp;Settings</span>
          </a>
        </li>
        <li>
          <a className='has-text-danger' href='#'>
            <span className='icon'>
              <ion-icon name='log-out' />
            </span>
            <span>&nbsp;Logout</span>
          </a>
        </li>
      </ul>
      <style jsx>{`
        section {
          height: 100%;
        }
        .avatar {
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .tag {
          font-weight: normal;
        }
        li > a > span {
          vertical-align: middle;
        }
      `}</style>
    </section>
  )
}

export default Sidebar
