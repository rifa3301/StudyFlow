import { useState } from 'react'

function StudyPlaces() {
  const [search, setSearch] = useState('')

  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'University Library',
      description: 'A quiet place for individual study.',
      location: 'University Campus',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Central Library',
      description: 'Suitable for focused study and reading.',
      location: 'Central Campus',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Department Study Room',
      description: 'A convenient place for group study.',
      location: 'CSE Department',
      rating: 4.0,
    },
  ])

  const filteredPlaces = places.filter((place) =>
    `${place.name} ${place.description} ${place.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const increaseRating = (id) => {
    setPlaces(
      places.map((place) => {
        if (place.id !== id) {
          return place
        }

        return {
          ...place,
          rating: Math.min(
            5,
            Number((place.rating + 0.1).toFixed(1))
          ),
        }
      })
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Study Places
        </h2>

        <p className="mt-2 text-gray-600">
          Find suitable places for studying.
        </p>
      </div>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search study places..."
        className="w-full rounded-lg border bg-white p-3"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="rounded-xl bg-white p-5 shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {place.name}
            </h3>

            <p className="mt-2 text-gray-600">
              {place.description}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Location: {place.location}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold">
                ⭐ {place.rating.toFixed(1)}
              </span>

              <button
                onClick={() => increaseRating(place.id)}
                disabled={place.rating >= 5}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:bg-gray-300"
              >
                Rate
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="rounded-xl bg-white p-6 text-center text-gray-500 shadow">
          No study places found.
        </div>
      )}
    </div>
  )
}

export default StudyPlaces