import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
});

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  '& svg': {
    fontSize: '3rem',
    color: 'primary.main',
  },
});

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <StyledCard elevation={0}>
      <CardContent>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <Typography variant="h6" gutterBottom align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ValueCard;
