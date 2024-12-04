import React, { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
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
