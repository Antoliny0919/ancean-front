import CoverflowStretchPost from '../post/swiper/CoverflowStretchPost';

export default function UserPageBody({ posts, name }) {
  return (
    <>
      <h1>@{name}의 인기글</h1>
      <CoverflowStretchPost posts={posts.popularPost} />
    </>
  );
}
