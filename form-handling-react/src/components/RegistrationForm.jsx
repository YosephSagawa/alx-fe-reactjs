import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name_error, setNameError] = useState("");
  const [email_error, setEmailError] = useState("");
  const [password_error, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setUserName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "name" && !value) {
      setNameError("Name is required");
    }
    if (name === "email" && !value) {
      setEmailError("Email is required");
    }
    if (name === "password" && !value) {
      setPasswordError("Password is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name_error || email_error || password_error) {
      alert("Please fill in all required fields before submitting.");
      return;
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={username}
        onChange={handleChange}
        placeholder="Please enter name:"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Please enter email:"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Please enter password:"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
