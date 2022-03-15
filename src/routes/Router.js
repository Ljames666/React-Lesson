import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
