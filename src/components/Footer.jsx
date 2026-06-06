const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-0 pb-1 w-full h-0 select-none">
      <div className="text-center border-t border-white/10 bg-stone-700 pt-5 flex flex-col items-center gap-3">
        
        {/* Teks Copyright */}
        <p className="text-sm opacity-50 text-stone-100">
          &copy; {currentYear} <span className="font-medium">All Rights Reserved | Design by Rae Triadi</span>
        </p>
        
        {/* Ikon Link - Diberi warna putih solid agar kelihatan jelas */}
        <div className="flex items-center justify-center gap-4">
        <a 
          href="https://portfoliorey-rho.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-stone-100 hover:text-stone-500 opacity-50 transition-colors duration-300"
        >
          <i className="ri-link ri-2x"></i>
        </a>
        <a 
          href="https://www.instagram.com/kepalaadua" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-stone-100 hover:text-stone-500 opacity-50 transition-colors duration-300"
        >
          <i className="ri-instagram-line ri-2x"></i>
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;