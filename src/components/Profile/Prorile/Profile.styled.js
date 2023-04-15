import styled from 'styled-components';

export const CardWrap = styled.div`
  background-color: ${prop => prop.theme.color.white};
  width: 400px;
  margin: 0 auto;
`;
export const Description = styled.div`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
`;
export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  width: 150px;
  box-shadow: 0 0 3px 5px #d4e6f1;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
`;
export const Tag = styled.p`
  font-size: 20px;
  color: ${prop => prop.theme.color.grey};
`;
export const Location = styled.p`
  font-size: 20px;
  color: ${prop => prop.theme.color.grey};
`;
