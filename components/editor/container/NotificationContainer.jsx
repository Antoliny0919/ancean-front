import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetNotificationState } from '../modules/editor';
import EditorSaveNotification from '../../notification/EditorSaveNotification';

export default function NotificationContainer() {
  const [notificationColor, setNotificationColor] = useState(null);

  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();

  const { notificationState, notificationMessage } = useSelector(
    ({ editor }) => editor,
  );

  useEffect(() => {
    if (notificationState !== null) {
      setDisable(true);
      setNotificationColor(notificationState);
      setTimeout(() => {
        setDisable(false);
        dispatch(resetNotificationState());
      }, 2000);
    }
  }, [notificationState]);

  return (
    <EditorSaveNotification
      disable={disable}
      notificationState={notificationState}
      notificationMessage={notificationMessage}
      notificationColor={notificationColor}
    ></EditorSaveNotification>
  );
}
