"use client";

import { useState, useEffect } from "react";

export default function PersonalWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Save theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <style jsx>{`
        :root {
          --bg-color: #fff;
          --text-color: #000;
          --border-color: #0f0a0a;
          --link-color: #007bff;
          --quote-bg-color: #f9f9f9;
          --quote-border-color: #ccc;
          --toggle-bg: #d1c478;
        }

        .dark-mode {
          --bg-color: #212121;
          --text-color: #fff;
          --border-color: #444;
          --link-color: #1E90FF;
          --quote-bg-color: #1e1e1e;
          --quote-border-color: #444;
          --toggle-bg: #7a5fa8;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          margin: 0;
          padding: 0;
          transition: background-color 0.3s, color 0.3s;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 700px;
          margin: 20px auto;
          padding: 0 20px;
          position: relative;
          background-color: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
        }

        h1 {
          text-align: center;
          margin-top: 30px;
          position: relative;
        }

        .profile-picture img {
          width: 150px;
          border-radius: 50%;
        }

        .contact-info {
          max-width: 50%;
        }

        .contact-links a {
          display: block;
          color: var(--link-color);
          text-decoration: none;
          margin-bottom: 5px;
        }

        .section-title {
          margin-top: 20px;
          font-size: 1.5em;
          padding-bottom: 5px;
        }

        .two-rows {
          display: flex;
          justify-content: space-between;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }

        a {
          color: var(--link-color);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        blockquote {
          background-color: var(--quote-bg-color);
          border-left: 5px solid var(--quote-border-color);
          padding: 10px;
          font-style: italic;
        }

        .section {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
        }

        .list {
          width: 48%;
        }

        .theme-toggle-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          padding-right: 20px;
          top: 0;
          right: 0;
          z-index: 10;
        }

        .theme-toggle {
          width: 50px;
          height: 25px;
          background-color: var(--toggle-bg);
          border-radius: 25px;
          position: relative;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .theme-toggle .toggle-dot {
          width: 20px;
          height: 20px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 4px;
          transform: translateY(-50%);
          transition: left 0.3s;
        }

        .theme-toggle.active .toggle-dot {
          left: calc(100% - 24px);
        }

        .theme-icon {
          font-size: 1.5em;
        }

        details summary {
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <br />
        {/* Theme Toggle Button */}
        <div className="theme-toggle-wrapper">
          <span className="theme-icon">☀️</span>
          <div
            className={`theme-toggle ${isDarkMode ? 'active' : ''}`}
            onClick={toggleTheme}
          >
            <div className="toggle-dot"></div>
          </div>
          <span className="theme-icon">🌙</span>
        </div>

        {/* Skills and Interests Section */}
        <div className="two-rows section">
          <div className="profile-picture">
            <img
              src="https://pbs.twimg.com/profile_images/1890183718117216256/SJbHeNte_400x400.jpg"
              alt="Ariiellus Profile Picture"
            />
            <h2>Contact</h2>
            <div className="contact-links">
              <a href="https://x.com/Ariiellus" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="https://t.me/Ariiellus" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href="https://github.com/ariiellus" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href="https://mirror.xyz/ariiellus.eth" target="_blank" rel="noopener noreferrer">
                Mirror
              </a>
            </div>
          </div>

          <div className="list">
            <br />

            <h2 className="list">Delegate at:</h2>
            <ul>
              <li>
                <a
                  href="https://www.tally.xyz/gov/obol/delegate/ariiellus.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obol Collective
                </a>
              </li>
              <li>
                <a
                  href="https://vote.ether.fi/delegates/ariiellus.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EtherFi
                </a>
              </li>
            </ul>

            <h2 className="list">Operator at:</h2>
            <ul>
              <li>Holesky</li>
              <li>
                <a
                  href="https://explorer.consensus.mainnet.lukso.network/dashboard?validators=215188%2C215198%2C215193%2C215202%2C215195%2C215197%2C215177%2C215179%2C215182%2C215185%2C215186%2C215187%2C215189%2C215200%2C215199%2C215191%2C215190%2C215178%2C215181%2C215196%2C215183%2C215192%2C215194%2C215180%2C215184%2C215201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lukso Mainnet
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="about section">
          <h2 className="section-title">About Me</h2>
          <p>
            <a
              href="https://www.facebook.com/VDsixsnowboard/videos/403370100085137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              this process we follow, this cycle we ride
            </a>
          </p>
          <blockquote>
            🧑‍💻 Hi, I'm Ariel! Passionate about Ethereum research, MEV, cryptoeconomics, and Security.
            Learning Solidity. When offline, I love chess, calisthenics, running and climb mountains. 🚀
          </blockquote>
          <p>
            <a
              href="https://lazyslowdown.com/ichigo-ichie-embracing-joy-in-transitions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [一期一会]
            </a>
          </p>
        </div>

        {/* Interests and Hobbies Section */}
        <div className="two-rows section">
          <div className="list">
            <h2 className="section-title">Interests</h2>
            <ul>
              <li>🧠 MEV</li>
              <li>📝 Cryptoeconomics</li>
              <li>📊 DeFi Analyst</li>
              <li>🕵️‍♂️ Security</li>
              <li>🔬 Ethereum Research</li>
            </ul>
          </div>

          <div className="list">
            <h2 className="section-title">Hobbies</h2>
            <ul>
              <li>♟️ Chess</li>
              <li>🤸‍♂️ Calisthenics</li>
              <li>🏃‍♂️ Running</li>
              <li>⛰️ Mountaineering</li>
              <li>🧠 Perpetual Learning</li>
            </ul>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="what-i-do section">
          <h2 className="section-title">What I Do</h2>
          <p>
            <a href="https://x.com/Research_Kairos" target="_blank" rel="noopener noreferrer">
              <strong>Kairos Research</strong> ⌛️
            </a>
            <br />
            Co-founder, CEO, and Main Researcher. I lead my team to write amazing blogs.
          </p>
          <p>
            <a href="https://x.com/Ethereum_mexico" target="_blank" rel="noopener noreferrer">
              <strong>Ethereum Mexico</strong> 🇲🇽
            </a>
            <br />
            Co-founder, former Community Lead and Finance Manager.
          </p>
        </div>

        {/* Work Section (Toggleable) */}
        <div className="work section">
          <h2 className="section-title">My work</h2>

          {/* Talks */}
          <details>
            <summary>🎤 Talks</summary>
            <h4>Recorded</h4>
            <ul>
              <li>
                <a
                  href="https://x.com/Ariiellus/status/1872085234621329849"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to teach to buy Bitcoin in less than 5 minutes
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/live/2omoEzSnf74?si=UkEnmAiYZLcKIMW_&t=15400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Squad Staking. How to become a solo staker? - Ethereum México 2024
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/live/S85L6GNLYpE?si=RZelVeVtSV1WsUAu&t=69"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Dark Forest at ETHLatam Honduras 2024
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Xcb6dH41E_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum Endgame at ETHLatam Colombia 2022
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=2C3bKpC-Ng8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum The Merge Explained at The Merge Puebla Side Event
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=B3PnQ3C-bag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Merge: From Zero to Hero
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=PWlvH9UDuHo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Layer 1 Panel 1
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=VNaOKA0TMyg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Layer 1 Panel 2
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=xQU7_9PqLMs&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What is Ethereum with Barra Crypto Podcast
                </a>
              </li>
            </ul>

            <h4>Not Recorded</h4>
            <ul>
              <li>The Dark Forest at Wakah Chan. Ethereum México Side Event</li>
              <li>
                <a
                  href="https://x.com/openwebacademy_/status/1712253495112257873"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Workshop about Attestations at Open Web House CDMX
                </a>
              </li>
              <li>How to use Hardware wallets</li>
              <ul>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1646270739668926465"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Event in Guadalajara
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/marcrypted/status/1639706147304407040"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Event in CDMX
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1635628336453140480"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Event in Puebla
                  </a>
                </li>
              </ul>
              <li>
                <a
                  href="https://x.com/marcrypted/status/1588368381975359489"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum Roadmap with Crypto Epic Queen
                </a>
              </li>
            </ul>
          </details>

          {/* Writings */}
          <details>
            <summary>✍️ Writings</summary>
            <ul>
              <li>
                <a
                  href="https://mirror.xyz/ariiellus.eth/J19TcjQ5mqe4wFVfWlWL3hLC_airjiMRn9ZSVT1iZvE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A No Code Journey
                </a>
              </li>
              <li>
                <a
                  href="https://mirror.xyz/ariiellus.eth/b6EwdI7QONxRJ_AuEVHuOgRoG15saWl4ybxuqpQLqGU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inclusion is the Key: FOCIL
                </a>
              </li>
              <li>
                <a
                  href="https://mirror.xyz/ariiellus.eth/T-7W2Gjgp8NGbxcWGoHUIWjRp_YZxAkGcSYWdM8lyBM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Key Takeaways from Devcon SEA
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-a-los-based-rollups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introducción a los Based Rollups
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-a-zkml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  zkML: A Comprehensive Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-a-las-cbdcs-panorama-actual"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  State of CBDCs
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1rrHzU5jg_E1KnGDt_cm9UCJ_P9CaE_W8/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  State of Mev: Fundamentals
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-a-la-ejecucion-en-paralelo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parallel Execution: A Comprehensive Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/eigenlayer-avs-a-comprehensive-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EigenLayer AVS: A Comprehensive Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-a-la-data-availability"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Availability: A Comprehensive Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-al-mev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What is MEV?: A Comprehensive Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/gobernanza-en-la-era-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Governance in the Digital Era
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/introduccion-a-los-tokenomics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tokenomics 101: Fundamentals
                </a>
              </li>
              <li>
                <a
                  href="https://www.kairosresearch.xyz/insights/como-proteger-mi-frase-semilla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shamir Scheme: How to use it?
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/6a8bc00d105a4edead570e46b0d34922?pvs=21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum Magicians Protocol Roadmap | Devcon VI
                </a>
              </li>
              <li>
                <a
                  href="https://mirror.xyz/0x4F9281cBF48E21d4c25795a3366daEe3E24624CF/nQc7J7pRCn-T4StbvoSCEO4E-7E-s8fEInPaUZ4NKQc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum Endgame
                </a>
              </li>
              <li>
                <a
                  href="https://mirror.xyz/0x4F9281cBF48E21d4c25795a3366daEe3E24624CF/mtiKR9pZaVSNK1GEV-ti8XQ-gDH85LqvbBGn7NQGgxs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum Scalability
                </a>
              </li>
              <li>
                <a
                  href="https://mirror.xyz/0x4F9281cBF48E21d4c25795a3366daEe3E24624CF/vSA357BsSTTWJBbO23ojTH-wSP2RBltCDP3Ibg7w5L8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What is Ethereum?
                </a>
              </li>
            </ul>
          </details>

          {/* Spaces */}
          <details>
            <summary>🗣️ Spaces</summary>
            <ul>
              <li>
                <a
                  href="https://x.com/Ariiellus/status/1809610426700951624"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum Roadmap
                </a>
              </li>
              <ul>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1787931265934483679"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Merge
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1790229600494092557"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Surge
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1793053294291558734"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Scourge
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1798127091445272805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Verge
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1800662937264394691"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Purge
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ethereum_mexico/status/1805736636250210393"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Splurge
                  </a>
                </li>
              </ul>
              <li>EigenLayer</li>
              <ul>
                <li>
                  <a
                    href="https://x.com/i/spaces/1ynJOyROBZyKR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $EIGEN
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Ariiellus/status/1628559612445163521"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What is EigenLayer?
                  </a>
                </li>
              </ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=agd0VkG9sUU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What is Zero Knowledge
                </a>
              </li>
              <li>How Ethereum works</li>
              <ul>
                <li>
                  <a
                    href="https://open.spotify.com/episode/6sGJA1ONSfz2IuXAFANijy?si=22db578ea0b54b8b&nd=1&dlsi=b68614568f3b44e2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next steps after Shapella
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/i/spaces/1lPKqBwAdZNGb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What is Shapella?
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/i/spaces/1gqxvyneQrQJB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scaling Ethereum with L2s
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/episode/7zfYPn2LBgsTdtZepcnM3C?si=2Dn2DysISmC1qR3OyfCHpw&context=spotify%3Ashow%3A7cR4wr0TUZDm7jVmtO9Cza&nd=1&dlsi=e79e9b14228b4c11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ethereum Fundamentals
                  </a>
                </li>
              </ul>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
} 