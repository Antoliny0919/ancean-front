import styled from 'styled-components';
import OceanWaveButton, {
  StyledOceanWaveButton,
} from '../button/OceanWaveButton';

const StyledProjectButton = styled.div`
  ${StyledOceanWaveButton} {
    font-size: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    color: black;
    width: 15em;
    height: 15em;
    overflow: hidden;
    &:hover {
      .wave {
        height: 10em;
        svg {
          height: 10em;
        }
      }
    }
    .wave {
      position: relative;
      top: 1em;
      height: 5em;
      transition: height 1s;
      svg {
        transition: height 1s;
        top: 1em;
        height: 5em;
        border-radius: 10px;
      }
    }
  }
`;

export default function ProjectButton({ logo, title, buttonProps = {} }) {
  return (
    <StyledProjectButton>
      <OceanWaveButton {...buttonProps}>
        {logo}
        <p>{title}</p>
      </OceanWaveButton>
    </StyledProjectButton>
  );
}
