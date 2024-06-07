import styled from 'styled-components';
import OceanWaveButton, {
  StyledOceanWaveButton,
} from '../../components/button/OceanWaveButton';
import { LuCopyPlus } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa';
import { flex } from '../../styles/variable';

const StyledProjectCover = styled.main`
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  margin: 8rem 0;
  font-family: 'NanumBarunGothic';
  font-size: 32px;
`;

const StyledProject = styled.div`
  ${flex('row', 'space-evenly', 'center')}
  padding: 2rem;

  ${StyledOceanWaveButton} {
    font-size: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    color: black;
    width: 15em;
    height: 15em;
  }
`;

export default function Project() {
  return (
    <StyledProjectCover>
      <StyledProject>
        <OceanWaveButton
          rgb={{
            red: 54,
            green: 135,
            blue: 181,
          }}
          waveOption={{
            height: 20,
            amplitude: 4,
            speed: 0.5,
            points: 2,
          }}
        >
          <div className="">
            <FaPlus />
            <p>새로운 프로젝트 생성</p>
          </div>
        </OceanWaveButton>
        <OceanWaveButton
          rgb={{
            red: 85,
            green: 195,
            blue: 204,
          }}
          waveOption={{
            height: 10,
            amplitude: 4,
            speed: 0.5,
            points: 2,
          }}
        >
          <div className="">
            <LuCopyPlus />
            <p>프로젝트 릴리스 노트 추가</p>
          </div>
        </OceanWaveButton>
      </StyledProject>
    </StyledProjectCover>
  );
}
