import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SectionHeading from '../components/SectionHeading';
import {
  HeroSection,
  ContactSection,
  Footer,
  AboutSection,
  Description,
  DetailsSection,
  ResumeSection,
  Header,
  ProjectSection,
  HeroBgSlider,
} from '../styles/PortfolioStyles';
import Typewriter from 'typewriter-effect';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../components/ThemeContext';
import { UserContext } from '../components/UserContext';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import image1 from '../assets/herobg1.jpg';
import image2 from '../assets/herobg2.jpg';
import image3 from '../assets/herobg3.jpg';
import { dark_theme, light_theme } from '../styles/_variables';
import ThemeToggleSetting from '../components/ThemeToggleSetting';
import axios from 'axios';

const Portfolio = () => {
  const [darkmode, setDarkmode] = useState('');
  const [header, setHeader] = useState('true');
  const [mobNav, setMobNav] = useState('hide');
  const [conMsg, setConMsg] = useState('');

  const { theme } = useContext(ThemeContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ contact });
    const res = await axios.post('/api/contact', { ...contact });
    if (res.data.message) {
      setConMsg(res.data.message);
      setContact({ name: '', email: '', phone: '', message: '' });
    }
  };

  const options = {
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    nav: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  };

  const handleToggleNav = () => setMobNav(mobNav === 'show' ? 'hide' : 'show');

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader('true');
    } else if (window.scrollY > 70) {
      return setHeader('false');
    }
  };

  // change navbar background on scroll
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        const res = await axios.post('/api/getuser', { token });
        if (res.data.user) {
          setUserInfo({ ...res.data.user });
        }
      }
    };
    getUser();
  }, []);

  // toggle body background
  useEffect(() => {
    setDarkmode(theme);
  }, [theme]);

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <style>
          {`
            body {
              background-color: ${
                darkmode === 'light'
                  ? light_theme.portfolio_body_bg
                  : dark_theme.portfolio_body_bg
              };
            }
          `}
        </style>
      </Helmet>
      <ThemeToggleSetting />
      {/* ---- navigation section */}
      <Header darkMode={theme} bg={header} mobnav={mobNav}>
        <div className='container'>
          <nav className='d-flex justify-content-between align-items-center'>
            <Link to='/' className='logo'>
              Portflix
            </Link>
            <ul className='list-unstyled d-none d-md-flex justify-content-end m-0'>
              <li>
                <Link to='' onClick={() => window.location.replace('/#hero')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='' onClick={() => window.location.replace('/#about')}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to=''
                  onClick={() => window.location.replace('/#projects')}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to=''
                  onClick={() => window.location.replace('/#contact')}
                >
                  Contact
                </Link>
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
            <Link
              to=''
              onClick={() => {
                handleToggleNav();
                window.location.replace('/#hero');
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to=''
              onClick={() => {
                handleToggleNav();
                window.location.replace('/#about');
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to=''
              onClick={() => {
                handleToggleNav();
                window.location.replace('/#projects');
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to=''
              onClick={() => {
                handleToggleNav();
                window.location.replace('/#contact');
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </section>
      {/* ---- navigation section end ---- */}
      <HeroSection darkMode={darkmode} id='hero'>
        <HeroBgSlider
          images={[image1, image2, image3]}
          duration={3}
          transition={1}
        />
        <div className='container'>
          <div className='content'>
            <div className='title'>
              <h4>Hi. I'm</h4>
              <h1 className='name'>
                {userInfo?.fname} {userInfo?.lname}
              </h1>
              <div className='line'></div>
              <div className='domain'>
                <h3>
                  I'm A {userInfo?.fname}
                  <Typewriter
                    options={{
                      strings: userInfo?.domain && userInfo?.domain.split(','),
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
            </div>
            <div className='soc_icon'>
              <a
                href={`https://www.facebook.com/${userInfo?.social?.facebook}`}
                className='ml-0'
                target='_blank'
                rel='noopener'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href={`https://twitter.com/${userInfo?.social?.twitter}`}
                target='_blank'
                rel='noopener'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href={`https://www.instagram.com/${userInfo?.social?.instagram}`}
                target='_blank'
                rel='noopener'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href={`https://www.linkedin.com/in/${userInfo?.social?.linkedin}`}
                target='_blank'
                rel='noopener'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a
                href={`https://www.github.com/in/${userInfo?.social?.linkedin}`}
                target='_blank'
                rel='noopener'
              >
                <i className='fab fa-github'></i>
              </a>
            </div>
          </div>
        </div>
      </HeroSection>
      <AboutSection darkMode={theme} id='about'>
        <div className='container'>
          <div className='row'>
            <div className='content col-12 col-md-6'>
              <SectionHeading darkMode={theme} fill='About ' span='me' />
              <Description>{userInfo?.about}</Description>
              <Link to='/'>Download CV</Link>
            </div>
            <div className='image col-12 col-md-6 py-3 d-flex justify-content-end'>
              <div className='image'>
                <img src='./images/people.jpg' className='img-fluid' alt='' />
              </div>
            </div>
          </div>
        </div>
      </AboutSection>
      <DetailsSection darkMode={theme} className='details'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-5 d-flex align-items-center'>
              <SectionHeading darkMode={theme} fill='More ' span='details' />
            </div>
            <div className='col-12 col-lg-7'>
              <ul className='list-unstyled'>
                <li>
                  <span className='key'>First name :</span>
                  <span className='value'>{userInfo?.fname}</span>
                </li>
                <li>
                  <span className='key'>Middle name :</span>
                  <span className='value'>{userInfo?.mname}</span>
                </li>
                <li>
                  <span className='key'>Last name :</span>
                  <span className='value'>{userInfo?.lname}</span>
                </li>
                <li>
                  <span className='key'>Gender :</span>
                  <span className='value'>{userInfo?.gender}</span>
                </li>
                <li>
                  <span className='key'>Age :</span>
                  <span className='value'>{userInfo?.age}</span>
                </li>
                <li>
                  <span className='key'>Email :</span>
                  <span className='value'>{userInfo?.email}</span>
                </li>
                <li>
                  <span className='key'>Mobile :</span>
                  <span className='value'>{userInfo?.phone}</span>
                </li>
                <li>
                  <span className='key'>LinkedIn :</span>
                  <span className='value'>{userInfo?.social?.linkedin}</span>
                </li>
                <li>
                  <span className='key'>GitHub :</span>
                  <span className='value'>{userInfo?.social?.github}</span>
                </li>
                <li>
                  <span className='key'>Address :</span>
                  <span className='value'>{userInfo?.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DetailsSection>
      <ResumeSection darkMode={theme} id='resume'>
        <div className='container'>
          <div className='row'>
            <SectionHeading darkMode={theme} fill='' span='Resume' />
          </div>
          <div className='row py-4 education'>
            <h2>Education</h2>
            <ul>
              <li className='education_box'>
                <p className='duration'>
                  {userInfo?.education?.edu1.from} -{' '}
                  {userInfo?.education?.edu1.to}
                </p>
                <p className='clg'>{userInfo?.education?.edu1.college}</p>
                <p className='branch'>{userInfo?.education?.edu1.branch}</p>
              </li>
              <li className='education_box'>
                <p className='duration'>
                  {userInfo?.education?.edu2.from} -{' '}
                  {userInfo?.education?.edu2.to}
                </p>
                <p className='clg'>{userInfo?.education?.edu2.college}</p>
                <p className='branch'>{userInfo?.education?.edu2.branch}</p>
              </li>
              <li className='education_box'>
                <p className='duration'>
                  {userInfo?.education?.edu3.from} -{' '}
                  {userInfo?.education?.edu3.to}
                </p>
                <p className='clg'>{userInfo?.education?.edu3.college}</p>
                <p className='branch'>{userInfo?.education?.edu3.branch}</p>
              </li>
            </ul>
          </div>
          <div className='row py-4 skills'>
            <div className='col-12 col-md-6'>
              <h2>Programming Skill</h2>
              <div className='skill_wrapper'>
                {userInfo?.language?.skills.map((skill, index) => (
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      margin: '1rem',
                      textTransform: 'capitalize',
                    }}
                    key={index}
                  >
                    <CircularProgressbar
                      value={skill?.rating * 10}
                      text={skill?.name}
                      styles={buildStyles({
                        // Text size
                        textSize: '14px',
                        // Colors
                        pathColor: '#444',
                        textColor: '#1e90ff',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='pb-4'>
                <h2>Frameworks</h2>
                <div className='d-flex flex-wrap'>
                  {userInfo?.language?.frameworks
                    .split(',')
                    .map((frmk, indx) => (
                      <div className='skill_block' key={indx}>
                        {frmk}
                      </div>
                    ))}
                </div>
              </div>
              <div className='py-2'>
                <h2>Speaking</h2>
                <div className='d-flex flex-wrap'>
                  {userInfo?.language?.speaking.split(',').map((lang, indx) => (
                    <div className='skill_block' key={indx}>
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResumeSection>
      <ProjectSection darkMode={theme} id='projects'>
        <div className='container'>
          <div className='row'>
            <SectionHeading darkMode={theme} fill='My ' span='projects' />
          </div>
          <div className='row'>
            <OwlCarousel className='owl-theme' {...options}>
              {userInfo?.project &&
                userInfo?.project.map((proj, index) => (
                  <div className='item' key={index}>
                    <div className='single_project card'>
                      <div className='image'>
                        <img src='./images/project1.png' />
                      </div>
                      <div className='body'>
                        <h1 className='display-4'>
                          {index < 10 ? `0${index + 1}` : `${index + 1}`}
                        </h1>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <Link to={proj.link} target='_blank' rel='noopener'>
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </OwlCarousel>
          </div>
        </div>
      </ProjectSection>
      <ContactSection darkMode={theme} id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='content_box col-12 col-lg-8'>
              <SectionHeading darkMode='dark' fill='Contact ' span='us' />
            </div>
            <div className='col-12 col-lg-4'>
              <div className='form_box shadow'>
                <p>Drop a message</p>
                <form method='POST' onSubmit={handleSubmit}>
                  <div className='input_fields'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      required
                      value={contact.name}
                      onChange={handleChange}
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder='E-mail'
                      required
                      value={contact.email}
                      onChange={handleChange}
                    />
                    <input
                      type='text'
                      name='phone'
                      placeholder='Phone'
                      required
                      value={contact.phone}
                      onChange={handleChange}
                    />
                    <textarea
                      name='message'
                      maxLength='250'
                      placeholder='Message'
                      value={contact.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className='buttons'>
                    <p className='text-success m-0'>{conMsg}</p>
                    <button type='submit'>Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ContactSection>
      <Footer darkMode={theme}>
        <div className='container'>
          <div className='row'>
            <div className='single_box col-12 col-md-3'>
              <h2 className='logo'>Portflix</h2>
              <p>Copyright &copy; 2021 Logo.</p>
            </div>
            <div className='single_box col-12 col-md-3'>
              <h4>Address</h4>
              <p>Bhubaneswar, Odisha</p>
              <p>India, 751019</p>
            </div>
            <div className='single_box col-12 col-md-4'>
              <h4>Contact</h4>
              <p>{userInfo.email}</p>
              <p>{userInfo.phone}</p>
            </div>
            <div
              className='
              single_box
              col-12 col-md-2
              d-flex
              flex-column
              justify-content-lg-end
              justify-content-md-center
            '
            >
              <div className='soc_icon d-flex justify-content-md-end justify-content-start'>
                <Link to='/' className='ml-0' target='_blank' rel='noopener'>
                  <i className='fab fa-facebook-f'></i>
                </Link>
                <Link to='/' target='_blank' rel='noopener'>
                  <i className='fab fa-twitter'></i>
                </Link>
                <Link to='/' target='_blank' rel='noopener'>
                  <i className='fab fa-instagram'></i>
                </Link>
                <Link to='/' target='_blank' rel='noopener'>
                  <i className='fab fa-linkedin-in'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Portfolio;
