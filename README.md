# Multi-Step Form

A responsive multi-step form built with React, TypeScript, and Tailwind CSS.

## Features

- Multi-step form with 4 steps (Personal Info, Contact Info, Categories, Review)
- Form validation using React Hook Form
- Progress tracking with visual indicators
- Form data persistence using localStorage
- Responsive design with Tailwind CSS
- Display of submitted entries

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form

## How to Run the Project

1. Clone the repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/App.tsx` - Main application component
- `src/components/` - Reusable components
  - `MultiStepForm.tsx` - Container for the form steps
  - `FormNavigation.tsx` - Navigation buttons
  - `FormProgress.tsx` - Progress indicator
  - `FormInput.tsx` - Reusable input component
  - `steps/` - Individual form steps
  - `SubmissionsList.tsx` - Display of submitted entries
- `src/types.ts` - TypeScript interfaces

## Assumptions and Design Decisions

1. Used Tailwind CSS for styling to create a modern, responsive UI
2. Implemented form validation with clear error messages
3. Added localStorage persistence for both form progress and submissions
4. Created a visually appealing progress indicator
5. Used a card-based layout for submissions display
6. Implemented a reset button to clear form data

## Bonus Features Implemented

- Form progress saved in localStorage
- Reset button to clear form and localStorage data
- Visual progress indicator
- Responsive design for all screen sizes
- Custom styling with gradient backgrounds and animations
  \`\`\`

```html file="index.html"
&lt;!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Multi-Step Form</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
