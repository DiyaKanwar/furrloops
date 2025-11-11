function OffersSection() {
  try {
    const offers = [
      {
        icon: 'tag',
        title: 'Flat 50% Off',
        desc: 'All crochet accessories for cats, dogs, and birds',
        color: 'var(--terracotta)'
      },
      {
        icon: 'gift',
        title: 'Buy 2, Get 1 Free',
        desc: 'On selected pet accessories',
        color: 'var(--moss-green)'
      },
      {
        icon: 'key',
        title: 'Free Crochet Keychain',
        desc: 'On orders above ₹799 / $15',
        color: 'var(--golden-wheat)'
      },
      {
        icon: 'truck',
        title: 'Free Shipping',
        desc: 'On all domestic orders in India',
        color: 'var(--midnight-teal)'
      }
    ];

    return (
      <section className="py-16 bg-gradient-to-br from-[var(--soft-blush)] to-[var(--ivory-white)]" data-name="offers-section" data-file="components/OffersSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--charcoal-brown)] mb-4">Cozy Sale Offers</h2>
            <p className="text-lg text-[var(--midnight-teal)]">Warm hearts deserve cooler prices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-smooth text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: `${offer.color}15`}}>
                  <div className={`icon-${offer.icon} text-2xl`} style={{color: offer.color}}></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--charcoal-brown)] mb-2">{offer.title}</h3>
                <p className="text-sm text-[var(--midnight-teal)] opacity-70">{offer.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[var(--moss-green)] to-[var(--midnight-teal)] rounded-2xl p-8 text-white text-center">
            <div className="icon-instagram text-4xl mb-3 mx-auto"></div>
            <h3 className="text-2xl font-bold mb-3">Instagram Exclusive</h3>
            <p className="text-lg mb-2">Tag us in your pet's FurrLoops look and get 10% off on your next order!</p>
            <p className="text-sm opacity-90">Use #FurrLoopsCozy to share your style</p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('OffersSection component error:', error);
    return null;
  }
}