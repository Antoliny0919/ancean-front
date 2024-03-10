import { Cookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reIssueAccessToken } from './modules/auth';

/**
 * use it as the top parent component for pages that require authentication permission
 * the ability to initialize tokens required for authentication is provided
 */
export default function AuthContainer({ children }) {
  const dispatch = useDispatch();

  const cookies = new Cookies();

  const accessToken = useSelector(({ auth }) => auth.token).access;

  const refreshToken = cookies.get('refresh');

  useEffect(() => {
    // the presence of a refresh token can generate access token
    if (refreshToken && !accessToken) {
      // reissue tokens and save them in the auth store
      dispatch(reIssueAccessToken({ refresh: refreshToken }));
    }
  }, [accessToken]);

  return <>{children}</>;
}
