function Goals({ goals, setGoals }) {
  const addGoal = (event) => {
    event.preventDefault()

    const form = event.target

    const newGoal = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      target: Number(form.target.value),
      progress: 0,
    }

    setGoals([...goals, newGoal])
    form.reset()
  }

  const increaseProgress = (id) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id !== id) {
          return goal
        }

        const newProgress = Math.min(
          goal.progress + 1,
          goal.target
        )

        return {
          ...goal,
          progress: newProgress,
        }
      })
    )
  }

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Goals
        </h2>

        <p className="mt-2 text-gray-600">
          Set study goals and track your progress.
        </p>
      </div>

      <form
        onSubmit={addGoal}
        className="rounded-xl bg-white p-6 shadow"
      >
        <h3 className="mb-4 text-xl font-semibold">
          Add a New Goal
        </h3>

        <div className="space-y-4">
          <input
            name="title"
            type="text"
            placeholder="Goal title"
            required
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="description"
            placeholder="Goal description"
            rows="3"
            className="w-full rounded-lg border p-3"
          />

          <input
            name="target"
            type="number"
            min="1"
            placeholder="Target (e.g. 10)"
            required
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Add Goal
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Your Goals
        </h3>

        {goals.length === 0 ? (
          <div className="rounded-xl bg-white p-6 text-gray-500 shadow">
            No goals yet. Add your first study goal above.
          </div>
        ) : (
          goals.map((goal) => {
            const percentage = Math.round(
              (goal.progress / goal.target) * 100
            )

            return (
              <div
                key={goal.id}
                className="rounded-xl bg-white p-5 shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {goal.title}
                    </h4>

                    {goal.description && (
                      <p className="mt-1 text-gray-600">
                        {goal.description}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Progress</span>
                    <span>
                      {goal.progress} / {goal.target} ({percentage}%)
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={() => increaseProgress(goal.id)}
                  disabled={goal.progress >= goal.target}
                  className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {goal.progress >= goal.target
                    ? 'Goal Completed'
                    : 'Increase Progress'}
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Goals