"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function TournamentsPage() {

/*Nội dung của Carousel Jr*/
  const slides = [
    { img: "/images/carousel-a1.png" },
    { img: "/images/carousel-a2.png", button: "BET NGAY" },
    { img: "/images/carousel-a3.png", button: "BET NGAY" },
    { img: "/images/carousel-a4.png", button: "BET NGAY" },
    { img: "/images/carousel-a5.png", button: "BET NGAY" },
  ];

/*Nội dung của Tab*/
  const tabs = [
     { name: "Current Draws", href: "/CurrentDraws" },
     { name: "Team Tab", href: "/Tournaments" },
     { name: "Speaker Tab", href: "/Speakertab" },
     { name: "Results", href: "/profile" },
     { name: "Standings", href: "/profil" },
     { name: "Motions", href: "/Motions" },
     { name: "Participants", href: "/pro" },
];
 
  const containerRef = useRef<HTMLDivElement>(null);

  /*Scroll tự động*/
  const [index, setIndex] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => {
      const next = prev + 1;
      return next >= slides.length ? 0 : next;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [slides.length])
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const slideWidth = container.scrollWidth / slides.length;

  requestAnimationFrame(() => {
  container.scrollTo({
    left: index * slideWidth,
    behavior: "smooth",
  });
  });
}, [index]);

    const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // =========================
  // DRAG HANDLERS
  // =========================
  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !containerRef.current) return;

    e.preventDefault();

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // tốc độ kéo

    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <main className="bg-[#1B1B1B] min-h-screen">

/*Logo*/
<Link href="/">
<button className="absolute top-10 left-12">
<img src="/images/logo.png" className="logo" />
</button>
</Link>

/*Overall*/
      <div className="relative w-[260px] h-[280px] absolute top-[192px] left-[35px]">
        <Link href="/">
        <button className="absolute top-[40px] left-[40px] bg-[#3A3F44] w-[180px] h-[200px] rounded-2xl z-15 hover:brightness-75 transition duration-200">  
          <p className="text-white font-bold absolute bottom-[8px] left-[35px]">
          Tổng quan giải
          </p>
          <img src="/images/overview.png" className="absolute inset-0 rounded-t-2xl"></img>
        </button>
        </Link>
        
        /*Khung*/
        <div className="absolute inset-0 bg-[#7A0019] w-[260px] h-[280px] rounded-2xl border-[6px] border-[#C9A227]">
        </div>

        {/*Đèn top*/}
        <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
        }}/>
      ))}
        </div>

        /*Đèn bot*/
        <div className="absolute bottom-4 left-4 right-4 flex justify-between z-20">
        {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>

        /*Đèn left*/
        <div className="absolute top-4 bottom-4 left-4 flex flex-col justify-between z-20">
        {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
          boxShadow: "0 0 8px #FFF176",
          animation: "marqueeBlink 1s infinite",
          animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>

        /*Đèn right*/
        <div className="absolute top-4 bottom-4 right-4 flex flex-col justify-between z-20">
        {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>
      </div>

/*Top Tab*/
      <div className="relative w-[1012px] h-[64px] absolute top-[-290px] left-60">
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
    
/*Carousel Jr*/
      <div className="relative w-[680px] h-[280px] absolute top-[-200px] left-82">
        /*Khung Marquee*/
        <div className="absolute inset-0 bg-[#14532D] border-[6px] border-[#C9A227] rounded-2xl"
        ></div>

        /*Đèn top*/
        <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
        {Array.from({ length: 18 }).map((_, i) => (
        <div
        key={i}
        className="w-4 h-4 rounded-full bg-[#FFD54F]"
        style={{
          boxShadow: "0 0 8px #FFF176",
          animation: "marqueeBlink 1s infinite",
          animationDelay: `${i * 0.08}s`,
        }}
    />
  ))}
        </div>
        /*Đèn bot*/
        <div className="absolute bottom-4 left-4 right-4 flex justify-between z-20">
        {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>
        /*Đèn left*/
        <div className="absolute top-4 bottom-4 left-4 flex flex-col justify-between z-20">
        {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
          boxShadow: "0 0 8px #FFF176",
          animation: "marqueeBlink 1s infinite",
          animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>
        /*Đèn right*/
        <div className="absolute top-4 bottom-4 right-4 flex flex-col justify-between z-20">
        {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>
        /*Carousel*/
        <div
        ref={containerRef}
        className="
          flex
          overflow-x-auto
          gap-4
          scroll-smooth
          snap-x
          snap-mandatory
          cursor-grab
          active:cursor-grabbing
          select-none
          w-[600px]
          h-[200px]
          absolute top-10 left-10
          scrollbar-hide
        "
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >

        {slides.map((s, i) => (
          <div
            key={i}
            className="
              min-w-full
              snap-center
              border border-gray-700
              rounded-xl
              p-10
              text-white
              bg-cover
              bg-center
            "
            style={{ backgroundImage: `url(${s.img})` }}
          >
            <Link href="/Betting">
            <button className="font-sans font-bold absolute top-33 left-22 px-8 py-2 bg-yellow-500 rounded-lg hover:bg-red-600 transition">
            {s.button}
            </button>
            </Link>

          </div>
        ))}

        </div>
      </div>
    
/*Betting*/
      <div className="relative w-[260px] h-[280px] absolute top-[-504px] left-[1041px]">
        <button className="bg-[#7A0019] w-[260px] h-[280px] rounded-2xl border-[6px] border-[#C9A227]">  

        </button>

         {/*Đèn top*/}
        <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
        }}/>
      ))}
        </div>

        {/*Đèn bot*/}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between z-20">
        {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>

        {/*Đèn left*/}
        <div className="absolute top-4 bottom-4 left-4 flex flex-col justify-between z-20">
        {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
          boxShadow: "0 0 8px #FFF176",
          animation: "marqueeBlink 1s infinite",
          animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>

        {/*Đèn right*/}
        <div className="absolute top-4 bottom-4 right-4 flex flex-col justify-between z-20">
        {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#FFD54F]"
          style={{
            boxShadow: "0 0 8px #FFF176",
            animation: "marqueeBlink 1s infinite",
            animationDelay: `${i * 0.08}s`,
      }}
    />
  ))}
        </div>
      </div>
    </main>
  );
}
