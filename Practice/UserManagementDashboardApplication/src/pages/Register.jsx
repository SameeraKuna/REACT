import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register({ setNewUser }) {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", role: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6).required("Required"),
        role: Yup.string().required("Required")
      })}
      onSubmit={async (values) => {
        await axios.post("https://reqres.in/api/users", values);
        setNewUser(values);
        navigate("/users");
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" />

        <Field name="role" placeholder="Role" />
        <ErrorMessage name="role" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}