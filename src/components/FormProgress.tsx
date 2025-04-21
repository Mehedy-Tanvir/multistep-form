interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  // Create an array of step numbers
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 sm:p-6">
      <div className="flex justify-between">
        {steps.map((step) => {
          // Determine if the step is active, completed, or upcoming
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;

          return (
            <div key={step} className="flex flex-col items-center">
              {/* Step circle */}
              <div
                className={`
                    flex items-center justify-center w-8 h-8 rounded-full 
                    transition-all duration-200 
                    ${
                      isActive
                        ? "bg-white text-blue-600 ring-4 ring-blue-200"
                        : isCompleted
                        ? "bg-green-500 text-white"
                        : "bg-white/30 text-white"
                    }
                  `}
              >
                {isCompleted ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  step + 1
                )}
              </div>

              {/* Step label */}
              <span
                className={`mt-2 text-xs font-medium ${
                  isActive || isCompleted ? "text-white" : "text-white/70"
                }`}
              >
                {step === 0
                  ? "Personal"
                  : step === 1
                  ? "Contact"
                  : step === 2
                  ? "Categories"
                  : "Review"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default FormProgress;
