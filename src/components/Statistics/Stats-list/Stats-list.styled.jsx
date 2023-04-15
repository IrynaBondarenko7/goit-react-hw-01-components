import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  margin: 0 auto;
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: calc((100%) / 4);
  row-gap: 10px;
  color: ${prop => prop.theme.color.white};
  font-size: 20px;
  text-align: center;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case '.docx':
        return theme.color.satstDoc;
      case '.pdf':
        return theme.color.satstPdf;
      case '.mp3':
        return theme.color.statsMp3;
      case '.psd':
        return theme.color.statsPsd;
      default:
        return theme.color.statsDegault;
    }
  }};
`;
