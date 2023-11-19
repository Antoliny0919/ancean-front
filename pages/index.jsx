import wrapper from '@/redux';

export default function Home(props) {
  const google = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL}/google&response_type=code&scope=openid email profile`;

  console.log(google);

  return (
    <>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>폰트 테스트</h1>
      <h1>{props.gift}</h1>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    console.log(store.getState().field.signin.form);

    return {
      props: { gift: 'helloWorld' },
    };
  },
);
