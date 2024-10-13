import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Register = () => {

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Card
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            boxShadow: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <CardContent sx={{ width: '100%' }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="name"
                    label="Your name"
                    name="name"
                    autoComplete="name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Your email"
                    name="email"
                    autoComplete="email"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="confirm-password"
                    label="Confirm password"
                    type="password"
                    id="confirm-password"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label={
                      <Typography variant="body2" color="text.secondary">
                        I accept the{' '}
                        <Link to="/">
                          Terms and Conditions
                        </Link>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create an account
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/Login">
                    Already have an account? Login here
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
