import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cards } from './pages/Cards/Cards';
import { Login } from './pages/Login/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/*" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
};
