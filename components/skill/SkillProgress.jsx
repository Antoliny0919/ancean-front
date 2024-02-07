import styled, { css } from 'styled-components';
import ProgressBar from '../common/ProgressBar';
import { CATEGORY_DATA } from '../category/data';

const StyledSkillProgress = styled.li`
  width: 100%;
  font-size: inherit;
  padding: 0 1em;
  letter-spacing: 2px;
  margin-bottom: 20px;
  .name {
    ${(props) =>
      props.$labelColor.includes('linear-gradient')
        ? css`
            background: ${(props) => props.$labelColor};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `
        : css`
            color: ${(props) => props.$labelColor};
          `}
  }
  .label {
    display: flex;
    flex-direction: row;
    width: auto;
    margin-bottom: 0.3em;
    svg {
      width: 1.5em;
      height: 1.5em;
      margin-right: 10px;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      background: ${(props) => props.color};
    }
  }
`;

export default function SkillProgress({ skill }) {
  return (
    <StyledSkillProgress $labelColor={CATEGORY_DATA[skill.name]['color']}>
      <div className="label">
        <div className="logo">{CATEGORY_DATA[skill.name]['logo']}</div>
        <div className="name">{skill.name}</div>
      </div>
      <ProgressBar
        percentage={skill.percentage}
        color={CATEGORY_DATA[skill.name]['color']}
      />
    </StyledSkillProgress>
  );
}
