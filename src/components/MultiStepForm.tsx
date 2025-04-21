"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { FormData } from "../types";

import FormNavigation from "./FormNavigation";
import FormProgress from "./FormProgress";
import StepOne from "./FormSteps/StepOne";
import StepTwo from "./FormSteps/StepTwo";
import StepThree from "./FormSteps/StepThree";
import ReviewStep from "./FormSteps/ReviewStep";

interface MultiStepFormProps {
  onSubmit: (data: FormData) => void;
}

const MultiStepForm = ({ onSubmit }: MultiStepFormProps) => {
  // Current step state
  const [currentStep, setCurrentStep] = useState(0);

  // Initialize React Hook Form
  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      categories: [],
    },
  });

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem("formProgress");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      methods.reset(parsedData);

      // If we have data for later steps, we can assume the user was on a later step
      if (parsedData.address) setCurrentStep(1);
      if (parsedData.categories && parsedData.categories.length > 0)
        setCurrentStep(2);
    }
  }, [methods]);

  // Save form progress to localStorage whenever form values change
  useEffect(() => {
    const subscription = methods.watch((formValues) => {
      if (Object.keys(formValues).length > 0) {
        localStorage.setItem("formProgress", JSON.stringify(formValues));
      }
    });

    return () => subscription.unsubscribe();
  }, [methods]);

  // Form steps components
  const steps = [
    <StepOne key="step1" />,
    <StepTwo key="step2" />,
    <StepThree key="step3" />,
    <ReviewStep key="review" />,
  ];

  // Handle next step navigation
  const handleNext = async () => {
    // For steps 0, 1, 2 (not the final review step)
    if (currentStep < steps.length - 1) {
      // Validate the current step's fields before proceeding
      let isValid = false;

      if (currentStep === 0) {
        // Validate step 1 fields
        isValid = await methods.trigger(["name", "email"]);
      } else if (currentStep === 1) {
        // Validate step 2 fields
        isValid = await methods.trigger(["address", "phone"]);
      } else if (currentStep === 2) {
        // Validate step 3 fields
        isValid = await methods.trigger(["categories"]);
      }

      if (isValid) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  // Handle previous step navigation
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission
  const handleFormSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
    methods.reset();
    setCurrentStep(0);
    // Clear form progress from localStorage
    localStorage.removeItem("formProgress");
  });

  // Handle form reset
  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the form? All progress will be lost."
      )
    ) {
      methods.reset();
      setCurrentStep(0);
      localStorage.removeItem("formProgress");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Form progress indicator */}
      <FormProgress currentStep={currentStep} totalSteps={steps.length} />

      {/* Form provider from react-hook-form */}
      <FormProvider {...methods}>
        <form onSubmit={handleFormSubmit} className="p-6 sm:p-8">
          {/* Current step content */}
          <div className="mb-8">{steps[currentStep]}</div>

          {/* Form navigation buttons */}
          <FormNavigation
            currentStep={currentStep}
            totalSteps={steps.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onReset={handleReset}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
