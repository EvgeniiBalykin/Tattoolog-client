import CatalogCard from '../CatalogCard';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../store/mockStore';
import '@testing-library/jest-dom';

const MOCK_PROPS = {
  firstName: 'test name',
  lastName: 'test lastname',
  id: 1,
  avatar: 'avatar.jpg',
  city: 'test city',
  country: 'test country',
};

jest.mock(
  'js-cookie',
  () =>
    ({
      get: jest.fn(),
    } as any)
);

describe(CatalogCard, () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <Router>
          <CatalogCard
            lastName={MOCK_PROPS.lastName}
            firstName={MOCK_PROPS.firstName}
            avatar={MOCK_PROPS.avatar}
            id={MOCK_PROPS.id}
            city={MOCK_PROPS.city}
            country={MOCK_PROPS.country}
          />
        </Router>
      </Provider>
    );
  });

  it('component should render', () => {
    const catalogCard = screen.getByTestId('catalog-card-test');
    const name = screen.getByText(/test name/i);
    const lastName = screen.getByText(/test lastname/i);
    const city = screen.getByText(/test city/i);
    const country = screen.getByText(/test country/i);
    const avatar = screen.getByAltText('avatar-img');
    expect(catalogCard).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'avatar.jpg');
  });

  //TODO: Сделать проверку на переход по карточке
});
