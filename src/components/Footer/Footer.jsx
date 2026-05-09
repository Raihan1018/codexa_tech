import SocialLinks from "../SocialLinks/SocialLinks";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-base-300 bg-base-100/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <SocialLinks />
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-base-content/70 tracking-wide">
            © {currentYear} All rights reserved by{" "}
            <a
              href="https://codexatech.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-secondary transition-colors duration-300"
            >
              CodeXaTech
            </a>
          </p>

          <p className="text-xs text-base-content/50 mt-2">
            Crafted with innovation & creativity 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
