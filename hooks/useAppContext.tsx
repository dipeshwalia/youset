import React, { createContext, useContext } from "react";

type AppStateType = {
  appState: {
    preferredPackage: number;
    selected: boolean;
  };
  setAppState: React.Dispatch<React.SetStateAction<AppStateType>>;
};

const defaults: AppStateType = {
  appState: { preferredPackage: 2, selected: false },
  setAppState: () => {},
};

const AppContext = createContext(defaults);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = React.useState(defaults);

  const config = {
    ...appState,
    setAppState,
  };

  return <AppContext.Provider value={config}>{children}</AppContext.Provider>;
};

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

export { AppContextProvider, useAppContext };
