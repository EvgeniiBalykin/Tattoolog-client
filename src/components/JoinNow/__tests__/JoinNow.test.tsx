import JointNow from '../JoinNow';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/store';

describe(JointNow, () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <JointNow title="test title" subtitle="test ubtitle" />
        </Provider>
      </BrowserRouter>
    );
    const container = getByTestId('test-container');
    expect(container).toBeDefined;
  });
});
