import { AppBar, Tabs,Tab, Toolbar, Button } from "@mui/material"
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar>
        <Toolbar>
            <AddHomeIcon fontSize="large" />
            <Tabs sx={{ alignItems: "center", marginLeft: "20px" }}>
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Contact" />
                <Tab label="About Us" />

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
