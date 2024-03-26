import PortfolioPost from '@components/PortfolioPost/PortfolioPost_2';
import transition from '@helpers/transitions/transitions';
import { useGetPortfolioPostQuery } from '@services/profileApi';
import { useParams } from 'react-router';

const PortfolioPostPage = () => {
  const { id } = useParams();
  const { data } = useGetPortfolioPostQuery(id || '');

  return <PortfolioPost data={data} />;
};

export default transition(PortfolioPostPage);
