function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const currentPath = window.location.pathname;

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
    };

    return (
      <header className="bg-[var(--ivory-white)] shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="index.html" className="flex items-center">
              <div className="text-3xl font-bold text-[var(--terracotta)]" style={{fontFamily: "'Playfair Display', serif"}}>
                FurrLoops
              </div>
            </a>
            
            <nav className="hidden md:flex space-x-8">
              <a href="index.html" className="text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth">Home</a>
              <a href="shop.html" className="text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth">Shop</a>
              <a href="gallery.html" className="text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth">Gallery</a>
              <a href="about.html" className="text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth">About</a>
              <a href="blog.html" className="text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth">Blog</a>
              <a href="contact.html" className="text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth">Contact</a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[var(--charcoal-brown)]">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a href="index.html" className="block text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth py-2">Home</a>
              <a href="shop.html" className="block text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth py-2">Shop</a>
              <a href="gallery.html" className="block text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth py-2">Gallery</a>
              <a href="about.html" className="block text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth py-2">About</a>
              <a href="blog.html" className="block text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth py-2">Blog</a>
              <a href="contact.html" className="block text-[var(--charcoal-brown)] hover:text-[var(--terracotta)] transition-smooth py-2">Contact</a>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}