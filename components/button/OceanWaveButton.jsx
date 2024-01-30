import styled from 'styled-components';
import Wave from 'react-wavify';

export const StyledOceanWaveButton = styled.div`
  font-size: 16px;
  font-family: 'Raleway';
  color: #f8f8f8;
  width: 7em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  text-align: center;
  background-color: ${(props) => props.$backgroundColor};
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
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
