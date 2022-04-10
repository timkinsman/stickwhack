import React from 'react';
import $ from 'jquery';
import smile from '../../assets/stickers/smile.png';
import styles from './Banner.module.scss';

const Banner = (): JSX.Element => {
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
              alt='smile'
              className={styles['smile']}
              src={smile}
              style={{ animationDelay: `${Math.random()}s` }}
            />
          ))}
        </div>
        <div className={styles['subheading']}>
          my name is kesha (aka stickwhack){' '}
          <button
            type='button'
            className={styles['button']}
            onClick={() => handleOnClick('#panel-container')}
          >
            i’m a graphic designer/illustrator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
