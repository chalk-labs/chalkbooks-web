import { useEffect } from 'react';
import { X, Mic, Check, RefreshCcw } from 'lucide-react';

type VoiceRecorderProps = {
  isConfirmScreen?: boolean;
  onStop?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  recordingTime: number;
  setRecordingTime?: (time: number) => void;
};

export default function VoiceRecorder({
  isConfirmScreen = false,
  onStop,
  onConfirm,
  onCancel,
  recordingTime,
  setRecordingTime,
}: VoiceRecorderProps) {
  useEffect(() => {
    if (!isConfirmScreen && setRecordingTime) {
      const interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isConfirmScreen, setRecordingTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-4">How are you today?</h1>
      <button className="mb-20">
        <RefreshCcw className="w-6 h-6 text-gray-400" />
      </button>

      {isConfirmScreen ? (
        <>
          <p className="text-gray-500 mb-8">Confirm to analyze entry or record more</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={onCancel}
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-gray-600" />
              </div>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                {formatTime(recordingTime)}
              </span>
            </div>

            <button 
              onClick={onConfirm}
              className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
            >
              <Check className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div 
            className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mb-4 cursor-pointer"
            onClick={onStop}
          >
            <div className="w-16 h-16 bg-black rounded-lg" />
          </div>
          <span className="text-gray-500">{formatTime(recordingTime)}</span>
        </>
      )}
    </div>
  );
}