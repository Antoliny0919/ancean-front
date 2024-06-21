import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
// import Wave from 'react-wavify';
import { changeOption } from './modules/project';
import CommonButton from '../button/CommonButton';
import ProjectCreateOption from './ProjectCreateOption';
import { flex } from '../../styles/variable';

const StyledOptionForm = styled.form`
  position: relative;
  height: 100%;
  font-size: 20px;
  /* width: 30em;
  height: 30em; */
  /* background-color: ${({ theme }) => theme}; */
  font-family: 'GmarketSansMedium';
  .body {
    height: inherit;
    position: relative;
    ${flex('column', 'center', 'center')};
    opacity: 0;
    z-index: 1;
    transition: opacity 0.8s ease-in;
    ${({ $isActive }) =>
      $isActive &&
      css`
        opacity: 1;
      `}
  }
  .wave {
    position: absolute;
    bottom: 0px;
    height: 50%;
    z-index: 0;
    svg {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default function ProjectOptionForm({ textTransitionTrigger }) {
  const dispatch = useDispatch();

  return (
    <StyledOptionForm $isActive={textTransitionTrigger}>
      <div className="body">
        <ProjectCreateOption />
        <div className="footer">
          <CommonButton props={{ onClick: () => dispatch(changeOption(null)) }}>
            취소
          </CommonButton>
          <CommonButton>시작</CommonButton>
        </div>
      </div>
      {/* <Wave
        fill={'rgb(54, 135, 181)'}
        paused={false}
        className="wave"
        options={{
          height: 20,
          amplitude: 10,
          speed: 0.5,
          points: 2,
        }}
      ></Wave> */}
    </StyledOptionForm>
  );
}
