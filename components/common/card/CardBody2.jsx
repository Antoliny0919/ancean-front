import styled from 'styled-components';

const StyledCardBodyArea = styled.div`
  width: 90%;
  padding: 1rem;
  .title {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.7rem;
  }
  .content {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    margin-bottom: 0.7rem;
  }
  .created-date {
    font-size: 12px;
    font-family: 'Pretendard-Light';
    color: rgba(57, 57, 57, 0.7);
  }
`;

export default function CardBody2() {
  return (
    <StyledCardBodyArea>
      <div className="title">
        엄청 크고 길고 짱 멋있는 PROMise 패턴 이용하기하하하하하하하하하하
      </div>
      <div className="content">
        min-width는 요소의 너비가 특정 값 이하로 작아지는 걸 방지한다. 그렇기
        때문에 종횡비와 min-XXX 혹은 max-XXX 지정을 같이 하면 예상치 못한 결과가
        나올 수 있다. 아래 예시는 종횡비 3/1, 너비는 100px로 지정하여 너비
        100px, 높이 33.33px이 되는 게 목적이었다. 하지만 높이에 대해
        min-height를 지정했기 때문에, min-height 기준으로 계산되어 너비 150px,
        높이 50px이 된다. min-width는 요소의 너비가 특정 값 이하로 작아지는 걸
        방지한다. 그렇기 때문에 종횡비와 min-XXX 혹은 max-XXX 지정을 같이 하면
        예상치 못한 결과가 나올 수 있다. 아래 예시는 종횡비 3/1, 너비는 100px로
        지정하여 너비 100px, 높이 33.33px이 되는 게 목적이었다. 하지만 높이에
        대해 min-height를 지정했기 때문에, min-height 기준으로 계산되어 너비
        150px, 높이 50px이 된다.
      </div>
      <div className="created-date">작성일: 2023년 11월 29일</div>
    </StyledCardBodyArea>
  );
}
