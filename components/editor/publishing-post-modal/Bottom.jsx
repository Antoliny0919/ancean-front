import { useContext } from 'react';
import styled from 'styled-components';
import useEditor from '../useEditor';
import { EditorContext } from '../../../pages/posts/newpost';
import RadioInput from '../../common/RadioInput';
import FontButton from '../../button/FontButton';
import CommonButton from '../../button/CommonButton';

const StyledMainArea = styled.main`
  padding: 0 1em;
  font-size: inherit;
`;

export const StyledPostInfoField = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: inherit;
  justify-content: center;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: solid ${({ theme }) => theme.colors.lightGray} 1px;
  & > * {
    margin-right: 2em;
    display: flex;
  }
  .field-name {
    @media screen and (min-width: 768px) {
      width: 15%;
      flex-direction: row;
    }
    font-size: inherit;
    width: 40%;
    flex-direction: row-reverse;
  }
  .field-name > p {
    background-color: ${({ theme }) => theme.colors.mainColor[4]};
    color: ${({ theme }) => theme.colors.lightWhite};
    padding: 0.2em 0.7em;
    border-radius: 10px;
  }
`;

const StyledFooterArea = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 1.5rem;
  & > * {
    margin-left: 2rem;
  }
`;

export default function Bottom({ closeModal }) {
  const editorRef = useContext(EditorContext).editorRef;

  // first time publishing a post(isFinish field --> true)
  // works even if the frist published post has already been modified
  const [create, save] = useEditor(editorRef);

  const savePublishing = () => {
    // it is publishing, so isFinish value is true
    const postId = localStorage.getItem('beingWrittenPostId');
    if (postId) {
      save(postId, true);
    } else {
      create(true);
    }
  };

  const dateOfPublication = new Date();

  // publishingPostModal bottom area infoFields data
  const infoField = [
    {
      title: '공개설정',
      content: (
        <>
          <RadioInput
            checkedColor={({ theme }) => theme.colors.mainColor[4]}
            props={{ defaultChecked: true }}
          >
            공개
          </RadioInput>
          <RadioInput
            checkedColor={({ theme }) => theme.colors.mainColor[4]}
            props={{ disabled: true }}
          >
            비공개
          </RadioInput>
        </>
      ),
    },
    {
      title: '출간일',
      content: (
        <p>
          {dateOfPublication.getFullYear()}년 {dateOfPublication.getMonth() + 1}
          월{dateOfPublication.getDate()}일
        </p>
      ),
    },
    {
      title: '작성자',
      content: <p>antoliny0919</p>,
    },
  ];

  return (
    <>
      <StyledMainArea>
        {infoField.map((info, index) => {
          return (
            <StyledPostInfoField key={index}>
              <div className="field-name">
                <p>{info.title}</p>
              </div>
              {info.content}
            </StyledPostInfoField>
          );
        })}
      </StyledMainArea>
      <StyledFooterArea>
        {/* isFinish --> true(publishing) */}
        <CommonButton
          props={{
            onClick: savePublishing,
          }}
        >
          출간하기
        </CommonButton>
        <FontButton props={{ onClick: closeModal }}>취소</FontButton>
      </StyledFooterArea>
    </>
  );
}
