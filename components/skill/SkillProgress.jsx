import styled from 'styled-components';
import ProgressBar from '../common/ProgressBar';
import { CATEGORY_DATA } from '../category/data';

const StyledSkillProgress = styled.li`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-size: inherit;
  padding: 0 1em;
  letter-spacing: 2px;
  margin-bottom: 20px;
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
    <StyledSkillProgress>
      <div
        className="label"
        style={{ color: `${CATEGORY_DATA[skill.name]['color']}` }}
      >
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
