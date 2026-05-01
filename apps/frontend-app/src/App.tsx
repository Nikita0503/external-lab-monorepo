import { DevMenuProvider } from "./contexts/DevMenuContext";
import AppRouter from "./router/AppRouter";
import "./theme/colors.css";

const App = () => {
  return (
    <DevMenuProvider>
      <AppRouter />
    </DevMenuProvider>
  );
};

export default App;
