import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import JournalScreen from './screens/JournalScreen';
import EntryScreen from './screens/EntryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInForm from './components/auth/SignInForm';
import VoiceRecorder from './components/recording/VoiceRecorder';
import RecordingScreen from './components/recording/RecordingScreen';
import SpeechToText from './components/SpeechToText';  // Import the SpeechToText component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<EntryScreen />} />
          <Route path="/journal" element={<JournalScreen />} />
          <Route path="/entry" element={<EntryScreen />} />
          <Route path="/record" element={<VoiceRecorder recordingTime={0} />} />
          {/* <Route path="/record2" element={<RecordingScreen/>} /> */}
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/sst" element={<SpeechToText />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;