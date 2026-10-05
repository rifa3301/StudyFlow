function Navbar({ currentPage, setCurrentPage }) {
  const pages = [
    'Dashboard',
    'Tasks',
    'Goals',
    'Resources',
    'Study Places',
    'Profile',
  ]

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <h1 className="text-2xl font-bold text-blue-600">
            StudyFlow
          </h1>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar