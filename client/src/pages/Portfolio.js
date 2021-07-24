import { useState, useEffect, useContext } from 'react';
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

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import image1 from '../assets/herobg1.jpg';
import image2 from '../assets/herobg2.jpg';
import image3 from '../assets/herobg3.jpg';
import { dark_theme, light_theme } from '../styles/_variables';
import ThemeToggleSetting from '../components/ThemeToggleSetting';

const Portfolio = () => {
  const [header, setHeader] = useState('true');
  const [darkmode, setDarkmode] = useState('');

  const { theme } = useContext(ThemeContext);

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
      <Header darkMode={theme} bg={header}>
        <div className='container'>
          <nav className='d-flex justify-content-between'>
            <a href='#' className='logo'>
              Logo
            </a>
            <ul className='list-unstyled d-flex justify-content-end m-0'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Projects</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Header>
      <HeroSection darkMode={theme} id='hero'>
        <HeroBgSlider
          images={[image1, image2, image3]}
          duration={3}
          transition={1}
        />
        <div className='container'>
          <div className='content'>
            <div className='title'>
              <h4>Hi. I'm</h4>
              <h1 className='name'>John Doe</h1>
              <div className='line'></div>
              <div className='domain'>
                <h3>
                  I'm A
                  <Typewriter
                    options={{
                      strings: ['Web developer', 'UI/UX designer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
            </div>
            <div className='soc_icon'>
              <a href='#' className='ml-0' target='_blank' rel='noopener'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' target='_blank' rel='noopener'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' target='_blank' rel='noopener'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#' target='_blank' rel='noopener'>
                <i className='fab fa-linkedin-in'></i>
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
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem culpa esse temporibus voluptates id nam! Neque
                dignissimos doloremque rerum hic optio accusantium placeat
                adipisci ad. Eaque, fuga qui? Quasi, laudantium!
              </Description>
              <a href='#'>Download CV</a>
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
                  <span className='value'>John</span>
                </li>
                <li>
                  <span className='key'>Middle name :</span>
                  <span className='value'>John</span>
                </li>
                <li>
                  <span className='key'>Last name :</span>
                  <span className='value'>John</span>
                </li>
                <li>
                  <span className='key'>Gender :</span>
                  <span className='value'>Male</span>
                </li>
                <li>
                  <span className='key'>Age :</span>
                  <span className='value'>22</span>
                </li>
                <li>
                  <span className='key'>Email :</span>
                  <span className='value'>john@abc.com</span>
                </li>
                <li>
                  <span className='key'>Mobile :</span>
                  <span className='value'>+91 - 123 456 7890</span>
                </li>
                <li>
                  <span className='key'>LinkedIn :</span>
                  <span className='value'>john-doe</span>
                </li>
                <li>
                  <span className='key'>GitHub :</span>
                  <span className='value'>john-doe</span>
                </li>
                <li>
                  <span className='key'>Address :</span>
                  <span className='value'>
                    Bhubaneswar, Odisha, India, 751030
                  </span>
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
                <p className='duration'>2019-2022</p>
                <p className='clg'>CET, Bhubaneswar</p>
                <p className='branch'>M.C.A</p>
              </li>
              <li className='education_box'>
                <p className='duration'>2019-2022</p>
                <p className='clg'>CET, Bhubaneswar</p>
                <p className='branch'>M.C.A</p>
              </li>
              <li className='education_box'>
                <p className='duration'>2019-2022</p>
                <p className='clg'>CET, Bhubaneswar</p>
                <p className='branch'>M.C.A</p>
              </li>
            </ul>
          </div>
          <div className='row py-4 skills'>
            <h2>Programming Skill</h2>
            <div className='skill_wrapper'>
              <div style={{ width: 120, height: 120 }}>
                <CircularProgressbar
                  value={50}
                  text='HTML'
                  styles={buildStyles({
                    // Text size
                    textSize: '16px',
                    // Colors
                    pathColor: '#8c0',
                    textColor: '#f00',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
              </div>
              <div style={{ width: 120, height: 120 }}>
                <CircularProgressbar
                  value={50}
                  text='HTML'
                  styles={buildStyles({
                    // Text size
                    textSize: '16px',
                    // Colors
                    pathColor: '#8c0',
                    textColor: '#f00',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
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
              <div className='item'>
                <div className='single_project card'>
                  <div className='image'>
                    <img src='./images/project1.png' />
                  </div>
                  <div className='body'>
                    <h1 className='display-4'>01</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium officiis asperiores velit.
                    </p>
                    <a href='#'>View Project</a>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single_project card'>
                  <div className='image'>
                    <img src='./images/project1.png' />
                  </div>
                  <div className='body'>
                    <h1 className='display-4'>01</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium officiis asperiores velit.
                    </p>
                    <a href='#'>View Project</a>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single_project card'>
                  <div className='image'>
                    <img src='./images/project1.png' />
                  </div>
                  <div className='body'>
                    <h1 className='display-4'>01</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium officiis asperiores velit.
                    </p>
                    <a href='#'>View Project</a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </ProjectSection>
      <ContactSection darkMode={theme}>
        <div className='container'>
          <div className='row'>
            <div className='content_box col-12 col-lg-8'>
              <SectionHeading darkMode='dark' fill='Contact ' span='us' />
            </div>
            <div className='col-12 col-lg-4'>
              <div className='form_box shadow'>
                <p>Drop a message</p>
                <form action='' method='POST'>
                  <div className='input_fields'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      required
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder='E-mail'
                      required
                    />
                    <input
                      type='text'
                      name='phone'
                      placeholder='Phone'
                      required
                    />
                    <textarea name='message' placeholder='Message'></textarea>
                  </div>
                  <div className='buttons'>
                    <input type='file' name='file' />
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
              <h2 className='logo'>Logo</h2>
              <p>Copyright &copy; 2021 Logo.</p>
            </div>
            <div className='single_box col-12 col-md-3'>
              <h4>Address</h4>
              <p>Bhubaneswar, Odisha</p>
              <p>India, 751019</p>
            </div>
            <div className='single_box col-12 col-md-4'>
              <h4>Contact</h4>
              <p>yourname@abc.com</p>
              <p>+91 - 132 456 7890</p>
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
                <a href='#' className='ml-0' target='_blank' rel='noopener'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#' target='_blank' rel='noopener'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#' target='_blank' rel='noopener'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#' target='_blank' rel='noopener'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Portfolio;
