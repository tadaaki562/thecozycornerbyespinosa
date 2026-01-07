export default function Books() {
  const books = [
    { 
      id: 1, 
      title: "The Midnight Library", 
      author: "Matt Haig", 
      price: "$14.99", 
      genre: "Fiction",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg"
    },
    { 
      id: 2, 
      title: "Atomic Habits", 
      author: "James Clear", 
      price: "$16.99", 
      genre: "Self-Help",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg"
    },
    { 
      id: 3, 
      title: "The Silent Patient", 
      author: "Alex Michaelides", 
      price: "$15.99", 
      genre: "Thriller",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582759969i/40097951.jpg"
    },
    { 
      id: 4, 
      title: "Educated", 
      author: "Tara Westover", 
      price: "$17.99", 
      genre: "Memoir",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg"
    },
    { 
      id: 5, 
      title: "Where the Crawdads Sing", 
      author: "Delia Owens", 
      price: "$16.99", 
      genre: "Fiction",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"
    },
    { 
      id: 6, 
      title: "Project Hail Mary", 
      author: "Andy Weir", 
      price: "$18.99", 
      genre: "Sci-Fi",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg"
    }
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
                  <div className="aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
                    <img 
                      src={book.image} 
                      alt={`${book.title} by ${book.author}`}
                      className="w-full h-full object-cover"
                    />
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