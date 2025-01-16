import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RecipeContext } from "../context/RecipeContext";

export default function RecipeForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { recipes, setRecipes } = useContext(RecipeContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (!id) {
            // add new recipe
            setRecipes([...recipes, { id: Date.now(), title, description }]);
        } else {
            // edit existing recipe
            const updatedRecipes = recipes.map((r) => {
                if (r.id == id) {
                    r.title = title;
                    r.description = description;
                }
                return r;
            });
            setRecipes([...updatedRecipes]);
        }
        navigate("/");
    }

    useEffect(() => {
        if (id) {
            const recipe = recipes.find((r) => r.id == id);
            if (recipe) {
                setTitle(recipe.title);
                setDescription(recipe.description);
            }
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-white shadow-md rounded max-w-lg mx-auto">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter recipe title"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter recipe description"
                    rows="4"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
            >
                {id ? "Update" : "Add"} Recipe
            </button>
        </form>
    );
}
