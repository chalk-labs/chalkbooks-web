import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        console.log("sign in");
    } catch (err) {
      setError('Failed to sign in');
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-orange-300 rounded-full mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-2">Create account to save progress!</h2>
          <p className="text-gray-600">
            Securely save your entries, insights, week summaries and journal streak.
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg bg-white"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-full py-3 font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-rose-50 text-gray-500">Or continue with</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 rounded-full py-3 font-medium border border-gray-300" >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        <button className="text-gray-500 w-full text-center">Skip</button>
      </div>
    </div>
  );
};

export default SignInForm;