import {LockOpen } from "@mui/icons-material";
import { Avatar,Link, Box, Button, Container, Grid, Paper, TextField, Typography, FormControlLabel,Checkbox} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import LoginPage from "./LoginPage";

const SignUpPage = () => {
  return (
    <Container maxWidth="xs">
      <Paper
        elevation={10}
        sx={{ marginTop: 8, padding: 2 }}
      >
        <Avatar  sx={{
            mx: "auto",
            textAlign: "center",
            mb: 1,
            backgroundColor: "secondary.main",
          }}>
            <LockOpen />
        </Avatar>

        <Typography variant="h5" component="h1" sx={{ textAlign: "center" }}>
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField 
            placeholder="Enter your Name"
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 2 }}
          
          />

          <TextField
            placeholder="Enter your Email"
            type="email"
            fullWidth
            required
            typeof="email"
            sx={{ mb: 2 }}            
          />
          <TextField
            placeholder="Enter your Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Confirm your Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox value="agree" color="primary" />}
            label="I agree to terms and conditions" required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
          >
            Sign Up
          </Button>
          

          
        </Box>
        <Grid container sx={{ mt: 2 }}>   
            <Grid size={12} sx={{ textAlign: "center" }}>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{ textAlign: "center" }}
              >
                Already have an account? Sign In
              </Link>        

          </Grid>
          </Grid>
        </Paper>
    </Container>
  );
};

export default SignUpPage;
