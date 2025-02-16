import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled(Box)(() => ({
  height: '90vh',
  position: 'relative',
  backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
}));

const ContentContainer = styled(Container)(() => ({
  position: 'relative',
  zIndex: 1,
  color: 'white',
  textAlign: 'center',
}));

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <ContentContainer maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          Extraordinary Journeys
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            mb: 4,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 300,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          Experience the world's most exclusive destinations
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ minWidth: 200 }}
            onClick={() => navigate('/destinations/1')}
          >
            Explore Destinations
          </Button>
          <Button
            variant="outlined"
            sx={{
              minWidth: 200,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'secondary.light',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
            onClick={() => navigate('/itineraries')}
          >
            View Itineraries
          </Button>
        </Box>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
