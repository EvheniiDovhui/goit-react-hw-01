import css from './Profile.module.css';
import {
  RiMailLine,
  RiMentalHealthFill,
  RiUserLocationFill,
} from 'react-icons/ri';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>
          <RiMentalHealthFill className={css.icon} />
          {name}
        </p>

        <p className={css.tag}>
          <RiMailLine className={css.icon} /> @{tag}
        </p>
        <p className={css.location}>
          <RiUserLocationFill className={css.icon} />
          {location}
        </p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
