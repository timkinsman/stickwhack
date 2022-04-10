import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppContainer } from './components/AppContainer';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { NotFound } from './pages/NotFound';

export const App = (): JSX.Element => (
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
