import type { FormData } from "../../types";

interface Step4Props {
  formData: FormData;
}

const categories = {
  technology: "Technology",
  health: "Health & Wellness",
  finance: "Finance",
  education: "Education",
  entertainment: "Entertainment",
  sports: "Sports",
  food: "Food & Cooking",
  travel: "Travel",
};

const Step4 = ({ formData }: Step4Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
      <p className="text-sm text-gray-600 mb-4">
        Please review your information before submitting.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-700">Personal Information</h3>
            <div className="mt-2 space-y-1">
              <p>
                <span className="text-gray-500">Name:</span> {formData.name}
              </p>
              <p>
                <span className="text-gray-500">Email:</span> {formData.email}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700">Contact Information</h3>
            <div className="mt-2 space-y-1">
              <p>
                <span className="text-gray-500">Address:</span>{" "}
                {formData.address}
              </p>
              <p>
                <span className="text-gray-500">Phone:</span> {formData.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-gray-700">Selected Categories</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.categories.map((categoryId) => (
              <span
                key={categoryId}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
              >
                {categories[categoryId as keyof typeof categories]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
