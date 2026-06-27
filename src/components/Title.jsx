import { motion } from 'framer-motion';

export default function TitleSection() {
  return (
    <section 
      id="title-section" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden select-none bg-cover bg-center bg-stone-800 mask-b-from-70%"
      style={{ 
        backgroundImage: `url('/jawa3.png')` // Background batik jawa lo
      }}
    >
      
      {/* ================= OVERLAY GRADIENT GELAP PEKAT (FIXED) ================= */}
      <div className="absolute inset-0 bg-gradient opacity-90 from-black/10 via-[#231A10]/90 to-black/85 z-0"></div>

      {/* ================= KONTEN UTAMA JUDUL ================= */}
      <div className="flex flex-col items-center justify-center text-center max-w-sm w-full z-20">
        
        {/* 1. Teks Atas (Lebih Terang) */}
        <span className="text-[15px] md:text-xs text-stone-50 font-sans font-semibold tracking-[0.4em] uppercase opacity-80 mb-6">
          The Wedding of
        </span>

        <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-[0.18em] text-[#D4AF37] uppercase drop-shadow-md">
            Andri
          </h1>

        {/* 2. ANIMASI WAYANG GUNUNGAN (DI ATAS NAMA) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0] // Efek melayang naik turun yang anggun (dimulai dari 0)
          }}
          transition={{
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 1 },
            scale: { duration: 1 }
          }}
          className="w-40 md:w-48 h-auto mb-4 flex justify-center"
        >
          <img 
            src="/jawa1.png"  // Aset gunungan wayang lo
            alt="Gunungan Wayang"
            className="w-full h-auto object-contain drop-shadow-[0_4px_15px_rgba(212,175,55,0.4)]"
          />
        </motion.div>

        {/* 3. Blok Nama Pengantin (Diubah ke Emas biar Menyala) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center space-y-1 py-2 w-full"
        >
          
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-[0.18em] text-[#D4AF37] uppercase drop-shadow-md">
            Hani
          </h1>
        </motion.div>

        {/* 4. Tanggal Pernikahan (Diubah ke Emas Muda/Krim) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-xs md:text-sm font-medium tracking-[0.3em] text-[#C5A880] uppercase mt-6"
        >
          25 . 10 . 2026
        </motion.p>

      </div>

    </section>
  );
}