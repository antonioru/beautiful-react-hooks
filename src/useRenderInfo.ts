import { useRef } from 'react'

export interface RenderInfo {
  readonly module: string;
  renders: number;
  timestamp: number;
  sinceLast: number | '[now]'
}

const getInitial = (moduleName: string): RenderInfo => ({
  module: moduleName,
  renders: 0,
  timestamp: null,
  sinceLast: null,
})

/**
 * useRenderInfo
 * @param moduleName
 * @param log
 * @returns {{renders: number, module: *, timestamp: null}}
 */
const useRenderInfo = (moduleName: string = 'Unknown component', log: boolean = true) => {
  const { current: info } = useRef(getInitial(moduleName))
  const now = +Date.now()

  info.renders += 1
  info.sinceLast = info.timestamp ? (now - info.timestamp) / 1000 : '[now]'
  info.timestamp = now

  if (log) {
    /* eslint-disable no-console */
    console.group(`${moduleName} info`)
    console.log(`Render no: ${info.renders}${info.renders > 1 ? `, ${info.sinceLast}s since last render` : ''}`)
    console.dir(info)
    console.groupEnd()
    /* eslint-enable no-console */
  }

  return info
}

export default useRenderInfo
