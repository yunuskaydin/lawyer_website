"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from 'swiper';

const faaliyetler = [
  {
    title: "Boşanma ve Aile Hukuku",
    href: "/faaliyet/bosanma",
    img: "/images/hukukkitap.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Miras Hukuku",
    href: "/faaliyet/miras",
    img: "/images/hukukkitap.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Ticaret Hukuku",
    href: "/faaliyet/ticaret",
    img: "/images/hukukkitap.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Ceza Hukuku",
    href: "/faaliyet/ceza",
    img: "/images/hukukkitap.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "İdari, Vergi ve Gümrük Hukuku",
    href: "/faaliyet/idari",
    img: "/images/hukukkitap.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Kişisel Verilerin Korunması ve Bilişim Hukuku",
    href: "/faaliyet/bilisim",
    img: "/images/hukukkitap.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <nav className="w-full h-28 bg-white border-b border-gray-200 flex items-center px-8">
        {/* Sol: Logo ve yazı */}
        <div className="flex items-center min-w-[320px]">
          <Image
            src="/images/temp_logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain mr-3"
          />
          <span className="font-bold text-xl text-[#7a5c2e] tracking-wide select-none">
            AVUKAT<br />BAHAR AYDIN
          </span>
        </div>
        {/* Orta: Menü */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-8">
            <button className="font-semibold text-base px-2 py-1 hover:text-[#7a5c2e] transition-colors">Ana Sayfa</button>
            <button className="font-semibold text-base px-2 py-1 hover:text-[#7a5c2e] transition-colors">Hakkımda</button>
            <div className="relative" ref={dropdownRef}>
              <button
                className="font-semibold text-base px-2 py-1 hover:text-[#7a5c2e] transition-colors flex items-center gap-1"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                Faaliyet Alanları
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#7a5c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link href="/faaliyet/bosanma" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Boşanma ve Aile Hukuku</Link>
                  <Link href="/faaliyet/miras" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Miras Hukuku</Link>
                  <Link href="/faaliyet/ticaret" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Ticaret Hukuku</Link>
                  <Link href="/faaliyet/ceza" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Ceza Hukuku</Link>
                  <Link href="/faaliyet/idari" className="block w-full text-left px-4 py-2 hover:bg-gray-100">İdari, Vergi ve Gümrük Hukuku</Link>
                  <Link href="/faaliyet/bilisim" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Kişisel Verilerin Korunması ve Bilişim Hukuku</Link>
                </div>
              )}
            </div>
            <button className="font-semibold text-base px-2 py-1 hover:text-[#7a5c2e] transition-colors">İletişim</button>
          </div>
        </div>
        {/* Sağ: Avukata Danış */}
        <div className="flex items-center min-w-[180px] justify-end">
          <button className="px-6 py-2 border border-gray-400 rounded-md font-semibold text-base hover:bg-gray-50 transition-colors">
            Avukata Danış
          </button>
        </div>
      </nav>
      {/* SWIPER SLIDER */}
      <div className="w-full overflow-hidden flex justify-center items-center mt-8">
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={false}
            navigation
            pagination={{ clickable: true }}
            className="!overflow-visible"
            style={{ height: 400, paddingBottom: 40 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              setActiveIndex(swiper.realIndex);
              swiperRef.current = swiper;
            }}
          >
            {faaliyetler.map((f, idx) => (
              <SwiperSlide key={f.title} className="min-w-0">
                <div className="relative w-full h-[400px]">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover rounded-lg"
                    style={{ filter: "brightness(0.7)" }}
                    loading="eager"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                    <p className="text-lg text-white mb-6 max-w-xl">{f.desc}</p>
                    <Link href={f.href} className="px-6 py-2 bg-[#7a5c2e] text-white rounded hover:bg-[#a07d4a] transition-colors">Detaylı Bilgi</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Alt başlıklar */}
          <div className="flex justify-center gap-4 mt-4">
            {faaliyetler.map((f, idx) => (
              <div
                key={f.title}
                className={`flex flex-col items-center px-4 py-2 rounded cursor-pointer transition-all duration-200
                  ${activeIndex === idx
                    ? "bg-[#7a5c2e] text-white shadow-lg scale-105 font-bold"
                    : "bg-[#f3e7d2] text-[#7a5c2e] hover:bg-[#e2cfa3]"}
                `}
                onClick={() => {
                  swiperRef.current?.slideTo(idx);
                }}
              >
                <span className="text-base font-semibold">{idx + 1}</span>
                <span className="text-xs text-center mt-1">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
