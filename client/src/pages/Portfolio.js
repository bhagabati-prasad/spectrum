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
  ThemeSettings,
} from '../styles/PortfolioStyles';
import Typewriter from 'typewriter-effect';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';

import image1 from '../assets/herobg1.jpg';
import image2 from '../assets/herobg2.jpg';
import image3 from '../assets/herobg3.jpg';

const Portfolio = () => {
  const [header, setHeader] = useState('true');

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader('true');
    } else if (window.scrollY > 70) {
      return setHeader('false');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <ThemeSettings>
        <div className='editInfo'>
          <a href='#'>
            <i class='fas fa-user-edit'></i>
          </a>
        </div>
        <div className='toggleTheme'>
          <button>
            <i class='fas fa-moon'></i>
          </button>
        </div>
      </ThemeSettings>
      <Header bg={header}>
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
      <HeroSection id='hero'>
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
      <AboutSection id='about'>
        <div className='container'>
          <div className='row'>
            <div className='content col-12 col-md-6'>
              <SectionHeading fill='About ' span='me' />
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
      <DetailsSection className='details'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-5 d-flex align-items-center'>
              <SectionHeading fill='More ' span='details' />
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
      <ResumeSection id='resume'>
        <div className='container'>
          <div className='row'>
            <SectionHeading fill='' span='Resume' />
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
      <ProjectSection id='projects'>
        <div className='container'>
          <div className='row'>
            <div className='heading'>
              <h1>
                My <span>projects</span>
              </h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 my-3'>
              <a href='#'>
                <div className='single_project card'>
                  <div className='image'>
                    <img src='./images/project1.png' alt='' />
                  </div>
                  <div className='body'>
                    <h1 className='display-4'>01</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium officiis asperiores velit.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <a href='#'>
                <div className='single_project card'>
                  <div className='image'>
                    <img src='./images/project1.png' alt='' />
                  </div>
                  <div className='body'>
                    <h1 className='display-4'>01</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium officiis asperiores velit.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </ProjectSection>
      <ContactSection>
        <div className='container'>
          <div className='row'>
            <div className='content_box col-12 col-lg-8'>
              <SectionHeading fill='Contact ' span='us' />
            </div>
            <div className='col-12 col-lg-4'>
              <div className='form_box'>
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
      <Footer>
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
