import "./draw.css";
import Link from "next/link";

export default function CurrentDrawsPage() {

/*Nội dung của Tab*/
  const tabs = [
     { name: "Current Draws", href: "CurrentDraws" },
     { name: "Team Tab", href: "/Tournaments" },
     { name: "Speaker Tab", href: "/Speakertab" },
     { name: "Results", href: "/profile" },
     { name: "Standings", href: "/profil" },
     { name: "Motions", href: "/Motions" },
     { name: "Participants", href: "/pro" },
];

return(
  <main className="bg-[#1B1B1B] min-h-screen">
/*Top Tab*/
      <div className="relative w-[1012px] h-[64px] absolute top-[14px] left-60">
        <div className="absolute inset-0 bg-[#14532D] border-[6px] border-[#C9A227] rounded-2xl"
        ></div>
        <div className="tab-wrapper absolute bottom-[6px] left-[6px]">
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
      </div>
/*Logo*/
      <Link href="/">
      <button className="absolute top-10 left-12">
      <img src="/images/logo.png" className="logo" />
      </button>
      </Link>
  </main>
)}