import { useState, useEffect } from "react";
import Step1 from "./FormSteps/Step1";
import Step2 from "./FormSteps/Step2";
import Step3 from "./FormSteps/Step3";
import Step4 from "./FormSteps/Step4";
import type { FormData, FormErrors } from "../types";
import { validateStep } from "../utils/validation";

interface MultiStepFormProps {
  onSubmit: (data: FormData) => void;
}

const MultiStepForm = ({ onSubmit }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    phone: "",
    categories: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Load form data from localStorage on initial render
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);

    if (Object.keys(stepErrors).length === 0) {
      setErrors({});
      setCurrentStep((prev) => prev + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    onSubmit(formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      categories: [],
    });
    setCurrentStep(1);
  };

  const handleReset = () => {
    // Clear form data
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      categories: [],
    });

    // Reset to first step
    setCurrentStep(1);

    // Clear errors
    setErrors({});

    // Remove from localStorage
    localStorage.removeItem("formData");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-1/4 text-center ${
                currentStep === step
                  ? "text-emerald-600 font-bold"
                  : currentStep > step
                  ? "text-emerald-400"
                  : "text-gray-400"
              }`}
            >
              Step {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        {currentStep === 1 && (
          <Step1
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        )}
        {currentStep === 3 && (
          <Step3
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        )}
        {currentStep === 4 && <Step4 formData={formData} />}
      </div>

      <div className="flex justify-between">
        <div>
          {currentStep > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              Previous
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Reset
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
