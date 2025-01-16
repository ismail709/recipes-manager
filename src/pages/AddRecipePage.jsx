import RecipeForm from "../components/RecipeForm";

export default function AddRecipePage() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Add New Recipe
            </h1>
            <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded">
                <RecipeForm />
            </div>
        </div>
    );
}
