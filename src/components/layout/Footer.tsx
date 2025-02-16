import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(8, 0),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  cursor: 'pointer',
});

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontFamily="Playfair Display">
              Luxury Travel
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 300, mb: 2 }}>
              Experience the world's most exclusive destinations with our curated luxury travel experiences.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Explore
            </Typography>
            <Stack spacing={1}>
              <FooterLink onClick={() => navigate('/destinations/1')}>
                Destinations
              </FooterLink>
              <FooterLink onClick={() => navigate('/itineraries')}>
                Itineraries
              </FooterLink>
              <FooterLink onClick={() => navigate('/about')}>
                About Us
              </FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Featured Destinations
            </Typography>
            <Stack spacing={1}>
              <FooterLink onClick={() => navigate('/destinations/1')}>
                Maldives
              </FooterLink>
              <FooterLink onClick={() => navigate('/destinations/2')}>
                Swiss Alps
              </FooterLink>
              <FooterLink onClick={() => navigate('/destinations/3')}>
                Amalfi Coast
              </FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                Email: contact@luxurytravel.com
              </Typography>
              <Typography variant="body2">
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography variant="body2">
                Hours: Mon-Fri 9am-6pm EST
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="rgba(255,255,255,0.7)">
            © {currentYear} Luxury Travel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
