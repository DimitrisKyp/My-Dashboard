import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "../utils/typewriter";
import useTheme from "@/themes/useTheme";

export default function LeftPanel() {
  const descriptions = ["Frontend Developer", "React Enthusiast", "UI/UX Designer"];
  const theme = useTheme();

  return (
    <div
      className={`flex w-[80%] flex-col items-center gap-4 rounded-lg p-6 shadow-lg ${theme.background.level1} ${theme.text.primary}`}
    >
      {/* Photo */}
      <Image
        src="/logo.png"
        alt="Profile Picture"
        width={120}
        height={120}
        className="h-32 w-32 rounded-full border-4 border-[#2a2e33] shadow-md"
      />
      {/* Name */}
      <h1 className={`text-2xl font-bold ${theme.text.primary}`}>Dimitris Kyprianou</h1>

      {/* Description */}
      <Typewriter descriptions={descriptions} />

      {/* Details */}
      <div className={`flex w-full flex-col gap-2 p-4 text-sm ${theme.text.secondary}`}>
        <div className="flex w-full justify-between">
          <span>📍 Residence:</span> <span>Greece</span>
        </div>
        <div className="flex w-full justify-between">
          <span>🏙️ City:</span> <span>Thessaloniki</span>
        </div>
        <div className="flex w-full justify-between">
          <span>🎂 Age:</span> <span>27</span>
        </div>
      </div>

      {/* Social Links */}
      <div className={`flex w-full items-center justify-around rounded-lg p-1 ${theme.background.level2}`}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={`${theme.text.secondary} ${theme.text.hover}`} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={`${theme.text.secondary} ${theme.text.hover}`} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className={`${theme.text.secondary} ${theme.text.hover}`} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={`${theme.text.secondary} ${theme.text.hover}`} />
        </a>
      </div>

      {/* Download Button */}
      <button
        className={`mt-4 rounded-lg px-4 py-2 text-sm font-semibold shadow-md ${theme.buttons.primary} ${theme.text.primary}hover:bg-[#13bbc2]`}
        onClick={() => {
          alert("Downloading CV...");
        }}
      >
        Download CV
      </button>
    </div>
  );
}
