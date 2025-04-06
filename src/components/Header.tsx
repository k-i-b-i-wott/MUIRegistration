import { AppBar, Tabs,Tab, Toolbar, Button } from "@mui/material"
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Link } from "react-router-dom";
import { useState, SyntheticEvent } from "react";



const Header = () => {
  const [value,setValue]= useState('home')
  // const handleChange = (event: SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <AppBar sx={{b:3}}>
        <Toolbar>
            <AddHomeIcon fontSize="large" />
            <Tabs value={value} indicatorColor="secondary" textColor="inherit"  onChange={(e,newValue) => setValue(newValue )} sx={{ alignItems: "center", marginLeft: "20px" }}>
                <Tab  value= "home" label="Home" />
                
                <Tab  value= "contact" label="Contact" />
                <Tab  value= "about" label="About Us" />

            </Tabs>
            <Button variant="contained" color="secondary" sx={{ marginLeft: "auto" }} component={Link} to="/login">
                Login
            </Button>
            <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }} component={Link} to="/signup">
                Sign Up
            </Button>
       </Toolbar>

    </AppBar>
  )
}

export default Header
