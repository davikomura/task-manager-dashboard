# Task Management Dashboard

A React and TypeScript application for managing tasks. This dashboard allows users to add, edit, delete, and prioritize tasks. Built using Bulma for styling and Vite for development.

## Features

- **Task Management**: Add, edit, delete, and mark tasks as completed or pending.
- **Filters and Sorting**: Filter tasks by status and priority, and sort them by due date or priority.
- **Responsive Design**: A vertical sidebar menu using Bulma, ensuring a clean and responsive interface.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Bulma**: A modern CSS framework based on Flexbox.
- **Vite**: A fast build tool and development server.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-manager-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd task-manager-dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser to view the application.

## Usage

- **Add Tasks**: Click the "Add Task" button in the sidebar to open the task form.
- **Edit Tasks**: Click the "Edit" button next to a task to modify its details.
- **Delete Tasks**: Click the "Delete" button to remove a task.
- **Filter and Sort**: Use the filter and sorting options in the sidebar to manage task views.

## Directory Structure

```
src
 ├── assets/               # Static assets (images, fonts, etc.)
 ├── components/           # React components
 │   ├── Header.tsx        # Sidebar menu
 │   ├── TaskList.tsx      # List of tasks
 │   ├── TaskItem.tsx      # Individual task item
 │   ├── TaskForm.tsx      # Form to add/edit tasks
 │   └── FilterBar.tsx     # Filters and sorting options
 ├── context/              # Context API for global state management
 │   └── TaskContext.tsx
 ├── hooks/                # Custom React hooks
 │   └── useTasks.ts
 ├── types/                # TypeScript types
 │   └── taskTypes.ts
 ├── utils/                # Utility functions
 │   └── taskUtils.ts
 ├── App.tsx               # Root component
 ├── main.tsx              # Entry point for React
 ├── index.css             # Global styles
 └── vite-env.d.ts          # TypeScript definitions for Vite
```

## Development

- **Code Style**: Follow the project's coding standards and use Prettier for consistent formatting.
- **Testing**: Add unit tests for components using Jest and React Testing Library.
- **Linting**: Use ESLint to identify and fix problems in your code.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or feedback, please reach out to [your email](mailto:davi.komura@gmail.com).