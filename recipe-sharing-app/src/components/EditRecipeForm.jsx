import useRecipeStore from "../components/recipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) => {
    state.recipes.find((recipe) => recipe.id === recipeId);
  });

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form>
        <input type="text" placeholder="Title" defaultValue={recipe.title} />
        <textarea placeholder="Description" defaultValue={recipe.description} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
