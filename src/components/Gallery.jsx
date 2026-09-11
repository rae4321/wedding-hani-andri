export default function Gallery() {
  // Array data foto (sementara pakai placeholder)
  const photos = [
    "/g1.jpeg",
    "/g2.jpeg",
    "/g3.jpeg",
    "/g4.jpeg"
  ];

  return (
    <section className="py-16 px-6 bg-white text-center space-y-8">
      <div className="space-y-2">
        <h3 className="font-serif text-3xl text-stone-700 italic">Our Moments</h3>
      </div>

      {/* Grid Layout Responsif ala Pinterest Mini */}
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {photos.map((url, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-3/4 shadow-sm border border-stone-100 group"
          >
            <img 
              src={url} 
              alt={`Moment ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy" // Menghemat bandwidth tamu
            />
          </div>
        ))}
      </div>
    </section>
  );
}