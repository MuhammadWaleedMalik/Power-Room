import React from "react";

const footerSections = [
  {
    title: "Company",
    links: ["About", "Pricing", "Contact Us"],
  },
  {
    title: "Solutions",
    links: [
      
      "Rising Leaders",
      "Established Leaders",
      "HR Teams",
      "L&D Teams",
      
    ],
  },
  {
    title: "Insights",
    links: ["Case Studies", "Established Leaders"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy Policy", "Cookie Settings", "Legal Notice"],
  },
  {
    title: "Connect",
    links: ["LinkedIn"],
  },
  {
    title: "Contact Sales",
    links: ["+8801234567899", "Locations", "Contact Form"],
  },
];

export const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/voices-of-influence--an-eloquent-speaker-s-journey-1.png')",
      }}
    >
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-20 flex flex-col gap-12">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-gray-200 hover:text-white hover:underline transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="text-center font-serif text-2xl sm:text-3xl md:text-4xl leading-snug max-w-4xl mx-auto">
          PowerRoom exists to strengthen conversation and leadership skills
          across individuals, teams, companies, and societies.
        </div>
      </div>
    </footer>
  );
};
