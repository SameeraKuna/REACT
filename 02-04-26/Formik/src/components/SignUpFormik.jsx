import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUpFormik.css";

function SignUpFormik() {

  const nameRegex = /^[A-Za-z][A-Za-z ' -]+$/;

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .required("First name required")
      .min(3, "Minimum 3 characters required")
      .matches(nameRegex, "Invalid characters in first name"),

    lastName: Yup.string()
      .trim()
      .required("Last name required")
      .min(3, "Minimum 3 characters required")
      .matches(nameRegex, "Invalid characters in last name"),

    email: Yup.string()
      .trim()
      .required("Email required")
      .email("Invalid email format"),

    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age required")
      .min(1, "Enter valid age (1–120)")
      .max(120, "Enter valid age (1–120)"),

    gender: Yup.string().required("Select gender"),

    phone: Yup.string()
      .required("Phone required")
      .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),

    city: Yup.string()
      .trim()
      .required("City required")
      .matches(/^[A-Za-z ]+$/, "Only letters allowed"),

    pincode: Yup.string()
      .required("Pincode required")
      .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits"),

    country: Yup.string()
      .trim()
      .required("Country required")
      .matches(/^[A-Za-z ]+$/, "Only letters allowed"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      city: "",
      pincode: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });

  return (
    <div className="container">
      <h2 style={{ color: "black" }}>SIGN UP FORM</h2>

      <form onSubmit={formik.handleSubmit} className="form">

        <input
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <span>{formik.errors.firstName}</span>
        )}

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <span>{formik.errors.lastName}</span>
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}

        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age && (
          <span>{formik.errors.age}</span>
        )}

        <select
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {formik.touched.gender && formik.errors.gender && (
          <span>{formik.errors.gender}</span>
        )}

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <span>{formik.errors.phone}</span>
        )}

        <input
          name="city"
          placeholder="City"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city && (
          <span>{formik.errors.city}</span>
        )}

        <input
          name="pincode"
          placeholder="Pincode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pincode}
        />
        {formik.touched.pincode && formik.errors.pincode && (
          <span>{formik.errors.pincode}</span>
        )}

        <input
          name="country"
          placeholder="Country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        />
        {formik.touched.country && formik.errors.country && (
          <span>{formik.errors.country}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpFormik;