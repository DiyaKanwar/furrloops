function ShopContent() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const categories = ['All', 'For Cats', 'For Dogs', 'For Birds', 'Seasonal Loops', 'Gift Sets'];

    const products = [
      { name: 'Cozy Cat Collar', category: 'For Cats', oldPrice: '₹599', price: '₹300', colors: ['Pink', 'Blue', 'Beige'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/d8c4625e-8e28-4bb9-920a-31767bca2fdd.png' },
      { name: 'Cat Bow Tie Set', category: 'For Cats', oldPrice: '₹699', price: '₹350', colors: ['Red', 'Navy', 'Beige'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/522d6f1d-a6d1-4ddb-bdd2-fb9950bb513d.png' },
      { name: 'Cat Comfort Bundle', category: 'For Cats', oldPrice: '₹999', price: '₹500', colors: ['Cream', 'Pink', 'Blue'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/3a7c5b47-bd46-44f0-b696-7db04ed26e42.png' },
      { name: 'Cat Fashion Collar', category: 'For Cats', oldPrice: '₹649', price: '₹325', colors: ['Multi'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/9fe712df-559b-4b37-a54a-6be4e87e301b.png' },
      { name: 'Puppy Bandana', category: 'For Dogs', oldPrice: '₹799', price: '₹400', colors: ['Red', 'Green', 'Yellow'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/9feb69e9-9be7-4791-b884-05f6b95abeef.png' },
      { name: 'Dog Bow Tie', category: 'For Dogs', oldPrice: '₹599', price: '₹300', colors: ['Blue', 'Pink'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/8e30c197-03dd-4c1c-b46e-5dc7668ed1af.png' },
      { name: 'Dog Comfort Harness', category: 'For Dogs', oldPrice: '₹1,099', price: '₹550', colors: ['Navy', 'Brown'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/de3d78c4-6dc5-4437-8a0b-5f4f0fef7338.png' },
      { name: 'Dog Style Set', category: 'For Dogs', oldPrice: '₹899', price: '₹450', colors: ['Multi'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/bf8f5c80-20ce-4982-ab9e-9af5a9e11e28.png' },
      { name: 'Dog Fashion Bundle', category: 'For Dogs', oldPrice: '₹1,199', price: '₹600', colors: ['Red', 'Blue'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/9990a57a-807f-4d07-b60d-c79ffe01acbb.png' },
      { name: 'Bird Cozy Nest', category: 'For Birds', oldPrice: '₹899', price: '₹450', colors: ['Natural', 'White'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/1f246141-6798-41b4-bc2a-9c4a89e5985e.png' },
      { name: 'Bird Comfort Set', category: 'For Birds', oldPrice: '₹799', price: '₹400', colors: ['Beige', 'Green'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/08b5ed9b-1b0f-4411-92df-0b1d5c5924b5.png' },
      { name: 'Winter Sweater Set', category: 'Seasonal Loops', oldPrice: '₹1,299', price: '₹650', colors: ['Maroon', 'Navy'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/f3f518c4-a585-49ee-ba5a-3bff43b634f0.png' },
      { name: 'Seasonal Collection', category: 'Seasonal Loops', oldPrice: '₹1,499', price: '₹750', colors: ['Multi'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/98a1c881-59e9-4080-9fea-fb1e90a0b2e3.png' },
      { name: 'Premium Gift Set', category: 'Gift Sets', oldPrice: '₹2,499', price: '₹1,250', colors: ['Mixed'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/27914a9b-4542-4ee3-9293-f419a8c8d45b.png' },
      { name: 'Luxury Bundle', category: 'Gift Sets', oldPrice: '₹2,999', price: '₹1,500', colors: ['Premium'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/a58e0ce6-93fb-4ce0-8fe2-15fbe2ecd2b4.png' },
      { name: 'Complete Care Set', category: 'Gift Sets', oldPrice: '₹3,499', price: '₹1,750', colors: ['Deluxe'], image: 'https://app.trickle.so/storage/public/images/usr_1790b93758000001/6522819b-d559-49dc-9381-d194f4067880.png' }
    ];

    const filteredProducts = selectedCategory === 'All' 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    return (
      <section className="py-16 min-h-screen" data-name="shop-content" data-file="components/ShopContent.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[var(--charcoal-brown)] mb-4">Shop Our Collection</h1>
          <p className="text-lg text-[var(--midnight-teal)] mb-12">Handcrafted with love, designed for comfort</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                  selectedCategory === cat
                    ? 'bg-[var(--terracotta)] text-white'
                    : 'bg-white text-[var(--charcoal-brown)] border border-[var(--muted-lavender)] hover:border-[var(--terracotta)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-smooth">
                <div className="relative bg-[var(--soft-blush)] h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  />
                  <div className="sale-badge">
                    <div className="bg-[var(--terracotta)] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                      50% OFF
                    </div>
                  </div>
                  <img 
                    src="https://app.trickle.so/storage/public/images/usr_1790b93758000001/e35d5e2d-4fe2-4885-a012-710e579853c0.png" 
                    alt="Logo" 
                    className="absolute top-2 right-2 h-6 logo-watermark"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--charcoal-brown)] mb-2">{product.name}</h3>
                  <p className="text-sm text-[var(--midnight-teal)] opacity-70 mb-3">{product.category}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-2xl font-bold text-[var(--terracotta)]">{product.price}</p>
                    <p className="text-lg text-gray-400 line-through">{product.oldPrice}</p>
                  </div>
                  <div className="flex space-x-2 mb-4">
                    {product.colors.map((color, i) => (
                      <span key={i} className="text-xs bg-[var(--soft-blush)] px-3 py-1 rounded-full">{color}</span>
                    ))}
                  </div>
                  <button className="w-full bg-[var(--terracotta)] text-white py-3 rounded-lg hover:bg-[var(--golden-wheat)] transition-smooth font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ShopContent component error:', error);
    return null;
  }
}
