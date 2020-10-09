import { useRef } from 'react';

const getInitial = (module) => ({
  module,
  renders: 0,
  timestamp: null,
  sinceLast: null,
});

/**
 * useRenderInfo
 * @param module
 * @param log
 * @returns {{renders: number, module: *, timestamp: null}}
 */
const useRenderInfo = (module = 'Unknown component', log = true) => {
  const { current: info } = useRef(getInitial(module));
  const now = +Date.now();

  info.renders += 1;
  info.sinceLast = info.timestamp ? (now - info.timestamp) / 1000 : '[now]';
  info.timestamp = now;

  if (log) {
    /* eslint-disable no-console */
    console.group(`${module} info`);
    console.log(`Render no: ${info.renders}${info.renders > 1 ? `, ${info.sinceLast}s since last render` : ''}`);
    console.dir(info);
    console.groupEnd();
    /* eslint-enable no-console */
  }

  return info;
};

export default useRenderInfo;
