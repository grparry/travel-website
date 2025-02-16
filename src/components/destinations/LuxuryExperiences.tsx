import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LuxuryExperience } from '../../types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SellIcon from '@mui/icons-material/Sell';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  }
}));

interface LuxuryExperiencesProps {
  experiences: LuxuryExperience[];
}

const LuxuryExperiences: React.FC<LuxuryExperiencesProps> = ({ experiences }) => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            textAlign: 'center',
          }}
        >
          Exclusive Experiences
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
            fontWeight: 300,
          }}
        >
          Curated luxury experiences designed for the discerning traveler
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((experience) => (
            <Grid item xs={12} md={6} key={experience.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={experience.image}
                  alt={experience.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom component="div">
                    {experience.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {experience.description}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {experience.duration}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <SellIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {experience.price}
                      </Typography>
                    </Stack>
                  </Stack>

                  {experience.highlights && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {experience.highlights.map((highlight, index) => (
                        <Chip
                          key={index}
                          label={highlight}
                          size="small"
                          sx={{ bgcolor: 'secondary.light' }}
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LuxuryExperiences;
