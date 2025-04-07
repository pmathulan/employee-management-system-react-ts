# 🧑‍💼 Employee Management System

A scalable, production-ready Employee Management System built using **React.js**, **TypeScript**, **Redux Toolkit**, **React Hook Form**, and **React Router**.  
This project follows best practices for code quality, architecture, and developer experience.

---

## 📘 Documentation

### 🛠️ Project Setup Instructions

Follow these steps to set up and run the project locally:

#### 1. Clone the repository

```bash
git clone https://github.com/pmathulan/employee-management-system-react-ts.git
cd employee-management-system-react-ts
```

3. Start the development server

```bash
npm run dev
```

#### 2. 4. Run tests

```bash
npm run test
```

## Assumptions Made During Development

No backend/API integration: The app uses mock data with Redux Toolkit. In real use, this would be connected to APIs.

SPA frontend-focused: The application handles only the frontend logic.

Dynamic form validation: Implemented using React Hook Form with Zod for schema-based rules.

URL routing with parameters: Used React Router to navigate to Add/Edit/List pages.

Responsive UI: The layout supports common screen sizes (mobile/tablet/desktop).

Code architecture: Uses Single Responsibility Principle and modular file organization.

Testable structure: Components and logic are testable, with unit tests for key parts.

📁 Folder Structure (Simplified)
src/
├── components/ # Reusable UI components (e.g., Button, Input)
├── features/
│ └── employees/ # Employee-specific logic (slices, pages, components, forms)
├── constants/ # Project constants
├── features/ # Contains feature-specific code
├── hooks/ # Custom React hooks
├── styles/ # Global styles (CSS, SCSS, etc.)
├── routes/ # React Router route configuration
├── store/ # Redux store configuration

```
✅ Technologies Used
⚛️ React.js
🟦 TypeScript
📦 Redux Toolkit
🟦 Bootsrap
🧾 React Hook Form + Zod
🌐 React Router v6
🧪 Vitest + React Testing Library
🎨 Custom CSS
```

🚀 Future Improvements (Optional)
Integrate real API (using Axios/RTK Query)
Add authentication & authorization
Add E2E tests using Cypress or Playwright
Add global error boundaries and logging
Docker support for deployment
