import { render, screen } from '@testing-library/react';
import DescriptionIcons from '../DescriptionIcons';
import '@testing-library/jest-dom';

const MOCK_PROPS = {
  icon: '/path/to/icon.png',
  title: 'Test Title',
  subtitle: 'Test Subtitle',
  md: 4,
  sm: 6,
  xs: 12,
};

describe('DescriptionIcons Component', () => {
  it('renders with provided title and subtitle', () => {
    render(
      <DescriptionIcons
        icon={MOCK_PROPS.icon}
        title={MOCK_PROPS.title}
        subtitle={MOCK_PROPS.subtitle}
        md={MOCK_PROPS.md}
        sm={MOCK_PROPS.sm}
        xs={MOCK_PROPS.xs}
      />
    );

    const titleElement = screen.getByText(MOCK_PROPS.title);
    const subtitleElement = screen.getByText(MOCK_PROPS.subtitle);
    const imgElement = screen.getByAltText('icon-img');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  it('renders without a title', () => {
    render(
      <DescriptionIcons
        icon={MOCK_PROPS.icon}
        subtitle={MOCK_PROPS.subtitle}
        md={MOCK_PROPS.md}
        sm={MOCK_PROPS.sm}
        xs={MOCK_PROPS.xs}
      />
    );

    const titleElement = screen.queryByText(MOCK_PROPS.title);
    const subtitleElement = screen.getByText(MOCK_PROPS.subtitle);
    const imgElement = screen.getByAltText('icon-img');

    expect(titleElement).toBeNull();
    expect(subtitleElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
