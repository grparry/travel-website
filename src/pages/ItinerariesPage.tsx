import { useState, useMemo, useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ItineraryCard from '../components/itineraries/ItineraryCard';
import ItineraryFilters from '../components/itineraries/ItineraryFilters';
import { itineraries } from '../data/itineraries';

const HeroSection = styled(Box)({
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
});

const ItinerariesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 20]);

  // Get unique destinations and duration range from itineraries
  const { destinations, minDuration, maxDuration } = useMemo(() => {
    const allDestinations = new Set<string>();
    let min = Infinity;
    let max = 0;

    itineraries.forEach(itinerary => {
      itinerary.destinations.forEach(dest => allDestinations.add(dest));
      min = Math.min(min, itinerary.duration);
      max = Math.max(max, itinerary.duration);
    });

    return {
      destinations: Array.from(allDestinations),
      minDuration: min,
      maxDuration: max,
    };
  }, []);

  // Initialize duration range with actual min and max
  useEffect(() => {
    setDurationRange([minDuration, maxDuration]);
  }, [minDuration, maxDuration]);

  // Filter itineraries based on search, destination, and duration
  const filteredItineraries = useMemo(() => {
    return itineraries.filter(itinerary => {
      const matchesSearch = 
        searchQuery === '' ||
        itinerary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        itinerary.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDestination =
        selectedDestination === '' ||
        itinerary.destinations.includes(selectedDestination);

      const matchesDuration =
        itinerary.duration >= durationRange[0] &&
        itinerary.duration <= durationRange[1];

      return matchesSearch && matchesDestination && matchesDuration;
    });
  }, [searchQuery, selectedDestination, durationRange]);

  return (
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
            Curated Luxury Itineraries
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Experience the world's most exclusive destinations with our carefully crafted journeys
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <ItineraryFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDestination={selectedDestination}
          onDestinationChange={setSelectedDestination}
          durationRange={durationRange}
          onDurationChange={setDurationRange}
          destinations={destinations}
          minDuration={minDuration}
          maxDuration={maxDuration}
        />

        {filteredItineraries.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" gutterBottom>
              No Itineraries Found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your filters to see more results.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredItineraries.map((itinerary) => (
              <Grid item key={itinerary.id} xs={12} md={6}>
                <ItineraryCard itinerary={itinerary} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ItinerariesPage;
