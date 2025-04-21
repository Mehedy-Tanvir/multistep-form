import { useFormContext } from "react-hook-form";
import FormInput from "../FomInput";

const StepTwo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Contact Information
      </h2>
      <p className="text-gray-600">Please provide your contact details.</p>

      {/* Address input */}
      <FormInput
        label="Address"
        id="address"
        type="text"
        placeholder="123 Main St, City, Country"
        error={errors.address?.message as string}
        registration={register("address", {
          required: "Address is required",
          minLength: {
            value: 5,
            message: "Address must be at least 5 characters",
          },
        })}
      />

      {/* Phone input */}
      <FormInput
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="1234567890"
        error={errors.phone?.message as string}
        registration={register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Phone number must contain only digits",
          },
          minLength: {
            value: 10,
            message: "Phone number must be at least 10 digits",
          },
        })}
      />
    </div>
  );
};

export default StepTwo;
