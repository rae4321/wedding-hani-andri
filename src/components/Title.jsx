export default function TitleSection() {
  return (
    <section 
      id="title-section" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#3b342d] opacity-90 px-8 overflow-hidden select-none bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/public/jawa3.png')` // Link gambar bertema etnik/batik/jawa pilihan lo
      }}
    >
      
      {/* ================= OVERLAY GELAP (Agar Teks Jelas) ================= */}
      <div className="absolute inset-0 bg-gradient-to from-[#2A2015]/95 via-[#2A2015]/90 to-[#2A2015]/95 z-0"></div>


      {/* ================= KONTEN UTAMA JUDUL ================= */}
      <div className="flex flex-col items-center justify-center text-center space-y-7 max-w-sm w-full z-10">
        
        {/* Teks Atas */}
        <span className="text-[10px] md:text-xs text-stone-100 font-sans font-semibold tracking-[0.4em] uppercase opacity-80">
          The Wedding of
        </span>

        {/* Blok Nama Pengantin */}
        <div className="flex flex-col items-center space-y-1 py-2 w-full">
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-[0.18em] text-[#D4AF37] uppercase drop-shadow-md">
            Andri
          </h1>
          
          <span className="font-['Great_Vibes'] text-4xl text-[#dac8b1] my-2 italic block">
            —  &  —
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-[0.18em] text-[#D4AF37] uppercase drop-shadow-md">
            Hani
          </h1>
        </div>

        {/* Tanggal Pernikahan */}
        <p className="font-sans text-xs md:text-sm font-medium tracking-[0.3em] text-stone-300 uppercase">
          25 . 08 . 2023
        </p>

      </div>

    </section>
  );
}