const Features = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Powerful Features
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Everything you need to manage your credentials securely and
          efficiently. Built with simplicity, speed, and security in mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Feature Card */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🔐 Secure Storage
            </h3>
            <p className="text-gray-600 text-sm">
              All your passwords are stored securely using modern encryption
              techniques.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ⚡ Fast Access
            </h3>
            <p className="text-gray-600 text-sm">
              Instantly access your credentials anytime without unnecessary
              delays.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🧠 Simple Interface
            </h3>
            <p className="text-gray-600 text-sm">
              Clean and intuitive UI designed for ease of use and clarity.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📱 Responsive Design
            </h3>
            <p className="text-gray-600 text-sm">
              Works seamlessly across desktops, tablets, and mobile devices.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ✏️ Easy Management
            </h3>
            <p className="text-gray-600 text-sm">
              Add, edit, copy, and delete passwords effortlessly in one place.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ☁️ Local Control
            </h3>
            <p className="text-gray-600 text-sm">
              Your data stays on your device, giving you full ownership and
              privacy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
