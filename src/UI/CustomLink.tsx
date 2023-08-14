import { Link } from 'react-router-dom';

interface ICustomLink {
  to: string;
  name: string;
  color?: string;
}

export const CustomLink = ({ to, name, color = 'white' }: ICustomLink) => {
  return (
    <Link style={{ textDecoration: 'none', color }} to={to}>
      {name}
    </Link>
  );
};
