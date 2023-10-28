import letter_j from "../images/letter-j.png";
import git_pic from "../images/git-pic.jpg";
import work_pic from "../images/work-pic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import threecards from "../images/projects/3-col-card-desktop.jpg";
import agecalc from "../images/projects/age-calc-app-laptop.jpg";
import ecomproduct from "../images/projects/e-com-product-page.jpg";
import nftcard from "../images/projects/nft-card.jpg";
import ordersum from "../images/projects/order-sum-desktop.jpg";
import qrcard from "../images/projects/qr-desktop.jpg";
import todocbv from "../images/projects/todo-django-cbv.jpg";
import todofbv from "../images/projects/todo-django-fbv.jpg";
import todomern from "../images/projects/todo-mern.jpg";

import cv from "../images/Jalga_CV_for_portfolio_site.pdf";

function App() {
  return (
    <div className="grid">
      <div className="app-comp">
        <header className="navbar">
          <div className="elements">

            <div style={{backgroundColor: "white"}} className="logotype">
              <img  src={letter_j} alt="logo" width={32} height={30}/>
            </div>
            
            <p>JALGA</p>

            <div class="dropdown">
              <button class="dropbtn"><FontAwesomeIcon icon={ faBars } size="lg" /></button>
              <div class="dropdown-content">
                <a href="https://github.com/coder-96"><FontAwesomeIcon icon={ faGithub } size="lg" /> GitHub</a>
                <a href="https://twitter.com/jsaga_"><FontAwesomeIcon icon={ faTwitter } size="lg" /> Twitter</a>
                <a href="https://www.instagram.com/keen_for_more/"><FontAwesomeIcon icon={ faInstagram } size="lg" /> Instagram</a>
              </div>
            </div>

            <div className="right-column">

              <a href="https://github.com/coder-96"><FontAwesomeIcon icon={ faGithub } size="lg" /></a>
              <a href="https://twitter.com/jsaga_"><FontAwesomeIcon icon={ faTwitter } size="lg" /></a>
              <a href="https://www.instagram.com/keen_for_more/"><FontAwesomeIcon icon={ faInstagram } size="lg" /></a>

              <a className="download-btn" href={cv} download="jalga_cv">Download CV</a>

            </div>
            
          </div>
            
            <hr />

        </header>
        
        <main>
              <section className="intro">
                <div className="info">
                  <p className="greeting">✋ Hello, my name is</p>
                  <h1 className="name">Jalga.</h1>
                  <h1 className="field">Junior Python Django Developer</h1>
                  <p className="pep">I CREATE WEBSITES AND WEB APPLICATIONS. I CAN BRING TO LIFE YOUR DESIGNS WITH ALL FUNCTIONALITY YOU NEED.</p>
                  <a className="contacts-btn" href="#contact-me">Contacts</a>
                </div>
                <div className="my-pic">
                  <img src={git_pic} alt="my-photo" />
                </div>
              </section>

              <div className="rectangle-skills">
                <p>HTML5</p>
                <span>*</span>
                <p>CSS</p>
                <span>*</span>
                <p>PYTHON</p>
                <span>*</span>
                <p>DJANGO</p>
                <span>*</span>
                <p>DJANGO REST</p>
                <span>*</span>
                <p>FLASK</p>
                <span>*</span>
                <p>JAVASCRIPT</p>
                <span>*</span>
                <p>POSTGRES</p>
              </div>

              <section className="about">
                <div className="one">
                  <h1>About <span>Jalga</span></h1>
                  <p className="description">A self-taught junior python dev with a strong desire to coding and learning, including some experience with front-end development. Experienced working in different fields, as sales manager and marketing manager. A fluent user of popular programming languages like Python, JavaScript and tools like Adobe CC etc.</p>
                  <div>
                    <a href="https://github.com/coder-96"><FontAwesomeIcon icon={ faGithub } size="lg" /></a>
                    <a href="https://twitter.com/jsaga_"><FontAwesomeIcon icon={ faTwitter } size="lg" /></a>
                    <a href="https://www.instagram.com/keen_for_more/"><FontAwesomeIcon icon={ faInstagram } size="lg" /></a>
                  </div>
                  <p>Here Are A Few Technologies I've Been Working With Recently:</p>
                  <div className="tech-table">
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      Python
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      Django
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                     Javascript
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      MongoDB
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      Express JS
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      React JS
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      Node JS
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      Bootstrap
                    </p>
                    <p>
                      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#FF8E5E"/>
                      <circle cx="12.5" cy="5.5" r="5.5" fill="#FFC5B2"/>
                      </svg>
                      Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="two">
                  <div className="work-pic">
                    <img src={work_pic} alt="office-pic" />
                  </div>
                </div>
                <div className="three">
                  <span>🎓</span>
                  <h1>Education</h1>
                  <div>
                    <h2>Girne American University, Cyprus</h2>
                    <p>Master's (International Business Management)</p>
                    <p className="time">2018 - 2020</p>
                  </div>
                  <hr />
                  <div>
                    <h2>Udemy Courses, Online</h2>
                    <p>100 Days of Code: The Complete Python Pro Bootcamp for 2023</p>
                    <p className="time">2023, May</p>
                  </div>
                  <hr />
                  <div>
                    <h2>Udemy Courses, Online</h2>
                    <p>The Complete 2023 Web Development Bootcamp</p>
                    <p className="time">2023, June</p>
                  </div>
                </div>
                <div className="four">
                  <span>💼</span>
                  <h1>Professional Experience</h1>
                  <div>
                    <h2>Solsun Real Estate, Cyprus</h2>
                    <p>Marketing Manager</p>
                    <p className="time">2019 - 2020</p>
                  </div>
                  <hr />
                  <div>
                    <h2>Durmazz Techno Store, Cyprus</h2>
                    <p>Sales Manager</p>
                    <p className="time">2020 - 2022</p>
                  </div>
                  <hr />
                  <div>
                    <h2>Personal Portfolio Projects</h2>
                    <p>Been working on my portfolio projects</p>
                    <p className="time">2023, August - Present Day</p>
                  </div>
                </div>
              </section>

              <section className="my-skills">
                <h1>My <span>skills</span></h1>
                <ul className="skill-list">
                  <li>
                    <div class="vl"></div>
                    <h3>Qualifications</h3>
                    <p>Experience in Django and Python development is not much but I'm fast learner. Knowledge of front-end technologies, including HTML5, CSS3, and JavaScript. Understanding of databases and ORM systems. Experience with RESTful API design and implementation. Knowledge of version control systems, like Git. Attention to detail, and a dedication to quality. Excellent verbal and written communication skills.</p>
                  </li>
                  <li>
                    <div class="vl-2"></div>
                    <h3>What can I do for you</h3>
                    <p>Creating a website or web app according to your figma designs. Developing responsive and interactive frontend parts of projects. Developing server side of websites and web apps with Django. Adding api routes with Django Rest Framework for synced work with React Frontend part. Performing CRUD operations in Django with SQLite or connecting it to Postgresql and more.</p>
                  </li>
                  <li>
                    <div class="vl-3"></div>
                    <h3>What can you expect</h3>
                    <p>As a Django developer I'm always eager to learn about new tools, techniques, and best practices. You can expect me to deliver my work on time. You can also expect me to be honest with you about your project's needs, so that we can come up with an approach that works best for both of us. Good communication skills, team work and problem-solving skills.</p>
                  </li>
                </ul>
              </section>

              <section className="projects">
                <h1>I create projects</h1>
                <h1 className="nd">that display my skills</h1>
                <ul>
                  <li>
                    <a class="card first" href="https://coder-96.github.io/frontend-mentor-3-column-card/">
                      <img src={threecards} alt="screenshot" />
                    </a>
                      <p><span>Frontend:</span> 3 column card component</p>
                  </li>
                  <li>
                    <a class="card second" href="https://coder-96.github.io/frontend-mentor-age-calculator-app/">
                      <img src={agecalc} alt="screenshot" />
                    </a>
                    <p><span>Frontend:</span> Age Calculator</p>
                  </li>
                  <li>
                    <a class="card third" href="https://coder-96.github.io/frontend-mentor-product-page/">
                      <img src={ecomproduct} alt="screenshot" />
                    </a>
                    <p><span>Frontend:</span> Product page component</p>
                  </li>
                  <li>
                    <a class="card fourth" href="https://coder-96.github.io/frontend-mentor-nft-preview-card-component/">
                      <img src={nftcard} alt="screenshot" />
                    </a>
                    <p><span>Frontend:</span> NFT preview card component</p>
                  </li>
                  <li>
                    <a class="card fifth" href="https://coder-96.github.io/frontend-mentor-order-summary-component/">
                      <img src={ordersum} alt="screenshot" />
                    </a>
                    <p><span>Frontend:</span> Order summary component</p>
                  </li>
                  <li>
                    <a class="card sixth" href="https://coder-96.github.io/frontend-mentor-qr-code-component/">
                      <img src={qrcard} alt="screenshot" />
                    </a>
                    <p><span>Frontend:</span> QR code card component</p>
                  </li>
                  <li>
                    <a class="card seventh" href="https://github.com/coder-96/to-do-list-django">
                      <img src={todocbv} alt="screenshot" />
                    </a>
                    <p><span>Backend:</span> To-do-list (Django CBV)</p>
                  </li>
                  <li>
                    <a class="card eighth" href="https://github.com/coder-96/to-do-list-django-fbv">
                      <img src={todofbv} alt="screenshot" />
                    </a>
                    <p><span>Backend:</span> To-do-list (Django FBV)</p>
                  </li>
                  <li>
                    <a class="card ninth" href="https://github.com/coder-96/to-do-list-mern">
                      <img src={todomern} alt="screenshot" />
                    </a>
                    <p><span>Backend:</span> To-do-list (MERN)</p>
                  </li>
                </ul>
              </section>

              <section className="contacts" id="contact-me">
                <h2>Lets build your</h2>
                <h2 className="nd-two">project together</h2>
                <a href="mailto:jjcoding2020@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /> Get in touch</a>
              </section>
              
        </main>
        <footer>
          <p>© 2023 by Jalga (Zhalgasyn Ernazarov) | Made with React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

// const Home = () => {
//   return ( 
//     <div>
//       <h1>Home</h1>
//     </div>
//    );
// }
 
// export { Home };
