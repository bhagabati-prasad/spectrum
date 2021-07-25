import { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LoginSection, FormSection } from '../styles/LoginStyles';
import WaveBackground from '../components/WaveBackground';
import { ThemeContext } from '../components/ThemeContext';
import { dark_theme, light_theme } from '../styles/_variables';
import ThemeToggleSetting from '../components/ThemeToggleSetting';

const Login = () => {
  const { theme } = useContext(ThemeContext);

  const [darkmode, setDarkmode] = useState('');

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  // toggle body background
  useEffect(() => {
    setDarkmode(theme);
  }, [theme]);

  return (
    <>
      <Helmet>
        <title>Log in</title>
        <style>
          {`
            body {
              background-color: #111;
              background-color: ${
                darkmode === 'light' ? light_theme.body_bg : dark_theme.body_bg
              };
            }
          `}
        </style>
      </Helmet>
      <LoginSection>
        <ThemeToggleSetting editBtn={false} />
        <WaveBackground />
        <FormSection darkMode={theme}>
          <div className='form_container'>
            <h1>Log in</h1>
            <form method='POST' onSubmit={handleSubmit}>
              <div className='form_row'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  pattern='[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                  title='Invalid format'
                  required
                  value={login.email}
                  onChange={handleChange}
                />
              </div>
              <div className='form_row'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  required
                  value={login.password}
                  onChange={handleChange}
                />
              </div>
              <div className='form_row flex-row align-items-center'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='remember_me'
                  id='chkbox'
                ></input>
                <label htmlFor='chkbox'>Remember me.</label>
              </div>
              <div className='form_row'>
                <button type='submit'>Log in</button>
              </div>
            </form>
            <div className='signup_link'>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </div>
          </div>
        </FormSection>
      </LoginSection>
    </>
  );
};

export default Login;
