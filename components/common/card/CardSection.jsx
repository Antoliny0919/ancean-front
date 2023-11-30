import { useState } from 'react';
import styled from 'styled-components';
import CardMain from './CardMain';
import CardSlideButton from './CardSlideButton';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

const StyledCardArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20rem;
  justify-content: space-around;
  align-items: center;
`;

export default function CardSection({ data }) {
  const [pageNumber, setPageNumber] = useState(1);

  // const [slideAction, setSlideAction] = useState(true);

  const pageCnt = data.length;

  const getPreviousPage = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };

  const getNextPage = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
  };

  return (
    <StyledCardArea>
      <CardSlideButton
        icon={<FaArrowLeftLong />}
        title={'PREVIOUS'}
        onClick={getPreviousPage}
      />
      {pageNumber && (
        <CardMain postData={data[pageNumber - 1]} position="start" />
      )}
      <CardMain postData={data[pageNumber]} position="main"></CardMain>
      {pageNumber !== pageCnt && (
        <CardMain postData={data[pageNumber + 1]} position="end" />
      )}
      <CardSlideButton
        icon={<FaArrowRightLong />}
        title={'NEXT'}
        onClick={getNextPage}
      />
    </StyledCardArea>
  );
}
