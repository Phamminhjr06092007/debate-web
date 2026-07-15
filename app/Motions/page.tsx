"use client";
import Link from "next/link";
import "./motion.css";
import { useState } from "react";

export default function MotionsPage() {

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

const motions = [
  {
    round: "Round 1",
    motion:
      "Chúng tôi sẽ luôn hướng đến 9.0 IELTS của CNVH.",
    infoSlide:
      "Chị VHa thân quý. Dù em đang ở xa chị 20km đường Hà Nội, nhưng em biết chị đang dốc lòng ôn tập cho kì thi IELTS. Em cầu mong bài đăng chúc mừng học sinh đạt aim IELTS của trường bưởi ko buông rơi tên chị. Em luôn hướng đến 9.0 IELTS của chị.",
    setter: "Hà Nguyễn",
  },

  {
    round: "Round 2",
    motion:
      "Chúng tôi tin rằng Vân Hà sẽ được 8.5 ielts.",
    infoSlide:
      "Vân Hà là một cá thể ôn thi ielts đến 3h sáng, luyện speaking 2 tiếng/buổi và aim 8.5 ielts.",
    setter: "Minh Chim",
  },

  {
    round: "Round 3",
    motion:
      "Chúng tôi tin rằng 2 trung tâm trên nên thực hiện cơ chế hoàn tiền nếu CNVH k đạt aim.",
    infoSlide:
      "IDP/BC là 2 địa điểm cung cấp dịch vụ thi ie trên vùng lãnh thổ VN.\nCNVH là 1 cá thể chăm học, ôn ie 8h trên ngày, luôn trong tình trạng ôn wri read ie,….",
    setter: "Trang Nhung",
  },

  {
    round: "Round 4",
    motion:
      "THR every sleepless night spent preparing for IELTS.",
    infoSlide:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    setter: "DEF",
  },

  {
    round: "Grand Final",
    motion:
      "THBT today's candidate deserves their dream score.",
    infoSlide:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    setter: "Phạm Minh Jr",
  },
];

const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

const openSlide = (index: number) => {
  setSelectedSlide(index);
};

const closeSlide = () => {
  setSelectedSlide(null);
};

return (
    <main className="bg-[#1B1B1B] h-[3300px]">
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

    /*Motions*/
      <div className="motion-wrapper absolute top-[200px] left-[170px]">
  {motions.map((motion, index) => (
        <div key={index} className="motion-card">

      <h2>{motion.round}</h2>
      <div className="round-divider"></div>

      <h3>Motion</h3>
      <p>{motion.motion}</p>

      <h3>Information Slide</h3>

      <button
      onClick={() => openSlide(index)}
      className="info-button"
      >
      View Information Slide
      </button>

      <h3>Motion Setter</h3>
      <p>{motion.setter}</p>

        </div>
  ))}
      </div>
      
      {selectedSlide !== null && (
  <div className="popup-overlay">

    <div className="popup-card">

      <h2>Information Slide</h2>

      <div className="round-divider"></div>

      <p>{motions[selectedSlide].infoSlide}</p>

      <button
      className="info-button"
      onClick={closeSlide}
      >
        Close
      </button>

    </div>

  </div>
)}
    </main>
)}