export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">About The Cozy Corner</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to The Cozy Corner, your neighborhood online bookstore. We believe that every book 
            has a story, and every reader deserves a cozy place to discover their next favorite read.
          </p>
          <p className="text-gray-700 mb-4">
            Founded with a passion for literature and community, we hand-pick every book in our collection 
            to ensure quality recommendations for our readers.
          </p>
          <p className="text-gray-700">
            Whether you're looking for the latest bestseller or a hidden gem, we're here to help you 
            find your perfect book.
          </p>
        </div>
        
        <a href="/" className="inline-block mt-8 text-amber-800 hover:text-amber-600">
          ← Back to Home
        </a>
      </main>
    </div>
  );
}