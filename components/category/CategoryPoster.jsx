import Poster from '../common/Poster';
import ResponsivePost from '../minipost/ResponsivePost';
import { CATEGORY_DATA } from './data';

export default function CategoryPoster({ name, target, posts }) {
  const { transparentColor, color, hsl } = CATEGORY_DATA[name];

  return (
    <Poster
      backgroundColor={transparentColor}
      borderColor={color}
      boxShadowProps={{ type: 'box', thickness: 10, hsl }}
    >
      {posts.map((post, index) => {
        return (
          <ResponsivePost
            key={index}
            post={post}
            props={posts.length === index + 1 ? { ref: target } : {}}
          />
        );
      })}
    </Poster>
  );
}
