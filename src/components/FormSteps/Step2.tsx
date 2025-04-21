import type { FormData, FormErrors } from "../../types";

interface Step2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: FormErrors;
}

const Step2 = ({ formData, updateFormData, errors }: Step2Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => updateFormData({ address: e.target.value })}
          className={`w-full p-2 border rounded ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your address"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          className={`w-full p-2 border rounded ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>
    </div>
  );
};

export default Step2;
