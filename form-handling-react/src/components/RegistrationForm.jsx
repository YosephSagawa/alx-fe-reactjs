import { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({ userName: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    if (name === "name" && !value) {
      setError("Name is required");
    }
    if (name === "email" && !value) {
      setError("Email is required");
    }
    if (name === "password" && !value) {
      setError("Password is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      alert("Please fill in all required fields before submitting.");
      return;
    } else {
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Please enter name:"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Please enter email:"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Please enter password:"
      />
    </form>
  );
};
