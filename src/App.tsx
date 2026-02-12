import { useState } from 'react';
import Signup from './components/Signup'
import MainScreen from './components/MainScreen'
import { Toaster } from 'sonner';


function App() {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem('@CodeLeap:username')
  );

  const handleLogin = (name: string) => {
    localStorage.setItem('@CodeLeap:username', name);
    setUsername(name);
  };

  return (
    <>
      <Toaster position="top-right" richColors />

      {!username ? <Signup onLogin={handleLogin} /> : <MainScreen currentUser={username} />}
    </>
  )
}

export default App
