import Signup from './components/Signup'
import MainScreen from './components/MainScreen'


function App() {
  const isLogged = true;
  
  return (
    <>
    {isLogged ? <MainScreen/> :  <Signup />}
    </>
  )
}

export default App
