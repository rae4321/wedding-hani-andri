export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen py-16 px-6 flex flex-col items-center justify-center text-center space-y-12 bg-center bg-repeat-y border-y border-stone-200/60 overflow-hidden select-none"
      style={{ 
        backgroundImage: `url('/bg-batik.jpeg')`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        // Mengunci lebar background sesuai lebar layar HP, sehingga ukiran batik tidak membesar
      }}
    >
      
      {/* ================= CARD CONTAINER 1 (Ar-Rum & Foto Utama) ================= */}
      <div className="w-full max-w-sm mx-auto mb-8 bg-[#fdfbf7]/90 backdrop-blur-sm rounded-[36px] shadow-lg overflow-hidden border border-stone-200/60 pb-10 z-10">
        
        {/* Elemen 1: Foto di Paling Atas */}
        <div className="w-full aspect-4/5 bg-stone-100 overflow-hidden rounded-t-[36px] rounded-b-2xl">
          <img 
            src="/cover.jpeg" 
            alt="Prewedding" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Elemen 2: Inisial Nama Besar (A & H) */}
        <div className="my-8 text-center">
          <h3 className="font-serif text-4xl text-amber-900/80 tracking-[0.2em] pl-4">
            H <span className="text-xl font-sans font-light text-stone-400">&</span> A
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

      {/* ================= CARD CONTAINER 2 (Mempelai & Orang Tua) ================= */}
      <div className="w-full max-w-sm mx-auto bg-[#fdfbf7]/90 backdrop-blur-sm rounded-[36px] shadow-lg overflow-hidden border border-stone-200/60 p-6 md:p-8 z-10">

        <div className="my-6 text-center">
          <h3 className="font-serif text-2xl text-stone-800 font-medium italic">We Are Getting Married</h3>
          <br />
          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami:
          </p>
        </div>

        {/* ================= DETAIL NAMA LENGKAP PENGANTIN & ORANG TUA ================= */}
        <div className="space-y-6 max-w-sm mx-auto w-full text-center my-8">
          
          {/* Pengantin Pria */}
          <div className="relative w-56 h-72 mx-auto rounded-t-full overflow-hidden border-4 border-stone-200/80 shadow-md bg-stone-100 group">
            <img 
              src="/pria.jpeg" 
              alt="Andri Yulianto" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-stone-800 font-medium">Andri Yulianto</h3>
            <p className="text-xs text-stone-500 font-light">Putra Pertama Bapak Hermantoro & Ibu Taisah</p>
          </div>

          <span className="font-serif text-xl text-stone-400 block italic my-2">&</span>

          {/* Pengantin Wanita */}
          <div className="relative w-56 h-72 mx-auto rounded-t-full overflow-hidden border-4 border-stone-200/80 shadow-md bg-stone-100 group">
            <img 
              src="/wanita.jpeg" 
              alt="Nur Khanifah" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-stone-800 font-medium">Nur Khanifah</h3>
            <p className="text-xs text-stone-500 font-light">Putri Keempat Bapak Daryoko & Ibu Sugiarti</p>
          </div>
        </div>

        {/* ================= DEKORASI PENUTUP SEKSI ================= */}
        <div className="flex items-center justify-center gap-3 w-full my-4">
          <div className="w-12 h-px bg-stone-400/40"></div>
          <span className="text-stone-400/60 text-[10px] tracking-widest">❖</span>
          <div className="w-12 h-px bg-stone-400/40"></div>
        </div>

      </div>

    </section>
  );
}