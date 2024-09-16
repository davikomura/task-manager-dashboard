import './Header.css';

export const Header = () => {
  return (
    <aside className="menu header-menu">
      <p className="menu-label">Dashboard</p>
      <ul className="menu-list">
        <li><a className="is-active" href="/">Home</a></li>
        <li><a href="/tasks">Tarefas</a></li>
        <li><a href="/profile">Perfil</a></li>
        <li><a href="/settings">Configurações</a></li>
      </ul>
    </aside>
  )
}
