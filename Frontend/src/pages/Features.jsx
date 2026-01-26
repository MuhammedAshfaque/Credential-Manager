const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Powerful <span className="text-green-400">Features</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          Everything you need to manage your credentials securely and
          efficiently. Built with simplicity, speed, and security in mind.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              title: "Secure Storage",
              icon: "🔐",
              desc: "All your passwords are stored securely using modern encryption techniques.",
            },
            {
              title: "Fast Access",
              icon: "⚡",
              desc: "Instantly access your credentials anytime without unnecessary delays.",
            },
            {
              title: "Simple Interface",
              icon: "🧠",
              desc: "Clean and intuitive UI designed for ease of use and clarity.",
            },
            {
              title: "Responsive Design",
              icon: "📱",
              desc: "Works seamlessly across desktops, tablets, and mobile devices.",
            },
            {
              title: "Easy Management",
              icon: "✏️",
              desc: "Add, edit, copy, and delete passwords effortlessly in one place.",
            },
            {
              title: "Local Control",
              icon: "☁️",
              desc: "Your data stays on your device, giving you full ownership and privacy.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 backdrop-blur-md border border-white/10
                         p-6 rounded-2xl hover:border-green-400/50
                         hover:shadow-lg hover:shadow-green-500/10
                         transition-all"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;
