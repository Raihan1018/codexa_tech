import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Social Links Section */}
        <div className="mb-5">
          <SocialLinks />
        </div>

        {/* Divider Line */}
        <hr className="w-24 border-gray-300 mb-3" />

        {/* Branding & Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm tracking-tight">
            © {currentYear} All regards{" "}
            <span className="font-bold  hover:text-indigo-600 transition-colors cursor-pointer">
              <a
                href="https://codexatech.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                codexatech
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
