import { useState } from "react";
import Signup from "./components/Signup";
import MainScreen from "./components/MainScreen";
import { USER_SESSION } from "./constants/storage";
import { Toaster } from "sonner";

function App() {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem(USER_SESSION),
  );

  const handleLogin = (name: string) => {
    localStorage.setItem(USER_SESSION, name);
    setUsername(name);
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_SESSION);
    setUsername(null);
  };

  return (
    <>
      <Toaster position="top-right" richColors />

      {!username ? (
        <Signup onLogin={handleLogin} />
      ) : (
        <MainScreen currentUser={username} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
