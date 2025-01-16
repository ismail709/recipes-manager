import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RecipeContext } from "../context/RecipeContext";

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const { recipes } = useContext(RecipeContext);

    useEffect(() => {
        const r = recipes.find((r) => r.id == id);
        setRecipe(r);
    }, [id, recipes]);

    if (!recipe) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl font-semibold text-red-500">Recipe not found!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="w-full max-w-3xl bg-white shadow-md rounded p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
                <p className="text-lg text-gray-600">{recipe.description}</p>
            </div>
        </div>
    );
}
