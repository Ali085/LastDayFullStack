import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './index.scss'

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ imageUrl: "", catagory: "", name: "", price: "" }}
      validationSchema={Yup.object({
        imageUrl: Yup.string()
          .max(80000, "Must be 15 characters or less")
          .required("Required"),
        catagory: Yup.string()
          .max(80000, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        axios.post(`http://localhost:2020/users`, values);
      }}
    >
      <section className="formikSec">
        <Form>
          <label htmlFor="imageUrl">Image URL</label>
          <Field name="imageUrl" type="text" />
          <ErrorMessage name="imageUrl" />

          <label htmlFor="catagory">Catagory</label>
          <Field name="catagory" type="text" />
          <ErrorMessage name="catagory" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </section>
    </Formik>
  );
};

export default SignupForm;
