import { cleanup, renderHook } from '@testing-library/react-hooks'

import assertHook from './utils/assertHook'
import useDarkMode from '../dist/useDarkMode'
import mediaQueryListMock from './mocks/MatchMediaQueryList.mock'

const consoleWarnSpy = sinon.spy()
const realConsoleWarning = console.warn
const realMatchMedia = window.matchMedia

describe('useDarkMode', () => {
  before(() => {
    console.warn = consoleWarnSpy
    window.matchMedia = () => mediaQueryListMock
  })

  after(() => {
    console.warn = realConsoleWarning
    window.matchMedia = realMatchMedia
  })

  beforeEach(() => {
    cleanup()
  })

  afterEach(() => {
    sinon.restore()
  })

  assertHook(useDarkMode)

  it('should set the dark mode to true when the media query matches', () => {
    const { result } = renderHook(() => useDarkMode())

    expect(result.current.isDarkMode).to.be.true
  });

  it('should set the dark mode to false when the media query does not match', () => {
    const updatedMediaQueryListMock = {
      ...mediaQueryListMock,
      matches: false
    }

    window.matchMedia = () => updatedMediaQueryListMock

    const { result } = renderHook(() => useDarkMode())

    expect(result.current.isDarkMode).to.be.true

    window.matchMedia = () => mediaQueryListMock
  });

  it('should save dark mode to local storage', () => {
    const { result } = renderHook(() => useDarkMode())
    const localStorageKey = 'beautiful-react-hooks-is-dark-mode';

    expect(window.localStorage.getItem(localStorageKey)).to.be.eq('true')

    result.current.disable();
    expect(window.localStorage.getItem(localStorageKey)).to.be.eq('false')

    result.current.enable();
    expect(window.localStorage.getItem(localStorageKey)).to.be.eq('true')

    result.current.toggle();
    expect(window.localStorage.getItem(localStorageKey)).to.be.eq('false')

    result.current.disable();
    expect(window.localStorage.getItem(localStorageKey)).to.be.eq('false')
  });

  it('should allow user to fully control dark mode state via props and returned functions', () => {
    const { result } = renderHook(() => useDarkMode(true, 'test_key'))

    expect(result.current.isDarkMode).to.be.true

    result.current.disable();
    expect(result.current.isDarkMode).to.be.false

    result.current.enable();
    expect(result.current.isDarkMode).to.be.true

    result.current.toggle();
    expect(result.current.isDarkMode).to.be.false

    result.current.disable();
    expect(result.current.isDarkMode).to.be.false
  });
})
