import { useState } from 'react';
import { TaskItem } from '../TaskItem';
import './TaskList.css';
import { FilterBas } from '../FilterBas/FilterBas';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  description: string; // Adicionando um campo de descrição
}

export const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const toDoTasks: Task[] = [
    { id: 1, title: "Tarefa 1", dueDate: "05/10/2024", description: "Descrição da tarefa 1" },
    { id: 2, title: "Tarefa 2", dueDate: "06/10/2024", description: "Descrição da tarefa 2" }
  ];

  const inProgressTasks: Task[] = [
    { id: 3, title: "Tarefa 3", dueDate: "04/10/2024", description: "Descrição da tarefa 3" }
  ];

  const inReviewTasks: Task[] = [
    { id: 4, title: "Tarefa 4", dueDate: "02/10/2024", description: "Descrição da tarefa 4" }
  ];

  const doneTasks: Task[] = [
    { id: 5, title: "Tarefa 5", dueDate: "01/10/2024", description: "Descrição da tarefa 5" }
  ];

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task); // Define a task selecionada para exibir no modal
  };

  const closeModal = () => {
    setSelectedTask(null); // Fecha o modal
  };

  return (
    <div>
        <FilterBas />
        <div className="kanban-container">
        <div className="kanban-column">
            <h2 className="kanban-title">To Do List</h2>
            {toDoTasks.map(task => (
            <TaskItem key={task.id} task={task} onClick={() => handleTaskClick(task)} />
            ))}
        </div>
        <div className="kanban-column">
            <h2 className="kanban-title">In Progress</h2>
            {inProgressTasks.map(task => (
            <TaskItem key={task.id} task={task} onClick={() => handleTaskClick(task)} />
            ))}
        </div>
        <div className="kanban-column">
            <h2 className="kanban-title">In Review</h2>
            {inReviewTasks.map(task => (
            <TaskItem key={task.id} task={task} onClick={() => handleTaskClick(task)} />
            ))}
        </div>
        <div className="kanban-column">
            <h2 className="kanban-title">Done</h2>
            {doneTasks.map(task => (
            <TaskItem key={task.id} task={task} onClick={() => handleTaskClick(task)} />
            ))}
        </div>

        {/* Modal */}
        {selectedTask && (
            <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <h2>{selectedTask.title}</h2>
                <p><strong>Due Date:</strong> {selectedTask.dueDate}</p>
                <p><strong>Description:</strong> {selectedTask.description}</p>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};
