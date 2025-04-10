import {  Link as RouterLink } from "react-router-dom";
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
  Alert,
  
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useMutation} from '@tanstack/react-query'
 import {useState,} from 'react'
import { LockOutlined, } from "@mui/icons-material";

import {} from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import axios from "axios";



const LoginPage = () => {
  const[identifier,setIdentifier]=useState('')
  const[password,setPassword]=useState('')
  const [formError, setFormError]= useState("");
  const navigate = useNavigate();
  
  

 const { isPending, mutate} =  useMutation({
    mutationKey:["User-login"],
    mutationFn: async()=>{
      const response= await  axios.post(`http://localhost:3000/auth/login`, {identifier,password},{withCredentials:true})
      console.log(response.data)     
       
    },

    onSuccess: () => {
      navigate("/home");
    },

    onError:(error)=>{
      if(axios.isAxiosError(error)){
        const serverMessage= error.response?.data.message;
        setFormError(serverMessage);
      }else{
        setFormError("An error occurred");
      }
    }

  })

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    setFormError("");
    e.preventDefault();  
    
    mutate();
  
  };
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
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          {
            formError && <Alert severity="error" sx={{mb:2}}>{formError}</Alert>
          }
          <TextField
            placeholder="Enter your Email"
            type="email"
            fullWidth
            autoFocus
            required
            sx={{ mb: 2 }}
            value={identifier}            
            onChange={(e) => setIdentifier(e.target.value)}
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 1 }} disabled={isPending} >
          {
            isPending ? "Loading.Please wait...." : "Login"
          }
        </Button>
        </Box>
        
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid size={6}>
            <Link component={RouterLink} to="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid size={6}>
            <Link component={RouterLink} to="/signup" variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
