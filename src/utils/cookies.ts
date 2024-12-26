// Function to get a cookie value by name
export function getCookie(name: string): string|null {
  const nameLenPlus = (name.length + 1);

  return document.cookie
    .split(';')
    .map(c => c.trim())
    .filter(cookie => {
      return cookie.substring(0, nameLenPlus) === `${name}=`;
    })
    .map(cookie => {
      return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null;
}

// Function to set a cookie
export function setCookie(name: string, value: string, options: { [key: string]: any } = {}): void {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
}

// Function to remove a cookie
export function removeCookie(name: string): void {
  setCookie(name, '', {
    'max-age': -1
  });
}
