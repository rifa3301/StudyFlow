import { useState } from 'react'

function Profile() {
  const [profile, setProfile] = useState({
    name: 'StudyFlow User',
    username: 'studyuser',
    email: 'student@example.com',
    department: 'Computer Science & Engineering',
    bio: 'I use StudyFlow to organize my studies and track my progress.',
  })

  const [editing, setEditing] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setEditing(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Profile
        </h2>

        <p className="mt-2 text-gray-600">
          Manage your StudyFlow profile.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <div className="mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
            {profile.name.charAt(0)}
          </div>

          <h3 className="mt-4 text-2xl font-semibold">
            {profile.name}
          </h3>

          <p className="text-gray-500">
            @{profile.username}
          </p>
        </div>

        {!editing ? (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="font-medium">{profile.department}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Bio</p>
              <p className="font-medium">{profile.bio}</p>
            </div>

            <button
              onClick={() => setEditing(true)}
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full rounded-lg border p-3"
              required
            />

            <input
              name="username"
              value={profile.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full rounded-lg border p-3"
              required
            />

            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-lg border p-3"
              required
            />

            <input
              name="department"
              value={profile.department}
              onChange={handleChange}
              placeholder="Department"
              className="w-full rounded-lg border p-3"
            />

            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Write something about yourself"
              rows="4"
              className="w-full rounded-lg border p-3"
            />

            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
              >
                Save Profile
              </button>

              <button
                type="button"
                onClick={() => setEditing(false)}
                className="rounded-lg bg-gray-200 px-5 py-2 font-medium text-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Profile