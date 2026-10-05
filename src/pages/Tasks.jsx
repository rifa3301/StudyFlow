function Tasks({ tasks, setTasks }) {
  const addTask = (event) => {
    event.preventDefault()

    const form = event.target

    const newTask = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      priority: form.priority.value,
      dueDate: form.dueDate.value,
      completed: false,
    }

    setTasks([...tasks, newTask])
    form.reset()
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Tasks
        </h2>

        <p className="mt-2 text-gray-600">
          Add and manage your study tasks.
        </p>
      </div>

      <form
        onSubmit={addTask}
        className="rounded-xl bg-white p-6 shadow"
      >
        <h3 className="mb-4 text-xl font-semibold">
          Add a New Task
        </h3>

        <div className="space-y-4">
          <input
            name="title"
            type="text"
            placeholder="Task title"
            required
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="description"
            placeholder="Task description"
            rows="3"
            className="w-full rounded-lg border p-3"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <select
              name="priority"
              className="rounded-lg border p-3"
              defaultValue="Medium"
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>

            <input
              name="dueDate"
              type="date"
              required
              className="rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Your Tasks
        </h3>

        {tasks.length === 0 ? (
          <div className="rounded-xl bg-white p-6 text-gray-500 shadow">
            No tasks yet. Add your first task above.
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl bg-white p-5 shadow"
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mt-1 h-5 w-5"
                />

                <div className="min-w-0 flex-1">
                  <h4
                    className={`text-lg font-semibold ${
                      task.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-900'
                    }`}
                  >
                    {task.title}
                  </h4>

                  {task.description && (
                    <p className="mt-1 text-gray-600">
                      {task.description}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                      {task.priority}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Tasks