import { FriendCard } from '../FriendCard/FriendCard';
import PropTypes from 'prop-types';
import { ListOfFriends } from './FrendList.styled';
export const FrendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => {
        return <FriendCard friend={friend} key={friend.id} />;
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
