import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      navigate('/admin');
    } catch (error) {
      toast.error('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-serif text-center text-stone-800 mb-8">
          Admin Login
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-serenity-pink focus:ring focus:ring-serenity-pink/50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-serenity-pink focus:ring focus:ring-serenity-pink/50"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-serenity-pink text-white py-2 px-4 rounded-md hover:bg-serenity-pink/90 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;