import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  // Extract the 'role' query parameter from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setRole(queryParams.get('role'));
  }, [location]);

  const handleSignUp = () => {
    // Logic for sign-up (validation, API call)
    // On successful sign-up, store user data and redirect to the appropriate dashboard
    localStorage.setItem('userToken', 'new-user-token'); // Example token storage
    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Sign Up</h2>
        <p className="text-gray-400">You are signing up as a {role}</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
          />
          <button
            type="button"
            onClick={handleSignUp}
            className="w-full p-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
