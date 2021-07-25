import { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormSection, SignupSection } from '../styles/SignupStyles';
import WaveBackground from '../components/WaveBackground';
import { ThemeContext } from '../components/ThemeContext';
import { dark_theme, light_theme } from '../styles/_variables';
import ThemeToggleSetting from '../components/ThemeToggleSetting';

const Signup = () => {
  const [darkmode, setDarkmode] = useState('');

  const { theme } = useContext(ThemeContext);

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
        <ThemeToggleSetting />
        <WaveBackground />
        <FormSection darkMode={theme}>
          <div class='form_container'>
            <h1>Sign up</h1>
            <form method='POST'>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='form_box'>
                  <label htmlFor='fname'>First Name *</label>
                  <input
                    type='text'
                    name='fname'
                    id='fname'
                    placeholder='e.g: John'
                    required
                  />
                </div>
                <div class='form_box'>
                  <label htmlFor='lname'>Last Name *</label>
                  <input
                    type='text'
                    name='lname'
                    id='lname'
                    placeholder='e.g: Doe'
                    required
                  />
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='form_box'>
                  <label htmlFor='gender'>Gender *</label>
                  <select name='gender' id='gender' required>
                    <option value=''>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div class='form_box'>
                  <label htmlFor='dob'>Date of birth *</label>
                  <input type='date' name='dob' id='dob' required />
                </div>
                <div class='form_box'>
                  <label htmlFor='branch'>Branch *</label>
                  <select name='branch' id='branch' required>
                    <option value=''>Select</option>
                    <option value='B.Tech'>B.Tech</option>
                    <option value='Int.M.Sc'>Int.M.Sc</option>
                    <option value='Int.M.C.A'>Int.M.C.A</option>
                    <option value='M.C.A'>M.C.A</option>
                    <option value='M.Tech'>M.Tech</option>
                  </select>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='form_box'>
                  <label htmlFor='year'>Year *</label>
                  <select name='year' id='year' required>
                    <option value=''>Select</option>
                    <option value='1st'>1st</option>
                    <option value='2nd'>2nd</option>
                    <option value='3rd'>3rd</option>
                    <option value='4th'>4th</option>
                  </select>
                </div>
                <div class='form_box'>
                  <label htmlFor='email'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='e.g: name@email.com'
                    pattern='[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                    title='Invalid format'
                    required
                  />
                </div>
                <div class='form_box'>
                  <label htmlFor='phone'>Phone(+91) *</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    minlength='10'
                    maxlength='12'
                    placeholder='e.g: 123 456 7890'
                    required
                  />
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='form_box'>
                  <label htmlFor='domain'>Domain *</label>
                  <input
                    type='text'
                    name='domain'
                    id='domain'
                    placeholder='e.g: UI/UX, Web Design, Mobile App Design'
                    required
                  />
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='form_box'>
                  <label htmlFor='address'>Address *</label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='Plot, street, area, city, state, pincode'
                    required
                  />
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='form_box'>
                  <label htmlFor='password'>Password *</label>
                  <input
                    type='password'
                    name='password'
                    minlength='6'
                    placeholder='minimum 6 character long'
                    id='password'
                    required
                  />
                </div>
                <div class='form_box'>
                  <label htmlFor='con_password'>Confirm password *</label>
                  <input
                    type='password'
                    name='confirm_password'
                    id='con_password'
                    required
                  />
                </div>
              </div>
              <p class='err_msg text-danger mt-3'></p>
              <div class='form_box'>
                <button type='submit'>Register</button>
              </div>
            </form>
            <div class='login_link'>
              Already have an account? <a href='/login'>Log in</a>
            </div>
          </div>
        </FormSection>
      </SignupSection>
    </>
  );
};

export default Signup;
