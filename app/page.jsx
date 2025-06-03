import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/hero.jpg"
            alt="Beautiful travel destination"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
        <div className="container mx-auto px-8 max-w-5xl relative z-10 text-white">
          <h1 className="container max-w-7xl text-4xl md:text-7xl font-bold mb-6">
            Discover Your Dream Destination
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Experience unforgettable journeys to the world's most breathtaking
            locations.
          </p>
          <a
            href="#booking"
            className="bg-green-800 hover:bg-green-700 text-white px-5 py-3 rounded-lg text-base font-medium transition-colors inline-block"
          >
            Book Now
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
      {/* Services Section */}
      <section
        id=""
        className="py-20 bg-gradient-to-r from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flight Booking',
                emoji: '✈️',
                color: 'blue',
                description:
                  'Premium flight booking services tailored to your preferences and budget.',
              },
              {
                title: 'Hotel Reservations',
                emoji: '🏨',
                color: 'amber',
                description:
                  'Exclusive hotel reservations at the best locations worldwide.',
              },
              {
                title: 'Custom Tours',
                emoji: '🗺️',
                color: 'emerald',
                description:
                  'Personalized custom tours designed for unforgettable experiences.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-700"
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 text-sm font-medium flex items-center text-green-600 hover:text-green-800">
                  Learn more <span className="ml-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Popular Destinations */}
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Bali', 'Paris', 'Tokyo'].map((destination, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                <Image
                  src={`/destination-${index + 1}.jpg`}
                  alt={destination}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-bold">{destination}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Summer Escape',
                discount: '25% OFF',
                description:
                  'Book your summer vacation before May and get 25% discount on selected destinations.',
              },
              {
                title: 'Honeymoon Package',
                discount: 'FREE Upgrade',
                description:
                  'Complimentary room upgrade and romantic dinner for honeymoon couples.',
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{offer.title}</h3>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {offer.discount}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <button className="text-green-600 font-medium hover:text-green-800 transition-colors">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Experienced Team',
                description: 'Over 15 years in the travel industry',
                icon: '🌟',
              },
              {
                title: 'Best Price Guarantee',
                description: 'We match any comparable price you find',
                icon: '💰',
              },
              {
                title: '24/7 Support',
                description: 'Help available whenever you need it',
                icon: '🛎️',
              },
              {
                title: 'Tailored Experiences',
                description: 'Custom itineraries designed for you',
                icon: '✨',
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Alex Chen',
                quote:
                  'The trip to Bali was perfectly organized. Every detail was taken care of!',
              },
              {
                name: 'Sarah Johnson',
                quote:
                  "Our family vacation exceeded all expectations. We'll definitely book again!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact/Booking Section */}
      <section
        id="booking"
        className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Book Your Next Adventure
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left column - Info */}
              <div className="md:w-1/2 bg-green-800 p-12 text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-0">
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M0,0 L100,0 L100,100 L0,100 Z"
                    />
                    <path
                      fill="currentColor"
                      d="M10,10 L90,10 L90,90 L10,90 Z"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Begin Your Adventure
                  </h2>
                  <p className="text-indigo-100 mb-8 text-lg">
                    Let us help you create memories that last a lifetime. Our
                    travel experts are ready to craft your perfect journey.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="mr-4 text-indigo-200 text-xl">✓</div>
                      <p>
                        Personalized itineraries tailored to your preferences
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 text-indigo-200 text-xl">✓</div>
                      <p>Exclusive deals on flights, hotels, and activities</p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 text-indigo-200 text-xl">✓</div>
                      <p>Dedicated support throughout your entire journey</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-semibold mb-6">
                  Book Your Consultation
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Destination
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                      <option>Select destination</option>
                      <option>Bali</option>
                      <option>Paris</option>
                      <option>Tokyo</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button className="w-full bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Schedule Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-green-800 text-gray-100 py-12">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">TravelAgency</h3>
              <p className="text-gray-100">Your journey begins with us.</p>
            </div>
            <div>
              <h4 className="text-base font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-100">
                <li>Destinations</li>
                <li>Services</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-100">
                <li>info@travelagency.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social, index) => (
                  <span
                    key={index}
                    className="text-gray-100 cursor-pointer hover:text-white transition-colors"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-text-gray-100 mt-12 pt-8 text-center text-gray-100">
            <p>
              © {new Date().getFullYear()} TravelAgency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
