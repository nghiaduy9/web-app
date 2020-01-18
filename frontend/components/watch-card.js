import { secondsToHumanTime } from '../utils'

const WatchCard = () => (
  <div className='box'>
    <div className='card-content'>
      <div className='content'>
        <div className='card-field'>
          <span className='has-text-weight-bold'>URL: </span>
          <span>
            <a href='https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039'>
              https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039
            </a>
          </span>
          <hr />
        </div>
        <div className='card-field'>
          <span className='has-text-weight-bold'>Active:&nbsp;</span>
          <input
            id='switchRoundedDefault'
            type='checkbox'
            name='switchRoundedDefault'
            className='switch is-rounded'
          />
          <label htmlFor='switchRoundedDefault'> </label>
        </div>
        <div className='card-field'>
          <span className='has-text-weight-bold'>Interval: </span>
          <span>{secondsToHumanTime(9000)}</span>
        </div>
        <div className='card-field'>
          <span className='has-text-weight-bold'>Targets: </span>
        </div>
        <div className='card-field'>
          <table className='table is-hoverable'>
            <thead>
              <tr>
                <th>Name</th>
                <th>CSS Selector</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Iphone 11 Pro Max</td>
                <td>h1</td>
                <td>28000000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='card-field'>
        <div className='buttons'>
          <button className='button is-primary'>
            <span className='icon'>
              <ion-icon name='create'></ion-icon>
            </span>
            <span>Edit</span>
          </button>
          <button className='button is-danger'>
            <span className='icon'>
              <ion-icon name='trash'></ion-icon>
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default WatchCard
