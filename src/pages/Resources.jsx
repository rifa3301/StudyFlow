import { useEffect, useState } from 'react'

function Resources() {
  const [search, setSearch] = useState('')
  const [resources, setResources] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const limit = 2

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true)

        const response = await fetch(
          `http://localhost:5000/api/resources?page=${page}&limit=${limit}`
        )

        const data = await response.json()

        setResources(data.resources)
        setTotalPages(data.totalPages)
      } catch (error) {
        console.error('Error fetching resources:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [page])

  const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Study Resources
        </h2>

        <p className="mt-2 text-gray-600">
          Find useful resources for your studies.
        </p>
      </div>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search resources..."
        className="w-full rounded-lg border bg-white p-3"
      />

      {loading ? (
        <div className="rounded-xl bg-white p-6 text-center text-gray-500 shadow">
          Loading resources...
        </div>
      ) : (
        <>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="rounded-xl bg-white p-5 shadow"
              >
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {resource.category}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {resource.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {resource.description ||
                    'Useful study material for this subject.'}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Type: {resource.type || 'Study Material'}
                </p>

                <a
                  href={resource.url || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                >
                  Open Resource
                </a>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="rounded-xl bg-white p-6 text-center text-gray-500 shadow">
              No resources found.
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="rounded-lg border bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setPage(index + 1)}
                className={`rounded-lg px-4 py-2 text-sm ${
                  page === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'border bg-white'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="rounded-lg border bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Resources