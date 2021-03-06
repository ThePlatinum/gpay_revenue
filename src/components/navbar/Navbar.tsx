import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import {
	ButtonBoxA,
	ButtonBoxB,
	MenuBar,
	MenuBox,
	MenuLogoBox,
	MenuToolBar,
	NavButton,
} from "./navbar.style";
import Logo from "../../images/irs2_logo 1.png";

type Anchor =  'left'
export default function PrimarySearchAppBar() {
	
	const [state, setState] = useState({
		left: false,
	  });

	  const toggleDrawer =
	  (anchor: Anchor, open: boolean) =>
	  (event: React.MouseEvent) => {
		
		setState({ ...state, [anchor]: open });
	  };
	
	
	// const changeNavbarColor = () => {
	// 	if (window.scrollY >= 80) {
	// 		setBackgroundColor(true);
	// 	} else {
	// 		setBackgroundColor(false);
	// 	}
	// };
	// window.addEventListener("scroll", changeNavbarColor);
	
	const list = (anchor: Anchor) => (
		<Box
		  role="presentation"
		  onClick={toggleDrawer(anchor, false)}
		>
		  <List>
			
			  <ListItem>
				
				<ListItemText primary="Tax Information" />
			
			  </ListItem>
			  <ListItem>
				
				<ListItemText primary="Support" />
			
			  </ListItem>
			  <ListItem>
				
				<ListItemText primary="FAQ" />
			
			  </ListItem>
			  <ListItem>
				
				<ListItemText primary="About Us" />
			
			  </ListItem>
			<ListItem>
			<Link to="/login">
							<NavButton variant="outlined" className="sign">
								Log In
							</NavButton>
						</Link>
					
			</ListItem>
			<ListItem>
			<Link to="/register">
							<NavButton variant="contained" className="free">
								Register
							</NavButton>
						</Link>
			</ListItem>
		  </List>
		 
		</Box>
	  );
	

	return (
		<MenuBox sx={{ flexGrow: 1 }} className="colorChange">
			<MenuBar>
				<MenuToolBar>
					<MenuLogoBox>
						<Link to="/">
							<img src={Logo} alt="logo" />
							
						</Link>
					</MenuLogoBox>

					<ButtonBoxA sx={{ display: { xs: "none", md: "flex" } }}>
						<Link to="/why">
							<NavButton variant="text">Tax Information</NavButton>
						</Link>

						<Link to="/features">
							<NavButton variant="text">Support</NavButton>
						</Link>

						

						<Link to="/pricing">
							<NavButton variant="text">FAQ</NavButton>
						</Link>

						<Link to="/about">
							<NavButton variant="text">About Us</NavButton>
						</Link>
					</ButtonBoxA>
					<ButtonBoxB sx={{ display: { xs: "none", md: "flex" } }}>
						<Link to="/login">
							<NavButton variant="outlined" className="sign">
								Log In
							</NavButton>
						</Link>
						<Link to="/register">
							<NavButton variant="contained" className="free">
								Register
							</NavButton>
						</Link>
					</ButtonBoxB>
				
					<Box
						sx={{ display: { xs: "flex", md: "none" } }}
						style={{ marginRight: "1rem", width: "15%",  }}
						className ="menu-div"
					>
						 <>
      {(['left',] as const).map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
			  <MenuIcon style={{color: "rgb(232,118,21)"}} />
			  </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </>
					</Box>
				</MenuToolBar>
			</MenuBar>
			
		</MenuBox>
	);
}
