import FlipCard from '../components/card/FlipCard';
import { CATEGORY_LOGO } from '../components/category/categoryLogo';

export default function Text() {
  return (
    <FlipCard
      front={
        <>
          {CATEGORY_LOGO['REACT']['logo']}
          <div>REACT</div>
        </>
      }
      back={<div>helloworld</div>}
    />
  );
}
