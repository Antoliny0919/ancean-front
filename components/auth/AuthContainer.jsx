import { Cookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reIssueAccessToken } from './modules/auth';

export default function AuthContainer({ children }) {
  const dispatch = useDispatch();

  const cookies = new Cookies();

  const accessToken = useSelector(({ auth }) => auth.token).access;

  const refreshToken = cookies.get('refresh');

  useEffect(() => {
    if (refreshToken && !accessToken) {
      dispatch(reIssueAccessToken({ refresh: refreshToken }));
    }
  }, [accessToken]);

  return <>{children}</>;
}
