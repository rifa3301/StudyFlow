import Profile from './pages/Profile'
import StudyPlaces from './pages/StudyPlaces'
import Resources from './pages/Resources'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Goals from './pages/Goals'

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')
  const [tasks, setTasks] = useState([])
  const [goals, setGoals] = useState([])

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="mx-auto max-w-6xl p-6">
        {currentPage === 'Dashboard' && (
          <Dashboard
            tasks={tasks}
            goals={goals}
          />
        )}

        {currentPage === 'Tasks' && (
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
          />
        )}

        {currentPage === 'Goals' && (
          <Goals
            goals={goals}
            setGoals={setGoals}
          />
        )}

        {currentPage === 'Resources' && (
          <Resources />
        )}

        {currentPage === 'Study Places' && (
          <StudyPlaces />
        )}

        {currentPage === 'Profile' && (
          <Profile />
        )}

        {currentPage !== 'Dashboard' &&
          currentPage !== 'Tasks' &&
          currentPage !== 'Goals' &&
          currentPage !== 'Resources' &&
          currentPage !== 'Study Places' &&
          currentPage !== 'Profile' && (
            <div className="rounded-xl bg-white p-8 shadow">
              <h2 className="text-2xl font-bold">
                {currentPage}
              </h2>

              <p className="mt-2 text-gray-600">
                This section is under development.
              </p>
            </div>
          )}
      </main>
    </div>
  )
}

export default App