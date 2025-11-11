function Hero() {
  try {
    return (
      <section className="relative bg-gradient-to-br from-[var(--soft-blush)] to-[var(--ivory-white)] py-20 md:py-32" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-[var(--terracotta)] to-[var(--golden-wheat)] text-white px-6 py-3 rounded-full mb-4">
                <p className="text-lg font-semibold">🎉 Half-Price Sale — All Crochet Accessories Now at 50% Off!</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--charcoal-brown)] leading-tight">
                Warm hearts.<br/>
                Cooler prices.
              </h1>
              <p className="text-xl text-[var(--midnight-teal)] font-light italic">
                For a limited time only. Cozy deals for cozy companions.
              </p>
              <p className="text-lg text-[var(--charcoal-brown)] opacity-80">
                Handcrafted crochet accessories for your beloved pets — made with love, soft yarn, and creative detail.
              </p>
              <div className="flex space-x-4">
                <a href="shop.html" className="bg-[var(--terracotta)] text-white px-8 py-3 rounded-lg hover:bg-[var(--golden-wheat)] transition-smooth font-medium">
                  Shop Now
                </a>
                <a href="about.html" className="border-2 border-[var(--moss-green)] text-[var(--moss-green)] px-8 py-3 rounded-lg hover:bg-[var(--moss-green)] hover:text-white transition-smooth font-medium">
                  Our Story
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/b0cdf777-7425-4be1-8f8d-c6cafe62e1c0.jpeg" 
                  alt="Adorable cat wearing FurrLoops crochet accessories" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/e35d5e2d-4fe2-4885-a012-710e579853c0.png" 
                  alt="FurrLoops Logo" 
                  className="h-8 logo-watermark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}