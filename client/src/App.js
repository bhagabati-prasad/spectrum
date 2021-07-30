import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import PortfolioForm from './pages/PortfolioForm';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Logout from './components/Logout';
import AuthRoute from './components/AuthRoute';
import SecureRoute from './components/SecureRoute';

function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <Switch>
        <SecureRoute exact path='/' page={Portfolio} />
        <SecureRoute exact path='/edit' page={PortfolioForm} />
        <AuthRoute exact path='/login' page={Login} />
        <AuthRoute exact path='/signup' page={Signup} />
        <SecureRoute exact path='/logout' page={Logout} />
        <Route exact render={() => <Redirect to='/' />} />
      </Switch>
    </>
  );
}

export default App;
