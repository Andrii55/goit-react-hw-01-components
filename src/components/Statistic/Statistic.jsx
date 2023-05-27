import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/getRandomColor';
import css from './Statistic.module.css';

export const Statistic = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul className={css.list}>
        {stats.map(item => (
          <li
            className={css.item}
            style={{ background: getRandomColor() }}
            key={item.id}
          >
            <span>
              <span className={css.span}>{item.label}</span>
              <span className={css.span}>{item.percentage}%</span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
