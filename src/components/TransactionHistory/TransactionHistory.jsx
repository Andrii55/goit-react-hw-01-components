import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.container}>
      <thead>
        <tr className={css.list}>
          <th className={css.list__item}>Type</th>
          <th className={css.list__item}>Amount</th>
          <th className={css.list__item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <tr className={css.list} key={item.id}>
            <td className={css.list__item}>{item.type}</td>
            <td className={css.list__item}>{item.amount}</td>
            <td className={css.list__item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
