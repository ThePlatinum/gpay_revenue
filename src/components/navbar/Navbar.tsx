import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import {
	ButtonBoxA,
	ButtonBoxB,
	MenuBar,
	MenuBox,
	MenuLogo,
	MenuLogoBox,
	MenuToolBar,
	NavButton,
} from "./navbar.style";
import Logo from "../../assets/irs2_logo 1.png";


export default function PrimarySearchAppBar() {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
	// const [backgroundColor, setBackgroundColor] = useState(false);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	// const changeNavbarColor = () => {
	// 	if (window.scrollY >= 80) {
	// 		setBackgroundColor(true);
	// 	} else {
	// 		setBackgroundColor(false);
	// 	}
	// };
	// window.addEventListener("scroll", changeNavbarColor);
	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<Link to="/why">
					<NavButton variant="text">Why Flexiblebase</NavButton>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/features">
					<NavButton variant="text">Features</NavButton>
				</Link>
			</MenuItem>
			<MenuItem>
				<NavButton
					variant="text"
					id="basic-button"
					aria-controls="basic-menu"
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
					className="resources"
				>
					Resources
					<KeyboardArrowDownIcon
						style={{ color: "black", fontWeight: "300" }}
					/>
				</NavButton>
			</MenuItem>
			<MenuItem>
				<Link to="/pricing">
					<NavButton variant="text">Pricing</NavButton>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/about">
					<NavButton variant="text">About</NavButton>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/signin">
					<NavButton variant="text" className="sign">
						Sign In
					</NavButton>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/">
					<NavButton variant="text" className="sign">
						Try for free
					</NavButton>
				</Link>
			</MenuItem>
		</Menu>
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
						<Link to="/signin">
							<NavButton variant="outlined" className="sign">
								Log In
							</NavButton>
						</Link>
						<Link to="/">
							<NavButton variant="contained" className="free">
								Register
							</NavButton>
						</Link>
					</ButtonBoxB>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleClose}>
							{/* <a href={`${pdf}`} type="application/pdf" download="flexiblebase">
								Feature list brochure
							</a> */}
						</MenuItem>
						{/* <MenuItem onClick={handleClose}>
							<Link to="/resources">SQL Resources</Link>
						</MenuItem> */}
						<MenuItem onClick={handleClose}>
							<Link to="/blog">Blog</Link>
						</MenuItem>
					</Menu>
					<Box
						sx={{ display: { xs: "flex", md: "none" } }}
						style={{ marginRight: "2rem", width: "15%" }}
					>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
						>
							<MoreIcon fontSize="large" />
						</IconButton>
					</Box>
				</MenuToolBar>
			</MenuBar>
			{renderMobileMenu}
		</MenuBox>
	);
}
