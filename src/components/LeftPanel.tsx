import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LeftPanel() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-[#23272d] p-6 text-[#ffffff] shadow-lg">
      {/* Photo */}
      <Image
        src="/logo.png"
        alt="Profile Picture"
        width={120}
        height={120}
        className="h-32 w-32 rounded-full border-4 border-[#11a5ac] shadow-md"
      />
      {/* Name */}
      <h1 className="text-2xl font-bold text-[#ffffff]">Dimitris Kyprianou</h1>

      {/* Description */}
      <p className="text-center text-sm text-[#d1d5db]">Frontend Developer</p>

      {/* Details */}
      <div className="flex flex-col gap-2 text-sm text-[#d1d5db]">
        <div className="flex w-full justify-between">
          <span>📍 Residence:</span> <span>Country Name</span>
        </div>
        <div className="flex w-full justify-between">
          <span>🏙️ City:</span> <span>City Name</span>
        </div>
        <div className="flex w-full justify-between">
          <span>🎂 Age:</span> <span>Your Age</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex w-full items-center justify-around text-[#11a5ac]">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-[#13bbc2] hover:text-white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-[#13bbc2] hover:text-white" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-[#13bbc2] hover:text-white" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-[#13bbc2] hover:text-white" />
        </a>
      </div>

      {/* Download Button */}
      <button
        className="mt-4 rounded bg-[#11a5ac] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#13bbc2]"
        onClick={() => {
          alert("Downloading CV...");
        }}
      >
        Download CV
      </button>
    </div>
  );
}
