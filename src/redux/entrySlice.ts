
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { backend } from '../constants';
export async function createEntryFromText1(text: string, userId: string) {
  const result = await axios.post(`${backend}/api/v1/llm/newEntry`, {
    text: text
  });
  const data : Entry = result.data
  // serialise the result into entry object
  return data;
}

export async function createEntryFromText(text: string, userId: string) {
  await axios.get(`${backend}`);
  const entry: Entry = {
    id: `${Date.now()}`,
    user_id: userId,
    title: text.slice(0,10),
    content: text,
    mood: "happy",
    date: new Date().toISOString().split('T')[0],
    activities: [],
    feelings: []
  }; // Create an entry object
  return entry;
}



export interface Entry {
  id: string;
  user_id: string;
  title: string;
  content: string;
  images?: string[];
  mood: string;
  date: string;
  activities: string[];
  feelings: Array<{ emoji: string; text: string }>;
}

interface EntryState {
  entries: Entry[];
}

const initialEntries: Entry[] = [
];
const initialState: EntryState = {
  entries: initialEntries
};


const entrySlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    clearEntry: (state) => {
      state.entries = [];
    },
    addEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.unshift(action.payload);
    }
  },
});

export const { addEntry, clearEntry } = entrySlice.actions;
export default entrySlice.reducer;

