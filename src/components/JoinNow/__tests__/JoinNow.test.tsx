import JointNow from '../JoinNow';
import { render } from '@testing-library/react';

describe(JointNow, () => {
  it('should render component', () => {
    const { getByTestId } = render(<JointNow />);
    const container = getByTestId('test-container');
    expect(container).toBeDefined;
  });
});
