/**
 * Safely parse JSON string to object or null
 * @param parseString
 */
const safelyParseJson = <T = any>(parseString: string): T | null => {
  try {
    return JSON.parse(parseString)
  } catch (e) {
    return null
  }
}

export default safelyParseJson
