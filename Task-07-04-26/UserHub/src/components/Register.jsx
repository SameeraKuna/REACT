import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import * as Yup from "yup";
function Register() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(null);
    const nameRegex = /^[A-Za-z][A-Za-z ' -]+$/;

    const validationSchema = Yup.object({
    fullName: Yup.string()
      .trim()
      .required("Full Name required")
      .min(2, "Minimum 2 characters required")
      .matches(nameRegex, "Invalid characters in full name"),
    
    email: Yup.string()
      .trim()
      .required("Email required")
      .email("Invalid email format"),

    password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"), 
    role: Yup.string()
      .trim()
      .required("Role required")
      })

    const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role:"" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
            setSubmitted(true);
            navigate("/users");
            resetForm();
        }
  });
  return (
    <>
    <h1 style={{ color: "white" }}>Registration Form</h1>
    <div className="container">
     <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="fullName">Full Name:</label>
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        /><br /><br />
        {formik.touched.fullName && formik.errors.fullName && (
          <span style={{ color: "red" }}>{formik.errors.fullName}</span>
        )}<br /><br />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        /><br /><br />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}<br /><br />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            /><br />
        {formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}<br />
        <label htmlFor="role">Choose Role:</label>
        <select
          name="role"
          onClick={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}>
        <option name="role" value="" disabled>--Choose Role--</option>
        <option name="role" value="Admin">Admin</option>
        <option name="role" value="Editor">Editor</option>
        <option name="role" value="Viewer">Viewer</option>
        </select><br /> <br />
        {formik.touched.role && formik.errors.role && (
          <span style={{ color: "red" }}>{formik.errors.role}</span>
        )}<br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>

  ) 
}
export default Register;


    