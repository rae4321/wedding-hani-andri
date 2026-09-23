{/*import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  // Daftar menu navigasi beserta ID targetnya
  const navItems = [
    { id: 'hero', label: 'Home', icon: 'ri-home-4-line' },
    { id: 'details', label: 'Acara', icon: 'ri-calendar-event-line' },
    { id: 'guestbook', label: 'RSVP', icon: 'ri-message-3-line' },
    { id: 'gift', label: 'Hadiah', icon: 'ri-gift-line' },
    { id: 'gallery', label: 'Galeri', icon: 'ri-image-line' },
  ];

  // Fungsi untuk scroll halus ke section yang dituju
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Otomatis tandai menu aktif berdasarkan posisi scroll layar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-xs bg-white/80 backdrop-blur-md border border-stone-200/80 rounded-full shadow-lg px-4 py-2 transition-all duration-300">
      <ul className="flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-stone-800 text-white shadow-md scale-110'
                    : 'text-stone-500 hover:text-stone-800 active:scale-95'
                }`}
                title={item.label}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="sr-only">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}*/}