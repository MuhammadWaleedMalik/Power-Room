import React from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "lucide-react";

const navigationItems = [
  { label: "Home", hasDropdown: false },
  { label: "Solutions", hasDropdown: true },
  { label: "Insights", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "About Us", hasDropdown: false },
  { label: "Contact Us", hasDropdown: false },
];

export const Header = () => {
  return (
    <header className="w-full mb-[-50px] bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-2 sm:py-4">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 bg-white rounded-xl sm:rounded-2xl">
        <img
          className="w-28 sm:w-32 md:w-36 h-auto object-cover"
          alt="Frontend logo"
          src="/frontend-logo-2.png"
        />
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-2 sm:mt-0">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-xs sm:text-sm md:text-base">
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDownIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#111111]" />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Button className="h-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-[#000000] text-white rounded-lg sm:rounded-xl [font-family:'Inter',Helvetica] font-medium text-xs sm:text-sm md:text-base">
            Sign Up
          </Button>
          <Button className="h-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-[#f7ca45] text-[#111111] rounded-lg sm:rounded-xl [font-family:'Inter',Helvetica] font-medium text-xs sm:text-sm md:text-base hover:bg-[#f7ca45]/90">
            Start Free Trial
          </Button>
        </div>
      </nav>
    </header>
  );
};