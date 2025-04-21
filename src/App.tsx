"use client";

import { useState, useEffect } from "react";
import MultiStepForm from "./components/MultiStepForm";
import SubmissionsList from "./components/SubmissionsList";
import type { FormData } from "./types";

function App() {
  // State to store all form submissions
  const [submissions, setSubmissions] = useState<FormData[]>([]);

  // Load any existing submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem("submissions");
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  // Handle form submission
  const handleSubmit = (data: FormData) => {
    const newSubmissions = [...submissions, data];
    setSubmissions(newSubmissions);

    // Save to localStorage
    localStorage.setItem("submissions", JSON.stringify(newSubmissions));

    // Clear form progress after successful submission
    localStorage.removeItem("formProgress");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Multi-Step Form
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Complete the form below to submit your information
          </p>
        </header>

        {/* Multi-step form component */}
        <MultiStepForm onSubmit={handleSubmit} />

        {/* Display submissions if any exist */}
        {submissions.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Submissions
            </h2>
            <SubmissionsList submissions={submissions} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
