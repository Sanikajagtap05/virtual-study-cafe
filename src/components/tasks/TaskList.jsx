import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="alert alert-light text-center shadow-sm rounded-4">
        No tasks yet 😊
      </div>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}