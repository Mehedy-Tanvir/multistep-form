import type { FormData, FormErrors } from "../../types";

interface Step3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: FormErrors;
}

const categories = [
  { id: "technology", label: "Technology" },
  { id: "health", label: "Health & Wellness" },
  { id: "finance", label: "Finance" },
  { id: "education", label: "Education" },
  { id: "entertainment", label: "Entertainment" },
  { id: "sports", label: "Sports" },
  { id: "food", label: "Food & Cooking" },
  { id: "travel", label: "Travel" },
];

const Step3 = ({ formData, updateFormData, errors }: Step3Props) => {
  const handleCategoryChange = (categoryId: string) => {
    const updatedCategories = formData.categories.includes(categoryId)
      ? formData.categories.filter((id) => id !== categoryId)
      : [...formData.categories, categoryId];

    updateFormData({ categories: updatedCategories });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Categories</h2>
      <p className="text-sm text-gray-600 mb-4">
        Please select at least one category that interests you.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              id={category.id}
              checked={formData.categories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
              className="h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
            />
            <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">
              {category.label}
            </label>
          </div>
        ))}
      </div>

      {errors.categories && (
        <p className="text-red-500 text-sm mt-2">{errors.categories}</p>
      )}
    </div>
  );
};

export default Step3;
