"use client";

import { useFormContext } from "react-hook-form";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onReset: () => void;
}

const FormNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onReset,
}: FormNavigationProps) => {
  const { formState } = useFormContext();
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex justify-between pt-4 border-t border-gray-200">
      <div>
        {/* Back button - only show if not on first step */}
        {currentStep > 0 && (
          <button
            type="button"
            onClick={onPrevious}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Back
          </button>
        )}

        {/* Reset button */}
        <button
          type="button"
          onClick={onReset}
          className="ml-3 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-300 rounded-md shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Reset
        </button>
      </div>

      <div>
        {/* Next or Submit button */}
        {isLastStep ? (
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md shadow-sm hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={!formState.isValid}
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md shadow-sm hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FormNavigation;
