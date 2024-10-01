import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return (
    <>
      {/* Cabeçalho com nome do usuário e barra de pesquisa */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="welcome-text">
            Welcome, <span className="user-name">Andrew Simon</span>
          </span>
        </div>
        <div className="top-bar-center">
          <input
            type="text"
            className="search-bar"
            placeholder="Search here..."
          />
        </div>
        <div className="top-bar-right">
          <button className="icon-button">
            <i className="fa fa-bell"></i>
          </button>
          <button className="icon-button">
            <i className="fa fa-question-circle"></i>
          </button>
        </div>
      </div>

      {/* Menu lateral existente */}
      <aside className="menu header-menu">
        <p className="menu-label">Task Manager</p>
        <ul className="menu-list">
          <li><a className="is-active" href="/">Home</a></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>

        {/* Seção de usuário clicável no final do menu */}
        <Link to="/profile" className="user-info">
          <div className="user-avatar">
            <img src="https://via.placeholder.com/40" alt="Avatar" />
          </div>
          <div className="user-details">
            <p className="user-name">Andrew Simon</p>
            <p className="user-email">andreww@gmail.com</p>
          </div>
        </Link>
      </aside>
    </>
  );
};
