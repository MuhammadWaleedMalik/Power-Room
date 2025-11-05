import React from "react";

export const SocialProof = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 bg-[#fef9eb] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
        <div className="flex flex-col gap-3.5 flex-1">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight sm:leading-[48px] md:leading-[60px]">
            Social Proof
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000cc] text-base sm:text-lg md:text-2xl tracking-tight leading-tight sm:leading-snug">
            As seen in USA Wire Winner of
            the Stellar Business Award 2025
          </p>
        </div>
        <div className="relative flex-shrink-0 w-full md:w-auto">
          <img
            className="w-full max-w-[300px] sm:max-w-[360px] md:w-96 h-auto rounded-xl object-cover mx-auto md:mx-0"
            alt="Eu me lembro quando"
            src="/eu-me-lembro-quando-eu-achava-que-tinha-que-seguir--1.png"
          />
          <img
            className="absolute top-16 sm:top-24 md:top-[100px] -left-20 sm:-left-40 md:-left-[260px] w-[200px] sm:w-[280px] md:w-[342px] h-auto rounded-xl object-cover hidden md:block"
            alt="Voices of influence"
            src="/voices-of-influence--an-eloquent-speaker-s-journey-1.png"
          />
        </div>
      </div>
      <img
        className="absolute w-4 sm:w-6 h-auto"
        alt="Vector"
        src="/vector.svg"
      />
    </section>
  );
};