import styled from 'styled-components';
import CategoryButton from '../button/CategoryButton';
import Wave from 'react-wavify';
import { FaPen } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

const StyledPostHeader = styled.div`
  padding: 5rem;
  width: 100%;
  height: 40rem;
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
  }
`;

const StyledHeaderWave = styled.div`
  .wave {
    position: relative;
    /* top: 100px; */
    bottom: 250px;
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
          <CategoryButton styleProps={{ 'font-size': '20px' }}>
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
