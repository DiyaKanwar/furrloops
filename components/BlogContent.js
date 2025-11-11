function BlogContent() {
  try {
    const posts = [
      { title: '5 Crochet Techniques Every Pet Owner Should Know', date: 'Nov 8, 2025', category: 'DIY' },
      { title: 'Sustainable Pet Fashion: Why Handmade Matters', date: 'Nov 5, 2025', category: 'Sustainability' },
      { title: 'Styling Your Pet for Winter', date: 'Nov 1, 2025', category: 'Fashion' },
      { title: 'Behind the Loops: Our Making Process', date: 'Oct 28, 2025', category: 'Behind the Scenes' }
    ];

    return (
      <section className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[var(--charcoal-brown)] mb-4">Our Blog</h1>
          <p className="text-lg text-[var(--midnight-teal)] mb-12">
            Stories, tips, and inspiration from the world of handcrafted pet fashion
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-[var(--soft-blush)] h-48 flex items-center justify-center">
                  <div className="icon-file-text text-5xl text-[var(--terracotta)]"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[var(--moss-green)] font-medium">{post.category}</span>
                  <h3 className="text-xl font-semibold text-[var(--charcoal-brown)] mt-2 mb-3">{post.title}</h3>
                  <p className="text-sm text-[var(--midnight-teal)] opacity-70 mb-4">{post.date}</p>
                  <button className="text-[var(--terracotta)] font-medium hover:text-[var(--golden-wheat)] transition-all">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BlogContent error:', error);
    return null;
  }
}