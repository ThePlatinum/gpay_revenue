import { ButtonBox, Child, ChildBox, Container, Extra } from "./signin.style";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logo from "../../images/odirs-logo.png";
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <Container>
      <Navbar />
      <Child>
        <ChildBox>
          <img src={logo} alt="odirs logo" />
          <ButtonBox>
            <Button variant="contained">Personal</Button>
            <Button variant="contained">Agent</Button>
          </ButtonBox>
          <TextField id="outlined-basic" label="Enter your TIN" variant="outlined" type="text" />
          <TextField id="outlined-basic" label="Enter your email" variant="outlined" type="email" />
          <TextField id="outlined-basic" label="Enter your password" variant="outlined" type="password" />
          <Button variant="contained">Log in here</Button>
          <Link to="/">Forgot password</Link>
          <Extra>
            <Typography variant="body2">Don’t have an account? </Typography>
            <Link to="/register">Register here</Link>
          </Extra>
        </ChildBox>
      </Child>
      <Footer />
    </Container>
  );
};

export default Signin;
