import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ItineraryDay } from '../../types';

interface ItineraryDayCardProps {
  day: ItineraryDay;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const MealInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const ItineraryDayCard: React.FC<ItineraryDayCardProps> = ({ day }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary">
          Day {day.day}: {day.title}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {day.description}
        </Typography>

        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          Today's Activities:
        </Typography>
        <List dense>
          {day.activities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={activity}
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontSize: '0.95rem',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" gutterBottom>
          Accommodation:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {day.accommodation}
        </Typography>

        <MealInfo>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              Included Meals:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {day.meals.breakfast && (
                <Typography variant="body2" color="text.secondary">
                  Breakfast: {day.meals.breakfast}
                </Typography>
              )}
              {day.meals.lunch && (
                <Typography variant="body2" color="text.secondary">
                  Lunch: {day.meals.lunch}
                </Typography>
              )}
              {day.meals.dinner && (
                <Typography variant="body2" color="text.secondary">
                  Dinner: {day.meals.dinner}
                </Typography>
              )}
            </Box>
          </Box>
        </MealInfo>
      </CardContent>
    </StyledCard>
  );
};

export default ItineraryDayCard;
