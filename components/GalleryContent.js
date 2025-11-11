function GalleryContent() {
  try {
    const galleryItems = [
      { title: 'Adorable Cat Accessories', category: 'Products', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/b0cdf777-7425-4be1-8f8d-c6cafe62e1c0.jpeg' },
      { title: 'Handcrafted Materials', category: 'Behind the Scenes', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/acef3bec-26ef-40eb-9f80-8dbc53587e3c.png' },
      { title: 'Cozy Cat Comfort', category: 'Products', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/3a7c5b47-bd46-44f0-b696-7db04ed26e42.png' },
      { title: 'Yarn & Thread Collection', category: 'Materials', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/c51feb06-d891-4efd-b514-96135d316150.jpeg' },
      { title: 'Dog Fashion Accessories', category: 'Products', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/9feb69e9-9be7-4791-b884-05f6b95abeef.png' },
      { title: 'Crafting Details', category: 'Behind the Scenes', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/8e89a6cc-c45e-4003-b1bd-537d784ebe96.jpeg' },
      { title: 'Bird Nest Comfort', category: 'Products', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/1f246141-6798-41b4-bc2a-9c4a89e5985e.png' },
      { title: 'Handmade with Love', category: 'Behind the Scenes', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/e1fdaacd-a051-4406-961f-0a7314c4e2a8.jpeg' },
      { title: 'Premium Gift Sets', category: 'Products', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/27914a9b-4542-4ee3-9293-f419a8c8d45b.png' },
      { title: 'Sustainable Packaging', category: 'Packaging', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/fc1d8036-66f2-43ff-a3e5-aa91a66ae8b6.png' },
      { title: 'Eco-Friendly Wrapping', category: 'Packaging', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/67fdcb8c-bbca-4a43-bcf2-dee766050962.png' },
      { title: 'Beautiful Presentation', category: 'Packaging', image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/21c58bdc-dfad-4495-8593-39b513a5e92e.png' }
    ];

    return (
      <section className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[var(--charcoal-brown)] mb-4">Our Gallery</h1>
          <p className="text-lg text-[var(--midnight-teal)] mb-12">
            Explore our handcrafted creations and behind-the-scenes moments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-80 overflow-hidden group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium mb-1">{item.title}</p>
                    <p className="text-xs opacity-90">{item.category}</p>
                  </div>
                  <img 
                    src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/e35d5e2d-4fe2-4885-a012-710e579853c0.png" 
                    alt="Logo" 
                    className="absolute top-3 right-3 h-8 logo-watermark"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('GalleryContent error:', error);
    return null;
  }
}