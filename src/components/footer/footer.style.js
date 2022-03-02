import styled from "styled-components";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export const FooterBox = styled(Box)`
	width: 100%;
	height: 419.14px;
	position: relative;
	background-color: #002E47;;
	z-index: 1;
	overflow: hidden;
	@media only screen and (min-width: 1600px) {
		height: 55vh;
	}
	@media only screen and (max-width: 768px) {
		height: 50vh;
	}
	@media only screen and (max-width: 580px) {
		height: 64vh;
	}
	@media only screen and (max-width: 480px) {
		height: 85vh;
	}
	@media only screen and (max-width: 380px) {
		height: 90vh;
	}
`;
export const FooterContainer = styled(Box)`
	width: 90%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	@media only screen and (max-width: 786px) {
		width: 95%;
	}
	@media only screen and (max-width: 480px) {
		width: 95%;
	}
`;
export const FooterChild = styled(Box)`
	width: 100%;
	position: absolute;
	margin: 2rem auto;
	@media only screen and (max-width: 480px) {
		width: 100%;
		margin: 0 auto;
	}
`;

export const Footerhead = styled(Box)`
	width: 100%;
	margin: 3rem auto;
	padding: 0 0 2.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	border-bottom: 2px solid grey;
	@media only screen and (max-width: 768px) {
		margin: 3rem auto 1rem;
	}
	@media only screen and (max-width: 480px) {
		width: 95%;
		margin: 1.5rem auto;
	}
`;
export const HeadBox = styled(Box)`
	width: 35%;
    display: flex;
    align-items: center;
	@media only screen and (min-width: 769px) and (max-width: 960px){
		width:30%;
		img {
			width: 50%;
		}
	}
	@media only screen and (max-width: 768px) {
		width: 32%;
	img {
		width: 45%;
	}
	}
	@media only screen and (max-width: 480px) {
		width: 75%;
		
	}
	@media only screen and (max-width: 580px) {
		width: 39%;
		
	}
`;
export const HeadBoxA = styled(Box)`
	width: 40%;
    display: flex;
    align-items: center;
	@media only screen and (min-width: 769px) and (max-width: 960px){
		width: 45%;
	}
	@media only screen and (max-width: 768px) {
		width: 45%;
		justify-content: space-between;
		align-items: flex-start;
		
	}
	@media only screen and (max-width: 580px) {
		width: 55%;
		
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	justify-content: space-between;
	}
`;

export const FooterList = styled(Box)`
width: 30%;
@media only screen and (max-width: 768px){
	
}
`
export const HeadBoxB = styled(Box)`
	width: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        width: 85%;
		text-decoration: none;
		.MuiButtonBase-root.MuiButton-root {
			font-size: 15px;
            width: 95%;
            border-radius: 6px;
            font-family: 'Montserrat', sans-serif;
			font-weight: 500;
		}
        .MuiButton-root.MuiButton-outlined {
            border: 1px solid #E87615;
            color: #E87615;
            background-color: #fff;
           
            &:hover {
				color: #ffffff;
                background-color: #E87615;
			}
        }
        .MuiButton-root.MuiButton-contained {
            background-color: #E87615;
            color: #FFFFFF;
            margin-bottom: 1rem;
            &:hover {
				background-color: #ffffff;
                color: #E87615;
                border: 1px solid #E87615;
			}
        }
		
	}
	@media only screen and (min-width: 769px) and (max-width: 960px){
		width: 17%;
	}
	@media only screen and (max-width: 768px) {
		width: 20%;
		&:first-of-type {
			width: 35%;
		}
	}
	@media only screen and (max-width: 575px) {
		margin-top: 1.5rem;
		flex-direction: row;
		align-items: center;
		width: 100%;
		a{
			.MuiButton-root.MuiButton-contained{
				margin-bottom: 0;
			}
		}
		
	}
`;
export const NavButton = styled(Button)`
	outline: none;
	border: none;
	border-radius: 4px;
	
`;
export const HeadchildA = styled(Box)`
	width: 80%;
	display: flex;
	justify-content: space-betweeen;
	align-items: center;
	margin: 0.5rem 0 1rem;
	img {
		height: 3.5rem;
	}
	.MuiTypography-root.MuiTypography-h4 {
		font-weight: 600;
		color: #fff;
		font-size: 2.2rem;
	}
	.MuiTypography-root.MuiTypography-h6 {
        font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		color: #fff;
		font-size: 12.8571px;
        line-height: 21px;
	}
	@media only screen and (min-width: 769px) and (max-width: 960px){
		min-height: 2rem;
	}
	@media only screen and (max-width: 768px) {
		min-height: 3rem;
		.MuiTypography-root.MuiTypography-h4 {
			font-size: 2rem;
		}
	}
	@media only screen and (min-width: 769px) and (max-width: 1200px) {
		img {
			height: 3rem;
		}
		.MuiTypography-root.MuiTypography-h4 {
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 480px) {
		align-items: flex-start;
		margin-top: 2rem;
		min-height: 3rem;
		.MuiTypography-root.MuiTypography-h4 {
			font-size: 2rem;
		}
	}
`;

