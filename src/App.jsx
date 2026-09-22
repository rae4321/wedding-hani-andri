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
  const scrollIntervalRef = useRef(null);
  const resumeTimerRef = useRef(null);

  // Mengambil nama tamu secara dinamis dari URL (?to=Nama+Tamu)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setGuestName(to);
  }, []);

  // Fungsi untuk menjalankan auto-scroll
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) return; // Jangan buat interval ganda

    scrollIntervalRef.current = setInterval(() => {
      // Cek apakah sudah berada di bagian paling bawah halaman
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        stopAutoScroll();
        return;
      }

      window.scrollBy({
        top: 1,
        behavior: 'smooth'
      });
    }, 25); // Kecepatan scroll (semakin kecil semakin cepat)
  };

  // Fungsi untuk menghentikan auto-scroll sementara
  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  // Listener untuk mendeteksi sentuhan/scroll manual dari user
  useEffect(() => {
    if (!isOpened) return;

    const handleUserTouchOrScroll = () => {
      // 1. Matikan auto scroll seketika saat disentuh/digerakkan user
      stopAutoScroll();

      // 2. Bersihkan timer resume sebelumnya (jika ada)
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }

      // 3. Set timer baru: jika user berhenti menyentuh/scroll selama 3 detik, 
      // maka auto-scroll akan berjalan kembali secara otomatis.
      resumeTimerRef.current = setTimeout(() => {
        // Pastikan belum sampai di bawah halaman sebelum menyalakannya lagi
        if (window.innerHeight + window.scrollY < document.body.offsetHeight - 5) {
          startAutoScroll();
        }
      }, 3000); // Jeda 3 detik setelah user selesai menyentuh layar
    };

    // Daftarkan event listener untuk interaksi mouse, sentuhan HP, dan scroll
    window.addEventListener('wheel', handleUserTouchOrScroll, { passive: true });
    window.addEventListener('touchstart', handleUserTouchOrScroll, { passive: true });
    window.addEventListener('touchmove', handleUserTouchOrScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserTouchOrScroll);
      window.removeEventListener('touchstart', handleUserTouchOrScroll);
      window.removeEventListener('touchmove', handleUserTouchOrScroll);
      stopAutoScroll();
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isOpened]);

  // Fungsi saat tombol "Buka Undangan" diklik
  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    
    // Putar musik (Bypass Autoplay Browser)
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }

    // Mulai auto-scroll setelah cover terbuka dan DOM siap
    setTimeout(() => {
      startAutoScroll();
    }, 400);
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
      
      {/* Aset Musik */}
      <audio 
        ref={audioRef} 
        src="/DAYASMARA - WISNU JAYA Official Lirik Video.mp3" 
        loop 
        preload="auto" 
      />

      {/* Cover Undangan */}
      <AnimatePresence>
        {!isOpened && (
          <Cover guestName={guestName} onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Konten Utama Undangan */}
      {isOpened && (
        <main id="main-content" className="w-full min-h-screen pb-24 animate-fade-in">

          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Title />
          </div>
          
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

          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Gallery />
          </div>

          <div className="w-full max-w-md mx-auto bg-white shadow-xl">
            <Footer />
          </div>

          {/* Floating Music Controller (Hanya untuk Musik, Tombol Scroll Dihapus) */}
          <button
            onClick={toggleMusic}
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-stone-200 transition-all active:scale-95 text-xl cursor-pointer ${
              isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''
            }`}
            title={isPlaying ? "Matikan Musik" : "Putar Musik"}
          >
            {isPlaying ? <i className="ri-disc-line"></i> : <i className="ri-volume-mute-line"></i>}
          </button>

        </main>
      )}
    </div>
  );
}