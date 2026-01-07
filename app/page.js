export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-light tracking-wide text-stone-800">The Cozy Corner</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-light text-stone-800 mb-6 leading-tight">
            Your quiet space<br />for great books
          </h2>
          <p className="text-lg text-stone-600 font-light">
            Carefully curated reads for mindful moments
          </p>
        </div>
        
        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a href="/about" className="group bg-white border border-stone-200 p-8 hover:border-stone-400 transition-all duration-300">
            <h3 className="text-xl font-light text-stone-800 mb-3 group-hover:text-stone-600">About</h3>
            <p className="text-stone-500 font-light text-sm">Our story & philosophy</p>
          </a>
          
          <a href="/books" className="group bg-white border border-stone-200 p-8 hover:border-stone-400 transition-all duration-300">
            <h3 className="text-xl font-light text-stone-800 mb-3 group-hover:text-stone-600">Books</h3>
            <p className="text-stone-500 font-light text-sm">Explore the collection</p>
          </a>
          
          <a href="/contact" className="group bg-white border border-stone-200 p-8 hover:border-stone-400 transition-all duration-300">
            <h3 className="text-xl font-light text-stone-800 mb-3 group-hover:text-stone-600">Contact</h3>
            <p className="text-stone-500 font-light text-sm">Contact us here!</p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-stone-400 text-sm font-light">© 2026 The Cozy Corner</p>
        </div>
      </footer>
    </div>
  );
}