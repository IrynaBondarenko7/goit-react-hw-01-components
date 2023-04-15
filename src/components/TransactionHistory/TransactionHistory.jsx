import PropTypes from 'prop-types';
import {
  Amount,
  Currency,
  HeadName,
  Table,
  TableHead,
  TableString,
  Type,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <HeadName>Type</HeadName>
          <HeadName>Amount</HeadName>
          <HeadName>Currency</HeadName>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => {
          return (
            <TableString key={item.id}>
              <Type>{item.type}</Type>
              <Amount>{item.amount}</Amount>
              <Currency>{item.currency}</Currency>
            </TableString>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
