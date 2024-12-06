import React, { useState, useEffect } from "react";
import recipesData from "../data.json";
import { NavLink } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

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
      <div className="grid sm:grid-cols-2 sm:gap-8 mt-9 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        {recipes.map((recipe) => (
          <NavLink
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="flex flex-col items-center text-center bg-gray-200 p-4 max-w-full rounded-md shadow-md hover:scale-105 hover:bg-gray-300 transition-all"
          >
            <img src={recipe.image} alt={`Image of ${recipe.title}`} />
            <h3 className="font-bold text-lg p-4 text-blue-800">
              {recipe.title}
            </h3>
            <p>{recipe.summary}</p>
          </NavLink>
        ))}
      </div>
      <AddRecipeForm />
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
