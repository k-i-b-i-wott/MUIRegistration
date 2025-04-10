import {LockOpen } from "@mui/icons-material";
import {useState} from "react";
import { Avatar,Link, Box, Button, Container, Grid, Paper, TextField, Typography, FormControlLabel,Checkbox, Alert} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import{useMutation} from '@tanstack/react-query';
import axios from  "axios"
 import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError]= useState("");
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  const{isPending,mutate}= useMutation({
    mutationKey:["register-user"],
    mutationFn: async()=>{
    const response= await  axios.post(`http://localhost:3000/auth/register`, {firstName,lastName,emailAddress:email,userName:username,password},)
      return response.data;

      
    },
    onSuccess: () => {
      navigate("/login");      
    },
    onError: (error) => {
      if(axios.isAxiosError(error)){
        const serverMessage= error.response?.data.message;
        setFormError(serverMessage);

      }else{
        setFormError("An error occurred");
      }
    },

  })



  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    if(password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    if(!firstName || !lastName || !username || !email || !password) {
      setFormError("Please fill all fields");
      return;
    }  
    if(!email.includes("@")) {
      setFormError("Please enter a valid email");
      return;
    }

    mutate();

  }

  
  return (
    <Container maxWidth="xs" sx={{mt: 4, gap: 3}}>
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
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleRegister}>
          {formError && (<Alert severity="error" sx={{ mb: 2 }}>{formError}</Alert>)}
          <TextField 
            placeholder="Enter firstName"
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 2 }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}          
          />
          <TextField
            placeholder="Enter lastName"
            type="text"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            placeholder="Enter your Username"
            type="text"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            placeholder="Enter your Email"
            type="email"
            fullWidth
            required
            typeof="email"
            sx={{ mb: 2 }}  
            value={email}
            onChange={(e) => setEmail(e.target.value)}          
          />
          <TextField
            placeholder="Enter your Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            placeholder="Confirm your Password"
            fullWidth
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            disabled={isPending}
          >
            {
              isPending ? "Please wait..." : "Register"
            }
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
