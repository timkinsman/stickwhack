import styles from '../styles/Banner.module.scss';
import $ from 'jquery';
import smiley from '../assets/smiley.png';

export const Banner = (): JSX.Element => {
  const handleOnClick = (id: string) =>
    $('html,body').animate(
      {
        scrollTop: $(id).offset()?.top,
      },
      'slow',
    );

  return (
    <div className={styles['outer-container']}>
      <div className={styles['container']}>
        <div className={styles['heading-container']}>
          <div className={styles['heading']}>hello!</div>
          {[...Array(8)].map(() => (
            <img
              className={styles['smiley']}
              src={smiley}
              style={{ animationDelay: `${Math.random()}s` }}
            />
          ))}
        </div>
        <div className={styles['subheading']}>
          my name is kesha (aka stickwhack){' '}
          <button className={styles['button']} onClick={() => handleOnClick('#panel-container')}>
            and i’m a graphic designer/illustrator
          </button>
        </div>
      </div>
      <button style={{ position: 'absolute', top: 50, right: 50 }}>
        <a href='https://www.youtube.com/watch?v=Yhe7rcDUTeI' target='_blank' rel='noreferrer'>
          why stickwhack?
        </a>
      </button>
    </div>
  );
};
