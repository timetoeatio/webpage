import React, { useState } from 'react';
import { Egg, Send, MapPin, Bot, ChevronRight, Settings, Clock, Globe2, Award, Users, Building2, Target, Phone } from 'lucide-react';

function App() {
  const [showTelegramInfo, setShowTelegramInfo] = useState(false);

  const handleStartOrderingVietnam = () => {
    window.open('https://t.me/NhaTrangFoodBot', '_blank');
  };

  const handleStartOrderingSpain = () => {
    window.open('https://t.me/TorreviejaFoodBot', '_blank');
  };

  const handleContact = () => {
    window.open('https://t.me/TorreviejaFoodBotSupport', '_blank');
    // const element = document.getElementById('company-info');
    // element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Egg className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-blue-600">TimeToEat<span className="text-yellow-400">.io</span></span>
            </div>
            <button 
              onClick={() => window.location.href = `https://app.${window.location.hostname}`}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Settings className="w-4 h-4" />
              <span>Admin Access</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Food Delivery Made <span className="text-blue-600">Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Order your favorite meals through our Telegram bot and get them delivered to your doorstep
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleStartOrderingVietnam}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center space-x-2 transform hover:scale-105 active:scale-95"
              >
                <span>Start Ordering (Vietnam)</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleStartOrderingSpain}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center space-x-2 transform hover:scale-105 active:scale-95"
              >
                <span>Start Ordering (Spain)</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Telegram Bot */}
            <div 
              className="bg-white p-8 rounded-xl shadow-sm cursor-pointer transform hover:scale-105 transition"
              onClick={() => setShowTelegramInfo(!showTelegramInfo)}
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Telegram Integration</h3>
              <p className="text-gray-600">Order seamlessly through our intuitive Telegram bot interface</p>
              {showTelegramInfo && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">Click "Start Ordering" to begin your journey with our Telegram bot!</p>
                </div>
              )}
            </div>

            {/* Fast Delivery */}
            <div className="bg-white p-8 rounded-xl shadow-sm transform hover:scale-105 transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Send className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery service to satisfy your hunger</p>
            </div>

            {/* Coverage */}
            <div className="bg-white p-8 rounded-xl shadow-sm transform hover:scale-105 transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Wide Coverage</h3>
              <p className="text-gray-600">Available in Vietnam and Spain, with more locations coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Company */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About TimeToEat.io</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing food delivery by combining cutting-edge technology with exceptional service.
              Our mission is to make great food accessible to everyone, everywhere.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Founded in 2020</h3>
              <p className="text-gray-600">Started with a vision to transform food delivery through technology</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">International Presence</h3>
              <p className="text-gray-600">Operating in multiple countries with plans for global expansion</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Consistently rated 4.8+ stars by our satisfied customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Where We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition">
              <img 
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80"
                alt="Vietnam"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <span className="text-white text-2xl font-bold p-8">Vietnam</span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition">
              <img 
                src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80"
                alt="Spain"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <span className="text-white text-2xl font-bold p-8">Spain</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div id="company-info" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Company Structure</h3>
                    <p className="text-gray-600">
                      Headquartered in Alicante with regional offices in Nha Trang.
                      Our team consists of 15 dedicated professionals working across technology, operations, and customer service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mission & Vision</h3>
                    <p className="text-gray-600">Our mission is to revolutionize food delivery through technology. We envision a world where quality food is accessible to everyone, delivered efficiently and sustainably.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Team</h3>
                    <p className="text-gray-600">
                      Founded in 2020 during the pandemic to help local kitchens survive, we've grown through the years into a multinational company
                      and now serve thousands of satisfied customers every month. 
                    </p>
                    <p className="text-gray-600">
                      Led by experienced professionals from the technology and food industry, our diverse team brings together expertise in AI,
                      logistics, and customer experience to deliver excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Modern office space"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Best Food Delivery Service</p>
                    <p className="text-sm text-gray-600">Tech Innovation Awards 2024</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleContact}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition flex items-center space-x-2 transform hover:scale-105 active:scale-95"
              >
                <span>Contact Us</span>
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Egg className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold text-blue-600">TimeToEat<span className="text-yellow-400">.io</span></span>
          </div>
          <p className="text-center text-gray-600">© 2025 SOLUCIONES DIGITALES INNOVADORAS SL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;