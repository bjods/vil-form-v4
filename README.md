# Multi-Step Form Application

A modern, responsive multi-step form built with React, TypeScript, and Vite. This application features a dynamic form system that adapts based on user selections, with state management powered by Zustand and UI components from Radix UI.

## 🚀 Features

- **Multi-step form flow** with dynamic routing based on user selections
- **TypeScript** for type safety and better developer experience
- **Zustand** for efficient state management
- **Radix UI** components for accessible, customizable UI elements
- **Tailwind CSS** for styling and responsive design
- **React Hook Form** with Zod validation
- **Supabase** integration for data persistence
- **Vitest** for testing
- **ESLint** for code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (Button, Input, etc.)
│   │   ├── button.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   └── index.ts    # UI components export
│   ├── AddressCollection.tsx
│   ├── BothForm.tsx
│   ├── BudgetSection.tsx
│   ├── CalendlyBooking.tsx
│   ├── FormCard.tsx
│   ├── FormProgressBar.tsx
│   ├── MaintenanceForm.tsx
│   ├── OtherForm.tsx
│   ├── OutOfServiceArea.tsx
│   ├── PersonalInformation.tsx
│   ├── PreviousProvider.tsx
│   ├── PreviousQuotes.tsx
│   ├── PriceVsLongTerm.tsx
│   ├── ProjectScope.tsx
│   ├── ProjectsForm.tsx
│   ├── ProjectSuccessCriteria.tsx
│   ├── ServiceDetailsSection.tsx
│   ├── ServiceSelection.tsx
│   ├── SiteChallenges.tsx
│   ├── StartDeadlineSection.tsx
│   └── StartPage.tsx
├── store/              # Zustand store modules
│   ├── formStore.ts    # Main form state management
│   └── index.ts        # Store exports
├── types/              # TypeScript type definitions
│   ├── form.ts         # Form-related types
│   └── index.ts        # Types export
├── lib/                # Utility functions and services
│   ├── utils.ts        # General utilities
│   ├── validation.ts   # Form validation schemas
│   ├── supabase.ts     # Supabase client and functions
│   ├── services.ts     # API services
│   └── index.ts        # Utilities export
├── data/               # Static data and configurations
│   ├── formSteps.ts    # Form step definitions
│   └── index.ts        # Data exports
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
├── form.test.tsx       # Form component tests
└── vite-env.d.ts       # Vite environment types
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Backend**: Supabase
- **Testing**: Vitest + Testing Library
- **Code Quality**: ESLint + TypeScript ESLint

## 📦 Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd vil-form-v4
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 🚀 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest

## 🏗️ Form Flow

The application implements a dynamic multi-step form with the following flow:

1. **Start Page** - Introduction and form initialization
2. **Service Selection** - User selects desired services
3. **Address Collection** - Geographic information gathering
4. **Service-Specific Forms**:
   - **Maintenance Form** - For maintenance services
   - **Projects Form** - For project-based services
   - **Both Form** - For combined maintenance and projects
   - **Other Form** - For other service types
5. **Out of Service Area** - Fallback for unsupported locations

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Custom CSS variables for consistent theming
- Responsive design patterns
- Accessible color schemes
- Modern UI components from Radix UI

## 🧪 Testing

Tests are written using Vitest and React Testing Library:
```bash
npm run test
```

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript for all new code
3. Follow the existing code style and ESLint rules
4. Write tests for new components and utilities
5. Update documentation as needed

## 📄 License

This project is private and proprietary. 