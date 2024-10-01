import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { TaskList } from './components/TaskList/TaskList.tsx';

const routes = [

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tasks",
        element: <TaskList />,
      },
    ],
  }
];

const router = createBrowserRouter(routes);

export default router;