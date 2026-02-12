import { useState } from 'react';
import Signup from './components/Signup'
import MainScreen from './components/MainScreen'
import { STORAGE_KEYS } from './constants/storage';
import { Toaster } from 'sonner';


function App() {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem(STORAGE_KEYS.USER_NAME)
  );

  const handleLogin = (name: string) => {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
    setUsername(name);
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.USER_NAME);
    setUsername(null);
  };

  return (
    <>
      <Toaster position="top-right" richColors />

      {!username ? <Signup onLogin={handleLogin} /> : <MainScreen currentUser={username} onLogout={handleLogout} />}
    </>
  )
}

export default App
