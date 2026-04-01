import { useState } from "react";
import "./SignUpYup.css";
import * as Yup from "yup";

function SignUpYup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    city: "",
    pincode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // To handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //To handle validations
  
const nameRegex = /^[A-Za-z][A-Za-z ' -]+$/;
const phoneRegex = /^[0-9]{10}$/;
const pincodeRegex = /^[0-9]{6}$/;

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

  gender: Yup.string()
    .required("Select gender"),

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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await validationSchema.validate(formData, { abortEarly: false });

    setErrors({});
    setSubmitted(true);

  } catch (err) {
    const newErrors = {};

    err.inner.forEach((error) => {
    if (!newErrors[error.path]) {
      newErrors[error.path] = error.message;
      //console.log(error.inner);
      //console.log(error.path);
    }
    });
    
    
    setErrors(newErrors);
    setSubmitted(false);
  }
};

 return (
    <div className="container">
      <h2 style= {{color:"Black"}}>SIGN UP FORM</h2>

      {submitted && <p className="success">Form submitted successfully!</p>}

      <form onSubmit={handleSubmit} className="form">

        <input name="firstName" placeholder="First Name" onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}

        <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}

        <input name="email" placeholder="Email" onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}

        <input name="age" type="number" placeholder="Age" onChange={handleChange} />
        {errors.age && <span>{errors.age}</span>}

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}

        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        {errors.phone && <span>{errors.phone}</span>}

        <input name="city" placeholder="City" onChange={handleChange} />
        {errors.city && <span>{errors.city}</span>}

        <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        {errors.pincode && <span>{errors.pincode}</span>}

        <input name="country" placeholder="Country" onChange={handleChange} />
        {errors.country && <span>{errors.country}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpYup;