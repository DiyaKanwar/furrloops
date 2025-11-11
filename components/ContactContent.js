function ContactContent() {
  try {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    return (
      <section className="py-16 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[var(--charcoal-brown)] mb-4 text-center">Get in Touch</h1>
          <p className="text-lg text-[var(--midnight-teal)] mb-12 text-center">
            We'd love to hear from you! Reach out with questions or custom requests.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--charcoal-brown)] mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-[var(--muted-lavender)] focus:border-[var(--terracotta)] outline-none" 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-[var(--muted-lavender)] focus:border-[var(--terracotta)] outline-none"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 rounded-lg border border-[var(--muted-lavender)] focus:border-[var(--terracotta)] outline-none"
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                <button type="submit" className="w-full bg-[var(--terracotta)] text-white py-3 rounded-lg hover:bg-[var(--golden-wheat)] transition-all font-medium">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--charcoal-brown)] mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/furrloops" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[var(--terracotta)] rounded-full flex items-center justify-center hover:bg-[var(--golden-wheat)] transition-all">
                    <div className="icon-instagram text-xl text-white"></div>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[var(--moss-green)] rounded-full flex items-center justify-center hover:bg-[var(--golden-wheat)] transition-all">
                    <div className="icon-message-circle text-xl text-white"></div>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[var(--midnight-teal)] rounded-full flex items-center justify-center hover:bg-[var(--golden-wheat)] transition-all">
                    <div className="icon-shopping-bag text-xl text-white"></div>
                  </a>
                </div>
                <p className="text-sm text-[var(--midnight-teal)] mt-4 opacity-70">Chat with us on WhatsApp for custom orders and inquiries</p>
              </div>

              <div className="bg-[var(--soft-blush)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--charcoal-brown)] mb-3">Newsletter</h4>
                <p className="text-sm text-[var(--midnight-teal)] mb-4">Subscribe for updates on new collections and exclusive offers</p>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-lg border border-[var(--muted-lavender)] focus:border-[var(--terracotta)] outline-none mb-3" />
                <button className="w-full bg-[var(--moss-green)] text-white py-2 rounded-lg hover:bg-[var(--midnight-teal)] transition-all font-medium">
                  Subscribe
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-[var(--charcoal-brown)] mb-3">Visit Us</h4>
                <div className="space-y-3 text-sm text-[var(--midnight-teal)]">
                  <div className="flex items-start space-x-3">
                    <div className="icon-map-pin text-lg text-[var(--terracotta)] mt-0.5"></div>
                    <div>
                      <p className="font-medium">Gurugram, Haryana, India</p>
                      <p className="text-xs opacity-70">Made in India, Shipped Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="icon-mail text-lg text-[var(--terracotta)] mt-0.5"></div>
                    <a href="mailto:hello@furrloops.com" className="hover:text-[var(--terracotta)] transition-smooth">hello@furrloops.com</a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="icon-message-circle text-lg text-[var(--moss-green)] mt-0.5"></div>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--moss-green)] transition-smooth">WhatsApp Business</a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="icon-instagram text-lg text-[var(--terracotta)] mt-0.5"></div>
                    <a href="https://instagram.com/furrloops" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--terracotta)] transition-smooth">@furrloops</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactContent error:', error);
    return null;
  }
}
