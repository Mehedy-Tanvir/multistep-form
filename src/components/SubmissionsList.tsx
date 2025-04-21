import type { FormData } from "../types";

interface SubmissionsListProps {
  submissions: FormData[];
}

const categories = {
  technology: "Technology",
  health: "Health & Wellness",
  finance: "Finance",
  education: "Education",
  entertainment: "Entertainment",
  sports: "Sports",
  food: "Food & Cooking",
  travel: "Travel",
};

const SubmissionsList = ({ submissions }: SubmissionsListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {submissions.map((submission, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">{submission.name}</h3>
            <span className="text-xs text-gray-500">
              Submission #{index + 1}
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Email:</span> {submission.email}
            </p>
            <p>
              <span className="font-medium">Address:</span> {submission.address}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {submission.phone}
            </p>

            <div>
              <p className="font-medium mb-1">Categories:</p>
              <div className="flex flex-wrap gap-1">
                {submission.categories.map((categoryId) => (
                  <span
                    key={categoryId}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                  >
                    {categories[categoryId as keyof typeof categories]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmissionsList;
