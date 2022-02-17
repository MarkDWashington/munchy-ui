import axios from 'axios';
import { useState, useEffect } from 'react';

interface Recipes {
  recipes: Array<Recipe>;
}

interface Recipe {
  _id: string;
  title: string;
}

let recipes: Recipes;

function RecipeList() {

  let [recipes, setRecipes] = useState<Recipes | undefined>(undefined);

  useEffect(() => {
    console.log("Requesting recipe list");
    axios.get("http://localhost:3000/recipes").then((response) => {
      setRecipes(response.data as Recipes);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <ul>
        {recipes?.recipes.map((recipe) => <li>{recipe.title}</li>)}
      </ul>
    </div>
  )
}

export default RecipeList