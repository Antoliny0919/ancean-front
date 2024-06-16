import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import OceanWaveButton, {
  StyledOceanWaveButton,
} from '../button/OceanWaveButton';
import ProjectOptionForm from './ProjectOptionForm';
import { shadow } from '../../styles/variable';

const StyledProjectButton = styled.div`
  width: 15em;
  height: 15em;
  transition: all 1s;
  ${shadow.signatureBoxShadow(4)};
  border-radius: 10px;
  ${({ $isActive }) =>
    $isActive &&
    css`
      width: 30em;
      height: 30em;
    `}
  ${StyledOceanWaveButton} {
    font-size: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    color: black;
    overflow: hidden;
    transition: all 2s;
    width: inherit;
    height: inherit;
    box-shadow: none;
    border-radius: inherit;
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

export default function ProjectOption({ logo, title, optionProps = {} }) {
  const activeOption = useSelector(({ project }) => project.selectedOption);

  const buttonState =
    activeOption === null || activeOption === optionProps.props.name;

  return (
    <>
      {buttonState && (
        <StyledProjectButton
          $isActive={activeOption === optionProps.props.name}
        >
          {activeOption === null ? (
            <OceanWaveButton {...optionProps}>
              {logo}
              <p>{title}</p>
            </OceanWaveButton>
          ) : (
            <ProjectOptionForm />
          )}
        </StyledProjectButton>
      )}
    </>
  );
}
