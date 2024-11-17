import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Pasta", description: "Delicious Italian pasta." },
    { id: 2, title: "Salad", description: "Healthy and fresh." },
  ],
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const lowercasedTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(lowercasedTerm) ||
            recipe.description.toLowerCase().includes(lowercasedTerm)
        ),
      };
    }),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));

export default useRecipeStore;
