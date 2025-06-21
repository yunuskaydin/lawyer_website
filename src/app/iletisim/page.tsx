"use client";
import { useState } from "react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-[#7a5c2e] mb-8">İletişim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#7a5c2e] mb-4">İletişim Bilgileri</h2>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Adres: Sahabiye mahallesi Ahmet Paşa Caddesi Uğur Plaza no:28 İç Kapı No:73, 38030 Kocasinan/Kayseri
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Telefon: +90 (506) 060 91 79
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                E-posta: info@avukatbaharaydin.com
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#7a5c2e] mb-4">Çalışma Saatleri</h2>
            <div className="space-y-2 text-gray-700">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 14:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#7a5c2e] mb-4">İletişim Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7a5c2e] focus:border-[#7a5c2e]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7a5c2e] focus:border-[#7a5c2e]"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7a5c2e] focus:border-[#7a5c2e]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7a5c2e] focus:border-[#7a5c2e]"
                required
              >
                <option value="">Seçiniz</option>
                <option value="bosanma">Boşanma ve Aile Hukuku</option>
                <option value="miras">Miras Hukuku</option>
                <option value="ticaret">Ticaret Hukuku</option>
                <option value="ceza">Ceza Hukuku</option>
                <option value="idari">İdari, Vergi ve Gümrük Hukuku</option>
                <option value="bilisim">Kişisel Verilerin Korunması ve Bilişim Hukuku</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7a5c2e] focus:border-[#7a5c2e]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#7a5c2e] text-white rounded-md hover:bg-[#a07d4a] transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 