import React from 'react';
import $ from 'jquery';
import smile from '../../assets/stickers/smile.png';
import useStyles from './BannerStyles';

const Banner = (): JSX.Element => {
  const classes = useStyles()
  
  const handleOnClick = (id: string) =>
    $('html,body').animate(
      {
        scrollTop: $(id).offset()?.top,
      },
      'slow',
    );

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.headingContainer}>
          <div className={classes.heading}>hello!</div>
          {[...Array(8)].map(() => (
            <img
              alt='smile'
              className={classes.smile}
              src={smile}
              style={{ animationDelay: `${Math.random()}s` }}
            />
          ))}
        </div>
        <div className={classes.subheading}>
          my name is kesha (aka stickwhack){' '}
          <button
            type='button'
            className={classes.button}
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
