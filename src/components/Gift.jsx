import { listbank, listKado } from '../data'; 
import { useState } from 'react';

export default function Gift() {
  const [copiedId, setCopiedId] = useState(null);
  const [copiedKadoId, setCopiedKadoId] = useState(null);

  const handleCopy = (nomor, id) => {
    navigator.clipboard.writeText(nomor);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAlamat = (alamat, id) => {
    navigator.clipboard.writeText(alamat);
    setCopiedKadoId(id);
    setTimeout(() => setCopiedKadoId(null), 2000);
  };

  return (
    <section id="gift-section" className="w-full py-16 px-6 bg-stone-50 select-none text-center">
      
      {/* ================= HEADER JUDUL ================= */}
      <div className="space-y-2 mb-12">
        <h2 className="font-serif text-3xl text-stone-700 italic">Wedding Gift</h2>
        <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
          Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan tanda kasih, dapat melalui opsi di bawah ini:
        </p>
      </div>

      <div className="max-w-sm mx-auto space-y-10">
        
        {/* ================= SEKSI BANK / DOMPET DIGITAL ================= */}
        <div className="space-y-4">
          
          {listbank.map((bank) => (
            <div 
              key={bank.id} 
              className="p-5 bg-white border border-stone-200/60 rounded-2xl shadow-sm flex flex-col items-center space-y-3"
            >
              {bank.logo && (
                <img 
                  src={bank.logo} 
                  alt={bank.tipe} 
                  className="h-7 object-contain opacity-90"
                />
              )}

              <div className="space-y-1">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{bank.tipe}</p>
                <p className="font-mono text-lg font-bold text-stone-800 tracking-wide">{bank.nomor}</p>
                <p className="text-xs text-stone-600 font-medium">a.n. {bank.atasNama}</p>
              </div>

              {/* Tombol Salin Ber-Ikon */}
              <button
                onClick={() => handleCopy(bank.nomor, bank.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 w-full max-w-140px flex items-center justify-center space-x-1.5 cursor-pointer ${
                  copiedId === bank.id 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
                    : 'bg-stone-900 hover:bg-stone-700 text-stone-200 active:scale-95'
                }`}
              >
                {copiedId === bank.id ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* ================= SEKSI ALAMAT KADO FISIK ================= */}
        <div className="space-y-4">
          {listKado.map((kado) => (
            <div 
              key={kado.id} 
              className="p-5 bg-white border border-stone-200/60 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-3"
            >
              {kado.logo && (
                <img 
                  src={kado.logo} 
                  alt="Ikon Kado" 
                  className="h-30 object-contain opacity-90" 
                />
              )}

              <div className="space-y-1">
                <div className="flex items-center text-center justify-center border-b border-stone-100 pb-2">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wide">Alamat Kado</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-100 font-sans">
                  {kado.alamatKado}
                </p>
              </div>

              {/* Tombol Salin Alamat Ber-Ikon */}
              <button
                onClick={() => handleCopyAlamat(kado.alamatKado, kado.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 w-full flex items-center justify-center space-x-2 cursor-pointer ${
                  copiedKadoId === kado.id 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-stone-900 hover:bg-stone-700 text-stone-200 active:scale-95'
                }`}
              >
                {copiedKadoId === kado.id ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}