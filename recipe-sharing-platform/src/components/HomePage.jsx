import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await new Promise((resolve) =>
          setTimeout(() => resolve(recipesData), 500)
        );
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div>
          <img src={recipe.image} alt={`Image of ${recipe.title}`} />
          <h3>{recipe.title}</h3>
          <p>{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <div>Welcome to our Recipe Sharing Platform</div>
      <Recipes />
    </>
  );
};

export default HomePage;
