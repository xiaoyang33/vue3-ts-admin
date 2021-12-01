export const clearNullKey = (obj: any) => {
  const o = {}
  if (typeof obj !== 'object') return o
  for (const key of Object.keys(obj)) {
    if (obj[key]) {
      ;(o as any)[key] = obj[key]
    }
  }
  return o
}
