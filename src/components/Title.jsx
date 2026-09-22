import { motion } from 'framer-motion';

export default function TitleSection() {
  return (
    <section 
      id="title-section" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden select-none bg-cover bg-center bg-stone-800 mask-b-from-100%"
      style={{ 
        backgroundImage: `url('/bg-hero.png')` // Background batik jawa lo
      }}
    >

      {/* ================= KONTEN UTAMA JUDUL ================= */}
      <div className="flex flex-col items-center justify-center text-center max-w-sm w-full z-20">
        
        {/* 1. Teks Atas (Lebih Terang) */}
        <span className="text-[15px] md:text-xs text-stone-600 font-sans font-semibold tracking-[0.4em] uppercase opacity-80 mb-85">
          The Wedding of
        </span>


        {/* 3. Blok Nama Pengantin (Diubah ke Emas biar Menyala) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center space-y-1 py-2 w-full"
        >

        <h1 className="font-serif text-2xl md:text-5xl font-normal tracking-[0.18em] text-[#D4AF37] uppercase drop-shadow-md">
            Andri
          </h1>

          <span className="font-sans text-[#C5A880] text-lg md:text-xl font-bold my-2">
            &
          </span>

          <h1 className="font-serif text-2xl md:text-5xl font-normal tracking-[0.18em] text-[#D4AF37] uppercase drop-shadow-md">
            Hani
          </h1>
        </motion.div>

        {/* 4. Tanggal Pernikahan (Diubah ke Emas Muda/Krim) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-stretch-100% text-xs md:text-sm font-medium tracking-[0.3em] text-[#4b4742] uppercase mt-6 drop-shadow-md"
        >
          13 . 10 . 2026
        </motion.p>

      </div>

    </section>
  );
}