const safelyParseJson = <T = any>(parseString: string): T => {
  try {
    return JSON.parse(parseString)
  } catch (e) {
    return null
  }
}

export default safelyParseJson
