import { Stats } from '../Stats/Stats';
import PropTypes from 'prop-types';
import {
  CardWrap,
  Description,
  Image,
  Location,
  Name,
  Tag,
} from './Profile.styled';

export const Profile = ({
  user: { username, avatar, tag, location, stats },
}) => {
  return (
    <CardWrap>
      <Description>
        <Image src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats stats={stats} />
    </CardWrap>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
