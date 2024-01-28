import styled from 'styled-components';
import CommonSelect from '../select/CommonSelect';
import { CATEGORY_DATA } from './data';

const StyledOption = styled.li`
  background: ${(props) => props.$backgroundColor};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.mainColor[9]};
  padding: 5px 15px 5px;
  transition: 0.7s;
`;

export default function CategorySelect({ categories }) {
  return (
    <CommonSelect>
      {categories.map((category, index) => {
        return (
          <StyledOption
            key={index}
            $backgroundColor={CATEGORY_DATA[category.name]['color']}
          >
            {category.name}
          </StyledOption>
        );
      })}
    </CommonSelect>
  );
}