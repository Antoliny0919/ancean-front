import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  border-radius: 10px;
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px,
    rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;

export default function CardMain({ postData }) {
  const { header_image, content, title, author } = postData;

  return (
    <StyledCard>
      <CardHeader header_image={header_image} />
      <CardBody content={content} title={title} />
      <CardFooter author={author} />
    </StyledCard>
  );
}
