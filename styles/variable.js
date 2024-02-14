// import css from "styled-jsx/css";

export const flexBox = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export const flex = (direction, justify, align) => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const shadow = {
  signatureBoxShadow: (thickness) => {
    let boxShadow = ``;
    for (let i = 1; i <= thickness; i++) {
      if (i === thickness) {
        boxShadow += `${i}px ${i}px 0 0 #273237;`;
      }
      boxShadow += `${i}px ${i}px 0 0 #273237,`;
    }
    return `box-shadow: ${boxShadow}`;
  },
  signatureTextShadow: (thickness) => {
    let textShadow = ``;
    let lightness = Math.ceil(20 / thickness);
    for (let i = 1; i <= thickness; i++) {
      if (i === thickness) {
        textShadow += `${i}px ${i}px hsl(0, 0%, 14%);`;
      }
      textShadow += `${i}px ${i}px hsl(0, 0%, ${20 - lightness * i}%),`;
    }
    return `text-shadow: ${textShadow}`;
  },
};

export const textColor = {
  linearGradient: (color) => `
    background: ${color};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

export const post = {
  shadow: () =>
    `
    box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
  `,
  hoverShadow: () =>
    `
    box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark),
    7px 7px 0 0 var(--shadow-outline-deep-dark),
    8px 8px 0 0 var(--shadow-outline-deep-dark),
    9px 9px 0 0 var(--shadow-outline-deep-dark);
  `,
  shadowBorder: () =>
    `
    border: 2px solid var(--shadow-outline-deep-dark);
  `,
  titleEllipsis: () =>
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  contentEllipsis: (line = 5) =>
    `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `,
};

export const footer = {
  smallBox: () =>
    `
  width: 100%;
  font-size: 8px;
  font-family: 'GmarketSansMedium';
  `,
};

export const linearGradient = {
  text: (color) =>
    `
  background: ${color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `,
};
