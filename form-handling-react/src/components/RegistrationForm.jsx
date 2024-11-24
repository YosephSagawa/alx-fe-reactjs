import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUserName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = [];
    if (!username) {
      validationErrors.push("Name is required");
    }
    if (!email) {
      validationErrors.push("Email is required");
    }
    if (!password) {
      validationErrors.push("Password is required");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      console.log({ username, email, password });
      setErrors([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Name:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={handleChange}
        placeholder="Please enter name:"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Please enter email:"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handleChange}
        placeholder="Please enter password:"
      />
      <button type="submit">Submit</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default RegistrationForm;
