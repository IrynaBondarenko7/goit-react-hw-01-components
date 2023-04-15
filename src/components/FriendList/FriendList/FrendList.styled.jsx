import styled from 'styled-components';
export const ListOfFriends = styled.ul`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
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
