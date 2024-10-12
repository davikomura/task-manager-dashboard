import { useState } from 'react';
import { TaskItem } from '../components/TaskItem';
import { Box, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { FilterBas } from '../components/filters/FilterBas';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  description: string;
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
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  const addNewTask = (columnTitle: string) => {
    console.log(`Adding new task to column: ${columnTitle}`);
    // Lógica de adicionar novas tasks
  };

  return (
    <Box sx={{ padding: '20px', marginLeft: '250px', height: '100vh' }}>
      <FilterBas />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
        <TaskColumn title="To Do List" tasks={toDoTasks} onTaskClick={handleTaskClick} onAddTask={addNewTask} />
        <TaskColumn title="In Progress" tasks={inProgressTasks} onTaskClick={handleTaskClick} onAddTask={addNewTask} />
        <TaskColumn title="In Review" tasks={inReviewTasks} onTaskClick={handleTaskClick} onAddTask={addNewTask} />
        <TaskColumn title="Done" tasks={doneTasks} onTaskClick={handleTaskClick} onAddTask={addNewTask} />
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
  onAddTask: (columnTitle: string) => void;
}

const TaskColumn = ({ title, tasks, onTaskClick, onAddTask }: TaskColumnProps) => (
  <Box sx={{ width: '100%', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
    {/* Contêiner para centralizar o título e o botão */}
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>{title}</Typography>
      <IconButton onClick={() => onAddTask(title)}>
        <AddIcon />
      </IconButton>
    </Box>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} onClick={() => onTaskClick(task)} /> 
    ))}
  </Box>
);
