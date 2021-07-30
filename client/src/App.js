import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import PortfolioForm from './pages/PortfolioForm';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Logout from './components/Logout';
import AuthRoute from './components/AuthRoute';

function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <Switch>
        <AuthRoute exact path='/' page={Portfolio} />
        <AuthRoute exact path='/edit' page={PortfolioForm} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/logout' component={Logout} />
        <Route exact render={() => <Redirect to='/' />} />
      </Switch>
    </>
  );
}

export default App;
