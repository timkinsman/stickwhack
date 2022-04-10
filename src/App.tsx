import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { AppContainer } from './components/AppContainer';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { NotFound } from './components/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Work } from './components/Work';

const App = (): JSX.Element => (
  <Router>
    <ScrollToTop>
      <AppContainer>
        <Nav />
        <Routes>
          <Route path='/work/:id' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AppContainer>
    </ScrollToTop>
  </Router>
);

export default App;
