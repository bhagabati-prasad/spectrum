import { Redirect, Route, withRouter } from 'react-router-dom';

const SecureRoute = ({ page, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        return withRouter(<page {...props} />);
      } else {
        return <Redirect to='/login' />;
      }
    }}
  />
);
export default SecureRoute;
