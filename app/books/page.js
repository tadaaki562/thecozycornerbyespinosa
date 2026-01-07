export default function Books() {
  const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$14.99", genre: "Fiction" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "$16.99", genre: "Self-Help" },
    { id: 3, title: "The Silent Patient", author: "Alex Michaelides", price: "$15.99", genre: "Thriller" },
    { id: 4, title: "Educated", author: "Tara Westover", price: "$17.99", genre: "Memoir" },
    { id: 5, title: "Where the Crawdads Sing", author: "Delia Owens", price: "$16.99", genre: "Fiction" },
    { id: 6, title: "Project Hail Mary", author: "Andy Weir", price: "$18.99", genre: "Sci-Fi" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-light tracking-wide text-stone-800 hover:text-stone-600">The Cozy Corner</a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light text-stone-800 mb-4">Our Collection</h1>
          <p className="text-stone-600 mb-16 font-light">Handpicked reads for every mood</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="group">
                <div className="bg-white border border-stone-200 p-8 mb-4 hover:border-stone-400 transition-all duration-300">
                  <div className="aspect-[3/4] bg-stone-100 mb-6 flex items-center justify-center">
                    <span className="text-5xl opacity-30">📖</span>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wider">{book.genre}</span>
                    <h2 className="text-xl font-light text-stone-800 mt-2 mb-1 group-hover:text-stone-600">{book.title}</h2>
                    <p className="text-stone-500 text-sm mb-3">{book.author}</p>
                    <p className="text-stone-700 font-light">{book.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <a href="/" className="inline-block mt-16 text-stone-500 hover:text-stone-800 transition-colors">
            ← Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}