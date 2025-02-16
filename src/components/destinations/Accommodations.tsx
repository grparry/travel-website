import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Rating, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Accommodation } from '../../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  }
}));

interface AccommodationsProps {
  accommodations: Accommodation[];
}

const Accommodations: React.FC<AccommodationsProps> = ({ accommodations }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            textAlign: 'center',
          }}
        >
          Luxury Accommodations
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
          Experience unparalleled comfort and sophistication
        </Typography>

        <Grid container spacing={4}>
          {accommodations.map((accommodation) => (
            <Grid item xs={12} md={6} key={accommodation.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={accommodation.image}
                  alt={accommodation.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" gutterBottom component="div">
                      {accommodation.name}
                    </Typography>
                    <Rating value={accommodation.rating} readOnly />
                  </Box>

                  <Typography variant="body1" color="text.secondary" paragraph>
                    {accommodation.description}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOnIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {accommodation.location}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AttachMoneyIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {accommodation.priceRange}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {accommodation.amenities.map((amenity, index) => (
                      <Chip
                        key={index}
                        label={amenity}
                        size="small"
                        variant="outlined"
                        color="secondary"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Accommodations;
