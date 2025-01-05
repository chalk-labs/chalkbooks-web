import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import JournalScreen from './screens/JournalScreen';
import EntryScreen from './screens/EntryScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<JournalScreen />} />
          <Route path="/entry" element={<EntryScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;