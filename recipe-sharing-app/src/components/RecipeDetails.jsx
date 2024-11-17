import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) => {
    state.recipes.find((recipe) => recipe.id === recipeId);
  });

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipeId={recipe.id} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};
