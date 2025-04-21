import { useState, useEffect } from "react";
import MultiStepForm from "./components/MultiStepForm";
import SubmissionsList from "./components/SubmissionsList";
import type { FormData } from "./types";

function App() {
  const [submissions, setSubmissions] = useState<FormData[]>([]);

  // Load submissions from localStorage on initial render
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

    // Clear form data from localStorage
    localStorage.removeItem("formData");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Multi-Step Form</h1>
      <MultiStepForm onSubmit={handleSubmit} />

      {submissions.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Submissions</h2>
          <SubmissionsList submissions={submissions} />
        </div>
      )}
    </div>
  );
}

export default App;
