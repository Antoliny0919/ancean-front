import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './modules/auth';

/**
 *
 * get the data of the user authenticated by the current client through the token(access)
 * That's why tokens must exist first, so it must be below the authContainer when used.
 *
 */
export default function UserContainer({ children }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    // when an access token exist, the user is identified through the access token and the user data import
    accessToken && dispatch(getUserData({ headers }));
  }, [accessToken]);

  return <>{children}</>;
}
