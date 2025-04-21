import type { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  error,
  registration,
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`
            block w-full rounded-md shadow-sm 
            focus:ring-purple-500 focus:border-purple-500 sm:text-sm
            ${error ? "border-red-300" : "border-gray-300"}
          `}
          {...registration}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;
