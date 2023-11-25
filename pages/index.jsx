import { useRouter } from 'next/router';
import wrapper from '@/redux';
import Modal from 'components/common/modal/modal';
import GithubTestImage from 'public/signup/github-mark-white.png';

export default function Home(props) {
  const router = useRouter();

  const testOnClick = (e) => {
    e.preventDefault();
    router.push('/test');
  };

  return (
    <>
      <Modal
        image={GithubTestImage}
        title="회원가입 성공"
        buttonTitle="확인"
      ></Modal>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>폰트 테스트</h1>
      <h1>{props.gift}</h1>
      <button onClick={testOnClick}>test button</button>
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
