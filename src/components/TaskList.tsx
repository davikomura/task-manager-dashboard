import { useState } from 'react';
import { TaskItem } from './TaskItem'; // Agora vamos manter o uso deste componente
import { Box, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FilterBas } from './FilterBas';

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
    <Box sx={{ padding: '20px', marginLeft: '250px', height: '100vh' }}>
      <FilterBas />
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <TaskColumn title="To Do List" tasks={toDoTasks} onTaskClick={handleTaskClick} />
        <TaskColumn title="In Progress" tasks={inProgressTasks} onTaskClick={handleTaskClick} />
        <TaskColumn title="In Review" tasks={inReviewTasks} onTaskClick={handleTaskClick} />
        <TaskColumn title="Done" tasks={doneTasks} onTaskClick={handleTaskClick} />
      </Box>

      {/* Modal */}
      {selectedTask && (
        <Dialog open={true} onClose={closeModal}>
          <DialogTitle>
            {selectedTask.title}
            <IconButton
              edge="end"
              color="inherit"
              onClick={closeModal}
              aria-label="close"
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1"><strong>Due Date:</strong> {selectedTask.dueDate}</Typography>
            <Typography variant="body1"><strong>Description:</strong> {selectedTask.description}</Typography>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

const TaskColumn = ({ title, tasks, onTaskClick }: TaskColumnProps) => (
  <Box sx={{ width: '22%', padding: '10px' }}>
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>{title}</Typography>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} onClick={() => onTaskClick(task)} /> 
    ))}
  </Box>
);
