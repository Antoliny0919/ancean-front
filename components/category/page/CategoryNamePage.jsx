import styled, { css } from 'styled-components';
import ResponsivePost from '../../minipost/ResponsivePost';
import OceanWaveButton from '../../button/OceanWaveButton';
import CategoryText from '../CategoryText';
import { StyledCategoryText } from '../CategoryText';
import { StyledOceanWaveButton } from '../../button/OceanWaveButton';
import { flexBox } from '../../../styles/variable';

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
    color: #272727;
    font-size: 10px;
  }
`;

const StyledCategoryPageBody = styled.div`
  .posts-border {
    border-radius: 10px;
    ${(props) =>
      props.color.includes('linear-gradient')
        ? css`
            background: linear-gradient(#fff, #fff), ${(props) => props.color};
            background-origin: border-box;
            background-clip: content-box, border-box;
            border: solid transparent 0.2rem;
          `
        : css`
            border: solid ${(props) => props.color} 0.2rem;
          `}
    box-shadow: ${(props) => props.$boxShadow};
  }
  .posts-content {
    ${flexBox.flex('column')};
    padding-top: 5rem;
    padding-bottom: 5rem;
    background: ${(props) => props.$transparentColor};
  }
`;

export default function CategoryNamePage({
  categoryPosts,
  target,
  categoryName,
  bodyProps = {},
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
      <StyledCategoryPageBody {...bodyProps}>
        <div className="posts-border">
          <div className="posts-content">
            {categoryPosts.map((post, index) => {
              return (
                <ResponsivePost
                  key={index}
                  post={post}
                  reference={categoryPosts.length === index + 1 ? target : null}
                />
              );
            })}
          </div>
        </div>
      </StyledCategoryPageBody>
    </StyledCategoryPageArea>
  );
}
