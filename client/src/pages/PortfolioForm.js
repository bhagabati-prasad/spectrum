import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeContext } from '../components/ThemeContext';
import { UserContext } from '../components/UserContext';
import ThemeToggleSetting from '../components/ThemeToggleSetting';
import {
  InputGroupBox,
  InputGroupHeading,
  PortfolioFormSection,
  SingleInputBox,
} from '../styles/PortfolioFormStyles';
import { Header } from '../styles/PortfolioStyles';

const PortfolioForm = () => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  // navbar
  const [mobNav, setMobNav] = useState('hide');
  const handleToggleNav = () => setMobNav(mobNav === 'show' ? 'hide' : 'show');

  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // user basic info form
  const [user, setUser] = useState({
    fname: '',
    mname: '',
    lname: '',
    dob: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    domain: '',
    about: '',
    address: '',
  });

  const handleUserChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  // social media form
  const [social, setSocial] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    github: '',
    website: '',
  });

  const handleSocialChange = (e) =>
    setSocial({ ...social, [e.target.name]: e.target.value });

  // education
  const [education, setEducation] = useState([
    { from: '', to: '', college: '', branch: '' },
    { from: '', to: '', college: '', branch: '' },
    { from: '', to: '', college: '', branch: '' },
  ]);

  const handleEducationChange = (index, event) => {
    const values = [...education];
    values[index][event.target.name] = event.target.value;
    setEducation(values);
  };

  // languages
  const [language, setLanguage] = useState({
    speaking: '',
    frameworks: '',
    skills: [{ name: '', rating: '' }],
  });

  const handleLanguageChange = (categ, event, index) => {
    const { name, value } = event.target;

    if (categ === 'skills') {
      const langs = [...language.skills];
      langs[index][name] = value;
      setLanguage({ ...language, skills: langs });
    } else {
      setLanguage({
        ...language,
        [name]: value,
      });
    }
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    setLanguage({
      ...language,
      skills: [...language.skills, { name: '', rating: '' }],
    });
  };

  // project form
  const [project, setProject] = useState([
    { title: '', description: '', link: '' },
    { title: '', description: '', link: '' },
  ]);

  const handleProjectChange = (index, event) => {
    const values = [...project];
    values[index][event.target.name] = event.target.value;
    setProject(values);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    setProject([...project, { title: '', description: '' }]);
  };

  // on submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('auth-token');
      if (token) {
        const res = await axios.patch(
          'api/user/update',
          { user, social, education, language, project },
          {
            headers: { 'auth-token': token },
          }
        );
        if (res.data?.error) {
          setErrMsg(res.data.error);
        } else {
          console.log(res.data);
          setUserInfo({ ...res.data.user });
          setSuccessMsg('Profile updated successfully!');
          history.push('/');
        }
      } else {
        setErrMsg('you need a token');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        const res = await axios.post('/api/getuser', { token });
        setUserInfo({ ...res.data.user });
      }
    };
    getUser();
  }, []);
  useEffect(() => {
    if (Object.keys(userInfo).length) {
      setUser({
        fname: userInfo?.fname,
        mname: userInfo?.mname,
        lname: userInfo?.lname,
        dob: userInfo?.dob,
        age: userInfo?.age,
        gender: userInfo?.gender,
        email: userInfo?.email,
        phone: userInfo?.phone,
        domain: userInfo?.domain,
        about: userInfo?.about,
        address: userInfo?.address,
      });
      setSocial({
        facebook: userInfo?.social?.facebook,
        instagram: userInfo?.social?.instagram,
        twitter: userInfo?.social?.twitter,
        linkedin: userInfo?.social?.linkedin,
        github: userInfo?.social?.github,
        website: userInfo?.social?.website,
      });
      setEducation([
        {
          from: userInfo?.education?.edu1?.from,
          to: userInfo?.education?.edu1?.to,
          college: userInfo?.education?.edu1?.college,
          branch: userInfo?.education?.edu1?.branch,
        },
        {
          from: userInfo?.education?.edu2?.from,
          to: userInfo?.education?.edu2?.to,
          college: userInfo?.education?.edu2?.college,
          branch: userInfo?.education?.edu2?.branch,
        },
        {
          from: userInfo?.education?.edu3?.from,
          to: userInfo?.education?.edu3?.to,
          college: userInfo?.education?.edu3?.college,
          branch: userInfo?.education?.edu3?.branch,
        },
      ]);
      setLanguage({
        speaking: userInfo?.language.speaking,
        frameworks: userInfo?.language.frameworks,
        skills: [...userInfo?.language?.skills],
      });
      setProject(userInfo?.project);
    }
  }, [userInfo]);

  return (
    <>
      <Helmet>
        <title>Portfolio Form</title>
      </Helmet>
      {/* ---- navigation section */}
      <Header darkMode={theme} mobnav={mobNav}>
        <div className='container'>
          <nav className='d-flex justify-content-between align-items-center'>
            <Link to='/' className='logo'>
              Portflix
            </Link>
            <ul className='list-unstyled d-none d-md-flex justify-content-end align-items-center m-0'>
              <li>
                <Link to='/'>Portfolio</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
            <div className='toggle d-block d-md-none' onClick={handleToggleNav}>
              <i className='fas fa-bars'></i>
            </div>
          </nav>
        </div>
      </Header>
      <section className='mobile_nav'>
        <ul className='nav_content'>
          <li>
            <Link to='/'>Portfolio</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </section>
      {/* ---- navigation section end ---- */}
      <PortfolioFormSection darkMode={theme}>
        <ThemeToggleSetting editBtn={false} />
        <div className='container'>
          <form method='POST' onSubmit={handleSubmit}>
            {/* ---- basic info ---- */}
            <InputGroupBox darkMode={theme} id='profile'>
              <InputGroupHeading darkMode={theme}>
                <h4>Details about</h4>
                <h1>Your Profile</h1>
              </InputGroupHeading>
              <div className='row'>
                <SingleInputBox className='col-12 col-md-3'>
                  <label htmlFor='fname'>First Name *</label>
                  <input
                    type='text'
                    name='fname'
                    id='fname'
                    placeholder='e.g: Bhagabati'
                    spellCheck='false'
                    maxLength='20'
                    required
                    value={user.fname}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-3'>
                  <label htmlFor='mname'>Middle Name</label>
                  <input
                    type='text'
                    name='mname'
                    id='mname'
                    placeholder='e.g: Prasad'
                    spellCheck='false'
                    maxLength='20'
                    value={user.mname}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-3'>
                  <label htmlFor='lname'>Last Name *</label>
                  <input
                    type='text'
                    name='lname'
                    id='lname'
                    placeholder='e.g: Panda'
                    maxLength='20'
                    spellCheck='false'
                    required
                    value={user.lname}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-2'>
                  <label htmlFor='dob'>Date of birth *</label>
                  <input
                    type='date'
                    name='dob'
                    id='dob'
                    required
                    value={user.dob}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-6 col-md-1'>
                  <label htmlFor='lname'>Age *</label>
                  <input
                    type='text'
                    name='age'
                    id='age'
                    min='10'
                    maxLength='2'
                    placeholder='e.g: 22'
                    required
                    value={user.age}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-6 col-md-2'>
                  <label htmlFor='gender'>Gender *</label>
                  <select
                    name='gender'
                    id='gender'
                    required
                    value={user.gender}
                    onChange={handleUserChange}
                  >
                    <option>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-3'>
                  <label htmlFor='email'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='e.g: yourname@email.com'
                    pattern='[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                    title='Invalid format'
                    required
                    value={user.email}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-2'>
                  <label htmlFor='phone'>Phone *</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    minLength='10'
                    maxLength='14'
                    placeholder='e.g: +91-1234567890'
                    required
                    value={user.phone}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-5'>
                  <label htmlFor='domain'>Domain *</label>
                  <input
                    type='text'
                    name='domain'
                    id='domain'
                    placeholder='e.g: Web developer, UI/UX designer, Freelancer'
                    required
                    value={user.domain}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-6'>
                  <label htmlFor='about'>About yourself*</label>
                  <textarea
                    name='about'
                    id='about'
                    value={user.about}
                    onChange={handleUserChange}
                  ></textarea>
                </SingleInputBox>
                <div className='col-6'>
                  <div className='row'>
                    <SingleInputBox className='col-12'>
                      <label htmlFor='address'>Address *</label>
                      <input
                        type='text'
                        name='address'
                        id='address'
                        placeholder='House number, lane, area, city, state'
                        spellCheck='false'
                        required
                        value={user.address}
                        onChange={handleUserChange}
                      />
                    </SingleInputBox>
                  </div>
                </div>
              </div>
            </InputGroupBox>

            {/* ---- Social Media ---- */}
            <InputGroupBox darkMode={theme}>
              <InputGroupHeading darkMode={theme}>
                <h4>Connected with</h4>
                <h1>Social networks</h1>
              </InputGroupHeading>
              <div className='row'>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='facebook'>Facebook</label>
                  <input
                    type='text'
                    name='facebook'
                    id='facebook'
                    placeholder='e.g: bhagabati.prasad.12'
                    value={social.facebook}
                    onChange={handleSocialChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='instagram'>Instagram</label>
                  <input
                    type='text'
                    name='instagram'
                    id='instagram'
                    placeholder='e.g: i.bhagabati_prasad'
                    value={social.instagram}
                    onChange={handleSocialChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='twitter'>Twitter</label>
                  <input
                    type='text'
                    name='twitter'
                    id='twitter'
                    placeholder='e.g: PrasadBhagabati'
                    value={social.twitter}
                    onChange={handleSocialChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='linkedin'>Linkedin</label>
                  <input
                    type='text'
                    name='linkedin'
                    id='linkedin'
                    placeholder='e.g: PrasadBhagabati'
                    value={social.linkedin}
                    onChange={handleSocialChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='github'>GitHub</label>
                  <input
                    type='text'
                    name='github'
                    id='github'
                    placeholder='e.g: PrasadBhagabati'
                    value={social.github}
                    onChange={handleSocialChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='lname'>Website</label>
                  <input
                    type='text'
                    name='website'
                    id='website'
                    placeholder='e.g: www.yourwebsite.com'
                    required
                    value={social.website}
                    onChange={handleSocialChange}
                  />
                </SingleInputBox>
              </div>
            </InputGroupBox>

            {/* ---- programming languages ---- */}
            <InputGroupBox darkMode={theme}>
              <InputGroupHeading darkMode={theme}>
                <h4>Career</h4>
                <h1>Education</h1>
              </InputGroupHeading>
              <div className='row'>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className='col-12 col-md-4 shadow-sm border p-3'
                  >
                    <div className='row'>
                      <SingleInputBox className='col-6'>
                        <label htmlFor='from'>From *</label>
                        <input
                          type='text'
                          name='from'
                          id='from'
                          minLength='4'
                          maxLength='4'
                          placeholder='e.g: 2021'
                          required
                          value={edu.from}
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                        />
                      </SingleInputBox>
                      <SingleInputBox className='col-6'>
                        <label htmlFor='to'>To *</label>
                        <input
                          type='text'
                          name='to'
                          id='to'
                          minLength='4'
                          maxLength='4'
                          placeholder='e.g: 2022'
                          required
                          value={edu.to}
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                        />
                      </SingleInputBox>
                    </div>
                    <SingleInputBox className='col-12'>
                      <label htmlFor='college'>College *</label>
                      <input
                        type='text'
                        name='college'
                        id='college'
                        placeholder='e.g: College of Engineering, Bhubaneswar'
                        required
                        value={edu.college}
                        onChange={(event) =>
                          handleEducationChange(index, event)
                        }
                      />
                    </SingleInputBox>
                    <SingleInputBox className='col-12'>
                      <label htmlFor='branch'>Branch *</label>
                      <input
                        type='text'
                        name='branch'
                        id='branch'
                        placeholder='e.g: Master in Computer Application'
                        required
                        value={edu.branch}
                        onChange={(event) =>
                          handleEducationChange(index, event)
                        }
                      />
                    </SingleInputBox>
                  </div>
                ))}
              </div>
            </InputGroupBox>

            {/* ---- programming languages ---- */}
            <InputGroupBox darkMode={theme}>
              <InputGroupHeading darkMode={theme}>
                <h4>Programming</h4>
                <h1>Languages</h1>
              </InputGroupHeading>
              <div className='row'>
                <SingleInputBox className='col-12'>
                  <label htmlFor='speaking'>Speaking *</label>
                  <input
                    type='text'
                    name='speaking'
                    id='speaking'
                    placeholder='e.g: Odia, Hindi, English'
                    required
                    value={language.speaking}
                    onChange={(event) =>
                      handleLanguageChange('speaking', event)
                    }
                  />
                </SingleInputBox>
              </div>
              <div className='row'>
                <SingleInputBox className='col-12'>
                  <label htmlFor='frameworks'>Frameworks *</label>
                  <input
                    type='text'
                    name='frameworks'
                    id='frameworks'
                    placeholder='e.g: Bootstrap, jQuery, React, Express, Flask'
                    required
                    value={language.frameworks}
                    onChange={(event) =>
                      handleLanguageChange('frameworks', event)
                    }
                  />
                </SingleInputBox>
              </div>
              <div className='row'>
                <h5 className='m-0 mt-3'>Other Skills</h5>
                {language.skills.map((skill, index) => (
                  <SingleInputBox className='col-12 col-md-4' key={index}>
                    <div className='row shadow p-2'>
                      <div className='col-9'>
                        <label htmlFor='name'>Skills name *</label>
                        <input
                          type='text'
                          name='name'
                          placeholder='e.g: JavaScript'
                          required
                          value={skill.name}
                          onChange={(event) =>
                            handleLanguageChange('skills', event, index)
                          }
                        />
                      </div>
                      <div className='col-3 ps-0'>
                        <label htmlFor='rating'>Rating *</label>
                        <input
                          type='text'
                          name='rating'
                          min='1'
                          max='10'
                          maxLength='3'
                          placeholder='e.g: 7.5'
                          required
                          value={skill.rating}
                          onChange={(event) =>
                            handleLanguageChange('skills', event, index)
                          }
                        />
                      </div>
                    </div>
                  </SingleInputBox>
                ))}
                <div className='d-flex justify-content-end py-3'>
                  <button className='add_project_btn' onClick={handleAddSkill}>
                    Add skill
                  </button>
                </div>
              </div>
            </InputGroupBox>

            {/* ---- project details ---- */}
            <InputGroupBox darkMode={theme}>
              <InputGroupHeading darkMode={theme}>
                <h4>Showcase your project</h4>
                <h1>Project details</h1>
              </InputGroupHeading>
              <div className='row'>
                {project.map((field, index) => (
                  <div className='col-12 col-md-6' key={index}>
                    <SingleInputBox className='col-12'>
                      <h5>
                        <strong>Project {index + 1}</strong>
                      </h5>
                      <label htmlFor='pro-title'>Project title *</label>
                      <input
                        type='text'
                        name='title'
                        id='pro-title'
                        required
                        value={field.title}
                        onChange={(event) => handleProjectChange(index, event)}
                      />
                    </SingleInputBox>
                    <SingleInputBox className='col-12'>
                      <label htmlFor='pro-desc'>Project Description *</label>
                      <textarea
                        name='description'
                        id='pro-desc'
                        required
                        value={field.description}
                        onChange={(event) => handleProjectChange(index, event)}
                      ></textarea>
                    </SingleInputBox>
                    <SingleInputBox className='col-12'>
                      <label htmlFor='pro-link'>Project Link *</label>
                      <input
                        type='text'
                        name='link'
                        id='pro-link'
                        required
                        value={field.link}
                        onChange={(event) => handleProjectChange(index, event)}
                      />
                    </SingleInputBox>
                  </div>
                ))}
                <div className='d-flex justify-content-end py-3'>
                  <button
                    className='add_project_btn'
                    onClick={handleAddProject}
                  >
                    Add Project
                  </button>
                </div>
              </div>
            </InputGroupBox>
            {/* ---- programming languages ---- */}
            <InputGroupBox darkMode={theme} className='py-3'>
              <div className='row'>
                <p className='text-danger'>{errMsg}</p>
                <p className='text-success'>{successMsg}</p>
                <div className='col-12 col-md-6'>
                  <button type='reset'>Clear form</button>
                </div>
                <div className='col-12 col-md-6'>
                  <button type='submit'>Submit</button>
                </div>
              </div>
            </InputGroupBox>
          </form>
        </div>
      </PortfolioFormSection>
    </>
  );
};

export default PortfolioForm;
