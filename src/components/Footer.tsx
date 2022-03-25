import { connect } from 'react-redux';
import styles from '../styles/Footer.module.scss';

interface FooterProps {
  work?: string;
}

const _Footer = ({ work }: FooterProps): JSX.Element => (
  <div className={styles['container']}>
    <h1 className={styles['heading']}>{work}</h1>
  </div>
);

const mapStateToProps = (state: any) => ({
  work: state.work,
});

export const Footer = connect(mapStateToProps, null)(_Footer);
