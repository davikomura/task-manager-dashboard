import { TaskItem } from './TaskItem';
import './TaskList.css';

interface Task {
    id: number;
    title: string;
    dueDate: string;
  }

export const TaskList = () => {
    const toDoTasks: Task[] = [
        { id: 1, title: "Tarefa 1", dueDate: "05/10/2024" },
        { id: 2, title: "Tarefa 2", dueDate: "06/10/2024" }
    ];
    
    const inProgressTasks: Task[] = [
    { id: 3, title: "Tarefa 3", dueDate: "04/10/2024" }
    ];

    const inReviewTasks: Task[] = [
    { id: 4, title: "Tarefa 4", dueDate: "02/10/2024" }
    ];

    const doneTasks: Task[] = [
    { id: 5, title: "Tarefa 5", dueDate: "01/10/2024" }
    ];

    return (
        <div className="kanban-container">
            <div className="kanban-column">
            <h2 className="kanban-title">To Do List</h2>
            {toDoTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
            </div>
            <div className="kanban-column">
            <h2 className="kanban-title">In Progress</h2>
            {inProgressTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
            </div>
            <div className="kanban-column">
            <h2 className="kanban-title">In Review</h2>
            {inReviewTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
            </div>
            <div className="kanban-column">
            <h2 className="kanban-title">Done</h2>
            {doneTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
            </div>
        </div>
    )
}
