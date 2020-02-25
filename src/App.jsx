import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom';
import Redux from './Redux';

import Layout from './Layout';

function App() {
  return (
    <Redux>
      <Router>
        <Layout />
      </Router>
    </Redux>
  );
}

export default App;
