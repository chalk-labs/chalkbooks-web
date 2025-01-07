import React, { useState } from 'react';
import { User } from 'lucide-react';

type AuthCheckProps = {
  children: React.ReactNode;
};

export default function AuthCheck({ children }: AuthCheckProps) {
  // This would be replaced with your actual auth check
  // const isAuthenticated = false;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   if (isAuthenticated) {
//     return <>{children}</>;
//   }

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <div className="absolute top-4 right-4">
        <button className="text-gray-500">Skip</button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mb-8">
          <User className="w-10 h-10 text-coral-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Create account to<br />save progress!
        </h1>
        
        <p className="text-gray-500 mb-12">
          Securely save your entries,<br />
          insights, week summaries and<br />
          journal streak.
        </p>

        <button className="w-full max-w-sm bg-white text-gray-700 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow" onClick={setIsAuthenticated(true)}>
          <img src="https://www.google.com/favicon.ico" alt="" className="w-5 h-5" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}