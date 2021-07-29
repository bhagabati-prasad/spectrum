import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import PortfolioForm from './pages/PortfolioForm';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <Switch>
        <Route exact path='/' component={Portfolio} />
        <Route path='/edit' component={PortfolioForm} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </>
  );
}

export default App;
