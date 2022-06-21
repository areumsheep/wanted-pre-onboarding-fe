import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages';
// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
