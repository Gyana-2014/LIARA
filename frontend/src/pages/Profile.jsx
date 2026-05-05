import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' })

  useEffect(() => {
    // Get from localStorage (assumes user info is stored)
    const storedName = localStorage.getItem('name') || 'Guest'
    const storedEmail = localStorage.getItem('email') || 'example@example.com'

    setUser({
      name: storedName,
      email: storedEmail,
    })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h2>

        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-1">Name</div>
          <div className="text-lg font-semibold text-gray-800">{user.name}</div>
        </div>

        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-1">Email</div>
          <div className="text-lg font-semibold text-gray-800">{user.email}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
