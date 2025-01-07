import React, { useEffect, useRef, useState } from "react";
import { RotateCcw, ArrowRightLeft, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addEntry } from "../../redux/entrySlice";
import { useDispatch, useSelector } from "react-redux";
import { Entry, createEntryFromText } from "../../redux/entrySlice";
import LoadingScreen from "./LoadingScreen";
import axios from "axios";
import { backend } from "../../constants";
interface TypingScreenProps {
  onClose: () => void;
}

export default function TypingScreen({ onClose }: TypingScreenProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    
  }, [user]);
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleConfirm = async () => {
    setIsLoading(true);
    
    const text = textareaRef.current?.value || "";
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
    }, 1);
  };
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="fixed inset-0 bg-white">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="text-gray-500">January 4</div>
          <div className="flex gap-2">
            <button className="p-2">
              <RotateCcw size={20} className="text-gray-500" />
            </button>
            <button className="p-2">
              <ArrowRightLeft size={20} className="text-gray-500" />
            </button>

          <button
            onClick={onClose}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <X size={24} />
          </button>
          <button
            onClick={handleConfirm}
            className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
          >
            <Check size={24} />
          </button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">How are you today?</h1>
          <textarea
            ref={textareaRef}
            className="w-full h-[calc(100%-4rem)] resize-none bg-transparent text-lg placeholder-gray-400 focus:outline-none"
            placeholder="Start by answering prompt or write anything you have in mind"
            autoFocus
          />
        </div>

        {/* <div className="flex justify-between p-4 border-t">
        </div> */}
      </div>
    </div>
  );
}
