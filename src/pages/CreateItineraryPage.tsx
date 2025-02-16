import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MultiDayBuilder from '../components/itineraries/MultiDayBuilder';
import PageTransition from '../components/utils/PageTransition';

const HeroSection = styled(Box)({
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '40vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
});

const CreateItineraryPage: React.FC = () => {
  return (
    <PageTransition>
      <Box>
        <HeroSection>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: 'Playfair Display',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Design Your Journey
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              Create your perfect multi-destination luxury experience
            </Typography>
          </Container>
        </HeroSection>

        <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
          <MultiDayBuilder />
        </Box>
      </Box>
    </PageTransition>
  );
};

export default CreateItineraryPage;
