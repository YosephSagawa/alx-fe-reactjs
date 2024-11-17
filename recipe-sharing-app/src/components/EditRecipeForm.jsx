import useRecipeStore from "../components/recipeStore";
import { useState, useEffect } from "react";

const EditRecipeForm = ({ recipeId }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const getRecipeById = useRecipeStore(
    (state) => (id) => state.recipes.find((recipe) => recipe.id === id)
  );

  const [recipe, setRecipe] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipeId) {
      const selectedRecipe = getRecipeById(recipeId);
      if (selectedRecipe) {
        setRecipe(selectedRecipe);
        setTitle(selectedRecipe.title);
        setDescription(selectedRecipe.description);
      }
    }
  }, [recipeId, getRecipeById]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (recipe) {
      updateRecipe(recipe.id, {
        title,
        description,
      });
      setTitle("");
      setDescription("");
    }
  };

  if (!recipe) {
    return <div>Select a recipe to edit.</div>;
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
