import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { combineReducers } from 'redux';
import userReducer from './userSlice';
import entryReducer from './entrySlice';

// Persist configuration for user and entry reducers
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'entry'], // Specify which reducers to persist
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  entry: entryReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = createStore(persistedReducer);

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
