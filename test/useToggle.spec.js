import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { fireEvent, render } from '@testing-library/react'
import useToggle from '../dist/useToggle'
import assertHook from './utils/assertHook'

describe('useToggle', () => {

  assertHook(useToggle)

  it('first item should be a boolean', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current).to.be.an('array')
    expect(result.current[0]).to.be.a('boolean')
  })

  it('second item should be a React setState function', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current).to.be.an('array')
    expect(result.current[1]).to.be.a('function')
  })

  it('should toggle boolean values ', () => {
    const TestComponent = () => {
      const [toggle, changeToggle] = useToggle(true)

      return <button onClick={changeToggle}>{toggle ? 'on' : 'off'}</button>
    }

    const { container } = render(<TestComponent />)
    const button = container.querySelector('button')

    expect(button.innerHTML).to.equal('on')

    fireEvent.click(button)

    expect(button.innerHTML).to.equal('off')
  })
})
