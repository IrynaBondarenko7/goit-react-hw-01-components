import styled from 'styled-components';
export const Status = styled.span`
  color: ${prop => {
    if (prop.status) {
      return prop.theme.color.online;
    } else {
      return prop.theme.color.offline;
    }
  }};
`;
export const FriendName = styled.p`
  font-size: 25px;
  font-weight: 700;
  padding-left: 10px;
`;
