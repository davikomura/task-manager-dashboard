import './TopBar.css'

export const TopBar = () => {
  return (
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
  )
}
