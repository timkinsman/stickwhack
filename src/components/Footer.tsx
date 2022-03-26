import { connect } from 'react-redux';
import { Work } from '../interfaces';
import styles from '../styles/Footer.module.scss';

interface FooterProps {
  work?: Work;
}

const _Footer = ({ work }: FooterProps): JSX.Element => (
  <div className={styles['container']}>
    <div className={styles['heading']}>{work?.title}</div>
  </div>
);

const mapStateToProps = (state: any) => ({
  work: state.work,
});

export const Footer = connect(mapStateToProps, null)(_Footer);
