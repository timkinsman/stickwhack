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
  <>
    <button style={{ position: 'fixed', top: 25, right: 50, zIndex: 99 }}>
      <a href='https://www.youtube.com/watch?v=Yhe7rcDUTeI' target='_blank' rel='noreferrer'>
        why stickwhack?
      </a>
    </button>

    <div style={{ position: 'fixed', bottom: 25, left: 50, zIndex: 99 }}>
      <Link route='/' label='stickwhack' />
    </div>

    <div
      style={{ position: 'fixed', bottom: 25, right: 50, zIndex: 99, display: 'flex', gap: '50px' }}
    >
      <Link route='/about' label='about' />
      {/* <Link route='/gallery' label='gallery' />
      <Link route='/shop' label='shop' /> */}
    </div>
  </>
);
