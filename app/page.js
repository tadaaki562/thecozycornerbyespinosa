export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-amber-900 mb-8">
          The Cozy Corner
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          A cozy online bookstore with hand-picked recommendations
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-amber-800 mb-2">About</h2>
            <p className="text-gray-600">Learn about our story</p>
          </a>
          
          <a href="/books" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-amber-800 mb-2">Books</h2>
            <p className="text-gray-600">Browse our collection</p>
          </a>
          
          <a href="/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-amber-800 mb-2">Contact</h2>
            <p className="text-gray-600">Get in touch with us</p>
          </a>
        </div>
      </main>
    </div>
  );
}