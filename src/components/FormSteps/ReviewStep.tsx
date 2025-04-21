import { useFormContext } from "react-hook-form";
import type { FormData } from "../../types";

// Sample categories for display
const CATEGORIES_MAP = {
  technology: "Technology",
  health: "Health & Wellness",
  finance: "Finance",
  education: "Education",
  entertainment: "Entertainment",
  travel: "Travel",
  food: "Food & Dining",
  sports: "Sports & Fitness",
};

const ReviewStep = () => {
  const { watch } = useFormContext<FormData>();
  const formData = watch();

  // Helper function to get category labels
  const getCategoryLabels = (categoryIds: string[]) => {
    return categoryIds
      .map((id) => CATEGORIES_MAP[id as keyof typeof CATEGORIES_MAP] || id)
      .join(", ");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Review Your Information
      </h2>
      <p className="text-gray-600">
        Please review your information before submitting.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 gap-4">
          {/* Personal Information */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Personal Information
            </h3>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <div>
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="text-sm font-medium text-gray-900">
                  {formData.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email Address</p>
                <p className="text-sm font-medium text-gray-900">
                  {formData.email}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="pt-3 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">
              Contact Information
            </h3>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <div>
                <p className="text-xs text-gray-500">Address</p>
                <p className="text-sm font-medium text-gray-900">
                  {formData.address}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone Number</p>
                <p className="text-sm font-medium text-gray-900">
                  {formData.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="pt-3 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">
              Selected Categories
            </h3>
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-900">
                {formData.categories && formData.categories.length > 0
                  ? getCategoryLabels(formData.categories)
                  : "No categories selected"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>
          By submitting this form, you confirm that all the information provided
          is correct.
        </p>
      </div>
    </div>
  );
};

export default ReviewStep;
