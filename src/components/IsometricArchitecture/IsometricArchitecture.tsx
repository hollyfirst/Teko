import "./IsometricArchitecture.css";
import type { CSSProperties } from "react";

interface LayerData {
  name: string;
  depth: number;
  rows: string[];
} 

const layers: LayerData[] = [
  {
    name: "DNS",
    depth: 0,
    rows: ["A", "AAAA", "MX", "TXT", "DNSSEC"],
  },
  {
    name: "NETWORK",
    depth: 65,
    rows: ["IP", "ASN", "Location", "Ports", "Traceroute"],
  },
  {
    name: "TLS",
    depth: 130,
    rows: ["Protocol", "Cipher", "Issuer", "Chain", "Expires"],
  },
  {
    name: "HTTP",
    depth: 195,
    rows: ["Status", "HSTS", "CSP", "X-Powered-By", "Set-Cookie"],
  },
  {
    name: "SCRIPTS",
    depth: 260,
    rows: [
      "app.js",
      "gtm.js",
      "fbevents.js",
      "hotjar.js",
      "fonts.gstatic",
    ],
  },
  {
    name: "PAGE",
    depth: 325,
    rows: [],
  },
];

function Layer({ layer }: { layer: LayerData }) {
  return (
    <div
      className={`iso-layer ${layer.name === "PAGE" ? "page-layer" : ""}`}
      style={{ "--depth": `${layer.depth}px` }as CSSProperties}
      
    >
      <div className="layer-title">{layer.name}</div>

      {layer.name === "PAGE" ? (
        <div className="page-content">
          <div className="browser-bar" />
          <div className="page-block large" />
          <div className="page-block accent" />
          <div className="page-block small" />
          <div className="page-block medium" />
        </div>
      ) : (
        <div className="layer-content">
          {layer.rows.map((item, index) => (
            <div className="layer-row" key={item}>
              <span>{item}</span>
              <span
                className={`layer-value value-${index}`}
              >
                {index === 0
                  ? "ACTIVE"
                  : index === 2
                    ? "SECURE"
                    : "••••••"}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="layer-border" />
    </div>
  );
}


function IsometricArchitecture() {
  return (
    <div>
        <section className="iso-scene">
            <div className="iso-grid" />

            <div className="iso-glow" />

            <div className="iso-stack">
                {layers.map((layer) => (
                <Layer key={layer.name} layer={layer} />
                ))}
            </div>

            <div className="iso-particle particle-one" />
            <div className="iso-particle particle-two" />
        </section>
      
    </div>
  )
}

export default IsometricArchitecture
