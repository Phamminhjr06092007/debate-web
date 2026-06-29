"use client";

import Link from "next/link";

export default function BettingPage() {

  const tabs = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/Tournaments" },
  { name: "Live", href: "/live" },
  { name: "Profile", href: "/profile" },
];

  return (
    <main style={{ padding: 20 }}>
      <h1>Betting Page</h1>
      <img src="/images/logo.png" className="logo" />

      <div className="tab-wrapper">
        {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className="tab"
  >
          {tab.name}
        </Link>
))}
      </div>
    </main>
  );
}