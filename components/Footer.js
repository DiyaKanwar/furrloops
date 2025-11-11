function Footer() {
  try {
    return (
      <footer className="bg-[var(--charcoal-brown)] text-white py-12 relative overflow-hidden" data-name="footer" data-file="components/Footer.js">
        <img 
          src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/e35d5e2d-4fe2-4885-a012-710e579853c0.png" 
          alt="Logo Watermark" 
          className="absolute top-8 right-8 h-32 logo-watermark"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-[var(--terracotta)] mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
                FurrLoops
              </h3>
              <p className="text-sm opacity-80 mb-4">Cozy looks, Tiny loops, Endless love since forever.</p>
              <p className="text-xs opacity-60">Made in India, Looped for the World</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="shop.html" className="opacity-80 hover:opacity-100 transition-smooth">Shop</a></li>
                <li><a href="gallery.html" className="opacity-80 hover:opacity-100 transition-smooth">Gallery</a></li>
                <li><a href="about.html" className="opacity-80 hover:opacity-100 transition-smooth">About Us</a></li>
                <li><a href="blog.html" className="opacity-80 hover:opacity-100 transition-smooth">Blog</a></li>
                <li><a href="contact.html" className="opacity-80 hover:opacity-100 transition-smooth">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <div className="icon-mail text-base text-[var(--terracotta)]"></div>
                  <a href="mailto:hello@furrloops.com" className="opacity-80 hover:opacity-100 transition-smooth">hello@furrloops.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-map-pin text-base text-[var(--terracotta)]"></div>
                  <span className="opacity-80">Gurugram, India</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <a href="https://instagram.com/furrloops" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[var(--terracotta)] rounded-full flex items-center justify-center hover:bg-[var(--golden-wheat)] transition-smooth">
                  <div className="icon-instagram text-lg text-white"></div>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[var(--moss-green)] rounded-full flex items-center justify-center hover:bg-[var(--golden-wheat)] transition-smooth">
                  <div className="icon-message-circle text-lg text-white"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--midnight-teal)] rounded-full flex items-center justify-center hover:bg-[var(--golden-wheat)] transition-smooth">
                  <div className="icon-shopping-bag text-lg text-white"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2025 FurrLoops. All rights reserved. Handcrafted with love.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}