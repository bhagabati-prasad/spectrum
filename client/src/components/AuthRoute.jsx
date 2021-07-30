import { Redirect, Route, withRouter } from 'react-router-dom';

const AuthRoute = ({ page: Page, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        return <Page {...props} />;
      } else {
        return <Redirect to={{ pathname: '/login' }} />;
      }
    }}
  />
);
export default AuthRoute;
