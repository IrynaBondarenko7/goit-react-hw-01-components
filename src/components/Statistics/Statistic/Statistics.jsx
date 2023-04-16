import { StatsList } from '../Stats-list/Stats-list';
import PropTypes from 'prop-types';
import { StatisticSection, Title } from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      <StatsList stats={stats} />
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
