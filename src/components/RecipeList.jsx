import { useContext } from "react";
import { Link } from "react-router";
import { RecipeContext } from "../context/RecipeContext";

export default function RecipeList({ list }) {
    const { recipes, setRecipes } = useContext(RecipeContext);

    function removeRecipe(id) {
        const updatedRecipes = recipes.filter((r) => r.id != id);
        setRecipes([...updatedRecipes]);
    }

    return (
        <div className="space-y-4">
            {list.map((r, i) => (
                <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-white shadow-md rounded hover:shadow-lg transition"
                >
                    <div className="flex flex-col">
                        <Link
                            to={`/detail/${r.id}`}
                            className="text-lg font-semibold text-blue-600 hover:underline"
                        >
                            {r.title}
                        </Link>
                        <Link
                            to={`/edit/${r.id}`}
                            className="text-sm text-gray-500 hover:text-blue-500"
                        >
                            Edit
                        </Link>
                    </div>
                    <button
                        onClick={() => removeRecipe(r.id)}
                        className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}
