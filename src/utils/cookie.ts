export const getCookie = <T extends string = string>(
  name: string,
): T | undefined => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  )
  return matches ? (decodeURIComponent(matches[1]) as T) : undefined
}

type Options = { [key: string]: string | boolean | Date | number }

export const setCookie = (
  name: string,
  value: string,
  options?: Options,
): void => {
  options = {
    path: `/`,
    ...options,
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey
    const optionValue = options[optionKey]
    updatedCookie += '=' + optionValue
  }

  document.cookie = updatedCookie
}

export const deleteCookie = (name: string): void => {
  setCookie(name, '', {
    'max-age': -1,
  })
}
