const SocialLinks = () => {
  const socialData = [
    {
      id: 1,
      iconPath: "/icons/facebook.svg",
      url: "https://facebook.com/CodeXaTech",
      label: "Facebook",
    },
    {
      id: 2,
      iconPath: "/icons/linkedin.svg",
      url: "https://linkedin.com/company/codexatech",
      label: "LinkedIn",
    },
    {
      id: 3,
      iconPath: "/icons/twitter.svg",
      url: "https://twitter.com/CodeXaTech",
      label: "X (Twitter)",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialData.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-2 rounded-full "
        >
          <img
            src={social.iconPath}
            alt={social.label}
            className="h-5 w-5 transition-all hover:scale-110 duration-300 ease-in-out"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
