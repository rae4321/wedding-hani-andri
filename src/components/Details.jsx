import { useState, useEffect } from 'react';

export default function Details() {
  // Tentukan tanggal pernikahan (Format: YYYY-MM-DDTHH:mm:ss)
  const TARGET_DATE = "2026-10-13T09:00:00";

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      let newTimeLeft = { hari: 0, jam: 0, menit: 0, detik: 0 };

      if (difference > 0) {
        newTimeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    // Set waktu awal saat komponen di-render
    setTimeLeft(calculateTimeLeft());

    // Update waktu setiap 1 detik (1000 ms)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Bersihkan interval saat komponen tidak lagi di-render (unmount)
    return () => clearInterval(timer);
  }, [TARGET_DATE]);

  return (
    <section 
      className="relative py-16 px-6 text-center space-y-12 bg-cover bg-center bg-no-repeat border-y border-stone-200/60 overflow-hidden"
      style={{ 
        backgroundImage: "url('/bg-batik.jpeg')",
        backgroundSize: '100% 100%', // Mengunci lebar background sesuai lebar container HP
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}
    >

      <div className="space-y-4 relative z-10">
        <h3 className="font-serif text-3xl text-stone-800 italic drop-shadow-sm">Save The Date</h3>

        {/* Bagian Komponen Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div 
              key={label} 
              className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm border border-stone-300/70 rounded-2xl shadow-sm transition-transform hover:scale-105"
            >
              {/* PadStart digunakan agar angka satuan tetap tampil dua digit (misal: 09) */}
              <span className="text-2xl font-bold text-stone-800 font-mono">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 mt-1 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bagian Waktu & Tanggal Acara */}
        <h2 className="font-serif text-2xl text-stone-800 pt-2">Akad Nikah/Resepsi</h2>
        <span className="text-xs tracking-[0.2em] text-stone-600 uppercase font-semibold">
          Selasa, 13 Oktober 2026
        </span>
        <p className="text-sm text-stone-700 max-w-xs mx-auto leading-relaxed">
          Pukul 09:00 WIB - Selesai <br />
          <strong>Kediaman Mempelai Wanita</strong> <br />
          Gg. Melati, RT. 01/RW 03, Purbalingga wetan 
        </p>
      </div>

      {/* Tombol Interaktif Google Maps */}
      <div className="pt-2 relative z-10">
        <a 
          href="https://maps.app.goo.gl/wVJuzh7cTMeJbvuQA"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-xl text-xs font-semibold tracking-wide shadow-md hover:bg-stone-900 active:scale-95 transition-all"
        >
          <i className="ri-map-pin-line text-sm"></i>
          Lihat Lokasi
        </a>
      </div>

    </section>
  );
}