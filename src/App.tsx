import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import PostListDataContainer from './components/PostList/PostList';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Banner />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
          <Route path="/list" element={<PostListDataContainer />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
