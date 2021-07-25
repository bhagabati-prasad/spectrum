import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormSection, SignupSection } from '../styles/SignupStyles';
import WaveBackground from '../components/WaveBackground';
import { ThemeContext } from '../components/ThemeContext';
import { dark_theme, light_theme } from '../styles/_variables';
import ThemeToggleSetting from '../components/ThemeToggleSetting';

const Signup = () => {
  const { theme } = useContext(ThemeContext);

  const [darkmode, setDarkmode] = useState('');

  const [signup, setSignup] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    phone: '',
    domain: '',
    address: '',
    password: '',
  });

  const handleChange = (e) =>
    setSignup({ ...signup, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signup);
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
                  <label htmlFor='domain'>Domain *</label>
                  <input
                    type='text'
                    name='domain'
                    id='domain'
                    placeholder='e.g: UI/UX, Web Design, Mobile App Design'
                    required
                    value={signup.domain}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='d-flex flex-column flex-md-row justify-content-between'>
                <div className='form_box'>
                  <label htmlFor='address'>Address *</label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='Plot, street, area, city, state, pincode'
                    required
                    value={signup.address}
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
                    pattern='[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                    title='Invalid format'
                    required
                    value={signup.email}
                    onChange={handleChange}
                  />
                </div>
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
              </div>
              <p className='err_msg text-danger mt-3'></p>
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
