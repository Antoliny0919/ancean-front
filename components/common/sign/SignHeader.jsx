import Link from 'next/link';
import Image from 'next/image';
import Styled from 'styled-components';
import TrackingProgressBar from '@/components/signup/items/TrackingProgressBar';
import logo from '@/public/signup/givenrat_logo.png';

const StyledSignUpHeader = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  .progressBarFlex {
    display: flex;
    height: 3%;
    width: 100%;
  }
  img {
    width: 80%;
    height: 70%;
  }
  span {
    font-weight: bold;
    font-size: 16px;
  }
  .goLogin {
    color: ${({ theme }) => theme.colors.mainColor[4]};
    trasition: all 0.5s;
    &:hover {
      color: ${({ theme }) => theme.colors.mainColor[6]};
      font-weight: 900;
    }
  }
`;

export default function SignHeader({ type }) {
  return (
    <StyledSignUpHeader>
      <div className="progressBarFlex">
        {type === 'signUp' && <TrackingProgressBar />}
      </div>
      <Image src={logo} alt="none" priority></Image>
      <div>
        {type === 'signUp' ? (
          <span>이미 회원이신가요? </span>
        ) : (
          <span>아직 회원이 아니신가요? </span>
        )}
        {type === 'signUp' ? (
          <Link href="/member/signin">
            <span className="goLogin">로그인</span>
          </Link>
        ) : (
          <Link href="/member/signup">
            <span className="goLogin">회원가입</span>
          </Link>
        )}
      </div>
    </StyledSignUpHeader>
  );
}
