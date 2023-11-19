import { Cookies } from 'react-cookie';

export function setJWTToken(data) {
  const cookies = new Cookies();
  const currentTime = Date.now();
  for (const name in data) {
    const { value, exp } = data[name];
    let validTimeGap = exp * 1000 - currentTime;
    let expireDate = new Date(currentTime + validTimeGap);
    if (process.env.NODE_ENV === 'production') {
      cookies.set(name, value, {
        path: '/',
        expires: expireDate,
        httpOnly: true,
        secure: true,
      });
    } else {
      cookies.set(name, value, { path: '/', expires: expireDate });
    }
  }
}
