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
    <div className="grid sm:grid-cols-2 sm:gap-8 mt-9 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
      {recipes.map((recipe) => (
        <div className="flex flex-col items-center text-center bg-gray-200 p-4 max-w-full rounded-md shadow-md hover:scale-105 hover:bg-gray-300 transition-all">
          <img src={recipe.image} alt={`Image of ${recipe.title}`} />
          <h3 className="font-bold text-lg p-4 text-blue-800">
            {recipe.title}
          </h3>
          <p>{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="p-4">
      <h3 className="text-center text-3xl mt-8">
        Welcome to our Recipe Sharing Platform
      </h3>
      <Recipes />
    </div>
  );
};

export default HomePage;
