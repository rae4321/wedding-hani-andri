import { useState } from 'react';

export default function Gift() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Data rekening dan e-wallet mempelai
  // Silakan ganti nama, bank, dan nomor rekening sesuai kebutuhan Anda
  const giftAccounts = [
    {
      id: 1,
      tipe: 'Bank Mandiri',
      nomor: '157000xxxxxx',
      atasNama: 'Nama Mempelai Pria',
      logo: '💳'
    },
    {
      id: 2,
      tipe: 'Bank BCA',
      nomor: '8690xxxxxx',
      atasNama: 'Nama Mempelai Wanita',
      logo: '🏦'
    },
    {
      id: 3,
      tipe: 'E-Wallet DANA / OVO',
      nomor: '081234567890',
      atasNama: 'Nama Mempelai',
      logo: '📱'
    }
  ];

  // Fungsi menyalin teks nomor rekening ke clipboard secara otomatis
  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    
    // Reset tulisan "Tersalin" setelah 2 detik
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="py-20 px-6 bg-white text-center space-y-12">
      
      {/* Header Section */}
      <div className="text-center space-y-3 max-w-sm mx-auto">
        <h3 className="font-serif text-3xl text-stone-800 font-medium">
          Tanda Kasih
        </h3>
        <span className="text-xs tracking-[0.25em] text-stone-400 uppercase block font-semibold">
          WEDDING GIFT
        </span>
        <div className="w-12 h-1px bg-stone-300 mx-auto mt-2"></div>
        <p className="text-xs text-stone-500 leading-relaxed font-light px-4">
          Bagi bapak/ibu/saudara yang ingin mengirimkan hadiah atau tanda kasih secara digital, dapat melalui rekening atau dompet digital di bawah ini:
        </p>
      </div>

      {/* Grid Box Rekening-Rekening */}
      <div className="max-w-md mx-auto grid grid-cols-1 gap-6">
        {giftAccounts.map((account, index) => (
          <div 
            key={account.id} 
            className="bg-[#faf8f5] border border-stone-200/60 p-6 rounded-2xl shadow-2xs space-y-4 text-left transition-all hover:border-stone-300 hover:shadow-xs relative overflow-hidden"
          >
            {/* Baris Atas: Logo & Nama Bank */}
            <div className="flex justify-between items-center border-b border-stone-200/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{account.logo}</span>
                <span className="text-sm font-bold text-stone-700 tracking-wide uppercase">
                  {account.tipe}
                </span>
              </div>
              <span className="text-[10px] bg-stone-200/50 text-stone-500 font-semibold px-2 py-0.5 rounded-md">
                Digital Card
              </span>
            </div>

            {/* Baris Tengah: Info Nomor Rekening & Nama Pemilik */}
            <div className="space-y-1">
              <span className="text-[10px] text-stone-400 font-semibold tracking-wider block uppercase">
                Nomor Rekening / HP
              </span>
              <p className="font-mono text-xl font-bold text-stone-800 tracking-wider">
                {account.nomor}
              </p>
              <p className="text-xs text-stone-500 italic font-light mt-1">
                a.n. {account.atasNama}
              </p>
            </div>

            {/* Tombol Aksi Salin / Copy Instan */}
            <button
              onClick={() => handleCopy(account.nomor, index)}
              className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase shadow-2xs transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 ${
                copiedIndex === index 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-stone-800 hover:bg-stone-900 text-white'
              }`}
            >
              {copiedIndex === index ? (
                <>
                  <svg className="w-3.5 h-3.5 fill-current animate-bounce" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                  Tersalin!
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                  </svg>
                  Salin Rekening
                </>
              )}
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}