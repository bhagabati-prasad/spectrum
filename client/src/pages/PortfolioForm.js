import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';
import ThemeToggleSetting from '../components/ThemeToggleSetting';
import {
  InputGroupBox,
  InputGroupHeading,
  PortfolioFormSection,
  SingleInputBox,
} from '../styles/PortfolioFormStyles';

const PortfolioForm = () => {
  const { theme } = useContext(ThemeContext);

  // user basic info form
  const [user, setUser] = useState({
    fname: '',
    mname: '',
    lname: '',
    dob: '',
    age: '',
    gender: '',
    email: '',
    mobile: '',
    bio: '',
    address: '',
    zipcode: '',
    country: '',
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
      if (language.skills[index].rating.length <= 3) {
        setLanguage({ ...language, skills: langs });
      }
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
    { title: '', description: '' },
    { title: '', description: '' },
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...user, social: { ...social }, projects: [...project] });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio Form</title>
      </Helmet>
      <PortfolioFormSection darkMode={theme}>
        <ThemeToggleSetting editBtn={false} />
        <div className='container'>
          <form method='POST'>
            {/* ---- basic info ---- */}
            <InputGroupBox darkMode={theme}>
              <InputGroupHeading darkMode={theme}>
                <h4>Details about</h4>
                <h1>Your Profile</h1>
              </InputGroupHeading>
              <div className='row'>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='fname'>First Name *</label>
                  <input
                    type='text'
                    name='fname'
                    id='fname'
                    placeholder='e.g: Bhagabati'
                    spellCheck='false'
                    required
                    value={user.fname}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='mname'>Middle Name</label>
                  <input
                    type='text'
                    name='mname'
                    id='mname'
                    placeholder='e.g: Prasad'
                    spellCheck='false'
                    required
                    value={user.mname}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='lname'>Last Name *</label>
                  <input
                    type='text'
                    name='lname'
                    id='lname'
                    placeholder='e.g: Panda'
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
                    <option value=''>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-4'>
                  <label htmlFor='email'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='e.g: yourname@email.com'
                    required
                    value={user.email}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-3'>
                  <label htmlFor='mobile'>Mobile *</label>
                  <input
                    type='number'
                    name='mobile'
                    id='mobile'
                    minLength='10'
                    maxLength='14'
                    placeholder='e.g: +91-1234567890'
                    required
                    value={user.mobile}
                    onChange={handleUserChange}
                  />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-6'>
                  <label htmlFor='bio'>About yourself*</label>
                  <textarea
                    name='bio'
                    id='bio'
                    value={user.bio}
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
                    <SingleInputBox
                      darkMode={theme}
                      className='col-12 col-md-6'
                    >
                      <label htmlFor='zipcode'>Zip Code *</label>
                      <input
                        type='text'
                        name='zipcode'
                        id='zipcode'
                        placeholder='e.g: 751030'
                        spellCheck='false'
                        required
                        value={user.zipcode}
                        onChange={handleUserChange}
                      />
                    </SingleInputBox>
                    <SingleInputBox
                      darkMode={theme}
                      className='col-12 col-md-6'
                    >
                      <label htmlFor='country'>Country *</label>
                      <input
                        type='text'
                        name='country'
                        id='country'
                        maxLength='3'
                        placeholder='e.g: Ind'
                        spellCheck='false'
                        required
                        value={user.country}
                        onChange={handleUserChange}
                      />
                    </SingleInputBox>
                  </div>
                </div>
                <SingleInputBox className='col-12 col-md-6'>
                  <label htmlFor='resume'>CV / Resume *</label>
                  <input type='file' name='resume' id='resume' required />
                </SingleInputBox>
                <SingleInputBox className='col-12 col-md-6'>
                  <label htmlFor='picture'>Profile picture *</label>
                  <input type='file' name='picture' id='picture' required />
                </SingleInputBox>
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
                <h4>Programming</h4>
                <h1>Languages</h1>
              </InputGroupHeading>
              <div className='row'>
                <SingleInputBox className='col-12'>
                  <label htmlFor='speaking'>Speaking</label>
                  <input
                    type='text'
                    name='speaking'
                    id='speaking'
                    placeholder='e.g: Odia, Hindi, English'
                    value={language.speaking}
                    onChange={(event) =>
                      handleLanguageChange('speaking', event)
                    }
                  />
                </SingleInputBox>
              </div>
              <div className='row'>
                <SingleInputBox className='col-12'>
                  <label htmlFor='frameworks'>Frameworks</label>
                  <input
                    type='text'
                    name='frameworks'
                    id='frameworks'
                    placeholder='e.g: Bootstrap, jQuery, React, Express, Flask'
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
                        <label htmlFor='name'>Skills name</label>
                        <input
                          type='text'
                          name='name'
                          placeholder='e.g: JavaScript'
                          value={skill.name}
                          onChange={(event) =>
                            handleLanguageChange('skills', event, index)
                          }
                        />
                      </div>
                      <div className='col-3 ps-0'>
                        <label htmlFor='rating'>Rating</label>
                        <input
                          type='number'
                          name='rating'
                          placeholder='7.5'
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
                      <label htmlFor='pro-title'>Project title</label>
                      <input
                        type='text'
                        name='title'
                        id='pro-title'
                        value={field.title}
                        onChange={(event) => handleProjectChange(index, event)}
                      />
                    </SingleInputBox>
                    <SingleInputBox className='col-12'>
                      <label htmlFor='pro-desc'>Project Description</label>
                      <textarea
                        name='description'
                        id='pro-desc'
                        value={field.description}
                        onChange={(event) => handleProjectChange(index, event)}
                      ></textarea>
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
                <div className='col-12 col-md-6'>
                  <button type='reset'>Clear form</button>
                </div>
                <div className='col-12 col-md-6'>
                  <button type='submit' onClick={handleSubmit}>
                    Submit
                  </button>
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
