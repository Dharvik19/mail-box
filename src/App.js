import { Route,Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
function App() {
  return (
    <Switch>
      <Route exact path='/'>  <Signup></Signup></Route>
      <Route exact path='/login'><Login/></Route>
      <Route exact path='/home'><Home/></Route>
    </Switch>
    );
}

export default App;
