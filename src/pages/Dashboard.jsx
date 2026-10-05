function Dashboard({ tasks, goals }) {

  const studyProgress =
    goals.length === 0
      ? 0
      : Math.round(
        goals.reduce(
          (total, goal) => total + (goal.progress / goal.target) * 100,
          0
        ) / goals.length
      )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome to StudyFlow
        </h2>

        <p className="mt-2 text-gray-600">
          Organize your studies, manage your goals, and make steady progress.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-sm text-gray-500">Today's Tasks</p>
          <p className="mt-2 text-3xl font-bold">{tasks.length}</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-sm text-gray-500">Active Goals</p>
          <p className="mt-2 text-3xl font-bold">{goals.length}</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-sm text-gray-500">Study Progress</p>
          <p className="mt-2 text-3xl font-bold">{studyProgress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard