import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Dashboard } from './Pages/Dashboard.tsx';
import { TaskList } from './Pages/TaskList.tsx';
import { Profile } from './Pages/profile/Profile.tsx';
import { Login } from './Pages/auth/Login.tsx';

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
        path: "/Tasks",
        element: <TaskList />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  }
];

const router = createBrowserRouter(routes);

export default router;