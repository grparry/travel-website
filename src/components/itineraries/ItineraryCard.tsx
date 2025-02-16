import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Itinerary } from '../../types';
import { useNavigate } from 'react-router-dom';

interface ItineraryCardProps {
  itinerary: Itinerary;
}

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  position: 'relative',
});

const ItineraryCard: React.FC<ItineraryCardProps> = ({ itinerary }) => {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <StyledCardMedia
        image={itinerary.image}
        title={itinerary.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom fontFamily="Playfair Display">
          {itinerary.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {itinerary.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {itinerary.description}
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Destinations:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {itinerary.destinations.map((destination, index) => (
              <Chip
                key={index}
                label={destination}
                size="small"
                sx={{ backgroundColor: 'primary.light', color: 'white' }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {itinerary.duration} Days
            </Typography>
            <Typography variant="h6" color="primary">
              {itinerary.price}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/itineraries/${itinerary.id}`)}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ItineraryCard;
