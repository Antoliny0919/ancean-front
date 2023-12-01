import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px; */
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
