import { useState, useEffect } from 'react';

export default function Details() {
  // Tentukan tanggal pernikahan (Format: YYYY-MM-DDTHH:mm:ss)
  const TARGET_DATE = "2026-10-25T09:00:00";

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
    <section className="py-16 px-6 text-center space-y-12 bg-stone-50 border-y border-stone-100">

      <div className="space-y-4">
        <h3 className="font-serif text-3xl text-stone-700 italic">Save The Date</h3>

      {/* Bagian Komponen Countdown Timer */}
      <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div 
            key={label} 
            className="flex flex-col items-center p-3 bg-white border border-stone-200/60 rounded-2xl shadow-sm transition-transform hover:scale-105"
          >
            {/* PadStart digunakan agar angka satuan tetap tampil dua digit (misal: 09) */}
            <span className="text-2xl font-bold text-stone-700 font-mono">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400 mt-1 font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>

            {/* Bagian Waktu & Tanggal Acara */}
        <h2 className="font-serif text-2xl text-stone-700">Akad Nikah/Resepsi</h2>
        <span className="text-xs tracking-[0.2em] text-stone-500 uppercase font-medium">
          Jumat, 25 Oktober 2026
        </span>
        <p className="text-sm text-stone-500 max-w-xs mx-auto">
          Pukul 09:00 WIB - Selesai <br />
          <strong>Gedung Pernikahan Indah</strong> <br />
          Jl. Kenangan Manis No. 12, Jakarta
        </p>
      </div>

      {/* Tombol Interaktif Google Maps */}
      <div className="pt-2">
        <a 
          href="https://maps.google.com" // Ganti dengan link share maps lokasi asli nanti
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-700 border border-stone-300 text-white rounded-xl text-xs font-semibold tracking-wide shadow-sm hover:bg-stone-800 transition-colors"
        >
          Google Maps
        </a>
      </div>

    </section>
  );
}