export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-50">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Contact Us</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions about our books or need a recommendation? We'd love to hear from you!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-amber-900">Email</h3>
              <p className="text-gray-700">thecozycornerespinosa@gmail.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-amber-900">Phone</h3>
              <p className="text-gray-700">+63123456789</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-amber-900">Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-700">Saturday: 10am - 4pm</p>
            </div>
          </div>
        </div>
        
        <a href="/" className="inline-block mt-8 text-amber-800 hover:text-amber-600">
          ← Back to Home
        </a>
      </main>
    </div>
  );
}