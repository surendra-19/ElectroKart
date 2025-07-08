import React, { useState } from 'react';

const Login = ({ onSubmit, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Login
      </button>

      <div className="text-center mt-4">
        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
          Forgot Password?
        </a>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};
export default Login;