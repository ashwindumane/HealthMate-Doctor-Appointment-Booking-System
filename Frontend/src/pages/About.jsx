import React from 'react';
import { assets } from '../assets/assets';
import { Clock, MapPin, Heart } from 'lucide-react'; // icons

function About() {
  return (
    <div className="relative">
      {/* About Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Image */}
          <img
            className="w-full rounded-2xl shadow-lg"
            src={assets.about_image}
            alt="About Us"
          />

          {/* Text */}
          <div className="space-y-6 text-gray-600">
            <h2 className="text-3xl font-bold text-gray-800">
              About <span className="text-indigo-600">Us</span>
            </h2>
            <p>
              HealthMate lets users quickly book appointments with specialized doctors. 
              Browse by medical expertise, view doctor profiles, and choose time slots. 
              No more long queues or waiting — healthcare is now just a click away.
            </p>
            <p>
              Doctors get access to a personalized dashboard to manage appointments, 
              track patient progress, and simplify consultation workflows. 
              Our platform ensures smooth communication and efficiency.
            </p>

            {/* Vision Box */}
            <div className="bg-white border-l-4 border-indigo-600 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Our Vision</h3>
              <p>
                To revolutionize healthcare access through seamless digital solutions. 
                We aim to connect patients and doctors with speed, trust, and simplicity. 
                HealthMate envisions a future where healthcare is accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">
          Why <span className="text-indigo-600">Choose Us</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all text-center">
            <Clock className="mx-auto mb-4 text-indigo-600" size={36} />
            <h3 className="font-semibold text-lg mb-2">Efficiency</h3>
            <p className="text-gray-600">
              Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all text-center">
            <MapPin className="mx-auto mb-4 text-indigo-600" size={36} />
            <h3 className="font-semibold text-lg mb-2">Convenience</h3>
            <p className="text-gray-600">
              Access a network of trusted healthcare professionals in your area.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all text-center">
            <Heart className="mx-auto mb-4 text-indigo-600" size={36} />
            <h3 className="font-semibold text-lg mb-2">Personalization</h3>
            <p className="text-gray-600">
              Tailored recommendations and reminders to help you stay on top of your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
