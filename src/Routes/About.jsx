
const AboutPage = () => {
  return (
    <div>
      {/* Parallax Hero Section */}
      <div
        className="relative h-96 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} // Replace with your image URL
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">About Dyvos</h1>
        </div>
      </div>

      {/* About Content Section */}
      <section className="py-12 px-6 text-center bg-neutral-950 text-white">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At Dyvos, we’re more than just a service provider. We’re a team of dedicated professionals
          committed to supporting your business at every step. Whether it’s managing financial
          operations or scaling your growth, we are here to help.
        </p>
      </section>

      {/* Parallax Vision Section */}
      <div
        className="relative h-80 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} // Replace with another image URL
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-3xl font-bold">Our Vision</h2>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-neutral-950 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Join Dyvos Today</h3>
        <p className="text-lg text-gray-300 mb-6">
          Let’s work together to grow your business and achieve your goals.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
