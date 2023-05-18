import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "../styles.css";

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
}

const SignupForm: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      ></input>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
