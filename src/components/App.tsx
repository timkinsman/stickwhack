import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { About } from './About';
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Shop } from './Shop';
import { Work } from "./Work";

import styles from '../styles/App.module.scss';

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className={styles["app-container"]}>
        <Nav />
        <div className={styles["app-page-container"]}> 
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/work" element={<Work />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
