import React from 'react';
import './index.css';
import characterStanding from './assets/character-standing.png';
import characterLaptop from './assets/character-laptop.png';
import characterReading from './assets/character-reading.png';
import heroMobile from './assets/hero-mobile.png';

const WindowCard = ({
  title,
  content,
  children,
  style,
  headerType = 'title',
  headerText
}: {
  title: string;
  content?: string;
  children?: React.ReactNode,
  style?: React.CSSProperties,
  headerType?: 'title' | 'url' | 'menu',
  headerText?: string
}) => (
  <div className="window-card" style={style}>
    <div className="window-header">
      <div className="dot dot-red"></div>
      <div className="dot dot-yellow"></div>
      <div className="dot dot-green"></div>
      <div className="window-header-center">
        {headerType === 'url' && <div className="url-bar">{headerText || 'https://about.me'}</div>}
        {headerType === 'menu' && (
          <div className="menu-items">
            <span>File</span>
            <span>Edit</span>
            <span>Object</span>
          </div>
        )}
        {headerType === 'title' && <span className="header-title">{headerText || title}</span>}
      </div>
    </div>
    <div className="window-content">
      <h3 className="card-title">{title}</h3>
      {content && <p className="card-body">{content}</p>}
      {children}
    </div>
  </div>
);

function App() {
  return (
    <div className="grid-bg" style={{ minHeight: '100vh' }}>
      <header className="container">
        <nav className="nav">
          <div className="nav-logo">Supriya.</div>
          <ul className="nav-links">
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I’m Supriya</h1>
            <p className="hero-intro">Computer Science graduate with hands-on experience in software development.</p>
            <p className="hero-sub">Proficient in Python, Java, SQL, and modern web technologies with a strong foundation in GenAI and data-driven applications.</p>
          </div>
          <div className="hero-visual">
            <div className="bubble bubble-1">
              <img src={characterStanding} alt="Supriya standing" />
            </div>
            <div className="bubble bubble-2">
              <img src={characterLaptop} alt="Supriya at laptop" />
            </div>
            <div className="bubble bubble-3">
              <img src={characterReading} alt="Supriya reading" />
            </div>
            <img src={heroMobile} className="hero-mobile-img" alt="Hero illustrations" />
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="info-section">
          <div className="cards-container">
            <div className="pos-projects">
              <WindowCard
                title="Projects"
                headerType="title"
                headerText="STUFF I'VE DONE"
              >
                <div className="card-body">
                  <p><strong>Academic Projects</strong></p>
                  <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Developed a deep learning–based biometric watermarking system for secure identity protection, built a real-time social media analytics platform, created a machine learning model with a GUI for brain tumor detection from MRI scans.</p>

                  <p><strong>Personal Projects</strong></p>
                  <p style={{ marginTop: '0.5rem' }}>Designed branded food packaging labels for a local food business and other graphic design projects using Canva and other creative design tools.</p>
                </div>
              </WindowCard>
            </div>

            <div className="pos-skills">
              <WindowCard
                title="Skills"
                headerType="menu"
              >
                <div className="skill-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Java</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">SQL</span>
                  <span className="tag">React Native</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">Git/GitHub</span>
                  <span className="tag">GenAI</span>
                  <span className="tag">Figma</span>
                  <span className="tag">Software Testing</span>
                </div>
              </WindowCard>
            </div>

            <div className="pos-experience">
              <WindowCard
                title="Experience"
                headerType="title"
                headerText="WORK EXPERIENCE"
              >
                <div className="card-body">
                  <p><strong>SDE Intern – Metricdust LLC</strong></p>
                  <p style={{ marginTop: '1rem' }}>Contributed to the design, development, and integration of a React and Python–based platform, delivering secure and reliable features. Worked closely with cross-functional technical teams to gather requirements, build reliable API integrations, and deliver well-tested, maintainable features.</p>
                </div>
              </WindowCard>
            </div>

            <div className="pos-education">
              <WindowCard
                title="Education"
                headerType="url"
                headerText="https://vtu.ac.in"
              >
                <div className="card-body">
                  <p><strong>Bachelor of Computer Science & Engineering</strong></p>
                  <p>Visvesvaraya Technological University</p>
                  <p> Dec 2021 – Jul 2025</p>
                </div>
              </WindowCard>
            </div>

            <div className="pos-links">
              <WindowCard
                title="Me, elsewhere"
                headerType="title"
                headerText="LINKS"
              >
                <div className="card-body">
                  <div className="social-links">
                    <a href="mailto:supriya.hegde73@gmail.com" className="social-icon" title="Email">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-10 11" /><path d="m22 2-7 20-3-9-9-3Z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/supriya-hegde07/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href="https://github.com/SupriyaHegde773/" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                  </div>
                </div>
              </WindowCard>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Supriya Portfolio
      </footer>
    </div>
  );
}

export default App;
