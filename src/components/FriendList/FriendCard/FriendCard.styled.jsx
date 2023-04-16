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
export const FriendItem = styled.li`
  display: flex;
 align-items: center;
 gap:10px;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
  background-color: ${prop => prop.theme.color.white};
  padding: 20px 10px;
}
`;
