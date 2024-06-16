import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeOption } from './modules/project';
import CommonButton from '../button/CommonButton';
import ProjectCreateOption from './ProjectCreateOption';
import { flex } from '../../styles/variable';

const StyledOptionForm = styled.form`
  ${flex('column', 'center', 'center')};
  font-size: 20px;
  font-family: 'SUIT-Regular';
`;

export default function ProjectOptionForm() {
  const dispatch = useDispatch();

  return (
    <StyledOptionForm>
      <ProjectCreateOption />

      <div className="">
        <CommonButton props={{ onClick: () => dispatch(changeOption(null)) }}>
          취소
        </CommonButton>
        <CommonButton>시작</CommonButton>
      </div>
    </StyledOptionForm>
  );
}
