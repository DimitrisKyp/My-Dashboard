import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/settingsSlice";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTheme from "@/themes/useTheme";

export default function RightPanel() {
  const dispatch = useDispatch();
  const themeVar = useSelector((state: RootState) => state.settings.theme);
  const theme = useTheme();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className={`flex ${theme.background.level1} ${theme.text.primary} rounded-lg p-6 shadow-lg`}>
      <nav className="sticky top-16 flex flex-col items-start space-y-6">
        <a href="#studies" className={`${theme.text.hover}`}>
          Studies
        </a>
        <a href="#projects" className={`${theme.text.hover}`}>
          Projects
        </a>
        <a href="#interests" className={`${theme.text.hover}`}>
          Personal Interests
        </a>
        <a href="#technologies" className={`${theme.text.hover}`}>
          Technologies
        </a>
        <a href="#experience" className={`${theme.text.hover}`}>
          Work Experience
        </a>
        <a href="#contact" className={`${theme.text.hover}`}>
          Contact Info
        </a>
        <button onClick={handleThemeToggle} className={`h-[40px] w-full rounded-lg p-1`}>
          <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} className="mr-2 inline-block" />
          Toggle theme
        </button>
      </nav>
    </div>
  );
}
