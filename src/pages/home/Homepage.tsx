import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import { Block } from './homepage.style';
const Homepage = () => {
  return (
    <Block>
        <Navbar />
        <Header />
        <Main />
        <Footer />
    </Block>
  )
}

export default Homepage