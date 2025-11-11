function BrandStory() {
  try {
    return (
      <section className="py-20 bg-gradient-to-br from-[var(--soft-blush)] to-[var(--ivory-white)]" data-name="brand-story" data-file="components/BrandStory.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/c51feb06-d891-4efd-b514-96135d316150.jpeg" 
                alt="Handcrafted crochet yarn and accessories" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[var(--charcoal-brown)]">Made with Love, Loop by Loop</h2>
              <p className="text-lg text-[var(--midnight-teal)]">
                FurrLoops is more than just pet accessories — it's a celebration of handcrafted artistry, 
                comfort, and the bond between pets and their humans.
              </p>
              <p className="text-[var(--charcoal-brown)] opacity-80">
                Each piece is lovingly crafted by hand using soft, premium yarn. We believe in sustainable 
                fashion, ethical practices, and creating products that bring warmth to every pet's life.
              </p>
              <div className="flex items-center space-x-3 text-[var(--terracotta)]">
                <div className="icon-map-pin text-xl"></div>
                <span className="font-semibold">Made in India, Looped for the World</span>
              </div>
              <a href="about.html" className="inline-block border-2 border-[var(--terracotta)] text-[var(--terracotta)] px-8 py-3 rounded-lg hover:bg-[var(--terracotta)] hover:text-white transition-smooth font-medium">
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-r from-[var(--moss-green)] to-[var(--midnight-teal)] rounded-2xl p-12 text-white relative overflow-hidden">
            <img 
              src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/e35d5e2d-4fe2-4885-a012-710e579853c0.png" 
              alt="Logo Watermark" 
              className="absolute top-4 right-4 h-16 logo-watermark"
            />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="icon-leaf text-3xl"></div>
                  <h2 className="text-3xl font-bold">Our Packaging Promise</h2>
                </div>
                <p className="text-lg mb-4 opacity-90">
                  At FurrLoops, sustainability isn't just a value — it's a commitment woven into every stitch and every package.
                </p>
                <p className="opacity-80 leading-relaxed mb-3">
                  We use 100% eco-friendly, biodegradable packaging materials including recyclable kraft paper, natural jute ties, and compostable labels. Even our shipping wraps are dyed with non-toxic, plant-based inks.
                </p>
                <p className="opacity-80 leading-relaxed">
                  Every FurrLoops package is designed to be as sustainable and cruelty-free as the handcrafted love inside it.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/fc1d8036-66f2-43ff-a3e5-aa91a66ae8b6.png" 
                  alt="Eco-friendly packaging" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/67fdcb8c-bbca-4a43-bcf2-dee766050962.png" 
                  alt="Sustainable kraft paper" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BrandStory component error:', error);
    return null;
  }
}