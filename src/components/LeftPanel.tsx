import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function LeftPanel() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      {/* Profile Picture */}
      <Image
        src="/logo.png" 
        alt="Profile Picture"
        width={120}
        height={120}
        className="rounded-full border-4 border-gray-700"
      />

      {/* Name and Job Title */}
      <h1 className="text-2xl font-bold">Your Name</h1>
      <p className="text-md text-gray-400">Frontend Developer</p>

      {/* Social Links */}
      <div className="flex space-x-4 mt-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white"/>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}  className="text-gray-400 hover:text-white"/>

        </a>
      </div>
    </div>
  );
}
