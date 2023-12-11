import PortfolioPost from '@components/PortfolioPost/PortfolioPost';
import { useGetPortfolioPostQuery } from '@services/profileApi';
import { useParams } from 'react-router';

const PortfolioPostPage = () => {
  const { id } = useParams();
  const { data } = useGetPortfolioPostQuery(id || '');

  return <PortfolioPost data={data} />;
};

export default PortfolioPostPage;
