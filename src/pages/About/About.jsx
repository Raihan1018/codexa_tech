
import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content pt-20 pb-12 overflow-hidden">
      <title>About Us </title>
      {/* --- Header Section --- */}
      <section className="container mx-auto px-4 text-center mb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            About <span className="text-primary italic">Us</span>
          </h1>
          <div className="w-24 h-2 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            At Codexa Tech, we believe technology should empower people — not
            overwhelm them.
          </p>
        </motion.div>
      </section>

      {/* --- Mission & Core Narrative --- */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Making AI & IT <span className="text-secondary">Accessible</span>
            </h2>
            <p className="text-lg leading-relaxed text-base-content/80">
              Founded with a mission to make modern IT and AI solutions
              accessible to businesses of all sizes, we focus on delivering
              tools that simplify operations, enhance productivity, and support
              long‑term growth. Our approach blends technical expertise with a
              deep understanding of real‑world business challenges.
            </p>
            <p className="text-lg leading-relaxed text-base-content/80">
              We specialize in IT support, AI automation, workflow optimization,
              and custom digital solutions. We are here to take care of
              everything—from developing an application to deployment and
              maintenance throughout the entire journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card bg-primary/10 rounded-[2rem] p-8 border border-primary/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-100 p-6 rounded-2xl shadow-sm text-center">
                  <div className="text-primary text-3xl mb-2 flex justify-center">
                    <HiOutlineUserGroup />
                  </div>
                  <div className="font-bold text-2xl">100%</div>
                  <div className="text-xs uppercase opacity-50 font-bold">
                    Personalized
                  </div>
                </div>
                <div className="bg-base-100 p-6 rounded-2xl shadow-sm text-center mt-8">
                  <div className="text-secondary text-3xl mb-2 flex justify-center">
                    <HiOutlineLightBulb />
                  </div>
                  <div className="font-bold text-2xl">Tailored</div>
                  <div className="text-xs uppercase opacity-50 font-bold">
                    Solutions
                  </div>
                </div>
                <div className="bg-base-100 p-6 rounded-2xl shadow-sm text-center">
                  <div className="text-accent text-3xl mb-2 flex justify-center">
                    <HiOutlineChartBar />
                  </div>
                  <div className="font-bold text-2xl">Smart</div>
                  <div className="text-xs uppercase opacity-50 font-bold">
                    Scaling
                  </div>
                </div>
                <div className="bg-base-100 p-6 rounded-2xl shadow-sm text-center mt-8">
                  <div className="text-success text-3xl mb-2 flex justify-center">
                    <HiOutlineShieldCheck />
                  </div>
                  <div className="font-bold text-2xl">Secure</div>
                  <div className="text-xs uppercase opacity-50 font-bold">
                    Partnerships
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Value Proposition (Cards) --- */}
      <section className="bg-base-200/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="opacity-60">
              Building a stronger, more efficient digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-base-100 shadow-xl p-8 border-b-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4">Personalized Service</h3>
              <p className="text-base-content/70">
                We take the time to understand your goals and unique workflow.
                We don’t believe in generic templates; we build thoughtful
                strategies that make a measurable difference.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-base-100 shadow-xl p-8 border-b-4 border-secondary"
            >
              <h3 className="text-2xl font-bold mb-4">Ahead of the Curve</h3>
              <p className="text-base-content/70">
                As technology evolves, we stay ahead so you don’t have to. Our
                work is driven by curiosity and a passion for unlocking new
                possibilities through smart technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-base-100 shadow-xl p-8 border-b-4 border-accent"
            >
              <h3 className="text-2xl font-bold mb-4">A True Partner</h3>
              <p className="text-base-content/70">
                Codexa Tech is more than a service provider—we’re your partner.
                We guide teams through digital transformation with clarity,
                reliability, and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA / Closing --- */}
      <section className="py-24 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">
            Ready to build something together?
          </h2>
          <Link to="/contact" className="btn btn-primary btn-wide rounded-full text-lg">
            Let's Connect
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
