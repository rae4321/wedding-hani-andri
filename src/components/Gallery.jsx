export default function Gallery() {
  // Array data foto (sementara pakai placeholder)
  const photos = [
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
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