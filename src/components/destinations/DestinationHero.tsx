import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Destination } from '../../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeroContainer = styled(Box)(() => ({
  height: '70vh',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-end',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
  }
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  color: 'white',
  paddingBottom: theme.spacing(6),
}));

interface DestinationHeroProps {
  destination: Destination;
}

const DestinationHero: React.FC<DestinationHeroProps> = ({ destination }) => {
  return (
    <HeroContainer sx={{ backgroundImage: `url(${destination.image})` }}>
      <ContentContainer maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {destination.title}
        </Typography>
        
        {destination.location && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
            <LocationOnIcon />
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              {destination.location.region}, {destination.location.country}
            </Typography>
          </Stack>
        )}

        <Typography
          variant="h5"
          sx={{
            maxWidth: '800px',
            mb: 3,
            fontWeight: 300,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          {destination.longDescription || destination.description}
        </Typography>

        {destination.highlights && (
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {destination.highlights.map((highlight, index) => (
              <Chip
                key={index}
                label={highlight}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.3)',
                  }
                }}
              />
            ))}
          </Stack>
        )}
      </ContentContainer>
    </HeroContainer>
  );
};

export default DestinationHero;
