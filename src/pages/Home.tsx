import { Banner } from '../components/Banner';
import { Panel } from '../components/Panel';
import { works } from '../context';
import styles from '../styles/Home.module.scss';

export const Home = (): JSX.Element => (
  <div className={`global-fadein`}>
    <Banner />
    <div style={{ height: '100vh' }}></div>
    <div className={styles['panel-container']} id='panel-container'>
      {works?.map((work) => (
        <Panel work={work} />
      ))}
    </div>
  </div>
);
