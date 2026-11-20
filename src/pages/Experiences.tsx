import{ useState } from 'react'
import NetworkVisual from './NetworkVisual';
import IsometricArchitecture from '../components/IsometricArchitecture/IsometricArchitecture';

function Experiences() {
  const [url, setUrl] = useState("");

  const analyze = () => {
    if (!url.trim()) return;
    alert(`Ready to analyze: ${url}`);
  };

  return (
    <main >
      <section className="hero">
        {/* <div className="bottom-line">
          <span>EXPLORE THE INTERNET DIFFERENTLY</span>
          <span>SCANNING THE WEB, ONE DOMAIN AT A TIME ↓</span>
        </div> */}
        <div>
          <IsometricArchitecture/>
        </div>
      </section>
      
      <section className="hero">
        <div className="hero-content">
        
        <div className="hero-right">
          <div className="eyebrow">
            <span className="live-dot" />
            WEBSITE INTELLIGENCE PLATFORM
          </div>

          <h1>
            We give you
            <br />
            <span className="gradient-text">X-Ray Vision</span>
            <br />
            for your Website.
          </h1>

          <p className="subtitle">
            Discover everything happening behind the
            scenes of any website. Network, DNS, security,
            infrastructure and much more.
          </p>

          <p className="input-label">
            ENTER A WEBSITE TO GET STARTED
          </p>

          <div className="url-form">
            <span className="url-icon">↗</span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && analyze()}
              placeholder="https://example.com"
            />
            <button onClick={analyze}>
              Analyze URL <span>→</span>
            </button>
          </div>

          <div className="examples">
            <span>Try:</span>
            <button onClick={() => setUrl("google.com")}>google.com</button>
            <button onClick={() => setUrl("github.com")}>github.com</button>
            <button onClick={() => setUrl("openai.com")}>openai.com</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>30+</strong>
              <span>Security checks</span>
            </div>
            <div>
              <strong>20s</strong>
              <span>Average scan</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Open source</span>
            </div>
          </div>
        </div>
        <div className="hero-left">
          <NetworkVisual />
        </div>

        </div>
      </section>
      

    </main>
  );
}

export default Experiences
