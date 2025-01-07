import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../redux/userSlice';
import { addEntry } from '../../redux/entrySlice';

function SignInForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);

  const handleSuccess = async (response: { credential: any; }) => {
    const { credential } = response;
    console.log("Google JWT:", credential);

    // Send token to FastAPI for verification
    const result = await axios.post('http://localhost:8000/api/v1/auth/google', {
      token: credential
    });
    if (!result.data || result.data.message !== "User authenticated") {
      setError('Failed to sign in with Google');
      return;
    }
    dispatch(setUser(result.data));
    const result2 = await axios.post('http://localhost:8000/api/v1/user/login', {
        email: result.data.email,
        name: result.data.name,
        id: result.data.user_id
    });
    const entries = await axios.get(`http://localhost:8000/api/v1/entry/user/${result.data.user_id}`);
    for (const entry of entries.data) {
      console.log(entry);
      dispatch(addEntry(entry));
    }

    console.log("Backend Response:", result.data);
    navigate('/profile');
  };
  const [error, setError] = useState('');

  const handleFailure = () => {
    console.error("Google Sign-In Failed");
  };
  const handleSkipping = () => {
    navigate('/');
    console.log("User skipped the sign-in process");
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

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-rose-50 text-gray-500">Or continue with</span>
          </div>
        </div>

        <GoogleLogin 
          onSuccess={handleSuccess} 
          onError={handleFailure} 
      />

        <button 
          className="text-gray-500 w-full text-center" 
          onClick={handleSkipping}
        >Skip</button>
      </div>
    </div>

  );
}

export default SignInForm;