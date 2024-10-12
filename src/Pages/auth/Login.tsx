import { useState } from 'react';
import {
  Avatar, Button, TextField, Link, Grid, Box, Typography, Container, CssBaseline,
  InputAdornment, IconButton, Paper, Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de login
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, position: 'relative' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mx: 'auto' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" textAlign="center" color="primary" gutterBottom>
            Sign in
          </Typography>

          <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="#" variant="body2" color="primary">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="primary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Divider sx={{ my: 2 }}>Or Sign In With</Divider>

            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <IconButton color="inherit">
                  <GoogleIcon style={{ color: '#DB4437' }} />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
