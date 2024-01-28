import styled from 'styled-components';

const StyledBottomArea = styled.div`
  padding: 0 1em;
  font-size: inherit;
  .bottom-field {
    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: inherit;
    /* justify-content: center; */
    margin-bottom: 1em;
    padding-bottom: 0.5em;
    border-bottom: solid #dedede 1px;
    & > * {
      margin-right: 2em;
      display: flex;
    }
    .field-name {
      @media screen and (min-width: 768px) {
        width: 15%;
        flex-direction: row;
      }
      font-size: inherit;
      width: 40%;
      flex-direction: row-reverse;
    }
    .field-name > div {
      background-color: ${({ theme }) => theme.colors.mainColor[4]};
      color: #fff;
      padding: 0.2em 0.7em;
      border-radius: 10px;
    }
    input[type='radio'] {
      appearance: none;
      width: 1.25em;
      height: 1.25em;
      border-radius: 50%;
      border: max(2px, 0.2em) solid grey;
      transition:
        border 0.5s ease-in-out,
        box-shadow 0.5s;
    }

    input[type='radio']:checked {
      border: 0.4em solid ${({ theme }) => theme.colors.mainColor[4]};
    }
    input[type='radio']:hover {
      box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
      cursor: pointer;
    }

    input[type='radio']:hover + span {
      cursor: pointer;
    }
    input[type='radio']:disabled {
      background-color: lightgray;
      box-shadow: none;
      opacity: 0.7;
    }
    input[type='radio']:disabled + span {
      cursor: default;
      opacity: 0.7;
    }
  }
`;

export default function Bottom() {
  const publicationData = new Date();

  return (
    <StyledBottomArea>
      <div className="bottom-field">
        <div className="field-name">
          <div>공개설정</div>
        </div>
        <label htmlFor="radio-input-published">
          <input
            type="radio"
            id="radio-input-published"
            name="contact"
            defaultChecked
          ></input>
          <span>공개</span>
        </label>
        <label htmlFor="radio-input-none-published">
          <input
            type="radio"
            id="radio-input-none-published"
            name="contact"
            disabled
          ></input>
          <span>비공개</span>
        </label>
      </div>
      <div className="bottom-field">
        <div className="field-name">
          <div>출간일</div>
        </div>
        <div>
          {publicationData.getFullYear()}년 {publicationData.getMonth() + 1}월{' '}
          {publicationData.getDate()}일
        </div>
      </div>
      <div className="bottom-field">
        <div className="field-name">
          <div>작성자</div>
        </div>
        <div>Antoliny0919</div>
      </div>
    </StyledBottomArea>
  );
}
