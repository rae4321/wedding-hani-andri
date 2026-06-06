export default function TitleSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 bg-[#4e4332] overflow-hidden select-none">
      
      {/* ================= BINGKAI STATIS MINIMALIS ================= */}
      <div className="absolute inset-6 md:inset-12 pointer-events-none rounded-3xl opacity-60">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect
            width="100%"
            height="100%"
            rx="24"
            fill="none"
            stroke="#bca383"
            strokeWidth="5"
            className="opacity-40"
          />
        </svg>
      </div>

      {/* ================= KONTEN UTAMA JUDUL ================= */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-sm w-full z-10">
        
        {/* Teks Atas */}
        <span className="text-xs text-stone-400 font-sans font-semibold tracking-[0.3em] uppercase">
          The Wedding of
        </span>

        {/* Blok Nama Pengantin */}
        <div className="flex flex-col items-center space-y-2 py-4 w-full">
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-[0.15em] text-[#bca383] uppercase">
            Romeo
          </h1>
          
          <span className="font-['Great_Vibes'] text-4xl text-stone-400 my-1 italic block">
            &
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-[0.15em] text-[#bca383] uppercase">
            Juliet
          </h1>
        </div>

        {/* Garis Pembatas Dalam */}
        <div className="w-8 h-1px bg-stone-300 mx-auto my-1"></div>

        {/* Tanggal Pernikahan */}
        <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] text-stone-400 uppercase">
          25.08.2023
        </p>

      </div>

    </section>
  );
}