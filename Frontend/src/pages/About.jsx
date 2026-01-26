const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-green-400">Our Password Manager</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          In today’s digital world, keeping your credentials safe is more
          important than ever. Our Password Manager is designed to help you
          securely store, manage, and access all your passwords in one place.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          With a focus on strong encryption, simplicity, and performance, we
          ensure that your data remains private and fully under your control.
          No clutter, no confusion—just a clean and secure experience.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {[
            {
              title: "Secure",
              icon: "🔐",
              desc: "Your credentials are protected using modern security practices.",
            },
            {
              title: "Fast",
              icon: "⚡",
              desc: "Access your passwords instantly whenever you need them.",
            },
            {
              title: "Simple",
              icon: "🧠",
              desc: "Clean and intuitive interface designed for everyday users.",
            },
            {
              title: "Modern",
              icon: "📱",
              desc: "Fully responsive design built with modern web technologies.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 backdrop-blur-md border border-white/10
                         p-6 rounded-2xl hover:border-green-400/50
                         hover:shadow-lg hover:shadow-green-500/10
                         transition-all"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
