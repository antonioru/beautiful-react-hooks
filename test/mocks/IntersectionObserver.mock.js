class IntersectionObserverMock {
  constructor(fn) {
    this.connected = true
    this.fn = fn

    IntersectionObserverMock.instances.push(this)
  }

  observe() {
    if (this.connected) {
      this.fn([{ isIntersecting: true }])
    }
  }

  disconnect() {
    this.connected = false
  }
}

IntersectionObserverMock.instances = []
IntersectionObserverMock.simulateObservation = () => {
  IntersectionObserverMock.instances.forEach((item) => item.observe())
}

export default IntersectionObserverMock

