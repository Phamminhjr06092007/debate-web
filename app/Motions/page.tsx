"use client";
import Link from "next/link";
import "./motion.css";
import { useState } from "react";

export default function MotionsPage() {

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
      "Chúng tôi hối tiếc việc thức trắng đêm trước hôm thi IELTS🐧.",
    infoSlide:
      "Chào mừng đến với round 4, inround cuối cùng của 8xDebete Tournament.\nChúc bro break 1st, vượt aim thật xa để tiếp tục đi farm giải🤩\nDù tôi không nhìn thấy trực tiếp quá trình ôn tập của bro, nhưng chắc chắn là bro đã bỏ ra rất nhiều nỗ lực rồi, nên rất mong bro sẽ tự tin vào bản thân và những gì mình chuẩn bị\nCó lẽ đêm nay bro khó có thể có được một giấc ngủ trọn vẹn, vì thế mong rằng điều ấy sẽ không ảnh hưởng đến phong độ của bro ngày mai\nChúc bro sẽ giữ được sự tỉnh táo, bình tĩnh và tự tin để thể hiện đúng những gì mình đã chuẩn bị\nChúc bro có một 'inround cuối' thật đẹp, được tiến vào các 'outround' xa hơn và đạt kết quả xứng đáng nhất\nChúc ngủ ngon.",
    setter: "Con Ghà",
  },

  {
    round: "Quaterfinals",
    motion:
      "Chúng tôi với tư cách là đàn con của puzzles chu, tin rằng vân hà sẽ vượt aim ielts của cô ấy.",
    infoSlide:
      "Hi lu c vha tịch pc ~~Chúc c vha thi ielts thật tốt, vượt aim và sẽ đổi lấy đc những thành công xứng đáng với nỗ lực của chị. Ngoài ra, pc cũng yêu c nhiều lém ak =))) c cgang sớm thi xong về với chúng em…. Chúc chị may mắn 🍀 c hãy tự tin, bản lĩnh và cố gắng hết mình chị nhé =))) (e khánh ở pc).",
    setter: "Ckhanh",
  },


  {
    round: "Semifinals",
    motion:
      "Chúng tôi với tư cách là Chu Ngọc Vân Hà sẽ vượt aim để được 9.0 ielts.",
    infoSlide:
      "Em chúc chị vha thi ielts tốt và đạt aim của chị nhé. em nghĩ chị sẽ đạt được số điểm mà chị mong muốn tại vì chị đã cố gắng và dành thời gian nhiều cho ielts. em thấy chị kiểu siêu áp lực về điểm ielts mặc dù chị đã siêu nỗ lực trong việc ôn thi ấy. em chúc chị có tâm lý và trạng thái tốt nhất trong phòng thi để thể hiện được hết khả năng của bản thân ạ. em tin chị vha yayy.\nP/s: Hãy được trên 8.0 speaking để xứng đáng với công sức 2 tiếng speaking của mình nha chị 😃.",
    setter: "Banh",
  },

  {
    round: "Grand Final",
    motion:
      "Chúng tôi tin rằng gãy cái chân gãy cái chân.",
    infoSlide:
      "Gãy cái chân.",
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
    <main className="bg-[#1B1B1B] h-[3400px]">
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

      <h2>🤩Information Slide🤩</h2>

      <div className="round-divider"></div>

      <p>{motions[selectedSlide].infoSlide}</p>

      {motions[selectedSlide].round === "Grand Final" && (
      <audio controls>
      <source
      src="/audio/jr_1.mp3"
      type="audio/mpeg"
    />
      </audio>
)}

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