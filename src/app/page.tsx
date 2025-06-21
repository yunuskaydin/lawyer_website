"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from 'swiper';

const faaliyetler = [
  {
    title: "Boşanma ve Aile Hukuku",
    href: "/faaliyet/bosanma",
    img: "/images/hukukkitap.jpg",
    desc: "Boşanma, nafaka, velayet, mal paylaşımı ve aile içi şiddet davalarında uzman hukuki danışmanlık."
  },
  {
    title: "Miras Hukuku",
    href: "/faaliyet/miras",
    img: "/images/hukukkitap.jpg",
    desc: "Miras taksimi, mirasçılık belgesi, miras davaları ve miras hukuku alanında kapsamlı hukuki danışmanlık."
  },
  {
    title: "Ticaret Hukuku",
    href: "/faaliyet/ticaret",
    img: "/images/hukukkitap.jpg",
    desc: "Şirket kuruluşu, birleşme, devralma, ortaklık ve ticari sözleşmeler konularında hukuki danışmanlık."
  },
  {
    title: "Ceza Hukuku",
    href: "/faaliyet/ceza",
    img: "/images/hukukkitap.jpg",
    desc: "Ceza davalarında müdafilik, müşteki vekilliği ve ceza hukuku alanında kapsamlı hukuki danışmanlık."
  },
  {
    title: "İdari Hukuk",
    href: "/faaliyet/idari",
    img: "/images/hukukkitap.jpg",
    desc: "İdari işlemler, kamu ihale davaları ve idari yargı süreçlerinde hukuki danışmanlık ve dava takibi."
  },
  {
    title: "Bilişim Hukuku",
    href: "/faaliyet/bilisim",
    img: "/images/hukukkitap.jpg",
    desc: "Kişisel verilerin korunması, dijital haklar ve bilişim suçları konularında uzman hukuki danışmanlık."
  }
];

// Harita için gerekli stiller ve konum bilgileri
const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 38.72451, // Kayseri koordinatları
  lng: 35.4928
};

const swiperStyles = {
  '--swiper-navigation-color': '#914F1E',
  '--swiper-navigation-size': '44px',
  '--swiper-navigation-sides-offset': '10px',
  '--swiper-navigation-bg': '#F7DCB9',
  '--swiper-navigation-border-radius': '50%',
  '--swiper-navigation-padding': '10px',
} as React.CSSProperties;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (swiperRef.current) {
        if (e.key === 'ArrowLeft') {
          swiperRef.current.slidePrev();
        } else if (e.key === 'ArrowRight') {
          swiperRef.current.slideNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'yunuskaganaydin@gmail.com'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            style={{ ...swiperStyles, height: 600, paddingBottom: 40 }}
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
                <div className="relative w-full h-[600px]">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover rounded-lg"
                    style={{ filter: "brightness(0.8)" }}
                    loading="eager"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-16 bg-gradient-to-r from-black/70 to-transparent">
                    <h2 className="text-4xl font-bold text-white mb-4">{f.title}</h2>
                    <p className="text-xl text-white mb-8 max-w-xl leading-relaxed">{f.desc}</p>
                    <Link href={f.href} className="px-8 py-3 bg-white text-[#914F1E] rounded-md hover:bg-[#DEAC80] hover:text-white transition-all duration-300 font-semibold">Detaylı Bilgi</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Alt başlıklar */}
          <div className="flex justify-center gap-4 mt-8">
            {faaliyetler.map((f, idx) => (
              <div
                key={f.title}
                className={`flex flex-col items-center px-6 py-3 rounded-md cursor-pointer transition-all duration-300
                  ${activeIndex === idx
                    ? "bg-[#914F1E] text-white shadow-lg scale-105 font-bold"
                    : "bg-white text-[#914F1E] hover:bg-[#DEAC80] hover:text-white border border-[#914F1E]"}
                `}
                onClick={() => {
                  swiperRef.current?.slideTo(idx);
                }}
              >
                <span className="text-base font-semibold">{idx + 1}</span>
                <span className="text-sm text-center mt-1">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* İletişim Formu */}
      <div className="w-full max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-[#914F1E] mb-8 text-center">İletişim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#914F1E] focus:border-[#914F1E]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#914F1E] focus:border-[#914F1E]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#914F1E] focus:border-[#914F1E]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#914F1E] focus:border-[#914F1E]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#914F1E] text-white rounded-md hover:bg-[#DEAC80] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Mesajınız başarıyla gönderildi.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
              )}
            </form>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                mapTypeId="roadmap"
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}
