import { useCallback, useReducer, useState } from 'react'
import axios from 'axios'
import { secondsToHumanTime } from '../../utils'

const Form = () => {
  const [url, changeUrl] = useState('')
  const [interval, changeInterval] = useState() // in seconds
  const [cssSelectors, dispatchCssSelectors] = useReducer(
    (state, change) => {
      const [i, newValue] = change
      if (!newValue) state.splice(i, 1)
      else state[i] = newValue
      return [...state]
    },
    [{ selector: '', type: 'string', name: '' }]
  )
  const submit = useCallback(() => {
    const cssSelectorsObj = cssSelectors.reduce((result, cssSelector) => {
      const { selector, type } = cssSelector
      result[selector] = type
      return result
    }, {})
    axios.post('/api/watch-manager', { url, interval, cssSelectors: cssSelectorsObj })
  }, [url, interval, cssSelectors])

  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <UrlField value={url} onChange={changeUrl} />
      <IntervalField value={interval} onChange={changeInterval} />
      <CssSelectorsField value={cssSelectors} onChange={dispatchCssSelectors} />
      <div className='field is-grouped'>
        <div className='control'>
          <button className='button is-primary' onClick={submit}>
            Submit
          </button>
        </div>
        <div className='control'>
          <button className='button is-danger is-outlined'>Reset</button>
        </div>
      </div>
    </form>
  )
}

const UrlField = (props) => (
  <div className='field'>
    <label className='label'>URL</label>
    <div className='control'>
      <input
        className='input'
        type='url'
        placeholder='https://example.com'
        value={props.value}
        onChange={(ev) => props.onChange(ev.target.value)}
        required
      />
    </div>
  </div>
)

const IntervalField = (props) => (
  <div className='field'>
    <label className='label'>Interval</label>
    <div className='control'>
      <input
        className='input'
        type='number'
        min={15 * 60}
        step={1}
        value={props.value}
        onChange={(ev) => props.onChange(parseInt(ev.target.value))}
        required
      />
    </div>
    <p className='help'>
      <em>aka: </em>
      {secondsToHumanTime(props.value)}
    </p>
  </div>
)

const CssSelectorsField = (props) => (
  <div className='field'>
    <label className='label'>CSS Selectors</label>
    {props.value.map((cssSelector, i) => (
      <CssSelectorRow
        value={cssSelector}
        onChange={(newValue) => props.onChange([i, newValue])}
        key={i}
      />
    ))}
    <div className='control'>
      <button
        className='button is-fullwidth is-dark'
        onClick={() =>
          props.onChange([props.value.length, { selector: '', type: 'string', name: '' }])
        }
      >
        <ion-icon name='add' />
      </button>
    </div>
  </div>
)

const CssSelectorRow = (props) => {
  const { selector, type, name } = props.value

  return (
    <div className='field is-grouped'>
      <div className='control'>
        <input
          className='input'
          type='text'
          placeholder='Unique name'
          value={name}
          onChange={(ev) => props.onChange({ selector, type, name: ev.target.value })}
          required
        />
      </div>
      <div className='control'>
        <input
          className='input'
          type='text'
          placeholder='#id.a-class'
          value={selector}
          onChange={(ev) => props.onChange({ selector: ev.target.value, type, name })}
          required
        />
      </div>
      <div className='control'>
        <div className='select'>
          <select
            value={type}
            onChange={(ev) => props.onChange({ selector, type: ev.target.value, name })}
          >
            <option>STRING</option>
          </select>
        </div>
      </div>
      <div className='control'>
        <button
          className='button is-danger is-outlined'
          onClick={() => props.onChange(null)}
        >
          <ion-icon name='remove' />
        </button>
      </div>
    </div>
  )
}

export default Form
