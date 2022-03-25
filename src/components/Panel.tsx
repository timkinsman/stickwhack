import { useEffect, useState } from 'react';
import styles from '../styles/Panel.module.scss';
import { Sticker } from './Sticker';
import { ReactComponent as ArrowLeft } from '../assets/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow_right.svg';
import { ShowCase } from '../interfaces';
import { Link } from 'react-router-dom';

interface PanelProps {
  sticker?: {
    image: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    width?: string;
    rotate?: number;
  };
  showCase: ShowCase;
}

export const Panel = ({ showCase, sticker }: PanelProps): JSX.Element => {
  const [pagination, setPagination] = useState(0);

  const handleOnClick = (next: number) =>
    next < 0
      ? setPagination(showCase.thumbs.length - 1)
      : setPagination(next % showCase.thumbs.length);

  return (
    <div className={styles['container']}>
      <div className={styles['left']} style={{ background: showCase.left, color: showCase.color }}>
        <Link to={`/showCase/${showCase.id}`}>
          <img src={showCase.logo} alt='logo' className={styles['logo']} />
        </Link>
        <div className={styles['text-container']}>
          <div className={styles['title']}>{showCase.title}</div>
          <div className={styles['description']}>{showCase.desc}</div>
        </div>
      </div>

      <div className={styles['right']} style={{ background: showCase.right }}>
        <button className={styles['button-left']} onClick={() => handleOnClick(pagination - 1)}>
          <ArrowLeft />
        </button>
        <button className={styles['button-right']} onClick={() => handleOnClick(pagination + 1)}>
          <ArrowRight />
        </button>

        <div
          className={styles['carousel-wrapper']}
          style={{
            gridTemplateColumns: `repeat(${showCase.thumbs.length}, 1fr)`,
            width: `${showCase.thumbs.length * 100}%`,
            left: `${pagination * -100}%`,
          }}
        >
          {showCase.thumbs.map((thumb) => (
            <div className={styles['thumb-container']}>
              <img className={styles['image']} alt='work' src={thumb} />
            </div>
          ))}
        </div>
      </div>
      {sticker && (
        <Sticker
          image={sticker.image}
          top={sticker.top}
          right={sticker.right}
          bottom={sticker.bottom}
          left={sticker.left}
          width={sticker.width}
          rotate={sticker.rotate}
        />
      )}
    </div>
  );
};
