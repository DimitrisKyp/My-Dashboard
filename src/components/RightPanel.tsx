import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/settingsSlice";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RightPanel() {
  const dispatch = useDispatch();
  const themeVar = useSelector((state: RootState) => state.settings.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className="sticky top-16 flex flex-col items-start space-y-6">
      <a href="#studies" className="text-lg text-gray-400 transition duration-200 hover:text-white">
        Studies
      </a>
      <a href="#projects" className="text-lg text-gray-400 transition duration-200 hover:text-white">
        Projects
      </a>
      <a href="#interests" className="text-lg text-gray-400 transition duration-200 hover:text-white">
        Personal Interests
      </a>
      <a href="#technologies" className="text-lg text-gray-400 transition duration-200 hover:text-white">
        Technologies
      </a>
      <a href="#experience" className="text-lg text-gray-400 transition duration-200 hover:text-white">
        Work Experience
      </a>
      <a href="#contact" className="text-lg text-gray-400 transition duration-200 hover:text-white">
        Contact Info
      </a>
      <button onClick={handleThemeToggle} className={`h-[40px] w-full rounded p-1`}>
        <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} className="mr-2 inline-block" />
        Toggle theme
      </button>
    </nav>
  );
}
