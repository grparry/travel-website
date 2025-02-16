import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  zIndex: 2,
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <StyledToolbar>
          <Button
            color="inherit"
            onClick={() => navigate('/')}
            sx={{ 
              fontSize: '1.2rem',
              fontFamily: 'Playfair Display',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Luxury Travel
          </Button>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => navigate('/destinations/1')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Destinations
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/itineraries')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Itineraries
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/itineraries/create')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Create Itinerary
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/about')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              About
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navigation;
