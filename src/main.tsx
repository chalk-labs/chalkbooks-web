import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Provider } from 'react-redux';
import { persistor, store} from './redux/store.ts';
import { GoogleOAuthProvider } from "@react-oauth/google"
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <GoogleOAuthProvider clientId='702959074493-ss16csbirjtr4n9dv6l5grd4s35tdh6m.apps.googleusercontent.com'>
      <StrictMode>
        <App />
      </StrictMode>,
    </GoogleOAuthProvider>
    </PersistGate>
  </Provider>

);
