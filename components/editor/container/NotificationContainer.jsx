import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetNotificationState } from '../modules/editor';
import EditorSaveNotification from '../../notification/EditorSaveNotification';

export default function NotificationContainer() {
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();

  const { notificationState } = useSelector(({ editor }) => editor);

  useEffect(() => {
    if (notificationState !== null) {
      setDisable(true);
      setTimeout(() => {
        setDisable(false);
        dispatch(resetNotificationState());
      }, 2000);
    }
  }, [notificationState]);

  console.log(notificationState);

  return (
    <EditorSaveNotification
      disable={disable}
      notificationState={notificationState}
    ></EditorSaveNotification>
  );
}
