import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  const { title, summary, image, ingredients, instructions } = recipe;
  return (
    <div>
      <h1>{title}</h1>
      <p>{summary}</p>
      <div className="flex">
        <img src={image} alt={title} className="w-1/2" />
        <div className="flex flex-col mx-auto items-center justify-center">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <ol className="list-decimal">
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
