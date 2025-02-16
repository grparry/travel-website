import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Chip,
  Paper,
  IconButton,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { destinations } from '../../data/destinations';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

interface DayPlan {
  title: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

interface CustomItinerary {
  title: string;
  description: string;
  duration: number;
  selectedDestinations: string[];
  days: DayPlan[];
}

const initialDayPlan: DayPlan = {
  title: '',
  description: '',
  activities: [''],
  accommodation: '',
  meals: {
    breakfast: '',
    lunch: '',
    dinner: '',
  },
};

const CustomItineraryForm: React.FC = () => {
  const [itinerary, setItinerary] = useState<CustomItinerary>({
    title: '',
    description: '',
    duration: 1,
    selectedDestinations: [],
    days: [{ ...initialDayPlan }],
  });

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItinerary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItinerary((prev) => ({
      ...prev,
      selectedDestinations: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleDayChange = (dayIndex: number, field: keyof DayPlan, value: any) => {
    setItinerary((prev) => ({
      ...prev,
      days: prev.days.map((day, index) =>
        index === dayIndex ? { ...day, [field]: value } : day
      ),
    }));
  };

  const handleActivityChange = (dayIndex: number, activityIndex: number, value: string) => {
    setItinerary((prev) => ({
      ...prev,
      days: prev.days.map((day, idx) => {
        if (idx === dayIndex) {
          const newActivities = [...day.activities];
          newActivities[activityIndex] = value;
          return { ...day, activities: newActivities };
        }
        return day;
      }),
    }));
  };

  const addActivity = (dayIndex: number) => {
    setItinerary((prev) => ({
      ...prev,
      days: prev.days.map((day, idx) =>
        idx === dayIndex
          ? { ...day, activities: [...day.activities, ''] }
          : day
      ),
    }));
  };

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    setItinerary((prev) => ({
      ...prev,
      days: prev.days.map((day, idx) => {
        if (idx === dayIndex) {
          const newActivities = day.activities.filter((_, i) => i !== activityIndex);
          return { ...day, activities: newActivities };
        }
        return day;
      }),
    }));
  };

  const addDay = () => {
    setItinerary((prev) => ({
      ...prev,
      days: [...prev.days, { ...initialDayPlan }],
    }));
  };

  const removeDay = (dayIndex: number) => {
    setItinerary((prev) => ({
      ...prev,
      days: prev.days.filter((_, index) => index !== dayIndex),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Itinerary:', itinerary);
  };

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <StyledPaper>
          <Typography variant="h5" gutterBottom>
            Basic Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Itinerary Title"
                name="title"
                value={itinerary.title}
                onChange={handleBasicInfoChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={itinerary.description}
                onChange={handleBasicInfoChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Destinations"
                value={itinerary.selectedDestinations}
                onChange={handleDestinationChange}
                SelectProps={{
                  multiple: true,
                  renderValue: (selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {(selected as string[]).map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  ),
                }}
              >
                {destinations.map((destination) => (
                  <MenuItem key={destination.id} value={destination.title}>
                    {destination.title}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Duration (days)"
                name="duration"
                value={itinerary.duration}
                onChange={handleBasicInfoChange}
                inputProps={{ min: 1 }}
                required
              />
            </Grid>
          </Grid>
        </StyledPaper>

        {itinerary.days.map((day, dayIndex) => (
          <StyledPaper key={dayIndex}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5">Day {dayIndex + 1}</Typography>
              {dayIndex > 0 && (
                <IconButton onClick={() => removeDay(dayIndex)} color="error">
                  <DeleteIcon />
                </IconButton>
              )}
            </Stack>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Day Title"
                  value={day.title}
                  onChange={(e) => handleDayChange(dayIndex, 'title', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Day Description"
                  value={day.description}
                  onChange={(e) => handleDayChange(dayIndex, 'description', e.target.value)}
                  multiline
                  rows={2}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Activities
                </Typography>
                {day.activities.map((activity, activityIndex) => (
                  <Box key={activityIndex} sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <TextField
                      fullWidth
                      label={`Activity ${activityIndex + 1}`}
                      value={activity}
                      onChange={(e) =>
                        handleActivityChange(dayIndex, activityIndex, e.target.value)
                      }
                      required
                    />
                    {activityIndex > 0 && (
                      <IconButton
                        onClick={() => removeActivity(dayIndex, activityIndex)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => addActivity(dayIndex)}
                  sx={{ mt: 1 }}
                >
                  Add Activity
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Accommodation"
                  value={day.accommodation}
                  onChange={(e) =>
                    handleDayChange(dayIndex, 'accommodation', e.target.value)
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Breakfast"
                  value={day.meals.breakfast}
                  onChange={(e) =>
                    handleDayChange(dayIndex, 'meals', {
                      ...day.meals,
                      breakfast: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Lunch"
                  value={day.meals.lunch}
                  onChange={(e) =>
                    handleDayChange(dayIndex, 'meals', {
                      ...day.meals,
                      lunch: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Dinner"
                  value={day.meals.dinner}
                  onChange={(e) =>
                    handleDayChange(dayIndex, 'meals', {
                      ...day.meals,
                      dinner: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </StyledPaper>
        ))}

        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={addDay}>
            Add Day
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Create Itinerary
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CustomItineraryForm;
