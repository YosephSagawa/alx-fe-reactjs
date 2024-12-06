import { useState } from "react";

const AddRecipeForm = () => {
  const [data, setData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((prevState) => ({ ...prevState, [name]: value }));

    if (name === "title" && value.length < 3) {
      setError("Title must be at least 3 characters long");
    } else {
      setError("");
    }

    if (name === "ingredients" && value.length < 3) {
      setError("Ingredients must be at least 3 characters long");
    } else {
      setError("");
    }

    if (name === "instructions" && value.length < 3) {
      setError("Instructions must be at least 3 characters long");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      alert("Please fill out all the fields appropriately.");
      return;
    }
    console.log("Form submitted with data:", data);
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="name"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <label htmlFor="imgredients">Ingredients:</label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          value={data.ingredients}
          onChange={handleChange}
        />
        <label htmlFor="instructions">Steps:</label>
        <input
          type="text"
          id="instructions"
          name="instructions"
          value={data.steps}
          onChange={handleChange}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
