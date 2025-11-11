function FeaturedProducts() {
  try {
    const categories = [
      { name: 'For Cats', icon: 'cat', color: 'var(--terracotta)' },
      { name: 'For Dogs', icon: 'dog', color: 'var(--moss-green)' },
      { name: 'For Birds', icon: 'bird', color: 'var(--midnight-teal)' },
      { name: 'Seasonal Loops', icon: 'sparkles', color: 'var(--golden-wheat)' }
    ];

    return (
      <section className="py-20 bg-[var(--ivory-white)]" data-name="featured-products" data-file="components/FeaturedProducts.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--charcoal-brown)] mb-4">Shop by Category</h2>
            <p className="text-lg text-[var(--midnight-teal)]">Handcrafted with love for every pet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <a key={index} href="shop.html" className="group cursor-pointer">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-smooth">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--soft-blush)]">
                    <div className={`icon-${category.icon} text-2xl`} style={{color: category.color}}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--charcoal-brown)] mb-2 group-hover:text-[var(--terracotta)] transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[var(--midnight-teal)] opacity-70">Explore collection</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="shop.html" className="inline-block bg-[var(--moss-green)] text-white px-8 py-3 rounded-lg hover:bg-[var(--midnight-teal)] transition-smooth font-medium">
              View All Products
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FeaturedProducts component error:', error);
    return null;
  }
}