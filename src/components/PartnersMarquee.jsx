// PartnersMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";

// Replace with your actual logo imports or URLs
import airtelLogo from "../images/airtel.png";
import bsnlLogo from "../images/bsnl.png";
import dishtvLogo from "../images/dishtv.png";
import skynetLogo from "../images/skynet.png";
import railtelLogo from "../images/railtel_logo.png";

const partners = [
  { name: "Airtel", logo: airtelLogo },
  { name: "BSNL", logo: bsnlLogo },
  { name: "DishTV", logo: dishtvLogo },
  { name: "Skynet", logo: skynetLogo },
  { name: "RailTel", logo: railtelLogo },
];

export default function PartnersMarquee() {
  // Colors tuned to your site’s dark navy vibe
  const colors = {
    bg: "#0E2A47", // deep navy to match your hero
    border: "rgba(255,255,255,0.08)",
    labelBg: "rgba(255,255,255,0.10)",
    text: "#F1F5FF",
  };

  // const Label = () => (
  //   <span
  //     className="mr-0 inline-flex items-center rounded-full px-4 py-1 text-xs md:text-lg font-semibold tracking-wider uppercase"
  //     style={{
  //       background: colors.labelBg,
  //       color: colors.text,
  //       letterSpacing: "0.08em",
  //       whiteSpace: "nowrap",
  //     }}
  //     aria-label="Our Partners"
  //   >
  //     Our Partners :
  //   </span>
  // );

  return (
    <section
      className="w-full py-6 md:py-7"
      style={{
        backgroundColor: colors.bg,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {/* Moving track: Label comes first, then all logos */}
      <Marquee
        speed={60}
        pauseOnHover
        gradient={false}
        autoFill
        aria-label="Our partners logos marquee"
      >
        {partners.map((p, i) => (
          <div
            key={i}
            className="mx-8 flex items-center gap-4 opacity-90 transition-opacity hover:opacity-100"
          >
            <img
              src={p.logo || "/placeholder.svg"}
              alt={`${p.name} logo`}
              className="h-9 md:h-10 w-auto object-contain transition-all duration-200"
              // style={{
              //   filter: "grayscale(100%) contrast(105%) brightness(105%)",
              // }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.filter = "grayscale(0%)";
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.filter =
              //     "grayscale(100%) contrast(105%) brightness(105%)";
              // }}
            />
            <span
              className="text-sm md:text-base font-medium"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {p.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
