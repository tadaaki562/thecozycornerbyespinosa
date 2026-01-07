export default function About() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-light tracking-wide text-stone-800 hover:text-stone-600">The Cozy Corner</a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 max-w-3xl">
        <h1 className="text-4xl font-light text-stone-800 mb-16">About Us</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-light text-stone-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                The Cozy Corner began with a simple idea: create a quiet space where readers 
                can discover books that truly matter.
              </p>
              <p>
                In a world of endless recommendations and algorithms, we believe in the power 
                of thoughtful curation. Every book in our collection is chosen with care, 
                selected for its ability to inspire, comfort, or transform.
              </p>
              <p>
                We're not just selling books—we're creating moments of connection between 
                readers and stories that resonate.
              </p>
            </div>
          </section>

          <section className="pt-12 border-t border-stone-200">
            <h2 className="text-2xl font-light text-stone-800 mb-6">What We Believe</h2>
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-start">
                <span className="mr-3 text-stone-400">—</span>
                <span>Quality over quantity in every selection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-stone-400">—</span>
                <span>Books have the power to change perspectives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-stone-400">—</span>
                <span>Reading should be a mindful, intentional practice</span>
              </li>
            </ul>
          </section>
        </div>
        
        <a href="/" className="inline-block mt-16 text-stone-500 hover:text-stone-800 transition-colors">
          ← Back to Home
        </a>
      </main>
    </div>
  );
}