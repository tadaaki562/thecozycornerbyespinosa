export default function Books() {
  const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$14.99" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "$16.99" },
    { id: 3, title: "The Silent Patient", author: "Alex Michaelides", price: "$15.99" },
    { id: 4, title: "Educated", author: "Tara Westover", price: "$17.99" },
    { id: 5, title: "Where the Crawdads Sing", author: "Delia Owens", price: "$16.99" },
    { id: 6, title: "Project Hail Mary", author: "Andy Weir", price: "$18.99" }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Our Book Collection</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-amber-200 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <h2 className="text-xl font-semibold text-amber-900 mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <p className="text-amber-800 font-bold">{book.price}</p>
            </div>
          ))}
        </div>
        
        <a href="/" className="inline-block text-amber-800 hover:text-amber-600">
          ← Back to Home
        </a>
      </main>
    </div>
  );
}