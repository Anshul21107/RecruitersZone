import React from 'react';
import backgroundImage from "../Image/title.png";

const HomePage = () => {
  return (
    <div className="home-page min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-cover text-white pb-8 md:pb-0" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
    }}>
      <header className="text-center mt-20 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to RecruitersZone</h1>
        <p className="text-lg">Find the best talents for your business.</p>
      </header>
      <section className="features flex flex-col md:flex-row justify-center mt-8 text-black">
        <div className="feature bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Post Jobs</h2>
          <p>Advertise your job openings to reach potential candidates.</p>
        </div>
        <div className="feature bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Search Candidates</h2>
          <p>Explore our talent database to find the perfect match for your company.</p>
        </div>
        <div className="feature bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Apply Online</h2>
          <p>Applicants can easily apply to job opportunities through our platform.</p>
        </div>
      </section>
      <section className="cta mt-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-8">Start Hiring Today!</h2>
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
