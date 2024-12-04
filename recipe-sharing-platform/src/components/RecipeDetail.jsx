import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await new Promise((resolve) =>
          setTimeout(() => resolve(recipesData), 500)
        );
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const foundRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!foundRecipe) {
    return <div>Recipe not found</div>;
  }
  const { title, summary, image, ingredients, instructions } = foundRecipe;
  return (
    <div>
      <h1 className="text-5xl text-center">{title}</h1>
      <p className="text-center my-7 text-xl">{summary}</p>
      <div className="flex">
        <img src={image} alt={title} className="w-1/2 h-auto" />
        <div className="flex flex-col mx-auto items-center justify-center">
          <h2 className="text-center my-7 text-2xl text-blue-800 font-semibold">
            Ingredients
          </h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-center my-7 text-2xl text-blue-800 font-semibold">
            Instructions
          </h2>
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
