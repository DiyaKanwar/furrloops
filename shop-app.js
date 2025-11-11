class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--ivory-white)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--charcoal-brown)] mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="bg-[var(--terracotta)] text-white px-6 py-3 rounded-lg hover:bg-[var(--golden-wheat)] transition-smooth">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ShopApp() {
  try {
    return (
      <div className="min-h-screen" data-name="shop-app" data-file="shop-app.js">
        <SaleBanner />
        <Header />
        <ShopContent />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ShopApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ShopApp />
  </ErrorBoundary>
);