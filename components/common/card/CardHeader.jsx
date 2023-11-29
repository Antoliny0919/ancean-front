import styled from 'styled-components';

const StyledCardHeaderArea = styled.div`
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 20px;
  .title {
    padding: 1rem 1rem 0.2rem 1rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'GmarketSansMedium';
  }
  .created-date {
    color: rgba(27, 27, 27, 0.7);
    margin-left: 2rem;
    font-size: 14px;
    font-family: 'S-CoreDream-3Light';
  }
  .divide-line {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    background-color: #3b3b3b;
    height: 0.1rem;
  }
`;

export default function CardHeader() {
  return (
    <StyledCardHeaderArea>
      <div className="title">
        엄청 크고 길고 짱 멋있는 프라미스 패턴 이용하기하하하하하
      </div>
      <div className="created-date">작성일: 2023년 11월 29일</div>
      <div className="divide-line" />
    </StyledCardHeaderArea>
  );
}
