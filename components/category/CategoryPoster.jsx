import Poster from '../poster/Poster';
import ResponsivePost from '../minipost/ResponsivePost';
import { CATEGORY_DATA } from './data';

export default function CategoryPoster({ categoryName, target, poster }) {
  const { transparentColor, color, hsl } = CATEGORY_DATA[categoryName];

  return (
    <Poster
      backgroundColor={transparentColor}
      borderColor={color}
      boxShadowProps={{ type: 'box', thickness: 10, hsl }}
    >
      {poster.map((post, index) => {
        return (
          <ResponsivePost
            key={index}
            post={post}
            props={poster.length === index + 1 ? { ref: target } : {}}
          />
        );
      })}
    </Poster>
  );
}
