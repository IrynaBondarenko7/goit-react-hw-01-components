import styled from 'styled-components';
export const Table = styled.table`
  margin: 50px auto;
  box-shadow: inset rgba(0, 0, 0, 0.3) 0 0 5px 5px;
`;
export const TableHead = styled.thead`
  background-color: ${p => p.theme.color.tableHeader};
`;
export const HeadName = styled.th`
  padding: 20px 100px;
  font-size: 20px;
  color: ${p => p.theme.color.white};
  text-transform: uppercase;
`;
export const TableString = styled.tr`
  font-size: 20px;

  background-color: ${p => p.theme.color.white};
  :nth-child(2n) {
    background-color: ${p => p.theme.color.tableString};
  }
`;
export const Type = styled.td`
  padding: 10px 20px 10px 80px;
  ::first-letter {
    text-transform: uppercase;
  }
`;
export const Amount = styled.td`
  padding: 10px 20px 10px 110px;
`;
export const Currency = styled.td`
  padding: 10px 20px 10px 120px;
`;
