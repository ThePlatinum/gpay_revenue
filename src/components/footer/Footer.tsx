import {
    BodyLogo,
	Copyrightbox,
	Footerbody,
	FooterBox,
	FooterChild,
	FooterContainer,
	Footerhead,
	FooterList,
	HeadBox,
	HeadBoxA,
	HeadBoxB,
	HeadchildA,
	NavButton,
	SocialBox,
	TextBox,
} from "./footer.style";
import { Link } from "react-router-dom";
import logo1 from "../../images/odirs-logo.png";
import logo2 from "../../images/GPay Logo 1.png"
import newlogo from "../../images/ondo-new-logo.png"
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";
import ellipse from "../../images/Ellipse.png"
const Footer = () => {
	return (
		<FooterBox className="footer">
			<FooterContainer>
				<FooterChild>
					<Footerhead>
						<HeadBox>
							
								<img src={logo1} alt="logo" />
								<img src={logo2} alt="gpay logo" />
							
						
						</HeadBox>
						
						<HeadBoxA>
							<FooterList>
                            <HeadchildA>
								<Typography variant="h6">Tax Information</Typography>
							</HeadchildA>
							<TextBox>
								<Link to="/">
									<Typography variant="body1">Type of tax</Typography>
								</Link>
								<Link to="/">
									<Typography variant="body1">Requirements</Typography>
								</Link>
								<Link to="/">
									<Typography variant="body1">Verify Receipt</Typography>
								</Link>
							
							</TextBox>
                            </FooterList>
							<FooterList>
                            <HeadchildA>
								<Typography variant="h6">Community</Typography>
							</HeadchildA>
							<TextBox>
								<Link to="/">
									<Typography variant="body1">Our Impact</Typography>
								</Link>
								<Link to="/">
									<Typography variant="body1">Related sites</Typography>
								</Link>
								<Link to="/">
									<Typography variant="body1">Live Events</Typography>
								</Link>
							
							</TextBox>
                            </FooterList>
							<FooterList>
                            <HeadchildA>
								<Typography variant="h6">Company</Typography>
							</HeadchildA>
							<TextBox>
								<Link to="/">
									<Typography variant="body1">About Us</Typography>
								</Link>
								<Link to="/">
									<Typography variant="body1">Contact Us</Typography>
								</Link>
								<Link to="/">
									<Typography variant="body1">History</Typography>
								</Link>
							
							</TextBox>
                            </FooterList>
						</HeadBoxA>
						<HeadBoxB>
                        <Link to="/register">
							<NavButton variant="contained" className="free">
								Register
							</NavButton>
						</Link>
                        <Link to="/login">
							<NavButton variant="outlined" className="sign">
								Log In
							</NavButton>
						</Link>
						
						</HeadBoxB>
					</Footerhead>

					<Footerbody>
						<Copyrightbox>
							<CopyrightIcon />
							<Typography variant="body1"> 2022 Ondo State Internal Revenue Service</Typography>
						</Copyrightbox>
<BodyLogo>
<img src={newlogo} alt="new-logo" />
</BodyLogo>

<SocialBox>
<Typography variant="body1">
							Follow us
                           
						</Typography>
<div style={{display: "flex"}}>
                                <img src={ellipse} alt="social" />
                                <img src={ellipse} alt="social" />
                                <img src={ellipse} alt="social" />
                                <img src={ellipse} alt="social" />
                            </div>
</SocialBox>
						
					</Footerbody>
				</FooterChild>
			</FooterContainer>
		</FooterBox>
	);
};


export default Footer;