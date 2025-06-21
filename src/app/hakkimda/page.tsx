"use client";
import Image from "next/image";

export default function HakkimdaPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-[#7a5c2e] mb-8">Hakkımda</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="/images/hukukkitap.jpg"
            alt="Avukat Bahar Aydın"
            width={600}
            height={800}
            className="rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7a5c2e]">Eğitim</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Erciyes Üniversitesi Hukuk Fakültesi</li>
              <li>Lisans - Hukuk</li>
            </ul>
          </div>
                  
        </div>
      </div>
    </div>
  );
} 