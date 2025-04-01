// MainScreen.tsx
import { useMediaQuery } from "react-responsive";
import BaseMainScreen from "../components/BaseMainScreen";
import { mainScreenStyles } from "../styles/mainScreenStyles";

const MainScreen = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 700px)" });
  const styles = mainScreenStyles(isDesktop);
  
  return <BaseMainScreen isDesktop={isDesktop} styles={styles} />;
};

export default MainScreen;
