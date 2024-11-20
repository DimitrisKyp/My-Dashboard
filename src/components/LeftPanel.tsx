import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/settingsSlice";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../redux/store";

export default function LeftPanel() {

  const dispatch = useDispatch();
  const themeVar = useSelector((state: RootState) => state.settings.theme);
  console.log("themeVar", themeVar)

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  }

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
        <button
          onClick={handleThemeToggle}
          className={`h-[40px] w-full rounded p-1`}
        >
          <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} className="mr-2 inline-block" />
          Toggle theme        
      </button>      
      </div>
    </div>
  );
}
