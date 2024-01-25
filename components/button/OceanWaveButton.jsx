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
  waveColor,
  backgroundColor,
  waveOption,
}) {
  return (
    <StyledOceanWaveButton $backgroundColor={backgroundColor}>
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
