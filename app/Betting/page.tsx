"use client";

import { useState } from "react";

export default function BettingPage() {
  const [active, setActive] = useState(0);

  const tabs = ["Home", "Games", "Live", "Profile"];

  return (
    <main style={{ padding: 20 }}>
      <h1>Betting Page</h1>

      <div className="tab-wrapper">
        {tabs.map((item, i) => (
          <div
            key={i}
            className={`tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}