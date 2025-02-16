import { useState } from 'react';
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DragDropItineraryBuilder from './DragDropItineraryBuilder';
import { destinations } from '../../data/destinations';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

interface DestinationStop {
  destinationId: number;
  numberOfDays: number;
}

const MultiDayBuilder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [itineraryStops, setItineraryStops] = useState<DestinationStop[]>([]);
  const [selectedDestinationId, setSelectedDestinationId] = useState<number | null>(null);
  const [currentDayPlanning, setCurrentDayPlanning] = useState<number | null>(null);

  const totalDays = itineraryStops.reduce((sum, stop) => sum + stop.numberOfDays, 0);

  const handleAddDestination = (destinationId: number) => {
    setItineraryStops([...itineraryStops, { destinationId, numberOfDays: 3 }]);
    setSelectedDestinationId(null);
  };

  const handleUpdateDays = (index: number, days: number) => {
    const newStops = [...itineraryStops];
    newStops[index].numberOfDays = Math.max(1, days);
    setItineraryStops(newStops);
  };

  const handleRemoveDestination = (index: number) => {
    setItineraryStops(itineraryStops.filter((_, i) => i !== index));
  };

  const handlePlanDays = (index: number) => {
    setCurrentDayPlanning(index);
    setActiveStep(1);
  };

  const steps = ['Select Destinations & Duration', 'Plan Daily Activities'];

  return (
    <Container maxWidth="lg">
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 ? (
        <>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Your Journey ({totalDays} days total)
            </Typography>
            <Grid container spacing={3}>
              {itineraryStops.map((stop, index) => {
                const destination = destinations.find(d => d.id === stop.destinationId);
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={destination?.image}
                        alt={destination?.title}
                      />
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6">
                            {destination?.title}
                          </Typography>
                          <IconButton 
                            size="small" 
                            color="error"
                            onClick={() => handleRemoveDestination(index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Button
                            size="small"
                            onClick={() => handleUpdateDays(index, stop.numberOfDays - 1)}
                          >
                            -
                          </Button>
                          <Typography>
                            {stop.numberOfDays} days
                          </Typography>
                          <Button
                            size="small"
                            onClick={() => handleUpdateDays(index, stop.numberOfDays + 1)}
                          >
                            +
                          </Button>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={() => handlePlanDays(index)}
                          startIcon={<ArrowForwardIcon />}
                        >
                          Plan Days
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}

              {/* Add Destination Card */}
              <Grid item xs={12} md={6}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    backgroundColor: 'grey.50'
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {selectedDestinationId === null ? (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {destinations.map((destination) => (
                          <Chip
                            key={destination.id}
                            label={destination.title}
                            onClick={() => handleAddDestination(destination.id)}
                            icon={<AddIcon />}
                            clickable
                          />
                        ))}
                      </Box>
                    ) : (
                      <Typography variant="body1">
                        Select number of days for {destinations.find(d => d.id === selectedDestinationId)?.title}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </StyledPaper>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              disabled={itineraryStops.length === 0}
              onClick={() => setActiveStep(1)}
            >
              Continue to Daily Planning
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <Button onClick={() => setActiveStep(0)}>
              Back to Destination Selection
            </Button>
          </Box>
          
          {currentDayPlanning !== null && (
            <DragDropItineraryBuilder
              destinationId={itineraryStops[currentDayPlanning].destinationId}
              numberOfDays={itineraryStops[currentDayPlanning].numberOfDays}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default MultiDayBuilder;
