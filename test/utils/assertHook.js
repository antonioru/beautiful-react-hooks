import assertFunction from './assertFunction'

const assertHook = (hook) => {
  assertFunction(hook)

  it('name should start with \'use\'', () => {
    expect(hook.name.substring(0, 3)).to.equal('use')
  })
}

export default assertHook
