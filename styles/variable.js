// import css from "styled-jsx/css";

export const flexBox = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export const codeBlock = {
  info: (backgroundColor = '#black') =>
    `
  border-radius: 5px;
  padding: 2.5px 8px;
  background-color: ${backgroundColor}
  `,
};
