import { FormData, FormErrors } from "../../types";

interface Step1Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: FormErrors;
}

const Step1 = ({ formData, updateFormData, errors }: Step1Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          className={`w-full p-2 border rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className={`w-full p-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
    </div>
  );
};

export default Step1;
