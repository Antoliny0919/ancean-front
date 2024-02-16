import styled from 'styled-components';
import OceanWaveButton from '../../button/OceanWaveButton';
import CategoryPoster from '../CategoryPoster';
import CategoryText from '../CategoryText';
import { StyledCategoryText } from '../CategoryText';
import { StyledOceanWaveButton } from '../../button/OceanWaveButton';

const StyledCategoryPageArea = styled.div`
  @media screen and (min-width: 768px) {
    padding: 3em 5em;
  }
  padding: 0;
`;

const StyledCategoryPageHeader = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard-Bold';
  .logo {
    width: 15%;
    height: 15%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .post-sort-button {
    @media screen and (min-width: 768px) {
      margin: 0;
    }
    display: flex;
    margin: 0 0 2em 0;
  }
  ${StyledCategoryText} {
    @media screen and (min-width: 768px) {
      font-size: 74px;
      letter-spacing: 10px;
      margin: 0.5em 0.5em 0.5em 0;
    }
    @media screen and (min-width: 1024px) {
      font-size: 100px;
      letter-spacing: 15px;
    }
    font-size: 50px;
    letter-spacing: 7px;
    margin: 0.5em 0;
  }
  ${StyledOceanWaveButton} {
    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: 10px;
  }
`;

export default function CategoryNamePage({
  categoryPosts,
  target,
  categoryName,
  sortPosts,
}) {
  return (
    <StyledCategoryPageArea>
      <StyledCategoryPageHeader>
        <CategoryText name={categoryName} />
        <div className="post-sort-button">
          <OceanWaveButton
            rgb={{ red: 102, green: 194, blue: 197 }}
            waveOption={{
              height: 5,
              amplitude: 15,
              speed: 0.3,
              points: 2,
            }}
            props={{ onClick: () => sortPosts('-wave') }}
          >
            인기순
          </OceanWaveButton>
          <OceanWaveButton
            rgb={{ red: 58, green: 114, blue: 200 }}
            waveOption={{
              height: 10,
              amplitude: 10,
              speed: 0.5,
              points: 2,
            }}
            props={{ onClick: () => sortPosts('-created_at') }}
          >
            최신순
          </OceanWaveButton>
        </div>
      </StyledCategoryPageHeader>
      <CategoryPoster
        posts={categoryPosts}
        name={categoryName}
        target={target}
      ></CategoryPoster>
    </StyledCategoryPageArea>
  );
}
