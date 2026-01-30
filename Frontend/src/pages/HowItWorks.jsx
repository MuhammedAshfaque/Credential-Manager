import {
  LockClosedIcon,
  KeyIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Create Your Secure Vault",
    desc: "Sign up and create your encrypted personal vault. Only you can access your data.",
    icon: LockClosedIcon,
  },
  {
    title: "Save Credentials Safely",
    desc: "Store logins, notes, and sensitive information with strong encryption.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Generate Strong Passwords",
    desc: "Use the built-in password generator to create secure, unique passwords.",
    icon: KeyIcon,
  },
  {
    title: "Access Anytime, Anywhere",
    desc: "Access your vault from any device with secure synchronization.",
    icon: ArrowPathIcon,
  },
  {
    title: "Stay in Control",
    desc: "Edit, update, or delete your credentials whenever you want.",
    icon: PencilSquareIcon,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How it Works
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A simple, secure, and reliable way to manage your passwords.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group bg-gray-800/60 backdrop-blur-md border border-white/10 
                           rounded-2xl p-6 hover:border-green-400/50 
                           hover:shadow-lg hover:shadow-green-500/10 
                           transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
                                bg-green-500/10 text-green-400 mb-4
                                group-hover:scale-110 transition">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
