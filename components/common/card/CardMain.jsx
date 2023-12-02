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
  &:hover {
    border: solid red 0.1rem;
  }
`;

export default function CardMain({ postData }) {
  const { header_image, content, title, author } = postData;

  // const movePageTest = (e) => {
  //   console.log(e.target.dataset);
  // }

  return (
    <StyledCard>
      <CardHeader header_image={header_image} />
      <CardBody content={content} title={title} />
      <CardFooter author={author} />
    </StyledCard>
  );
}
