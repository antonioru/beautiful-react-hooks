const assertFunction = (fn) => {
  it(`${fn.name || 'it'} should be a function`, () => {
    expect(fn).to.be.a('function')
  })
}

export default assertFunction
