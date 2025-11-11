class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <button onClick={() => window.location.reload()} className="bg-[var(--terracotta)] text-white px-6 py-3 rounded-lg">
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function GalleryApp() {
  try {
    return (
      <div className="min-h-screen">
        <Header />
        <GalleryContent />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('GalleryApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <GalleryApp />
  </ErrorBoundary>
);