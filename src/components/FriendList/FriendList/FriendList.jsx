import { FriendCard } from '../FriendCard/FriendCard';
import PropTypes from 'prop-types';
import { FriendItem, ListOfFriends } from './FrendList.styled';
export const FrendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendCard friend={friend} />
          </FriendItem>
        );
      })}
    </ListOfFriends>
  );
};
FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
