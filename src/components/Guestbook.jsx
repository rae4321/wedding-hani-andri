import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Guestbook() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ nama: '', kehadiran: 'Hadir', ucapan: '' });
  const [loading, setLoading] = useState(false);

  // 1. Ambil data dari Supabase saat komponen pertama kali dimuat
  useEffect(() => {
    fetchComments();

    // 2. Pasang fungsi Realtime: Jika ada data baru masuk ke database, langsung update UI otomatis
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'ucapan_pernikahan' },
        (payload) => {
          setComments((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('ucapan_pernikahan')
      .select('*')
      .order('id', { ascending: false }); // Urutkan dari yang terbaru

    if (!error && data) setComments(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Fungsi Menyimpan Data ke Database Cloud
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama.trim() || !formData.ucapan.trim()) return;

    setLoading(true);
    const { error } = await supabase
      .from('ucapan_pernikahan')
      .insert([
        { nama: formData.nama, kehadiran: formData.kehadiran, ucapan: formData.ucapan }
      ]);

    setLoading(false);

    if (error) {
      alert('Gagal mengirim ucapan, coba lagi.');
      console.error(error);
    } else {
      setFormData({ nama: '', kehadiran: 'Hadir', ucapan: '' }); // Reset form
    }
  };

  return (
    <section 
      className="relative py-16 px-6 text-center space-y-12 bg-center bg-repeat-y border-y border-stone-200/60 overflow-hidden"
      style={{ 
        backgroundImage: "url('/bg-batik.jpeg')",
        backgroundSize: '100% 100%', // Mengunci lebar background sesuai lebar container HP
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center space-y-2 relative z-10">
        <h3 className="font-serif text-3xl text-stone-800 italic drop-shadow-sm">Guestbook & RSVP</h3>
      </div>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-stone-200/70 shadow-sm space-y-4 relative z-10">
        <div className="flex flex-col text-left space-y-1">
          <label className="text-xs font-semibold text-stone-700">Nama Tamu</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            required
            className="px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-stone-400"
          />
        </div>

        <div className="flex flex-col text-left space-y-1">
          <label className="text-xs font-semibold text-stone-700">Konfirmasi Kehadiran</label>
          <select
            name="kehadiran"
            value={formData.kehadiran}
            onChange={handleChange}
            className="px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-stone-400"
          >
            <option value="Hadir">Hadir</option>
            <option value="Masih Ragu">Masih Ragu</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
        </div>

        <div className="flex flex-col text-left space-y-1">
          <label className="text-xs font-semibold text-stone-700">Ucapan & Doa Restu</label>
          <textarea
            name="ucapan"
            value={formData.ucapan}
            onChange={handleChange}
            rows="3"
            placeholder="Tulis ucapan selamat Anda di sini..."
            required
            className="px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-stone-400 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-stone-800 hover:bg-stone-900 disabled:bg-stone-400 text-white rounded-xl text-xs font-semibold tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
        >
          {loading ? <i className="ri-loader-4-line animate-spin text-lg"></i> : 'Kirim Ucapan'}
        </button>
      </form>

      {/* Tabel / Daftar Ucapan Cloud */}
      <div className="max-w-sm mx-auto space-y-4 relative z-10">
        <div className="flex justify-between items-center px-1">
          <h4 className="text-xs font-bold text-stone-800">Daftar Ucapan ({comments.length})</h4>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
          {comments.map((item) => (
            <div key={item.id} className="p-4 bg-white/85 backdrop-blur-sm border border-stone-200/60 rounded-xl space-y-2 text-left shadow-xs">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h5 className="text-sm font-semibold text-stone-800">{item.nama}</h5>
                  <span className="text-[10px] text-stone-500">
                    {item.created_at ? new Date(item.created_at).toLocaleDateString('id-ID') : '-'}
                  </span>
                </div>
                <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${
                  item.kehadiran === 'Hadir' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  item.kehadiran === 'Tidak Hadir' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                  'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  {item.kehadiran}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed italic">"{item.ucapan}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}