export const HeadchildB = styled(Box)`
	width: 30%;
	display: flex;
	justify-content: space-between;
	color: #757575;
	a {
		width: 27%;
		color: #757575;

		&:hover {
			text-decoration: underline;
		}
		svg {
			width: 100%;
			height: 2.5rem;
			&:nth-of-type(2) {
				width: 23%;
				height: 2.8rem;
				margin-top: -0.2rem;
			}
		}
	}

	@media only screen and (min-width: 769px) and (max-width: 1200px) {
		width: 29%;
		justify-content: space-between;
		a {
			width: 34%;
			svg {
				width: 100%;
				&:nth-of-type(2) {
					width: 24%;
					margin-top: -0.2rem;
				}
			}
		}
	}
	@media only screen and (max-width: 768px) {
		width: 45%;
		justify-content: space-between;
		a {
			width: 27%;
			svg {
				width: 100%
				&:nth-of-type(2) {
					width: 95%;
					margin-top: -0.2rem;
				}
			}
		}
	}
	@media only screen and (max-width: 480px) {
		margin: 0.5rem 0;
		width: 50%;
		justify-content: space-between;
		a{
			width: 29%;
			svg {
			width: 95%;
			height: 2rem;
			&:nth-of-type(2) {
				width: 100%;
				height: 2.5rem;
				margin-top: -0.2rem;
			}
		}
		}
	}
`;

export const TextBox = styled(Box)`
	width: 100%;
	margin: 0 auto;

	text-align: start;
	.MuiTypography-root {
		font-size: 12.8571px;
line-height: 21px;
color: rgba(255, 255, 255, 0.85);
line-height: 21px;

	}
	.MuiTypography-root.MuiTypography-body1 {
	}
	.MuiTypography-root.MuiTypography-body2 {
		font-size: 1rem;
	}
	a {
		width: 100%;
		color: #3a466d;
		font-size: 1.2rem;
		font-weight: 550;
		margin: 1rem 0;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Footerbody = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 1.5rem auto 2.9rem;
	.MuiTypography-root {
		color: #757575;
	}
	@media only screen and (max-width: 1220px) {
		margin: 2rem auto;
	}
	@media only screen and (max-width: 768px) {
		margin: 1.5rem auto;
	}
	@media only screen and (max-width: 480px) {
		width: 95%;
		flex-direction: column-reverse;
		flex-wrap: wrap;
		.MuiTypography-root.MuiTypography-body1 {
			font-size: 0.75rem;
		}
	}
`;

export const Copyrightbox = styled(Box)`
	width: 25%;
	display: flex;
	align-items: center;
	color: #757575;

	.MuiTypography-root {
		color: #757575;
	}
	@media only screen and (min-width: 1064px) and (max-width: 1489px){
		width:35%;
	}
	@media only screen and (min-width: 769px) and (max-width: 1063px){
		width:39%;
		.MuiTypography-root{
			font-size: 0.8rem;
		}
	}
	@media only screen and (max-width: 768px) {
		width: 42%;
		.MuiTypography-root{
			font-size: 0.8rem;
		}
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
		justify-content: center;
		margin-top: 1rem;
	}
`;

export const BodyLogo = styled(Box)`
width: 25%;
text-align: start;
@media only screen and (max-width: 768px){
	width: 22%;
	img {
		width: 100%;
	}
}
@media only screen and (max-width: 480px) {
	width: 80%;
	text-align: center;
	margin-top: 1rem;
}
`

export const SocialBox = styled(Box)`
width: 30%;
display: flex;
align-items: center;
justify-content: flex-end;
div {
    width: 60%;
    display: flex;
    justify-content: space-around;
}
@media only screen and (min-width: 769px) and (max-width: 1063px){
	width: 35%;
	img {
		width: 17%;
	}
}
@media only screen and (max-width: 768px){
	width: 35%;
	img {
		width: 15%;
	}
}
@media only screen and (max-width: 480px) {
	width: 100%;
	justify-content: center;
}
`