import React from "react";
import BestSeller from "../../Components/BestSeller";
import HomeHeader from "../../Components/HomeHeader";
import LastestNew from "../../Components/LatestNews";
import Trending from "../../Components/Trending";
import WinterSale from "../../Components/WinterSale";
import Footer from "../../Layouts/Footer";
import Navbar from "../../Layouts/Navbar";
import { Helmet } from 'react-helmet-async';

function Home() {
 
  return (
    <> 
    <Helmet>
    <title>Home</title> 
    </Helmet>;
      <Navbar />
      <HomeHeader />
      <Trending />
      <WinterSale />
      <BestSeller />
      <LastestNew />
      <Footer />
    </>
  );
}

export default Home;
