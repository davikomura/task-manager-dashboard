import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return (
    <aside className="menu header-menu">
      <p className="menu-label">Task Manager</p>
      <ul className="menu-list">
        <li><a className="is-active" href="/">Home</a></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  )
}
