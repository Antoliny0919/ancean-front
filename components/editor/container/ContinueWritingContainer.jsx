import { useDispatch } from 'react-redux';
import { getPost } from '../modules/editor';
import { closeModal } from '../../modal/ModalBase';
import ContinueWritingPostModal from '../../modal/ContinueWritingPostModal';

export default function ContinueWritingContainer({ controlModalState }) {
  const dispatch = useDispatch();

  const continueWriting = () => {
    const previousWritingPostId = localStorage.getItem('beingWrittenPostId');
    dispatch(getPost(previousWritingPostId));
    closeModal(controlModalState);
  };

  const newWriting = () => {
    closeModal(controlModalState);
    localStorage.removeItem('beingWrittenPostId');
  };

  return (
    <ContinueWritingPostModal
      trueLogic={continueWriting}
      falseLogic={newWriting}
    />
  );
}
