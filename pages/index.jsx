import wrapper from '@/redux';
// import { useCookies } from 'react-cookie';

export default function Home(props) {
  // const [ cookies, setCookies ] = useCookies('name');

  // setCookies('name', 'helloWorld');
  // console.log(cookies);

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
