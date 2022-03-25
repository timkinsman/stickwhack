import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Nav } from './Nav';
import { Shop } from '../pages/Shop';
import { Work } from '../pages/Work';
import { Gallery } from '../pages/Gallery';
import { NotFound } from '../pages/NotFound';
import ScrollToTop from './ScrollToTop';
import { AppContainer } from './AppContainer';
import { Footer } from './Footer';

export const App = (): JSX.Element => (
  <Router>
    <ScrollToTop>
      <AppContainer>
        <Nav />
        <Routes>
          <Route path='/work/:id' element={<Work />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </AppContainer>
    </ScrollToTop>
  </Router>
);
