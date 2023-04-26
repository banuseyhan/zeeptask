import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Layouts from './layouts';

describe('Layouts component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the search bar', () => {
    render(<Layouts />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should fetch posts when user enters search query', async () => {
    const mockData = [
      { id: 1, title: 'Test post 1', body: 'Test body 1' },
      { id: 2, title: 'Test post 2', body: 'Test body 2' },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    render(<Layouts />);
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts?q=test'
      )
    );
    expect(screen.getAllByRole('listitem').length).toBe(mockData.length);
  });
});
