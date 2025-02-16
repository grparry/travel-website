import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { Destination } from '../../types';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(() => ({
  position: 'relative',
  height: '400px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  }
}));

const CardOverlay = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
  padding: theme.spacing(3),
  color: 'white',
}));

const featuredDestinations: Destination[] = [
  {
    id: 1,
    title: 'Maldives',
    description: 'Private islands and overwater villas',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Swiss Alps',
    description: 'Luxury chalets and mountain retreats',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Amalfi Coast',
    description: 'Cliffside hotels and Mediterranean charm',
    image: 'https://images.unsplash.com/photo-1533165955744-2304f1cc031b?ixlib=rb-4.0.3',
  }
];

const FeaturedDestinations: React.FC = () => {
  const navigate = useNavigate();

  const handleDestinationClick = (destinationId: number) => {
    navigate(`/destinations/${destinationId}`);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            textAlign: 'center',
          }}
        >
          Featured Destinations
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
            fontWeight: 300,
          }}
        >
          Discover our hand-picked luxury experiences
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination) => (
            <Grid item xs={12} md={4} key={destination.id}>
              <StyledCard onClick={() => handleDestinationClick(destination.id)}>
                <CardMedia
                  component="img"
                  height="400"
                  image={destination.image}
                  alt={destination.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardOverlay>
                  <Typography variant="h5" component="div" gutterBottom>
                    {destination.title}
                  </Typography>
                  <Typography variant="body2">
                    {destination.description}
                  </Typography>
                </CardOverlay>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
