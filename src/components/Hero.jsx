export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start px-8 py-20 bg-[#ffffff] overflow-hidden select-none">
      
      {/* ================= CARD CONTAINER (Sesuai WhatsApp Image 2026-06-06 at 23.08.59.jpeg) ================= */}
      <div className="w-full max-w-sm mx-auto mb-16 bg-[#fdfbf7] rounded-[36px] shadow-lg overflow-hidden border border-stone-200/40 pb-10 z-10">
        
        {/* Elemen 1: Foto di Paling Atas */}
        <div className="w-full aspect-4/5 bg-stone-100 overflow-hidden rounded-t-[36px] rounded-b-2xl">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" 
            alt="Prewedding" 
            className="w-lg h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
            loading="lazy"
          />
        </div>

        {/* Elemen 2: Inisial Nama Besar (R & J) */}
        <div className="my-8 text-center">
          <h3 className="font-serif text-4xl text-amber-900/70 tracking-[0.2em] pl-4">
            A <span className="text-xl font-sans font-light text-stone-400">&</span> H
          </h3>
        </div>

        {/* Elemen 3: Teks Lengkap Ayat Al-Qur'an */}
        <div className="px-8 space-y-4 text-center">
          <p className="text-xs text-stone-700 leading-relaxed font-medium italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir"
          </p>
          <p className="text-xs font-bold text-stone-800 tracking-wide">
            -(QS. Ar Rum: 21).-
          </p>
        </div>

      </div>

      <div className="w-full max-w-sm mx-auto mb-16 bg-[#fdfbf7] rounded-[36px] shadow-lg overflow-hidden border border-stone-200/40 pb-10 z-10">

      <div className="my-8 text-center">
          <h3 className="font-serif text-2xl text-stone-700 font-medium italic">We Are Getting Married</h3>
          <br />
          <p className="text-xs text-stone-500 leading-relaxed font-medium ">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami:</p>
      </div>

      {/* ================= DETAIL NAMA LENGKAP PENGANTIN & ORANG TUA ================= */}
      <div className="space-y-6 max-w-sm mx-auto w-full text-center z-10 mb-16">
        {/* Pengantin Pria */}
        {/* Bagian Bawah Grid: Foto Utama (Arch Style) */}
        <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto rounded-t-full overflow-hidden border-4 border-stone-200/80 shadow-md bg-stone-100 group">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" 
            alt="Prewedding" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif text-2xl text-stone-700 font-medium">Andri</h3>
          <p className="text-xs text-stone-400 font-light">Putra dari Bapak Fulan & Ibu Fulanah</p>
        </div>

        <span className="font-serif text-xl text-stone-400 block italic my-1">&</span>

        <br />

        {/* Pengantin Wanita */}
        {/* Bagian Bawah Grid: Foto Utama (Arch Style) */}
        <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto rounded-t-full overflow-hidden border-4 border-stone-200/80 shadow-md bg-stone-100 group">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" 
            alt="Prewedding" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif text-2xl text-stone-700 font-medium">Hani</h3>
          <p className="text-xs text-stone-400 font-light">Putri dari Bapak Fulan & Ibu Fulanah</p>
        </div>
      </div>

      {/* ================= DEKORASI PENUTUP SEKSI ================= */}
      <div className="flex items-center justify-center gap-3 w-full z-10">
        <div className="w-12 h-1px bg-stone-400/40"></div>
        <span className="text-stone-400/60 text-[10px] tracking-widest">❖</span>
        <div className="w-12 h-1px bg-stone-400/40"></div>
      </div>
      </div>

    </section>
  );
}