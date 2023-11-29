import styled from 'styled-components';
// import Image from "next/image"

const StyledPostHeader = styled.div`
  height: 170px;
  width: 100%;
`;

export default function PostHeader() {
  // const changeToLocalHost = header_image.replace("api-local:8000", "localhost:5050");

  return (
    <StyledPostHeader>
      {/* <Image
      src={changeToLocalHost} 
      width={320} 
      height={170}
      alt="no-image" 
      ></Image> */}
    </StyledPostHeader>
  );
}
