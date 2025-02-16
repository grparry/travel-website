import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';

interface ItineraryFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDestination: string;
  onDestinationChange: (destination: string) => void;
  durationRange: [number, number];
  onDurationChange: (range: [number, number]) => void;
  destinations: string[];
  minDuration: number;
  maxDuration: number;
}

const FilterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
}));

const ItineraryFilters: React.FC<ItineraryFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedDestination,
  onDestinationChange,
  durationRange,
  onDurationChange,
  destinations,
  minDuration,
  maxDuration,
}) => {
  const handleDestinationChange = (event: SelectChangeEvent) => {
    onDestinationChange(event.target.value);
  };

  const handleDurationChange = (_event: Event, newValue: number | number[]) => {
    onDurationChange(newValue as [number, number]);
  };

  return (
    <FilterContainer>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="Search Itineraries"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title or description..."
        />
        
        <FormControl fullWidth>
          <InputLabel>Destination</InputLabel>
          <Select
            value={selectedDestination}
            label="Destination"
            onChange={handleDestinationChange}
          >
            <MenuItem value="">All Destinations</MenuItem>
            {destinations.map((destination) => (
              <MenuItem key={destination} value={destination}>
                {destination}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ px: 2 }}>
        <Typography gutterBottom>
          Duration (Days)
        </Typography>
        <Slider
          value={durationRange}
          onChange={handleDurationChange}
          valueLabelDisplay="auto"
          min={minDuration}
          max={maxDuration}
          marks={[
            { value: minDuration, label: `${minDuration} days` },
            { value: maxDuration, label: `${maxDuration} days` },
          ]}
        />
      </Box>
    </FilterContainer>
  );
};

export default ItineraryFilters;
