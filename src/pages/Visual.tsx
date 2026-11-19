import "./Visual.css";

const panels = [
  {
    name: "HTML5",
    icon: "◈",
    className: "page",
    details: ["tekal-Webpage", "HTML document", "200 OK"],
  },
  {
    name: "CSS3/SCSS",
    icon: "⌘",
    className: "http",
    details: ["Html5 enabled", "bootstrap, material-UI, ", ".className {} configured"],
  },
  {
    name: "Typescript",
    icon: "◇",
    className: "tls",
    details: ["TSX current", "BABEL Transcript", "type js6"],
  },
  {
    name: "javascript",
    icon: "⌁",
    className: "network",
    details: ["ES6", "rxjs", "map, functions"],
  },
  {
    name: "API",
    icon: "◎",
    className: "dns",
    details: ["A record", "Filtered data record", "GET, POST ,UPDATE"],
  },
]; 

function Visual() {
  return (
    <div>
      <div className="visual">
      <div className="visual-glow" />

      <svg className="connections" viewBox="0 0 600 560">
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#5554ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#7775ff" />
            <stop offset="100%" stopColor="#00e5c3" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <g className="network-lines">
          <path d="M300 280 L110 120 L90 300" />
          <path d="M300 280 L480 110 L510 290" />
          <path d="M300 280 L100 450 L290 510" />
          <path d="M300 280 L500 450 L290 510" />
          <path d="M300 280 L300 60" />
          <path d="M110 120 L300 60 L480 110" />
          <path d="M90 300 L100 450 L290 510" />
          <path d="M510 290 L500 450 L290 510" />
          <path d="M110 120 L480 110" />
          <path d="M90 300 L510 290" />
        </g>

        <g className="network-dots">
          {[
            [300, 280, 8],
            [110, 120, 5],
            [480, 110, 5],
            [90, 300, 5],
            [510, 290, 5],
            [100, 450, 5],
            [500, 450, 5],
            [300, 60, 5],
            [290, 510, 5],
          ].map(([x, y, r], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              className="node"
            />
          ))}
        </g>
      </svg>

      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <div className="center-node2">
        <div className="center-inner2">
          <span>FrontEnd</span>
        </div>
        <div className="center-ring2" />
      </div>

      {panels.map((panel) => (
        <div
          key={panel.name}
          className={`info-card ${panel.className}`}
        >
          <div className="card-heading">
            <span className="card-icon">{panel.icon}</span>
            <span>{panel.name}</span>
            <span className="live-dot" />
          </div>

          <div className="card-details">
            {panel.details.map((detail) => (
              <div key={detail}>{detail}</div>
            ))}
          </div>
        </div>
      ))}

      <div className="visual-label">
        <span className="live-dot" />
        LIVE ANALYSIS
      </div>
      </div>
    </div>
  )
}

export default Visual
