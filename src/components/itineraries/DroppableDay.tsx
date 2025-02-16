import { useDroppable } from '@dnd-kit/core';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LuxuryExperience, Accommodation } from '../../types';

const StyledPaper = styled(Paper)<{ isOver?: boolean }>(({ theme, isOver }) => ({
  padding: theme.spacing(2),
  backgroundColor: isOver ? theme.palette.grey[100] : theme.palette.background.paper,
  transition: 'background-color 0.2s ease',
  minHeight: 100,
}));

interface DayPlan {
  id: string;
  title: string;
  items: (LuxuryExperience | Accommodation)[];
}

interface DroppableDayProps {
  day: DayPlan;
}

const DroppableDay = ({ day }: DroppableDayProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: day.id,
  });

  const isAccommodation = (item: LuxuryExperience | Accommodation): item is Accommodation => {
    return 'priceRange' in item;
  };

  return (
    <StyledPaper ref={setNodeRef} isOver={isOver}>
      <Typography variant="h6" gutterBottom>
        {day.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {day.items.map((item) => (
          <Paper key={item.id} sx={{ p: 1 }}>
            <Typography variant="subtitle1">
              {isAccommodation(item) ? item.name : item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isAccommodation(item) ? item.priceRange : item.duration}
            </Typography>
          </Paper>
        ))}
        {day.items.length === 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
            Drop experiences or accommodations here
          </Typography>
        )}
      </Box>
    </StyledPaper>
  );
};

export default DroppableDay;
