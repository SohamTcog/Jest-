import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import "./PostListDataContainer.css";
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

 const PostListDataContainer: React.FC = () => {
  const pageTitle = "Task List";

  const { isLoading, error, data } = useQuery<PostData[]>('postlist', fetchData);

  if (isLoading) {
    return <div data-testid="loading-text">Loading...</div>;
  }

  if (error) {
    return <div>Error: failed to fetch the data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="post-list-container">
        <h1>{pageTitle}</h1>

      <table className="post-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PostListDataContainer;

