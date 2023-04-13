import PropTypes from 'prop-types';
import { GiShadowFollower } from 'react-icons/gi';
import { FaEye } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { Label, Quantity, StatsItem, StatsList } from './Stats.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <Label>
          Followers
          <GiShadowFollower size="18" />
        </Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>
          Views
          <FaEye size="18" />
        </Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>
          Likes
          <AiFillHeart size="18" />
        </Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
};
Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
