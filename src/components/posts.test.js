import { render, screen } from '@testing-library/react';
import Posts from './posts';

describe('Posts component', () => {
  const mockPosts = [
    { id: 1, title: 'Test post 1', body: 'Test body 1' },
    { id: 2, title: 'Test post 2', body: 'Test body 2' },
  ];

  it('should render the correct number of posts', () => {
    render(<Posts posts={mockPosts} />);
    expect(screen.getByText(/query result total number/i)).toHaveTextContent(
      `Query Result total number: ${mockPosts.length}`
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(mockPosts.length);
  });

  it('should render post information correctly', () => {
    render(<Posts posts={mockPosts} />);
    const postTitles = screen.getAllByRole('heading', { level: 5 });
    const postBodies = screen.getAllByRole('paragraph');
    expect(postTitles[0]).toHaveTextContent(mockPosts[0].title);
    expect(postTitles[1]).toHaveTextContent(mockPosts[1].title);
    expect(postBodies[0]).toHaveTextContent(mockPosts[0].body);
    expect(postBodies[1]).toHaveTextContent(mockPosts[1].body);
  });
});
