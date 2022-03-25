import { Banner } from '../components/Banner';
import { Panel } from '../components/Panel';
import { showCases } from '../context';
import styles from '../styles/Home.module.scss';

export const Home = (): JSX.Element => (
  <div className={`global-fadein`}>
    <Banner />
    <div style={{ height: '100vh' }}></div>
    <div className={styles['panel-container']} id='panel-container'>
      {showCases?.map((showCase) => (
        <Panel showCase={showCase} />
      ))}
    </div>
  </div>
);
