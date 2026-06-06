import { useState, useEffect, useRef } from 'react';

export default function MusicPlayer({ isUnlocked }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Jalankan musik otomatis ketika halaman Cover terbuka/di-unlock oleh tamu
  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay dicegah oleh browser, membutuhkan interaksi user:", err));
    }
  }, [isUnlocked]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Jika undangan belum dibuka oleh tamu, jangan tampilkan tombol kontrolnya dulu
  if (!isUnlocked) return null;

  return (
    <>
      {/* Element Audio HTML5 Bawaan */}
      <audio 
        ref={audioRef} 
        src="/wedding-song.mp3" 
        loop 
        preload="auto"
      />

      {/* Tombol Musik Melayang (Floating Button) */}
      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 bg-white/80 backdrop-blur-md border border-stone-200 text-stone-700 rounded-full shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 cursor-pointer ${
          isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''
        }`}
        title={isPlaying ? "Matikan Musik" : "Putar Musik"}
      >
        {isPlaying ? (
          /* Ikon Music Note / Sedang Berputar */
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ) : (
          /* Ikon Music Muted (Garis Coret) */
          <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        )}
      </button>
    </>
  );
}