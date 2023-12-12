import styled from 'styled-components';

const StyledPostShortIntroduceArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 35vw;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  border-radius: 10px;
  .title {
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.7rem;
  }
  .divide-line {
    width: 90%;
    height: 1px;
    background-color: rgba(92, 92, 92, 0.5);
  }
  .content {
    padding: 1rem;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    margin-bottom: 0.7rem;
  }
`;

export default function PostShortIntroduce({ data }) {
  return (
    <StyledPostShortIntroduceArea>
      <h1 className="title">{data.title}</h1>
      <div className="divide-line"></div>
      <div className="content">{data.content}</div>
    </StyledPostShortIntroduceArea>
  );
}
