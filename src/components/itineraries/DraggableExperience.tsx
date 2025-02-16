import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LuxuryExperience, Accommodation } from '../../types';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  cursor: 'grab',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
  '&:active': {
    cursor: 'grabbing',
  },
}));

interface DraggableExperienceProps {
  experience: LuxuryExperience | Accommodation;
}

const DraggableExperience = ({ experience }: DraggableExperienceProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: experience.id.toString(),
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  const isAccommodation = 'priceRange' in experience;

  return (
    <StyledPaper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Typography variant="subtitle1" gutterBottom>
        {isAccommodation ? experience.name : experience.title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {isAccommodation ? experience.priceRange : experience.duration}
        </Typography>
        <Typography variant="body2" color="primary">
          {isAccommodation ? '🏨' : '🎯'}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default DraggableExperience;
