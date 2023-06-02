import React from 'react';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

const About= () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="bg-yellow-400 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-gray-600 mt-2">Learn more about our team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">John Doe</h3>
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            <Transition in={showDescription} timeout={300} unmountOnExit>
              {(state) => (
                <p
                  className={`text-gray-600 mt-4 transition-all duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              )}
            </Transition>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Jane Smith</h3>
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            <Transition in={showDescription} timeout={300} unmountOnExit>
              {(state) => (
                <p
                  className={`text-gray-600 mt-4 transition-all duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              )}
            </Transition>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Mark Johnson</h3>
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            <Transition in={showDescription} timeout={300} unmountOnExit>
              {(state) => (
                <p
                  className={`text-gray-600 mt-4 transition-all duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
