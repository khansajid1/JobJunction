import { useState } from "react";
import { Context } from "./main.jsx"; // Import the Context from main.jsx
import App from "./App.jsx";

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default AppWrapper; // Export the AppWrapper component