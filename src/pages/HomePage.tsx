import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <FeaturedDestinations />
    </Box>
  );
};

export default HomePage;
