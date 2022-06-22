import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Main } from './pages';
// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/main" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
