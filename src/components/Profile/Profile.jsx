import PropTypes from 'prop-types';
import css from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div className={css.Profile}>
        <img className={css.photo} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.items}>@{tag}</p>
        <p className={css.items}>{location}</p>
        <ul className={css.list__items}>
          <li className={css.item}>
            <span className={css.item__span}>followers</span>
            <span className={css.item__span}>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.item__span}>views</span>
            <span className={css.item__span}>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.item__span}>likes</span>
            <span className={css.item__span}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
