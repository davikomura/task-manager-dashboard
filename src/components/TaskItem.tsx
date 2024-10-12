import { Card, CardContent, Typography } from '@mui/material';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  description: string;
}

export const TaskItem = ({ task, onClick }: { task: Task, onClick: () => void }) => {
  return (
    <Card 
      onClick={onClick}
      sx={{ 
        marginBottom: '10px', 
        cursor: 'pointer', 
        '&:hover': { transform: 'scale(1.05)' }, 
        transition: 'transform 0.2s' 
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Due: {task.dueDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
