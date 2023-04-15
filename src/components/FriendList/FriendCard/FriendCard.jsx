import { RiRadioButtonLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { FriendName, Status } from './FriendCard.styled';
export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status status={isOnline}>
        <RiRadioButtonLine />
      </Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
