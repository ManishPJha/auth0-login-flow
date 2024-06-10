import { useRoutes } from "react-router-dom";
import "./App.css";

import { routes } from "@/AppRoutes";

function App() {
  const AppContent = () => {
    const content = useRoutes(routes);

    return content;
  };

  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
