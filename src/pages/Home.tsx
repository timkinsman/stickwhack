import { Panel } from '../components/Panel';
import stickernew from '../assets/new.png';
import wolga from '../assets/wolga.png';
import clowngirl from '../assets/clowngirl.png';
import styles from '../styles/Home.module.scss';
import { Banner } from '../components/Banner';

export const Home = (): JSX.Element => (
  <div className={`global-fadein`}>
    <Banner />
    <div style={{ height: '100vh' }}></div>
    <div className={styles['panel-container']} id='panel-container'>
      <Panel
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title='branding and apparel'
        desc='Lucky Zep’s is a restaurant and bar that 
focuses on paying homage to retro style, 
yet appealing to a younger audience.'
        left='#272727'
        right='#000000'
        color='#FFFFFF'
      />
      <Panel
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title='Adelaide Fringe Festival 2021 poster entry'
        desc='Firestarter was a concept for the Adelaide Fringe Festival 2021 poster competiton. The concept represents the Fringe’s role in ‘lighting the fire’
in Adelaide every year.'
        left='#FFE6E6'
        right='#f1779c'
      />
      <Panel
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title='branding and stationery'
        desc='Debbie is an artist and art therapist who was looking for a refresh. We focused on representing her own art and her art therapy processes in the final design.'
        left='#F5F7EC'
        right='#fa806b'
      />
      <Panel
        logo={clowngirl}
        thumbs={[wolga, wolga, wolga]}
        title='illustration and merch design'
        desc='I have created a variety of illustrations and custom typography, with some for future use on apparel or art prints. Some I have also screen printed myself.'
        left='#C9C7FF'
        right='#fa806b'
      />
    </div>
  </div>
);
