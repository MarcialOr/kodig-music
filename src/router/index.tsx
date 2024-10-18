import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MusicPlayer from '../pages/MusicPlayer';
import App from '../App';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="player" element={<MusicPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
