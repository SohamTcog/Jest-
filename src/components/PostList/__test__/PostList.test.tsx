export {};

import { render, screen, waitFor } from '@testing-library/react';
import PostListDataContainer from '../PostList';
import { UseQueryResult, useQuery } from 'react-query';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const mockData: PostData[] = [
  { userId: 1, id: 1, title: 'Test Post 1', body: 'Test Body 1' },
  { userId: 2, id: 2, title: 'Test Post 2', body: 'Test Body 2' },
];

jest.mock('react-query');

describe('PostList', () => {
  it('displays loading text when isLoading is true', () => {
    (useQuery as jest.MockedFunction<typeof useQuery>).mockReturnValue({ isLoading: true } as UseQueryResult);
    render(<PostListDataContainer />);
    const loadingText = screen.getByTestId('loading-text');
expect(loadingText).toBeInTheDocument();
expect(loadingText.innerHTML).toBe('Loading...');
    //expect(loadingText).toBe('Loading...');
  });

  it('renders data successfully', async () => {
    (useQuery as jest.MockedFunction<typeof useQuery>).mockReturnValue({ data: mockData } as UseQueryResult);
    render(<PostListDataContainer />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
 
    mockData.forEach((post) => {
        const userIdCell = screen.getByRole('cell', { name: post.userId.toString() });
        expect(userIdCell).toBeInTheDocument();
        expect(userIdCell.textContent).toBe(post.userId.toString());
    });

  });


});