import { useContext, useState } from "react";
import RecipeList from "../components/RecipeList";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router";

export default function HomePage() {
    const { recipes, setRecipes } = useContext(RecipeContext);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter recipes based on the search term
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function saveRecipes() {
        // Save recipes to local storage
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <Link
                        to="/add"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
                    >
                        Add Recipe
                    </Link>
                    <button
                        onClick={() => saveRecipes()}
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
                    >
                        Save Recipes
                    </button>
                    <button
                        onClick={() => {
                            localStorage.clear();
                            setRecipes([]);
                        }}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
                    >
                        Clear Recipes
                    </button>
                </div>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    {filteredRecipes.length > 0 ? (
                        <RecipeList list={filteredRecipes} />
                    ) : (
                        <p className="text-center text-gray-500">
                            No recipes found matching "{searchTerm}"
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
