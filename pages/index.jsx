import Link from 'next/link';

export default function Home() {
  const path =
    'https://kauth.kakao.com/oauth/authorize?client_id=22c13075453c19d0d6a1d8e303df37c2&redirect_uri=http://localhost:5050/api/oauth/kakao&response_type=code';

  const oauthTest = async () => {
    const response = await fetch(
      'https://kauth.kakao.com/oauth/authorize?client_id=22c13075453c19d0d6a1d8e303df37c2&redirect_uri=http://localhost:5050/api/oauth/kakao&response_type=code',
    );
    console.log(response.data);
  };
  return (
    <>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>폰트 테스트</h1>
      <Link href={path}>오어스 테트</Link>
      <button onClick={oauthTest}>오어스 테스트</button>
    </>
  );
}
