import { motion } from "framer-motion";
import {
  HiCodeBracket,
  HiCpuChip,
  HiLightBulb,
  HiRocketLaunch,
  HiShieldCheck,
  HiArrowRight,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-hidden font-sans">
      <title>Codexa Tech</title>
      {/* --- Hero Section --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="z-10 max-w-4xl"
        >
          <div className="badge badge-primary badge-outline mb-6 py-4 px-6 font-bold tracking-widest uppercase text-xs">
            where code meets Intelligence
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-[1.1]">
            Work Smarter with <br /> Codexa Tech
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with modern IT and AI solutions designed to
            remove complexity and drive real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
             className="btn btn-primary btn-lg rounded-full px-8 gap-3 group">
              Get Started{" "}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg rounded-full px-8 hover:bg-base-content hover:text-base-100">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- Core Philosophy Section --- */}
      <section className="py-24 bg-base-200/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core Philosophy
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-base-content/60 max-w-xl mx-auto">
              Technology should be simple, accessible, and built around your
              goals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <HiLightBulb className="w-10 h-10" />,
                title: "Clarity",
                desc: "No technical jargon. Just clear solutions that fit your vision perfectly.",
              },
              {
                icon: <HiShieldCheck className="w-10 h-10" />,
                title: "Reliability",
                desc: "Built on robust frameworks ensuring your tools work exactly when you need them.",
              },
              {
                icon: <HiRocketLaunch className="w-10 h-10" />,
                title: "Growth",
                desc: "Scalable systems designed to evolve seamlessly alongside your business.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative p-8 bg-base-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-300/50 hover:border-primary/30"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-base-content/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Services / SDLC Section --- */}
      <section className="py-28 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black">
              Solutions for a <br />
              <span className="text-primary italic">Digital Future</span>
            </h2>
            <p className="text-lg text-base-content/70">
              From full SDLC support to intelligent automation, we build the
              bridges between where your business is and where it needs to be.
            </p>

            <div className="grid gap-4">
              {[
                {
                  title: "Complete SDLC Support",
                  icon: <HiCodeBracket />,
                  color: "bg-blue-500/10 text-blue-500",
                },
                {
                  title: "AI Automation & Workflows",
                  icon: <HiCpuChip />,
                  color: "bg-purple-500/10 text-purple-500",
                },
                {
                  title: "Digital Transformation",
                  icon: <HiRocketLaunch />,
                  color: "bg-orange-500/10 text-orange-500",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-all cursor-default group"
                >
                  <div
                    className={`p-3 rounded-xl text-2xl transition-transform group-hover:scale-110 ${service.color}`}
                  >
                    {service.icon}
                  </div>
                  <span className="text-xl font-semibold">{service.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2"
          >
            <div className="mockup-window border bg-base-300 shadow-2xl overflow-hidden">
              <div className="bg-base-200 p-12 min-h-[300px] flex flex-col items-center justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="text-center">
                  <div className="loading loading-ring loading-lg text-primary mb-4"></div>
                  <h4 className="text-2xl font-bold tracking-tight">
                    System Optimized
                  </h4>
                  <p className="text-base-content/50 mt-2">
                    Integrating AI Workflow...
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-neutral rounded-[3rem] p-12 md:p-20 overflow-hidden text-neutral-content shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to unlock new possibilities?
              </h2>
              <p className="text-xl opacity-80 mb-12">
                Join the businesses scaling with confidence through Codexa
                Tech’s smart solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact"
                 className="btn btn-primary btn-lg rounded-full px-12">
                  Contact Us
                </Link>
                <Link to="/services"
                 className="btn btn-ghost btn-lg rounded-full px-12 border border-white/20">
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-base-300 text-center opacity-50 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Codexa Tech. Built for the modern
          web.
        </p>
      </footer>
    </div>
  );
};

export default Home;
