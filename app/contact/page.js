export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-light tracking-wide text-stone-800 hover:text-stone-600">The Cozy Corner</a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 max-w-2xl">
        <h1 className="text-4xl font-light text-stone-800 mb-16">Get in Touch</h1>
        
        <div className="space-y-12">
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            Have a question about our books? Looking for a recommendation? 
            We'd love to hear from you.
          </p>

          <div className="bg-white border border-stone-200 p-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-400 mb-2">Email</h3>
                <a href="mailto:thecozycornerespinosa@gmail.com" className="text-stone-700 hover:text-stone-900 transition-colors">
                  thecozycornerespinosa@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-400 mb-2">Phone</h3>
                <p className="text-stone-700">+63 123 456 789</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-400 mb-3">Hours</h3>
                <div className="space-y-1 text-stone-700">
                  <p className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-light">9am – 6pm</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-light">10am – 4pm</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-light">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a href="/" className="inline-block mt-16 text-stone-500 hover:text-stone-800 transition-colors">
          ← Back to Home
        </a>
      </main>
    </div>
  );
}