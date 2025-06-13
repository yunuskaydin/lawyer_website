"use client";
import Image from "next/image";
import { useState, useRef } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full">
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
