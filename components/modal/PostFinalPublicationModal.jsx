import styled from 'styled-components';
// import { useSelector } from "react-redux";
// import { MdLocalPrintshop } from "react-icons/md";
// import { FaRegImage } from "react-icons/fa6";
// import { flexBox } from '../../styles/variable';

const StyledPostFinalPublicationModal = styled.div`
  position: absolute;
  background-color: white;
  bottom: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  transform: translateY(100vh);
  transition: transform 1s;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  &.on {
    transform: translateY(0vh);
  }
  .content-area {
    width: 768px;
    display: flex;
    .content {
      flex: 1 1 0%;
    }
  }
`;

export default function PostFinalPublicationModal({ modalState }) {
  // const { title, selectedCategory } = useSelector(({ editor }) => editor);

  return (
    <StyledPostFinalPublicationModal className={modalState && 'on'}>
      <div className="content-area">
        <div className="content"></div>
        <div className="content"></div>
      </div>
    </StyledPostFinalPublicationModal>
  );
}
