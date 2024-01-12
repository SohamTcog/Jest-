import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
    </div>
  );
}

export default App;
