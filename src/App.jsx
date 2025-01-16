import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {RecipeContext} from "./context/RecipeContext.js";
import HomePage from "./pages/HomePage.jsx"
import AddRecipePage from "./pages/AddRecipePage.jsx";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";

function App() {
  const [recipes,setRecipes] = useState([]);
  useEffect(()=> {
    // load saved recipes
    const savedRecipes = localStorage.getItem("recipes");
    // add recipes from local storage to global state
    if(savedRecipes) setRecipes(JSON.parse(savedRecipes));
  },[])
  return (
    <>
      <RecipeContext.Provider value={{recipes,setRecipes}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/edit/:id" element={<AddRecipePage />} />
          <Route path="/detail/:id" element={<RecipeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </RecipeContext.Provider>
    </>
  )
}

export default App
