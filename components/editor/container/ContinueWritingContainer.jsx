import { useDispatch } from 'react-redux';
import { getPost } from '../modules/editor';
import ContinueWritingPostModal from '../../modal/ContinueWritingPostModal';

export default function ContinueWritingContainer({ controlModalState }) {
  const dispatch = useDispatch();

  const continueWriting = () => {
    const previousWritingPostId = localStorage.getItem('beingWrittenPostId');
    dispatch(getPost(previousWritingPostId));
    controlModalState(false);
  };

  const newWriting = () => {
    controlModalState(false);
    localStorage.removeItem('beingWrittenPostId');
  };

  return (
    <ContinueWritingPostModal
      trueLogic={continueWriting}
      falseLogic={newWriting}
    />
  );
}
