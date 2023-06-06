import { Route,Routes } from 'react-router-dom';
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Header from './Components/Layout/header';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Signup></Signup>}>  </Route>
      <Route  path='/login' element={<Login/>}></Route>
      <Route  path='/home' element={<Home/>}></Route>
    </Routes>
    </>
    );
}

export default App;
