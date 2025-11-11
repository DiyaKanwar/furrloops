function AboutContent() {
  try {
    const values = [
      { icon: 'heart', title: 'Handcrafted Love', desc: 'Every piece made with care' },
      { icon: 'leaf', title: 'Sustainable', desc: 'Eco-friendly materials' },
      { icon: 'shield', title: 'Quality First', desc: 'Premium soft yarn' },
      { icon: 'globe', title: 'Global Reach', desc: 'Made in India for the world' }
    ];

    return (
      <section className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[var(--charcoal-brown)] mb-6">Our Story</h1>
            <p className="text-xl text-[var(--midnight-teal)] max-w-3xl mx-auto">
              FurrLoops began with a simple love for pets and passion for handcrafted artistry. 
              Based in Gurugram, India, every loop represents comfort, each stitch tells a story of dedication.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--soft-blush)] to-white rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-[var(--charcoal-brown)] text-center mb-12">Meet the Makers</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--terracotta)] to-[var(--golden-wheat)] rounded-full flex items-center justify-center">
                    <div className="icon-palette text-2xl text-white"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--charcoal-brown)]">Deepanjalee</h3>
                    <p className="text-sm text-[var(--midnight-teal)]">Founder & Creative Director</p>
                  </div>
                </div>
                <p className="text-[var(--midnight-teal)] mb-4">
                  Born in 2004, Deepanjalee is an Applied Artist based in Gurugram, Haryana, India. Every FurrLoops design flows from her creative vision and dedication to handmade artistry.
                </p>
                <div className="bg-[var(--soft-blush)] rounded-lg p-6 italic text-[var(--charcoal-brown)]">
                  <div className="icon-quote text-2xl text-[var(--terracotta)] mb-3"></div>
                  <p className="leading-relaxed">
                    "Every stitch begins with a thought. From the concept and design to packaging and presentation — all of it passes through my hands before it reaches yours."
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--moss-green)] to-[var(--midnight-teal)] rounded-full flex items-center justify-center">
                    <div className="icon-heart-handshake text-2xl text-white"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--charcoal-brown)]">Ms. Rajkumari Tanwer</h3>
                    <p className="text-sm text-[var(--midnight-teal)]">Lead Artisan</p>
                  </div>
                </div>
                <p className="text-[var(--midnight-teal)] mb-4">
                  With over 40 years of traditional crochet mastery, Ms. Rajkumari Tanwer is the heart and soul behind every handmade FurrLoops piece.
                </p>
                <div className="bg-[var(--soft-blush)] rounded-lg p-6 italic text-[var(--charcoal-brown)]">
                  <div className="icon-quote text-2xl text-[var(--moss-green)] mb-3"></div>
                  <p className="leading-relaxed">
                    "Each FurrLoops piece is handcrafted by our lead artisan, who brings decades of traditional crochet skill and love into every loop and knot."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--terracotta)] to-[var(--golden-wheat)] rounded-xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Behind the Loops</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                At FurrLoops, every accessory is born from patience, imagination, and the rhythm of real hands weaving love into yarn. We believe handmade things carry energy — the kind that can't be mass-produced.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/8e89a6cc-c45e-4003-b1bd-537d784ebe96.jpeg" 
                alt="Crafting process with yarn and tools" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[var(--charcoal-brown)]">Made in India, Looped for the World</h2>
              <p className="text-[var(--midnight-teal)]">
                We believe pets deserve comfort and style. Our handcrafted crochet accessories blend 
                traditional craftsmanship with modern design, creating unique pieces that celebrate 
                the bond between pets and their humans.
              </p>
              <div className="flex items-center space-x-3 text-[var(--terracotta)]">
                <div className="icon-map-pin text-xl"></div>
                <span className="font-semibold">Based in Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-smooth">
                <div className="w-12 h-12 bg-[var(--soft-blush)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${value.icon} text-xl text-[var(--terracotta)]`}></div>
                </div>
                <h3 className="font-semibold text-[var(--charcoal-brown)] mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--midnight-teal)] opacity-70">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[var(--moss-green)] to-[var(--midnight-teal)] rounded-2xl p-12 text-white relative overflow-hidden">
            <img 
              src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/e35d5e2d-4fe2-4885-a012-710e579853c0.png" 
              alt="Logo Watermark" 
              className="absolute top-6 right-6 h-20 logo-watermark"
            />
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="icon-leaf text-4xl"></div>
                <h2 className="text-4xl font-bold">Our Packaging Promise</h2>
              </div>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Sustainability isn't just a value — it's woven into every stitch and every package
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/fc1d8036-66f2-43ff-a3e5-aa91a66ae8b6.png" 
                  alt="Eco-friendly packaging box" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/67fdcb8c-bbca-4a43-bcf2-dee766050962.png" 
                  alt="Sustainable kraft paper wrapping" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/21c58bdc-dfad-4495-8593-39b513a5e92e.png" 
                  alt="Natural presentation" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <p className="text-lg leading-relaxed mb-4">
                We use <strong>100% eco-friendly, biodegradable packaging materials</strong> including recyclable kraft paper, natural jute ties, and compostable labels.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Even our shipping wraps are dyed with <strong>non-toxic, plant-based inks</strong> to ensure we remain sustainable at every step.
              </p>
              <p className="text-lg leading-relaxed">
                Every FurrLoops package is designed to be as <strong>sustainable and cruelty-free</strong> as the handcrafted love inside it. 🌿
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutContent error:', error);
    return null;
  }
}