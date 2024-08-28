// app/page.tsx
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Head from "next/head";
import StyledSignInButton from './components/SignInStyledButton'; // Adjust path as needed

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>FlashAce</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            FlashACE
          </Typography>
          <SignedOut>
            <StyledSignInButton>Login</StyledSignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to FlashAce
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <SignedIn>
          <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/cardPage">
            Get Started
          </Button>
        </SignedIn>
        <SignedOut>
          <Button
            variant="outlined"
            color="primary"
            sx={{ mt: 2, pointerEvents: 'none', opacity: 0.5 }}
          >
            Login to start
          </Button>
        </SignedOut>
      </Box>

      

      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 4,
                border: '1px solid #ddd',
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom>
                Free Plan
              </Typography>
              <Typography variant="body1" gutterBottom>
                - No storage<br />
                - Basic Features
              </Typography>
              {/* Disabled button for Free Plan */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 4,
                border: '1px solid #ddd',
                borderRadius: 2,
                textAlign: 'center',
                opacity: 0.6,
                pointerEvents: 'none'
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom>
                Paid Plan
              </Typography>
              <Typography variant="body1" gutterBottom>
                - Advanced Features<br />
              </Typography>
              <Button variant="outlined" color="secondary">
                Coming Soon
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
