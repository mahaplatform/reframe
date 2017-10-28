export const fromFilterObject = (filters) => {
  Object.keys(filters).reduce((object, key) => ({
    ...object,
    [key]: _getValue(filters[key])
  }))
}
