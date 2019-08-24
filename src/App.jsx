import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import 'react-table/react-table.css';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';

function App() {
  return (
    <div className="wrapper">
      <div id="main-wrapper" className="menu-fixed page-hdr-fixed">
        <Router>
          <Navigation />
          <Header />
          <Routes />
          <div className="page-ftr footer-bottom">
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
