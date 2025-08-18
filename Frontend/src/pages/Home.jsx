import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctor from '../components/TopDoctor';
import Banner from '../components/Banner';

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
    <div className="overflow-x-hidden">
      {/* Header Section - Reduced bottom margin */}
      <Header />
      
      {/* Speciality Menu - Adjusted padding */}
      <SpecialityMenu />
      
      {/* Top Doctors - Tightened layout */}
      <TopDoctor />
      
      {/* Banner - Reduced margins */}
      <Banner />
      
      {/* Health Tips Section - More compact layout */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-center mb-8">
            Health <span className="text-[#5f6fff]">Tips</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {healthTips.map((tip, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl sm:text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-lg sm:text-xl font-medium mb-1">{tip.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;