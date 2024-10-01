interface Task {
  id: number;
  title: string;
  dueDate: string;
  description: string;
}

export const TaskItem = ({ task, onClick }: { task: Task, onClick: () => void }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-due-date">Due: {task.dueDate}</p>
    </div>
  );
};
