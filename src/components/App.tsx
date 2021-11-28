import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { About } from '../pages/About';
import { Home } from "../pages/Home";
import { Nav } from "./Nav";
import { Shop } from '../pages/Shop';
import { Work } from "../pages/Work";

import styles from '../styles/App.module.scss';
import ScrollToTop from "./ScrollToTop";

export const App = (): JSX.Element => {
  return (
    <Router>
      <ScrollToTop>
        <div className={styles["app-container"]}>
          <Nav />
          <div className={styles["app-page-container"]}> 
            <Routes>
                <Route path="/work/:id" element={<Work />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}
