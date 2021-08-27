class ResizeObserverMock {
  constructor(fn) {
    this.fn = fn
    ResizeObserverMock.instances.push(this)
  }

  observe() {
    this.fn([{
      contentRect: { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }
    }])
  }

  unobserve() {
    ResizeObserverMock.instances = []
  }
}

ResizeObserverMock.instances = []

ResizeObserverMock.simulateResize = () => {
  ResizeObserverMock.instances.forEach((target) => {
    target.fn([{
      contentRect: { bottom: 10, height: 10, left: 10, right: 10, top: 10, width: 10 }
    }])
  })
}

export default ResizeObserverMock
