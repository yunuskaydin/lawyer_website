"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    </div>
  );
}
