import React from "react";
import SignupForm from "../../Components/AddProduct";
import Footer from "../../Layouts/Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Layouts/Navbar";

function Add() {
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      ;
      <Navbar />
      <SignupForm />
      <Footer />
    </>
  );
}

export default Add;
