import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctor from '../components/TopDoctor';
import Banner from '../components/Banner';
import { assets } from '../assets/assets';

function Home() {
  const healthTips = [
    {
      title: "Regular Check-ups",
      description: "Schedule annual physical exams to detect health issues early.",
      icon: "🩺"
    },
    {
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily for optimal body function.",
      icon: "💧"
    },
    {
      title: "Balanced Diet",
      description: "Include fruits, vegetables, and whole grains in your meals.",
      icon: "🍎"
    },
    {
      title: "Exercise Regularly",
      description: "Aim for 30 minutes of physical activity most days of the week.",
      icon: "🏃"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Existing sections */}
      <Header />
      <SpecialityMenu />
      <TopDoctor />
      <Banner />
      
      {/* New Health Tips Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12">
            Health <span className="text-[#5f6fff]">Tips</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthTips.map((tip, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-medium mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;