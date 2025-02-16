import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ValueCard from '../components/about/ValueCard';
import ContactSection from '../components/about/ContactSection';
import PageTransition from '../components/utils/PageTransition';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)({
  background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
});

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const ImageSection = styled(Box)({
  background: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  borderRadius: '4px',
});

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <DiamondIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Luxury Experience',
      description: 'We curate only the finest luxury experiences, ensuring every moment of your journey is extraordinary.',
    },
    {
      icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Excellence in Service',
      description: 'Our dedicated team of travel experts provides personalized service to exceed your expectations.',
    },
    {
      icon: <HandshakeIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Trusted Partnerships',
      description: 'We partner with the world\'s most prestigious hotels and service providers to deliver unparalleled quality.',
    },
  ];

  return (
    <PageTransition>
      <Box>
        <HeroSection>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: 'Playfair Display',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Crafting Extraordinary Journeys
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              Experience the world's most exclusive destinations with unparalleled luxury and personalized service
            </Typography>
          </Container>
        </HeroSection>

        <Section>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom fontFamily="Playfair Display">
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph>
                  For over a decade, we have been crafting extraordinary journeys for discerning travelers who seek the exceptional. Our passion for luxury travel is matched only by our commitment to providing unparalleled experiences.
                </Typography>
                <Typography variant="body1" paragraph>
                  We believe that true luxury lies not just in five-star accommodations and fine dining, but in the curation of moments that take your breath away. From private yacht charters in the Mediterranean to helicopter skiing in the Swiss Alps, we transform travel dreams into reality.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/itineraries')}
                  sx={{ mt: 2 }}
                >
                  Explore Our Journeys
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageSection />
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section sx={{ backgroundColor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              fontFamily="Playfair Display"
            >
              Our Values
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}
            >
              We are committed to delivering exceptional experiences through our core values
            </Typography>
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <ValueCard {...value} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} md={6}>
                <ImageSection
                  sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3)',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom fontFamily="Playfair Display">
                  Our Commitment
                </Typography>
                <Typography variant="body1" paragraph>
                  We understand that luxury travel is more than just a vacation—it's an investment in unforgettable experiences. Our commitment to excellence ensures that every aspect of your journey is meticulously planned and flawlessly executed.
                </Typography>
                <Typography variant="body1" paragraph>
                  From the moment you begin planning with us until your return home, our dedicated team is available 24/7 to ensure your journey exceeds every expectation.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/destinations/1')}
                  sx={{ mt: 2 }}
                >
                  Discover Destinations
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <ContactSection />
      </Box>
    </PageTransition>
  );
};

export default AboutPage;
