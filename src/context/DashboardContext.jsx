import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

import { initialState, reducer } from "./dashboardReducer";

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = useCallback(() => {
    dispatch({ type: "THEME" });
  }, []);

  const toggleNotifications = useCallback(() => {
    dispatch({ type: "NOTIFY" });
  }, []);

  const toggleOnline = useCallback(() => {
    dispatch({ type: "ONLINE" });
  }, []);

  const setTaskStatus = useCallback((id, status) => {
    dispatch({
      type: "STATUS",
      id,
      status,
    });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      toggleTheme,
      toggleNotifications,
      toggleOnline,
      setTaskStatus,
    }),
    [
      state,
      toggleTheme,
      toggleNotifications,
      toggleOnline,
      setTaskStatus,
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider"
    );
  }

  return context;
}