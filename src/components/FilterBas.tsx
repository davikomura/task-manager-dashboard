import './FilterBas.css';

export const FilterBas = () => {

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('pt-BR', options);
    
    const month = today.toLocaleString('pt-BR', { month: 'long' });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  
    return (
      <div className="filter-bar">
        <div className="filter-left">
          <div className="month-section">
            <h3>{capitalizedMonth}</h3>
            <p>Hoje é {formattedDate}</p>
          </div>
          <div className="board-section">
            <span>Board -</span>
            <select className="task-select">
              <option>Daily Tasks</option>
              <option>Weekly Tasks</option>
              <option>Monthly Tasks</option>
            </select>
          </div>
        </div>
        
        <div className="filter-center">
          <div className="team-avatars">
            <img src="https://via.placeholder.com/32" alt="Avatar 1" />
            <img src="https://via.placeholder.com/32" alt="Avatar 2" />
            <img src="https://via.placeholder.com/32" alt="Avatar 3" />
            <img src="https://via.placeholder.com/32" alt="Avatar 4" />
            <img src="https://via.placeholder.com/32" alt="Avatar 5" />
          </div>
        </div>
  
        <div className="filter-right">
          <button className="filter-button">
            <i className="fa fa-filter"></i> Filters
          </button>
          <button className="create-task-button">
            <i className="fa fa-plus"></i> Create Task
          </button>
        </div>
      </div>
    )
}