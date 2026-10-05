import { useState } from 'react'

function Resources() {
  const [search, setSearch] = useState('')

  const resources = [
    {
      id: 1,
      title: 'Data Communication Basics',
      description:
        'Introduction to the basic concepts of data communication.',
      category: 'CSE 513',
      type: 'Video',
      url: 'https://www.youtube.com/',
    },
    {
      id: 2,
      title: 'C++ Programming',
      description:
        'Useful material for practicing C++ programming concepts.',
      category: 'Programming',
      type: 'Article',
      url: 'https://cplusplus.com/',
    },
    {
      id: 3,
      title: 'Database Management Systems',
      description:
        'Study material for database concepts and SQL.',
      category: 'DBMS',
      type: 'Article',
      url: 'https://www.w3schools.com/sql/',
    },
  ]

  const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.description} ${resource.category}`
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
              {resource.description}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Type: {resource.type}
            </p>

            <a
              href={resource.url}
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
    </div>
  )
}

export default Resources