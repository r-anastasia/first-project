export const toArray = <T>(input: T): Array<T> => {
  return (Array.isArray(input) && input) || [input]
}
