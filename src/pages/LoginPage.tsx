import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Container,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";

import {} from "@mui/material/styles";

import Paper from "@mui/material/Paper";

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={8} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            textAlign: "center",
            mb: 1,
            backgroundColor: "secondary.main",
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" component="h1" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter your Email"
            type="email"
            fullWidth
            autoFocus
            required
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter your Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </Box>
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 1 }}>
          Login
        </Button>
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid size={6}>
            <Link component={RouterLink} to="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid size={6}>
            <Link component={RouterLink} to="#" variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
