import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cover from './components/Cover';
import Hero from './components/Hero';
import Details from './components/Details';
import Guestbook from './components/Guestbook';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import Footer from './components/Footer';
import Title from './components/Title';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Mengambil nama tamu secara dinamis dari URL (?to=Nama+Tamu)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setGuestName(to);
  }, []);

  // Fungsi trigger ganda saat tombol dibuka klik (Bypass Autoplay Browser)
  // Fungsi trigger ganda saat tombol dibuka klik
  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }

    // Kasih sedikit jeda agar DOM konten utama selesai dirender oleh React, baru di-scroll
    setTimeout(() => {
      const firstSection = document.getElementById('main-content');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // jeda 100 milidetik
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Playback error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-stone-800 font-sans overflow-x-hidden">
      
      {/* Aset Musik: Pastikan file ditaruh di:
        - public/assets/wedding-song.mp3 -> pakai src="/assets/wedding-song.mp3"
        - public/wedding-song.mp3        -> pakai src="/wedding-song.mp3"
      */}
      <audio ref={audioRef} src="/wedding-song.mp3" loop preload="auto" />

      {/* AnimatePresence mendeteksi komponen Cover saat melakukan animasi keluar (exit) */}
      <AnimatePresence>
        {!isOpened && (
          <Cover guestName={guestName} onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Konten Utama Undangan (Dirender setelah tombol dibuka diklik) */}
      {isOpened && (
        <main id='main-content'className="w-full min-h-screen pb-24 animate-fade-in">

          <div className='w-full max-w-md mx-auto bg-white shadow-xl'>
            <Title />
            </div>
          
          {/* Komponen Seksi Vertikal yang Nyaman dalam Ukuran Ringkas */}
          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Hero />
            <Details />
          </div>

          <div className="w-full bg-[#faf8f5]">
            <Guestbook />
          </div>

          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Gift />
          </div>

          {/* Seksi Galeri */}
          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Gallery />
          </div>

          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Footer />
          </div>

          {/* Floating Music Controller Premium dengan Efek Putar */}
          <button
            onClick={toggleMusic}
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-stone-200 transition-all active:scale-95 text-xl cursor-pointer ${
              isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''
            }`}
            title={isPlaying ? "Matikan Musik" : "Putar Musik"}
          >
            {isPlaying ? '🎵' : '🔇'}
          </button>

        </main>
      )}
    </div>
  );
}