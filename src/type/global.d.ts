// src/types/global.d.ts

// Declare SpeechRecognition for TypeScript to recognize it
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition; // For standard browsers (non-Safari)
    webkitSpeechRecognition: typeof webkitSpeechRecognition; // For Safari/older Webkit browsers
  }

  // Event for the result of speech recognition
  interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
    error?: string;
  }

  // Interface for the list of recognition results
  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
  }

  // Interface for each recognition result
  interface SpeechRecognitionResult {
    isFinal: boolean;
    [index: number]: SpeechRecognitionAlternative;
  }

  // Interface for each recognition alternative (transcript and confidence)
  interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }

  // Basic interface for speech recognition
  interface SpeechRecognition {
    start(): void;
    stop(): void;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: Event) => void;
    interimResults: boolean;
  }

  // Webkit-specific interface for speech recognition
  interface WebkitSpeechRecognition extends SpeechRecognition {}
}

// Ensuring TypeScript recognizes it as a module
export {};
