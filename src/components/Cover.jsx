export default function Cover({ guestName, onOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 text-center select-none overflow-hidden">
      
      {/* ================= BACKGROUND FOTO UTUH ================= */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200" // Ganti pakai link foto prewedding pilihan lo
          alt="Prewedding Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay Gelap agar teks warna putih/terang di atasnya kontras dan kelihatan jelas */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* ================= KONTEN ELEMEN (z-10 supaya di atas foto) ================= */}
      
      {/* Bagian Atas */}
      <div className="text-xs tracking-[0.2em] text-stone-200 uppercase mt-12 font-medium z-10 drop-shadow-md">
        The Wedding Invitation of
      </div>

      {/* Bagian Tengah (Nama Pengantin & Tamu) */}
      <div className="my-auto space-y-6 z-10 w-full max-w-sm">
        {/* Nama Pengantin dibuat putih cerah agar kontras dengan foto */}
        <h1 className="font-serif text-5xl text-white italic tracking-wide drop-shadow-lg">
          Andri & Hani
        </h1>
        
        <div className="pt-8 space-y-3">
          <p className="text-xs text-stone-200 tracking-wider drop-shadow-sm">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          {/* Card Nama Tamu */}
          <h2 className="text-xl font-semibold text-stone-800 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl inline-block border border-white/40 shadow-xl">
            {guestName}
          </h2>
        </div>
      </div>

      {/* Bagian Bawah (Tombol Kontrol) */}
      <div className="mb-12 z-10">
        <button
          onClick={onOpen}
          className="px-8 py-3.5 bg-white text-stone-900 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-100 transition-all shadow-xl active:scale-95 cursor-pointer"
        >
          Buka Undangan
        </button>
      </div>

    </div>
  );
}