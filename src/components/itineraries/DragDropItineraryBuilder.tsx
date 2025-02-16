import { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { destinations, luxuryExperiences, accommodations } from '../../data/destinations';
import DraggableExperience from './DraggableExperience';
import DroppableDay from './DroppableDay';
import { LuxuryExperience, Accommodation } from '../../types';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  overflowY: 'auto',
}));

interface DayPlan {
  id: string;
  title: string;
  items: (LuxuryExperience | Accommodation)[];
}

interface DragDropItineraryBuilderProps {
  destinationId: number;
  numberOfDays: number;
}

const DragDropItineraryBuilder = ({ destinationId, numberOfDays }: DragDropItineraryBuilderProps) => {
  const [days, setDays] = useState<DayPlan[]>([]);

  useEffect(() => {
    // Initialize days based on numberOfDays prop
    const initialDays = Array.from({ length: numberOfDays }, (_, index) => ({
      id: `day-${index + 1}`,
      title: `Day ${index + 1}`,
      items: [],
    }));
    setDays(initialDays);
  }, [numberOfDays]);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const handleDragStart = () => {
    // We'll keep track of the dragging in the DroppableDay component
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const activeDay = days.find(day => 
        day.items.some(item => item.id.toString() === active.id)
      );
      const overDay = days.find(day => day.id === over.id);

      if (activeDay && overDay) {
        const oldIndex = activeDay.items.findIndex(
          item => item.id.toString() === active.id
        );
        const newDay = [...days];
        const item = activeDay.items[oldIndex];
        
        // Remove from old day
        activeDay.items.splice(oldIndex, 1);
        
        // Add to new day
        overDay.items.push(item);
        
        setDays(newDay);
      }
    }
  };

  const destination = destinations.find(d => d.id === destinationId);
  const availableExperiences = luxuryExperiences[destinationId] || [];
  const availableAccommodations = accommodations[destinationId] || [];

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Planning: {destination?.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Available Experiences
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {availableExperiences.map((experience) => (
                <DraggableExperience
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Available Accommodations
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {availableAccommodations.map((accommodation) => (
                <DraggableExperience
                  key={accommodation.id}
                  experience={accommodation}
                />
              ))}
            </Box>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={8}>
          <StyledPaper>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {days.map((day) => (
                  <DroppableDay
                    key={day.id}
                    day={day}
                  />
                ))}
              </Box>
            </DndContext>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DragDropItineraryBuilder;
