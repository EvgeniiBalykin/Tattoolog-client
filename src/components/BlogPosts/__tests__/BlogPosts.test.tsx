import BlogPosts from '../BlogPosts';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';
import { MemoryRouter } from 'react-router';
import { useGetBlogPostsQuery } from '@services/toolsApi';
import { mockStore } from '../../../store/mockStore';
import '@testing-library/jest-dom';

const MOCK_POSTS = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      body: 'test',
      created_at: '2023-01-01',
      id: 1,
      image: 'image1.png',
      meta_description: 'test',
      meta_keywords: 'test',
      meta_title_tag: 'test',
      opengraph_description: 'test',
      opengraph_title: 'test',
      slug: 'test',
      title: 'test',
    },
    {
      body: 'test',
      created_at: '2023-01-01',
      id: 2,
      image: 'image1.png',
      meta_description: 'test',
      meta_keywords: 'test',
      meta_title_tag: 'test',
      opengraph_description: 'test',
      opengraph_title: 'test',
      slug: 'test',
      title: 'test',
    },
  ],
};

jest.mock(
  'js-cookie',
  () =>
    ({
      get: jest.fn(),
    } as any)
);

jest.mock('@services/toolsApi', () => ({
  useGetBlogPostsQuery: jest.fn(),
}));

describe(BlogPosts, () => {
  beforeEach(() => {
    (Cookies?.get as jest.Mock)?.mockReturnValue('en');
    (useGetBlogPostsQuery as jest.Mock).mockReturnValue({
      data: MOCK_POSTS,
      isLoading: false,
    });
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <BlogPosts />
        </MemoryRouter>
      </Provider>
    );
  });

  it('component should render', () => {
    const blogPosts = screen.getByTestId('blog-posts-test');
    expect(blogPosts).toBeDefined();
  });

  it('load more button should be present', () => {
    const loadMoreButton = screen.getByTestId('load-more-test');
    expect(loadMoreButton).toBeDefined();
  });

  it('post element should be render', () => {
    const postElement = screen.getAllByTestId('post-item-test');
    expect(postElement).toBeDefined();
  });

  it('post element should be render', () => {
    const postElement = screen.getAllByTestId('post-item-test');
    expect(postElement).toBeDefined();
  });
  //TODO: Добавить тест на проверку перехода к посту

  it('load more button should be present', () => {
    const loadMoreButton = screen.getByTestId('load-more-test');
    fireEvent.click(loadMoreButton);
    expect(loadMoreButton).toBeDisabled();
  });
});
