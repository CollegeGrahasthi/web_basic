// Import required modules.
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import required components.
import Home from './Pages/Home';
import ComingSoon from './Pages/ComingSoon';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
