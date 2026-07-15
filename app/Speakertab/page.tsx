import Link from "next/link";

export default function SpeakertabPage() {

const speakerRankings = [
    {
      rank: 1,
      name: "Chu Ngọc Vân Hà",
      team: "PC 9.0 IELTS",
      lis: 9.0,
      read: 9.0,
      speak: 9.0,
      write: 9.0,
      overall: 9.0,
      stdev: 0,
      num: 6,
    },
    {
      rank: 2,
      name: "Hùng Trương",
      team: "CVA B",
      lis: 9,
      read: 9,
      speak: 7,
      write: 7.5,
      overall: 8.0,
      stdev: 0.89,
      num: 6,
    },
    {
      rank: 3,
      name: "Lê Banh",
      team: "team CCVA",
      lis: 9,
      read: 8.5,
      speak: 7,
      write: 7,
      overall: 8,
      stdev: 0.89,
      num: 4,
    },
    {
      rank: 4,
      name: "Chim",
      team: "Nhóm 2 training core tổng",
      lis: 6.7,
      read: 6.7,
      speak: 6.7,
      write: 6.7,
      overall: 6.7,
      stdev: 0,
      num: 4,
    },
  ];

  /*Nội dung của Tab*/
  const tabs = [
     { name: "Current Draws", href: "/" },
     { name: "Team Tab", href: "/Tournaments" },
     { name: "Speaker Tab", href: "/Speakertab" },
     { name: "Results", href: "/profile" },
     { name: "Standings", href: "/profil" },
     { name: "Motions", href: "/Motions" },
     { name: "Participants", href: "/pro" },
];

return (
    <main className="bg-[#1B1B1B] min-h-screen">
      <div className="overflow-x-auto speaker-table-wrapper
                    absolute top-[300px] left-[160px] bg-[#14532D] 
                    border-[6px] border-[#C9A227] rounded-2xl">
      <table className="speaker-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Team</th>
            <th>Lis</th>
            <th>Read</th>
            <th>Speak</th>
            <th>Write</th>
            <th>Overall</th>
            <th>Stdev</th>
            <th>Num</th>
          </tr>
        </thead>

        <tbody>
          {speakerRankings.map((speaker) => (
            <tr key={speaker.rank}>
              <td>{speaker.rank}</td>
              <td>{speaker.name}</td>
              <td>{speaker.team}</td>
              <td>{speaker.lis.toFixed(1)}</td>
              <td>{speaker.read.toFixed(1)}</td>
              <td>{speaker.speak.toFixed(1)}</td>
              <td>{speaker.write.toFixed(1)}</td>
              <td>{speaker.overall.toFixed(1)}</td>
              <td>{speaker.stdev}</td>
              <td>{speaker.num}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

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

/*Chữ Speaker tab*/
      <div className="bg-[#7A0019] absolute top-[150px] left-[100px] w-[350px] h-[100px]
                     border-[6px] border-[#C9A227] rounded-2xl">
        <p className="absolute top-[22px] left-[15px] text-4xl font-bold text-white">
        🥳 Speaker Tab 🥳
        </p>
      </div>
    </main>
)}