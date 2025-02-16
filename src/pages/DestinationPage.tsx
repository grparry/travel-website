import { Box, Container, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import DestinationHero from '../components/destinations/DestinationHero';
import LuxuryExperiences from '../components/destinations/LuxuryExperiences';
import Accommodations from '../components/destinations/Accommodations';
import { destinations, luxuryExperiences, accommodations } from '../data/destinations';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Container maxWidth="lg" sx={{ py: 20, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Destination Not Found
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        We couldn't find the destination you're looking for.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      >
        Return Home
      </Button>
    </Container>
  );
};

const DestinationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const destinationId = parseInt(id || '1');

  // Handle invalid IDs
  if (isNaN(destinationId)) {
    return <NotFound />;
  }

  const destination = destinations.find(d => d.id === destinationId);
  const destinationExperiences = luxuryExperiences[destinationId] || [];
  const destinationAccommodations = accommodations[destinationId] || [];

  if (!destination) {
    return <NotFound />;
  }

  return (
    <Box>
      <DestinationHero destination={destination} />
      <LuxuryExperiences experiences={destinationExperiences} />
      <Accommodations accommodations={destinationAccommodations} />
    </Box>
  );
};

export default DestinationPage;
