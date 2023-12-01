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

  // const [slideAction, setSlideAction] = useState(false);

  // const pageCnt = data.length;

  const getPreviousPage = (e) => {
    e.preventDefault();
    // setPageNumber(pageNumber - 1);
    // setSlideAction(true);
  };

  const getNextPage = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
    // setSlideAction(true);
  };

  return (
    <StyledCardArea>
      <CardSlideButton
        icon={<FaArrowLeftLong />}
        title={'PREVIOUS'}
        onClick={getPreviousPage}
      />
      {data.map((item, key) => {
        return <CardMain postData={item} key={key}></CardMain>;
      })}
      {/* {pageNumber && (
        <CardMain 
        postData={data[pageNumber - 1]} 
        className={`start ${slideAction && 'slide-left'}`}
        onAnimationEnd={()=>{
          setSlideAction(false);
          setPageNumber(pageNumber - 1);
        }}/>
      )}
      <CardMain postData={data[pageNumber]} 
      className={`main ${slideAction && 'slide-left'}`}
      onAnimationEnd={()=>{
        setSlideAction(false);
        setPageNumber(pageNumber - 1);
      }}></CardMain>
      {pageNumber !== pageCnt && (
        <CardMain postData={data[pageNumber + 1]} className="end" />
      )} */}
      <CardSlideButton
        icon={<FaArrowRightLong />}
        title={'NEXT'}
        onClick={getNextPage}
      />
    </StyledCardArea>
  );
}
