import { type Noop } from './types.ts'

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const noop: Noop = (...args: any[]) => undefined

noop.noop = true

export default noop
