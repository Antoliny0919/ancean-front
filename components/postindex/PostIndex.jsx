import styled from 'styled-components';
import ResponsivePost from '../minipost/ResponsivePost';
import OceanWaveButton from '../button/OceanWaveButton';
import SignatureText from '../common/SignatureText';
import Logo from '../common/Logo';
import { StyledLogoArea } from '../common/Logo';
import { StyledOceanWaveButton } from '../button/OceanWaveButton';
import { flexBox } from '../../styles/variable';

const StyledCategoryPageArea = styled.div`
  @media screen and (min-width: 768px) {
    padding: 3em 5em;
  }
  padding: 0;
`;

const StyledCategoryPageHeader = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  width: 100%;
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
  .title {
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
  .post-sort-button {
    @media screen and (min-width: 768px) {
      margin: 0;
      margin-left: 2em;
    }
    display: flex;
    margin-bottom: 2em;
    margin-left: 0;
    /* & + & {
      margin-left: 2em;
    } */
  }
  ${StyledLogoArea} {
    @media screen and (min-width: 768px) {
      font-size: 64px;
      letter-spacing: 7px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 100px;
      letter-spacing: 10px;
    }
    font-size: 40px;
    letter-spacing: 5px;
  }
  ${StyledOceanWaveButton} {
    @media screen and (min-width: 450px) {
      font-size: 12px;
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
    color: #272727;
    font-size: 10px;
    margin-right: 2em;
    margin-left: 2em;
  }
`;

const StyledCategoryPageBody = styled.div`
  background-color: #daeefe;
  border-radius: 10px;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.2rem;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
  .posts-content {
    ${flexBox.flex('column')};
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export default function PostIndex({ posts, target, sortPosts }) {
  console.log(sortPosts);
  return (
    <StyledCategoryPageArea>
      <StyledCategoryPageHeader>
        <Logo />
        <div className="title">
          <SignatureText
            fontSize={50}
            colorHSL={{ hue: 207, saturation: 78, lightness: 41 }}
          >
            POSTS
          </SignatureText>
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
        </div>
      </StyledCategoryPageHeader>
      <StyledCategoryPageBody>
        <div className="posts-border">
          <div className="posts-content">
            {posts.map((post, index) => {
              return (
                <ResponsivePost
                  key={index}
                  post={post}
                  reference={posts.length === index + 1 ? target : null}
                />
              );
            })}
          </div>
        </div>
      </StyledCategoryPageBody>
    </StyledCategoryPageArea>
  );
}
