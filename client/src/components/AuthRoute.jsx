import { Redirect, Route, withRouter } from 'react-router-dom';

const AuthRoute = ({ page, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        return <Redirect to='/edit' />;
      } else {
        return withRouter(<page {...props} />);
      }
    }}
  />
);
export default AuthRoute;
