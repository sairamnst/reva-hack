import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Main from './Main';
import Coursepage from './Coursepage';
import Record_server from './Record_server';
import Djangopage from './Djangopage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Djangopage />} />
        <Route path="Main" element={<Main />} />
        <Route path="courses" element={<Coursepage />} />
        <Route path="Tasks" element={<Record_server />} />
      </Routes>
    </Router>
  );
}

export default App;
