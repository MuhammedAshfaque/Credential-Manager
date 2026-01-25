const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Our Password Manager
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          In today’s digital world, keeping your credentials safe is more
          important than ever. Our Password Manager is designed to help you
          securely store, manage, and access all your passwords in one place.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          With a focus on strong encryption, simplicity, and performance, we
          ensure that your data remains private and fully under your control.
          No clutter, no confusion—just a clean and secure experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔐 Secure</h3>
            <p className="text-gray-600 text-sm">
              Your credentials are protected using modern security practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">⚡ Fast</h3>
            <p className="text-gray-600 text-sm">
              Access your passwords instantly whenever you need them.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🧠 Simple</h3>
            <p className="text-gray-600 text-sm">
              Clean and intuitive interface designed for everyday users.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📱 Modern</h3>
            <p className="text-gray-600 text-sm">
              Fully responsive design built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
