import { useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
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

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // validation
  const validate = () => {
  let newErrors = {};

  // Name Regex (letters, space, ' and -)
  const nameRegex = /^[A-Za-z][A-Za-z ' -]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const pincodeRegex = /^[0-9]{6}$/;

  // First Name
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name required";
  } else if (formData.firstName.trim().length < 3) {
    newErrors.firstName = "Minimum 3 characters required";
  } else if (!nameRegex.test(formData.firstName.trim())) {
    newErrors.firstName = "Invalid characters in first name";
  }

  // Last Name
  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name required";
  } else if (formData.lastName.trim().length < 3) {
    newErrors.lastName = "Minimum 3 characters required";
  } else if (!nameRegex.test(formData.lastName.trim())) {
    newErrors.lastName = "Invalid characters in last name";
  }

  // Email
  if (!formData.email.trim()) {
    newErrors.email = "Email required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  // Age
  if (!formData.age) {
    newErrors.age = "Age required";
  } else if (!/^[0-9]+$/.test(formData.age)) {
    newErrors.age = "Age must be a number";
  } else if (formData.age < 1 || formData.age > 120) {
    newErrors.age = "Enter valid age (1–120)";
  }

  // Gender
  if (!formData.gender) {
    newErrors.gender = "Select gender";
  }

  // Phone
  if (!formData.phone) {
    newErrors.phone = "Phone required";
  } else if (!/^[0-9]+$/.test(formData.phone)) {
    newErrors.phone = "Only digits allowed";
  } else if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Must be exactly 10 digits";
  }

  // City
  if (!formData.city.trim()) {
    newErrors.city = "City required";
  } else if (!/^[A-Za-z ]+$/.test(formData.city)) {
    newErrors.city = "Only letters allowed";
  }

  // Pincode
  if (!formData.pincode) {
    newErrors.pincode = "Pincode required";
  } else if (!/^[0-9]+$/.test(formData.pincode)) {
    newErrors.pincode = "Only digits allowed";
  } else if (!pincodeRegex.test(formData.pincode)) {
    newErrors.pincode = "Must be 6 digits";
  }

  // Country
  if (!formData.country.trim()) {
    newErrors.country = "Country required";
  } else if (!/^[A-Za-z ]+$/.test(formData.country)) {
    newErrors.country = "Only letters allowed";
  }

  return newErrors;
};

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container">
      <h2 style= {{color:"Black"}}>Signup Form</h2>

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

export default SignUpForm;