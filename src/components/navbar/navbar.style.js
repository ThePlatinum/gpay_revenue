import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";

export const MenuBox = styled(Box)`
	width: 90%;
	height: 11vh;
	margin: 0 auto;
	padding: 0;
	top: 0;
	z-index: 5;
	box-shadow: none;

	.MuiPaper-root.MuiAppBar-root {
		background-color: white !important;
		box-shadow: 0px 5px 10px -10px #111;

		padding: 0.5rem 5rem;
		position: fixed;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media only screen and (max-width: 1240px) and (min-width:900px) {
		width: 90%;
		.MuiPaper-root.MuiAppBar-root{
			padding: 0.5rem 2.5rem;
		}
	}
	@media only screen and (max-width: 768px) {
		width: 95%;
		.MuiPaper-root.MuiAppBar-root{
			padding: 0.5rem 1.5rem;
		}
	}
	@media only screen and (max-width: 480px) {
		height: 15vh;
		.MuiPaper-root.MuiAppBar-root {
			padding: 1.5rem 0 0;
		}
	}
`;
export const MenuBar = styled(AppBar)`
	width: 100%;
	color: #000000;
`;

export const MenuToolBar = styled(Toolbar)`
	display: flex;
	width: 100%;
	margin: 0 auto;
	padding: 0;
	justify-content: space-between;
	.MuiTypography-root {
		color: #000000;
		@media only screen and(max-width: 480px) {
			font-size: 2.5rem;
		}
	}
	.MuiButtonBase-root.MuiButton-root {
		text-transform: none;
		color: #9e9e9e;
		font-weight: 600;
	}
	@media only screen and (max-width: 1240px) and (min-width:900px){
		padding: 0 !important;
	}
	@media only screen and (max-width: 768px) {
		width: 100%;
		padding: 0;
		.menu-div {
			width: unset !important;
		}
	}
	@media only screen and (min-width: 769px) {
		width: 100%;
	}
	@media only screen and (min-width: 480px) {
		padding: 0;
		padding-left: 0.8rem;
	
		
	}
	@media only screen and (max-width: 480px){
		.menu-div {
			width: 15% !important;
		}
	}
	}
`;
export const MenuLogoBox = styled(Box)`
	width: 45%;
	display: flex;
	justify-content: flex-start;

	a {
		text-decoration: none;
		justify-content: space-around;
		display: flex;
		align-items: center;
	}
	img {
		height: 3.5rem;
	}
	.MuiTypography-root.MuiTypography-h4 {
		font-weight: 600;
		color: #263238;
		font-size: 1.8rem;
	}
	@media only screen and (max-width: 1240px) and (min-width:900px){
		width: 22%;
		img {
			width: 100%;
		}
	}
	@media only screen and (max-width: 768px) {
		width: 60%;
		justify-content: start;
	}
	@media only screen and (max-width: 480px){
		width: 60%;
		img {
			width: 100%;
		}
	}
`;
export const MenuLogo = styled(Typography)`
	color: #ffffff;
`;

export const MenuText = styled(Typography)`
	font-size: 0.9rem;
	line-height: 18.96px;
`;
export const ButtonBoxA = styled(Box)`
	width: 35%;
	display: flex;
	margin-right: 2rem;
	align-items: center;
	justify-content: space-between;
	a {
		color: white;
		text-decoration: none;
		.MuiButtonBase-root.MuiButton-root.MuiButton-outlinedPrimary {
			color: #000000;
			border: 1px solid #ffffff;
			&:hover {
				border: none;
				outline: none;
			}
		}

		.MuiButtonBase-root.MuiButton-root.MuiButton-textPrimary {
			letter-spacing: -0.015em;
			color: #727272;
            font-family: 'Montserrat', sans-serif;
			font-weight: bold;
			font-size: 15px;
			line-height: 18px;
		}
	}
	.MuiButtonBase-root.MuiButton-root.MuiButton-textPrimary {
		letter-spacing: 0px;
		color: #7f8da0;
		font-size: 1rem;
		font-weight: 400;
		MuiSvgIcon-root {
			color: #000000;
		}
		&:hover {
			border: 1px solid #ffffff;
		}
	}
	@media only screen and (max-width: 1240px) and (min-width:900px){
		width: 45%;
	}
`;
export const ButtonBoxB = styled(Box)`
	width: 16%;
	display: flex;
	justify-content: space-between;
	padding-right: 1rem;
	a {
        width: 45%;
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
            &:hover {
				color: #ffffff;
                background-color: #E87615;
			}
        }
        .MuiButton-root.MuiButton-contained {
            background-color: #E87615;
            color: #FFFFFF;
            &:hover {
				background-color: #ffffff;
                color: #E87615;
                border: 1px solid #E87615;
			}
        }
		
	}
	@media only screen and (min-width: 1241px) and (max-width: 1369px){
		width 20%;
	}
	@media only screen and (max-width: 1240px) and (min-width:900px){
		width: 24%;
	}
`;
export const NavButton = styled(Button)`
	outline: none;
	border: none;
	border-radius: 4px;
	.resources {
		color: black;
	}
`;
