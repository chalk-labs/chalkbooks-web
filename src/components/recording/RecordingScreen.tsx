import React, { useState, useEffect, useRef } from 'react';
import { Square, X, Check, Mic } from 'lucide-react';
import LoadingScreen from "./LoadingScreen";
import { useDispatch, useSelector } from 'react-redux';
import { addEntry, createEntryFromText, Entry } from '../../redux/entrySlice';
import axios from 'axios';
import { backend } from '../../constants';
import { useNavigate } from 'react-router-dom';
interface RecordingScreenProps {
  onClose: () => void;
  onConfirm: (audioBlob: Blob) => void;
}

export default function RecordingScreen({ onClose, onConfirm }: RecordingScreenProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let interval: number;
    if (isRecording) {
      interval = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    
  }, [user]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setShowConfirm(true);
    
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    // setAnalyzing(true);


    setIsLoading(true);
    
    const text = transcript;
    console.log("Text:", text.trim());

    setTimeout(async () => {
      console.log(user.user.user_id);
      if (text.trim()) {
        const entry: Entry = await createEntryFromText(text, user.user.user_id); // Create an entry object
        dispatch(addEntry(entry)); // Dispatch the entry to Redux store
        const result = await axios.post(`${backend}/api/v1/entry/new`, entry);
        console.log(result);
        
        setIsLoading(false);
        console.log("Added entry");
        navigate("/journal");

      } else {
        setIsLoading(false);
        onClose();
      }
      setIsLoading(false);  // Disable loading after 2000ms
    }, 2000);
  };


    const [transcript, setTranscript] = useState<string>("");
  
    const recognitionRef = useRef<SpeechRecognition | null>(null); // useRef to store reference to recognition instance
  
    // Ensure we use `SpeechRecognition` or `webkitSpeechRecognition`
    const recognitionInstance =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;
  
    const startRecognition = () => {
      if (!recognitionInstance) {
        console.error("Speech Recognition is not supported in this browser.");
        return;
      }
  
      const recognition = new recognitionInstance();
  
      // Store the recognition instance in useRef
      recognitionRef.current = recognition;
  
      recognition.continuous = true; // Allow continuous recognition even with pauses
      recognition.interimResults = true; // Show interim results while speaking
      recognition.maxAlternatives = 1; // Set max alternatives to 1 (optional)
      recognition.lang = "en-US"; // Optional: Set the language (English here)
  
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const latestTranscript = event.results[0][0].transcript;
        setTranscript(latestTranscript); // Update state with recognized speech
      };
  
      recognition.onerror = (event: Event) => {
        console.error("Error during speech recognition:", event);
      };
  
      // Prevent the recognition from stopping automatically after pauses
      recognition.onend = () => {
        if (isRecording) {
          recognition.start(); // Restart recognition if still recording
        }
      };
  
      recognition.start(); // Start the speech recognition process
      setIsRecording(true); // Set recording state to true
    };
  
    const stopRecognition = () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop(); // Stop the recognition manually
      }
      setIsRecording(false); // Set recording state to false when stopped
    };
  

  if (analyzing) {
    return (
      LoadingScreen1(onClose)
    );
  }

  if (showConfirm) {
    return (
      ConfirmRecordingScreen(formatTime, duration, onClose, handleConfirm)
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center">
      <div className="flex items-center justify-center" style={{"marginTop": "20%"}}>
        <h1 className="text-4xl font-bold">How are you today?</h1>
      </div>


      <div style={styles.textBox}>
          <textarea
            value={transcript}
            readOnly
            rows={6}
            placeholder="Your speech will appear here..."
            style={styles.textArea}
          />
        </div>
      <div className="w-full">
        <div className="text-center mb-4">{formatTime(duration)}</div>
        <button 
        // onClick={isRecording ? stopRecognition : startRecognition}
          onClick={() => {
            if (isRecording) {
              stopRecognition()
              handleStopRecording();
            } else {
              setIsRecording(true);
              startRecognition()
            }
          }}
          className="w-24 h-24 bg-purple-100 rounded-full mx-auto flex items-center justify-center"
        >
          {isRecording ? <Square size={32} /> : <Mic size={32} />}
        </button>
      </div>
    </div>
  );
}

function LoadingScreen1(onClose: () => void) {
  return <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
    <div className="text-sm text-gray-500 mb-2">
      {new Date().toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })}
    </div>
    <h1 className="text-3xl font-bold mb-8">Analyzing emotions..</h1>
    <div className="w-16 h-16 bg-purple-100 rounded-full animate-pulse" />
    <button
      onClick={onClose}
      className="mt-auto mb-8 text-gray-500"
    >
      Cancel
    </button>
  </div>;
}

function ConfirmRecordingScreen(formatTime: (seconds: number) => string, duration: number, onClose: () => void, handleConfirm: () => void) {
  return <div className="fixed inset-0 bg-white flex flex-col items-center">
    <div className="text-center p-4 mb-8 items-center justify-center">
      <h2 className="text-xl text-gray-500">
        Confirm to analyze entry or record more
      </h2>
    </div>

    <div className=" flex items-center justify-center" style={{marginTop: "20%", marginBottom: "20%"}}>
      <h1 className="text-4xl font-bold">Confirm Recording?</h1>
    </div>

    <div className="w-full px-8 pb-8">
      <div className="text-center mb-4">{formatTime(duration)}</div>
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={onClose}
          className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <X size={32} />
        </button>
        {/* <button
          className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <Mic size={32} />
        </button> */}
        <button
          onClick={handleConfirm}
          className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center"
        >
          <Check size={32} />
        </button>
      </div>
    </div>
  </div>;
}



// Inline styling for better layout
// Updated style definition for the card component
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as "center", // Ensuring it is explicitly a valid value
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  buttonContainer: {
    marginBottom: "1.5rem",
  },
  recordButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
    width: "100%",
    transition: "background-color 0.3s",
  },
  recordButtonStop: {
    backgroundColor: "#f44336",
  },
  textBox: {
    marginTop: "1rem",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    resize: "none" as "none", // Specify a valid value for resize
  },
};

