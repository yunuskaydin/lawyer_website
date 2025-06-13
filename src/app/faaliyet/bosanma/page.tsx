"use client";
import Image from "next/image";

export default function BosanmaPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-[#7a5c2e] mb-8">Boşanma ve Aile Hukuku</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="/images/hukukkitap.jpg"
            alt="Boşanma ve Aile Hukuku"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Boşanma ve aile hukuku alanında uzman ekibimiz, müvekkillerimize en iyi hukuki danışmanlığı sunmaktadır. 
            Boşanma sürecinin her aşamasında yanınızdayız.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7a5c2e]">Hizmet Alanlarımız</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Anlaşmalı Boşanma</li>
              <li>Çekişmeli Boşanma</li>
              <li>Nafaka Davaları</li>
              <li>Velayet Davaları</li>
              <li>Mal Paylaşımı</li>
              <li>Evlat Edinme</li>
              <li>Nafaka Artırımı</li>
            </ul>
          </div>
          
          <div className="pt-6">
            <button className="px-8 py-3 bg-[#7a5c2e] text-white rounded-md hover:bg-[#a07d4a] transition-colors">
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 