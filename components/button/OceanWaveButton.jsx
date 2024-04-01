import styled from 'styled-components';
import Wave from 'react-wavify';
import { flex, shadow } from '../../styles/variable';

export const StyledOceanWaveButton = styled.div`
  font-size: inherit;
  font-family: 'Raleway';
  color: ${({ theme }) => theme.colors.white};
  width: 7em;
  border-radius: 10px;
  ${flex('column', 'space-between', 'center')};
  outline: none;
  border: none;
  text-align: center;
  background-color: ${(props) => props.$backgroundColor};
  ${shadow.signatureBoxShadow(6)};
  transition: background-color 0.7s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.$hoverBackgroundColor};
  }
  .title {
    margin-top: 0.5em;
  }
  .wave {
    height: 3em;
    svg {
      height: 3em;
      border-radius: 10px;
    }
  }
`;

export default function OceanWaveButton({
  children,
  rgb,
  waveOption,
  props = {},
}) {
  let { red, green, blue } = rgb;

  let waveColor = `rgb(${red}, ${green}, ${blue})`;
  let backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.3)`;
  let hoverBackgroundColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;

  return (
    <StyledOceanWaveButton
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      {...props}
    >
      <div className="title">{children}</div>
      <Wave
        fill={waveColor}
        paused={false}
        className="wave"
        options={waveOption}
      ></Wave>
    </StyledOceanWaveButton>
  );
}
