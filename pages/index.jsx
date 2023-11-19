import wrapper from '@/redux';

export default function Home(props) {
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
