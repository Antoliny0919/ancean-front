import styled from 'styled-components';
import CategoryButton from '../button/CategoryButton';
import Wave from 'react-wavify';
import { FaPen } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

const StyledPostHeader = styled.div`
  width: 80%;
  padding-top: 10rem;
  margin-right: auto;
  margin-left: auto;
  height: 42rem;
  background-color: white;
  color: black;
  font-size: 32px;
  font-family: 'Pretendard-Bold';
  .post-main {
    position: relative;
    z-index: 100;
  }
  .title {
    max-height: 370px;
    overflow: hidden;
  }
  .sub-title {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    align-items: center;
    & > * {
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 5px;
    }
  }
`;

const StyledHeaderWave = styled.div`
  position: relative;
  bottom: 250px;
  .wave {
    height: 400px;
    z-index: 0;
  }
`;

export default function PostHeader({ title, updated_at, author, category }) {
  const updatedAt = new Date(updated_at);

  return (
    <>
      <StyledPostHeader>
        <div className="title post-main">
          <h1>{title}</h1>
        </div>
        <div className="sub-title post-main">
          <div className="author">
            <FaPen />
            {author}
          </div>
          <div className="calendar">
            <FaRegCalendarAlt />
            {updatedAt.getFullYear()}년{updatedAt.getMonth() + 1}월
            {updatedAt.getDate()}일
          </div>
          <CategoryButton name={category} style={{ 'font-size': '20px' }}>
            {category}
          </CategoryButton>
        </div>
      </StyledPostHeader>
      <StyledHeaderWave>
        <Wave
          fill={'#27566B'}
          paused={false}
          className="wave"
          options={{
            height: 70,
            amplitude: 100,
            speed: 0.5,
            points: 2,
          }}
        ></Wave>
      </StyledHeaderWave>
    </>
  );
}
