import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;

  align-items: center;
  background-color: ${prop => prop.theme.color.statsColor};
`;
export const StatsItem = styled.li`
  width: calc((100%) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  border: 1px solid #cacfd2;
  padding: 20px 10px;
`;
export const Label = styled.span`
  font-size: 20px;
  color: ${prop => prop.theme.color.grey};
  svg {
    color: ${prop => prop.theme.color.icon};
    stroke: ${prop => prop.theme.color.icon};
    margin-left: 5px;
  }
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
