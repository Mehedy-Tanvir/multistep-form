import { useFormContext } from "react-hook-form";
import FormInput from "../FomInput";

const StepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Personal Information
      </h2>
      <p className="text-gray-600">Please provide your personal details.</p>

      {/* Name input */}
      <FormInput
        label="Full Name"
        id="name"
        type="text"
        placeholder="John Doe"
        error={errors.name?.message as string}
        registration={register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters",
          },
        })}
      />

      {/* Email input */}
      <FormInput
        label="Email Address"
        id="email"
        type="email"
        placeholder="john.doe@example.com"
        error={errors.email?.message as string}
        registration={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
    </div>
  );
};

export default StepOne;
