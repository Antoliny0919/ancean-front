import Styled, { css } from 'styled-components';
import { BiMessageSquareAdd } from 'react-icons/bi';

const StyledToggle = Styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 13px;
  ${({ $isAllAgree }) =>
    $isAllAgree &&
    css`
      background-color: ${({ theme }) => theme.colors.mainColor[1]};
      color: #f8f8f8;
      font-size: 14px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
    `}
  input[type='radio']{
    appearance: none;
    width: 0.7rem;
    height: 0.7rem;
    background-color: white;
    background-size: cover;
    border: solid ${({ theme }) => theme.colors.mainColor[6]} 0.1rem;
    &:checked{
      background-color: ${({ theme }) => theme.colors.mainColor[6]};
      background-size: cover;
    }
  }
  label{
    display: flex;
    margin-left: 0.3rem;
    width: 85%;
  }
`;

export default function Toggle({ changeState, onChecked, data }) {
  return (
    <StyledToggle $isAllAgree={!data.name}>
      <input
        type="radio"
        id={data.name}
        onClick={changeState}
        checked={onChecked}
        name={data.name}
        readOnly={true}
      ></input>
      <label htmlFor={data.name}>{data.label}</label>
      {data.name && <BiMessageSquareAdd />}
    </StyledToggle>
  );
}
