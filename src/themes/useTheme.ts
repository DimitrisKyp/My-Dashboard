import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { darkTheme, lightTheme } from "./theme";

const useTheme = () => {
  const theme = useSelector((state: RootState) => state.settings.theme);
  return theme === "light" ? lightTheme : darkTheme;
};

export default useTheme;
