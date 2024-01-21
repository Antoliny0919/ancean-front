import { useDispatch, useSelector } from 'react-redux';
import { uploadHeaderImage } from '../../editor/modules/editor';
import Top from '../post-final-publication-modal/Top';
import Bottom from '../post-final-publication-modal/Bottom';
import Footer from '../post-final-publication-modal/Footer';

export default function PostFinalPublicationModalContainer({ closeModal }) {
  const dispatch = useDispatch();

  const { headerImage, headerImagePath } = useSelector(({ editor }) => editor);

  const onSelectedImageFile = (e) => {
    let selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    dispatch(uploadHeaderImage({ formData }));
  };

  return (
    <>
      <Top
        headerImage={headerImage}
        headerImagePath={headerImagePath}
        onSelectedImageFile={onSelectedImageFile}
      />
      <div className="divide-line"></div>
      <Bottom />
      <Footer closeModal={closeModal} />
    </>
  );
}
