import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import JournalScreen from './screens/JournalScreen';
import EntryScreen from './screens/EntryScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SignInForm from './components/auth/SignInForms3';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<JournalScreen />} />
          <Route path="/entry" element={<EntryScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/signin" element={<SignInForm />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;