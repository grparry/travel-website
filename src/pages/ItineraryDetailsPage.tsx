import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import ItineraryDayCard from '../components/itineraries/ItineraryDayCard';
import { itineraries } from '../data/itineraries';

const HeroSection = styled(Box)({
  position: 'relative',
  height: '70vh',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

const HighlightSection = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  backgroundColor: theme.palette.background.default,
}));

const ItineraryDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openBooking, setOpenBooking] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const itinerary = itineraries.find(i => i.id === Number(id));

  if (!itinerary) {
    return (
      <Container maxWidth="lg" sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Itinerary Not Found
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          We couldn't find the itinerary you're looking for.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/itineraries')}
          sx={{ mt: 2 }}
        >
          View All Itineraries
        </Button>
      </Container>
    );
  }

  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setOpenBooking(false);
      setBookingSubmitted(false);
    }, 2000);
  };

  return (
    <Box>
      <HeroSection
        sx={{
          backgroundImage: `url(${itinerary.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {itinerary.title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              maxWidth: 800,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            {itinerary.subtitle}
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom fontFamily="Playfair Display">
              Journey Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {itinerary.description}
            </Typography>

            <Box sx={{ my: 4 }}>
              <Typography variant="h5" gutterBottom>
                Day by Day Itinerary
              </Typography>
              <Grid container spacing={3}>
                {itinerary.days.map((day) => (
                  <Grid item xs={12} key={day.day}>
                    <ItineraryDayCard day={day} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 24 }}>
              <HighlightSection elevation={0}>
                <Typography variant="h6" gutterBottom>
                  Journey Details
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Duration:
                  </Typography>
                  <Typography variant="body1">
                    {itinerary.duration} Days
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Price per person:
                  </Typography>
                  <Typography variant="h5" color="primary">
                    {itinerary.price}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
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
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  onClick={() => setOpenBooking(true)}
                >
                  Book This Journey
                </Button>
              </HighlightSection>

              <HighlightSection elevation={0} sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Highlights
                </Typography>
                <List>
                  {itinerary.highlights.map((highlight, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={highlight} />
                    </ListItem>
                  ))}
                </List>
              </HighlightSection>

              <HighlightSection elevation={0} sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  What's Included
                </Typography>
                <List>
                  {itinerary.included.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </HighlightSection>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Dialog open={openBooking} onClose={() => setOpenBooking(false)}>
        <DialogTitle>Book Your Journey</DialogTitle>
        <form onSubmit={handleBookingSubmit}>
          <DialogContent>
            {bookingSubmitted ? (
              <Alert severity="success">
                Thank you for your booking request! We'll contact you shortly.
              </Alert>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Special Requests"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenBooking(false)}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={bookingSubmitted}
            >
              Submit Booking
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default ItineraryDetailsPage;
