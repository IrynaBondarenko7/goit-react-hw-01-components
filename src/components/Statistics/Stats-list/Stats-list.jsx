import PropTypes from 'prop-types';
import { List, StatItem } from './Stats-list.styled';
export const StatsList = ({ stats }) => {
  return (
    <List>
      {stats.map(stat => {
        return (
          <StatItem key={stat.id} type={stat.label}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </StatItem>
        );
      })}
    </List>
  );
};
StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
