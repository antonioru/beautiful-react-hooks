import { Noop } from './types'

const noop: Noop = () => undefined

noop.noop = true

export default noop
