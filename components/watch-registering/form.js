const Form = () => (
  <form onSubmit={(event) => event.preventDefault()}>
    <UrlField />
    <IntervalField />
    <CssSelectorsField />
    <div className='field is-grouped'>
      <div className='control'>
        <button className='button is-primary'>Submit</button>
      </div>
      <div className='control'>
        <button className='button is-light'>Reset</button>
      </div>
    </div>
  </form>
)

const UrlField = () => (
  <div className='field'>
    <label className='label'>URL</label>
    <div className='control'>
      <input className='input' type='url' placeholder='https://example.com' />
    </div>
  </div>
)

const IntervalField = () => (
  <div className='field'>
    <label className='label'>Interval</label>
    <div className='field has-addons'>
      <div className='control is-expanded'>
        <input className='input' type='number' min={1} />
      </div>
      <div className='control'>
        <div className='select'>
          <select>
            <option>Hours</option>
            <option>Minutes</option>
          </select>
        </div>
      </div>
    </div>
  </div>
)

const CssSelectorsField = () => (
  <div className='field'>
    <label className='label'>CSS Selectors</label>
    <CssSelectorRow />
    <AddCssSelectorRow />
  </div>
)

const CssSelectorRow = () => (
  <div className='field is-grouped'>
    <div className='control is-expanded'>
      <input className='input' type='text' placeholder='#id.a-class' />
    </div>
    <div className='control'>
      <div className='select'>
        <select>
          <option>STRING</option>
        </select>
      </div>
    </div>
    <div className='control'>
      <button className='button is-danger'>
        <ion-icon name='remove' />
      </button>
    </div>
  </div>
)

const AddCssSelectorRow = () => (
  <div className='control'>
    <button className='button is-fullwidth is-dark'>
      <ion-icon name='add' />
    </button>
  </div>
)

export default Form
