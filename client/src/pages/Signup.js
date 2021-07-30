import { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormSection, SignupSection } from '../styles/SignupStyles';
import WaveBackground from '../components/WaveBackground';
import { ThemeContext } from '../components/ThemeContext';
import { UserContext } from '../components/UserContext';
import { dark_theme, light_theme } from '../styles/_variables';
import ThemeToggleSetting from '../components/ThemeToggleSetting';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      history.push('/edit');
    }
  });

  const { theme } = useContext(ThemeContext);
  const { setUserInfo } = useContext(UserContext);

  const [darkmode, setDarkmode] = useState('');
  const [term, setTerm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [signup, setSignup] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    conPassword: '',
  });

  const handleChange = (e) =>
    setSignup({ ...signup, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (term) {
        if (signup.password === signup.conPassword) {
          const res = await axios.post('/api/signup', { ...signup });
          if (res.data?.error) {
            setErrorMsg(res.data.error);
          } else {
            setErrorMsg('');
            setUserInfo({ ...res.data.user });
            localStorage.setItem('auth-token', res.data.token);
            history.push('/edit');
          }
        } else {
          setErrorMsg("Password didn't match.");
        }
      } else {
        setErrorMsg('Accept T&C.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // toggle body background
  useEffect(() => {
    setDarkmode(theme);
  }, [theme]);

  return (
    <>
      <Helmet>
        <title>Register</title>
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
      <SignupSection>
        <ThemeToggleSetting editBtn={false} />
        <WaveBackground />
        <FormSection darkMode={theme}>
          <div className='form_container'>
            <h1>Sign up</h1>
            <form method='POST' onSubmit={handleSubmit}>
              <div className='d-flex flex-column flex-md-row justify-content-between'>
                <div className='form_box'>
                  <label htmlFor='fname'>First Name *</label>
                  <input
                    type='text'
                    name='fname'
                    id='fname'
                    placeholder='e.g: John'
                    required
                    value={signup.fname}
                    onChange={handleChange}
                  />
                </div>
                <div className='form_box'>
                  <label htmlFor='lname'>Middle Name</label>
                  <input
                    type='text'
                    name='mname'
                    id='mname'
                    placeholder='e.g: Doe'
                    required
                    value={signup.mname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='d-flex flex-column flex-md-row justify-content-between'>
                <div className='form_box'>
                  <label htmlFor='lname'>Last Name *</label>
                  <input
                    type='text'
                    name='lname'
                    id='lname'
                    placeholder='e.g: Doe'
                    required
                    value={signup.lname}
                    onChange={handleChange}
                  />
                </div>
                <div className='form_box'>
                  <label htmlFor='phone'>Phone(+91) *</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    minLength='10'
                    maxLength='12'
                    placeholder='e.g: 123 456 7890'
                    required
                    value={signup.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='d-flex flex-column flex-md-row justify-content-between'>
                <div className='form_box'>
                  <label htmlFor='email'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='e.g: name@email.com'
                    pattern='[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                    title='Invalid format'
                    required
                    value={signup.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='d-flex flex-column flex-md-row justify-content-between'>
                <div className='form_box'>
                  <label htmlFor='password'>Password *</label>
                  <input
                    type='password'
                    name='password'
                    minLength='6'
                    placeholder='minimum 6 character long'
                    id='password'
                    required
                    value={signup.password}
                    onChange={handleChange}
                  />
                </div>
                <div className='form_box'>
                  <label htmlFor='con-password'>Confirm Password *</label>
                  <input
                    type='text'
                    name='conPassword'
                    minLength='6'
                    placeholder='minimum 6 character long'
                    id='con-password'
                    required
                    value={signup.conPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='mt-3'>
                <input
                  type='checkbox'
                  id='check'
                  defaultChecked={term}
                  defaultChecked={term}
                  onClick={() => setTerm(!term)}
                  required
                />
                <label htmlFor='check' className='ms-2'>
                  Accept our T&C.
                </label>
              </div>
              <p className='text-danger mt-3'>{errorMsg}</p>
              <div className='form_box'>
                <button type='submit'>Register</button>
              </div>
            </form>
            <div className='login_link'>
              Already have an account? <Link to='/login'>Log in</Link>
            </div>
          </div>
        </FormSection>
      </SignupSection>
    </>
  );
};

export default Signup;
