import { useState } from "react";

const AddRecipeForm = () => {
  const [data, setData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((prevState) => ({ ...prevState, [name]: value }));

    if (name === "title" && value.length < 3) {
      setErrors("Title must be at least 3 characters long");
    } else {
      setErrors("");
    }

    if (name === "ingredients" && value.length < 3) {
      setErrors("Ingredients must be at least 3 characters long");
    } else {
      setErrors("");
    }

    if (name === "instructions" && value.length < 3) {
      setErrors("Instructions must be at least 3 characters long");
    } else {
      setErrors("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors) {
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
        <textarea
          type="text"
          id="ingredients"
          name="ingredients"
          value={data.ingredients}
          onChange={handleChange}
        />
        <label htmlFor="instructions">Steps:</label>
        <textarea
          type="text"
          id="steps"
          name="steps"
          value={data.steps}
          onChange={handleChange}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
