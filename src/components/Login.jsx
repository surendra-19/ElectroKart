import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../utils/Logo';

const Login = ({ onSubmit, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
            <Logo/>
        </h2>
        <p className="text-center text-gray-500 mb-6">Welcome back!</p>

        <div className="flex mb-6 border border-gray-300 rounded-lg overflow-hidden">
          <button
            className={`w-1/2 py-2 font-medium cursor-pointer bg-white hover:text-blue-600 ${window.location.pathname === '/login' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className={`w-1/2 py-2 font-medium cursor-pointer bg-gray-100 hover:text-blue-600 ${window.location.pathname === '/register' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
