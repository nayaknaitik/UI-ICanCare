import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/icancareLogo.svg";
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('adminAuthenticated', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F6FB] px-4 font-[Poppins]">
      <div className="bg-white justify-center items-center p-8 rounded-lg shadow-md w-full max-w-md">
        <img src={Logo} alt="" className='ml-[23%] mb-10' />
        <h2 className="text-2xl font-semibold text-black mb-6 text-center">Admin Login</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#2A8CE0]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#2A8CE0]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2A8CE0] text-white py-2 rounded-lg hover:bg-[#0061ad] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 