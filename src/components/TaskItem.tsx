interface Task {
  id: number;
  title: string;
  dueDate: string;
}

export const TaskItem = ({ task }: { task: Task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Due: {task.dueDate}</p>
    </div>
  );
};
