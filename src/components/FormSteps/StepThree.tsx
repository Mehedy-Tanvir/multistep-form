import { useFormContext } from "react-hook-form";

// Sample categories for multi-select
const CATEGORIES = [
  { id: "technology", label: "Technology" },
  { id: "health", label: "Health & Wellness" },
  { id: "finance", label: "Finance" },
  { id: "education", label: "Education" },
  { id: "entertainment", label: "Entertainment" },
  { id: "travel", label: "Travel" },
  { id: "food", label: "Food & Dining" },
  { id: "sports", label: "Sports & Fitness" },
];

const StepThree = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedCategories = watch("categories") || [];

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setValue("categories", updatedCategories, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Select Categories</h2>
      <p className="text-gray-600">
        Please select at least one category of interest.
      </p>

      {/* Hidden input for validation */}
      <input
        type="hidden"
        {...register("categories", {
          required: "Please select at least one category",
          validate: (value) =>
            value.length > 0 || "Please select at least one category",
        })}
      />

      {/* Error message */}
      {errors.categories && (
        <p className="text-sm text-red-600 mt-1">
          {errors.categories.message as string}
        </p>
      )}

      {/* Categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {CATEGORIES.map((category) => (
          <div
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={`
              p-4 border rounded-lg cursor-pointer transition-all
              ${
                selectedCategories.includes(category.id)
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex items-center">
              <div
                className={`
                w-5 h-5 rounded-full border flex items-center justify-center mr-3
                ${
                  selectedCategories.includes(category.id)
                    ? "border-purple-500 bg-purple-500"
                    : "border-gray-300"
                }
              `}
              >
                {selectedCategories.includes(category.id) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="font-medium">{category.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
