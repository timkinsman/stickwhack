import { useLocation } from 'react-router-dom';
import styles from '../styles/Nav.module.scss';
import $ from 'jquery';

const Link = ({ route, label }: { route: string; label: string }) => {
  const location = useLocation();

  const handleOnClick = () =>
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      'slow',
    );

  return location.pathname === route ? (
    <a onClick={handleOnClick} className={styles['selected']}>
      {label}
    </a>
  ) : (
    <a href={route}>{label}</a>
  );
};

export const Nav = (): JSX.Element => (
  <div className={styles['container']}>
    <Link route='/' label='stickwhack' />
    <div className={styles['links']}>
      <Link route='/about' label='about' />
      <Link route='/gallery' label='gallery' />
      <Link route='/shop' label='shop' />
    </div>
  </div>
);
