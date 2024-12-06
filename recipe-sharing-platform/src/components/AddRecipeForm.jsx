import { useState } from "react";

const AddRecipeForm = () => {
  const [data, setData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});
  const [validate, setValidate] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    // Update form data
    setData((prevState) => ({ ...prevState, [name]: value }));

    // Validate input on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    if (value.length < 3) {
      errorMsg = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } must be at least 3 characters long.`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check all fields for validation
    if (data.title.length < 3)
      newErrors.title = "Title must be at least 3 characters long.";
    if (data.ingredients.length < 3)
      newErrors.ingredients = "Ingredients must be at least 3 characters long.";
    if (data.steps.length < 3)
      newErrors.steps = "Steps must be at least 3 characters long.";

    setErrors(newErrors);

    // If no errors, form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Form submitted with data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 w-full">
      <h1 className="text-3xl">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-3/4">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="rounded-sm border mb-2 border-black shadow-md"
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={data.ingredients}
          onChange={handleChange}
          className="rounded-sm border mb-2 border-black shadow-md"
        />
        {errors.ingredients && (
          <p style={{ color: "red" }}>{errors.ingredients}</p>
        )}

        <label htmlFor="steps">Steps:</label>
        <textarea
          id="steps"
          name="steps"
          value={data.steps}
          onChange={handleChange}
          className="rounded-sm border border-black mb-2 shadow-md"
        />
        {errors.steps && <p style={{ color: "red" }}>{errors.steps}</p>}

        <button
          type="submit"
          className="bg-blue-800 text-white p-2 font-semibold"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
