import Image from 'next/image';
import styled from 'styled-components';
import TestImage1 from '@/public/js-log.png';
// import TestImage2 from '@/public/call-back-hell.jpeg';

const StyledCardBodyArea = styled.div`
  width: 100%;
`;

const StyledCardSymbolImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d6d6d6;
  width: 100%;
`;

const StyledCardContent = styled.div`
  width: 100%;
  .content {
    padding: 1rem 1rem 0 1rem;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 15;
    -webkit-box-orient: vertical;
  }
`;

export default function CardBody() {
  return (
    <StyledCardBodyArea>
      <StyledCardSymbolImage>
        <Image src={TestImage1} alt="no-image" height={200}></Image>
      </StyledCardSymbolImage>
      <StyledCardContent>
        <div className="content">
          min-width는 요소의 너비가 특정 값 이하로 작아지는 걸 방지한다. 그렇기
          때문에 종횡비와 min-XXX 혹은 max-XXX 지정을 같이 하면 예상치 못한
          결과가 나올 수 있다. 아래 예시는 종횡비 3/1, 너비는 100px로 지정하여
          너비 100px, 높이 33.33px이 되는 게 목적이었다. 하지만 높이에 대해
          min-height를 지정했기 때문에, min-height 기준으로 계산되어 너비 150px,
          높이 50px이 된다. min-width는 요소의 너비가 특정 값 이하로 작아지는 걸
          방지한다. 그렇기 때문에 종횡비와 min-XXX 혹은 max-XXX 지정을 같이 하면
          예상치 못한 결과가 나올 수 있다. 아래 예시는 종횡비 3/1, 너비는
          100px로 지정하여 너비 100px, 높이 33.33px이 되는 게 목적이었다. 하지만
          높이에 대해 min-height를 지정했기 때문에, min-height 기준으로 계산되어
          너비 150px, 높이 50px이 된다.
        </div>
      </StyledCardContent>
    </StyledCardBodyArea>
  );
}
