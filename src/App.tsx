import Signup from './components/Signup'
import MainScreen from './components/MainScreen'
import { Toaster } from 'sonner';


function App() {
  const isLogged = true;
  
  return (
    <>
      <Toaster position="top-right" richColors />

      {isLogged ? <MainScreen/> :  <Signup />}
    </>
  )
}

export default App
