// src/components/SpeechToText.tsx
import React, { useState } from "react";

const SpeechToText: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // Ensure we use `SpeechRecognition` or `webkitSpeechRecognition`
  const recognitionInstance =
    window.SpeechRecognition || (window as any).webkitSpeechRecognition;

  const startRecognition = () => {
    if (!recognitionInstance) {
      console.error("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new recognitionInstance();
    recognition.interimResults = true; // Show interim results
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const latestTranscript = event.results[0][0].transcript;
      setTranscript(latestTranscript); // Update state with recognized speech
    };

    recognition.onerror = (event: Event) => {
      console.error("Error during speech recognition:", event);
    };

    recognition.start(); // Start the speech recognition process
    setIsRecording(true); // Set recording state to true
  };

  const stopRecognition = () => {
    if (recognitionInstance) {
      recognitionInstance.stop();
    }
    setIsRecording(false); // Set recording state to false when stopped
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Speech to Text</h1>
        <div style={styles.buttonContainer}>
          <button
            onClick={isRecording ? stopRecognition : startRecognition}
            style={styles.recordButton}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
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
      </div>
    </div>
  );
};

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
  

export default SpeechToText;
